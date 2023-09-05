// links
import Link from "next/link";

// icons
import {
  RiFacebookLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiGithubFill,
  RiPinterestLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className=" flex items-center gap-x-5 text-lg">
      <Link
        href={""}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={""}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/profile.php?id=100012165210505"}
        target="_blank"
        className=" hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://github.com/Pyae-Sone-Phone-Myint"}
        target="_blank"
        className=" hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={""}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
