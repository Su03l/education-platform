import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { useState, useEffect } from "react";


import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SearchIcon from "@mui/icons-material/Search";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";

import CourseCard from "../components/CourseCard";
import "./../styles/home.css";
import About from "./about";
import PathwaysSection from "../components/PathwaysSection";

// ==== Images ====
import jsImage from "./../assets/images/javascript-logo-svgrepo-com.svg";
import javaImage from "./../assets/images/java-svgrepo-com.svg";
import pythonImage from "./../assets/images/python-svgrepo-com.svg";
import sqlImage from "./../assets/images/sql-svgrepo-com.svg";
import htmlImage from "./../assets/images/html-5-svgrepo-com.svg";
import cssImage from "./../assets/images/css-3-svgrepo-com.svg";
import tsImage from "./../assets/images/typescript-official-svgrepo-com.svg";
import reactImage from "./../assets/images/react-svgrepo-com.svg";
import Contact from "../components/Contact";

// ==== Type ====
type Course = {
  icon?: ReactNode;
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
};

// ==== Raw Data ====
const coursesData: Course[] = [
  {
    image: htmlImage,
    title: "أساسيات HTML5",
    description:
      "ابدأ رحلتك في تطوير الويب بتعلم كيفية إنشاء صفحات الإنترنت باستخدام أحدث معايير HTML5.",
    level: "مبتدئ",
    rating: 4.5,
    link: "/courses/html",
    linkText: "ابدأ الكورس",
  },
  {
    image: cssImage,
    title: "تنسيق الصفحات بـ CSS3",
    description:
      "تعلم تصميم صفحات ويب احترافية وجميلة باستخدام CSS3 وخصائص Flexbox وGrid.",
    level: "مبتدئ",
    rating: 4.6,
    link: "/courses/css",
    linkText: "ابدأ الكورس",
  },
  {
    image: jsImage,
    title: "تطوير الويب بـ JavaScript",
    description:
      "احترف لغة JavaScript وتعلم كيفية بناء مواقع وتطبيقات ويب تفاعلية من الصفر حتى الاحتراف.",
    duration: "10 أسابيع",
    students: "2,100",
    rating: 4.9,
    level: "متوسط",
    link: "/courses/javascript",
    linkText: "ابدأ التعلم الآن",
  },
  {
    image: tsImage,
    title: "TypeScript للمطورين",
    description:
      "ارتقِ بمهاراتك في JavaScript إلى مستوى أعلى مع TypeScript لكتابة كود منظم وقابل للتطوير.",
    level: "متوسط",
    rating: 4.7,
    link: "/courses/typescript",
    linkText: "ابدأ الكورس",
  },
  {
    image: reactImage,
    title: "تطوير واجهات المستخدم بـ React",
    description:
      "تعلم بناء تطبيقات ويب تفاعلية وسريعة باستخدام مكتبة React JS مع أحدث الممارسات.",
    level: "متوسط إلى متقدم",
    rating: 4.8,
    link: "/courses/react",
    linkText: "ابدأ الكورس",
  },
  {
    image: pythonImage,
    title: "Python للمبتدئين",
    description:
      "ابدأ تعلم لغة Python السهلة والمميزة لتطوير التطبيقات والذكاء الاصطناعي وتحليل البيانات.",
    level: "مبتدئ",
    rating: 4.7,
    link: "/courses/python",
    linkText: "ابدأ الكورس",
  },
  {
    image: javaImage,
    title: "أساسيات Java",
    description:
      "تعلم مفاهيم البرمجة الكائنية وتطوير التطبيقات باستخدام لغة Java مع أمثلة عملية.",
    level: "مبتدئ إلى متوسط",
    rating: 4.6,
    link: "/courses/java",
    linkText: "ابدأ الكورس",
  },
  {
    image: sqlImage,
    title: "تصميم قواعد البيانات SQL",
    description:
      "تعلم كيفية تصميم وتنظيم وإدارة قواعد البيانات باستخدام SQL مع مشاريع عملية.",
    level: "متوسط",
    rating: 4.6,
    link: "/courses/sql",
    linkText: "ابدأ الكورس",
  },
];

// ==== Reorder Courses ====
const orderedCourses = [
  coursesData.find((c) => c.title.includes("HTML5")),
  coursesData.find((c) => c.title.includes("JavaScript")),
  coursesData.find((c) => c.title.includes("CSS3")),
  coursesData.find((c) => c.title.includes("TypeScript")),
  coursesData.find((c) => c.title.includes("React")),
  coursesData.find((c) => c.title.includes("Python")),
  coursesData.find(
    (c) => c.title.includes("Java") && !c.title.includes("JavaScript")
  ),
  coursesData.find((c) => c.title.includes("SQL")),
].filter((c): c is Course => Boolean(c));

// ==== Assign grid classes ====
const finalCoursesData: Course[] = orderedCourses.map((course, index) => ({
  ...course,
  className: `div${index + 1}`,
}));

// ==== ScrollToTopButton Component ====
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUpwardIcon />
    </button>
  );
};

// ==== Component ====
const Home = () => {
  return (
    <div className="home-page" dir="rtl">
      
      {/* ===== Hero Section ===== */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            دليلك الشامل
            <br />
            <span className="highlight">لتعلم البرمجة</span>
          </h1>
          <hr />
          <p>
            منصة تجمع أفضل الشروحات العربية من يوتيوب في مكان واحد، لتسهيل رحلتك
            في تعلم البرمجة مع الحفاظ الكامل على حقوق المدرسين والأصول.
          </p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-primary">
              ابدأ الرحلة الآن
            </Link>
            <Link
              to="/courses"
              className="btn btn-secondary"
              style={{ border: "3px solid " }}
            >
              استكشف الكورسات
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="features-section">
        <div className="feature-card">
          <SearchIcon className="feature-icon" />
          <h3>بحث ميسر</h3>
          <p>نجمع لك أفضل الشروحات من مختلف القنوات في مكان واحد</p>
        </div>
        <div className="feature-card">
          <SchoolIcon className="feature-icon" />
          <h3>تعليم مجاني</h3>
          <p>جميع الكورسات مجانية مع الحفاظ على حقوق المدرسين</p>
        </div>
        <div className="feature-card">
          <FavoriteIcon className="feature-icon" />
          <h3>جودة مضمونة</h3>
          <p>نختار لك أفضل الشروحات من المدرسين الموثوقين</p>
        </div>
      </section>

      <section>
        <About />
      </section>

      <section>
        <PathwaysSection />
      </section>

      {/* ===== Courses Section ===== */}
      <section className="featured-courses-section">
        <h2>مجموعة مختارة من أفضل الكورسات</h2>
        <hr className="underLine" />
        <p>
          اكتشف مجموعة من أفضل الشروحات العربية المجمعة خصيصاً لتسهيل رحلتك
          التعليمية
        </p>
        {/* <div className="course-filters" dir="rtl">
          <button className="filter-btn active">الأكثر طلباً</button>
          <button className="filter-btn">للمبتدئين</button>
          <button className="filter-btn">متقدمة</button>
        </div> */}

        <div className="courses-grid">
          {finalCoursesData.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        <Link to="/courses" className="btn-view-all">
          اكتشف المزيد من الكورسات
        </Link>
      </section>

      <section>
        <Contact />
      </section>

      {/* ===== Scroll To Top Button ===== */}
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
