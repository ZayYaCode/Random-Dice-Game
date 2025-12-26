const Rules = () => {
  return (
    <div className="mx-auto bg-[#fbf1f1] p-5 max-w-[800px] mx-auto mt-50 mb-10 rounded-lg">
      <h2 className="text-xl md:text-2xl font-bold">How to play dice game</h2>
      <div className=" mt-4 flex flex-col gap-1 text-sm md:text-base font-medium">
        <p>Select any number</p>
        <p>After click on dice, if selected number is equal to dice number, you will get same point as dice.</p>
        <p>If you get wrong guess then 2 points will be deducted.</p>
      </div>
    </div>
  );
};

export default Rules;