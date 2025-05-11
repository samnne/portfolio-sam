const Button = ({ label, icon, link }) => {
  return (
    <button className=" hover:bg-secondary text-secondary transition-all duration-300 ease-in-out cursor-pointer hover:text-text-primary border border-secondary py-2 px-1 rounded-full gap-2 flex justify-center items-center">
      <span className="max-md:text-md text-lg font-semibold  px-1">
        {label}
      </span>

      {link ? (
        <a href={link} className="" target="none">
          <i
            className={`${icon} max-sm:text-md text-lg bg-secondary text-background max-sm:p-2 p-4 rounded-full`}
          ></i>
        </a>
      ) : (
        <i
          className={`${icon} max-sm:text-md  text-lg  bg-secondary text-background max-sm:p-2 p-4 rounded-full`}
        ></i>
      )}
    </button>
  );
};

export default Button;
