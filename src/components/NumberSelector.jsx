const NumberSelector = ({ setError, error, selectNumber, setSelectNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectNumber(value);
    setError("");
  };

  return (
    <div className="flex flex-col items-center md:items-end gap-3">
      <p className="text-red-600 text-lg h-6">{error}</p>
      
      <div className="flex gap-4 md:gap-6">
        {arrNumber.map((value, i) => (
          <div
            key={i}
            onClick={() => numberSelectorHandler(value)}
            className={`h-12 w-12 md:h-16 md:w-16 border border-black grid place-items-center text-xl md:text-2xl font-bold cursor-pointer transition-all
              ${value === selectNumber ? "bg-black text-white" : "bg-white text-black"}
            `}
          >
            {value}
          </div>
        ))}
      </div>
      
      <p className="text-lg md:text-2xl font-bold">Select Number</p>
    </div>
  );
};

export default NumberSelector;