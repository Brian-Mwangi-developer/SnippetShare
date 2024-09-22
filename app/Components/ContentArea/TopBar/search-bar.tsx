import { FaSearch } from "react-icons/fa";
import { IoSearchCircleOutline } from "react-icons/io5";


function SearchBar(){
    return(
        <div className="relative pl-3 w-[60%] h-[38px] bg-slate-100 rounded-3xl flex items-center gap-2">
            <FaSearch className="text-purple-600 text-xl"/>
            <input
            placeholder="Search a Snippet..."
            className="w-[70%] outline-none text-sm bg-slate-100 text-slate-500"/>
            <AddSnippetButton/>
        </div>
    )
}

export default SearchBar;

function AddSnippetButton(){
    return(
        <div className="absolute flex gap-2 px-3 rounded-3xl bg-purple-600 p-1 text-[13px] text-white top-[5px] right-[6px] items-center cursor-pointer select-none">
            <div className="font-bold">+</div>
            <div>Snippet</div>
        </div>
    )
}