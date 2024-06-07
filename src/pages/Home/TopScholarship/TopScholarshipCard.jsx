/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const TopScholarshipCard = ({item}) => {
    const {_id, UniversityName,UniversityImage, ScholarshipCategory, UniversityLocation, ApplicationDeadline, SubjectCategory, ApplicationFees, Rating} = item || {};
    return (
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img className="h-48 w-full" src={UniversityImage} alt="" />
    <div className="flex items-center px-6 py-3 bg-gray-900">
        <h1 className="mx-3 text-lg font-semibold text-white">{UniversityName}</h1>
    </div>
    <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">SubjectCategory: {SubjectCategory}</h1>
            <p className="py-2 text-lg font-semibold text-gray-700 dark:text-gray-400">{ScholarshipCategory}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">ApplicationDeadline: {ApplicationDeadline}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">UniversityLocation:  {UniversityLocation.Country},{UniversityLocation.City}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">ApplicationFees: {ApplicationFees}</p>
            <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">Rating: {Rating}</p>
    </div>
    <div>
        <Link to={`/scholarshipDetails/${_id}`} className="btn mx-6 mb-4 btn-outline">Scholarship Details</Link>
    </div>
</div>
    );
};

export default TopScholarshipCard;