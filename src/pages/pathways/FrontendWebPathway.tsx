import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import coursesData from "../../data/courses";
import {
  Computer,
  Schedule,
  TrendingUp,
  School,
  Build,
  LibraryBooks,
  Rocket,
  TrackChanges,
  BusinessCenter,
  RocketLaunch,
  Star,
  ArrowBack,
  CheckCircle,
  RadioButtonUnchecked,
} from "@mui/icons-material";
import "../../styles/pathway-details.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function FrontendWebPathway() {
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
    [
      "html",
      "css",
      "javascript",
      "typescript",
      "react",
      "tailwind",
      "bootstrap",
      "nextjs",
    ].some((tech) => course.link.includes(tech))
  );

  // تعريف الكورسات الإجبارية والاختيارية
  const mandatoryCourses = pathwayCourses.filter((course) =>
    ["html", "css", "javascript", "react"].some((tech) =>
      course.link.includes(tech)
    )
  );

  const optionalCourses = pathwayCourses.filter(
    (course) =>
      !["html", "css", "javascript", "react"].some((tech) =>
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
          <h1 className="hero-title">مسار Front-end Web Development</h1>
          <p className="hero-description">
            رحلة متكاملة لاحتراف تطوير واجهات الويب الحديثة. ابدأ من الصفر ووصل
            إلى مستوى متقدم في بناء تطبيقات ويب تفاعلية وسريعة.
          </p>
          <div className="pathway-meta">
            <span className="meta-item">
              <Schedule className="meta-icon" />
              6-8 أشهر
            </span>
            <span className="meta-item">
              <TrendingUp className="meta-icon" />
              مبتدئ إلى متقدم
            </span>
            <span className="meta-item">
              <School className="meta-icon" />
              {pathwayCourses.length} كورس
            </span>
          </div>
        </div>
        <div className="hero-icon">
          <Computer fontSize="large" />
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
                إعدادك كمطور واجهات أمامية محترف قادر على بناء تطبيقات ويب حديثة
                ومتجاوبة باستخدام أحدث التقنيات والأدوات.
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
                <li>بناء مواقع ويب متجاوبة</li>
                <li>تطوير تطبيقات ويب تفاعلية</li>
                <li>تحسين أداء المواقع</li>
                <li>التعامل مع APIs</li>
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
                <li>Frontend Developer</li>
                <li>Web Developer</li>
                <li>React Developer</li>
                <li>UI Developer</li>
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
              <h4>HTML5</h4>
              <p>
                لغة ترميز لإنشاء هيكل صفحات الويب مع إمكانيات متقدمة للوسائط
                والتطبيقات.
              </p>
            </div>
            <div className="tech-card">
              <h4>CSS3</h4>
              <p>
                تنسيق وتصميم صفحات الويب مع Animations وFlexbox وGrid layouts.
              </p>
            </div>
            <div className="tech-card">
              <h4>JavaScript</h4>
              <p>لغة البرمجة الأساسية لإضافة التفاعل والمنطق لتطبيقات الويب.</p>
            </div>
            <div className="tech-card">
              <h4>TypeScript</h4>
              <p>
                JavaScript مع أنواع بيانات ثابتة لكتابة كود أكثر موثوقية وقابلية
                للصيانة.
              </p>
            </div>
            <div className="tech-card">
              <h4>React</h4>
              <p>
                مكتبة JavaScript لبناء واجهات مستخدم تفاعلية وقابلة لإعادة
                الاستخدام.
              </p>
            </div>
            <div className="tech-card">
              <h4>Tailwind CSS</h4>
              <p>إطار عمل CSS utility-first لبناء تصاميم مخصصة بسرعة.</p>
            </div>
            <div className="tech-card">
              <h4>Bootstrap</h4>
              <p>
                مكتبة CSS لبناء واجهات مستخدم تفاعلية وقابلة لإعادة الاستخدام.
              </p>
            </div>
            <div className="tech-card">
              <h4>Next Js</h4>
              <p>
                مكتبة JavaScript لبناء واجهات مستخدم تفاعلية وقابلة لإعادة
                الاستخدام.
              </p>
            </div>
          </div>
        </section>

        {/* قسم جديد: الكورسات المتسلسلة */}
        <section className="pathway-section">
          <h2 className="section-title">
            <LibraryBooks className="section-title-icon" />
            الكورسات المتسلسلة
          </h2>
          <p className="section-description">
            اتبع هذه الكورسات بالترتيب الموصى به لتحقيق أقصى استفادة من المسار.
            الكورسات الإجبارية ضرورية لإتقان الأساسيات، بينما الكورسات
            الاختيارية تمكنك من التخصص في مجالات محددة.
          </p>

          <div className="courses-sequence">
            <div className="sequence-category">
              <h3 className="category-title">
                <CheckCircle className="category-icon mandatory" />
                الكورسات الإجبارية
              </h3>
              <p className="category-description">
                هذه الكورسات أساسية ولا غنى عنها لأي مطور واجهات أمامية
              </p>
              <div className="courses-timeline">
                {mandatoryCourses.map((course, index) => (
                  <div key={course.link} className="course-card mandatory">
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
            </div>

            <div className="sequence-category">
              <h3 className="category-title">
                <RadioButtonUnchecked className="category-icon optional" />
                الكورسات الاختيارية
              </h3>
              <p className="category-description">
                اختر منها ما يناسب اهتماماتك ومتطلبات مشاريعك
              </p>
              <div className="courses-timeline">
                {optionalCourses.map((course, index) => (
                  <div key={course.link} className="course-card optional">
                    <div className="course-step">اختياري {index + 1}</div>
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
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>
            <Rocket className="section-title-icon" />
            مستعد لبدء الرحلة؟
          </h2>
          <p>
            انضم لآلاف الطلاب الذين بدأوا رحلتهم في تطوير الويب مع هذا المسار
            المتكامل
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
