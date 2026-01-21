import PropTypes from 'prop-types';

const CodeCard = ({ codeName, icon, index }) => {
  return (
    <div
      style={{ [`--order`]: index }}
      className="flex flex-col justify-center  w-40 h-40 items-center shadow-md shadow-black  bg-white/20 backdrop-blur-md  py-2 px-1 min-sm:py-4 min-sm:px-3 gap-2 rounded-2xl "
    >
      <img src={icon} alt="" className='w-full h-full p-5 grayscale' width={24} height={24} />
      <p className="font-semibold text-white px-1">{codeName}</p>
    </div>
  );
};

CodeCard.propTypes = {
  codeName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default CodeCard;
