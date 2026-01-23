"use client";

import { useState } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header className="flex items-center justify-between section-padding py-4 md:py-6 w-full">
      <a href="#" className="font-mono text-base md:text-lg font-bold text-[var(--accent-cyan)]">
        &gt; taejun_
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        <nav className="flex gap-6 lg:gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 ml-4 pl-4 border-l border-[var(--bg-surface)]">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:bg-[var(--bg-surface)] transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            <span className="font-mono text-xs font-medium uppercase">{language}</span>
          </button>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:bg-[var(--bg-surface)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Controls */}
      <div className="flex items-center gap-1 md:hidden">
        <button
          onClick={toggleLanguage}
          className="flex items-center justify-center w-10 h-10 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
          aria-label="Toggle language"
        >
          <span className="font-mono text-xs font-medium uppercase">{language}</span>
        </button>
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button
          className="flex items-center justify-center w-10 h-10 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          className="absolute top-16 left-0 right-0 z-50 flex flex-col gap-2 p-4 bg-[var(--bg-surface)] border-b border-[var(--bg-inset)] md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors py-3 px-2"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
