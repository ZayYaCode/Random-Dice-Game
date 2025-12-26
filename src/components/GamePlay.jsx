import { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import Rules from './Rules'

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const roleDice = () => {
    if (!selectNumber) {
      setError("You have not selected any number!");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
    
    if (selectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectNumber(undefined);
  }

  const resetScore = () => setScore(0);

  return (
    // အပြင်ဆုံးက main မှာ items-center မသုံးဘဲ flex-col နဲ့သွားပါမယ်
    <main className="max-w-[1200px] mx-auto min-h-screen px-4 pb-20">
      
      {/* ၁။ အပေါ်ဆုံးအပိုင်း - Score နဲ့ Selector ကို ဘေးတိုက်ခွဲထုတ်ခြင်း */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
        <TotalScore score={score} />
        <NumberSelector 
          setError={setError} 
          error={error} 
          setSelectNumber={setSelectNumber} 
          selectNumber={selectNumber} 
        />
      </div>

      {/* ၂။ အလယ်ပိုင်း - ဒါတွေအကုန်လုံးကို အလယ်တည့်တည့်မှာပဲ ထားမှာမို့ div တစ်ခုနဲ့ အုပ်ပါမယ် */}
      <div className="flex flex-col items-center justify-center mt-10">
        <RoleDice currentDice={currentDice} roleDice={roleDice} />

        {/* Buttons */}
        <div className="flex flex-col gap-4 mt-10 mb-10 w-full items-center">
          <button 
            onClick={resetScore}
            className="min-w-[220px] py-2.5 bg-white text-black border border-black rounded-md font-semibold transition-all hover:bg-black hover:text-white cursor-pointer"
          >
            Reset Score
          </button>
          
          <button 
            onClick={() => setShowRules((prev) => !prev)}
            className="min-w-[220px] py-2.5 bg-black text-white border border-black rounded-md font-semibold transition-all hover:bg-white hover:text-black cursor-pointer"
          >
            {showRules ? "Hide" : "Show"} Rules
          </button>
          {showRules && <Rules />}
        </div>

        {/* ၃။ Rules Box - အလယ်တည့်တည့်ရောက်ဖို့ flex container ထဲမှာပဲ ထားပါတယ် */}
        
      </div>
    </main>
  );
}

export default GamePlay;