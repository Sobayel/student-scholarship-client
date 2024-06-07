import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import TopScholarshipCard from "./TopScholarshipCard";
import LoadingSpinner from "../../../Shared/LoadingSpinner";

const TopScholarship = () => {
    const axiosPublic = useAxiosPublic();

    const { data: scholarship = [], isLoading } = useQuery({
        queryKey: ['scholarship'],
        queryFn: async () => {
            const res = await axiosPublic.get('/scholarship');
            return res.data;
        }
        
    })
    if (isLoading) return <LoadingSpinner />
    if (!Array.isArray(scholarship)) {
        return <div>Error loading scholarships.</div>;
    }
    return (
        <div>
            <h2 className="text-4xl font-bold mt-12 text-center mb-5">Top Scholarship</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
            {
                scholarship.map(item => <TopScholarshipCard key={item._id} item={item}></TopScholarshipCard>)
            }
      </div>
        </div>
    );
};

export default TopScholarship;