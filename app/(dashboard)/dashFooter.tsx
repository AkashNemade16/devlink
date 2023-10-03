"use client";
import React from "react";
import Button from "../components/Button";
const DashFooter = () => {
  return (
    <div className="w-full flex flex-col border-t-2 border-greyShade mt-2 mb-2">
      <div className="mt-3">
        <Button
          text="Save"
          onClick={() => {
            console.log("clicked");
          }}
          color="bg-purple"
          textColor="text-white"
          disabled={true}
        />
      </div>
    </div>
  );
};

export default DashFooter;
