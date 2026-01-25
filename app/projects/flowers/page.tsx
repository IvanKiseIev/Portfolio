"use client";

import Link from "next/link";
import Slider from "@/app/components/Slider";
import { useState } from "react";

const photos = [
  { src: "/projects/flowers/5.webp", alt: "Flower shop mobile 1" },
  { src: "/projects/flowers/1.webp", alt: "Flower shop 1" },
  { src: "/projects/flowers/4.webp", alt: "Flower shop 2" },
  { src: "/projects/flowers/2.webp", alt: "Flower shop mobile 2" },
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
            Назад
          </span>
        </Link>
      </div>

      {/* Контент */}
      <div className="relative z-20 max-w-5xl mx-auto rounded-2xl bg-neutral-800/60 p-5 sm:p-8 lg:p-10 space-y-6">

        {/* Hero */}
        <section className="space-y-2">
          <h1 className="text-4xl font-semibold">
            Интернет-магазины цветов
          </h1>

          <p className="text-neutral-300 text-lg max-w-2xl">
            Коммерческие сайты для приёма онлайн-заказов и оплаты
          </p>

          <p className="text-neutral-400">
            Tilda · эквайринг · уведомления · запуск под ключ
          </p>
        </section>

        {/* О проекте */}
        <section className="space-y-2 max-w-3xl">
          <h2 className="text-2xl font-semibold">
            О проекте
          </h2>

          <p className="text-neutral-300">
            Интернет-магазины разрабатывались для локальных цветочных магазинов.
            Клиенты приходили по рекомендациям и личным контактам.
          </p>

          <p className="text-neutral-300">
            Дизайн создавался с нуля на основе пожеланий заказчика.
            Правки вносились по ходу разработки.
          </p>

          <p className="text-neutral-300">
            Проекты запускались в среднем за 3–4 недели -
            от получения ТЗ до первых оплаченных заказов.
          </p>
        </section>

        {/* Функционал */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">
            Реализованный функционал
          </h2>

          <ul className="text-neutral-300 list-disc list-inside space-y-1">
            <li>Каталог товаров и корзина</li>
            <li>Онлайн-оплата (эквайринг)</li>
            <li>Уведомления о заказах в Telegram и на почту</li>
            <li>Расчёт доставки по адресу</li>
            <li>Полная адаптация под мобильные устройства</li>
          </ul>
        </section>

        {/* Визуал */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">
            Визуал проекта
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
            Моя роль
          </h2>

          <p className="text-neutral-300">
            Проектирование, дизайн с нуля, сборка сайтов на Tilda,
            настройка оплаты, логики заказов и запуск проектов.
          </p>

          <p className="text-neutral-300">
            После запуска - сопровождение сайта или передача проекта
            с объяснением всех нюансов для самостоятельной работы.
          </p>
          {/* Ссылка на сайт */}
          <Link
            href="https://flowers543212345.tilda.ws/"
            target="_blank"
            className="inline-block text-sm text-neutral-400 hover:text-neutral-200 transition"
            >
            Открыть пример сайта →
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
            Назад
          </span>
        </Link>
      </div>

    </main>
  );
}
