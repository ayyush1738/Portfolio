"use client";
import React, { FC } from "react";
import { cn } from "@/lib/utils";

export const MagicButton = ({
  title, icon, position, handleClick, otherClasses,
  // children,
  className,
  onClick,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: ()=>void,
  otherClasses?: string,

  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
    >
        <button className="inline-flex h-12 w-full animate-shimmer items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {position==='left' && icon}
          {title}
          {position==='right' && icon}
        </button>

    </div>
  );
};

export default MagicButton;
