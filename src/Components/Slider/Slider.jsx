// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

// Import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <div className="relative ">
                        <img
                            src="https://thumbs.dreamstime.com/z/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg?w=992"
                            alt=""
                            className="w-full "
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className="text-center text-white">
                                <h2 className="text-4xl font-bold mb-4">Slide 2 Title</h2>
                                <p className="text-lg">This is some description text for slide 2. Add information relevant to the image.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
