import { useGlobalContext } from "@/context/use-context-api"
import { FaPython } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { MdAutoDelete, MdFavoriteBorder, MdOutlineBorderAll } from "react-icons/md"
import { SiCodeblocks, SiCplusplus } from "react-icons/si"


export default function SideBar(){
   const {darkMode} =useGlobalContext();
    return(
        <div className={`w-[25%] p-5 flex flex-col gap-2 h-screen pt-7 ${darkMode[1].isSelected ? "bg-slate-800":"bg-white"}`}>
            <Logo/>
            <QuickLinks/>
            <Languages/>
        </div>
    )
}


function Logo(){
    return(
      <div className="flex gap-2 items-center">
        <div className={`bg-purple-600 p-2 rounded-md`}>
        <SiCodeblocks className="text-2xl text-white" />
        </div>
        <div className="flex gap-1 text-[19px]">
            <span className={`font-bold text-purple-600`}>Snippets</span>
            <span className="text-slate-400 font-semibold">Master</span>
        </div>
      </div>
    )
  }

function QuickLinks(){
    const { SideBarMenu,setSideBarMenu } = useGlobalContext();
    console.log("Below is the sideBar Menu",SideBarMenu)
    function ClickedMenu(index:number){
        const updatedSideBarMenu = SideBarMenu.map((menu,i)=>{
        if(i=== index){
            return {...menu,isSelected:true};
        }else{
            return {...menu,isSelected:false};
        }
        })
        setSideBarMenu(updatedSideBarMenu);
}
    return(
        <div className="mt-20 text-sm">
            <span className="font-bold text-slate-400 text-xl">QuickLinks</span>
            <ul className="text-slate-400 mt-4 flex flex-col gap-2">
                {SideBarMenu.map((menu,index)=>(   
                <li
                key={index}
                onClick={()=>ClickedMenu(index)}
                className={`flex cursor-pointer select-none gap-1 items-center text-gray-500 ${menu.isSelected ? "bg-purple-600 text-white " : "  text-gray-500"} hover:bg-purple-600 hover:text-white p-[7px] px-2 rounded-md w-[80%]`}>
                {menu.icons}
                <span className="">{menu.name}</span>
                </li>    
                ))}
            </ul>
        </div>
    )
}  

function Languages(){
    return(
        <div className="mt-12 text-sm">
            <div className="font-bold text-slate-400">Languages </div>
            <div className="mt-5 ml-2 text-slate-400 flex flex-col gap-4">
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                    <IoLogoJavascript className="text-xl" /> Javascript
                    </div>
                    <span className="font-bold">3</span>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                    <FaPython className="text-xl" />Python
                    </div>
                    <span className="font-bold">10</span>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                    <SiCplusplus className="text-xl" /> C++
                    </div>
                    <span className="font-bold">5</span>
                </div>
            </div>
        </div>
    )
}