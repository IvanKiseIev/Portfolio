"use client";

import Link from "next/link";
import Slider from "@/app/components/Slider";
import { useState } from "react";
import Image from "next/image";

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

export default function ProjectPage() {
  const [slideIndex, setSlideIndex] = useState(0);

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
    Назад
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
            Сайт молодёжного движения и сообщества.
          </p>
          <p className="text-neutral-400">
            Next.js · адаптивная вёрстка · деплой через Vercel
          </p>
        {/* Ссылка на сайт */}
<Link
  href="https://dvizhu-site.vercel.app/"
  target="_blank"
  className="inline-block text-sm text-neutral-400 hover:text-neutral-200 transition"
>
  Открыть пример сайта →
</Link>
        </section>


        {/* About */}
        <section className="space-y-2 max-w-3xl">
          <h2 className="text-2xl font-semibold">
            О проекте
          </h2>
          <p className="text-neutral-300">
            Dvizh-Ufa - молодёжное движение, объединяющее людей вокруг музыки,
            мероприятий и совместных поездок. Сайт был разработан на коде
            как основная платформа для представления сообщества в онлайне.
          </p>
          <p className="text-neutral-300">
            Основная задача - сделать быстрый, понятный и легко расширяемый сайт,
            который можно развивать без ограничений шаблонных платформ.
          </p>
        </section>

        {/* Features */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">
            Реализованный функционал
          </h2>
          <ul className="space-y-0 text-neutral-300 list-disc list-inside">
            <li>Главная страница с описанием движения</li>
            <li>Дочерние страницы под каждое проведенное мероприятие</li>
            <li>Адаптация под мобильные и десктопные устройства</li>
            <li>Оптимизированная загрузка страниц</li>
            <li>Структура, готовая к добавлению новых разделов</li>
          </ul>
        </section>

{/* Visual */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">
    Визуал проекта
  </h2>

  {/* Desktop slider */}
  <div className="space-y-2">
    <p className="text-neutral-400 text-sm">
      ПК-версия:
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
      Мобильная версия:
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
            Моя роль
          </h2>
          <p className="text-neutral-300">
            Проектирование структуры сайта, разработка интерфейса и реализация
            проекта на Next.js с последующим деплоем.
          </p>
          
        {/* Ссылка на сайт */}
<Link
  href="https://dvizhu-site.vercel.app/"
  target="_blank"
  className="inline-block text-sm text-neutral-400 hover:text-neutral-200 transition"
>
  Открыть пример сайта →
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
    Назад
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
