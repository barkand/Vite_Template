import React from "react";
import VanillaTilt from "vanilla-tilt";

export default function Tilt({ children }: any) {
  const tiltRef: any = React.useRef(null);

  React.useEffect(() => {
    const tiltNode: any = tiltRef.current;
    const options = {
      max: 25,
      speed: 400,
      // scale: 1.2,
      // glare: true,
      // maxGlare: 0.5,
    };
    VanillaTilt.init(tiltNode, options);
  }, []);

  return <div ref={tiltRef}>{children}</div>;
}
