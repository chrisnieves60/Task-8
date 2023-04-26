import Image from "next/image";
import facebook from "../images/facebook.svg";
import snapchat from "../images/snapchat.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
const SocialLinks = () => {
  return (
    <sociallinks className="pt-14 items-center flex justify-between barge">
      <Image src={snapchat} height={50} width={50} />
      <Image src={facebook} height={50} width={50} />
      <Image src={instagram} height={50} width={50} />
      <Image src={twitter} height={50} width={50} />
    </sociallinks>
  );
};

export default SocialLinks;
