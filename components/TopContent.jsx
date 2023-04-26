import { getCurrentUser } from "../utils/data";
import Image from "next/image";
import avatar from "../images/avataaars.svg";

const { name, email } = getCurrentUser();

const TopContent = () => {
  return (
    <topcontent>
      <Image
        className="mx-auto pt-4 flex items-center rounded-full"
        src={avatar}
        alt={"avatar"}
        width={175}
        height={175}
      />
      <p className="name">{name}</p>
    </topcontent>
  );
};

export default TopContent;
