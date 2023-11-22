import React from "react";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

interface Props {
  backgroundSrc?: string;
  subHeading: string;
  mainHeading: string;
  message: string;
  text: string;
  buttonLabel: string;
}

const AnnouncementCard = ({
  backgroundSrc = "",
  subHeading,
  mainHeading,
  message,
  text,
  buttonLabel,
}: Props) => {
  return (
    <div className="image-full ">
      <figure>
        <Image src={backgroundSrc} alt={mainHeading} fill />
      </figure>
      <div className="card-body">
        <p>{subHeading}</p>
        <h2 className="card-title">{mainHeading}</h2>
        <p>{message}</p>
        <p>{text}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">{buttonLabel}</button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
