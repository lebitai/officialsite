import { Link } from "wouter";

export function Logo({ className = "" }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/logo.png" 
        alt="LebitAI" 
        className="h-6 w-6 md:h-7 md:w-7"
      />
      <span className="text-xl font-semibold text-white tracking-tight">LebitAI</span>
    </Link>
  );
}