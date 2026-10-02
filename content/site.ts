import type { StaticImageData } from "next/image";
import pgs from "@/public/projects/pgsfotografia-pl.jpg";
import flyin from "@/public/projects/flyinvintage-pl.jpg";

export const site = {
  url: "https://wojciechsarota.pl",
  name: "Wojciech Sarota",
  role: "Senior Software Engineer",
  headline: "Senior Software Engineer, Java and Spring Boot",
  location: "Kraków, Poland",
  email: "wojciech.sarota.1997@gmail.com",
  phone: "+48533420141",
  phoneDisplay: "+48 533 420 141",
  linkedin: "https://www.linkedin.com/in/wojciech-sarota-b9a3a71b8/",
  linkedinHandle: "wojciech-sarota",
  summary:
    "Senior Software Engineer with 6+ years of experience delivering secure and scalable fintech solutions. Specialized in Java and Spring Boot microservices. I enjoy translating complex business requirements into practical technical solutions.",
} as const;

export const jobs = [
  {
    when: "Feb 2025 – present",
    company: "Jaris Inc.",
    title: "Senior Software Engineer",
    at: "at Jaris",
    wins: [
      "Architected and delivered the Beneficial Owner data collection module, reducing application processing time by 40% through automated validation and streamlined workflows.",
      "Led the OAuth2 migration from a legacy authentication system using Spring Boot Authorization Server, enabling modern authentication flows compliant with OAuth2 RFCs and eliminating security vulnerabilities.",
    ],
    stack: ["Java", "Spring Boot", "OAuth2"],
  },
  {
    when: "May 2020 – Feb 2025",
    company: "Jaris Inc.",
    title: "Software Engineer",
    at: "at Jaris",
    wins: [
      "Integrated third-party AML/KYC providers, reducing manual verification time by 60% and improving compliance accuracy through automated document verification.",
      "Implemented Auth0 authentication flows for a no-code partner integration initiative, enabling 5+ partner integrations with zero security incidents.",
      "Served as technical subject matter expert during the Retool platform migration, working with operations teams to migrate 12+ internal tools and identify critical legacy system vulnerabilities.",
    ],
    stack: ["AML/KYC", "Auth0", "Retool"],
  },
  {
    when: "Feb – May 2020",
    company: "Idealogic",
    title: "Junior Software Engineer",
    at: "at Idealogic",
    wins: [
      "Improved code quality across the Java codebase, increasing unit test coverage from 45% to 75%.",
      "Implemented integration tests for critical API endpoints in Spring Boot microservices.",
    ],
    stack: ["Java", "Spring Boot", "JUnit", "Mockito"],
  },
];

export const education = [
  {
    years: "2021 – 2023",
    degree: "Master of Science in Computer Science",
    school: "Warsaw University of Technology",
    grade: "5.0/5",
    thesis: "Performance Analysis of Blocking vs Non-Blocking REST APIs in Java Spring Boot",
  },
  {
    years: "2017 – 2021",
    degree: "Bachelor of Engineering in Computer Science",
    school: "Cracow University of Technology",
    grade: "4.5/5",
    thesis: "Games Archive Management Application",
  },
];

export const skills = [
  { group: "Backend", items: "Java, Spring Framework, Spring Boot, Hibernate, REST APIs, Microservices, JUnit, Mockito, Python, FastAPI" },
  { group: "Frontend", items: "React, TypeScript, JavaScript, Next.js" },
  { group: "Databases", items: "SQL, PostgreSQL, Redis" },
  { group: "Cloud and DevOps", items: "AWS, Docker, Git, CI/CD, Vercel" },
  { group: "Observability", items: "Datadog, Opsgenie" },
  { group: "Security and auth", items: "Auth0, OAuth2" },
  { group: "Tools", items: "Claude Code, GitHub Copilot, Retool, Jira, Confluence, Slack" },
  { group: "Languages", items: "Polish (native), English (professional working proficiency)" },
];

type Project = { name: string; url: string; text: string; image: StaticImageData; alt: string };

export const projects: Project[] = [
  {
    name: "pgsfotografia.pl",
    url: "https://pgsfotografia.pl",
    text: "Portfolio site for a photographer in Nowy Sącz. Indexed by Google the day after launch and ranking first for the brand name.",
    image: pgs,
    alt: "The pgsfotografia.pl website",
  },
  {
    name: "flyinvintage.pl",
    url: "https://www.flyinvintage.pl",
    text: "Site for two vintage clothing stores in Kraków, designed like a 90s teen magazine cover.",
    image: flyin,
    alt: "The flyinvintage.pl website",
  },
];
