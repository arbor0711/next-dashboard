import React from "react";
import Card from "./Card";
import { MdPlayCircleFilled } from "react-icons/md";
import AnnouncementCard from "./AnnouncementCard";
import ContentBox from "./ContentBox";

interface Announcement {
  backgroundSrc?: string;
  subHeading: string;
  mainHeading: string;
  message: string;
  text: string;
  buttonLabel: string;
}
const announcements: Announcement[] = [
  {
    backgroundSrc: "",
    subHeading: "🔥Now Available",
    mainHeading: "How to use the new version of Admin Dashboard?",
    message: "Takes 4 minutes to learn",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque necessitatibus, cum placeat velit esse sequi atque itaque voluptate quo quos!",
    buttonLabel: `${(<MdPlayCircleFilled />)}Watch`,
  },
  {
    subHeading: "🚀Coming Soon",
    mainHeading:
      "New server actions are available, partial pre-rendering is coming up!",
    message: "Boost your productivity",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque necessitatibus, cum placeat velit esse sequi atque itaque voluptate quo quos!",
    buttonLabel: `${(<MdPlayCircleFilled />)}Learn`,
  },
];

const Rightbar = () => {
  return (
    <div className="flex flex-col gap-5">
      {announcements.map(
        (
          {
            backgroundSrc,
            subHeading,
            mainHeading,
            message,
            text,
            buttonLabel,
          },
          index
        ) => (
          <ContentBox key={index}>
            <AnnouncementCard
              backgroundSrc={backgroundSrc}
              subHeading={subHeading}
              mainHeading={mainHeading}
              message={message}
              text={text}
              buttonLabel={buttonLabel}
            />
          </ContentBox>
        )
      )}
    </div>
  );
};

export default Rightbar;
