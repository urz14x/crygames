import React from "react";
import Choose from "../../../components/Choose/Choose";
import GarenaShellJson from "../../../json/Garenashell.json";
import images from "../../../assets/index";
export default function GooglePlay() {
  return (
    <Choose
      json_data={GarenaShellJson}
      name="Garena Shell"
      images={images.GarenaShell}
      denom={"Shell"}
      publisher="Garena"
      platform="Mobile"
    />
  );
}
