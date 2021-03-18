import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const headerData = [
    {
        id: 1,
        imgBg: 'https://i.imgur.com/MwHohgI.jpg',
        title: 'A Team of Young Entrepreneurs',
        Description:
            'We are a self-organized, cross-functional team who collectively are responsible for developing quality products.',
    },
    {
        id: 2,
        imgBg: 'https://i.imgur.com/sVP1HZc.jpg',
        title: 'A Team of Young Entrepreneurs',
        Description:
            'We are a self-organized, cross-functional team who collectively are responsible for developing quality products.',
    },
    {
        id: 3,
        imgBg: 'https://i.imgur.com/sVP1HZc.jpg',
        title: 'A Team of Young Entrepreneurs',
        Description:
            'We are a self-organized, cross-functional team who collectively are responsible for developing quality products.',
    },
];

const Header = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    return (
        <header>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
                {headerData.map((data) => (
                    <SwiperSlide key={data.id}>
                        <div
                            className="headerSliderBg"
                            style={{ background: `url(${data.imgBg}) 0 0 / cover` }}
                        >
                            <div className="heder-bg d-flex align-items-center">
                                <div className="container-xl d-flex justify-content-center">
                                    <div className="header-contents text-center">
                                        <h3>{data.title}</h3>
                                        <p>{data.Description}</p>
                                        <button>Contact</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx>{`
                .headerSliderBg {
                    background-repeat: no-repeat;
                    background-position: center;
                    height: 600px;
                }
                .heder-bg {
                    background-color: #080b1a96;
                    height: 100%;
                    width: 100%;
                  }
            `}</style>
        </header>
    );
};

export default Header;
