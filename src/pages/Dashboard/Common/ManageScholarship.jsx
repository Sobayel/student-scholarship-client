import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import ManageDetails from "./ManageDetails";


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
                                    <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Details</button>
                                    <ManageDetails
                                    scholar={scholar}
                                    ></ManageDetails>
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