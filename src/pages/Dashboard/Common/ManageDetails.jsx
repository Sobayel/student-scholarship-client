const ManageDetails = ({ scholar }) => {
    return (
        <dialog id="my_modal_2" className="modal">
            <div className="max-w-3xl modal-box overflow-hidden mb-10 justify-center mx-auto bg-white rounded-lg dark:bg-gray-800">
                <img className="object-cover w-full h-72" src={scholar.universityImage} alt="Article" />
                <div className="p-6">
                    <div>
                        <span className="text-sm font-medium text-blue-600 uppercase dark:text-blue-400">Subject Name:  {scholar.subjectName}</span>
                        <p className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">{scholar.universityName}</p>
                        <p className="mt-2 text-md text-gray-600 dark:text-gray-400">Scholarship Description: {scholar.scholarshipDescription}</p>
                    </div>
                    <div>
                        <p className="px-2 text-lg font-semibold text-gray-700 dark:text-gray-400">Scholarship Category:  {scholar.scholarshipCategory}</p>
                        <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">Subject Name: {scholar.subjectName}</p>
                        <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">ApplicationDeadline: {scholar.applicationDeadline}</p>
                        <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">UniversityLocation:  {scholar?.country},{scholar?.city}</p>
                        <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">ApplicationFees: {scholar.applicationFees}</p>
                        <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">Post Date: {scholar.postDate}</p>
                        <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">Stipend: {scholar.stipend}</p>
                        <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">Service Charge: {scholar.serviceCharge}</p>
                    </div>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>

    );
};

export default ManageDetails;