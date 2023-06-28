import React from "react";
import { Select, MenuItem, FormControl } from "@mui/material";

import { PublicContext } from "@/core/context";
import { Colors } from "@/core/theme";
import { CircleIcon } from "@/core/icon";

export default function ColorSelect() {
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);
  const [color, settColor] = React.useState(publicCtx.theme.color);

  const handleChange = (event: any) => {
    let _color = event.target.value;
    settColor(_color);

    localStorage.setItem("color", _color);

    setPublicCtx({
      ...publicCtx,
      theme: { ...publicCtx.theme, color: _color },
    });
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ width: "100%" }}>
        <Select
          id="color-select"
          value={color}
          onChange={handleChange}
          label="Color"
          fullWidth
        >
          {Object.keys(Colors).map((color) => (
            <MenuItem
              key={color}
              value={color}
              sx={{
                color: Colors[color][publicCtx.theme.background.name].secondary,
              }}
            >
              <CircleIcon
                sx={{
                  width: "18px",
                  color: Colors[color][publicCtx.theme.background.name].primary,
                }}
              />
              <CircleIcon
                sx={{
                  width: "18px",
                  color:
                    Colors[color][publicCtx.theme.background.name].secondary,
                }}
              />
              {" " + color.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
