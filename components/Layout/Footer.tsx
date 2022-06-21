import { Divider, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { useIsMobile, useIsTablet } from "../../utils/media_query_helper";

type FooterProps = {};

const Footer = (props: FooterProps) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const contentClasses = ` max-w-[${
    isTablet ? 650 : 1128
  }px] w-full grid grid-cols-${isTablet ? 2 : isMobile ? 1 : 4} gap-6`;

  return (
    <footer>
      <Paper
        sx={{
          px: isMobile ? "32px" : null,
          py: "48px",
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        }}
      >
        {/* Top Section */}
        <section
          className="mx-auto w-full grid gap-6"
          style={{
            maxWidth: isTablet ? "650px" : "1128px",
            gridTemplateColumns: `repeat(${
              isTablet ? 2 : isMobile ? 1 : 4
            }, minmax(0, 1fr))`,
          }}
        >
          <div>
            <Typography variant="h4">Shadiul Huda</Typography>
            <Typography variant="body1">Blog and portfolio site </Typography>
          </div>

          <div className="flex flex-col gap-2">
            <Typography variant="subtitle1">Information</Typography>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">FAQ</Link>
          </div>

          <div className="flex flex-col gap-2">
            <Typography variant="subtitle1">Company</Typography>
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
          </div>

          <div className="flex flex-col gap-2">
            <Typography variant="subtitle1">Social Media</Typography>
            <Typography variant="subtitle1">
              <Link href="mailto:shadiul.71@gmail.com">
                shadiul.71@gmail.com
              </Link>
            </Typography>
            <Typography variant="body1">
              Address: Mirpur 12, Dhaka, Bangladesh
            </Typography>
          </div>
        </section>

        <div className="h-12" />

        {/* Bottom Section */}
        <section className="mx-auto max-w-[1128px] flex flex-col gap-4">
          <Divider sx={{ borderColor: "primary.contrastText" }} />
          <Typography>Copyright @ 2022</Typography>
        </section>
      </Paper>
    </footer>
  );
};

export default Footer;
