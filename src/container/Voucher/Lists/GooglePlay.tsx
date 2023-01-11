import React from "react";
import Choose from "../../../components/Choose/Choose";
import GoogleplayJson from "../../../json/Googleplay.json";
import images from "../../../assets/index";
export default function GooglePlay() {
  return (
    <Choose
      json_data={GoogleplayJson}
      name="Google Play"
      images={images.GooglePlay}
      denom="IDR"
      publisher="Google Inc"
      platform="Mobile"
    />
  );
}
