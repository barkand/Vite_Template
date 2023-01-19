import { Box, Fab, CircularProgress } from "@mui/material";
import { Check as CheckIcon, Save as SaveIcon } from "@mui/icons-material";
import { green } from "@mui/material/colors";

export default function ButtonCircularLoading({
  loading,
  success,
  onClick,
}: any) {
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ m: 1, position: "relative" }}>
        <Fab aria-label="save" color="primary" sx={buttonSx} onClick={onClick}>
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
    </Box>
  );
}
