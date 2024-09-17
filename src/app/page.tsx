import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start min-w-fit">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left w-full">
          {siteConfig.headline}
        </h1>
        <p className="text-xl text-center sm:text-left">
          {siteConfig.description}
        </p>
        <ul className="list-none text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] space-y-2">
          {siteConfig.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href={siteConfig.links.courses}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteConfig.cta.primary}
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteConfig.cta.secondary}
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={siteConfig.links.courses}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Cursos
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={siteConfig.links.projects}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Proyectos
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={siteConfig.links.community}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Comunidad
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-mark.svg"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
      </footer>
    </div>
  );
}
