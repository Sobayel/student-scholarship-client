import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageScholarship = () => {
    const axiosSecure = useAxiosSecure()
    const { data: manage = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/scholarship');
            return res.data;
        }
    })

    const handleDeleteItem = (scholar) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            console.log("Sending delete request for item ID:", scholar._id);
            const res = await axiosSecure.delete(`/scholarship/${scholar._id}`);
            if (res.data.deletedCount > 0) {
              // refetch
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${scholar.universityName} has been deleted`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          }
        });
      };
    return (
        <div>
            <div className="flex justify-evenly my-4 font-bold">
                <h2 className="text-3xl">All Scholarship</h2>
                <h2 className="text-3xl">Total Scholarship: {manage.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SERIAL NO</th>
                            <th>Scholarship name</th>
                            <th>University Name</th>
                            <th>Subject Category</th>
                            <th>Applied Degree</th>
                            <th>Application Fees</th>
                            <th>Details</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            manage.map((scholar, index) => <tr key={scholar._id}>
                                <th>{index + 1}</th>
                                <td>{scholar.scholarshipName}</td>
                                <td>{scholar.universityName}</td>
                                <td>{scholar.subjectCategory}</td>
                                <td>{scholar.degree}</td>
                                <td>{scholar.applicationFees}</td>
                                <td>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Details</button>
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
                                </td>
                                <td>
                                <Link to={`/dashboard/updateItem/${scholar._id}`}>
                        <button className="btn btn-ghost  bg-orange-500 ">
                          <FaEdit className="text-lg text-white"></FaEdit>
                        </button>
                      </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteItem(scholar)}
                                        className="btn btn-ghost btn-lg"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageScholarship;