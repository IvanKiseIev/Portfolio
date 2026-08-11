"use client";

import Link from "next/link";
import Slider from "@/app/components/Slider";
import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const photos = [
  { src: "/projects/flowers/5.webp", alt: "Flower shop mobile 1" },
  { src: "/projects/flowers/1.webp", alt: "Flower shop 1" },
  { src: "/projects/flowers/4.webp", alt: "Flower shop 2" },
  { src: "/projects/flowers/2.webp", alt: "Flower shop mobile 2" },
];

const translations = {
  en: {
    back: "Back",
    title: "Online Flower Stores",
    subtitle: "Commercial websites for online orders and payments",
    tech: "Tilda · payment integration · notifications · full launch",

    aboutTitle: "About the project",
    about1:
      "These online stores were developed for local flower shops. Clients came through recommendations and personal contacts.",
    about2:
      "The design was created from scratch based on the client's requirements, with adjustments made throughout the development process.",
    about3:
      "Projects were typically launched within 3–4 weeks, from receiving the requirements to the first paid orders.",

    featuresTitle: "Implemented features",
    features: [
      "Product catalog and shopping cart",
      "Online payments",
      "Order notifications via Telegram and email",
      "Delivery cost calculation by address",
      "Full mobile optimization",
    ],

    visualTitle: "Project visuals",

    roleTitle: "My role",
    role1:
      "Planning, custom design, building websites on Tilda, payment setup, order logic, and project launch.",
    role2:
      "After launch, I either provided ongoing support or handed the project over with explanations for independent management.",

    openSite: "Open website example →",
  },

  ru: {
    back: "Назад",
    title: "Интернет-магазины цветов",
    subtitle: "Коммерческие сайты для приёма онлайн-заказов и оплаты",
    tech: "Tilda · эквайринг · уведомления · запуск под ключ",

    aboutTitle: "О проекте",
    about1:
      "Интернет-магазины разрабатывались для локальных цветочных магазинов. Клиенты приходили по рекомендациям и личным контактам.",
    about2:
      "Дизайн создавался с нуля на основе пожеланий заказчика. Правки вносились по ходу разработки.",
    about3:
      "Проекты запускались в среднем за 3–4 недели — от получения ТЗ до первых оплаченных заказов.",

    featuresTitle: "Реализованный функционал",
    features: [
      "Каталог товаров и корзина",
      "Онлайн-оплата (эквайринг)",
      "Уведомления о заказах в Telegram и на почту",
      "Расчёт доставки по адресу",
      "Полная адаптация под мобильные устройства",
    ],

    visualTitle: "Визуал проекта",

    roleTitle: "Моя роль",
    role1:
      "Проектирование, дизайн с нуля, сборка сайтов на Tilda, настройка оплаты, логики заказов и запуск проектов.",
    role2:
      "После запуска — сопровождение сайта или передача проекта с объяснением всех нюансов для самостоятельной работы.",

    openSite: "Открыть пример сайта →",
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
          fixed top-0 left-0
          h-screen
          w-[calc((100vw-1024px)/2)]
          z-10
        "
      />

      {/* Кнопка назад */}
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="
            block
            pt-6 mb-6
            px-4
            text-sm text-neutral-400
            hover:text-neutral-200
            transition
          "
        >
          <span className="inline-flex items-center gap-2">
            <span className="text-lg">←</span>
            {text.back}
          </span>
        </Link>
      </div>

      {/* Контент */}
      <div className="relative z-20 max-w-5xl mx-auto rounded-2xl bg-neutral-800/60 p-5 sm:p-8 lg:p-10 space-y-6">

        {/* Hero */}
        <section className="space-y-2">
          <h1 className="text-4xl font-semibold">
            {text.title}
          </h1>

          <p className="text-neutral-300 text-lg max-w-2xl">
            {text.subtitle}
          </p>

          <p className="text-neutral-400">
            {text.tech}
          </p>
        </section>

        {/* О проекте */}
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

          <p className="text-neutral-300">
            {text.about3}
          </p>
        </section>

        {/* Функционал */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">
            {text.featuresTitle}
          </h2>

<ul className="text-neutral-300 list-disc list-inside space-y-1">
  {text.features.map((feature) => (
    <li key={feature}>{feature}</li>
  ))}
</ul>
        </section>

        {/* Визуал */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">
            {text.visualTitle}
          </h2>

          <Slider
            photos={photos}
            index={slideIndex}
            setIndex={setSlideIndex}
          />
        </section>

        {/* Роль */}
        <section className="space-y-2 max-w-3xl">
          <h2 className="text-2xl font-semibold">
            {text.roleTitle}
          </h2>

          <p className="text-neutral-300">
            {text.role1}
          </p>

          <p className="text-neutral-300">
            {text.role2}
          </p>
          {/* Ссылка на сайт */}
          <Link
            href="https://flowers543212345.tilda.ws/"
            target="_blank"
            className="inline-block text-sm text-neutral-400 hover:text-neutral-200 transition"
            >
            {text.openSite}
          </Link>
        </section>

      </div>

      {/* Нижняя кнопка назад */}
      <div className="max-w-5xl mx-auto mt-6">
        <Link
          href="/"
          className="
            block
            px-4 py-2
            text-sm text-neutral-400
            hover:text-neutral-200
            transition
          "
        >
          <span className="inline-flex items-center gap-2">
            <span className="text-lg">←</span>
            {text.back}
          </span>
        </Link>
      </div>

    </main>
  );
}
