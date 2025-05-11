const CodeCard = ({ codeName, icon, index }) => {
  return (
    <div
      style={{ [`--order`]: index }}
      className="flex  justify-center  items-center shadow-md shadow-black animate-wiggle bg-secondary-dark py-2 px-1 min-sm:py-4 min-sm:px-3 gap-2 rounded-2xl "
    >
      <img src={icon} alt="" width={24} height={24} />
      <p className="font-semibold px-1">{codeName}</p>
    </div>
  );
};

export default CodeCard;
