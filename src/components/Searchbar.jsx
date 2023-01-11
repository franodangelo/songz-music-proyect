import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export default function Searchbar() {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit} className="p-2 text-slate-400 focus-within:text-slate-600">
            <label htmlFor="search-field" className="sr-only">Search all songs</label>
            <div className="flex items-center border border-slate-500 rounded-xl">
                <FiSearch className="w-4 h-4 ml-4" />
                <input
                    className="flex-1 p-4 border-none outline-none text-slate-100 bg-transparent placeholder-slate-500"
                    name="search-field"
                    id="search-field"
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    autoComplete="off"
                    onChange={e => setSearchTerm(e.target.value)} />
            </div>
        </form>
    )
}
