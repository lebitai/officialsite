import { Link } from "wouter";

export function Logo({ className = "" }) {
  return (
    <Link href="/">
      <a className={`block ${className}`}>
        <img 
          src="/logo.png" 
          alt="LebitAI Logo" 
          className="h-8 md:h-10 w-auto"
          style={{
            opacity: 0.9
          }}
        />
      </a>
    </Link>
  );
}