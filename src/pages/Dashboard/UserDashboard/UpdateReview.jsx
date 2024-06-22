import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";


const UpdateReview = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const axiosSecure = useAxiosSecure()
    const scholar = useLoaderData();
    console.log(scholar)
       // Update the review item
       const onSubmit = async (data) => {
        console.log("form data", data);
    
        // Prepare review item data
        const reviewItem = {
              reviewComment: data.reviewComment,
              universityName: data.universityName
        };
    
        // Update the scholar item
        const reviewRes = await axiosSecure.put(`/userReviews/${scholar._id}`, reviewItem);
        console.log(reviewRes.data);
    
        if (reviewRes.data.modifiedCount > 0) {
          // Show success popup
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.universityName} is updated to the Review`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/userReview");
        }
      };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">University Name</span>
            </label>
            <input
              defaultValue={scholar.universityName}
              type="text"
              name="universityName"
              placeholder="University Name"
              className="input input-bordered"
              {...register("universityName", { required: true })}
            />
            {errors.universityName && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Review Comment</span>
            </label>
            <input
              defaultValue={scholar.reviewComment}
              type="text"
              name="reviewComment"
              placeholder="Review Comment"
              className="input input-bordered"
              {...register("reviewComment", { required: true })}
            />
             {errors.reviewComment && <span>This field is required</span>}
          </div>
          <div className="form-control mt-6">
          <button className="btn btn-primary max-w-xs">
              Update Review
            </button>
          </div>
        </form>
        </div>
    );
};

export default UpdateReview;