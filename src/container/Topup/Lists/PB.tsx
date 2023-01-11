import React, { useState } from "react";
import Choose from "../../../components/Choose/Choose";
import PBJson from "../../../json/PointBlank.json";
import images from "../../../assets/index";
const PB: React.FC = () => {
  return (
    <Choose
      json_data={PBJson}
      name="Poin Blank"
      denom={"Cash"}
      images={images.PB}
      publisher="Zeppeto"
      platform="PC"
    />
  );
};

export default PB;
