import { ReactNode } from "react";

interface TechIconProps {
  size?: number;
  className?: string;
}

// Tech stack icons as simple SVGs or emojis
export const TechIcons: Record<string, ({ size, className }: TechIconProps) => ReactNode> = {
  "React": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      ⚛️
    </span>
  ),
  "TypeScript": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🔷
    </span>
  ),
  "JavaScript": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🟨
    </span>
  ),
  "C++": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🔧
    </span>
  ),
  "Go": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🐹
    </span>
  ),
  "Solidity": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      💎
    </span>
  ),
  "Python": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🐍
    </span>
  ),
  "TCP": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🌐
    </span>
  ),
  "Multi-threading": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🧵
    </span>
  ),
  "Network Programming": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      📡
    </span>
  ),
  "Blockchain": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      ⛓️
    </span>
  ),
  "Smart Contracts": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      📜
    </span>
  ),
  "HTML": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🌐
    </span>
  ),
  "CSS": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🎨
    </span>
  ),
  "Tailwind CSS": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🌊
    </span>
  ),
  "Vite": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      ⚡
    </span>
  ),
  "AI/ML": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🤖
    </span>
  ),
  "NLP": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🗣️
    </span>
  ),
  "Microsoft Teams API": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      💼
    </span>
  ),
  "Node.js": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🟢
    </span>
  ),
  "Express": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🚂
    </span>
  ),
  "MongoDB": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🍃
    </span>
  ),
  "PostgreSQL": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🐘
    </span>
  ),
  "Docker": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      🐳
    </span>
  ),
  "AWS": ({ size = 16, className = "" }) => (
    <span className={`inline-block ${className}`} style={{ fontSize: size }}>
      ☁️
    </span>
  ),
};

export const getTechIcon = (techName: string) => {
  return TechIcons[techName] || TechIcons["JavaScript"]; // fallback
};
