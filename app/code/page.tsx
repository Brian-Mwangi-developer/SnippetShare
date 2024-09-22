"use client";
import { UserButton } from "@clerk/nextjs";
import SideBar from "./__components/sidebar";
import ContentArea from "../Components/ContentArea/ContentArea";


export default function page(){
    return(
        <div className="flex flex-row bg-slate-200">
           <SideBar/>
           <ContentArea/>
        </div>
    )
}