import { motion } from "framer-motion";
import React from "react";
import Heading from "../section-heading";
import { articles } from "@/app/data/data";
import Article from "../article";

function ArticleSection() {
  return (
    <section className="w-full flex flex-col gap-6 mt-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading align="left" weight="normal" italic className="font-header mb-6">
          Articles
        </Heading>
        <div className="flex flex-col gap-6">
          {articles.map((article, idx) => (
            <Article
              key={idx}
              title={article.title}
              date={article.date}
              url={article.url}
              duration={article.duration}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default ArticleSection;
