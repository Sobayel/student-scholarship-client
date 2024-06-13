import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { imageUpload } from "../../../api/utils";
import AddScholarshipForm from "./AddScholarshipForm";
import LoadingSpinner from "../../../Shared/LoadingSpinner";

const AddScholarship = () => {
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const [imagePreview, setImagePreview] = useState();
    const [imageText, setImageText] = useState('Upload Image');

    const { mutateAsync } = useMutation({
        mutationFn: async scholarshipData => {
            const { data } = await axiosSecure.post(`/scholarship`, scholarshipData);
            return data;
        },
        onSuccess: () => {
            toast.success('Scholarship Added Successfully');
            setLoading(false);
        }
    });

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const scholarshipName = form.scholarshipName.value;
        const universityName = form.universityName.value;
        const universityImage = form.universityImage.files[0];
        const universityCountry = form.universityCountry.value;
        const universityCity = form.universityCity.value;
        const universityWorldRank = form.universityWorldRank.value;
        const subjectName = form.subjectName.value;
        const scholarshipCategory = form.scholarshipCategory.value;
        const degree = form.degree.value;
        const tuitionFees = form.tuitionFees.value;
        const applicationFees = form.applicationFees.value;
        const serviceCharge = form.serviceCharge.value;
        const applicationDeadline = form.applicationDeadline.value;
        const postDate = form.postDate.value;
        const rating = form.rating.value;
        const moderator = {
            email: user?.email,
        };

        try {
            const image_url = universityImage ? await imageUpload(universityImage) : '';
            const scholarshipData = {
                scholarshipName, universityName, universityCountry, universityCity, universityWorldRank, subjectName, scholarshipCategory, degree, tuitionFees, applicationFees, serviceCharge, applicationDeadline, postDate, moderator,rating, universityImage: image_url
            };
            console.table(scholarshipData);

            await mutateAsync(scholarshipData);
        } catch (err) {
            toast.error(err.message);
            setLoading(false);
        }
    };

    const handleImage = e => {
        const universityImage = e.target.files[0];
        setImagePreview(URL.createObjectURL(universityImage));
        setImageText(universityImage.name);
    };

    if (loading) return <LoadingSpinner />

    return (
        <div>
            <AddScholarshipForm 
                handleSubmit={handleSubmit}
                setImagePreview={setImagePreview}
                imagePreview={imagePreview}
                handleImage={handleImage}
                imageText={imageText}
            />
        </div>
    );
};

export default AddScholarship;
