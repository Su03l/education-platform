import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import coursesData from "../../data/courses";
import {
  Flag,
  Schedule,
  TrendingUp,
  School,
  Language,
  Map,
  LibraryBooks,
  Rocket,
  TrackChanges,
  BusinessCenter,
  RocketLaunch,
  Star,
  Code,
  Coffee,
  FlashOn,
  StarBorder,
  ArrowBack,
} from "@mui/icons-material";
import "../../styles/pathway-details.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const DifficultyRating = ({ rating }: { rating: number }) => (
  <>
    {[...Array(5)].map((_, i) =>
      i < rating ? <Star key={i} /> : <StarBorder key={i} />
    )}
  </>
);

export default function ProgrammingBasicsPathway() {
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
  const navigate = useNavigate();

  const pathwayCourses = coursesData.filter((course) =>
    ["python", "java", "cpp", "git"].some((tech) => course.link.includes(tech))
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
          <h1 className="hero-title">مسار أساسيات البرمجة</h1>
          <p className="hero-description">
            ابدأ رحلتك في عالم البرمجة من الصفر. اختر اللغة المناسبة لك وتعلم
            المفاهيم الأساسية التي تحتاجها أيًا كان المسار الذي ستختاره.
          </p>
          <div className="pathway-meta">
            <span className="meta-item">
              <Schedule className="meta-icon" />
              4-6 أشهر
            </span>
            <span className="meta-item">
              <TrendingUp className="meta-icon" />
              مبتدئ
            </span>
            <span className="meta-item">
              <School className="meta-icon" />
              {pathwayCourses.length} كورس
            </span>
          </div>
        </div>
        <div className="hero-icon">
          <Flag fontSize="large" />
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
                بناء أساس قوي في البرمجة ي qualifyك لاختيار أي مسار تخصصي لاحق،
                مع فهم عميق للمفاهيم البرمجية الأساسية.
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
                <li>فهم الخوارزميات والمنطق البرمجي</li>
                <li>كتابة كود نظيم وقابل للقراءة</li>
                <li>حل المشكلات البرمجية</li>
                <li>إدارة المشاريع باستخدام Git</li>
              </ul>
            </div>
            <div className="overview-card">
              <div className="card-header">
                <div className="card-icon opportunities">
                  <RocketLaunch />
                </div>
                <h3>المسارات المستقبلية</h3>
              </div>
              <ul>
                <li>تطوير الويب (Frontend/Backend)</li>
                <li>علوم البيانات والذكاء الاصطناعي</li>
                <li>تطوير التطبيقات</li>
                <li>أمن المعلومات</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pathway-section">
          <h2 className="section-title">
            <Language className="section-title-icon" />
            اختر لغتك الأولى
          </h2>
          <div className="languages-grid">
            <div className="language-card">
              <h4>
                <Code /> Python
              </h4>
              <p>
                <strong>المميزات:</strong> سهلة التعلم، متعددة الاستخدامات،
                مثالية للمبتدئين
              </p>
              <p>
                <strong>مجالاتها:</strong> ويب، بيانات، ذكاء اصطناعي، أتمتة
              </p>
              <p>
                <strong>الصعوبة:</strong> <DifficultyRating rating={1} />
              </p>
            </div>
            <div className="language-card">
              <h4>
                <Coffee /> Java
              </h4>
              <p>
                <strong>المميزات:</strong> قوية، كائنية التوجه، مستخدمة في
                enterprise
              </p>
              <p>
                <strong>مجالاتها:</strong> تطبيقات enterprise، أندرويد، big data
              </p>
              <p>
                <strong>الصعوبة:</strong> <DifficultyRating rating={3} />
              </p>
            </div>
            <div className="language-card">
              <h4>
                <FlashOn /> C++
              </h4>
              <p>
                <strong>المميزات:</strong> عالية الأداء، قريبة من الهاردوير،
                تحكم كامل
              </p>
              <p>
                <strong>مجالاتها:</strong> أنظمة، ألعاب، برمجيات مدمجة
              </p>
              <p>
                <strong>الصعوبة:</strong> <DifficultyRating rating={4} />
              </p>
            </div>
          </div>
        </section>

        <section className="pathway-section">
          <h2 className="section-title">
            <Map className="section-title-icon" />
            خطة التعلم للمبتدئين
          </h2>
          <div className="roadmap-steps">
            <div className="roadmap-step">
              <h3>المرحلة 1: المفاهيم الأساسية (أسبوعان)</h3>
              <ul>
                <li>المتغيرات وأنواع البيانات</li>
                <li>عمليات الإدخال والإخراج</li>
                <li>الجمل الشرطية (if, else)</li>
                <li>الحلقات التكرارية (loops)</li>
              </ul>
            </div>
            <div className="roadmap-step">
              <h3>المرحلة 2: الهياكل المتقدمة (3 أسابيع)</h3>
              <ul>
                <li>المصفوفات والهياكل البيانات</li>
                <li>الدوال والإجراءات</li>
                <li>البرمجة الكائنية (OOP)</li>
                <li>معالجة الأخطاء</li>
              </ul>
            </div>
            <div className="roadmap-step">
              <h3>المرحلة 3: أدوات واحتراف (أسبوعان)</h3>
              <ul>
                <li>أنظمة التحكم بالإصدارات (Git)</li>
                <li>قراءة وتنفيذ الخوارزميات</li>
                <li>حل مسائل برمجية</li>
                <li>بناء مشروع نهائي</li>
              </ul>
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
            مستعد لبدء رحلتك البرمجية؟
          </h2>
          <p>
            لا تتردد! ابدأ اليوم وكن على بعد أشهر قليلة من دخول عالم البرمجة
            الواسع
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
