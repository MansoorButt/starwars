"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
export function Hero() {
  const words = [
    {
      text: "May",
    },
    {
      text: "the",
    },
    {
      text: "Force",
    },
    {
      text: "be with",
    },
    {
      text: "You.",
      className: "text-yellow-500 dark:text-yellow-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
            The era of Darth Vader is upon us
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href="planets">
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          View Planets
        </button>
        </Link>
      </div>
    </div>
  );
}
