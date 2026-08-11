"use client";

type Project = {
  title: string;
  description: string;
  stack: string;
  href: string;
  media: { type: "image" | "video"; src: string }[];
};

import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";
import ProjectCard from "@/app/components/ProjectCard";

const projectsByLanguage: Record<"en" | "ru", Project[]> = {
  en: [
    {
      title: "Custom Websites and Landing Pages",
      description: "Next.js, responsive layout, Vercel",
      stack: "Custom website for the Dvizh-Ufa youth movement",
      href: "/projects/dvizh-ufa",
      media: [
        { type: "image", src: "/projects/dvizh-ufa/desktop-1.jpg" },
        { type: "image", src: "/projects/dvizh-ufa/desktop-2.jpg" },
      ],
    },
    {
      title: "Landing Pages and Storefronts",
      description: "Tilda, payments, ongoing support",
      stack: "Commercial websites for accepting online orders",
      href: "/projects/flowers",
      media: [
        { type: "image", src: "/projects/flowers/5.webp" },
        { type: "image", src: "/projects/flowers/1.webp" },
      ],
    },
    {
      title: "Technical Tasks",
      description: "Excel, fixes, consultations",
      stack: "Website support and automation",
      href: "/projects/tech",
      media: [
        { type: "image", src: "/projects/tech/1.jpg" },
        { type: "image", src: "/projects/tech/2.webp" },
      ],
    },
  ],

  ru: [
    {
      title: "Кодовые сайты и лендинги",
      description: "Next.js, адаптивная верстка, Vercel",
      stack: "Кодовый сайт молодёжного движения Dvizh-Ufa",
      href: "/projects/dvizh-ufa",
      media: [
        { type: "image", src: "/projects/dvizh-ufa/desktop-1.jpg" },
        { type: "image", src: "/projects/dvizh-ufa/desktop-2.jpg" },
      ],
    },
    {
      title: "Лендинги и витрины",
      description: "Tilda, эквайринг, сопровождение",
      stack: "Коммерческие сайты для приёма заказов",
      href: "/projects/flowers",
      media: [
        { type: "image", src: "/projects/flowers/5.webp" },
        { type: "image", src: "/projects/flowers/1.webp" },
      ],
    },
    {
      title: "Технические задачи",
      description: "Excel, правки, консультации",
      stack: "Помощь с сайтами и автоматизация",
      href: "/projects/tech",
      media: [
        { type: "image", src: "/projects/tech/1.jpg" },
        { type: "image", src: "/projects/tech/2.webp" },
      ],
    },
  ],
};

const translations = {
  en: {
    title: "Ivan Kiselev - Web Development",
    description:
      "React / Next.js / TypeScript",
    projectsTitle: "Projects:",
    contactsTitle: "Contacts",
  },

  ru: {
    title: "Киселев Иван - веб-разработка",
    description:
      "Помогаю с сайтами, кодом и техническими задачами. Портфолио, лендинги, доработки, консультации.",
    projectsTitle: "Проекты:",
    contactsTitle: "Контакты",
  },
};

export default function Home() {
  const { language } = useLanguage();
  const text = translations[language];
  const projects = projectsByLanguage[language];

  return (
    <main className="min-h-screen px-4 py-12">
      <div className="max-w-3xl mx-auto rounded-2xl bg-neutral-800/60 p-6 sm:p-8">
      <section className="mb-10">
<h1 className="text-3xl font-semibold mb-2">
  {text.title}
</h1>
<p className="text-neutral-300 text-lg max-w-xl">
  {text.description}
</p>
      </section>

      <section className="mb-10">
<h2 className="text-2xl font-semibold mb-2">
  {text.projectsTitle}
</h2>
        
<div className="space-y-6">
  {projects.map((project) => (
    <ProjectCard
      key={project.title}
      {...project}
    />
  ))}
</div>


      </section>
<section>
<h2 className="text-2xl font-semibold mb-3">
  {text.contactsTitle}
</h2>

  <div className="text-sm text-neutral-400 space-y-2">
    <p>
      Telegram:{" "}
      <a
        href="https://t.me/KiseIevIvan"
        target="_blank"
        className="hover:text-neutral-200 transition"
      >
        @KiseIevIvan
      </a>
    </p>
    <p>
      Email:{" "}
      <a
        href="mailto:ikarus500231@gmail.com"
        className="hover:text-neutral-200 transition"
      >
        ikarus500231@gmail.com
      </a>
    </p>
  </div>
</section>

      </div>
    </main>
  );
}
