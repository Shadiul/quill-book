import { useQuery } from "react-query";
import PublicRequest, { axiosErrorHandler } from "../../config/axios.config";
import QUERY_KEYS from "../../constants/query_keys";
import Blog from "../../interfaces/blog";

interface RecentBlogsResponse {
  message: string;
  blogs: Blog[];
}

export const useRecentBlogsQuery = () => {
  return useQuery<RecentBlogsResponse, Error>(
    QUERY_KEYS.recentBlogs,
    async () => {
      try {
        const resp = await PublicRequest.get("api/blog/recent-blogs");
        return resp?.data;
      } catch (error) {
        axiosErrorHandler(error);
      }
    }
  );
};
