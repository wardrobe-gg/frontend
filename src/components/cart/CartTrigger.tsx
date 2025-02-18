"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export default function CartTrigger() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex h-[60px] w-[60px] items-center justify-center border-4 border-custom-gray p-[10px]">
          <Image
            src={"/icons/cart.png"}
            width="60"
            height="60"
            className="h-[25px] w-[25px]"
            alt="Cart icon"
          />
        </div>
      </SheetTrigger>
      <SheetContent className="border-none">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>The infamous shopping cart...</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
