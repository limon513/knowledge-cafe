export default function SideTimeBar({ readTime }) {
  return (
    <div className="bg-[#6047EC1A] border border-[#6047EC] rounded-lg px-12 py-5 content-center">
      <p className="text-[#6047EC] font-[1.5rem] font-bold">
        Spent time on read : {readTime} min
      </p>
    </div>
  );
}
