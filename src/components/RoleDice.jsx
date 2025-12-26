const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <div className="mt-12 flex flex-col items-center gap-2">
      <div className="cursor-pointer" onClick={roleDice}>
        {/* ပုံအရွယ်အစားကို ဖုန်းမှာ သေးထားပါတယ် */}
        <img src={`/images/dice_${currentDice}.png`} alt="dice" className="w-[200px] md:w-[250px]" />
      </div>
      <p className="text-xl md:text-2xl font-medium">Click on Dice to roll</p>
    </div>
  );
};

export default RoleDice;