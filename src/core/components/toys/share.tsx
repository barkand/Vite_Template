import React from "react";
import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import { styled } from "@mui/material/styles";

import { PublicContext } from "../../context";
import {
  ShareIcon,
  LinkedInIcon,
  FacebookIcon,
  TwitterIcon,
  MailIcon,
} from "../../icon";

const withLink = (to: any, children: any) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    style={{ paddingTop: "5px" }}
  >
    {children}
  </a>
);

export default function ShareButton({
  url,
  direction,
}: {
  url: string;
  direction: any;
}) {
  const { publicCtx }: any = React.useContext(PublicContext);
  const _title = "";
  const _url = `${import.meta.env.VITE_CLIENT_PATH}/#/${url}`;

  const actions = [
    {
      name: "LinkedIn",
      icon: withLink(
        `https://www.linkedin.com/shareArticle?url=${_url}&title=${_title}`,
        <LinkedInIcon />
      ),
    },
    {
      name: "Facebook",
      icon: withLink(
        `https://www.facebook.com/sharer.php?u=${_url}`,
        <FacebookIcon />
      ),
    },
    {
      name: "Twitter",
      icon: withLink(
        `https://twitter.com/intent/tweet?url=${_url}&text=${_title}`, //&via=id
        <TwitterIcon />
      ),
    },
    {
      name: "Mail",
      icon: withLink(`mailto:?subject=${_title}&body=${_url}`, <MailIcon />),
    },
  ];

  const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: "absolute",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: -25,
      right: -7,
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(0),
      left: publicCtx.device.isMobile ? "-35px" : theme.spacing(0),
    },
  }));

  return (
    <Box sx={{ transform: "translateZ(0px)" }}>
      <StyledSpeedDial
        ariaLabel="Share Link"
        icon={
          <ShareIcon
            sx={{
              color: publicCtx.theme.background.isDark ? "white" : "black",
            }}
          />
        }
        direction={direction}
        FabProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
            "&:hover": {
              bgcolor: "transparent",
            },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </StyledSpeedDial>
    </Box>
  );
}
