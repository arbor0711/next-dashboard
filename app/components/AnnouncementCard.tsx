import React from "react";
import Image from "next/image";
import { MdCastForEducation, MdPlayCircleFilled } from "react-icons/md";
import { Announcement } from "./Rightbar";

const AnnouncementCard = ({
  backgroundSrc = "",
  subHeading,
  mainHeading,
  message,
  text,
  buttonLabel,
}: Announcement) => {
  return (
    <div className="image-full bg-gradient-to-b -from--bgSoft -to--bgGradient p-5 rounded-xl relative">
      {backgroundSrc && (
        <div className="absolute bottom-0 right-0">
          <Image
            src={backgroundSrc}
            alt=""
            width={200}
            height={200}
            className="opacity-20"
          />
        </div>
      )}
      <div className="card-body m-0 p-0">
        <p>{subHeading}</p>
        <h2 className="card-title my-2">{mainHeading}</h2>
        <p>{message}</p>
        <p>{text}</p>
        <div className="card-actions justify-start">
          {buttonLabel == "Learn" && (
            <button className="btn btn-primary my-3">
              <MdCastForEducation size={25} /> Learn
              {/* {buttonLabel == "Watch" && <MdPlayCircleFilled /> + "Watch"} */}
            </button>
          )}
          {buttonLabel == "Watch" && (
            <button className="btn btn-primary my-3">
              <MdPlayCircleFilled size={25} /> Watch
              {/* {buttonLabel == "Watch" && <MdPlayCircleFilled /> + "Watch"} */}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
