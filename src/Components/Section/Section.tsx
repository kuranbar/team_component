/** @jsxImportSource @emotion/react */
import * as React from "react";
import bp from "../../helpers/breakpoints";
import Employees from "../../data/employees";

import bg from "../../assets/img/bg.jpg";
import mail_icon from "../../assets/img/mail_icon.png";

interface IProps {
  flag: boolean;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
  slideIndex: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Section = ({ flag, setFlag, setSlideIndex }: IProps): JSX.Element => {
  function handleFlag(i: number) {
    setFlag(!flag);
    setSlideIndex(i);
  }

  return (
    <div
      css={{
        background: `url(${bg}) repeat center center`,
        minHeight: 960,
        maxWidth: 1920,
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignContent: "stretch",
      }}
    >
      <div
        css={{
          maxWidth: 1240,
          padding: "50px 0",
          display: "flex",
          flexDirection: "column",
          alignContent: "space-around",
          flexGrow: 1,
        }}
      >
        <h1
          css={{
            fontSize: 40,
            lineHeight: "65px",
            color: " #452e76",
            fontWeight: 600,
            fontFamily: "Open Sans",
            textAlign: "center",
            margin: "0 0 50px",
            [bp.tablet]: {
              fontSize: 60,
              margin: "0 0 100px",
            },
          }}
        >
          Meet our team
        </h1>
        <div css={{ display: "flex", flexWrap: "wrap", flexGrow: 1 }}>
          {Employees.map(function (item, i) {
            return (
              <div
                key={i}
                css={{
                  textAlign: "center",
                  flex: "1 0 19%",
                }}
                onClick={() => handleFlag(i)}
              >
                <div
                  css={{
                    display: "inline-block",
                    cursor: "pointer",
                    margin: 10,
                    "&:hover": {
                      "& img": {
                        filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.55))",
                      },
                    },
                  }}
                >
                  <div
                    css={{
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    <img
                      css={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        zIndex: 2,
                      }}
                      src={mail_icon}
                      alt=""
                    />
                    <img src={item.img} alt={item.name} />
                  </div>
                  <p
                    css={{
                      fontSize: 20,
                      lineHeight: "65px",
                      color: " #452e76",
                      fontWeight: 400,
                      fontFamily: "Open Sans",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    css={{
                      fontSize: 14,
                      lineHeight: "24px",
                      color: " #48c3dc",
                      fontWeight: 300,
                      fontFamily: "Open Sans",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    {item.occupation}
                  </p>
                  <p
                    css={{
                      fontSize: 14,
                      lineHeight: "24px",
                      color: " #808080",
                      fontWeight: 300,
                      fontFamily: "Open Sans",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    {item.city}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section;
