import {
  FaTwitter,
  FaTelegramPlane,
  FaDiscord,
  FaRedditAlien,
  FaGithub,
  FaRegFile,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-custom-color items-center flex flex-col lg:flex-row gap-10">
      <div className="flex flex-row lg:py-6 gap-6 text-3xl mx-auto lg:ml-auto lg:mr-0">
        <FaTwitter />
        <FaTelegramPlane />
        <FaDiscord />
        <FaRedditAlien />
        <FaGithub />
        <FaRegFile />
      </div>
      <div className="flex flex-col gap-2 mx-auto lg:mr-auto lg:ml-0">
        <div className="lg:text-left">
          AKASHI: 0x00000000000000000000000000000
        </div>
        <div className="lg:text-left">
          Copyright © 2023 by Akashi Cloud. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
