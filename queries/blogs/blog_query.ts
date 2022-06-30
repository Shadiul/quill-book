import { useQuery } from "react-query";
import PublicRequest, { axiosErrorHandler } from "../../config/axios.config";
import QUERY_KEYS from "../../constants/query_keys";
import Blog from "../../interfaces/blog";

interface BlogResponse {
  message: string;
  blog: Blog;
}

export const useBlogQuery = (id: string) => {
  return useQuery<BlogResponse, Error>(id, async () => {
    try {
      const resp = await PublicRequest.get(`api/blog/${id}`);
      return resp?.data;
    } catch (error) {
      axiosErrorHandler(error);
    }
  });
};
