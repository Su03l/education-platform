import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CssIcon from "@mui/icons-material/Css";
import "../../styles/css.css";

const lessons = [
  { id: 1, title: "ماذا تحتاج للبدء", icon: "" },
  { id: 2, title: "أساسيات CSS - الجزء الأول", icon: "" },
  { id: 3, title: "أساسيات CSS - الجزء الثاني", icon: "" },
  { id: 4, title: "أساسيات CSS - الجزء الثالث", icon: "" },
];

export default function CSSCourse() {
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
      1: "https://www.youtube.com/@ElzeroWebSchool",
      2: "https://www.youtube.com/watch?v=qyVkLebgfzY&list=PLDoPjvoNmBAzhFD3niPAa1C1gXG4cs14J",
      3: "https://www.youtube.com/watch?v=CHUbZQJBfpE&list=PLYyqC4bNbCIdES52srHE6xTiIgvgMkBWu",
      4: "https://www.youtube.com/watch?v=_QO55W7KPmI&list=PLknwEmKsW8Os7rKViMCL8x6irVJT7McSS",
    };
    return urls[activeLesson as keyof typeof urls];
  };

  const handleNextLesson = () => {
    if (activeLesson < lessons.length) setActiveLesson(activeLesson + 1);
  };

  return (
    <div className="css-course-page" dir="rtl">
      <header className="css-course-header">
        <div className="css-course-container">
          <Link to="/courses" className="back-link">
            <ArrowForwardIosIcon
              style={{ transform: "rotate(180deg)", fontSize: 18 }}
            />
            العودة للكورسات
          </Link>
          <div className="css-course-title">
            <h1>أساسيات CSS</h1>
            <p>شرح كامل لغة CSS من الصفر حتى الاحتراف - دورة متكاملة</p>
          </div>
        </div>
      </header>

      <section className="css-course-main css-course-container">
        <div className="grid-container">
          <main className="main-content" ref={mainContentRef}>
            <div className="main-content-inner">
              {activeLesson === 1 && (
                <div className="lesson-content">
                  <div className="lesson-header">
                    <span className="icon"></span>
                    <h2>ماذا تحتاج للبدء</h2>
                  </div>

                  <p className="lesson-text">
                    قبل أن تبدأ في تعلم CSS، هناك بعض الأساسيات والأدوات التي
                    تحتاجها لتجعل رحلتك في تنسيق صفحات الويب أسهل وأكثر
                    احترافية.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>معرفة أساسية بـ HTML:</strong>
                        <div className="tool-details">
                          يجب أن تكون على دراية بالوسوم الأساسية في HTML مثل
                          div, p, h1, class, id
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong> Visual Studio Code
                        <div className="tool-details">
                          مع الإضافات الموصى بها مثل CSS Peek, Auto Rename Tag
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>متصفح حديث:</strong>
                        <div className="tool-details">
                          Chrome, Firefox أو Edge مع أدوات المطورين
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أدوات التطوير:</strong>
                        <div className="tool-details">
                          Live Server لتحديث الصفحة تلقائياً
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="setup-steps">
                    <h3>تهيئة البيئة للتطوير:</h3>
                    <div className="steps-container">
                      <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                          <h4>إنشاء ملف CSS</h4>
                          <p>أنشئ ملف style.css في مجلد مشروعك</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>ربط CSS مع HTML</h4>
                          <p>استخدم الوسم {"<link>"} لربط ملف CSS بصفحة HTML</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>اختبار البيئة</h4>
                          <p>اكتب بعض الأنماط البسيطة وتأكد من عملها</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>ابدأ بالأنماط الأساسية قبل المتقدمة</li>
                      <li>استخدم أدوات المطورين في المتصفح لفحص الأنماط</li>
                      <li>جرب كل خاصية تتعلمها فوراً</li>
                      <li>تعلم نظام Flexbox و Grid مبكراً</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CssIcon />
                      مرجع خاص لـ CSS
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
                    <h2>أساسيات CSS - الشرح الاول </h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح الزيرو - CSS كامل من الصفر</h3>
                    <p>هذا الكورس الشامل لتعليم CSS من البداية حتى الإحتراف</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات لغة CSS وكيفية استخدامها
                    لتنسيق صفحات الويب. CSS هي لغة التنسيق التي تعطي المظهر
                    الجميل لمواقعك.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في CSS:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>ما هي CSS؟</h4>
                        <p>
                          لغة تنسيق صفحات الويب (Cascading Style Sheets) تستخدم
                          للتحكم في مظهر المحتوى.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>طربق الربط</h4>
                        <p>ثلاث طربق لربط CSS: inline, internal, external</p>
                      </div>
                      <div className="concept-card">
                        <h4>المحددات (Selectors)</h4>
                        <p>
                          تستخدم لتحديد العناصر التي نريد تطبيق الأنماط عليها.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>طربق ربط CSS مع HTML</strong>
                        <div className="tool-details">
                          inline styles, style tag, external files
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المحددات الأساسية</strong>
                        <div className="tool-details">
                          element, class, id, universal selector
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الخصائص الأساسية</strong>
                        <div className="tool-details">
                          color, background, font, text, margin, padding
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>نموذج الصندوق (Box Model)</strong>
                        <div className="tool-details">
                          margin, border, padding, content
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>أمثلة على CSS الأساسية:</h3>
                    <pre className="code-block">{`/* ربط CSS خارجي */
<link rel="stylesheet" href="style.css">

/* المحددات الأساسية */
element { property: value; }
.class { property: value; }
#id { property: value; }
* { property: value; }

/* الأنماط الأساسية */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    background: white;
}

.title {
    color: #333;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
}

.button {
    background: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> الزيرو ويب سكول
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> أسامة الزيرو
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> شرح CSS كامل من الصفر
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/qyVkLebgfzY"
                        title="شرح CSS كامل من الزيرو - الجزء الأول"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/watch?v=qyVkLebgfzY&list=PLDoPjvoNmBAzhFD3niPAa1C1gXG4cs14J"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة للزيرو ويب سكول</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href={getYouTubeUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon /> مشاهدة الشرح الكامل
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
                    <h2>أساسيات CSS - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح أكاديمية ترميز - CSS متقدم</h3>
                    <p>استكمال شرح CSS بمفاهيم متقدمة وتقنيات حديثة</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم تقنيات CSS المتقدمة مثل Flexbox و Grid
                    التي تسهل إنشاء تخطيطات معقدة ومتجاوبة.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>Flexbox للتخطيط</strong>
                        <div className="tool-details">
                          display: flex, justify-content, align-items,
                          flex-direction
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>CSS Grid</strong>
                        <div className="tool-details">
                          display: grid, grid-template, grid-area, gap
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الاستعلامات الوسيطية</strong>
                        <div className="tool-details">
                          @media queries للتجاوب مع أحجام الشاشات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التحويلات والانتقالات</strong>
                        <div className="tool-details">
                          transform, transition, animation
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>Flexbox أمثلة:</h3>
                    <pre className="code-block">{`/* تخطيط Flexbox أساسي */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

.item {
    flex: 1;
    min-width: 200px;
}

/* تخطيط متقدم */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #333;
    color: white;
}

.card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    flex: 1 1 300px;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
}`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>CSS Grid أمثلة:</h3>
                    <pre className="code-block">{`/* تخطيط Grid أساسي */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
}

.grid-item {
    background: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
}

/* تخطيط متقدم */
.layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar content content"
        "footer footer footer";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 250px 1fr 1fr;
    gap: 1rem;
    min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> أكاديمية ترميز
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> الاستاذ يعرب
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> CSS متقدم وتخطيط
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/CHUbZQJBfpE"
                        title="شرح CSS متقدم من أكاديمية ترميز - الجزء الثاني"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLYyqC4bNbCIdES52srHE6xTiIgvgMkBWu&si=3O9r6wAZrBrHdEIu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لأكاديمية ترميز</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href={getYouTubeUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon /> مشاهدة الشرح الكامل
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

              {activeLesson === 4 && (
                <div className="lesson-content">
                  <div className="lesson-header">
                    <span className="icon"></span>
                    <h2>أساسيات CSS - الشرح الثالث</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح عبدالرحمن جمال - CSS متقدم وتقنيات حديثة</h3>
                    <p>إتقان CSS بمفاهيم متقدمة وأفضل الممارسات</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء الأخير، ستتعلم تقنيات CSS المتقدمة مثل
                    المتغيرات، الدوال، والمفاهيم الحديثة التي تجعل شفرتك أكثر
                    كفاءة.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>متغيرات CSS (Custom Properties)</strong>
                        <div className="tool-details">
                          --variable-name: value; واستخدام var()
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الدوال والمحسابات</strong>
                        <div className="tool-details">
                          calc(), min(), max(), clamp()
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>CSS الحديثة</strong>
                        <div className="tool-details">
                          container queries, :has(), subgrid
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أفضل الممارسات</strong>
                        <div className="tool-details">
                          BEM, organization, performance
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>متغيرات CSS:</h3>
                    <pre className="code-block">{`/* تعريف المتغيرات */
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --font-size: 16px;
    --spacing: 1rem;
    --border-radius: 8px;
}

/* استخدام المتغيرات */
.button {
    background: var(--primary-color);
    color: white;
    padding: var(--spacing);
    border-radius: var(--border-radius);
    font-size: var(--font-size);
}

.card {
    --card-bg: #ffffff;
    --card-shadow: 0 2px 10px rgba(0,0,0,0.1);
    
    background: var(--card-bg);
    box-shadow: var(--card-shadow);
    padding: calc(var(--spacing) * 1.5);
}`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>الدوال والمحسابات:</h3>
                    <pre className="code-block">{`/* استخدام calc() */
.container {
    width: calc(100% - 2rem);
    height: calc(100vh - 80px);
    margin: 1rem;
}

/* استخدام min() و max() و clamp() */
.responsive-text {
    font-size: clamp(1rem, 2.5vw, 2rem);
}

.responsive-width {
    width: min(100%, 1200px);
}

.responsive-height {
    height: max(50vh, 300px);
}

/* دوال متقدمة */
.grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: clamp(1rem, 2vw, 2rem);
}`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>CSS حديثة:</h3>
                    <pre className="code-block">{`/* Container Queries */
.component {
    container-type: inline-size;
}

@container (min-width: 400px) {
    .component {
        display: flex;
        gap: 1rem;
    }
}

/* :has() selector */
.card:has(.featured) {
    border: 2px solid gold;
}

.menu:has(li:hover) {
    background: #f0f0f0;
}

/* Subgrid */
.grid {
    display: grid;
    grid-template-columns: subgrid;
    gap: inherit;
}`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> عبدالرحمن جمال
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> عبدالرحمن جمال
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> CSS متقدم وتقنيات حديثة
                        </div>
                        <div className="detail-item">
                          <strong>السلسلة:</strong> CSS كامل من الصفر للإحتراف
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/_QO55W7KPmI"
                        title="شرح CSS متقدم من حسونة - الجزء الثالث"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLknwEmKsW8Os7rKViMCL8x6irVJT7McSS&si=nPLGBblddSAW1Fei"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لقناة عبدالرحمن جمال</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>أنشئ موقع ويب متكامل باستخدام CSS Grid و Flexbox</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>طبق التصميم المتجاوب لجميع أحجام الشاشات</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>استخدم المتغيرات والدوال لتحسين الكفاءة</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLknwEmKsW8Os7rKViMCL8x6irVJT7McSS&si=nPLGBblddSAW1Fei"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon /> مشاهدة السلسلة الكاملة
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
              <h3>دورة CSS الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">
                  أسامة الزيرو، عبدالرحمن جمال، اكاديمية ترميز
                </p>
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
                  href="https://www.youtube.com/watch?v=qyVkLebgfzY&list=PLDoPjvoNmBAzhFD3niPAa1C1gXG4cs14J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  الزيرو ويب سكول
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLYyqC4bNbCIdES52srHE6xTiIgvgMkBWu&si=3O9r6wAZrBrHdEIu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  أكاديمية ترميز
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLknwEmKsW8Os7rKViMCL8x6irVJT7McSS&si=nPLGBblddSAW1Fei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  عبدالرحمن جمال
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
