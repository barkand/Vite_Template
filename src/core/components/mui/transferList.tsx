import React from "react";
import {
  Grid,
  List,
  Card,
  CardHeader,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Button,
  Divider,
  ListItemButton,
} from "@mui/material";

import { PublicContext } from "../../context";
import { not, intersection, union } from "../../libs/base/array";

export default function TransferList({
  LeftList,
  RightList,
  setTeams,
  LeftTitle,
  RightTitle,
}: any) {
  const { publicCtx }: { publicCtx: any } = React.useContext(PublicContext);
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [checked, setChecked] = React.useState<readonly number[]>([]);
  const [left, setLeft] = React.useState<readonly number[]>([]);
  const [right, setRight] = React.useState<readonly number[]>([]);

  const FullList: any = union(LeftList, RightList);

  React.useEffect(() => {
    if (!loaded) return;
    setLeft(Object.keys(LeftList).map((key) => LeftList[key].id));
  }, [LeftList]);

  React.useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      return;
    }
    setRight(Object.keys(RightList).map((key) => RightList[key].id));
  }, [RightList]);

  React.useEffect(() => {
    if (!loaded) return;
    let _list: any = [];
    right.forEach((id: number) => {
      let pr: any = Object.values(FullList).find((r: any) => r.id === id);
      _list.push({
        id: pr?.id,
        image: pr?.image,
      });
    });
    setTeams(_list);
  }, [right]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: readonly number[]) =>
    intersection(checked, items).length;

  const handleToggleAll = (items: readonly number[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const getName = (FullList: any, value: any) => {
    let _obj: any = Object.values(FullList).find(
      (val: any) => val.id === value
    );
    return _obj?.name;
  };

  const customList = (title: React.ReactNode, items: readonly number[]) => (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              "aria-label": "all items selected",
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length}`}
      />
      <Divider />
      <List
        sx={{
          width: 300,
          height: 270,
          bgcolor: "background.paper",
          overflow: "auto",
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value: number) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItemButton
              key={value}
              role="listitem"
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={getName(FullList, value)}
                sx={{ textAlign: publicCtx.culture.align }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Card>
  );

  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>{customList(LeftTitle, left)}</Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList(RightTitle, right)}</Grid>
      </Grid>
    </>
  );
}
