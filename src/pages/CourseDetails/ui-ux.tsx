import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import UiImg from "../../assets/images/UI-UX.svg";
import { useEffect, useRef } from "react";

export default function UiUxCourse() {
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (mainContentRef.current)
      mainContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div dir="rtl" style={{ margin: "50px" }} ref={mainContentRef}>
      <h1>UI/UX Course</h1>
      <img
        src={UiImg}
        alt="UI/UX Design"
        style={{ width: "100%", maxWidth: "600px", height: "auto" }}
      />
      <h2>سيتم اضافة المحتوى قريبا ...</h2>
      <Link to="/courses" className="btn btn-outline">
        العودة للكورسات{" "}
        <ArrowForwardIosIcon style={{ transform: "rotate(180deg)" }} />
      </Link>
    </div>
  );
}
