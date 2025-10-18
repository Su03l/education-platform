import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HtmlIcon from "@mui/icons-material/Html";
import "../../styles/html.css";

const lessons = [
  { id: 1, title: "ماذا تحتاج للبدء", icon: "" },
  { id: 2, title: "أساسيات HTML - الشرح الاول", icon: "" },
  { id: 3, title: "أساسيات HTML - الشرح الثاني", icon: "" },
  { id: 4, title: "أساسيات HTML - الشرح الثالث", icon: "" },
];

export default function HTMLCoursePage() {
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
      2: "https://www.youtube.com/watch?v=qfPUMV9J5yw",
      3: "https://www.youtube.com/watch?v=Dv39fDYei9A",
      4: "https://www.youtube.com/watch?v=WSG6Cjc8b3M&list=PLYyqC4bNbCIfMY5CoGmiWaPi9l86qaz5B",
    };
    return urls[activeLesson as keyof typeof urls];
  };

  const handleNextLesson = () => {
    if (activeLesson < lessons.length) setActiveLesson(activeLesson + 1);
  };

  return (
    <div className="html-course-page" dir="rtl">
      <header className="html-course-header">
        <div className="html-course-container">
          <Link to="/courses" className="back-link">
            <ArrowForwardIosIcon
              style={{ transform: "rotate(180deg)", fontSize: 18 }}
            />
            العودة للكورسات
          </Link>
          <div className="html-course-title">
            <h1>أساسيات HTML</h1>
            <p>شرح كامل لغة HTML من الصفر حتى الاحتراف - دورة الزيرو</p>
          </div>
        </div>
      </header>

      <section className="html-course-main html-course-container">
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
                    قبل أن تبدأ في تعلم HTML، هناك بعض الأدوات الأساسية التي
                    تحتاجها لتجعل رحلتك أسهل وأكثر احترافية. في هذا الدرس سنتعرف
                    على كل ما تحتاجه للبدء في رحلة تطوير الويب.
                  </p>

                  <div className="tools-section">
                    <h3> الأدوات الأساسية المطلوبة:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>متصفح ويب حديث:</strong> مثل Google Chrome،
                        Microsoft Edge، أو Firefox
                        <div className="tool-details">
                          المتصفحات الحديثة تحتوي على أدوات مطورين (Developer
                          Tools) تساعدك في فحص وتصحيح الأكواد مباشرة.
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد متقدم:</strong> مثل Visual Studio
                        Code (مجاني)
                        <div className="tool-details">
                          VS Code هو الأكثر شيوعاً بين المطورين ويوفر ميزات
                          رائعة مثل:
                          <ul className="nested-list">
                            <li>تمييز الصyntax تلقائياً</li>
                            <li>الإكمال التلقائي للأكواد</li>
                            <li>إدارة المشاريع بسهولة</li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>إضافات محرر الأكواد:</strong>
                        <div className="tool-details">
                          نوصي بتثبيت هذه الإضافات في VS Code:
                          <ul className="nested-list">
                            <li>
                              <strong>Live Server:</strong> لتشغيل الصفحات
                              مباشرة مع تحديث فوري
                            </li>
                            <li>
                              <strong>Auto Rename Tag:</strong> يغير الوسم
                              opening و closing تلقائياً
                            </li>
                            <li>
                              <strong>HTML CSS Support:</strong> يساعد في كتابة
                              CSS داخل HTML
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>معرفة أساسية بأنظمة الملفات:</strong>
                        <div className="tool-details">
                          يجب أن تعرف كيفية:
                          <ul className="nested-list">
                            <li>إنشاء مجلدات جديدة</li>
                            <li>حفظ الملفات بصيغة .html</li>
                            <li>تنظيم المشروع في مجلدات</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="setup-steps">
                    <h3> خطوات الإعداد خطوة بخطوة:</h3>
                    <div className="steps-container">
                      <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                          <h4>تحميل وتثبيت VS Code</h4>
                          <p>
                            اذهب إلى الموقع الرسمي لـ Visual Studio Code وقم
                            بتحميل النسخة المناسبة لنظامك
                          </p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>تثبيت الإضافات</h4>
                          <p>
                            افتح VS Code واذهب إلى Extensions ثم ابحث عن
                            الإضافات المذكورة وقم بتثبيتها
                          </p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>إنشاء مشروعك الأول</h4>
                          <p>
                            أنشئ مجلد جديد باسم "my-first-website" وافتحه في VS
                            Code
                          </p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>إنشاء ملف HTML</h4>
                          <p>
                            أنشئ ملف جديد باسم "index.html" داخل المجلد - هذا
                            سيكون صفحتك الرئيسية
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="download-links-section">
                    <h3> روابط التحميل المباشرة:</h3>
                    <div className="download-buttons">
                      <a
                        href="https://code.visualstudio.com/download"
                        className="download-btn primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        تحميل Visual Studio Code
                      </a>
                      <a
                        href="https://www.google.com/chrome/"
                        className="download-btn secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        تحميل Google Chrome
                      </a>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3> نصائح مهمة للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>
                        لا تنتظر حتى تنتهي من الكورس كاملاً لتبدأ بالتطبيق
                        العملي
                      </li>
                      <li>جرب كل كود تتعلمه فوراً في محرر الأكواد</li>
                      <li>استخدم أدوات المطورين في المتصفح لفحص الأخطاء</li>
                      <li>احفظ مشروعك في مجلد منظم من البداية</li>
                      <li>لا تخف من تجربة أشياء جديدة وتعديل الأكواد</li>
                    </ul>
                  </div>

                  <div className="common-issues">
                    <h3>⚠️ المشاكل الشائعة وكيفية حلها:</h3>
                    <div className="issues-grid">
                      <div className="issue-card">
                        <h4>الصفحة لا تظهر التغييرات</h4>
                        <p>
                          تأكد من حفظ الملف ثم اضغط F5 لتحديث الصفحة، أو استخدم
                          Live Server
                        </p>
                      </div>
                      <div className="issue-card">
                        <h4>الملف لا يفتح في المتصفح</h4>
                        <p>تأكد من حفظ الملف بصيغة .html وليس .txt</p>
                      </div>
                      <div className="issue-card">
                        <h4>الأكواد تظهر كنص عادي</h4>
                        <p>
                          تأكد من استخدام الوسوم الصحيحة مثل {"<html>"} و{" "}
                          {"<body>"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href={getYouTubeUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HtmlIcon />
                      مرجع خاص لـ HTML
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
                    <h2>أساسيات HTML - الشرح الاول </h2>
                  </div>

                  <div className="instructor-info">
                    <h3> شرح الزيرو - HTML كامل من الصفر</h3>
                    <p>هذا الكورس الشامل لتعليم HTML من البداية حتى الإحتراف</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على ما هي لغة HTML، وكيف تُستخدم لتشكيل
                    البنية الأساسية لأي موقع ويب. HTML هي الهيكل العظمي لأي صفحة
                    ويب.
                  </p>

                  <div className="concepts-section">
                    <h3> المفاهيم الأساسية في HTML:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4> ما هي HTML؟</h4>
                        <p>
                          لغة ترميز النص الفائق (HyperText Markup Language)
                          تستخدم لإنشاء وتنظيم محتوى صفحات الويب.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4> الوسوم (Tags)</h4>
                        <p>
                          العناصر الأساسية في HTML التي تحدد نوع المحتوى وطريقة
                          عرضه.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4> الهيكل الأساسي</h4>
                        <p>
                          كل صفحة HTML تحتوي على هيكل أساسي يتكون من html, head,
                          body.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3> ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>ما هو الـ HTML وكيف يعمل</strong>
                        <div className="tool-details">
                          فهم أساسيات لغة HTML ودورها في بناء مواقع الويب
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الهيكل الأساسي للصفحة</strong>
                        <div className="tool-details">
                          {"<!DOCTYPE html>"}, {"<html>"}, {"<head>"},{" "}
                          {"<title>"}, {"<body>"}
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الوسوم الأساسية</strong>
                        <div className="tool-details">
                          العناوين h1-h6، الفقرات p، الروابط a، الصور img
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الخصائص (Attributes)</strong>
                        <div className="tool-details">
                          مثل href, src, alt, style, class, id
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3> الهيكل الأساسي لصفحة HTML:</h3>
                    <pre className="code-block">{`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>أول صفحة ويب لي</title>
</head>
<body>
    <h1>مرحباً بالعالم!</h1>
    <p>هذه هي أول صفحة ويب أقوم بإنشائها.</p>
    <a href="https://www.example.com">زيارة موقع مثال</a>
    <img src="image.jpg" alt="وصف الصورة">
</body>
</html>`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3> تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong> القناة:</strong> Osama Elzero
                        </div>
                        <div className="detail-item">
                          <strong> المدرس:</strong> اسامة الزيرو
                        </div>
                        <div className="detail-item">
                          <strong> المحتوى:</strong> شرح HTML كامل من الصفر
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/qfPUMV9J5yw"
                        title="شرح HTML كامل من الزيرو - الجزء الأول"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/watch?v=qfPUMV9J5yw"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة الشرح الكامل على يوتيوب
                      </a>
                      <span> جميع الحقوق محفوظة اسامه الزيرو</span>
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
                    <h2>أساسيات HTML - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح من قبل الاستاذ عبدالرحمن جمال </h3>
                    <p>هذا الكورس تم شرحه بالكامل من قبل عبدالرحمن جمال</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء ستتعلم كيفية التعامل مع الوسوم الأكثر استخدامًا
                    داخل صفحات الويب. سنتعمق في العناصر الهيكلية والتنظيمية
                    المتقدمة.
                  </p>

                  <div className="tools-section">
                    <h3>📘 ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>القوائم بأنواعها</strong>
                        <div className="tool-details">
                          القوائم المرتبة ol وغير المرتبة ul وقوائم التعريف dl
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الجداول المتقدمة</strong>
                        <div className="tool-details">
                          إنشاء جداول مع عناوين، ترويسات، وتنسيق متقدم
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>النماذج والشروط</strong>
                        <div className="tool-details">
                          إنشاء نماذج تفاعلية مع مختلف أنواع الحقول
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>عناصر HTML5 الجديدة</strong>
                        <div className="tool-details">
                          header, nav, section, article, footer, aside
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>📺 تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>📹 القناة:</strong> عبدالرحمن جمال
                        </div>
                        <div className="detail-item">
                          <strong>👨‍🏫 المدرس:</strong> عبدالرحمن جمال
                        </div>
                        <div className="detail-item">
                          <strong>📚 المحتوى:</strong> شرح كامل لمحتوى HTML
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> 🎥 فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/Dv39fDYei9A"
                        title="شرح HTML كامل من الزيرو - الجزء الثاني"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/watch?v=Dv39fDYei9A"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة الشرح الكامل على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة للاستاذ عبدالرحمن جمال</span>
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
                    <h2>أساسيات HTML - الشرح الثالث</h2>
                  </div>

                  <div className="instructor-info">
                    <h3> شرح من قبل اكاديمية ترميز </h3>
                    <p>الدورة الكاملة لتعلم HTML من البداية حتى الإحتراف</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء الأخير، ستتعلم المفاهيم المتقدمة في HTML
                    وتقنيات حديثة لإنشاء مواقع ويب احترافية. سنغطي أهم الوسوم
                    والتقنيات التي تجعل موقعك أكثر تفاعلية واحترافية.
                  </p>

                  <div className="tools-section">
                    <h3> ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>وسوم الوسائط المتعددة</strong>
                        <div className="tool-details">
                          audio, video, iframe لعرض الوسائط المختلفة
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>النماذج المتقدمة</strong>
                        <div className="tool-details">
                          input types متقدمة، validation، وميزات جديدة
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الوسوم الدلالية</strong>
                        <div className="tool-details">
                          main, figure, figcaption, time, mark
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التوافق وإمكانية الوصول</strong>
                        <div className="tool-details">
                          ARIA roles، semantic HTML، best practices
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3> تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong> القناة:</strong> أكاديمية ترميز
                        </div>
                        <div className="detail-item">
                          <strong> المدرس:</strong> الاستاذ يعرب
                        </div>
                        <div className="detail-item">
                          <strong> المحتوى:</strong> إكمال شرح HTML المتقدم
                        </div>
                        <div className="detail-item">
                          <strong> السلسلة:</strong> HTML كامل من الصفر للإحتراف
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/WSG6Cjc8b3M"
                        title="شرح HTML كامل من الزيرو - الجزء الثالث"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLYyqC4bNbCIfMY5CoGmiWaPi9l86qaz5B&si=MHbMEeoBIcd17Jt9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span> جميع الحقوق محفوظة لأكاديمية ترميز</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3> مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>
                          أنشئ موقع شخصي متكامل باستخدام جميع الوسوم المتقدمة
                        </p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>أضف نماذج تفاعلية مع التحقق من البيانات</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLYyqC4bNbCIfMY5CoGmiWaPi9l86qaz5B&si=MHbMEeoBIcd17Jt9"
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
              <h3> دورة HTML الكاملة</h3>
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
                  href="https://www.youtube.com/watch?v=qfPUMV9J5yw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  الزيرو ويب سكول
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Dv39fDYei9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  أكاديمية ترميز
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PLYyqC4bNbCIfMY5CoGmiWaPi9l86qaz5B"
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
