import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { label: "Foundations", href: "/#foundations" },
  { label: "Finance", href: "/#finance" },
  { label: "Personal Finance", href: "/#personal-finance" },
  { label: "Accounting", href: "/#accounting" },
  { label: "Taxation", href: "/#taxation" },
  { label: "Calculators", href: "/#calculators" },
  { label: "Glossary", href: "/glossary" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
          Finance Principles
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
