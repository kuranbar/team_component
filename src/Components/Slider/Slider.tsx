/** @jsxImportSource @emotion/react */
import * as React from "react";
import bp from "../../helpers/breakpoints";
import Employees from "../../data/employees";

// Import Swiper React components
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "../../App.scss";

import close from "../../assets/img/close.svg";
import slider_bg from "../../assets/img/slider_bg.jpg";

SwiperCore.use([Navigation, Pagination]);

interface IProps {
  flag: boolean;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
  slideIndex: number;
}

const Slider = ({ flag, setFlag, slideIndex }: IProps): JSX.Element => {
  const handleFlag = (e: React.SyntheticEvent<EventTarget>) => {
    e.stopPropagation();
    setFlag(!flag);
  };
  return (
    <Swiper
      css={{
        background: ` #47c3db url(${slider_bg}) no-repeat center center`,
        height: 960,
        maxWidth: 1920,
      }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      initialSlide={slideIndex}
    >
      <div
        css={{
          position: "absolute",
          top: 50,
          right: 50,
          zIndex: 2,
          cursor: "pointer",
          "&:hover": {
            filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.55))",
          },
        }}
        onClick={handleFlag}
      >
        <img src={close} alt="Zamknij warstwę" />
      </div>
      {Employees.map(function (item, i) {
        return (
          <SwiperSlide key={i}>
            <div
              css={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translateX(-50%) translateY(-50%)",
                minWidth: "90%",
                minHeight: 175,
                backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23FFFFFF25' stroke-width='10' stroke-dasharray='9%2c 20' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
                [bp.tablet]: {
                  minWidth: "70%",
                  minHeight: 275,
                },
                [bp.desktop_l]: {
                  minWidth: 1100,
                  minHeight: 375,
                },
              }}
            >
              <p
                css={{
                  textAlign: "center",
                  fontSize: 24,
                  margin: "0 10px",
                  lineHeight: "30px",
                  color: "white",
                  filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.55))",
                  [bp.desktop_s]: {
                    fontSize: 36,
                    lineHeight: "50px",
                  },
                  [bp.desktop_s]: {
                    fontSize: 48,
                    lineHeight: "80px",
                  },
                  [bp.desktop_l]: {
                    fontSize: 72,
                    lineHeight: "120px",
                  },
                }}
              >
                {item.occupation}
              </p>
              <p
                css={{
                  textAlign: "center",
                  fontSize: 40,
                  margin: "0 0 20px",
                  lineHeight: "40px",
                  fontWeight: 500,
                  color: "white",
                  filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.55))",
                  [bp.tablet]: {
                    fontSize: 60,
                    lineHeight: "60px",
                    margin: "0 0 30px",
                  },
                  [bp.desktop_s]: {
                    fontSize: 80,
                    lineHeight: "80px",
                    margin: "0 0 50px",
                  },
                  [bp.desktop_l]: {
                    fontSize: 120,
                    lineHeight: "120px",
                    margin: "0 0 70px",
                  },
                }}
              >
                {item.name}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
      ...
    </Swiper>
  );
};

export default Slider;
