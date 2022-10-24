import icons from "../../Assets/Icons/index";

const { Upload, ClipBoard, HalfStar, AddCheck } = icons;

export const generateCardInfo = (specialDay) => {
  switch (specialDay) {
    case 1:
      return {
        IconComponent: Upload,
        subject: "Students",
        action: "Submit Papers",
        renderCard: true,
      };
    case 7:
      return {
        IconComponent: AddCheck,
        subject: "Instructors",
        action: "Review papers",
        renderCard: true,
      };
    case 11:
      return {
        IconComponent: ClipBoard,
        subject: "Instuctors",
        action: "Prepare and view grade",
        renderCard: true,
      };
    case 15:
      return {
        IconComponent: HalfStar,
        subject: "Students",
        action: "Rate feedback and view grade",
        renderCard: true,
      };
    default:
      return { renderCard: false };
  }
};
