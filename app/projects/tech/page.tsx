"use client";

import Link from "next/link";
import Image from "next/image";

export default function TechTasksPage() {
  return (
    <main className="min-h-screen px-4 pt-0 pb-20">
      {/* зона клика «назад» слева для ПК */}
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

      {/* кнопка назад */}
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="
            block
            pt-6
            mb-6
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

      {/* основной контейнер */}
      <div className="relative z-20 max-w-5xl mx-auto rounded-2xl bg-neutral-800/60 p-5 sm:p-8 lg:p-10 space-y-6">

        {/* Hero */}
        <section className="space-y-2">
          <h1 className="text-4xl font-semibold">
            Технические задачи и помощь с проектами
          </h1>

          <p className="text-neutral-300 text-lg max-w-3xl">
            Берусь за задачи, которые выходят за рамки веб-разработки:
            правки, консультации, дизайн, автоматизация и запуск проектов.
          </p>
        </section>

        {/* Основной текст */}
        <section className="space-y-4 max-w-3xl text-neutral-300">
          <p>
            Этот формат подойдёт, если нужен человек, который разберётся в задаче,
            предложит решение и доведёт её до результата — без шаблонного подхода.
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>Правки и доработки сайтов</li>
            <li>Запуск и настройка проектов (домен, хостинг, деплой)</li>
            <li>Помощь с кодом и технические консультации</li>
            <li>Автоматизация, Excel и офисные инструменты</li>
            <li>Рутинные и монотонные задачи</li>
          </ul>
        </section>

        {/* Дизайн */}
        <section className="space-y-3 max-w-3xl">
          <h2 className="text-2xl font-semibold">
            Дизайн и визуал
          </h2>

          <p className="text-neutral-300">
            Занимаюсь графическим дизайном: логотипы, афиши и визуальные материалы.
            Делал дизайн для молодёжной организации <span className="font-medium">Dvizh-Ufa</span>.
          </p>

  {/* фото после Dvizh-Ufa */}
  <div className="w-full">
    <Image
      src="/projects/tech/dvizh1.jpg"
      alt="Дизайн для молодёжной организации Dvizh-Ufa"
      width={1900}
      height={940}
      className="w-full h-auto object-cover"
    />
  </div>

          <p className="text-neutral-300">
            Работаю в Adobe Photoshop, собираю дизайн с нуля по пожеланиям,
            вношу правки в процессе и довожу результат до аккуратного вида.
          </p>
        </section>

  {/* фото после фразы про процесс */}
  <div className="w-full">
    <Image
      src="/projects/tech/dvizh2.jpg"
      alt="Процесс работы и финальный результат дизайна"
      width={1900}
      height={940}
      className="w-full h-auto object-cover"
    />
  </div>

        {/* Формат работы */}
        <section className="space-y-3 max-w-3xl">
          <h2 className="text-2xl font-semibold">
            Формат работы
          </h2>

          <ul className="list-disc list-inside space-y-1 text-neutral-300">
            <li>разовая помощь или консультация</li>
            <li>серия правок и доработок</li>
            <li>сопровождение проекта</li>
            <li>объяснение нюансов для самостоятельной работы</li>
          </ul>

          <p className="text-neutral-300">
            Берусь как за простые задачи, так и за более творческие решения.
          </p>
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

      {/* футер */}
      <footer className="mt-6 border-t border-neutral-800 pt-8">
        <div className="max-w-5xl mx-auto text-sm text-neutral-400 space-y-2 px-4">
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
