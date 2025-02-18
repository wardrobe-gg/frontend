import Link from "next/link";
import HeaderLink from "./HeaderLink";
import HeaderLogo from "./HeaderLogo";
import HeaderRightNav from "./HeaderRightNav";

export default function Header() {
  return (
    <div className="sticky left-0 right-0 top-0 flex h-[110px] items-center justify-between border-b-2 border-custom-gray bg-custom-black px-[120px]">
      <div className="flex w-1/3 translate-y-2 gap-[24px]">
        <HeaderLink targetURL={"/"}>Home</HeaderLink>
        <HeaderLink
          targetURL={"/store/capes"}
          vanityURLs={["/store/capes", "/store/cosmetics"]}
        >
          Catalog
        </HeaderLink>
        <HeaderLink targetURL="/faq">FAQ</HeaderLink>
        <HeaderLink targetURL="/upload">Upload</HeaderLink>
      </div>
      <div className="flex h-full items-end">
        <HeaderLogo />
      </div>
      <HeaderRightNav />
    </div>
  );
}
