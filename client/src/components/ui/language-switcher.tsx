import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-zinc-600 hover:text-[#645BFF] transition-colors"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === 'en' ? '中文' : 'EN'}
      </span>
    </Button>
  );
}