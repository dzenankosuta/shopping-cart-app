import React, { useState } from "react";

const Footer = () => {
  const [isHovering, setIsHovering] = useState(false);
  const svgStyle = isHovering
    ? { transition: "0.2s", transform: "scale(1.2)" }
    : { transition: "0s", transform: "scale(1)" };
  return (
    <footer style={{ height: "17vh" }} className="w-full bg-slate-500 z-50">
      <div className="h-full flex flex-col items-center justify-center text-lg font-semibold">
        <p>Dženan Košuta</p>
        <p>© Copyright 2022</p>
        <p className="flex">
          View other projects on
          <a
            href="https://github.com/dzenankosuta?tab=repositories"
            target="_blank"
            rel="noreferrer"
            style={{ position: "relative", top: ".4rem", left: ".5rem" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`icon icon-tabler icon-tabler-brand-github`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fb923c"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={svgStyle}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
