import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const UserReview = () => {
    const axiosSecure = useAxiosSecure()
    const { data: review = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/userReviews');
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
                const res = await axiosSecure.delete(`/userReviews/${scholar._id}`);
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
            <h2 className="text-3xl">My Review</h2>
            <h2 className="text-3xl">Total Review:{review.length}</h2>
        </div>
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>SERIAL NO</th>
                        <th>University Name</th>
                        <th>Review Comment</th>
                        <th>Scholarship Category</th>
                        <th>Current Date</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        review.map((scholar, index) => <tr key={scholar._id}>
                            <th>{index + 1}</th>
                            <td>{scholar.universityName}</td>
                            <td>{scholar.reviewComment}</td>
                            <td>{scholar.scholarshipCategory}</td>
                            <td>{scholar.currentDate}</td>
                            <td>
                            <Link to={`/dashboard/updateReview/${scholar._id}`}>
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
                            <td>
              
            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default UserReview;