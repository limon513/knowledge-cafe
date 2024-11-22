export default function SideBookmark({ bookmarked }) {
  return (
    <div className="bg-[#1111110D] p-[1.87rem] rounded-lg">
      <p className="text-[1.5rem] font-bold mb-4">
        Bookmarked Blogs : {bookmarked.length}
      </p>
      <div className="flex flex-col gap-4">
        {bookmarked.map((title, idx) => (
          <div
            key={idx}
            className="h-[6.125rem] bg-[#FFFFFF] p-4 rounded-lg content-center"
          >
            <p className="text-[1.125rem] font-semibold">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
