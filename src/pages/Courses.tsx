import { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import coursesData from "../data/courses";
import "./../styles/courses.css";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// تعريف أنواع المسارات
type Category =
  | "all"
  | "frontend-web"
  | "frontend-app"
  | "backend-web"
  | "basics"
  | "ui-ux";

export default function CoursesPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const location = useLocation();

  // استقبال البيانات من المسارات
  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }

    // أو من localStorage
    const savedPathway = localStorage.getItem("selectedPathway");
    if (savedPathway) {
      const pathwayData = JSON.parse(savedPathway);
      setSelectedCategory(pathwayData.category as Category);
      localStorage.removeItem("selectedPathway"); // تنظيف بعد الاستخدام
    }
  }, [location]);

  const categories = [
    { id: "all" as Category, name: "الكل", count: coursesData.length },
    {
      id: "frontend-web" as Category,
      name: "الفرونت اند ويب",
      count: coursesData.filter((c) =>
        [
          "html",
          "css",
          "javascript",
          "typescript",
          "react",
          "tailwind",
          "bootstrap",
          "nextjs",
        ].some((tech) => c.link.includes(tech))
      ).length,
    },
    {
      id: "frontend-app" as Category,
      name: "الفرونت اند أب",
      count: coursesData.filter((c) => c.link.includes("flutter")).length,
    },
    {
      id: "backend-web" as Category,
      name: "الباك اند ويب",
      count: coursesData.filter((c) =>
        ["nodejs", "nest", "mongodb", "sql", "php", "laravel"].some((tech) =>
          c.link.includes(tech)
        )
      ).length,
    },
    {
      id: "basics" as Category,
      name: "أساسيات",
      count: coursesData.filter((c) =>
        ["python", "java", "cpp", "git"].some((tech) => c.link.includes(tech))
      ).length,
    },
    {
      id: "ui-ux" as Category,
      name: "تصميم الواجهات",
      count: coursesData.filter((c) => c.link.includes("ui-ux")).length,
    },
  ];

  const filtered = useMemo(() => {
    let result = coursesData;

    // تطبيق البحث
    const q = query.trim().toLowerCase();
    if (q) {
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
      );
    }

    // تطبيق التصنيف
    if (selectedCategory !== "all") {
      result = result.filter((course) => {
        switch (selectedCategory) {
          case "frontend-web":
            return [
              "html",
              "css",
              "javascript",
              "typescript",
              "react",
              "tailwind",
              "bootstrap",
              "nextjs",
            ].some((tech) => course.link.includes(tech));
          case "frontend-app":
            return course.link.includes("flutter");
          case "backend-web":
            return ["nodejs", "nest", "mongodb", "sql", "php", "laravel"].some(
              (tech) => course.link.includes(tech)
            );
          case "basics":
            return ["python", "java", "cpp", "git"].some((tech) =>
              course.link.includes(tech)
            );
          case "ui-ux":
            return course.link.includes("ui-ux");
          default:
            return true;
        }
      });
    }

    return result;
  }, [query, selectedCategory]);

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

  return (
    <div className="courses-page" dir="rtl">
      <h1>جميع الكورسات</h1>

      {/* شريط البحث */}
      <div className="courses-search">
        <input
          aria-label="ابحث عن كورس"
          placeholder="ابحث عن كورس (مثال: JavaScript, CSS, Git...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn-search" onClick={() => setQuery("")}>
          إعادة
        </button>
      </div>

      {/* التصنيفات */}
      <div className="categories-filter">
        <div className="categories-container">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${
                selectedCategory === category.id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
              <span className="category-count">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* رسالة توضيحية إذا كان هناك فلترة نشطة */}
      {selectedCategory !== "all" && (
        <div className="pathway-filter-info">
          <p>
            عرض الكورسات الخاصة بمسار{" "}
            <strong>
              {categories.find((c) => c.id === selectedCategory)?.name}
            </strong>
            <button
              className="clear-filter-btn"
              onClick={() => setSelectedCategory("all")}
            >
              عرض جميع الكورسات
            </button>
          </p>
        </div>
      )}

      {/* شبكة الكورسات */}
      <div className="courses-grid">
        {filtered.map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="no-results">
          <p>لا توجد كورسات تطابق معايير البحث</p>
          <button
            className="btn-search"
            onClick={() => {
              setQuery("");
              setSelectedCategory("all");
            }}
          >
            عرض جميع الكورسات
          </button>
        </div>
      )}

      <ScrollToTopButton />
    </div>
  );
}
