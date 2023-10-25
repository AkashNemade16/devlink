import React from "react";
import Image from "next/image";
import Link from "next/link";
interface buttonProps {
  type: string;
  input: string;
  imageUrl: string;
  color: string;
}

const PreviewButton = ({ type, input, imageUrl, color }: buttonProps) => {
  const colorVariants = {
    githubColor: "bg-githubColor",
    codeWarsColor: "bg-codeWarsColor",
    stackOverflowColor: "bg-stackOverflowColor",
    frontEndMentorColor: "bg-frontEndMentorColor",
    linkedinColor: "bg-linkedinColor",
    twitterColor: "bg-twitterColor",
    hashNodeColor: "bg-hashNodeColor",
    youtubeColor: "bg-youtubeColor",
    facebookColor: "bg-facebookColor",
    gitLabColor: "bg-gitLabColor",
    codePenColor: "bg-codePenColor",
    twitchColor: "bg-twitchColor",
    freeCodeCampColor: "bg-freeCodeCampColor",
  }

  return (
    <div className={`flex w-[237px] h-[56px] flex-col rounded-md justify-center items-center ${colorVariants[color as keyof typeof colorVariants]}  mt-3`}>
      <Link className="w-full pr-3 pl-3" href={input || ""}>
        <div className="flex flex-row justify-between w-full">
          <div className="flex">
            {<Image src={imageUrl} height={20} width={20} alt={type} />}
          </div>
          <div className={`flex ${type==='FrontendMentor'?'text-black':'text-white'}`}>{type}</div>
          <div className="flex">
            <Image
              style={{filter: type==='FrontendMentor'?'invert(100%)':'invert(0%)'}}
              src={"images/icon-arrow-right.svg"}
              height={20}
              width={20}
              alt="arrow"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PreviewButton;