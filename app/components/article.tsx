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
    <Link href={url} className="group flex flex-col sm:flex-row justify-between sm:items-center p-4 -mx-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300">
      <div className="flex flex-col gap-1">
        <p className="text-lg font-medium group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
          {title}
          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
        </p>
        <div className="flex text-sm text-darkGray/80 items-center gap-2">
          <p>{date}</p> <span>•</span> <p>{duration}</p>
        </div>
      </div>
    </Link>
  );
}

export default Article;
