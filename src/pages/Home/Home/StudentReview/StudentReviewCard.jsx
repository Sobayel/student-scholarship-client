

const StudentReviewCard = ({item}) => {
    const {image, comment, name, date, rating} = item || {}
    console.log(item)
    return (
        <div className="w-full max-w-md px-4 py-4 mt-16 bg-slate-200 rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={image} />
    </div>

    <h2 className="mt-2 text-md font-semibold text-blue-600 dark:text-blue-300 md:mt-0">Reviewer Name: {name}</h2>
    <h2 className="mt-2 text-md font-semibold text-gray-800 dark:text-white md:mt-0">Rating: {rating}</h2>

    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Reviewer Comments: {comment}</p>

    <div className="flex justify-end mt-4">
        <a className="text-lg font-medium text-blue-600 dark:text-blue-300">Review date: {date}</a>
    </div>
</div>
    );
};

export default StudentReviewCard;