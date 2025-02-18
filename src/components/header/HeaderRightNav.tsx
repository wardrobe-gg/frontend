"use client";

import CartTrigger from "../cart/CartTrigger";
import ActionButton from "../wardrobeui/action-button";
import Image from "next/image";

export default function HeaderRightNav() {
  return (
    <div className="flex w-1/3 translate-y-2 justify-end gap-[20px]">
      <ActionButton>Download</ActionButton>
      <Image
        src={"/icons/blankUser.png"}
        width="250"
        height="250"
        alt="User"
        className="h-[60px] w-[60px]"
      />
      <CartTrigger />
    </div>
  );
}
