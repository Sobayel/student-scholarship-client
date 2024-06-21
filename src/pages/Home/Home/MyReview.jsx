import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import StudentReviewCard from "./StudentReview/StudentReviewCard";


const MyReview = () => {
    const axiosSecure = useAxiosSecure()
    const { data: review = [], isLoading } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosSecure.get('/review');
            return res.data;
        }
    });

    if (isLoading) return <LoadingSpinner />;
    if (!Array.isArray(review)) {
        return <div>Error loading review.</div>;
    }
    return (
        <div className="grid lg:grid-cols-2 gap-7 my-5 pl-8">
            {
                    review.map(item => (
                        
                            <StudentReviewCard key={item._id} item={item} />
                        
                    ))
                }
        </div>
    );
};

export default MyReview;