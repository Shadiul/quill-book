import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton, Stack } from "@mui/material";
import SOCIAL_LINKS from "../constants/contents/social_links";

type Props = {};

const SocialLinks = (props: Props) => {
  return (
    <Stack direction="row" gap={0.5}>
      <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer">
        <IconButton color="primary">
          <FacebookRoundedIcon />
        </IconButton>
      </a>
      <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer">
        <IconButton color="primary">
          <TwitterIcon />
        </IconButton>
      </a>
      <a href={SOCIAL_LINKS.linkedIn} target="_blank" rel="noreferrer">
        <IconButton color="primary">
          <LinkedInIcon />
        </IconButton>
      </a>
      <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
        <IconButton color="primary">
          <GitHubIcon />
        </IconButton>
      </a>
    </Stack>
  );
};

export default SocialLinks;
