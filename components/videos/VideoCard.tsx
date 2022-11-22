import Image from "next/image";
import Link from "next/link";
import { Thumbnail } from "../../interfaces/videos";

const NumAbbr = require("number-abbreviate");

const numAbbr = new NumAbbr();

type VideoCardProps = {
  video_id: string;
  title: string;
  views: number;
  author: string;
  published_time: string;
  thumbnail: Thumbnail[];
};

export default function VideoCard(props: VideoCardProps) {
  const formatViews = () => {
    return numAbbr.abbreviate(props.views, 2);
  };

  return (
    <Link href={`/watch?v=${props.video_id}`}>
      <article
        className="flex flex-col w-fit p-2 rounded gap-2 group border border-transparent 
    hover:border-[var(--border-color)] hover:shadow hover:cursor-pointer transition-all"
      >
        {/* THUMBNAIL CONTAINER */}
        <Image
          src={props.thumbnail[2].url}
          alt={props.title}
          title={props.title}
          height={props.thumbnail[2].height}
          width={props.thumbnail[2].width}
          className="rounded-md"
        />
        <h3 className="text-sm w-72 line-clamp-2" title={props.title}>
          {props.title}
        </h3>
        <div className="flex flex-col">
          <Link
            href="#"
            className="w-fit text-medium-light text-xs hover:text-white"
          >
            {props.author}
          </Link>
          <span className="inline-block text-medium-light text-xs">
            {formatViews()} views • {props.published_time}
          </span>
        </div>
      </article>
    </Link>
  );
}
