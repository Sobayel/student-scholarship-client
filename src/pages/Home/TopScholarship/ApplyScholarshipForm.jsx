import { useState } from "react";
import ReactDatePicker from "react-datepicker";


const ApplyScholarshipForm = () => {
    const [startDate, setStartDate] = useState(new Date())

    const handleAssignment = () =>{

    }
    return (
        <div className="flex justify-center items-center py-16">
        <section className="p-2 md:p-5 mx-auto bg-white rounded-xl shadow-xl">
            <h2 className="text-2xl mb-10 font-bold text-gray-700 text-center">
                Create Assignment Form
            </h2>
            <form onSubmit={handleAssignment}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="title">
                            Assignment Title
                        </label>
                        <input type="text" placeholder="Assignment Title" name="name" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="text-slate-700 font-semibold"
                            htmlFor="marks">
                            Marks
                        </label>
                        <input type="text" placeholder="Marks" name="mark" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-700 font-semibold">
                            Date
                        </label>
                        <ReactDatePicker name="date"
                            className='border p-2 rounded-md'
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold" htmlFor="">
                            Difficulty Level
                        </label>
                        <select name="difficulty" id="difficulty" className="border p-2 rounded-sm">
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="text-slate-700 font-semibold"
                        htmlFor="image">
                        Thumbnail Image URL
                    </label>
                    <input type="text" placeholder="Thumbnail Image URL" name="image" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                </div>
                <div className="mt-3">
                    <label className="text-slate-700 font-semibold"
                        htmlFor="description">
                        Description
                    </label>
                    <textarea type="text" placeholder="Description" name="description" id="" className="block w-full px-4 py-2 mt-2 text-slate-700 rounded-sm bg-white border border-slate-300 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-30 focus:outline-none focus:ring" required />
                </div>
                <div className="mt-4">
                    <input type="submit" value="Add Assignment" className='px-8 w-full py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600' />
                </div>
            </form>
        </section>
    </div>
    );
};

export default ApplyScholarshipForm;