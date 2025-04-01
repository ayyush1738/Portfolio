"use client"; // Ensure this is a Client Component

import { useEffect, useState } from "react";
import { IoDownload } from "react-icons/io5";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

// Dynamically Import Lottie to Avoid SSR Issues
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Web3", "Typescript", "Javascript", "C++", "Java", "Python", "Solidity", "Git"];
  const rightLists = ["ViteJS", "NodeJS", "SQL", "PostgreSQL", "MongoDB", "Fast-API", "NextJs", "Tailwind CSS", "Express"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  const handleCopy = () => {
    const link = document.createElement("a");
    link.href = "/Ayush_Resume_SDE.pdf"; // Update with the correct path to your PDF
    link.download = "Ayush_Resume_SDE.pdf"; // Specify the name of the file to download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Image Section */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && <img src={img} alt="Main" className={cn(imgClassName, "object-cover object-center ")} />}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && <img src={spareImg} alt="Spare" className="object-cover object-center w-full h-full" />}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">{title}</div>
          <div className="font-sans md:max-w-96 md:text-md lg:text-base text-2lg font-bold text-white z-10">
            {description}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
  <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 overflow-hidden">
    
    {/* Left List */}
    <div className="relative flex flex-col gap-3 md:gap-3 lg:gap-8 h-[200px] overflow-hidden">
      <div className="slide-up flex flex-col gap-3 md:gap-3 lg:gap-8">
        {leftLists.map((item, i) => (
          <span key={i} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-rose-950">
            {item}
          </span>
        ))}
        {leftLists.map((item, i) => (
          <span key={`clone-${i}`} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-rose-950">
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* Right List */}
    <div className="relative flex flex-col gap-3 md:gap-3 lg:gap-8 h-[200px] overflow-hidden">
      <div className="slide-down flex flex-col gap-3 md:gap-3 lg:gap-8">
        {rightLists.map((item, i) => (
          <span key={i} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]">
            {item}
          </span>
        ))}
        {rightLists.map((item, i) => (
          <span key={`clone-${i}`} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]">
            {item}
          </span>
        ))}
      </div>
    </div>
    
  </div>
)}


          

          {id === 6 && (
            <div className="mt-5 relative">
              {copied && (
                <div className="absolute -bottom-5 right-0">
                  <Lottie options={defaultOptions} height={200} width={400} />
                </div>
              )}

              <MagicButton
                title={copied ? "Your Download Has Been started :)" : "Download My Resume"}
                icon={<IoDownload className="h-5 w-5" />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
