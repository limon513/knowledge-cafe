import { useState } from "react";
import Blog from "./Blog";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  return (
    <div>
      <Blog />
    </div>
  );
}
