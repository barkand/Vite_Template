import React from "react";
import _debounce from "lodash/debounce";

import { EditTypeEnum } from "../../../../core/constant";
import { PublicContext } from "../../../../core/context";
import { Textbox } from "../../../../core/components";

import { UpdateUsername as ApiUpdateUsername } from "../api";

export default function UsernameEditor(props: any) {
  const { setEditUsername } = props;
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);

  const debounceFn = React.useCallback(_debounce(handleDebounceFn, 1000), []);

  async function handleDebounceFn(inputValue: any) {
    let _inputValue = inputValue.trim();
    if (_inputValue === "") return;

    let _result: any = await ApiUpdateUsername(_inputValue);

    switch (_result.code) {
      case 200:
        setEditUsername(EditTypeEnum.Edited);

        setPublicCtx({
          ...publicCtx,
          user: {
            ...publicCtx.user,
            name: _result.user.name,
            score: _result.user.score,
          },
        });

        break;
      case 300:
        setEditUsername(EditTypeEnum.Error);
        break;
      case 500:
        setEditUsername(EditTypeEnum.None);
        break;
      default:
        setEditUsername(EditTypeEnum.None);
        break;
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debounceFn(event.target.value);
    setEditUsername(EditTypeEnum.None);
  };

  return (
    <>
      <div style={{ direction: "ltr" }}>
        @{" "}
        <Textbox
          autoComplete="off"
          sx={{ width: "16ch" }}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
