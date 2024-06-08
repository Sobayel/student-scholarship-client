import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import TopScholarshipCard from "../Home/TopScholarship/TopScholarshipCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllScholarship = () => {
    const axiosPublic = useAxiosPublic();
    const { count } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [search, setSearch] = useState('');
    const [searchText, setSearchText] = useState('');

    const { data: scholarship = [], isLoading, isError } = useQuery({
        queryKey: ['scholarship', currentPage, itemsPerPage, search],
        queryFn: async () => {
            const res = await axiosPublic.get(`/scholarship?page=${currentPage}&size=${itemsPerPage}&search=${search}`);
            return res.data;
        },
        keepPreviousData: true,
    });

    if (isError) {
        return <div>Error loading scholarships.</div>;
    }

    if (isLoading) return <LoadingSpinner />;

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    const handleSearch = e => {
        e.preventDefault();
        setSearch(searchText);
        setCurrentPage(0); // Reset to first page on new search
    };

    const handlePaginationButton = (value) => {
        setCurrentPage(value);
    };

    return (
        <div>
            <h2 className="text-4xl font-bold pt-20 text-center mb-5">All Scholarship</h2>
            <div className="flex justify-center mx-auto">
                <form onSubmit={handleSearch}>
                    <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                        <input
                            className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            onChange={e => setSearchText(e.target.value)}
                            value={searchText}
                            name='search'
                            placeholder='Enter Scholarship Title'
                            aria-label='Enter Scholarship Title'
                        />
                        <button className='md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none px-4'>
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
                {scholarship.map(item => <TopScholarshipCard key={item._id} item={item}></TopScholarshipCard>)}
            </div>
            <div className='flex justify-center mt-12 mb-8'>
                <button
                    disabled={currentPage === 0}
                    onClick={() => handlePaginationButton(currentPage - 1)}
                    className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500 hover:text-white'
                >
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>
                        <span className='mx-1'>previous</span>
                    </div>
                </button>
                {pages.map(btnNum => (
                    <button
                        onClick={() => handlePaginationButton(btnNum)}
                        key={btnNum}
                        className={`hidden ${currentPage === btnNum ? 'bg-blue-500 text-white' : ''} px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline hover:bg-blue-500 hover:text-white`}
                    >
                        {btnNum + 1}
                    </button>
                ))}
                <button
                    disabled={currentPage === numberOfPages - 1}
                    onClick={() => handlePaginationButton(currentPage + 1)}
                    className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
                >
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default AllScholarship;
