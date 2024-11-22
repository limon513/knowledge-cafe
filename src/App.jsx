import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import SideBookmark from "./components/SideBookmark";
import SideTimeBar from "./components/SideTimeBar";
import { useEffect } from "react";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    fetch("../../public/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <header>
        <Header />
        <hr className="mt-8" />
      </header>
      <main className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Blogs
            blogs={blogs}
            bookmarked={bookmarked}
            setBookmarked={setBookmarked}
            readTime={readTime}
            setReadTime={setReadTime}
          />
        </div>
        <div className="flex flex-col gap-4 mt-[2rem]">
          <SideTimeBar readTime={readTime} />
          <SideBookmark bookmarked={bookmarked} />
        </div>
      </main>
    </>
  );
}

export default App;
