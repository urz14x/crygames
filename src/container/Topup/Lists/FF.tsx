import React from "react";
import Choose from "../../../components/Choose/Choose";
import FreeFireJSON from "../../../json/Freefire.json";
import images from "../../../assets/index";
const FF: React.FC = () => {
  return (
    <Choose
      json_data={FreeFireJSON}
      name="Free fire"
      denom={"DM"}
      images={images.FF}
      publisher="Garena"
      platform="Mobile"
    />
  );
};

export default FF;
