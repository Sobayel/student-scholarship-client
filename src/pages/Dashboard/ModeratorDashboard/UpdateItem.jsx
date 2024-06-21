import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";


const UpdateItem = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const axiosSecure = useAxiosSecure()
    const scholar = useLoaderData();
       // Update the scholar item
       const onSubmit = async (data) => {
        console.log("form data", data);
    
        // Prepare scholar item data
        const scholarshipItem = {
          scholarshipName: data.scholarshipName,
              universityName: data.universityName,
              subjectCategory: data.subjectCategory,
              degree: data.degree,
              applicationFees: data.applicationFees,
        };
    
        // Update the scholar item
        const scholarRes = await axiosSecure.put(`/scholarship/${scholar._id}`, scholarshipItem);
        console.log(scholarRes.data);
    
        if (scholarRes.data.modifiedCount > 0) {
          // Show success popup
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.universityName} is updated to the menu`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/manageScholarship");
        }
      };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Scholarship Name</span>
            </label>
            <input
              defaultValue={scholar.scholarshipName}
              type="text"
              name="scholarshipName"
              placeholder="Scholarship Name"
              className="input input-bordered"
              {...register("scholarshipName", { required: true })}
            />
            {errors.scholarshipName && <span>This field is required</span>}
          </div>
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
              <span className="label-text">Subject Category</span>
            </label>
            <input
              defaultValue={scholar.subjectCategory}
              type="text"
              name="subjectCategory"
              placeholder="Subject Category"
              className="input input-bordered"
              {...register("subjectCategory", { required: true })}
            />
             {errors.subjectCategory && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Degree</span>
            </label>
            <input
              defaultValue={scholar.degree}
              type="text"
              name="degree"
              placeholder="Degree"
              className="input input-bordered"
              {...register("degree", { required: true })}
            />
            {errors.degree && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Application Fees</span>
            </label>
            <input
              defaultValue={scholar.applicationFees}
              type="text"
              name="applicationFees"
              placeholder="Application Fees"
              className="input input-bordered"
              {...register("applicationFees", { required: true })}
            />
            {errors.applicationFees && <span>This field is required</span>}
          </div>
          <div className="form-control mt-6">
          <button className="btn btn-primary max-w-xs">
              Update Scholarship\ <FaUtensils></FaUtensils>
            </button>
          </div>
        </form>
        </div>
    );
};

export default UpdateItem;