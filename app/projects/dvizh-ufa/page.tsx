"use client";

import Link from "next/link";
import Slider from "@/app/components/Slider";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const desktopPhotos = [
  { src: "/projects/dvizh-ufa/desktop-1.jpg", alt: "Desktop 1" },
  { src: "/projects/dvizh-ufa/desktop-2.jpg", alt: "Desktop 2" },
  { src: "/projects/dvizh-ufa/desktop-3.jpg", alt: "Desktop 3" },
  { src: "/projects/dvizh-ufa/desktop-4.jpg", alt: "Desktop 4" },
  { src: "/projects/dvizh-ufa/desktop-5.jpg", alt: "Desktop 5" },
];

const mobilePhotos = [
  { src: "/projects/dvizh-ufa/mobile-1.jpg", alt: "Mobile 1" },
  { src: "/projects/dvizh-ufa/mobile-2.jpg", alt: "Mobile 2" },
  { src: "/projects/dvizh-ufa/mobile-3.jpg", alt: "Mobile 3" },
  { src: "/projects/dvizh-ufa/mobile-4.jpg", alt: "Mobile 4" },
  { src: "/projects/dvizh-ufa/mobile-5.jpg", alt: "Mobile 5" },
];

const translations = {
  en: {
    back: "Back",
    subtitle: "Website for a youth movement and community.",
    tech: "Next.js · responsive layout · deployed with Vercel",
    openSite: "Open website example →",

    aboutTitle: "About the project",
    about1:
      "Dvizh-Ufa is a youth movement that brings people together around music, events, and group trips. The website was developed from scratch as the main online platform for presenting the community.",
    about2:
      "The main goal was to create a fast, clear, and easily scalable website that could grow without the limitations of template-based platforms.",

    featuresTitle: "Implemented features",
    features: [
      "Main page with an introduction to the movement",
      "Separate pages for each event",
      "Responsive design for mobile and desktop devices",
      "Optimized page loading",
      "Structure prepared for adding new sections",
    ],

    visualTitle: "Project visuals",
    desktop: "Desktop version:",
    mobile: "Mobile version:",

    roleTitle: "My role",
    role:
      "Website structure planning, interface development, implementation in Next.js, and deployment.",
  },

  ru: {
    back: "Назад",
    subtitle: "Сайт молодёжного движения и сообщества.",
    tech: "Next.js · адаптивная вёрстка · деплой через Vercel",
    openSite: "Открыть пример сайта →",

    aboutTitle: "О проекте",
    about1:
      "Dvizh-Ufa - молодёжное движение, объединяющее людей вокруг музыки, мероприятий и совместных поездок. Сайт был разработан на коде как основная платформа для представления сообщества в онлайне.",
    about2:
      "Основная задача - сделать быстрый, понятный и легко расширяемый сайт, который можно развивать без ограничений шаблонных платформ.",

    featuresTitle: "Реализованный функционал",
    features: [
      "Главная страница с описанием движения",
      "Дочерние страницы под каждое проведённое мероприятие",
      "Адаптация под мобильные и десктопные устройства",
      "Оптимизированная загрузка страниц",
      "Структура, готовая к добавлению новых разделов",
    ],

    visualTitle: "Визуал проекта",
    desktop: "ПК-версия:",
    mobile: "Мобильная версия:",

    roleTitle: "Моя роль",
    role:
      "Проектирование структуры сайта, разработка интерфейса и реализация проекта на Next.js с последующим деплоем.",
  },
};

export default function ProjectPage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const { language } = useLanguage();
  const text = translations[language];

  return (
    <main className="min-h-screen px-4 pt-0 pb-20">

{/* Desktop clickable back zone */}
<Link
  href="/"
  className="
    hidden lg:block
    fixed
    top-0 left-0
    h-screen
    w-[calc((100vw-1024px)/2)]
    z-10
  "
/>

  {/* Кнопка назад */}
  <div className="max-w-5xl mx-auto mb-0">
<Link
  href="/"
  className="
    block
    max-w-5xl mx-auto
    pt-6        /* кликабельное сверху */
    mb-6        /* расстояние до контейнера */
    px-4
    text-sm text-neutral-400
    hover:text-neutral-200
    transition
  "
>
  <span className="block px-4 items-center gap-2">
    <span className="text-lg">← </span>
    {text.back}
  </span>
</Link>
  </div>

  <div className="relative z-20 max-w-5xl mx-auto rounded-2xl bg-neutral-800/60 p-5 sm:p-8 lg:p-10 space-y-6 lg:space-y-6">

        {/* Hero */}
        <section className="space-y-2">
<h1 className="flex items-center gap-3 text-4xl font-semibold">
  <span>Dvizh-Ufa</span>
  <Image
    src="/projects/dvizh-ufa/logo.png"
    alt="Dvizh-Ufa logo"
    width={40}
    height={40}
    className="rounded-sm"
  />
  </h1>
          <p className="text-neutral-300 text-lg max-w-2xl">
            {text.subtitle}
          </p>
          <p className="text-neutral-400">
            {text.tech}
          </p>
        {/* Ссылка на сайт */}
<Link
  href="https://dvizhu-site.vercel.app/"
  target="_blank"
  className="inline-block text-sm text-neutral-400 hover:text-neutral-200 transition"
>
  {text.openSite}
</Link>
        </section>


        {/* About */}
        <section className="space-y-2 max-w-3xl">
          <h2 className="text-2xl font-semibold">
            {text.aboutTitle}
          </h2>
          <p className="text-neutral-300">
            {text.about1}
          </p>
          <p className="text-neutral-300">
            {text.about2}
          </p>
        </section>

        {/* Features */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">
            {text.featuresTitle}
          </h2>
<ul className="space-y-0 text-neutral-300 list-disc list-inside">
  {text.features.map((feature) => (
    <li key={feature}>{feature}</li>
  ))}
</ul>
        </section>

{/* Visual */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">
    {text.visualTitle}
  </h2>

  {/* Desktop slider */}
  <div className="space-y-2">
    <p className="text-neutral-400 text-sm">
      {text.desktop}
    </p>
<Slider
  photos={desktopPhotos}
  index={slideIndex}
  setIndex={setSlideIndex}
/>
  </div>

  {/* Mobile slider */}
  <div className="space-y-2">
    <p className="text-neutral-400 text-sm">
      {text.mobile}
    </p>
<Slider
  photos={mobilePhotos}
  index={slideIndex}
  setIndex={setSlideIndex}
/>
  </div>
</section>

        {/* Role */}
        <section className="space-y-2 max-w-3xl">
          <h2 className="text-2xl font-semibold">
            {text.roleTitle}
          </h2>
          <p className="text-neutral-300">
            {text.role}
          </p>
          
        {/* Ссылка на сайт */}
<Link
  href="https://dvizhu-site.vercel.app/"
  target="_blank"
  className="inline-block text-sm text-neutral-400 hover:text-neutral-200 transition"
>
  {text.openSite}
</Link>
        </section>

      </div>
        {/* Кнопка назад */}
  <div className="max-w-5xl mx-auto mt-6 mb-6">
<Link
  href="/"
  className="
    block
    max-w-5xl mx-auto
    mt-6 mb-6
    px-4 py-2
    text-sm text-neutral-400
    hover:text-neutral-200
    transition
  "
>
  <span className="inline-flex items-center gap-2">
    <span className="text-lg">← </span>
    {text.back}
  </span>
</Link>
  </div>

        {/* контакты */}
  <footer className="mt-6 border-t border-neutral-800 pt-8">
  <div className="max-w-5xl mx-auto text-sm text-neutral-400 space-y-2">
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
</footer>

    </main>
  );
}
