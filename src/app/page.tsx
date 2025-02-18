import Link from "next/link";
import Image from "next/image";
import ActionButton from "@/components/wardrobeui/action-button";

export default function HomePage() {
  return (
    <main className="">
      <section className="grid h-[70vh] grid-cols-12 grid-rows-1">
        <div className="col-span-4 flex w-full items-end">
          <div className="from-custom-pink-hover flex h-[80%] w-full items-end bg-gradient-to-t to-custom-black">
            <Image
              src={"/logo/cut-side.png"}
              alt=""
              width="300"
              height="300"
              className="w-[200px]"
            />
            <Image
              src={"/logo/cut-btm.png"}
              alt=""
              width="300"
              height="300"
              className="w-[250px] -translate-x-20"
            />
          </div>

          <Image
            src={"/logo/butchered-di-logo.png"}
            alt=""
            width="600"
            height="600"
            className="absolute left-[20%] h-[600px]"
          />
          <Image
            src={"/characters/char1.png"}
            alt=""
            width="600"
            height="500"
            className="absolute left-[0%] -translate-x-3 -translate-y-[8rem] scale-90"
          />
          <Image
            src={"/characters/char2.png"}
            alt=""
            width="400"
            height="300"
            className="absolute left-[17.8%] translate-y-[3.1rem] scale-90"
          />
        </div>

        <div className="col-span-8 flex items-end justify-end">
          <div className="flex h-[70%] w-[80%] flex-col items-end gap-3 pr-[120px]">
            <h1 className="capitalise font-mc text-right text-6xl font-bold">
              Customise like <br />
              never before
            </h1>
            <span className="font-basically w-8/12 text-right text-lg">
              Your minecraft skin deserves better! <br />
              Discover high-quality capes, stunning cosmetics, and endless
              customization, all in one place.
            </span>
            <ActionButton
              className="w-7/12 py-[1.5rem] tracking-wide"
              href="/download"
            >
              Get Started
            </ActionButton>
          </div>
        </div>
      </section>
    </main>
  );
}


