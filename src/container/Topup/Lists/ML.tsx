import React, { useRef, useState } from "react";
import Choose from "../../../components/Choose/Choose";
import MLJson from "../../../json/Mobilelegends.json";
import images from "../../../assets/index";

const ML: React.FC = () => {
  return (
    <Choose
      json_data={MLJson}
      name="Mobile legends"
      denom={"DM"}
      images={images.ML}
      publisher="Moonton"
      platform="Mobile"
    />
  );
};

export default ML;
