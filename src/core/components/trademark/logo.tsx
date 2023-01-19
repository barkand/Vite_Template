import { Link } from "react-router-dom";

import logo from "/assets/media/logo/logo.png";
import { RoutesTypeEnum } from "../../constant";

export default function Logo() {
  return (
    <Link to={RoutesTypeEnum.Home}>
      <img
        alt="Logo"
        src={logo}
        style={{ width: "30px", marginRight: "20px" }}
      />
    </Link>
  );
}
