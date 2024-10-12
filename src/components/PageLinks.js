import React from "react";
import { navLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <div>
      <ul className={parentClass} id={parentClass}>
        {navLinks.map((link) => {
          return <PageLink key={link.id} link={link} itemClass={itemClass} />;
        })}
      </ul>
    </div>
  );
};

export default PageLinks;
