import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import "../../styles/ui-ix.css";
import { Helmet } from "react-helmet";

const lessons = [
  { id: 1, title: "ماذا تحتاج للبدء في Figma", icon: "" },
  { id: 2, title: "أساسيات Figma - شرح أصيل", icon: "" },
  { id: 3, title: "أساسيات Figma - شرح صفاء سعيد", icon: "" },
];

export default function FigmaCoursePage() {
  const [activeLesson, setActiveLesson] = useState<number>(1);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeLesson]);

  const getYouTubeUrl = () => {
    const urls = {
      1: "https://youtube.com/playlist?list=PLIW7Uli0gP7h2wvikTq5zMh8PoOQWhlpw&si=53MwuTjNzY7IzsM4",
      2: "https://youtube.com/playlist?list=PLIW7Uli0gP7h2wvikTq5zMh8PoOQWhlpw&si=53MwuTjNzY7IzsM4",
      3: "https://youtube.com/playlist?list=PLsH_0SbzxwhEizhQxg8-J3MVvxIwNQyjy&si=yndxFc2M-NnxOIzk",
    };
    return urls[activeLesson as keyof typeof urls];
  };

  const handleNextLesson = () => {
    if (activeLesson < lessons.length) setActiveLesson(activeLesson + 1);
  };

  return (
    <div className="figma-course-page" dir="rtl">
      <Helmet>
        <title>كورس Figma للمبتدئين | Edu Platform</title>
        <meta
          name="description"
          content="تعلم Figma خطوة بخطوة لتصميم واجهات المستخدم. مسار متكامل من الصفر للاحتراف."
        />
        <meta
          name="keywords"
          content="Figma, تعلم Figma, تصميم واجهات, UI/UX design, تصميم جرافيك"
        />
        <link
          rel="canonical"
          href="https://edu-platform.netlify.app/courses/figma"
        />
        <meta
          property="og:title"
          content="كورس Figma للمبتدئين | Edu Platform"
        />
        <meta
          property="og:description"
          content="تعلم Figma خطوة بخطوة لتصميم واجهات المستخدم. مسار متكامل من الصفر للاحتراف."
        />
        <meta
          property="og:image"
          content="https://edu-platform.netlify.app/preview.png"
        />
        <meta
          property="og:url"
          content="https://edu-platform.netlify.app/courses/figma"
        />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "Course",
            "name": "كورس Figma للمبتدئين",
            "description": "تعلم Figma خطوة بخطوة لتصميم واجهات المستخدم. مسار متكامل من الصفر للاحتراف.",
            "provider": {
              "@type": "Organization",
              "name": "Edu Platform",
              "url": "https://edu-platform.netlify.app/"
            }
          }
          `}
        </script>
      </Helmet>
      <header className="figma-course-header">
        <div className="figma-course-container">
          <Link to="/courses" className="back-link">
            <ArrowForwardIosIcon
              style={{ transform: "rotate(180deg)", fontSize: 18 }}
            />
            العودة للكورسات
          </Link>
          <div className="figma-course-title">
            <h1>أساسيات Figma</h1>
            <p>شرح كامل لأداة Figma لتصميم واجهات المستخدم - دورة متكاملة</p>
          </div>
        </div>
      </header>

      <section className="figma-course-main figma-course-container">
        <div className="grid-container">
          <main className="main-content" ref={mainContentRef}>
            <div className="main-content-inner">
              {activeLesson === 1 && (
                <div className="lesson-content">
                  <div className="lesson-header">
                    <span className="icon"></span>
                    <h2>ماذا تحتاج للبدء في Figma</h2>
                  </div>

                  <p className="lesson-text">
                    Figma هي أداة قوية لتصميم واجهات المستخدم تعمل عبر المتصفح،
                    قبل البدء في تعلم Figma، هناك بعض الأساسيات التي تحتاج إلى
                    معرفتها.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>جهاز كمبيوتر واتصال إنترنت:</strong>
                        <div className="tool-details">
                          Figma تعمل عبر المتصفح ولا تحتاج تثبيت
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>مفاهيم أساسية في التصميم:</strong>
                        <div className="tool-details">
                          الألوان، الطبقات، النصوص، التناسق البصري
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>فهم واجهات المستخدم:</strong>
                        <div className="tool-details">
                          كيف تتفاعل التطبيقات والمواقع مع المستخدمين
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>حساب Figma مجاني:</strong>
                        <div className="tool-details">
                          سجل حساب مجاني على موقع Figma للبدء
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="setup-steps">
                    <h3>تهيئة البيئة للتصميم:</h3>
                    <div className="steps-container">
                      <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                          <h4>إنشاء حساب Figma</h4>
                          <p>اذهب إلى موقع Figma.com وأنشئ حساب مجاني</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>تعرف على الواجهة</h4>
                          <p>استكشف أدوات Figma والعناصر الأساسية</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>ابدأ بمشروع بسيط</h4>
                          <p>أنشئ ملف جديد وجرب الأدوات الأساسية</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>تعلم الاختصارات</h4>
                          <p>احفظ الاختصارات المهمة لتسريع العمل</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>
                        ابدأ بتعلم الأدوات الأساسية قبل التوجه للميزات المتقدمة
                      </li>
                      <li>استخدم نظام Grid و Guides لتحقيق تناسق في التصميم</li>
                      <li>
                        تعلم كيفية استخدام Components للمساعدة في إعادة
                        الاستخدام
                      </li>
                      <li>جرب التصميم لمواقع وتطبيقات حقيقية للتمرن</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.figma.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IntegrationInstructionsIcon />
                      الموقع الرسمي لـ Figma
                    </a>
                    <button
                      className="btn btn-outline"
                      onClick={handleNextLesson}
                    >
                      الدرس التالي{" "}
                      <ArrowForwardIosIcon
                        style={{ transform: "rotate(180deg)" }}
                      />
                    </button>
                  </div>
                </div>
              )}

              {activeLesson === 2 && (
                <div className="lesson-content">
                  <div className="lesson-header">
                    <span className="icon"></span>
                    <h2>أساسيات Figma - شرح أصيل</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح قناة أصيل | uxAseel - Figma كامل من الصفر</h3>
                    <p>
                      هذا الكورس الشامل لتعليم Figma من البداية حتى الإحتراف
                    </p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات أداة Figma وكيفية استخدامها
                    لتصميم واجهات مستخدم احترافية وقابلة للتطوير.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في Figma:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>ما هي Figma؟</h4>
                        <p>
                          أداة سحابية لتصميم واجهات المستخدم تعمل عبر المتصفح
                          وتدير التعاون في الوقت الحقيقي.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>المشاريع والملفات</h4>
                        <p>
                          كيفية تنظيم العمل في Figma من خلال المشاريع والملفات
                          والإطارات (Frames).
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>الأدوات الأساسية</h4>
                        <p>
                          أدوات الرسم، النصوص، الأشكال، والأدوات المساعدة
                          للتصميم.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>واجهة Figma</strong>
                        <div className="tool-details">
                          الأدوات، اللوحات، الاختصارات، التفضيلات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أدوات الرسم والتحديد</strong>
                        <div className="tool-details">
                          Frame Tool, Shape Tools, Pen Tool, Selection
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>إدارة الطبقات</strong>
                        <div className="tool-details">
                          Layers panel, grouping, locking, hiding
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>النصوص والألوان</strong>
                        <div className="tool-details">
                          Text Tool, color picker, gradients, styles
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> أصيل | uxAseel
                        </div>
                        <div className="detail-item">
                          <strong>المصمم:</strong> أصيل
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Figma كامل من الصفر
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/62qluEMY7C4?list=PLIW7Uli0gP7h2wvikTq5zMh8PoOQWhlpw"
                        title="مقدمة عن البرنامج | صمم باستعمال Figma - قناة أصيل"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLIW7Uli0gP7h2wvikTq5zMh8PoOQWhlpw&si=53MwuTjNzY7IzsM4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لقناة أصيل | uxAseel</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href={getYouTubeUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon /> السلسلة الكاملة على يوتيوب
                    </a>
                    <button
                      className="btn btn-outline"
                      onClick={handleNextLesson}
                    >
                      الدرس التالي{" "}
                      <ArrowForwardIosIcon
                        style={{ transform: "rotate(180deg)" }}
                      />
                    </button>
                  </div>
                </div>
              )}

              {activeLesson === 3 && (
                <div className="lesson-content">
                  <div className="lesson-header">
                    <span className="icon"></span>
                    <h2>أساسيات Figma - شرح صفاء سعيد</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح قناة Safaa Saeed - Figma 2025</h3>
                    <p>شرح متكامل ومحدث لأداة Figma بإصداراتها الحديثة</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم استخدام Figma بميزاتها المتقدمة وأحدث
                    التحديثات مع شرح شامل من المصممة صفاء سعيد.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>الميزات المتقدمة</strong>
                        <div className="tool-details">
                          Components, Auto Layout, Constraints, Prototyping
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التصميم المتجاوب</strong>
                        <div className="tool-details">
                          Responsive design, breakpoints, adaptive layouts
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>النماذج الأولية التفاعلية</strong>
                        <div className="tool-details">
                          Prototyping, interactions, animations, transitions
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التعاون والعمل الجماعي</strong>
                        <div className="tool-details">
                          Sharing, comments, team libraries, version history
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Safaa Saeed
                        </div>
                        <div className="detail-item">
                          <strong>المصممة:</strong> صفاء سعيد
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Figma 2025 متكامل
                        </div>
                        <div className="detail-item">
                          <strong>السلسلة:</strong> ابدأ رحلتك في التصميم
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/4do74wpgCuM?list=PLsH_0SbzxwhEizhQxg8-J3MVvxIwNQyjy"
                        title="ابدأ رحلتك في التصميم مع فيجما 2025 | مقدمة 1 - قناة Safaa Saeed"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLsH_0SbzxwhEizhQxg8-J3MVvxIwNQyjy&si=yndxFc2M-NnxOIzk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لقناة Safaa Saeed</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>أنشئ تصميم كامل لتطبيق جوال باستخدام Figma</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>طبق مبادئ التصميم المتجاوب باستخدام Auto Layout</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>أنشئ نموذج أولي تفاعلي مع انتقالات وحركات</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLsH_0SbzxwhEizhQxg8-J3MVvxIwNQyjy&si=yndxFc2M-NnxOIzk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon /> السلسلة الكاملة على يوتيوب
                    </a>
                    <Link to="/courses" className="btn btn-outline">
                      العودة للكورسات{" "}
                      <ArrowForwardIosIcon
                        style={{ transform: "rotate(180deg)" }}
                      />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </main>

          <aside className="sidebar">
            <div className="sidebar-inner">
              <h3>دورة Figma الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">أصيل، صفاء سعيد</p>
              </div>
              <div className="lessons-list">
                {lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLesson(lesson.id)}
                    className={`lesson-button ${
                      activeLesson === lesson.id ? "active" : ""
                    }`}
                    type="button"
                  >
                    <div className="lesson-button-content">
                      <span className="icon">{lesson.icon}</span>
                      <span className="title">{lesson.title}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="playlist-links">
                <h4>سلاسل الشرح:</h4>
                <a
                  href="https://youtube.com/playlist?list=PLIW7Uli0gP7h2wvikTq5zMh8PoOQWhlpw&si=53MwuTjNzY7IzsM4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  أصيل | uxAseel
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLsH_0SbzxwhEizhQxg8-J3MVvxIwNQyjy&si=yndxFc2M-NnxOIzk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  Safaa Saeed
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
