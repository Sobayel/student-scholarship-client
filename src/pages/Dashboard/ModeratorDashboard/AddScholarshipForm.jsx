import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';

const AddScholarshipForm = ({ handleSubmit, imagePreview, handleImage, imageText }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [postDate, setPostDate] = useState(new Date());

    return (
        <div className='w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='scholarshipName' className='block text-gray-600'>
                            Scholarship Name
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                            name='scholarshipName'
                            id='scholarshipName'
                            type='text'
                            placeholder='Scholarship Name'
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='universityName' className='block text-gray-600'>
                            University Name
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                            name='universityName'
                            id='universityName'
                            type='text'
                            placeholder='University Name'
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='universityCountry' className='block text-gray-600'>
                            University Country
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                            name='universityCountry'
                            id='universityCountry'
                            type='text'
                            placeholder='University Country'
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='rating' className='block text-gray-600'>
                        Rating
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                            name='rating'
                            id='rating'
                            type='rating'
                            placeholder='Rating'
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='universityCity' className='block text-gray-600'>
                            University City
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                            name='universityCity'
                            id='universityCity'
                            type='universityCity'
                            placeholder='University City'
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='universityWorldRank' className='block text-gray-600'>
                            University World Rank
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                            name='universityWorldRank'
                            id='universityWorldRank'
                            type='text'
                            placeholder='University World Rank'
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm flex flex-col'>
                    <label className="font-semibold" htmlFor="subjectName">
                            Subject Name
                        </label>
                        <select name="subjectName" id="subjectName" className="border p-2 rounded-sm">
                            <option value="">Subject Name</option>
                            <option value="Sciences">Sciences</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Humanities">Humanities</option>
                            <option value="Various">Various</option>
                        </select>
                    </div>
                    <div className='space-y-1 text-sm flex flex-col'>
                        <label className="font-semibold" htmlFor="scholarshipCategory">
                            Scholarship Category
                        </label>
                        <select name="scholarshipCategory" id="scholarshipCategory" className="border p-2 rounded-sm">
                            <option value="">Select Scholarship Category</option>
                            <option value="Need-Based Scholarships">Need-Based Scholarships</option>
                            <option value="Career-Specific Scholarships">Career-Specific Scholarships</option>
                            <option value="Need-Based Scholarships">Need-Based Scholarships</option>
                        </select>
                    </div>
                    <div className='space-y-1 text-sm flex flex-col'>
                        <label className="font-semibold" htmlFor="degree">
                            Degree
                        </label>
                        <select name="degree" id="degree" className="border p-2 rounded-sm">
                            <option value="">Select Degree</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Masters">Masters</option>
                        </select>
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='tuitionFees' className='block text-gray-600'>
                            Tuition Fees
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                            name='tuitionFees'
                            id='tuitionFees'
                            type='text'
                            placeholder='Tuition Fees'
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='applicationFees' className='block text-gray-600'>
                            Application Fees
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                            name='applicationFees'
                            id='applicationFees'
                            type='text'
                            placeholder='Application Fees'
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='serviceCharge' className='block text-gray-600'>
                            Service Charge
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                            name='serviceCharge'
                            id='serviceCharge'
                            type='text'
                            placeholder='Service Charge'
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='applicationDeadline' className='block text-gray-600'>
                            Application Deadline
                        </label>
                        <ReactDatePicker 
                            name="applicationDeadline"
                            className='border p-2 rounded-md'
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='postDate' className='block text-gray-600'>
                            Scholarship Post Date
                        </label>
                        <ReactDatePicker 
                            name="postDate"
                            className='border p-2 rounded-md'
                            selected={postDate}
                            onChange={date => setPostDate(date)}
                        />
                    </div>
                    <div className='p-4 bg-white w-full justify-between items-center m-auto rounded-lg flex'>
                        <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                            <div className='flex flex-col w-max mx-auto text-center'>
                                <label>
                                    <input
                                        className='text-sm cursor-pointer w-36 hidden'
                                        type='file'
                                        onChange={handleImage}
                                        name='universityImage'
                                        id='universityImage'
                                        accept='image/*'
                                    />
                                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                        {imageText.length > 20 ? imageText.split('.')[0].slice(0, 15) + '.' + imageText.split('.')[1] : imageText}
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="object-cover overflow-hidden flex items-center">
                            {imagePreview && <img className='h-16 ml-4 w-16 rounded-md' src={imagePreview} alt="Preview" />}
                        </div>
                    </div>
                </div>
                
                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                >
                    Add Scholarship
                </button>
            </form>
        </div>
    );
};

export default AddScholarshipForm;

