/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const TopScholarshipCard = ({item}) => {
    const {_id, universityName,universityImage, scholarshipCategory, applicationDeadline,subjectName, subjectCategory, applicationFees,universityCountry,universityCity, rating} = item || {};
    return (
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img className="h-48 w-full" src={universityImage} alt="" />
    <div className="flex items-center px-6 py-3 bg-gray-900">
        <h1 className="mx-3 text-lg font-semibold text-white">{universityName}</h1>
    </div>
    <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">SubjectCategory: {subjectCategory}</h1>
            <p className="py-2 text-lg font-semibold text-gray-700 dark:text-gray-400">{scholarshipCategory}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">Subject Name: {subjectName}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">ApplicationDeadline: {applicationDeadline}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">University Country:  {universityCountry}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">UniversityCity: {universityCity}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">ApplicationFees: {applicationFees}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">Rating: {rating}</p>
    </div>
    <div>
        <Link to={`/scholarshipDetails/${_id}`} className="btn mx-6 mb-4 btn-outline">Scholarship Details</Link>
    </div>
</div>
    );
};

export default TopScholarshipCard;