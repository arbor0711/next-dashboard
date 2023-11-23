import AnnouncementCard from "./AnnouncementCard";

export interface Announcement {
  backgroundSrc?: string;
  subHeading: string;
  mainHeading: string;
  message: string;
  text: string;
  buttonLabel: "Watch" | "Learn";
}
const announcements: Announcement[] = [
  {
    subHeading: "🔥 Now Available",
    mainHeading: "How to use the new version of Admin Dashboard?",
    message: "Takes 4 minutes to learn",
    text: "cum placeat velit esse sequi atque itaque voluptate quo quos!",
    buttonLabel: "Watch",
  },
  {
    backgroundSrc: "/astronaut.png",
    subHeading: "🚀 Coming Soon",
    mainHeading:
      "New server actions are available, partial pre-rendering is coming up!",
    message: "Boost your productivity",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque necessitatibus, quos!",
    buttonLabel: "Learn",
  },
];

const Rightbar = () => {
  return (
    <div className="flex flex-col gap-5 fixed mr-5">
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
          <AnnouncementCard
            key={index}
            backgroundSrc={backgroundSrc}
            subHeading={subHeading}
            mainHeading={mainHeading}
            message={message}
            text={text}
            buttonLabel={buttonLabel}
          ></AnnouncementCard>
        )
      )}
    </div>
  );
};

export default Rightbar;
