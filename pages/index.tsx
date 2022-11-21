import useSWR from "swr";
import ChipBar from "../components/ChipBar";
import ErrorSWR from "../components/ErrorSWR";
import VideoList from "../components/videos/VideoList";
import { RecommendedVideos } from "../interfaces/videos";
import { API_RECOMMENDED } from "../utils/api/endpoints";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST!,
  },
};

const fetcher = (url: string) => fetch(url, options).then((res) => res.json());

export default function Home() {
  const { data = { videos: [], number_of_videos: 0 }, error } =
    useSWR<RecommendedVideos>(API_RECOMMENDED, fetcher);

  if (error || data?.number_of_videos <= 0) {
    return <ErrorSWR />;
  }

  return (
    <div className="h-respect-header bg-red-400">
      <ChipBar />
      <VideoList videos={data?.videos} direction="horizontal" />
    </div>
  );
}
