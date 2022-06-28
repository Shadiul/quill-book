import { Divider, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useResponsiveMaxWidth } from "../../hooks/useResponsiveMaxWitdth";
import { useIsMobile, useIsTablet } from "../../utility/media_query_helper";
import ResponsiveContainer from "./ResponsiveContainer";

type FooterProps = {};

const Footer = (props: FooterProps) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <Paper
      component="footer"
      sx={{
        py: "48px",
        backgroundColor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      <ResponsiveContainer>
        {/* Top Section */}
        <section
          className="w-full grid gap-6"
          style={{
            gridTemplateColumns: `repeat(${
              isTablet ? 2 : isMobile ? 1 : 4
            }, minmax(0, 1fr))`,
          }}
        >
          <Stack>
            <Typography variant="h2">Shadiul Huda</Typography>
            <Typography variant="body1">Blog and portfolio site </Typography>
          </Stack>

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
        <section className="flex flex-col gap-4">
          <Divider sx={{ borderColor: "primary.contrastText" }} />
          <Typography textAlign="center">Copyright @ 2022</Typography>
        </section>
      </ResponsiveContainer>
    </Paper>
  );
};

export default Footer;
