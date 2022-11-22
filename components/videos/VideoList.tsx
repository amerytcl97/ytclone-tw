import { Video } from "../../interfaces/videos";
import VideoCard from "./VideoCard";

type VideoListProps = {
  videos: Video[] | [];
  direction: "horizontal" | "vertical";
};

export default function VideoList({ videos = [], direction }: VideoListProps) {
  return (
    <div className="w-full mt-4">
      <ul
        className={`${
          direction === "horizontal"
            ? "grid grid-cols-4 gap-y-7"
            : "flex flex-col"
        }`}
      >
        {videos.map(
          (
            {
              video_id,
              thumbnails,
              title,
              number_of_views,
              published_time,
              author,
            },
            index
          ) => (
            <li key={index}>
              <VideoCard
                video_id={video_id}
                title={title}
                thumbnail={thumbnails}
                views={number_of_views}
                published_time={published_time}
                author={author}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}
