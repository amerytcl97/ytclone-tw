import { Video } from "../../interfaces/videos";

type VideoListProps = {
  videos: Video[] | [];
  direction: "horizontal" | "vertical";
};

export default function VideoList({ videos = [], direction }: VideoListProps) {
  return (
    <div className="bg-red-400 w-full">
      <ul className=""></ul>
    </div>
  );
}
