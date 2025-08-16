
import { navLinks } from "../constants/constants";

const Nav = () => {

  function toggleCollapse() {
    const content = document.getElementById(`navLinks`);
    //content.classList.toggle("hidden")

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  function handleActiveLink(e, index) {
    const button = document.querySelectorAll(`#active-links`)

    button.forEach(b => {

      if (b.classList.contains(index)){
        b.classList.toggle("bg-secondary")
      } else {
        b.classList.remove("bg-secondary")
      }
    })
  }
  return (
    <header className="fixed z-50 pt-5 w-full fixed-top gradient shadow-lg shadow-gray-950 min-lg:shadow-none min-lg:bg-none">
      <nav className="flex justify-center max-lg:justify-between px-5 text-primary">
        <ul className="flex justify-center max-lg:hidden gap-2 border gradient shadow-md shadow-gray-950 border-secondary-dark p-1 rounded-full">
          {navLinks.map((item) => {
            return (
              <a
                key={item.label}
                href={item.href}
                role="button "
                className="focus:bg-secondary not-focus:hover:bg-[#4b737a50] text-xl  cursor-pointer transition-all duration-200 ease-in-out text-text-primary px-5 py-2 rounded-full "
              >
                <li className="" key={item.label}>
                  {item.label}
                </li>
              </a>
            );
          })}
        </ul>
        <p className="hidden max-lg:block cursor-pointer py-1 px-2 text-3xl rounded-full duration-300 transition-colors">
          <span className="font-bold tracking-widest">SAM</span>
        </p>
        <a
          role="button"
          onClick={toggleCollapse}
          aria-controls="navLinks"
          className="hidden max-lg:block cursor-pointer py-1 px-2 text-3xl rounded-full duration-300 transition-colors peer"
        >
          <i className="fa-solid fa-bars "></i>
        </a>
      </nav>
      <div
        id="navLinks"
        className="overflow-hidden mt-5 max-h-0 transition-all peer-checked:max-h-full duration-300 ease-in-out"
      >
        <ul className="gradient shadow-md  shadow-gray-950 border-secondary-dark">
          {navLinks.map((item, index) => {
            return (
              <li
                className="text-xl   not-first:hover:bg-[#4b737a50] text-text-primary  w-full "
                key={item.label}
              >
                <a
                  role="button"

                  id={`active-links`}
                  onClick={(e) => handleActiveLink(e, index)}
                  className={`inline-block ${index} hover:bg-[#4b737a50] text-xl cursor-pointer transition-all duration-200 ease-in-out px-2 py-2 text-text-primary  w-full`}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
