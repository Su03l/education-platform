import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import coursesData from "../../data/courses";
import {
  Palette,
  Schedule,
  TrendingUp,
  School,
  Lightbulb,
  Autorenew,
  Build,
  LibraryBooks,
  Rocket,
  TrackChanges,
  BusinessCenter,
  RocketLaunch,
  Star,
  Psychology,
  Search,
  Edit,
  TheaterComedy,
  Science,
  ArrowBack,
} from "@mui/icons-material";
import "../../styles/pathway-details.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function UIUXPathway() {
  const navigate = useNavigate();
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

  const pathwayCourses = coursesData.filter((course) =>
    course.link.includes("ui-ux")
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
          <h1 className="hero-title">
            مسار تصميم واجهات وتجربة المستخدم UI/UX
          </h1>
          <p className="hero-description">
            احترف تصميم تجارب مستخدم متميزة تجمع بين الجمال البصري والوظائفية.
            تعلم كيف تبني منتجات رقمية يحبها المستخدمون.
          </p>
          <div className="pathway-meta">
            <span className="meta-item">
              <Schedule className="meta-icon" />
              3-4 أشهر
            </span>
            <span className="meta-item">
              <TrendingUp className="meta-icon" />
              مبتدئ إلى متوسط
            </span>
            <span className="meta-item">
              <School className="meta-icon" />
              {pathwayCourses.length} كورس
            </span>
          </div>
        </div>
        <div className="hero-icon">
          <Palette fontSize="large" />
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
                إعدادك كمصمم واجهات وتجربة مستخدم محترف قادر على تصميم منتجات
                رقمية جميلة وسهلة الاستخدام تلبي احتياجات المستخدمين.
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
                <li>إجراء بحوث المستخدم وتحليل البيانات</li>
                <li>تصميم واجهات مستخدم جذابة وسهلة الاستخدام</li>
                <li>إنشاء نماذج أولية تفاعلية</li>
                <li>اختبار قابلية الاستخدام وتحسين التجربة</li>
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
                <li>UI/UX Designer</li>
                <li>Product Designer</li>
                <li>UX Researcher</li>
                <li>Interaction Designer</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pathway-section">
          <h2 className="section-title">
            <Lightbulb className="section-title-icon" />
            الفرق بين UI و UX
          </h2>
          <div className="comparison-grid">
            <div className="comparison-card">
              <h4>
                <Palette /> UI - واجهة المستخدم
              </h4>
              <p>
                <strong>يركز على:</strong> المظهر البصري، الألوان، التخطيط،
                التصميم الجرافيكي
              </p>
              <p>
                <strong>يسأل:</strong> كيف يبدو المنتج؟
              </p>
              <p>
                <strong>أدوات:</strong> Figma, Adobe XD, Sketch
              </p>
            </div>
            <div className="comparison-card">
              <h4>
                <Psychology /> UX - تجربة المستخدم
              </h4>
              <p>
                <strong>يركز على:</strong> سهولة الاستخدام، الكفاءة، رضا
                المستخدم، تدفق العمل
              </p>
              <p>
                <strong>يسأل:</strong> كيف يشعر المستخدم أثناء الاستخدام؟
              </p>
              <p>
                <strong>أدوات:</strong> User Testing, Analytics, User Research
              </p>
            </div>
          </div>
        </section>

        <section className="pathway-section">
          <h2 className="section-title">
            <Autorenew className="section-title-icon" />
            عملية التصميم
          </h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-icon">
                <Search />
              </div>
              <div className="step-content">
                <h3>البحث والفهم</h3>
                <p>فهم المستخدمين، أهدافهم، احتياجاتهم، وسلوكياتهم</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-icon">
                <Edit />
              </div>
              <div className="step-content">
                <h3>التصميم والتخطيط</h3>
                <p>إنشاء wireframes، تصميم الواجهات، اختيار الألوان والخطوط</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-icon">
                <TheaterComedy />
              </div>
              <div className="step-content">
                <h3>النماذج الأولية</h3>
                <p>بناء نماذج تفاعلية لمحاكاة تجربة المستخدم الحقيقية</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-icon">
                <Science />
              </div>
              <div className="step-content">
                <h3>الاختبار والتحسين</h3>
                <p>
                  اختبار مع المستخدمين، جمع التغذية الراجعة، التحسين المستمر
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pathway-section">
          <h2 className="section-title">
            <Build className="section-title-icon" />
            أدوات المصمم المحترف
          </h2>
          <div className="tools-grid">
            <div className="tool-card">
              <h4>Figma</h4>
              <p>
                أداة التصميم التعاونية الأكثر شعبية لتصميم الواجهات والنماذج
                التفاعلية
              </p>
            </div>
            <div className="tool-card">
              <h4>Adobe XD</h4>
              <p>حزمة Adobe المتكاملة لتصميم وتخطيط تجارب المستخدم</p>
            </div>
            <div className="tool-card">
              <h4>Sketch</h4>
              <p>أداة تصميم vector شهيرة لمصممي واجهات المستخدم</p>
            </div>
            <div className="tool-card">
              <h4>InVision</h4>
              <p>منصة لعرض النماذج الأولية والتعاون مع الفرق</p>
            </div>
          </div>
        </section>

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
            مستعد لتصميم تجارب مستخدم مذهلة؟
          </h2>
          <p>
            انضم إلى عالم التصميم الرقمي وكن المصمم الذي يجمع بين الإبداع
            والوظائفية
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
