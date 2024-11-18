export default function Blog() {
  return (
    <div className="w-full flex flex-col gap-8 my-12">
      {/* cover image */}
      <img src="../../public/2.png" className="w-full" />
      {/* contents */}
      <div className="flex justify-between">
        {/* profile info */}
        <div className="flex gap-7 items-center">
          <img src="../../public/boy1.png" className="w-14" />
          <div>
            <p className="text-[1.5rem] font-bold">Mr. Raju</p>
            <p className="text-[#11111199] text-[1rem] font-semibold">
              Mar 14 (4 Days ago)
            </p>
          </div>
        </div>
        {/* bookmark and read section */}
        <div className="flex gap-2 items-center">
          <div>
            <p className="text-[1.25rem] font-medium text-[#11111199]">
              05 min read
            </p>
          </div>
          <img
            src="../../public/bookmark.svg"
            className="w-[1.5rem] cursor-pointer"
          />
        </div>
      </div>
      {/* title */}
      <div>
        <h1 className="text-[2.5rem] font-bold text-[#111111] max-w-[46.0625rem]">
          How to get your first job as a self-taught programmer
        </h1>
      </div>
      {/* hashtags */}
      <div>
        <p className="text-[1.25rem] font-medium text-[#11111199]">
          #beginners #programming
        </p>
      </div>
      {/* mark as read */}
      <div className="underline text-[1.25rem] text-[#6047EC] font-semibold cursor-pointer">
        Mark as read
      </div>
    </div>
  );
}
