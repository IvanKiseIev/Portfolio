"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  en: {
    back: "Back",

    title: "Technical Tasks and Project Support",
    intro:
      "I take on tasks beyond web development: fixes, consultations, design, automation, and project launches.",

    mainText:
      "This format is suitable if you need someone who can understand the task, propose a solution, and bring it to completion without relying on a template-based approach.",

    tasks: [
      "Website fixes and improvements",
      "Project setup and launch: domains, hosting, deployment",
      "Code assistance and technical consultations",
      "Automation, Excel, and office tools",
      "Routine and repetitive tasks",
    ],

    designTitle: "Design and Visuals",
    designText1:
      "I also work with graphic design: logos, posters, and visual materials. I created design work for the Dvizh-Ufa youth organization.",
    designText2:
      "I work in Adobe Photoshop, build designs from scratch based on requirements, make revisions during the process, and refine the final result.",

    workTitle: "Work Format",
    workFormats: [
      "one-time assistance or consultation",
      "a series of fixes and improvements",
      "ongoing project support",
      "explanations for independent work",
    ],

    finalText:
      "I take on both simple technical tasks and more creative solutions.",
  },

  ru: {
    back: "Назад",

    title: "Технические задачи и помощь с проектами",
    intro:
      "Берусь за задачи, которые выходят за рамки веб-разработки: правки, консультации, дизайн, автоматизация и запуск проектов.",

    mainText:
      "Этот формат подойдёт, если нужен человек, который разберётся в задаче, предложит решение и доведёт её до результата — без шаблонного подхода.",

    tasks: [
      "Правки и доработки сайтов",
      "Запуск и настройка проектов (домен, хостинг, деплой)",
      "Помощь с кодом и технические консультации",
      "Автоматизация, Excel и офисные инструменты",
      "Рутинные и монотонные задачи",
    ],

    designTitle: "Дизайн и визуал",
    designText1:
      "Занимаюсь графическим дизайном: логотипы, афиши и визуальные материалы. Делал дизайн для молодёжной организации Dvizh-Ufa.",
    designText2:
      "Работаю в Adobe Photoshop, собираю дизайн с нуля по пожеланиям, вношу правки в процессе и довожу результат до аккуратного вида.",

    workTitle: "Формат работы",
    workFormats: [
      "разовая помощь или консультация",
      "серия правок и доработок",
      "сопровождение проекта",
      "объяснение нюансов для самостоятельной работы",
    ],

    finalText:
      "Берусь как за простые задачи, так и за более творческие решения.",
  },
};

export default function TechTasksPage() {

  const { language } = useLanguage();
  const text = translations[language];

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
            {text.back}
          </span>
        </Link>
      </div>

      {/* основной контейнер */}
      <div className="relative z-20 max-w-5xl mx-auto rounded-2xl bg-neutral-800/60 p-5 sm:p-8 lg:p-10 space-y-6">

        {/* Hero */}
        <section className="space-y-2">
          <h1 className="text-4xl font-semibold">
            {text.title}
          </h1>

          <p className="text-neutral-300 text-lg max-w-3xl">
            {text.intro}
          </p>
        </section>

        {/* Основной текст */}
        <section className="space-y-4 max-w-3xl text-neutral-300">
          <p>
            {text.mainText}
          </p>

<ul className="list-disc list-inside space-y-1">
  {text.tasks.map((task) => (
    <li key={task}>{task}</li>
  ))}
</ul>
        </section>

        {/* Дизайн */}
        <section className="space-y-3 max-w-3xl">
          <h2 className="text-2xl font-semibold">
            {text.designTitle}
          </h2>

          <p className="text-neutral-300">
              {text.designText1}
 <span className="font-medium">Dvizh-Ufa</span>.
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
              {text.designText2}
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
              {text.workTitle}
          </h2>

<ul className="list-disc list-inside space-y-1 text-neutral-300">
  {text.workFormats.map((item) => (
    <li key={item}>{item}</li>
  ))}
</ul>

<p className="text-neutral-300">
  {text.finalText}
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
