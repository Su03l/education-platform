import { useNavigate } from "react-router-dom";
import coursesData from "../../data/courses";
import {
  Smartphone,
  Schedule,
  TrendingUp,
  School,
  Build,
  Lightbulb,
  LibraryBooks,
  Rocket,
  TrackChanges,
  BusinessCenter,
  RocketLaunch,
  Star,
  FlashOn,
  Devices,
  Palette,
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

export default function FrontendAppPathway() {
  const navigate = useNavigate();

  const pathwayCourses = coursesData.filter((course) =>
    course.link.includes("flutter")
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
          <h1 className="hero-title">مسار Front-end App Development</h1>
          <p className="hero-description">
            تخصص في تطوير تطبيقات الموبايل cross-platform باستخدام Flutter. أنشئ
            تطبيقات لـ iOS و Android من كود واحد.
          </p>
          <div className="pathway-meta">
            <span className="meta-item">
              <Schedule className="meta-icon" />
              3-5 أشهر
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
          <Smartphone fontSize="large" />
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
                إعدادك كمطور تطبيقات موبايل محترف باستخدام Flutter، مع القدرة
                على بناء تطبيقات عالية الجودة لكل المنصات.
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
                <li>تطوير تطبيقات لـ iOS و Android</li>
                <li>تصميم واجهات مستخدم جذابة</li>
                <li>التعامل مع APIs وتخزين البيانات</li>
                <li>نشر التطبيقات على المتاجر</li>
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
                <li>Flutter Developer</li>
                <li>Mobile App Developer</li>
                <li>Cross-platform Developer</li>
                <li>UI/UX Developer</li>
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
              <h4>Flutter</h4>
              <p>
                إطار عمل Google لبناء تطبيقات native مدمجة من كود واحد لكل
                المنصات.
              </p>
            </div>
            <div className="tech-card">
              <h4>Dart</h4>
              <p>
                لغة البرمجة الحديثة التي تعمل عليها Flutter، سريعة وسهلة التعلم.
              </p>
            </div>
            <div className="tech-card">
              <h4>Widgets</h4>
              <p>
                نظام الواجهات في Flutter لبناء واجهات مستخدم تفاعلية وجذابة.
              </p>
            </div>
            <div className="tech-card">
              <h4>Firebase</h4>
              <p>
                منصة Google للتطبيقات المتنقلة تشمل Authentication وCloud
                Storage.
              </p>
            </div>
          </div>
        </section>

        <section className="pathway-section">
          <h2 className="section-title">
            <Lightbulb className="section-title-icon" />
            لماذا Flutter؟
          </h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h4>
                <FlashOn /> أداء عالي
              </h4>
              <p>
                تطبيقات ذات أداء مشابه للتطبيقات الأصلية بفضل محرك Rendering
                مخصص
              </p>
            </div>
            <div className="benefit-card">
              <h4>
                <Devices /> كود واحد لمنصتين
              </h4>
              <p>أنشئ تطبيقات لـ iOS و Android من كودbase واحد فقط</p>
            </div>
            <div className="benefit-card">
              <h4>
                <Palette /> تصميم سريع
              </h4>
              <p>Hot Reload يسمح لك برؤية التغييرات فوراً دون إعادة بناء</p>
            </div>
            <div className="benefit-card">
              <h4>
                <TrendingUp /> شعبية متزايدة
              </h4>
              <p>يدعمه Google ويستخدم من قبل شركات كبرى مثل Alibaba وeBay</p>
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
            مستعد لبناء أول تطبيق موبايل؟
          </h2>
          <p>
            انطلق في عالم تطوير التطبيقات المتنقلة وكن المطور الذي يجمع بين
            الجمال والأداء
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
