import React from "react";

import EntertainmentCardSlider from "../components/Entertainment/Entertaimentcard.component";
import Premier from "../components/Premier/premier.component";


const HomePage = () => {
    return (
        <>
        <div className="container mx-auto px-4 ">
          <h1 className="text-2xl font-bold text-gray-800 my-3">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
          <Premier />
        </div>

      </>
    );
};

export default HomePage;