import { Paper } from "@mui/material";
import Layout from "../../components/Layout";
import ResponsiveContainer from "../../components/Layout/ResponsiveContainer";
import { useRecentBlogsQuery } from "../../queries/blogs/recent_blogs_query";
import { useIsMobile, useIsTablet } from "../../utility/media_query_helper";

type Props = {};

const BlogsPage = (props: Props) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const { isLoading, data } = useRecentBlogsQuery();
  return (
    <Layout title="Blog">
      <Paper>
        <ResponsiveContainer paddingY={isMobile ? 4 : 8}></ResponsiveContainer>
      </Paper>
    </Layout>
  );
};

export default BlogsPage;
