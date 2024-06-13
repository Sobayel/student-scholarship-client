

const ApplyScholarshipForm = () => {

    const handleApplyScholarshipForm = (e) =>{
        e.preventDefault()
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
        const applyForm = {number, image, village, district, country, gender, degree, ssc, hsc, universityName, scholarshipCategory,subjectCategory}
        console.log(applyForm)
    }
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
                            htmlFor="title">
                            Phone Number
                        </label>
                        <input type="text" name="number" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="marks">
                            Image
                        </label>
                        <input type="text" name="image" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="title">
                            Village
                        </label>
                        <input type="text" name="village" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="title">
                            District
                        </label>
                        <input type="text" name="district" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="title">
                            Country
                        </label>
                        <input type="text" name="country" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="">
                            Gender
                        </label>
                        <select name="gender" id="difficulty" className="border p-2 rounded-sm">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="">
                        Applying Degree
                        </label>
                        <select name="degree" id="difficulty" className="border p-2 rounded-sm">
                            <option value="">Select Degree</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Masters">Masters</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="title">
                            SSC Result
                        </label>
                        <input type="text" name="ssc" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="title">
                            HSC Result
                        </label>
                        <input type="text" name="hsc" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="title">
                            University Name
                        </label>
                        <input type="text" name="universityName" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="title">
                            Scholarship Category
                        </label>
                        <input type="text" name="scholarshipCategory" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="title">
                            Subject Category
                        </label>
                        <input type="text" name="subjectCategory" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
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

export default ApplyScholarshipForm;