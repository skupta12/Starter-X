import React from "react";
import { LinkButton } from "./Button";

const Social = ({ link, className }: { link: string; className?: string }) => {
  return (
    <div className={className}>
      <LinkButton className="text-white" title={link} />
    </div>
  );
};

export default Social;
