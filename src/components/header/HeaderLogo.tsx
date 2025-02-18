"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function HeaderLogo() {
  const path = usePathname();

  return (
    <div
      className={`w-[200px float-end h-full ${path === "/" ? "translate-y-[55px]" : "translate-y-[20px] scale-90"} transition-all duration-200`}
    >
      <Image
        src={"/logo/longnobg.png"}
        alt="Wardrobe Logo"
        width="100"
        height="75"
        className="w-[200px] object-cover"
      />
    </div>
  );
}
