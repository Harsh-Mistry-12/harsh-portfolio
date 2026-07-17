import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function parseDevToMarkdown(markdown: string) {
  if (!markdown) return [];
  const lines = markdown.split(/\r?\n/);
  const blocks: { type: "heading" | "paragraph" | "code" | "list"; text: string }[] = [];
  let currentParagraph = "";
  let inCodeBlock = false;
  let codeContent = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        blocks.push({ type: "code", text: codeContent.trim() });
        codeContent = "";
        inCodeBlock = false;
      } else {
        if (currentParagraph) {
          blocks.push({ type: "paragraph", text: currentParagraph.trim() });
          currentParagraph = "";
        }
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent += lines[i] + "\n";
      continue;
    } else if (line.startsWith("##") || line.startsWith("#") || line.startsWith("###")) {
      if (currentParagraph) {
        blocks.push({ type: "paragraph", text: currentParagraph.trim() });
        currentParagraph = "";
      }
      const title = line.replace(/^#+\s+/, "");
      blocks.push({ type: "heading", text: title });
    } else if (line.startsWith("- ") || line.startsWith("* ") || line.startsWith("1. ") || line.startsWith("● ")) {
      if (currentParagraph) {
        blocks.push({ type: "paragraph", text: currentParagraph.trim() });
        currentParagraph = "";
      }
      const cleanItem = line.replace(/^([-*●]|\d+\.)\s+/, "");
      blocks.push({ type: "list", text: cleanItem.trim() });
    } else if (line === "") {
      if (currentParagraph) {
        blocks.push({ type: "paragraph", text: currentParagraph.trim() });
        currentParagraph = "";
      }
    } else {
      currentParagraph += (currentParagraph ? " " : "") + line;
    }
  }

  if (currentParagraph) {
    blocks.push({ type: "paragraph", text: currentParagraph.trim() });
  }
  if (inCodeBlock && codeContent) {
    blocks.push({ type: "code", text: codeContent.trim() });
  }

  return blocks;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const apiKey = process.env.DEVTO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key is not configured" }, { status: 500 });
  }

  try {
    const res = await fetch("https://dev.to/api/articles/me/published", {
      headers: {
        "api-key": apiKey,
        "accept": "application/vnd.forem.api-v1+json",
        "user-agent": "portfolio-app",
      },
      next: { revalidate: 60 } // cache for 60 seconds
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch from dev.to" }, { status: res.status });
    }

    const data = await res.json();
    const formattedBlogs = data.map((article: any) => {
      // Find all image URLs in the body markdown to enrich images gallery
      const imgRegex = /!\[.*?\]\((.*?)\)/g;
      const bodyImages: string[] = [];
      let match;
      while ((match = imgRegex.exec(article.body_markdown || "")) !== null) {
        if (match[1]) {
          bodyImages.push(match[1]);
        }
      }

      let cover = article.cover_image || "/projects/tradeiq/cover.png";
      
      // Extract original image URL if it goes through the dev.to cover image proxy
      if (cover.includes("media2.dev.to/dynamic/image/") && cover.includes("/https")) {
        const parts = cover.split("/https");
        if (parts.length > 1) {
          cover = "https" + decodeURIComponent(parts[1]);
        }
      }

      const imagesList = cover ? [cover, ...bodyImages] : bodyImages;

      return {
        slug: article.slug,
        title: article.title,
        shortDescription: article.description,
        tags: article.tag_list || [],
        readTime: `${article.reading_time_minutes} min read`,
        publishedAt: article.published_at,
        updatedAt: article.published_at,
        coverImage: cover,
        images: imagesList.length > 0 ? imagesList : ["/projects/tradeiq/cover.png"],
        content: parseDevToMarkdown(article.body_markdown || ""),
      };
    });

    if (slug) {
      const singleBlog = formattedBlogs.find((b: any) => b.slug === slug);
      if (!singleBlog) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }
      return NextResponse.json(singleBlog);
    }

    return NextResponse.json(formattedBlogs);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
