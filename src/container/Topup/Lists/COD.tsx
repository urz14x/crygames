import React from "react";
import Choose from "../../../components/Choose/Choose";
import CODJson from "../../../json/Callofdutty.json";
import images from "../../../assets/index";
const COD: React.FC = () => {
  return (
    <Choose
      json_data={CODJson}
      name="Call Of dutty Mobile"
      denom={"CP"}
      images={images.COD}
      publisher="Garena"
      platform="Mobile"
    />
  );
};

export default COD;
