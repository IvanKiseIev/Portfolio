"use client";

import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string;
  href: string;
  media: { type: "image" | "video"; src: string }[];
}

export default function ProjectCard({
  title,
  description,
  stack,
  href,
  media,
}: ProjectCardProps) {
  const previewMedia = media.slice(0, 2);

  return (
    <Link
      href={href}
      className="
        block
        rounded-2xl
        bg-neutral-800/60
        p-4 md:p-5
        transition-colors
        hover:bg-neutral-800/80
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-4
          md:grid-cols-2
          md:items-center
        "
      >
        {/* ТЕКСТ */}
        <div className="space-y-2">
<h3 className="flex items-center gap-2 text-xl font-medium">
  <span>{title}</span>
</h3>
          <p className="text-neutral-300 text-sm">
            {description}
          </p>

          <p className="text-neutral-500 text-xs">
            {stack}
          </p>
        </div>

        {/* ФОТО */}
        <div className="grid grid-cols-2 gap-3">
          {previewMedia.map((item, index) => (
            <div
              key={index}
              className="
                aspect-[4/3]
                rounded-lg
                overflow-hidden
                bg-black
              "
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
