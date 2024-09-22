"use client"

import { mainColor } from "@/Colors";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { SiCodeblocks } from "react-icons/si";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
    <NavBar/>
    <CTASection/>
    </div>
  );
}


function NavBar(){
  return(
    <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max:sm:flex-col">
      <Logo/>
      <Buttons/>
    </div>
  )
}

function Logo(){
  return(
    <div className="flex gap-2 items-center">
      <div className={`bg-[${mainColor}] p-2 rounded-md`}>
      <SiCodeblocks className="text-2xl text-white" />
      </div>
      <div className="flex gap-1 text-[19px]">
          <span className={`font-bold text-[${mainColor}]`}>Snippets</span>
          <span className="text-slate-600">Master</span>
      </div>
    </div>
  )
}

function Buttons(){
  const {userId} = useAuth();
  return(
    <div className="max-sm:w-full">
      {userId ?(
        <Link href='/code'>
          <button
          className={`max-sm:w-full bg-[${mainColor}] p-2 rounded-md px-6 text-white text-sm`}
          >DashBoard
          </button>
        </Link>
      ):(
    <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
      <button 
      className={`max-sm:w-full bg-[${mainColor}] p-2 rounded-md px-6 text-white`}>
       <Link href="/sign-in"> Sign In </Link>
        </button>
        <button 
      className={`max-sm:w-full text-sm border border-[${mainColor}] text-[${mainColor}] hover:bg-[${mainColor}] transition hover:text-white p-2 rounded-md px-6 `}>
       <Link href="/sign-up"> Sign Up </Link>
        </button>
    </div>
     )}
    </div>
     
  )
}

function CTASection(){
  return(
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-2xl text-center">
        Organise your Code Snippets
        <span className={`text-[${mainColor}]`}> Efficiently!</span>
      </h2>
      <p className="text-center text-sm w-[450px] max-sm:w-full text-slate-600">
        With out Advanced tagging and Search features, you can quickly find the 
        snippets you need, right when you need it. spend less time searching for
        code and more time writing it.
      </p>
      <button
      className={`block px-9 py-3 text-sm font-medium text-white transition focus:outline-none`}
      type="button">
        Let's Get Started
      </button>
    </div>
  )
}