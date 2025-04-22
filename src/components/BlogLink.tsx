
import React from "react";
import { ArrowRight } from "lucide-react";

const BlogLink = () => (
  <a
    href="/blog"
    className="text-black font-medium hover:text-emerald-700 transition-colors group flex items-center"
  >
    Blog
    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </a>
);

export default BlogLink;
