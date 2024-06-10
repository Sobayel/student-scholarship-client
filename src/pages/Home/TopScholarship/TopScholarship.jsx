import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import TopScholarshipCard from "./TopScholarshipCard";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import { Link } from "react-router-dom";
import { useState } from "react";

const TopScholarship = () => {
    const axiosPublic = useAxiosPublic();
    const [applicationFees, setApplicationFees] = useState('')

    const { data: scholarship = [], isLoading } = useQuery({
        queryKey: ['scholarship', applicationFees],
        queryFn: async () => {
            const res = await axiosPublic.get(`/scholarship?applicationFees=${applicationFees}`);
            return res.data;
        }
        
    })

      if (!Array.isArray(scholarship)) {
          return <div>Error loading scholarships.</div>;
          }
        if (isLoading) return <LoadingSpinner />
    return (
        <div>
            <h2 className="text-4xl font-bold mt-12 text-center mb-5">Top Scholarship</h2>
            <div className="flex justify-center mx-auto my-6">
            <select
              onChange={e => {
                setApplicationFees(e.target.value)
              }}
              value={applicationFees}
              name='applicationFees'
              id='applicationFees'
              className='border font-semibold p-4 rounded-md'
            >
              <option value=''>Sort By Application fees</option>
              <option value='dsc'>Low application fees</option>
              <option value='asc'>High application fees</option>
            </select>
          </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
            {
                scholarship.map(item => <TopScholarshipCard key={item._id} item={item}></TopScholarshipCard>)
            }
      </div>
      <Link to="allScholarship" className="btn btn-outline bg-green-200 border-0 border-b-4 flex w-64 justify-center mx-auto mt-5">
          Show All Scholarship
        </Link>
        </div>
    );
};

export default TopScholarship;