const StartGame = ({ toggle }) => {
  return (
    /* flex-col: ဖုန်းမှာဆိုရင် အပေါ်အောက်စီမယ်
       lg:flex-row: ကွန်ပျူတာ screen မှာဆိုရင် ဘေးတိုက်စီမယ်
       items-center: အလယ်မှာ အချိုးကျထားမယ်
       h-screen: ဒါက 100vh ပါပဲ
    */
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen max-w-[1180px] mx-auto p-4 lg:p-0 gap-10">
      
      {/* Image Section */}
      <div className="w-full max-w-[400px] lg:max-w-none">
        <img src="/images/dices.png" alt="dices image" className="w-full h-auto" />
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col items-center lg:items-end">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold whitespace-nowrap uppercase">
          Dice Game
        </h1>
        
        <button 
          onClick={toggle}
          className="mt-5 min-w-[220px] bg-black text-white px-4 py-2.5 rounded-md text-base font-medium border border-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-black cursor-pointer"
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default StartGame;