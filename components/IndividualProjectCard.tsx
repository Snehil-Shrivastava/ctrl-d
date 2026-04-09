import Image from "next/image";
import Link from "next/link"; // Import Link
import share from "@/public/share.svg";
import thumbnail from "@/public/review-img.png";
import add from "@/public/add.svg";

const IndividualProjectCard = ({
  title = "Showreel",
  description = "updated 4 days ago",
}: {
  title?: string;
  description?: string;
}) => {
  return (
    // Wrap in Link to change the URL
    <div>
      <div className="min-h-112 grid grid-cols-5 gap-x-25">
        <div className="w-60">
          <Link
            href={`/checks`}
            className="rounded-2xl w-auto flex flex-col gap-3 justify-center items-center px-2 py-2 cursor-pointer hover:opacity-80 transition-opacity h-[269.33px]"
            style={{
              background: "rgba(243,237,222,0.05)",
              border: "1px solid rgba(243,237,222,0.08)",
            }}
          >
            <div className="flex-1 relative w-full h-full">
              <Image
                src={thumbnail}
                alt=""
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="flex gap-10 justify-between items-center w-full">
              <div className="flex flex-col px-1.5">
                <span className="font-bold whitespace-nowrap">{title}</span>
                <span className="text-xs opacity-60">{description}</span>
              </div>
              <div className="pr-1.5">
                <Image src={share} alt="" />
              </div>
            </div>
          </Link>
        </div>

        <div className="w-60">
          <Link
            href={"/upload"}
            className="flex flex-col items-center justify-center bg-taupe-600/50 backdrop-blur-md border border-white/5 gap-8 px-4 w-full rounded-xl h-[269.33px]"
          >
            <div>
              <Image src={add} alt="" className="opacity-50" />
            </div>
            <span className="text-2xl font-semibold text-neutral-400">
              Add Media
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndividualProjectCard;
