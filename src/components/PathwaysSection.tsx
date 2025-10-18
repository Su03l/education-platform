import { useNavigate } from "react-router-dom";
import "../styles/pathways.css";
import ComputerIcon from "@mui/icons-material/Computer";
import SettingsIcon from "@mui/icons-material/Settings";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CodeIcon from "@mui/icons-material/Code";
import PaletteIcon from "@mui/icons-material/Palette";
import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

interface Pathway {
  id: string;
  title: string;
  description: string;
  courses: string[];
  duration: string;
  level: string;
  color: string;
  icon: ReactNode;
}

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

export default function PathwaysSection() {
  const navigate = useNavigate();

  const pathways: Pathway[] = [
    {
      id: "frontend-web",
      title: "مسار Front-end (Web)",
      description:
        "احترف تطوير واجهات الويب باستخدام أحدث التقنيات والأدوات. ابدأ من الأساسيات وصولاً إلى الإطارات الحديثة.",
      courses: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Bootstrap",
      ],
      duration: "6-8 أشهر",
      level: "مبتدئ إلى متقدم",
      color: "#f5332c",
      icon: <ComputerIcon />,
    },
    {
      id: "backend-web",
      title: "مسار Back-end (Web)",
      description:
        "تعلّم بناء الخوادم وقواعد البيانات والواجهات البرمجية لتطبيقات ويب قوية وآمنة.",
      courses: ["Node.js", "NestJS", "MongoDB", "PostgreSQL", "PHP", "Laravel"],
      duration: "5-7 أشهر",
      level: "متوسط إلى متقدم",
      color: "#f5332c",
      icon: <SettingsIcon />,
    },
    {
      id: "frontend-app",
      title: "مسار Front-end (App)",
      description:
        "تخصص في بناء تطبيقات الموبايل cross-platform باستخدام Flutter وتقنيات التطوير الحديثة.",
      courses: ["Flutter", "Dart", "UI/UX للموبايل"],
      duration: "3-5 أشهر",
      level: "مبتدئ إلى متوسط",
      color: "#f5332c",
      icon: <PhoneIphoneIcon />,
    },
    {
      id: "programming-basics",
      title: "أساسيات البرمجة",
      description:
        "ابدأ رحلتك في عالم البرمجة مع هذه المسارات التأسيسية المناسبة للمبتدئين.",
      courses: ["Python", "Java", "C++", "Git & GitHub"],
      duration: "4-6 أشهر",
      level: "مبتدئ",
      color: "#f5332c",
      icon: <CodeIcon />,
    },
    {
      id: "ui-ux",
      title: "مسار تصميم الواجهات UI/UX",
      description:
        "تعلّم تصميم تجارب مستخدم متميزة وواجهات جميلة تلبي احتياجات المستخدمين.",
      courses: ["مبادئ UI/UX", "أدوات التصميم", "بحوث المستخدم"],
      duration: "3-4 أشهر",
      level: "مبتدئ إلى متوسط",
      color: "#f5332c",
      icon: <PaletteIcon />,
    },
  ];

  const handleViewPathway = (pathwayId: string) => {
    navigate(`/pathways/${pathwayId}`);
  };

  return (
    <div className="pathways-section" dir="rtl">
      <div className="pathways-header">
        <h2>مسارات التعلم</h2>
        <hr />
        <p>اختر المسار المناسب لك وابدأ رحلتك في عالم البرمجة خطوة بخطوة</p>
      </div>

      <div className="pathways-grid">
        {pathways.map((pathway) => (
          <div key={pathway.id} className="pathway-card">
            <div
              className="pathway-icon"
              style={{ backgroundColor: pathway.color }}
            >
              {pathway.icon}
            </div>

            <div className="pathway-header">
              <h3>{pathway.title}</h3>
              <div className="pathway-meta">
                <span className="duration">{pathway.duration}</span>
                <span className="level">{pathway.level}</span>
              </div>
            </div>

            <p className="pathway-description">{pathway.description}</p>

            <div className="pathway-courses-preview">
              <h4>الكورسات المتضمنة:</h4>
              <div className="courses-tags">
                {pathway.courses.slice(0, 4).map((course, index) => (
                  <span key={index} className="course-tag">
                    {course}
                  </span>
                ))}
                {pathway.courses.length > 4 && (
                  <span
                    className="course-tag-more"
                    style={{ backgroundColor: pathway.color }}
                  >
                    +{pathway.courses.length - 4} أكثر
                  </span>
                )}
              </div>
            </div>

            <button
              className="view-pathway-btn"
              style={{ backgroundColor: pathway.color }}
              onClick={() => handleViewPathway(pathway.id)}
            >
              عرض المسار الكامل
            </button>
          </div>
        ))}
      </div>
      <ScrollToTopButton />
    </div>
  );
}
