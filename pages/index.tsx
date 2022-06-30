import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CircularProgress,
  ImageList,
  ImageListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import BlogCard from "../components/Blog/BlogCard";
import Layout from "../components/Layout";
import ResponsiveContainer from "../components/Layout/ResponsiveContainer";
import SocialLinks from "../components/SocialLinks";
import HOME_CONTENTS from "../constants/contents/home_contents";
import { useRecentBlogsQuery } from "../queries/blogs/recent_blogs_query";
import { useIsMobile, useIsTablet } from "../utility/media_query_helper";

const Home: NextPage = () => {
  return (
    <Layout
      title="QuillBook | Home"
      description="QuillBook is a personal blog and portfolio"
    >
      <Hero />
      <Summary />
      <RecentBlogs />
    </Layout>
  );
};

export default Home;

type HeroProps = {};

const Hero = (props: HeroProps) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  return (
    <Paper
      sx={{
        bgcolor: "primaryContainer.main",
        color: "primaryContainer.contrastText",
      }}
    >
      <ResponsiveContainer paddingY={isMobile ? 4 : undefined}>
        <Stack
          direction={isMobile ? "column-reverse" : "row"}
          justifyContent="space-evenly"
          gap={isMobile ? 2 : 6}
        >
          <Stack flex={1} gap={2} justifyContent="center" alignItems="start">
            <Typography variant="h1">{HOME_CONTENTS.fullName}</Typography>

            <Typography variant="body1" textAlign="justify">
              {HOME_CONTENTS.slefSummury}
            </Typography>

            <Button variant="contained">Button</Button>

            <Stack direction="row" gap={2} alignItems="center">
              <Typography variant="body1">Follow me</Typography>
              <SocialLinks />
            </Stack>
          </Stack>

          <Box
            flex={isMobile ? undefined : 1}
            height={isMobile ? 256 : isTablet ? 512 : 768}
            position="relative"
          >
            {/* <Image
              src={faker.image.avatar()}
              alt="Shadiul Huda"
              layout="fill"
              objectFit="cover"
            /> */}
            <PermIdentityIcon sx={{ height: "100%", width: "100%" }} />
          </Box>
        </Stack>
      </ResponsiveContainer>
    </Paper>
  );
};
type SummaryProps = {};

const Summary = (props: SummaryProps) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  return (
    <Paper>
      <ResponsiveContainer paddingY={isMobile ? 6 : isTablet ? 8 : 12}>
        <Stack
          direction={isMobile ? "column" : "row"}
          justifyContent="space-evenly"
          gap={isMobile ? 4 : isTablet ? 8 : 12}
        >
          <Stack flex={1} gap={2} justifyContent="center" alignItems="stretch">
            <Card>
              <CardHeader
                title="Experience"
                subheader="2 Years"
                avatar={
                  <Avatar sx={{ bgcolor: "primary.main" }}>
                    <StarBorderRoundedIcon />
                  </Avatar>
                }
              />
            </Card>
            <Card>
              <CardHeader
                title="Web Projects"
                subheader="10 Projects"
                avatar={
                  <Avatar sx={{ bgcolor: "secondary.main" }}>
                    <ComputerRoundedIcon />
                  </Avatar>
                }
              />
            </Card>
            <Card>
              <CardHeader
                title="Mobile Projects"
                subheader="10 Projects"
                avatar={
                  <Avatar sx={{ bgcolor: "tertiary.main" }}>
                    <PhoneAndroidOutlinedIcon />
                  </Avatar>
                }
              />
            </Card>
          </Stack>

          <Stack flex={1} gap={1}>
            <Typography variant="h3">What do I help?</Typography>

            <Typography variant="body1" align="justify">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
              <br />
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </Typography>

            <Stack direction="row">
              <Stack flex={1}>
                <Typography variant="h3">285+</Typography>
                <Typography variant="body1">Projects Completed</Typography>
              </Stack>

              <Stack flex={1}>
                <Typography variant="h3">285+</Typography>
                <Typography variant="body1">Projects Completed</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </ResponsiveContainer>
    </Paper>
  );
};

type RecentBlogsProps = {};

const RecentBlogs = (props: RecentBlogsProps) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const { isLoading, data } = useRecentBlogsQuery();

  console.log(data);

  return (
    <Paper>
      <ResponsiveContainer paddingY={isMobile ? 6 : isTablet ? 8 : 12}>
        <Stack gap={4}>
          <Typography variant="h3">Recent Blogs</Typography>

          {isLoading && <CircularProgress sx={{ mx: "auto" }} />}
          {data && (
            <ImageList
              variant={data.blogs.length > 3 ? "masonry" : "standard"}
              cols={isMobile ? 1 : isTablet ? 2 : 3}
              gap={24}
            >
              {data.blogs.map((blog, index) => {
                return (
                  <ImageListItem key={index} sx={{ width: "100%" }}>
                    <BlogCard blog={blog} />
                  </ImageListItem>
                );
              })}
            </ImageList>
          )}
        </Stack>
      </ResponsiveContainer>
    </Paper>
  );
};
