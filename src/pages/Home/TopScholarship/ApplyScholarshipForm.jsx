
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { imageUpload } from "../../../api/utils";
import toast from "react-hot-toast";
import ApplyForm from "./ApplyForm";
import { useState } from "react";
import LoadingSpinner from "../../../Shared/LoadingSpinner";



const ApplyScholarshipForm = () => {
    const {id}= useParams()
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState();
    const [imageText, setImageText] = useState('Upload Image');
    
    const { data: singleItem = [], isLoading } = useQuery({
        queryKey: ['singleItem'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/singleItem/${id}`);
            return res.data;
        }
    })
    isLoading(false)
    console.log(singleItem)

    const { mutateAsync } = useMutation({
        mutationFn: async applyForm => {
            const { data } = await axiosSecure.post(`/appliedData`, applyForm);
            return data;
        },
        onSuccess: () => {
            toast.success('Applied Successfully');
            setLoading(false);
        }
    });

    const handleApplyScholarshipForm = async(e) =>{
        e.preventDefault()
        setLoading(true);
        const form = e.target;

        const number = form.number.value;
        const image = form.image.value;
        const village = form.village.value;
        const district = form.district.value;
        const country = form.country.value;
        const gender = form.gender.value;
        const degree = form.degree.value;
        const ssc = form.ssc.value;
        const hsc = form.hsc.value;
        const universityName = form.universityName.value;
        const scholarshipCategory = form.scholarshipCategory.value;
        const subjectCategory = form.subjectCategory.value;
        
        try {
            const image_url = image ? await imageUpload(image) : '';
            const applyForm = {number, village, district, country, gender, degree, ssc, hsc, universityName, scholarshipCategory,subjectCategory, image: image_url}
            console.table(applyForm);

            await mutateAsync(applyForm);
        } catch (err) {
            toast.error(err.message);
            setLoading(false);
        }
    }

    const handleImage = e => {
        const image = e.target.files[0];
        setImagePreview(URL.createObjectURL(image));
        setImageText(image.name);
    };
    if (loading) return <LoadingSpinner />
    return (
       <ApplyForm
       handleApplyScholarshipForm={handleApplyScholarshipForm}
                setImagePreview={setImagePreview}
                imagePreview={imagePreview}
                handleImage={handleImage}
                imageText={imageText}>
       </ApplyForm>
    );
};

export default ApplyScholarshipForm;