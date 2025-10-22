import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="overflow-x-hidden"> {/* Prevent horizontal scroll */}

      {/* Section 1 */}
      <div className="section-1 bg-[#f3f9fd] h-[200vh] w-screen relative">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/video-nature.mp4" type="video/mp4" />
        </video>

        {/* 🔹 Gradient Overlay Layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0EB2B3]/70 to-[#1B6758]/70 backdrop-blur-sm z-[1]" />

        {/* Navbar */}
        <nav className={`${poppins.className} z-10 relative bg-white h-[14vh] w-full flex justify-between px-4`}>
          <img src="/Logo.png" className="h-[16vh] w-[45vh] " />
          <div className="flex items-center w-[80vh] justify-between font-semibold text-[4vh]">
            <Link href="/"><h4 className="cursor-pointer">Home</h4></Link>
            <Link href="/issues"><h4 className="cursor-pointer">Issues</h4></Link>
            <Link href="/report"><h4 className="cursor-pointer">Report</h4></Link>
          </div>
          <button className={`font-semibold border-3 w-22 h-10 m-5 text-[3.5vh] border-[#8a8a8a89] rounded-full`}>Login</button>
        </nav>

        {/* Title */}
        <div className={`absolute text-[5.5rem] top-[22vh] z-10 font-semibold text-center left-[25%] -translate-x-1/6`}>MAKE YOUR CITY{" "}
        <span className="bg-gradient-to-r from-[#3399ff] via-[#8055aa] via-[#b399c8] to-[#cc6677] bg-clip-text text-transparent">
          BETTER
        </span>{" "}
        ONE REPORT AT A TIME
      </div>
        <div className={`absolute text-[1.6rem] top-[99vh] z-10 text-center left-[50%] font-semibold -translate-x-1/2`} >Instantly report civic issues, track progress, and see real change happen in your community. Join thousands of citizens making your neighbourhoods safer and more livable</div>
        <div className="absolute z-[10] text-[2.8rem] bottom-[52vh] text-center left-[50%] -translate-x-1/2">
         <Link href="/report">
          <button className=" bg-[#07c36d] rounded-xl px-5 hover:scale-105 transition-all shadow-2xl shadow-[0_0_30px_rgba(0,0,0,0.7)]">Report an Issue</button>
          </Link>
        </div>
        <div className="border-2 absolute z-[10] text-[2.8rem] text-center left-[50%] -translate-x-1/2 bottom-[36vh] px-10 border-[#07c36d] text-[#07c36d] font-semibold rounded-xl">SNAP FIX</div>
      </div>

      <div className="section-2 bg-[#f3f9fd] h-screen">
        <div className="z-1 text-[8vh] relative left-[15vh]">
          <div className="font-bold pt-[6vh]">HOW SNAP FIX</div>
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
              <h4 className="relative top-[19vh] left-[34vh] font-semibold text-[1.7rem]">SNAP FIX</h4>
              <div className="bg-white h-[9vh] w-[25vh] absolute top-[28vh] left-[33vh] rounded-md">
                <img src="/issue.png" className="h-[8vh] w-[10vw] mt-1 pl-1  "></img>
              </div>
              <div className="bg-white h-[9vh] w-[25vh] absolute top-[38vh] left-[33vh] rounded-md">
                <img src="/issue1.png" className="h-[8vh] w-[10vw] mt-1 pl-1"></img>
              </div>
              <div className="bg-white h-[9vh] w-[25vh] absolute top-[48vh] left-[33vh] rounded-md">
                <img src="iss-3.png" className="h-[8vh] w-[10vw] mt-1 pl-1"></img>
              </div>
              <button className="bg-black absolute h-[6vh] w-[25vh] top-[60vh] left-[33vh] rounded-full text-white">Report</button>
            </div>
        </div>
      </div>
    </main>
  );
}
