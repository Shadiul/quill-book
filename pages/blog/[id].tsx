import { Box, Paper, Skeleton, Stack, Typography } from "@mui/material";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ResponsiveContainer from "../../components/Layout/ResponsiveContainer";
import { useBlogQuery } from "../../queries/blogs/blog_query";
import { useIsMobile, useIsTablet } from "../../utility/media_query_helper";

type Props = {};

const BlogPage = (props: Props) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const { query } = useRouter();

  const { isLoading, data } = useBlogQuery(query.id as string);
  return (
    <Layout title="Blog">
      <Paper>
        <ResponsiveContainer paddingY={isMobile ? 4 : 8}>
          <Stack>
            <Typography variant="h2">
              {isLoading && <Skeleton width="50%" />}
              {data && data.blog.title}
            </Typography>

            <Typography variant="subtitle1">
              {isLoading && <Skeleton width="20%" />}
              {data && moment(data.blog.date).startOf("hour").fromNow()}
            </Typography>

            <Box height={16} />

            <Box height={isMobile ? 256 : 512} position="relative">
              {true && (
                <Skeleton variant="rectangular" height="100%" width="100%" />
              )}
              {data && (
                <Image
                  src={data.blog.cover}
                  alt={data.blog.cover}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </Box>

            <Box height={16} />

            <Typography variant="body1" align="justify">
              {isLoading && <Skeleton width="50%" />}
              {data &&
                data.blog.description.split("\n").map((text, index) => (
                  <span className="block" key={index}>
                    {text}
                  </span>
                ))}
            </Typography>
          </Stack>
        </ResponsiveContainer>
      </Paper>
    </Layout>
  );
};

export default BlogPage;
