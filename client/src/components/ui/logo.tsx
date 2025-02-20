import { Link } from "wouter";

export function Logo({ className = "" }) {
  return (
    <Link href="/">
      <a className={`text-2xl md:text-3xl font-bold tracking-tight text-gradient ${className}`}>
        LebitAI
      </a>
    </Link>
  );
}