import { useLanguage, supportedLanguages } from "@/hooks/use-language";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const currentLang = supportedLanguages.find(l => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
          <span>{currentLang?.code.toUpperCase()}</span>
          <ChevronDown className="h-3 w-3" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-zinc-900/95 border-zinc-700 backdrop-blur-md">
        {supportedLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`text-zinc-300 hover:text-white hover:bg-zinc-800 cursor-pointer ${language === lang.code ? "bg-zinc-800 text-white" : ""}`}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}