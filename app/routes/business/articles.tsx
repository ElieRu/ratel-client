import { useState } from "react";
import type { Route } from "./+types/articles";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ArticlePage() {
  const [articles, setArticles] = useState([]);
  return <div>
    <h1>articles</h1>
    <ul>
      {/* {articles.map((index, article) => <li id=`{${index}`>{article.designation}</li>)} */}
    </ul>
  </div>;
}
