import { Paper, Typography } from "@mui/material";
import { NextPage } from "next";
import Layout from "../components/Layout";
import ResponsiveContainer from "../components/Layout/ResponsiveContainer";

const About: NextPage = () => {
  return (
    <Layout
      title="QuillBook | About"
      description="QuillBook is a personal blog and portfolio"
    >
      <Paper sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}>
        <ResponsiveContainer>
          <Typography variant="h1">About</Typography>
        </ResponsiveContainer>
      </Paper>
    </Layout>
  );
};

export default About;
