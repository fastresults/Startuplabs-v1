import axios from 'axios';

const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;

export interface VideoInfo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  channelTitle: string;
  viewCount: string;
  publishedAt: string;
}

// Cache for video search results to reduce API calls
const searchCache: Record<string, { timestamp: number, data: VideoInfo[] }> = {};
const CACHE_EXPIRY = 1000 * 60 * 60; // 1 hour

export const getVideoInfo = async (videoId: string): Promise<VideoInfo> => {
  if (!RAPIDAPI_KEY || !RAPIDAPI_HOST) {
    throw new Error('Missing RapidAPI configuration');
  }

  try {
    const response = await axios.get(`https://yt-api.p.rapidapi.com/video/info`, {
      params: { id: videoId },
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': RAPIDAPI_HOST,
      }
    });

    if (!response.data) {
      throw new Error('Invalid API response');
    }

    const data = response.data;
    return {
      id: data.id,
      title: data.title,
      description: data.description || '',
      thumbnail: data.thumbnail?.thumbnails?.[0]?.url || '/images/vidplayer.png',
      channelTitle: data.channelTitle || '',
      viewCount: data.viewCount?.toString() || '0',
      publishedAt: data.publishDate || new Date().toISOString()
    };
  } catch (error) {
    console.error('Error fetching video info:', error);
    throw new Error('Failed to fetch video information');
  }
};

export const searchVideos = async (query: string): Promise<VideoInfo[]> => {
  if (!RAPIDAPI_KEY || !RAPIDAPI_HOST) {
    throw new Error('Missing RapidAPI configuration');
  }

  if (!query) {
    throw new Error('Search query is required');
  }

  // Check cache first
  const cacheKey = query.toLowerCase();
  const now = Date.now();
  if (searchCache[cacheKey] && now - searchCache[cacheKey].timestamp < CACHE_EXPIRY) {
    return searchCache[cacheKey].data;
  }

  try {
    const response = await axios.get(`https://yt-api.p.rapidapi.com/search`, {
      params: { 
        query,
        type: 'video',
        sort: 'relevance'
      },
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': RAPIDAPI_HOST,
      }
    });

    if (!response.data?.data || !Array.isArray(response.data.data)) {
      throw new Error('Invalid API response format');
    }

    // Filter out shorts by checking video duration and dimensions
    const filteredVideos = response.data.data.filter((item: any) => {
      // Filter out videos with "shorts" in the URL or title
      if (item.url?.includes('/shorts/') || 
          item.title?.toLowerCase().includes('#shorts') || 
          item.title?.toLowerCase().includes('short')) {
        return false;
      }
      
      // If we have duration info, filter out videos less than 60 seconds
      if (item.lengthSeconds && item.lengthSeconds < 60) {
        return false;
      }
      
      // If we have dimension info, filter out portrait videos (typical for shorts)
      if (item.thumbnail && item.thumbnail[0]) {
        const thumb = item.thumbnail[0];
        if (thumb.height > thumb.width) { // Portrait orientation
          return false;
        }
      }
      
      return true;
    });

    const results = filteredVideos.map((item: any) => ({
      id: item.videoId || '',
      title: item.title || 'Untitled Video',
      description: item.description || '',
      thumbnail: item.thumbnail?.[0]?.url || '/images/vidplayer.png',
      channelTitle: item.channelTitle || 'Unknown Channel',
      viewCount: item.viewCount?.toString() || '0',
      publishedAt: item.publishedAt || new Date().toISOString()
    })).filter(video => video.id && video.title && video.thumbnail);

    // Cache the results
    searchCache[cacheKey] = {
      timestamp: now,
      data: results
    };

    return results;
  } catch (error) {
    console.error('Error searching videos:', error);
    throw new Error('Failed to search videos');
  }
};