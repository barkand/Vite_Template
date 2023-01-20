import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Badge, Menu, MenuItem } from "@mui/material";

export default function BadgeButton(props: any) {
  const { children, items, link, onClick }: any = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = async (id?: number) => {
    if (id) await onClick(id);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{ ...props.sx, width: "40px", height: "40px" }}
        aria-label={props.label}
        onClick={handleOpen}
      >
        <Badge
          badgeContent={items ? items.length : 0}
          color="error"
          aria-controls="menu-appbar"
          aria-haspopup="true"
        >
          {children}
        </Badge>
      </IconButton>
      {items && items.length > 0 && (
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={() => handleClose()}
        >
          {items.map((item: any) => (
            <Link key={item.refer_id} to={`${link}/${item.refer_id}`}>
              <MenuItem
                key={item.refer_id}
                sx={{ fontSize: "13px" }}
                onClick={() => handleClose(item.refer_id)}
              >
                {item.message}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      )}
    </>
  );
}
