import Resizer from "./external/resizer";

const ImageResize = async (file: File) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      200,
      200,
      "WEBP",
      100,
      0,
      (uri: any) => resolve(uri),
      "file",
      200,
      200
    );
  });

export default ImageResize;
