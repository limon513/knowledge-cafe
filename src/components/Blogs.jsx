import Blog from "./Blog";

export default function Blogs({
  blogs,
  bookmarked,
  setBookmarked,
  readTime,
  setReadTime,
}) {
  return (
    <div>
      {blogs.map((blog, idx) => (
        <Blog
          key={idx}
          blog={blog}
          bookmarked={bookmarked}
          setBookmarked={setBookmarked}
          setReadTime={setReadTime}
          readTime={readTime}
        ></Blog>
      ))}
    </div>
  );
}
