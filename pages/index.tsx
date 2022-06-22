import { Paper, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import Layout from "../components/Layout";
import ResponsiveContainer from "../components/Layout/ResponsiveContainer";

const Home: NextPage = () => {
  return (
    <Layout
      title="QuillBook | Home"
      description="QuillBook is a personal blog and portfolio"
    >
      <Hero />
    </Layout>
  );
};

export default Home;

type HeroProps = {};

const Hero = (props: HeroProps) => {
  return (
    <Paper sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}>
      <ResponsiveContainer>
        <Stack>
          <Typography variant="h1">Shadiul Huda</Typography>
          <Typography variant="body1">
            Before then, I had been a biochemist at a chemical company and an
            agency at a start-up real-estate IT company. Curious and resourceful
            by nature, I love the process of discovering the problems and
            creating empowering experiences that can contribute to people’s life
            to making the world a better place, no matter which field I stayed
            in.
          </Typography>
        </Stack>
      </ResponsiveContainer>
    </Paper>
  );
};
