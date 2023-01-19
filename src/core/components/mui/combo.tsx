import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";

import { PublicContext } from "../../context";

export default function Combo(props: any) {
  const { selected, onChange, items, culture, direction, ...other } = props;
  const { publicCtx }: { publicCtx: any } = React.useContext(PublicContext);

  return (
    <FormControl
      variant="standard"
      sx={{ ...props.sx, width: "100%" }}
      {...other}
    >
      {props.title && <InputLabel>{props.title}</InputLabel>}
      <Select
        value={selected}
        onChange={onChange}
        multiple={props.multiple}
        renderValue={(val) => (props.multiple ? val.join(", ") : val)}
      >
        {items.map((itm: string, idx: number) => (
          <MenuItem
            data-index={idx}
            key={itm}
            value={itm}
            className={publicCtx.culture.name}
            sx={{
              direction: publicCtx.culture.direction,
              textAlign: publicCtx.culture.align,
            }}
          >
            <>
              {props.multiple && (
                <Checkbox checked={selected.indexOf(itm) > -1} />
              )}
              <ListItemText primary={itm} />
            </>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
