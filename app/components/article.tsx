import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ArticleProps {
  title: string;
  date: string;
  url: string;
  duration?: string;
}
function Article({ title, date, url, duration }: ArticleProps) {
  return (
    <Link href={url} className="group flex flex-col sm:flex-row justify-between sm:items-center py-6 px-4 -mx-4 border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
      <div className="flex flex-col gap-1 sm:w-2/3 group-hover:translate-x-2 transition-transform duration-300">
        <p className="text-lg font-medium font-header group-hover:text-accentBlue transition-colors duration-300 flex items-center gap-3">
          {title}
        </p>
      </div>
      <div className="flex text-sm text-darkGray sm:w-1/3 justify-end items-center gap-4 mt-2 sm:mt-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        <p>{date}</p>
        <ArrowUpRight className="w-5 h-5 text-accentBlue opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </div>
    </Link>
  );
}

export default Article;
