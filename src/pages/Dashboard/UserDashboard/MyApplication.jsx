import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";


const MyApplication = () => {
    const [currentItemId, setCurrentItemId] = useState(null);
    const [rating, setRating] = useState(0);
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

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
                console.log("Sending delete request for item ID:", scholar._id);
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


    const ratingChanged = (newRating) => {
        setRating(newRating);
      };

    const openModal = (scholarId) => {
        setCurrentItemId(scholarId);
        document.getElementById(`modal_${scholarId}`).showModal();
      };
    
      const closeModal = () => {
        setCurrentItemId(null);
        reset();
        document.getElementById(`modal_${currentItemId}`).close();
      };
    
      const onSubmit = (data) => {
        const currentDate = new Date().toLocaleDateString();
        const user_image = user?.photoURL;
        const user_email = user?.email;
        const user_name = user?.displayName;
        const editData = {
          ...data,
          rating,
          currentDate,
          user_image,
          user_email,
          user_name,
          currentItemId, 
        };
    
        axiosSecure.post(`/userReviews`, editData);
    
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Review Added Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        closeModal();
      };
    return (
        <div>
            <div className="flex justify-evenly my-4 font-bold">
                <h2 className="text-3xl">My Application</h2>
                <h2 className="text-3xl">Total Application:{application.length}</h2>
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
                            <th>Add review</th>
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
                                <td>
                  <button className="btn" onClick={() => openModal(scholar._id)}>
                    Add Review
                  </button>
                  <dialog id={`modal_${scholar._id}`} className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Review Form</h3>
                      <form onSubmit={handleSubmit(onSubmit)}>
                       
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                          />
                       
                        <div>
                          <label htmlFor="">University Name</label>
                          <input
                            type="text"
                            defaultValue={scholar.universityName}
                            {...register("universityName")}
                            className="border border-gray-300 rounded-md p-2 w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="">Scholarship Category</label>
                          <input
                            type="text"
                            {...register("scholarshipCategory")} 
                            defaultValue={scholar.scholarshipCategory}
                            className="border border-gray-300 rounded-md p-2 w-full"
                          />
                        </div>

                        <div>
                          <label htmlFor="">Review Comment</label>
                          <textarea
                            {...register("reviewComment")}
                            className="border border-gray-300 rounded-md p-2 w-full"
                            rows={4}
                            defaultValue='Add Your Comment'
                          ></textarea>
                        </div>
                        <button type="submit" className="btn">
                          Add Review
                        </button>
                      </form>
                      <button className="btn mt-4" onClick={closeModal}>
                        Close
                      </button>
                    </div>
                  </dialog>
                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplication;