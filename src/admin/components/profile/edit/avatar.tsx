import React from "react";
import { useTranslation } from "react-i18next";

import { EditTypeEnum, StatusTypeEnum } from "../../../../core/constant";
import { PublicContext } from "../../../../core/context";
import { ButtonLoading } from "../../../../core/components";
import { importPhoto, UploadApi } from "../../../../core/libs";

export default function AvatarEditor(props: any) {
  const { t } = useTranslation(["admin"]);
  const { text, uploadAvatar, setUploadAvatar } = props;
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);
  const imageRef: any = React.useRef();

  const openFileDialog = () => imageRef.current.click();

  const handleAddPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    setUploadAvatar(EditTypeEnum.Editing);
    const { formData, resize, status }: any = await importPhoto(files);

    if (status === false) {
      setPublicCtx({
        ...publicCtx,
        alert: {
          open: true,
          message: t("image-size-error"),
          severity: StatusTypeEnum.Error,
        },
      });

      setUploadAvatar(EditTypeEnum.None);
      return;
    }

    let _result: any = await UploadApi({ picture: formData }, "admin/upload");

    switch (_result.code) {
      case 200:
        setUploadAvatar(EditTypeEnum.Edited);
        const objectUrl = URL.createObjectURL(resize);

        setPublicCtx({
          ...publicCtx,
          user: {
            ...publicCtx.user,
            avatar: objectUrl,
          },
        });

        break;
      case 500:
        setUploadAvatar(EditTypeEnum.None);

        setPublicCtx({
          ...publicCtx,
          alert: {
            open: true,
            message: t("unexpected-error-upload-avatar"),
            severity: StatusTypeEnum.Error,
          },
        });

        break;
      default:
        setUploadAvatar(EditTypeEnum.None);
        break;
    }
  };

  return (
    <>
      <ButtonLoading
        text={text}
        variant="contained"
        onClick={openFileDialog}
        loading={uploadAvatar === EditTypeEnum.Editing}
      />

      <input
        type="file"
        ref={imageRef}
        style={{ display: "none" }}
        accept="image/jpeg, image/png"
        onChange={handleAddPhoto}
      />
    </>
  );
}
