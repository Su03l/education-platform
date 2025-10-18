import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PeopleIcon from "@mui/icons-material/People";
import CodeIcon from "@mui/icons-material/Code";
import "./../styles/coursecard.css";

// image fallbacks
import jsImage from "../assets/images/javascript-logo-svgrepo-com.svg";
import htmlImage from "../assets/images/html-5-svgrepo-com.svg";
import cssImage from "../assets/images/css-3-svgrepo-com.svg";
import tsImage from "../assets/images/typescript-official-svgrepo-com.svg";
import reactImage from "../assets/images/react-svgrepo-com.svg";
import pythonImage from "../assets/images/python-svgrepo-com.svg";
import javaImage from "../assets/images/java-svgrepo-com.svg";
import sqlImage from "../assets/images/sql-svgrepo-com.svg";

interface CourseCardProps {
  icon?: React.ReactNode;
  image?: string;
  title: string;
  description: string;
  level?: string;
  rating?: number;
  duration?: string;
  students?: string;
  link: string;
  linkText: string;
  className?: string;
}

const CourseCard: React.FC<{ course: CourseCardProps }> = ({ course }) => {
  const title = (course.title || "").toLowerCase();

  const getFallbackImage = () => {
    if (title.includes("html")) return htmlImage;
    if (title.includes("css")) return cssImage;
    if (
      title.includes("javascript") ||
      title.includes("java script") ||
      title.includes("js")
    )
      return jsImage;
    if (title.includes("typescript") || title.includes("ts")) return tsImage;
    if (title.includes("react")) return reactImage;
    if (title.includes("python")) return pythonImage;
    if (title.includes("java") && !title.includes("javascript"))
      return javaImage;
    if (title.includes("sql")) return sqlImage;
    if (title.includes("node") || title.includes("nodejs")) return null;
    // git and others: return null to use an icon fallback
    return null;
  };

  const fallbackImage = getFallbackImage();
  return (
    <div className={`course-card ${course.className || ""}`}>
      {(course.image || fallbackImage) && (
        <img
          src={course.image || fallbackImage!}
          alt={course.title}
          className="course-image"
        />
      )}
      {!course.image && !fallbackImage && course.icon && (
        <div className="course-icon">{course.icon}</div>
      )}
      {!course.image && !fallbackImage && !course.icon && (
        <div className="course-icon">
          <CodeIcon fontSize="large" />
        </div>
      )}
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="course-meta">
        {course.level && <span className="level">{course.level}</span>}
        {course.duration && (
          <span className="meta-item">
            <ScheduleIcon /> {course.duration}
          </span>
        )}
        {course.students && (
          <span className="meta-item">
            <PeopleIcon /> {course.students}
          </span>
        )}
        {course.rating && (
          <span className="meta-item">
            <StarIcon /> {course.rating}
          </span>
        )}
      </div>
      <Link to={course.link} className="course-link">
        {course.linkText}
      </Link>
    </div>
  );
};

export default CourseCard;
