import React, { useState } from "react";
import { useGlobalContext } from "../(context)/store";
const ShareLink = () => {
  const { links, setCopied } = useGlobalContext();
  const url = links?.map((item) => {
    return item.url;
  });
  const copyToClipboard = async () => {
    try {
      navigator.clipboard.writeText(url.toString());
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      setCopied(false);
      console.log(err);
    }
  };
  return (
    <div className="flex items-center justify-center border-2 border-purple bg-purple rounded-md p-4 mr-2">
      <button onClick={copyToClipboard} className="text-white">
        Share Link
      </button>
    </div>
  );
};

export default ShareLink;
