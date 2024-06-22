
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageApplication = () => {

    const axiosSecure = useAxiosSecure()
    const { data: application = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/appliedData');
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
                const res = await axiosSecure.delete(`/appliedData/${scholar._id}`);
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
                <h2 className="text-3xl">Manage Application</h2>
                <h2 className="text-3xl">Total Manage Application:{application.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SERIAL NO</th>
                            <th>University Name</th>
                            <th>University Address</th>
                            <th>Application Feedback</th>
                            <th>Subject Category</th>
                            <th>Applied Degree</th>
                            <th>Application Fees</th>
                            <th>Service Charge</th>
                            <th>Application Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            application.map((scholar, index) => <tr key={scholar._id}>
                                <th>{index + 1}</th>
                                <td>{scholar.universityName}</td>
                                <td>{scholar.country}</td>
                                <td></td>
                                <td>{scholar.subjectCategory}</td>
                                <td>{scholar.degree}</td>
                                <td>{scholar?.item?.applicationFees}</td>
                                <td>{scholar?.item?.serviceCharge}</td>
                                <td>pending</td>
                                <td>update</td>
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

export default ManageApplication;