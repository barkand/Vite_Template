import { Box, Zoom, Fab } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@mui/icons-material";
import PropTypes from "prop-types";

function ScrollTop(props: any) {
  const { children } = props;

  const trigger = useScrollTrigger({
    target: undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: any) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function ScrollTopButton(props: any) {
  return (
    <>
      <div id="back-to-top-anchor" />
      {props.children}
      <ScrollTop {...props}>
        <Fab color="default" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
