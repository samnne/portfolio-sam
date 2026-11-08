import { makeTextJitter } from "../components/TextJitter.tsx";
import {domAnimation, LazyMotion} from "framer-motion"
const Links = () => {
  const links = [
    {
      link: "https://github.com/samnne",
      name: "Github",
    },
    {
      link: "https://www.linkedin.com/in/samuel-echefu/",
      name: "LinkedIn",
    },
    {
      name: "Spotify",
      link: "https://open.spotify.com/user/ums1tm9a5sabtmn4bxg5jbcp0",
    },
    { name: "Instagram", link: "https://www.instagram.com/mashce_/" },
  ];
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="border-t  border-accent/20">
        <div className="grid grid-cols-5 items-start relative pt-10">
          <h2 className="text-accent max-sm:pb-5 sticky top-10 uppercase  font-black text-base">
            <span className="flex ">{makeTextJitter("Links", -10)}</span>
          </h2>
          <div className=" col-span-5 sm:col-span-4 gap-4 grid grid-cols-4">
            {links.map((link) => {
              return (
                <a
                  key={link.link}
                  className="link"
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default Links;
