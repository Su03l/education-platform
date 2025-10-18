import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CodeIcon from "@mui/icons-material/Code";

import "../../styles/Tailwind.css";

const lessons = [
  { id: 1, title: "ماذا تحتاج للبدء", icon: "" },
  { id: 2, title: "أساسيات Tailwind CSS - الشرح الاول", icon: "" },
  { id: 3, title: "أساسيات Tailwind CSS - الشرح الثاني", icon: "" },
];

export default function TailwindCourse() {
  const [activeLesson, setActiveLesson] = useState<number>(1);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeLesson]);

  const handleNextLesson = () => {
    if (activeLesson < lessons.length) setActiveLesson(activeLesson + 1);
  };

  return (
    <div className="tailwind-course-page" dir="rtl">
      <header className="tailwind-course-header">
        <div className="tailwind-course-container">
          <Link to="/courses" className="back-link">
            <ArrowForwardIosIcon
              style={{ transform: "rotate(180deg)", fontSize: 18 }}
            />
            العودة للكورسات
          </Link>
          <div className="tailwind-course-title">
            <h1>Tailwind CSS الكامل</h1>
            <p>شرح متكامل لإطار العمل الأكثر شعبية لـ CSS - دورة شاملة</p>
          </div>
        </div>
      </header>

      <section className="tailwind-course-main tailwind-course-container">
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
                    قبل أن تبدأ في تعلم Tailwind CSS، هناك بعض الأساسيات
                    والأدوات التي تحتاجها لبناء واجهات مستخدم احترافية بسرعة
                    وكفاءة.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>أساسيات HTML و CSS:</strong>
                        <div className="tool-details">
                          فهم العناصر، الخصائص، Flexbox، Grid
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong> VS Code
                        <div className="tool-details">
                          مع إضافات مثل Tailwind CSS IntelliSense
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Node.js:</strong>
                        <div className="tool-details">
                          لتثبيت وإعداد Tailwind CSS (إصدار 14 أو أعلى)
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>متصفح حديث:</strong>
                        <div className="tool-details">
                          Chrome, Firefox, Safari أو Edge
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
                          <h4>إنشاء مشروع جديد</h4>
                          <p>تهيئة مشروع HTML/CSS جديد</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>تثبيت Tailwind CSS</h4>
                          <p>استخدام npm أو CDN لتثبيت Tailwind</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>إعداد التكوين</h4>
                          <p>تهيئة ملف tailwind.config.js</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>
                        تعلم الفئات الأساسية أولاً قبل الانتقال للمواضيع
                        المتقدمة
                      </li>
                      <li>استخدم الـ DevTools لمشاهدة التغييرات مباشرة</li>
                      <li>
                        تدرب على بناء مكونات صغيرة ثم انتقل للمشاريع الكبيرة
                      </li>
                      <li>استفد من الـ Responsive Design المدمج</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://tailwindcss.com/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeIcon />
                      المرجع الرسمي لـ Tailwind CSS
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
                    <h2>أساسيات Tailwind CSS - الشرح الاول</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح أكاديمية ترميز - Tailwind CSS في مقطع واحد</h3>
                    <p>شرح مكثف وشامل لـ Tailwind CSS مع أمثلة عملية</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات Tailwind CSS وكيفية
                    استخدامه لبناء واجهات مستخدم حديثة وسريعة الاستجابة.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في Tailwind CSS:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>ما هو Tailwind CSS؟</h4>
                        <p>
                          إطار عمل CSS يعتمد على Utility-First لبناء واجهات
                          مخصصة بسرعة.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>Utility-First</h4>
                        <p>
                          بناء التصميمات باستخدام فئات CSS جاهزة بدلاً من كتابة
                          CSS مخصص.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>Responsive Design</h4>
                        <p>
                          تصميم متجاوب باستخدام prefixes مثل sm:, md:, lg:, xl:
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>الفئات الأساسية</strong>
                        <div className="tool-details">
                          margin, padding, colors, typography, flexbox
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التصميم المتجاوب</strong>
                        <div className="tool-details">
                          breakpoints, responsive prefixes
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التفاعلية</strong>
                        <div className="tool-details">
                          hover, focus, active states
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المكونات</strong>
                        <div className="tool-details">
                          buttons, cards, forms, navigation
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>أمثلة على Tailwind CSS الأساسية:</h3>
                    <pre className="code-block">{`<!-- تثبيت Tailwind CSS عبر CDN -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Tailwind CSS</title>
</head>
<body>
  <!-- مثال على زر -->
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    زر تجريبي
  </button>

  <!-- مثال على بطاقة -->
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">عنوان البطاقة</div>
      <p class="text-gray-700 text-base">
        محتوى البطاقة يذهب هنا. هذا مثال على استخدام Tailwind CSS.
      </p>
    </div>
  </div>

  <!-- مثال على شبكة متجاوبة -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="bg-red-500 p-4">عمود 1</div>
    <div class="bg-green-500 p-4">عمود 2</div>
    <div class="bg-blue-500 p-4">عمود 3</div>
  </div>
</body>
</html>`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>الفئات الأساسية في Tailwind CSS:</h3>
                    <pre className="code-block">{`<!-- الهوامش والمسافات الداخلية -->
<div class="m-4 p-4">هامش 1rem ومسافة داخلية 1rem</div>
<div class="mx-auto p-2">هامش أفقي تلقائي ومسافة داخلية 0.5rem</div>

<!-- الألوان -->
<div class="bg-blue-500 text-white">خلفية زرقاء ونص أبيض</div>
<div class="text-gray-800 border border-gray-300">نص رمادي غامق وإطار رمادي</div>

<!-- النصوص -->
<h1 class="text-4xl font-bold">عنوان كبير وعريض</h1>
<p class="text-lg text-gray-600 leading-relaxed">نص متوسط بحجم رمادي فاتح</p>

<!-- Flexbox -->
<div class="flex justify-between items-center">
  <div>عنصر 1</div>
  <div>عنصر 2</div>
</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">
  <div>عمود 1</div>
  <div>عمود 2</div>
  <div>عمود 3</div>
</div>

<!-- التصميم المتجاوب -->
<div class="text-sm md:text-base lg:text-lg">
  حجم النص يتغير حسب حجم الشاشة
</div>

<!-- التفاعلية -->
<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 
               focus:outline-none focus:ring-2 focus:ring-blue-300 
               transition duration-200">
  زر تفاعلي
</button>`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> أكاديمية ترميز
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> يعرب
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Tailwind CSS في مقطع واحد
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/Pk3hhCJG2Dk"
                        title="شرح Tailwind CSS - أكاديمية ترميز"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/watch?v=Pk3hhCJG2Dk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة الشرح على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لأكاديمية ترميز</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.youtube.com/watch?v=Pk3hhCJG2Dk"
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
                    <h2>أساسيات Tailwind CSS - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح كورسات في البرمجة - Tailwind CSS كامل</h3>
                    <p>سلسلة شاملة لتعلم Tailwind CSS من الصفر للإحتراف</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم تقنيات متقدمة في Tailwind CSS مثل
                    التخصيص، المكونات، الـ Plugins، وأفضل الممارسات.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>تخصيص Tailwind</strong>
                        <div className="tool-details">
                          tailwind.config.js، الألوان المخصصة، breakpoints
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المكونات المتقدمة</strong>
                        <div className="tool-details">
                          navigation bars، modals، forms متقدمة
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الـ Plugins</strong>
                        <div className="tool-details">
                          تثبيت واستخدام plugins إضافية
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أدوات التطوير</strong>
                        <div className="tool-details">
                          DevTools، debugging، performance
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>تخصيص Tailwind CSS:</h3>
                    <pre className="code-block">{`// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ألوان مخصصة
      colors: {
        'primary': '#3B82F6',
        'secondary': '#1E40AF',
        'accent': '#F59E0B',
        'custom-gray': '#6B7280',
      },
      // خطوط مخصصة
      fontFamily: {
        'arabic': ['Tajawal', 'sans-serif'],
        'custom': ['Custom Font', 'serif'],
      },
      // breakpoints مخصصة
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      // أحجام مخصصة
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

// استخدام التخصيصات في HTML
<div class="bg-primary text-white font-arabic p-4">
  هذا عنصر باستخدام الألوان والخطوط المخصصة
</div>`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>مكونات متقدمة باستخدام Tailwind:</h3>
                    <pre className="code-block">{`<!-- شريط تنقل متجاوب -->
<nav class="bg-white shadow-lg">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <!-- الشعار -->
      <div class="flex-shrink-0">
        <span class="text-xl font-bold text-gray-800">شعار الموقع</span>
      </div>
      
      <!-- روابط التنقل -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4 space-x-reverse">
          <a href="#" class="text-gray-800 hover:text-blue-600 
          px-3 py-2 rounded-md text-sm font-medium">الرئيسية</a>
          <a href="#" class="text-gray-800 hover:text-blue-600
           px-3 py-2 rounded-md text-sm font-medium">من نحن</a>
          <a href="#" class="text-gray-800 hover:text-blue-600
           px-3 py-2 rounded-md text-sm font-medium">الخدمات</a>
        </div>
      </div>
    </div>
  </div>
</nav>

<!-- نموذج تسجيل دخول -->
<div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
      تسجيل الدخول
    </h2>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            البريد الإلكتروني
          </label>
          <div class="mt-1">
            <input id="email" name="email" type="email" autocomplete="email" required 
                   class="appearance-none block w-full px-3 py-2 border border-gray-300 
                          rounded-md shadow-sm placeholder-gray-400 focus:outline-none 
                          focus:ring-blue-500 focus:border-blue-500">
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            كلمة المرور
          </label>
          <div class="mt-1">
            <input id="password" name="password" type="password" 
            autocomplete="current-password" required 
                   class="appearance-none block w-full px-3 py-2 border border-gray-300 
                          rounded-md shadow-sm placeholder-gray-400 focus:outline-none 
                          focus:ring-blue-500 focus:border-blue-500">
          </div>
        </div>

        <div>
          <button type="submit" 
                  class="w-full flex justify-center py-2 px-4 border border-transparent 
                         rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 
                         hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                         focus:ring-blue-500">
            تسجيل الدخول
          </button>
        </div>
      </form>
    </div>
  </div>
</div>`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> كورسات في البرمجة
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> صبري حسني
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Tailwind CSS كامل
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/FA1mXzhDMxM?list=PLxbVBWjVdAEjmn2KbE1886vVkPv1Iu67J"
                        title="شرح Tailwind CSS - كورسات في البرمجة"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLxbVBWjVdAEjmn2KbE1886vVkPv1Iu67J"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لكورسات في البرمجة</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>بناء موقع شخصي كامل باستخدام Tailwind CSS</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>تطبيق التصميم المتجاوب لجميع الشاشات</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>تخصيص الألوان والخطوط لتناسب الهوية البصرية</p>
                      </div>
                      <div className="step">
                        <span className="step-number">4</span>
                        <p>إضافة تفاعليات وتحسينات للأداء</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLxbVBWjVdAEjmn2KbE1886vVkPv1Iu67J"
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
              <h3>دورة Tailwind CSS الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">أكاديمية ترميز، كورسات في البرمجة</p>
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
                  href="https://www.youtube.com/watch?v=Pk3hhCJG2Dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  أكاديمية ترميز
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLxbVBWjVdAEjmn2KbE1886vVkPv1Iu67J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  كورسات في البرمجة
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
