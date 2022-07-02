import {
  Box,
  Paper,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
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

            <BlogMarkdown markdown={data?.blog.description ?? ""} />

            {/* <Typography variant="body1" align="justify">
              {isLoading && <Skeleton width="50%" />}
              {data &&
                data.blog.description.split("\n").map((text, index) => (
                  <span className="block" key={index}>
                    {text}
                  </span>
                ))}
            </Typography> */}
          </Stack>
        </ResponsiveContainer>
      </Paper>
    </Layout>
  );
};

export default BlogPage;

type BlogMarkdownProps = {
  markdown: string;
};

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import {
  materialDark,
  materialLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

const BlogMarkdown = ({ markdown }: BlogMarkdownProps) => {
  const theme = useTheme();
  const syntaxTheme =
    theme.palette.mode === "dark" ? materialDark : materialLight;

  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              showLineNumbers
              style={syntaxTheme}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};
