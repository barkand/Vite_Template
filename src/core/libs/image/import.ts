import ImageResize from "./resize";

const checkSize = (file: File) => {
  if (file.size > 100000) {
    return false;
  }
  return true;
};

const importPhoto = async (files: any) => {
  if (files) {
    const _file: File = files[0];

    if (checkSize(_file) === false)
      return { status: false, formData: {}, resize: {} };

    let _resize: any = await ImageResize(_file);
    const formData = new FormData();
    formData.append("file", _resize);

    return { status: true, formData: formData, resize: _resize };
  }
};

export default importPhoto;
