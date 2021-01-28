import * as React from "react";
import Section from "./Components/Section/Section";
import Slider from "./Components/Slider/Slider";

const App: React.FC = () => {
  const [flag, setFlag] = React.useState(true);
  const [slideIndex, setSlideIndex] = React.useState(0);

  return (
    <div className="App">
      {flag ? (
        <Section
          flag={flag}
          setFlag={setFlag}
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
        />
      ) : (
        <Slider flag={flag} setFlag={setFlag} slideIndex={slideIndex} />
      )}
    </div>
  );
};

export default App;
