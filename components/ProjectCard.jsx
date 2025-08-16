import Button from "./Button";

const ProjectCard = ({ name, description, code, repo, website, imgURL }) => {
  return (
    <div className="flex justify-between shadow-lg text-secondary shadow-black items-center flex-col p-3 rounded-4xl text-center bg-neutral-900 gap-2 ">
      <div className="max-w-2xl rounded-xl p-2 h-auto aspect-video  ">
        <img
          src={imgURL}
          alt=""
          className="rounded-2xl w-full h-full border-2 border-secondary shadow-lg shadow-black"
        />
      </div>
      <h3 className="capitalize font-medium mt-4 text-5xl font-inter">
        {name}
      </h3>
      <p className="mt-4 font-medium max-w-sm my-4 capitalize">{description}</p>
      <div className="flex justify-center items-center flex-wrap max-w-md gap-2">
        {code.map((c, index) => {
          return (
            <div
              key={c}
              style={{ [`--order`]: index }}
              className="bg-neutral-950 animate-wiggle shadow-lg shadow-black px-2 py-3 border border-secondary-dark rounded-2xl"
            >
              <p className="font-semibold tracking-wide">{c}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-2 p-4 flex gap-2 ">
        <Button label="Source Code" icon={`fa-brands fa-github`} link={repo} />

        <Button
          label="Website"
          icon={`fa-solid fa-arrow-up-right-from-square`}
          link={website}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
