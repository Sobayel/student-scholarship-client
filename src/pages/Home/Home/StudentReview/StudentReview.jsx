import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../../Shared/LoadingSpinner";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import StudentReviewCard from "./StudentReviewCard";

const StudentReview = () => {
    const axiosPublic = useAxiosPublic();

    const { data: review = [], isLoading } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosPublic.get('/review');
            return res.data;
        }
    });

    if (isLoading) return <LoadingSpinner />;
    if (!Array.isArray(review)) {
        return <div>Error loading review.</div>;
    }

    return (
        <section>
            <div>
            <h2 className="text-4xl font-bold mt-16 text-center mb-10">Student Review Section</h2>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    review.map(item => (
                        <SwiperSlide key={item._id}>
                            <StudentReviewCard item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default StudentReview;
