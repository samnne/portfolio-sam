import { motion } from "motion/react";
const CodeCard = ({
  codeName,
  icon,
  index,
}: {
  codeName: string;
  icon: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        z: index,
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        scaleX: 1.1,
        translateY: -15,
        rotateX: "15deg",
        rotateZ: -1
      }}
      transition={{
        delay: index * 0.02,
        type: "spring",
        stiffness: 300
      }}
      style={{ [`--order`]: index }}
      className={`flex md:flex-col justify-center   md:w-40 md:h-40 w-full h-20 items-center shadow-md shadow-black  ${index % 2 === 0 ? "bg-black border-white border text-white" : "bg-white text-black"} backdrop-blur-md  py-2 px-1 sm:py-5 sm:px-3 gap-2 `}
    >
      <img
        src={icon}
        alt=""
        className="w-full object-contain h-full p-5 grayscale"
        width={24}
        height={24}
      />
      <p className="font-semibold  px-1 w-full  ">{codeName}</p>
    </motion.div>
  );
};

export default CodeCard;
