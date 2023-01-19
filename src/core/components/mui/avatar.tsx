import { styled } from "@mui/material/styles";
import { Badge, Avatar, Stack } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function BadgeAvatars(props: any) {
  const { alt, img, withStatus, ...other } = props;
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="center">
        {withStatus ? (
          <StyledBadge
            overlap="circular"
            variant="dot"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Avatar alt={alt} src={img} {...other} />
          </StyledBadge>
        ) : (
          <Avatar alt={alt} src={img} {...other} />
        )}
      </Stack>
    </>
  );
}
