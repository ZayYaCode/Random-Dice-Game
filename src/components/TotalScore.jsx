const TotalScore = ({ score }) => {
  return (
    <div className="max-w-[200px] text-center">
      {/* text-7xl သည် ဖုန်းအတွက်၊ md:text-[100px] သည် Desktop အတွက် */}
      <h1 className="text-7xl md:text-[100px] font-bold leading-[100px]">{score}</h1>
      <p className="text-xl md:text-2xl font-medium">Total Score</p>
    </div>
  );
};

export default TotalScore;