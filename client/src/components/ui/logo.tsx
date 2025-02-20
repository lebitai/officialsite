import { Link } from "wouter";

export function Logo({ className = "" }) {
  return (
    <Link href="/">
      <a className={`block ${className}`}>
        <img 
          src="/AI Designer-Logo avatar.png" 
          alt="LebitAI Logo" 
          className="h-8 md:h-10 w-auto"
          style={{
            filter: "brightness(0) saturate(100%)",
            opacity: 0.9
          }}
        />
      </a>
    </Link>
  );
}
