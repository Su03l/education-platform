import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CodeIcon from "@mui/icons-material/Code";

import "../../styles/javascript.css";

const lessons = [
  { id: 1, title: "ماذا تحتاج للبدء", icon: "" },
  { id: 2, title: "أساسيات Next.js - الشرح الاول", icon: "" },
  { id: 3, title: "أساسيات Next.js - الشرح الثاني", icon: "" },
];

export default function NextJSCourse() {
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
      1: "https://nextjs.org/docs",
      2: "https://www.youtube.com/watch?v=_t4c-vxalp4&t=6s",
      3: "https://youtube.com/playlist?list=PL5gCk5NdNx58-q_gwuL6355afD8T_kIa0&si=hCVDri1z2qHXiE_q",
    };
    return urls[activeLesson as keyof typeof urls];
  };

  const handleNextLesson = () => {
    if (activeLesson < lessons.length) setActiveLesson(activeLesson + 1);
  };

  return (
    <div className="javascript-course-page" dir="rtl">
      <header className="javascript-course-header">
        <div className="javascript-course-container">
          <Link to="/courses" className="back-link">
            <ArrowForwardIosIcon
              style={{ transform: "rotate(180deg)", fontSize: 18 }}
            />
            العودة للكورسات
          </Link>
          <div className="javascript-course-title">
            <h1>دورة Next.js الكاملة</h1>
            <p>شرح متكامل لإطار العمل Next.js من الصفر حتى الاحتراف</p>
          </div>
        </div>
      </header>

      <section className="javascript-course-main javascript-course-container">
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
                    قبل أن تبدأ في تعلم Next.js، هناك بعض الأساسيات والأدوات
                    التي تحتاجها لتجعل رحلتك في تطوير تطبيقات الويب الحديثة أكثر
                    احترافية وفعالية.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>معرفة أساسية بـ React:</strong>
                        <div className="tool-details">
                          يجب أن تكون على دراية بالمفاهيم الأساسية في React مثل:
                          <ul className="nested-list">
                            <li>المكونات (Components)</li>
                            <li>الخصائص (Props)</li>
                            <li>الحالة (State)</li>
                            <li>دورة حياة المكونات</li>
                            <li>Hooks مثل useState و useEffect</li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>JavaScript ES6+:</strong>
                        <div className="tool-details">
                          معرفة جيدة بميزات JavaScript الحديثة:
                          <ul className="nested-list">
                            <li>Arrow Functions</li>
                            <li>Destructuring</li>
                            <li>Async/Await</li>
                            <li>Modules</li>
                            <li>Template Literals</li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong> Visual Studio Code
                        <div className="tool-details">
                          مع الإضافات الموصى بها مثل:
                          <ul className="nested-list">
                            <li>ES7+ React/Redux/React-Native snippets</li>
                            <li>Auto Rename Tag</li>
                            <li>Bracket Pair Colorizer</li>
                            <li>Prettier - Code formatter</li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Node.js و npm:</strong>
                        <div className="tool-details">
                          Node.js الإصدار 16.8 أو أعلى
                          <ul className="nested-list">
                            <li>npm أو yarn لإدارة الحزم</li>
                            <li>فهم أساسي لـ package.json</li>
                            <li>معرفة بأوامر npm الأساسية</li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>متصفح حديث:</strong>
                        <div className="tool-details">
                          Chrome، Firefox أو Edge مع أدوات المطورين
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
                          <h4>تثبيت Node.js</h4>
                          <p>تحميل وتثبيت Node.js من الموقع الرسمي</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>إعداد محرر الأكواد</h4>
                          <p>تثبيت VS Code والإضافات الموصى بها</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>إنشاء مشروع Next.js أول</h4>
                          <p>استخدام create-next-app لإنشاء المشروع</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>اختبار البيئة</h4>
                          <p>تشغيل المشروع والتأكد من عمله بشكل صحيح</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="concepts-section">
                    <h3>ما هو Next.js ولماذا نستخدمه؟</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4> إطار عمل React</h4>
                        <p>
                          Next.js هو إطار عمل مبنى على React يوفر حلولاً متكاملة
                          لتطوير تطبيقات الويب الحديثة
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4> تحسين الأداء</h4>
                        <p>
                          يوفر Server-Side Rendering و Static Site Generation
                          لتحسين سرعة التطبيق و SEO
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4> سهولة التطوير</h4>
                        <p>
                          إعداد صفري، راوتنج مدمج، تحسين الصور تلقائياً، ونشر
                          سهل على Vercel
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>ابدأ بمشاريع صغيرة قبل الانتقال للمشاريع الكبيرة</li>
                      <li>افهم الفرق بين SSR و SSG و CSR</li>
                      <li>استخدم App Router فهو المستقبل في Next.js</li>
                      <li>تعلم TypeScript تدريجياً لتحسين جودة الكود</li>
                      <li>استفد من التوثيق الرسمي لـ Next.js</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://nextjs.org/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeIcon />
                      المرجع الرسمي لـ Next.js
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
                    <h2>أساسيات Next.js - الشرح الاول</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح الأستاذ يعرب - أكاديمية ترميز</h3>
                    <p>كورس Next.js كامل - شرح نظري وتطبيق عملي</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات إطار العمل Next.js وكيفية
                    استخدامه لتطوير تطبيقات ويب حديثة عالية الأداء. Next.js يجعل
                    تطوير React أسهل وأكثر احترافية.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في Next.js:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>ما هو Next.js؟</h4>
                        <p>
                          إطار عمل مبنى على React يوفر Server-Side Rendering،
                          Static Site Generation وأدوات بناء متقدمة.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>مميزات Next.js</h4>
                        <p>
                          SSR، SSG، ISR، Routing مدمج، تحسين الصور، وتحسين
                          الأداء التلقائي.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>أنماط التصيير</h4>
                        <p>
                          SSG vs SSR vs ISG vs SPA - الفروقات واستخدامات كل نوع.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>إنشاء مشروع Next.js أول</strong>
                        <div className="tool-details">
                          استخدام create-next-app، فهم هيكل المشروع
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>نظام الراوتنج</strong>
                        <div className="tool-details">
                          App Router، Page Router، Dynamic Routes
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المكونات والتصيير</strong>
                        <div className="tool-details">
                          Server Components vs Client Components
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>جلب البيانات</strong>
                        <div className="tool-details">
                          fetch، useEffect، async/await في Next.js
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>إنشاء مشروع Next.js أول:</h3>
                    <pre className="code-block">{`// إنشاء مشروع جديد باستخدام create-next-app
npx create-next-app@latest my-next-app

// أو باستخدام yarn
yarn create next-app my-next-app

// التوجه للمجلد وتشغيل المشروع
cd my-next-app
npm run dev

// سيعمل المشروع على http://localhost:3000`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>هيكل مشروع Next.js:</h3>
                    <pre className="code-block">{`// هيكل المجلدات الأساسي
my-next-app/
├── app/                 // App Router (Next.js 13+)
│   ├── layout.tsx      // Layout رئيسي
│   ├── page.tsx        // الصفحة الرئيسية
│   └── globals.css     // الأنماط العامة
├── public/             // ملفات ثابتة
│   └── favicon.ico
├── next.config.js      // إعدادات Next.js
├── package.json        // إعدادات المشروع
└── tsconfig.json       // إعدادات TypeScript

// app/page.tsx - الصفحة الرئيسية
export default function Home() {
  return (
    <main>
      <h1>مرحباً بك في Next.js!</h1>
      <p>هذا هو مشروعك الأول</p>
    </main>
  );
}`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> أكاديمية ترميز
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> الأستاذ يعرب
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> كورس Next.js كامل في ساعتين
                        </div>
                        <div className="detail-item">
                          <strong>المدة:</strong> شرح نظري وتطبيق عملي
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/_t4c-vxalp4"
                        title="كورس NEXT JS | شرح كامل في ساعتين | شرح نظري و تطبيق عملي"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/watch?v=_t4c-vxalp4&t=6s"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة الفيديو على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لأكاديمية ترميز</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.youtube.com/watch?v=_t4c-vxalp4&t=6s"
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
                    <h2>أساسيات Next.js - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح الأستاذ يوسف عباس</h3>
                    <p>سلسلة Next.js 14 بالعربي - الجزء الأول: المقدمة</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، سنتعمق أكثر في Next.js 14 ونتعرف على الميزات
                    الجديدة والإعدادات المتقدمة. سنغطي App Router، Server
                    Components، وأفضل الممارسات في تطوير تطبيقات Next.js.
                  </p>

                  <div className="tools-section">
                    <h3>مميزات Next.js 14 الجديدة:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>تحسينات في App Router</strong>
                        <div className="tool-details">
                          دعم أفضل للـ Server Components وتحسين الأداء
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Turbopack (بيتا)</strong>
                        <div className="tool-details">
                          أداة بناء أسرع بديلة لـ Webpack
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Server Actions</strong>
                        <div className="tool-details">
                          تنفيذ دوال الخادم مباشرة من مكونات React
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>تحسينات في Metadata API</strong>
                        <div className="tool-details">
                          إدارة أفضل لـ SEO و metadata الديناميكي
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>إعداد مشروع Next.js 14:</h3>
                    <pre className="code-block">{`// إنشاء مشروع Next.js 14 بأحدث الإعدادات
npx create-next-app@latest my-app

// أسئلة الإعداد:
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes  
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use \`src/\` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias? ... No / Yes

// هيكل المجلدات في App Router:
app/
  layout.tsx          // Layout root
  page.tsx           // Home page
  loading.tsx        // Loading UI
  error.tsx          // Error UI
  globals.css        // Global styles`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>مكون أساسي في Next.js 14:</h3>
                    <pre className="code-block">{`// app/page.tsx - الصفحة الرئيسية
import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          مرحباً بك في Next.js 14
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">
              App Router
            </h2>
            <p className="text-gray-600">
              نظام توجيه جديد يعتمد على مجلدات الملفات
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Server Components
            </h2>
            <p className="text-gray-600">
              مكونات تعمل على الخادم لتحسين الأداء
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Youssef Abbas
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> الأستاذ يوسف عباس
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Next.js 14 بالعربي
                        </div>
                        <div className="detail-item">
                          <strong>السلسلة:</strong> سلسلة متكاملة
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/TnoK6CTateE"
                        title="NEXT JS 14 بالعربي : PART 01 - Introduction"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PL5gCk5NdNx58-q_gwuL6355afD8T_kIa0&si=hCVDri1z2qHXiE_q"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ Youssef Abbas</span>
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
              <h3>دورة Next.js الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">يعرب، يوسف عباس</p>
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
                  href="https://www.youtube.com/watch?v=_t4c-vxalp4&t=6s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  أكاديمية ترميز
                </a>
                <a
                  href="https://youtube.com/playlist?list=PL5gCk5NdNx58-q_gwuL6355afD8T_kIa0&si=hCVDri1z2qHXiE_q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  Youssef Abbas
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
