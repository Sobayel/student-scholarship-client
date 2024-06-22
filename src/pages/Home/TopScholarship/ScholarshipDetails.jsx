import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const ScholarshipDetails = () => {
    const { user } = useAuth()
    const { id } = useParams();
    const [startDate, setStartDate] = useState(new Date())
    const axiosPublic = useAxiosPublic()

    const axiosSecure = useAxiosSecure();
    const { data: scholarship = [] } = useQuery({
        queryKey: ['scholarship'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/scholarship/${id}`);
            return res.data;
        }

    })

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const date = form.date.value;
        const rating = form.rating.value;
        const comment = form.comment.value;
        const reviewForm = { name, rating, date, comment, image };
        fetch('https://student-scholarship-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewForm)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Review Successfully')
                }
            })
    }
// to={`/applyScholarshipForm/${scholarship._id}`}

const handleApply = () => {
    const appliedInfo = {
      ...scholarship,
      price: scholarship?.applicationFees,
      id: scholarship?._id,
      currentDate: new Date(),
      applyUser: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };
  
    axiosPublic.post('/applyPayment', appliedInfo)
      .then(res => {
          window.location.replace(res.data.url);
      })
  };
  
    return (
        <div className="max-w-3xl overflow-hidden mb-10 justify-center mx-auto bg-white rounded-lg dark:bg-gray-800">
            <img className="object-cover w-full h-80" src={scholarship.universityImage} alt="Article" />
            <div className="p-6">
                <div>
                    <span className="text-sm font-medium text-blue-600 uppercase dark:text-blue-400">Subject Name:  {scholarship.subjectName}</span>
                    <p className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">{scholarship.universityName}</p>
                    <p className="mt-2 text-md text-gray-600 dark:text-gray-400">Scholarship Description: {scholarship.scholarshipDescription}</p>
                </div>
                <div>
                    <p className="px-2 text-lg font-semibold text-gray-700 dark:text-gray-400">Scholarship Category:  {scholarship.scholarshipCategory}</p>
                    <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">Subject Name: {scholarship.subjectName}</p>
                    <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">ApplicationDeadline: {scholarship.applicationDeadline}</p>
                    <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">UniversityLocation:  {scholarship?.country},{scholarship?.city}</p>
                    <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">ApplicationFees: {scholarship.applicationFees}</p>
                    <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">Post Date: {scholarship.postDate}</p>
                    <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">Stipend: {scholarship.stipend}</p>
                    <p className="px-2 text-lg mt-1 text-gray-700 dark:text-gray-200">Service Charge: {scholarship.serviceCharge}</p>
                </div>
            </div>
            <div className='p-4'>
        <button onClick={handleApply} className="btn btn-primary">
        Apply Scholarship
            </button>
        
      </div>
            {/* review section */}
            <form onSubmit={handleReview} className="px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="name">
                            Reviewer name
                        </label>
                        <input type="text" value={user?.displayName || 'user not available'} name="name" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="image">
                            Reviewer image
                        </label>
                        <input type="text" value={user?.photoURL || 'user not available'} name="image" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <div className="flex flex-col">
                        <label className="text-slate-700 font-semibold"
                            htmlFor="date">
                            Review date
                        </label>
                        <ReactDatePicker name="date"
                                className='border p-2 rounded-md'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="rating">
                            Rating point
                        </label>
                        <input type="text" placeholder="Rating point" name="rating" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                </div>
                <div className="mt-3">
                        <label className="text-slate-700 font-semibold"
                            htmlFor="comment">
                            Reviewer Comments
                        </label>
                        <textarea type="text" placeholder="Reviewer Comments" name="comment" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div className="mt-4">
                <input type="submit" value="Confirm Review" className="btn btn-outline"/>
            </div>
            </form>
        </div>
    );
};

export default ScholarshipDetails;