import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import moment from "moment";
import Link from "next/link";
import Blog from "../../interfaces/blog";

type BlogCardProps = {
  blog: Blog;
};

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Card>
      <CardMedia component="img" image={blog.cover} alt="" height={256} />

      <CardContent>
        <Typography variant="h6">{blog.title}</Typography>

        <Typography variant="subtitle2">
          {moment(blog.date).startOf("hour").fromNow()}
        </Typography>

        <Typography variant="body1">{blog.description}</Typography>
      </CardContent>

      <CardActions>
        <Link href={`blog/${blog.id}`}>
          <Button variant="outlined" sx={{ ml: "auto" }}>
            Read
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
