import React from 'react';
import ProfileUser from './TopBar/profile-user';
import SearchBar from './TopBar/search-bar';
import DarkMode from './TopBar/dark-mode';
import { useGlobalContext } from '@/context/use-context-api';

function ContentArea(){
    const {darkMode} =useGlobalContext()
    return(
        <div className={`w-[80%] ${darkMode[1].isSelected ? "bg-slate-700": "bg-slate-100"} p-5`}>
            <TopBar/>
        </div>
    )
}

export default ContentArea

function TopBar(){
    const {darkMode} =useGlobalContext()
    return(
        <div className={`${darkMode[1].isSelected ? "bg-slate-800 text-white":""}rounded-md flex justify-between bg-white items-center p-3`}>
            <ProfileUser/>
            <SearchBar/>
            <DarkMode/>
        </div>
    )
}