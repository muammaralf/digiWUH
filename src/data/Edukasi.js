import game from "../assets/icons/line/Game.svg";
import workshop from "../assets/icons/line/Workshop.svg";
import video from "../assets/icons/line/Video Pembelajaran.svg";

export const edukasi = [
  {
    id: "1",
    bgout: "bg-[#2DC25F]",
    bgicon: "bg-[#00884E]",
    icon: { game },
    nameEdukasi: "Mini Game",
    linkBtn: "/game",
  },
  {
    id: "2",
    bgout: "bg-[#4285F4]",
    bgicon: "bg-[#1355C3]",
    icon: { workshop },
    nameEdukasi: "Acara",
    linkBtn: "/acara",
  },
  {
    id: "3",
    bgout: "bg-[#F36565]",
    bgicon: "bg-[#CF4242]",
    icon: { video },
    nameEdukasi: "Video Edukasi",
    linkBtn: "/video",
  },
];
