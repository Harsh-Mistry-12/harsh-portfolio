import React from "react";
import { personalInfo, aboutMe, experience, skills, education } from "@/lib/data";

export default function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://harshmistry.com";

  const allSkills = Object.values(skills).flat();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: aboutMe.background,
    url: baseUrl,
    image: `${baseUrl}/photo.jpg`,
    email: `mailto:${personalInfo.email}`,
    telephone: personalInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gandhinagar",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
    sameAs: [
      personalInfo.github,
      personalInfo.linkedin,
      personalInfo.gitlab,
    ],
    alumniOf: education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
    })),
    worksFor: experience.map((exp) => ({
      "@type": "Organization",
      name: exp.company,
    })),
    knowsAbout: allSkills,
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": baseUrl,
    url: baseUrl,
    name: `${personalInfo.name} | ${personalInfo.title}`,
    description: aboutMe.background,
    mainEntity: {
      "@id": `${baseUrl}/#person`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([personSchema, profilePageSchema]),
      }}
    />
  );
}
