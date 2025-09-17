import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <div className="section-1 bg-[#f3f9fd] h-screen w-screen relative min-h-[200vh]">
        <nav className="z-2 relative bg-transparent h-[18vh] w-[100%] flex justify-between ">
          <img src="/Logo.png" className=" h-[16vh] w-[45vh] pt-4 pl-4" />
          <div className="flex items-center w-[60vh] ml-5 justify-between">
            <Link href="/"><h4 className="cursor-pointer">Home</h4></Link>
            <Link href="/issues"><h4 className="cursor-pointer">Issues</h4></Link>
            <Link href="/report"><h4 className="cursor-pointer">Report</h4></Link>
          </div>
          <div>
            <button className="border-2 w-22 h-10 m-8 font-semibold relative border-[#8a8a8a89] rounded-full">Login</button>
          </div>
        </nav>
        <div className="blur-[18px] absolute h-[22vw] w-[18vw] left-[-5vw] top-[-20vh] bg-[#d0d3e4] rounded-[50%] top-[0vw] animate-[bounce_5s_ease-in-out_infinite]">
          <div className="animate-[bounce_5s_ease-in-out_infinite] absolute bg-[#b5b5cf] h-[12vw] w-[20vw] left-[5vw] rounded-r-[40%] rounded-l-[40%]"></div>
          <div className="absolute h-[12vw] w-[12vw] bg-[#c6c9df] left-[0vh] top-[0vh] rounded-r-[40%]"></div>
        </div>
        <div className=" absolute bg-[#c6c9df] animate-[bounce_5s_ease-in-out_infinite] h-[12vw] w-[15vw] top-[28vh] rounded-full blur-[18px] left-[100vh] "></div>
        <div className="absolute bg-[#c6c9df] h-[13vw] w-[13vw] right-[-3vh] top-[7vh] rounded-l-[50%] blur-[18px] animate-[bounce_5s_ease-in-out_infinite]"></div>
       
        <div className="absolute text-[10rem] top-[16vh] z-1 font-semibold left-[50vh]">SNAP FIX</div>

        <div className="absolute top-[40vh]">
          <img src="/marines.jpeg" className=" w-[90vw] pl-30 h-[150vh]" />
        </div>
        
      </div>
      <div className="section-2 bg-[#f3f9fd] h-screen">
        <div className="z-1 text-[8vh] relative left-[20vh]">
          <div className="font-bold">HOW SNAP FIX</div>
          <div>WORKS?</div>
        </div>
        <div className="relative left-[10vh] bg-[#e3e7ce] w-[90vw] h-[66vh] flex flex-col items-start justify-center px-[12vh] space-y-8 rounded-[10vh]">

            <div className="relative bg-[#a89e1a] h-[12vh] w-[60vh] rounded-full flex items-center pl-[12vh] transition-all duration-300 ease-in-out hover:scale-105">
              <div className="h-[9vh] w-[9vh] bg-[#413c17] rounded-full absolute top-[1.5vh] left-[2vh] flex items-center justify-center">
                <h4 className="text-white font-bold text-[4vh]">1</h4>
              </div>
                <h4 className="text-[4vh] text-white font-semibold ml-5">Snap a photo</h4>
            </div>

            <div className="relative bg-[#a89e1a] h-[12vh] w-[60vh] rounded-full flex items-center pl-[12vh] transition-all duration-300 ease-in-out hover:scale-105">
               <div className="absolute left-[2vh] h-[9vh] w-[9vh] bg-[#413c17] rounded-full flex items-center justify-center">
                <h4 className="text-white font-bold text-[4vh]">2</h4>
              </div>
                <h4 className="text-white font-semibold text-[4vh] ml-5">Select location</h4>
            </div>

            <div className="relative bg-[#a89e1a] h-[12vh] w-[60vh] rounded-full flex items-center pl-[12vh] transition-all duration-300 ease-in-out hover:scale-105">
              <div className="absolute left-[2vh] h-[9vh] w-[9vh] bg-[#413c17] rounded-full flex items-center justify-center">
                <h4 className="text-white font-bold text-[4vh]">3</h4>
              </div>
                <h4 className="text-white font-semibold text-[4vh] ml-5">Upload</h4>
            </div>
        </div>
        
        <div className="h-[20vh] w-[100vh] relative left-[51vw] top-[-91vh]">
            <img src="holding_phone-removebg-preview.png" className="absolute" />
            <div>
              <h4 className="relative top-[19vh] left-[34vh]">SNAP FIX</h4>
              <div className="bg-white h-[9vh] w-[25vh] absolute top-[25vh] left-[33vh]"></div>
              <div className="bg-white h-[9vh] w-[25vh] absolute top-[37vh] left-[33vh]"></div>
              <div className="bg-white h-[9vh] w-[25vh] absolute top-[49vh] left-[33vh]"></div>
              <button className="bg-black absolute h-[6vh] w-[25vh] top-[61vh] left-[33vh] rounded-full text-white">Report</button>
            </div>
        </div>

        

      </div>
    </main>
  );
}
