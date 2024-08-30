const CustomeButton = ({ title, handleClick, otherStyle }) => {
  return (
    <div className={`px-3 ${otherStyle}`}>
      <button
        className="bg-primary border-0 p-3 rounded-lg text-lg text-white font-bold hover:border-2"
        onClick={handleClick}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomeButton;
