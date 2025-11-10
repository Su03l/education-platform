import { useNavigate } from "react-router-dom";
import coursesData from "../../data/courses";
import {
  Settings,
  Schedule,
  TrendingUp,
  School,
  Build,
  Map,
  LibraryBooks,
  Rocket,
  TrackChanges,
  BusinessCenter,
  RocketLaunch,
  Star,
  ArrowBack,
} from "@mui/icons-material";
import "../../styles/pathway-details.css";
import { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

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

export default function BackendWebPathway() {
  const navigate = useNavigate();

  const pathwayCourses = coursesData.filter((course) =>
    ["nodejs", "nest", "mongodb", "sql", "php", "laravel"].some((tech) =>
      course.link.includes(tech)
    )
  );

  const handleStartCourse = (courseLink: string) => {
    navigate(courseLink);
  };

  return (
    <div className="pathway-page" dir="rtl">
      <header className="pathway-hero">
        <button className="back-button" onClick={() => navigate("/pathways")}>
          <ArrowBack />
          العودة إلى المسارات
        </button>
        <div className="hero-content">
          <h1 className="hero-title">مسار Back-end Web Development</h1>
          <p className="hero-description">
            احترف بناء الخوادم وقواعد البيانات والواجهات البرمجية الآمنة. تعلم
            كيفية إنشاء أنظمة خلفية قوية لتطبيقات الويب الحديثة.
          </p>
          <div className="pathway-meta">
            <span className="meta-item">
              <Schedule className="meta-icon" />
              5-7 أشهر
            </span>
            <span className="meta-item">
              <TrendingUp className="meta-icon" />
              متوسط إلى متقدم
            </span>
            <span className="meta-item">
              <School className="meta-icon" />
              {pathwayCourses.length} كورس
            </span>
          </div>
        </div>
        <div className="hero-icon">
          <Settings fontSize="large" />
        </div>
      </header>

      <div className="pathway-content">
        <section className="pathway-section">
          <h2 className="section-title">نظرة عامة على المسار</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="card-header">
                <div className="card-icon target">
                  <TrackChanges />
                </div>
                <h3>الهدف من المسار</h3>
              </div>
              <p>
                إعدادك كمطور خوادم محترف قادر على بناء APIs آمنة، إدارة قواعد
                البيانات، وتطوير أنظمة خلفية قابلة للتطوير.
              </p>
            </div>
            <div className="overview-card">
              <div className="card-header">
                <div className="card-icon skills">
                  <BusinessCenter />
                </div>
                <h3>المهارات المكتسبة</h3>
              </div>
              <ul>
                <li>بناء وتصميم RESTful APIs</li>
                <li>إدارة قواعد البيانات SQL وNoSQL</li>
                <li>تطبيق أنظمة الأمان والمصادقة</li>
                <li>نشر وإدارة الخوادم</li>
              </ul>
            </div>
            <div className="overview-card">
              <div className="card-header">
                <div className="card-icon opportunities">
                  <RocketLaunch />
                </div>
                <h3>فرص العمل</h3>
              </div>
              <ul>
                <li>Backend Developer</li>
                <li>API Developer</li>
                <li>Node.js Developer</li>
                <li>Full Stack Developer</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pathway-section">
          <h2 className="section-title">
            <Build className="section-title-icon" />
            التقنيات المستخدمة
          </h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h4>Node.js</h4>
              <p>
                بيئة تشغيل JavaScript لبناء تطبيقات الخوادم سريعة وقابلة
                للتطوير.
              </p>
            </div>
            <div className="tech-card">
              <h4>NestJS</h4>
              <p>
                إطار عمل متقدم لبناء تطبيقات خادم فعالة وقابلة للصيانة باستخدام
                TypeScript.
              </p>
            </div>
            <div className="tech-card">
              <h4>MongoDB</h4>
              <p>
                قاعدة بيانات NoSQL مرنة لمشاريع البيانات الكبيرة والتطبيقات
                الحديثة.
              </p>
            </div>
            <div className="tech-card">
              <h4>PostgreSQL</h4>
              <p>نظام إدارة قواعد بيانات علائقية متقدم ومفتوح المصدر.</p>
            </div>
            <div className="tech-card">
              <h4>PHP & Laravel</h4>
              <p>
                لغة برمجة الخوادم الكلاسيكية مع إطار عمل حديث لبناء تطبيقات ويب
                سريعة.
              </p>
            </div>
          </div>
        </section>

        <section className="pathway-section">
          <h2 className="section-title">
            <Map className="section-title-icon" />
            خطة التعلم
          </h2>
          <div className="path-steps">
            <div className="path-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>أساسيات الخوادم وقواعد البيانات</h3>
                <p>ابدأ بتعلم مفاهيم الخوادم، HTTP، وقواعد البيانات الأساسية</p>
              </div>
            </div>
            <div className="path-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>تطوير APIs باستخدام Node.js</h3>
                <p>تعلم بناء واجهات برمجية RESTful مع Express وMongoDB</p>
              </div>
            </div>
            <div className="path-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>الإطارات المتقدمة وقواعد البيانات</h3>
                <p>انتقل إلى NestJS وقواعد البيانات العلائقية مع PostgreSQL</p>
              </div>
            </div>
            <div className="path-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>الأمان والنشر</h3>
                <p>تعلم حماية التطبيقات ونشرها على الخوادم السحابية</p>
              </div>
            </div>
          </div>
        </section>
        <h1 style={{ textAlign: "center" }}>اختر واحدة منها لبدء الكورس</h1>
        <p style={{ textAlign: "center", marginBottom: "30px" }}>
          كل كورس مختلف عن الاخر ويغطي جانب معين من تطوير الBackend وكل واحد
          منها تكفي عن الاخر{" "}
        </p>
        <section className="pathway-section">
          <h2 className="section-title">
            <LibraryBooks className="section-title-icon" />
            الكورسات المتسلسلة
          </h2>
          <div className="courses-timeline">
            {pathwayCourses.map((course, index) => (
              <div key={course.link} className="course-card">
                <div className="course-step">الخطوة {index + 1}</div>
                <div className="course-content">
                  <div className="course-header">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="course-image"
                    />
                    <div className="course-info">
                      <h3>{course.title}</h3>
                      <p>{course.description}</p>
                      <div className="course-meta">
                        <span className="course-level">
                          <TrendingUp className="meta-icon" />
                          {course.level}
                        </span>
                        {course.rating && (
                          <span className="course-rating">
                            <Star /> {course.rating}
                          </span>
                        )}
                        {course.duration && (
                          <span className="course-duration">
                            <Schedule className="meta-icon" />
                            {course.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    className="primary-button"
                    onClick={() => handleStartCourse(course.link)}
                  >
                    ابدأ الكورس الآن
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <h2>
            <Rocket className="section-title-icon" />
            مستعد لبناء الأنظمة الخلفية؟
          </h2>
          <p>
            انطلق في رحلة احتراف تطوير الخوادم وكن المهندس الذي يقف وراء أقوى
            التطبيقات
          </p>
          <button
            className="secondary-button"
            onClick={() => navigate("/courses")}
          >
            عرض جميع الكورسات
          </button>
        </section>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
