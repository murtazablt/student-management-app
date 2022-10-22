import LineBox from "./LineBox";

import classes from "./TimelineChart.module.css";

// import Swiper core and required modules
import { Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

const TimelineChart = () => {
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  return (
    <div className={classes.wrapper}>
      <Swiper
        // install Swiper modules
        modules={[Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={20}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {days.map((day) => (
          <SwiperSlide key={day}>
            <LineBox day={`8/${day}`} now={day === 10 ? true : false}  />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className={classes["grid-overlay"]}>
        <div className={classes["now-line"]}>
          <span>Now</span>{" "}
        </div>
      </div> */}
    </div>
  );
};

export default TimelineChart;
