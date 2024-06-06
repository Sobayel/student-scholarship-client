import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import TopScholarship from "../TopScholarship/TopScholarship";
import StudentReview from "./StudentReview/StudentReview";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopScholarship></TopScholarship>
            <StudentReview></StudentReview>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;