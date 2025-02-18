"use client";

import { useRouter } from "next/navigation";

// Fairly simple; The button that does an action.

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function ActionButton({
  children,
  className = "",
  href,
}: Props) {
  const router = useRouter();
  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`font-mc hover:bg-custom-pink-hover bg-custom-pink px-[69px] py-[11px] text-xl transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
