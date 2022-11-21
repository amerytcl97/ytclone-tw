
const BASE_API_URL: string = "https://youtube-v2.p.rapidapi.com";

const API_RECOMMENDED: string = `${BASE_API_URL}/video/recommendations?video_id=${process.env.NEXT_PUBLIC_VIDEO_ID}`;


export { BASE_API_URL, API_RECOMMENDED }