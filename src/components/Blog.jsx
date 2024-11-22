import { utilityFnc } from "../utils/utility";

export default function Blog({
  blog,
  bookmarked,
  setBookmarked,
  readTime,
  setReadTime,
}) {
  console.log(blog);
  const cover = blog.cover;
  const author = blog.author;
  const authorImg = blog.author_img;
  const postDay = utilityFnc.formatedDate(blog.posted_date);
  const timeAgo = utilityFnc.timeAgo(blog.posted_date);
  const readingTime = blog.reading_time;
  const title = blog.title;

  function handleBookmarked() {
    const newBookmarked = [...bookmarked, title];
    setBookmarked(newBookmarked);
  }

  function handleMarkRead() {
    const newReadTime = readTime + readingTime;
    setReadTime(newReadTime);
  }

  return (
    <div className="w-full flex flex-col gap-8 my-8">
      {/* cover image */}
      <img
        src={cover}
        className="w-full h-[28.125rem] object-cover rounded-lg"
      />
      {/* contents */}
      <div className="flex justify-between">
        {/* profile info */}
        <div className="flex gap-7 items-center">
          <img
            src={authorImg}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="text-[1.5rem] font-bold">{author}</p>
            <p className="text-[#11111199] text-[1rem] font-semibold">
              {postDay} ({timeAgo})
            </p>
          </div>
        </div>
        {/* bookmark and read section */}
        <div className="flex gap-2 items-center">
          <div>
            <p className="text-[1.25rem] font-medium text-[#11111199]">
              {readingTime < 10 && "0"}
              {readingTime} min read
            </p>
          </div>
          <img
            src="../../public/bookmark.svg"
            className="w-[1.5rem] cursor-pointer"
            onClick={handleBookmarked}
          />
        </div>
      </div>
      {/* title */}
      <div>
        <h1 className="text-[2.5rem] font-bold text-[#111111] max-w-[46.0625rem]">
          {title}
        </h1>
      </div>
      {/* hashtags */}
      <div className="flex gap-4 items-center">
        {blog.hashtag.map((hash, idx) => (
          <p key={idx} className="text-[1.25rem] font-medium text-[#11111199]">
            {hash}
          </p>
        ))}
      </div>
      {/* mark as read */}
      <div
        onClick={handleMarkRead}
        className="underline text-[1.25rem] text-[#6047EC] font-semibold cursor-pointer"
      >
        Mark as read
      </div>
    </div>
  );
}
