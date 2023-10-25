import React from "react";
import { useGlobalContext } from "../../app/(dashboard)/(context)/store"; // Make sure the path is correct and the module is exported correctly
import Image from "next/image";
import Link from "next/link";
interface buttonProps {
  type: string;
  input: string;
  imageUrl: string;
}

const PreviewButton = ({ type, input, imageUrl }: buttonProps) => { 
  return (
    <div className="flex w-[237px] flex-col">
      <Link href={input || ""}>
        <div className="flex flex-row">
          <div className="flex">
            {<Image src={imageUrl} height={20} width={20} alt={type} />}
          </div>
          <div className="flex">{type}</div>
        </div>
      </Link>
    </div>
  );
};

export default PreviewButton;
