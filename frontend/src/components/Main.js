import { FaArrowRightLong } from "react-icons/fa6";
import React, { useEffect, useState } from 'react';
import axios from "axios";

const Main = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    const fetchData = async (searchQuery = '') => {
        setLoading(true);
        try {
            const url = searchQuery
                ? `https://futureskills-assignment.onrender.com/api/v2/tasks/search?query=${encodeURIComponent(searchQuery)}`
                : 'https://futureskills-assignment.onrender.com/api/v2/tasks';
            const response = await axios.get(url);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearchClick = () => {
        fetchData(search);
    };

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return (
        <main className='flex-grow'>
            <div className='bg-violet-100 flex flex-col items-center justify-center h-[24rem] gap-8'>
                <h2 className='text-6xl font-semibold text-center'>How can we help?</h2>
                <div className="relative flex items-center">
                    <input
                        value={search}
                        onChange={handleInputChange}
                        placeholder="Search"
                        className="w-[35rem] p-2 border border-black rounded pr-10"
                    />
                    <FaArrowRightLong
                        className="absolute right-3 cursor-pointer"
                        onClick={handleSearchClick} 
                    />
                </div>
            </div>

            {/* Section-2 */}
            <div className="flex justify-center py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 p-8 w-full max-w-[60rem]">
                    {data.map((item, i) => (
                        <div className="p-4 bg-gray-100 rounded-lg border-[1px] border-gray-300" key={i}>
                            <h2 className="text-xl font-semibold mb-2 border-b-[1px] border-gray-300">{item.title}</h2>
                            <p className="text-base text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Main;
