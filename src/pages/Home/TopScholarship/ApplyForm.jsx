const ApplyForm = ({ handleApplyScholarshipForm, imagePreview, singleItem, handleImage, imageText }) => {
    return (
        <div className="flex justify-center items-center py-16">
        <section className="p-2 md:p-5 mx-auto bg-white rounded-xl shadow-xl">
            <h2 className="text-2xl mb-10 font-bold text-gray-700 text-center">
            Apply Scholarship Form
            </h2>
            <form onSubmit={handleApplyScholarshipForm}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="number">
                            Phone Number
                        </label>
                        <input type="text" name="number" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    {/* image */}
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
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="village">
                            Village
                        </label>
                        <input type="text" name="village" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="district">
                            District
                        </label>
                        <input type="text" name="district" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="country">
                            Country
                        </label>
                        <input type="text" name="country" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div className="flex-col flex">
                        <label className="font-semibold" htmlFor="">
                            Gender
                        </label>
                        <select name="gender" id="gender" className="border p-2 rounded-sm">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="flex-col flex">
                        <label className="font-semibold" htmlFor="">
                        Applying Degree
                        </label>
                        <select name="degree" id="degree" className="border p-2 rounded-sm">
                            <option value="">Select Degree</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Masters">Masters</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="ssc">
                            SSC Result
                        </label>
                        <input type="text" name="ssc" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="hsc">
                            HSC Result
                        </label>
                        <input type="text" name="hsc" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="universityName">
                            University Name
                        </label>
                        <input type="text" name="universityName" defaultValue={singleItem?.universityName} id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="scholarshipCategory">
                            Scholarship Category
                        </label>
                        <input type="text" name="scholarshipCategory" defaultValue={singleItem?.scholarshipCategory} id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="subjectCategory">
                            Subject Category
                        </label>
                        <input type="text" name="subjectCategory" defaultValue={singleItem?.subjectCategory} id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                </div>
                <div className="mt-4">
                    <input type="submit" value="Apply Scholarship" className='px-8 w-full py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600' />
                </div>
            </form>
        </section>
    </div>
    );
};

export default ApplyForm;