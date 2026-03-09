import { useLanguage, supportedLanguages } from "@/hooks/use-language";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const currentLang = supportedLanguages.find(l => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-haspopup="menu"
          aria-label={t.ui.languageSwitcherLabel}
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-white/82 px-3 py-2 text-sm font-medium text-[var(--text)] shadow-[0_8px_20px_rgba(50,61,56,0.05)] transition-colors hover:border-[#ccd4c8] hover:bg-[var(--bg-soft)]"
        >
          <span>{currentLang?.code.toUpperCase()}</span>
          <ChevronDown className="h-3 w-3 text-[var(--muted)]" />
          <span className="sr-only">{t.ui.languageSwitcherLabel}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {supportedLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer justify-between ${language === lang.code ? "bg-[var(--accent-soft)] text-[var(--text)]" : ""}`}
          >
            <span className="flex items-center gap-2">
              <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[var(--surface-strong)] px-1.5 text-[11px] font-semibold text-[var(--muted)]">
                {lang.flag}
              </span>
              {lang.name}
            </span>
            {language === lang.code ? (
              <span className="text-[var(--accent-strong)]">•</span>
            ) : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
