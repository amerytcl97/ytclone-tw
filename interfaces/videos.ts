export interface Video {
    author: string;
    category: string | undefined;
    channel_id: string;
    description: string | undefined;
    is_live_content: any;
    keywords: string[];
    number_of_views: BigInt;
    published_time: string;
    thumbnails: Thumbnail[];
    title: string;
    type: string;
    video_id: string;
    video_length: string;
}


export interface RecommendedVideos {
    number_of_videos: number;
    continuation_token: string;
    videos: Video[],
}

export interface Thumbnail {
    url: string;
    width: number;
    height: number;
}