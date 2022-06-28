import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton, Stack } from "@mui/material";

type Props = {};

const SocialLinks = (props: Props) => {
  return (
    <Stack direction="row" gap={0.5}>
      <IconButton color="primary">
        <FacebookRoundedIcon />
      </IconButton>
      <IconButton color="primary">
        <TwitterIcon />
      </IconButton>
      <IconButton color="primary">
        <LinkedInIcon />
      </IconButton>
      <IconButton color="primary">
        <GitHubIcon />
      </IconButton>
    </Stack>
  );
};

export default SocialLinks;
