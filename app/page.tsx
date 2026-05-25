import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogs } from "@/utils/blogs";
import { assetPath } from "@/utils/asset";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NoBodyScroll } from "@/components/NoBodyScroll";

export const metadata: Metadata = {
  title: "Teshan Jayakody",
  description: "Business Analyst at the intersection of product, UX, and engineering.",
  alternates: { canonical: "/" },
};

function formatMonthYear(dateStr: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function IndexPage() {
  const blogs = getAllBlogs();
  const latestBlog = blogs[0] ?? null;

  return (
    <div className="h-dvh overflow-y-auto overflow-x-hidden bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col items-center">
      <NoBodyScroll />
      {/* Theme toggle — top right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 py-8 w-full max-w-5xl">
        {/* Avatar */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-8 sm:mb-10 border border-neutral-300 dark:border-neutral-700 select-none">
          <img
            src={assetPath("/avatar-dark.png")}
            alt="Teshan Jayakody"
            className="hidden dark:block w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          <img
            src={assetPath("/avatar-light.png")}
            alt="Teshan Jayakody"
            className="block dark:hidden w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Name */}
        <p className="text-2xl sm:text-3xl text-neutral-500 dark:text-neutral-400 mb-4 sm:mb-5 tracking-wide">
          Teshan Jayakody
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-4 sm:mb-6 text-center">
          Business Analyst &amp;{" "}
          <em style={{ fontFamily: "'DM Serif Display', serif" }} className="font-normal not-italic">
            <span style={{ fontStyle: "italic" }}>a UX enthusiast.</span>
          </em>
        </h1>

        {/* Description */}
        <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed mb-10 sm:mb-14 text-center max-w-lg">
          Helping ideas become clear, usable, and real at the intersection
          of product, UX, and engineering.
        </p>

        {/* Nav links */}
        <nav className="w-full max-w-2xl">
          <Link
            href="/about"
            className="flex items-center justify-between py-3 sm:py-4 border-t border-neutral-200 dark:border-neutral-800 group hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          >
            <div>
              <div className="font-medium text-sm sm:text-base">About me</div>
              <div className="text-xs sm:text-sm text-neutral-500 mt-0.5">Skills, experience &amp; background</div>
            </div>
            <span className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors text-lg">→</span>
          </Link>

          <Link
            href="/blogs"
            className="flex items-center justify-between py-3 sm:py-4 border-t border-neutral-200 dark:border-neutral-800 group hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          >
            <div>
              <div className="font-medium text-sm sm:text-base">Blogs</div>
              {latestBlog && (
                <div className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                  Thoughts, interests &amp; experiences
                </div>
              )}
            </div>
            <span className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors text-lg">→</span>
          </Link>
        </nav>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl px-6 sm:px-10 py-6 flex flex-col items-center gap-3 text-xs text-neutral-400 dark:text-neutral-500">
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/teshanjayakody/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/teshann_/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://x.com/TeshTweet20"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          >
            <XIcon />
          </a>
        </div>
        <span>© {new Date().getFullYear()} Teshan Jayakody</span>
      </footer>
    </div>
  );
}
