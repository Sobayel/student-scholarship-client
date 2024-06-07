import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../Shared/LoadingSpinner";


const ScholarshipDetails = () => {
    const {id} = useParams();
    
    const axiosSecure = useAxiosSecure();
    const { data: scholarship = [], isLoading } = useQuery({
        queryKey: ['scholarship'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/scholarship/${id}`);
            return res.data;
        }
        
    })
    if (isLoading) return <LoadingSpinner />
    return (
            <div className="max-w-3xl overflow-hidden mb-10 justify-center mx-auto bg-slate-200 rounded-lg dark:bg-gray-800">
    <img className="object-cover w-full h-80" src={scholarship.UniversityImage} alt="Article" />

    <div className="p-6">
        <div>
            <span className="text-sm font-medium text-blue-600 uppercase dark:text-blue-400">Subject Name:  {scholarship.SubjectName}</span>
            <p  className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">{scholarship.UniversityName}</p>
            <p className="mt-2 text-md text-gray-600 dark:text-gray-400">Scholarship Description: {scholarship.ScholarshipDescription}</p>
        </div>
        <p className="px-2 text-lg font-semibold text-gray-700 dark:text-gray-400">Scholarship Category:  {scholarship.ScholarshipCategory}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">ApplicationDeadline: {scholarship.ApplicationDeadline}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">UniversityLocation:  {scholarship?.UniversityLocation?.Country},{scholarship?.UniversityLocation?.City}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">ApplicationFees: {scholarship.ApplicationFees}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">Post Date: {scholarship.PostDate}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">Stipend: {scholarship.Stipend}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">Service Charge: {scholarship.ServiceCharge}</p>
        <div className="mt-4">
        <button className="btn mx-6 mb-4 btn-outline">Apply Scholarship</button>
        </div>
    </div>
</div>
    );
};

export default ScholarshipDetails;