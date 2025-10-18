import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CodeIcon from "@mui/icons-material/Code";

import "../../styles/bootstrap.css";

const lessons = [
  { id: 1, title: "ماذا تحتاج للبدء", icon: "" },
  { id: 2, title: "أساسيات Bootstrap - الشرح الاول", icon: "" },
  { id: 3, title: "أساسيات Bootstrap - الشرح الثاني", icon: "" },
  { id: 4, title: "أساسيات Bootstrap - الشرح الثالث", icon: "" },
];

export default function BootstrapCourse() {
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
    <div className="bootstrap-course-page" dir="rtl">
      <header className="bootstrap-course-header">
        <div className="bootstrap-course-container">
          <Link to="/courses" className="back-link">
            <ArrowForwardIosIcon
              style={{ transform: "rotate(180deg)", fontSize: 18 }}
            />
            العودة للكورسات
          </Link>
          <div className="bootstrap-course-title">
            <h1>Bootstrap الكامل</h1>
            <p>شرح متكامل لأشهر إطار عمل CSS في العالم - دورة شاملة</p>
          </div>
        </div>
      </header>

      <section className="bootstrap-course-main bootstrap-course-container">
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
                    قبل أن تبدأ في تعلم Bootstrap، هناك بعض الأساسيات والأدوات
                    التي تحتاجها لبناء واجهات مستخدم احترافية وسريعة الاستجابة.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>أساسيات HTML و CSS:</strong>
                        <div className="tool-details">
                          فهم العناصر، الخصائص، Classes، ومفاهيم CSS الأساسية
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong> VS Code
                        <div className="tool-details">
                          مع إضافات مثل Live Server و Bootstrap Snippets
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>متصفح حديث:</strong>
                        <div className="tool-details">
                          Chrome, Firefox, Safari أو Edge مع أدوات المطورين
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أساسيات JavaScript:</strong>
                        <div className="tool-details">
                          لفهم المكونات التفاعلية في Bootstrap (اختياري)
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
                          <h4>إنشاء مشروع HTML</h4>
                          <p>تهيئة ملف HTML أساسي مع بنية صحيحة</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>إضافة Bootstrap</h4>
                          <p>ربط Bootstrap عبر CDN أو التثبيت المحلي</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>إعداد المحرر</h4>
                          <p>تثبيت إضافات VS Code لتحسين الإنتاجية</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>اختبار البيئة</h4>
                          <p>إنشاء أول صفحة باستخدام Bootstrap</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>
                        ابدأ بإصدار Bootstrap 5 فهو الأحدث والأكثر استقراراً
                      </li>
                      <li>تعلم نظام الـ Grid فهو أساس العمل مع Bootstrap</li>
                      <li>
                        استخدم المكونات الجاهزة ثم قم بتخصيصها حسب احتياجك
                      </li>
                      <li>تدرب على بناء مشاريع صغيرة لتطبيق ما تعلمته</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://getbootstrap.com/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeIcon />
                      المرجع الرسمي الخاص بـ Bootstrap
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
                    <h2>أساسيات Bootstrap - الشرح الاول</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح الزيرو ويب سكول - Bootstrap 3</h3>
                    <p>سلسلة شاملة لتعلم Bootstrap من البداية مع أمثلة عملية</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات Bootstrap وكيفية استخدامه
                    لبناء واجهات ويب متجاوبة ومهنية بسرعة.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في Bootstrap:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>ما هو Bootstrap؟</h4>
                        <p>
                          إطار عمل CSS مفتوح المصدر لبناء واجهات ويب متجاوبة
                          وسريعة.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>نظام الـ Grid</h4>
                        <p>نظام شبكي مكون من 12 عمود لإنشاء تخطيطات متجاوبة.</p>
                      </div>
                      <div className="concept-card">
                        <h4>المكونات الجاهزة</h4>
                        <p>أزرار، نماذج، شرائح، قوائم تنقل وجاهزة للاستخدام.</p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>إعداد Bootstrap</strong>
                        <div className="tool-details">
                          التثبيت عبر CDN، فهم بنية الملفات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>نظام الـ Grid</strong>
                        <div className="tool-details">
                          container, row, col، breakpoints
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>النماذج والتنسيقات</strong>
                        <div className="tool-details">
                          typography, colors, spacing, forms
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المكونات الأساسية</strong>
                        <div className="tool-details">
                          buttons, cards, navbar, alerts
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>إعداد Bootstrap الأساسي:</h3>
                    <pre className="code-block">{`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap مثال</title>
    
    <!-- Bootstrap CSS -->
    <link href=
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" 
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
</head>
<body>

    <!-- شريط التنقل -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">شعار الموقع</a>
            <button class="navbar-toggler" type="button"
             data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">الرئيسية</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">من نحن</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">الخدمات</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- محتوى الصفحة -->
    <div class="container my-5">
        <div class="row">
            <div class="col-md-8">
                <h1 class="display-4">مرحباً بك في Bootstrap</h1>
                <p class="lead">هذا مثال على استخدام Bootstrap لبناء واجهات ويب متجاوبة.</p>
                
                <div class="row mt-4">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">بطاقة 1</h5>
                                <p class="card-text">محتوى البطاقة الأولى.</p>
                                <a href="#" class="btn btn-primary">زر تجريبي</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">بطاقة 2</h5>
                                <p class="card-text">محتوى البطاقة الثانية.</p>
                                <a href="#" class="btn btn-success">زر آخر</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="bg-light p-4 rounded">
                    <h4>الشريط الجانبي</h4>
                    <p>هذا مثال على شريط جانبي باستخدام Bootstrap.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JavaScript -->
    <script src=
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>نظام الـ Grid في Bootstrap:</h3>
                    <pre className="code-block">{`<!-- نظام الـ Grid الأساسي -->
<div class="container">
    <div class="row">
        <!-- عمود يأخذ 6 أعمدة على الشاشات المتوسطة وما فوق -->
        <div class="col-md-6">
            <div class="bg-primary text-white p-3">عمود 1</div>
        </div>
        <div class="col-md-6">
            <div class="bg-success text-white p-3">عمود 2</div>
        </div>
    </div>
</div>

<!-- Grid متجاوب مع breakpoints مختلفة -->
<div class="container">
    <div class="row">
        <!-- على الشاشات الصغيرة: 12 عمود، متوسطة: 6 أعمدة، كبيرة: 4 أعمدة -->
        <div class="col-12 col-md-6 col-lg-4">
            <div class="bg-info text-white p-3">عمود 1</div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <div class="bg-warning text-white p-3">عمود 2</div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <div class="bg-danger text-white p-3">عمود 3</div>
        </div>
    </div>
</div>

<!-- محاذاة وتوزيع الصفوف -->
<div class="container">
    <div class="row justify-content-center 
    align-items-center" style="height: 200px;">
        <div class="col-4">
            <div class="bg-dark text-white p-3
             text-center">عمود في المنتصف</div>
        </div>
    </div>
</div>

<!-- هوامش ومسافات -->
<div class="container">
    <div class="row">
        <div class="col-md-4 mb-3"> <!-- margin-bottom -->
            <div class="p-3 border">عنصر مع هامش سفلي</div>
        </div>
        <div class="col-md-4 p-4"> <!-- padding -->
            <div class="border">عنصر مع مسافة داخلية</div>
        </div>
        <div class="col-md-4 mx-auto"> <!-- margin auto -->
            <div class="p-3 border">عنصر في المنتصف</div>
        </div>
    </div>
</div>`}</pre>
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
                          <strong>المحتوى:</strong> Bootstrap 3 كامل
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/auFVttzUoo8?list=PLDoPjvoNmBAw24EjNUp_88S1VeaNK8Cts"
                        title="شرح Bootstrap - الزيرو ويب سكول"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLDoPjvoNmBAw24EjNUp_88S1VeaNK8Cts"
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
                      href="https://youtube.com/playlist?list=PLDoPjvoNmBAw24EjNUp_88S1VeaNK8Cts"
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
                    <h2>أساسيات Bootstrap - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح أكاديمية ترميز - Bootstrap 5</h3>
                    <p>تعلم أحدث إصدار من Bootstrap مع ميزات جديدة وتحسينات</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم Bootstrap 5 بأحدث الميزات والتحسينات،
                    بما في ذلك نظام الـ Utilities المحسن والمكونات الجديدة.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>Bootstrap 5 الجديد</strong>
                        <div className="tool-details">
                          الميزات الجديدة، التحسينات، والإضافات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>نظام الـ Utilities</strong>
                        <div className="tool-details">
                          spacing, colors, typography, display utilities
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المكونات المتقدمة</strong>
                        <div className="tool-details">
                          carousel, modals, tooltips, popovers
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التخصيص</strong>
                        <div className="tool-details">
                          customizing colors, fonts, components
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>المكونات المتقدمة في Bootstrap 5:</h3>
                    <pre className="code-block">{`<!-- شرائح الصور (Carousel) -->
<div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="slide1.jpg" class="d-block w-100" alt="شريحة 1">
        </div>
        <div class="carousel-item">
            <img src="slide2.jpg" class="d-block w-100" alt="شريحة 2">
        </div>
        <div class="carousel-item">
            <img src="slide3.jpg" class="d-block w-100" alt="شريحة 3">
        </div>
    </div>
    <button class="carousel-control-prev" type="button"
     data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" 
    data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
    </button>
</div>

<!-- النوافذ المنبثقة (Modals) -->
<!-- زر لفتح النافذة -->
<button type="button" class="btn btn-primary" 
data-bs-toggle="modal" data-bs-target="#exampleModal">
    فتح نافذة
</button>

<!-- النافذة المنبثقة -->
<div class="modal fade" id="exampleModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">عنوان النافذة</h5>
                <button type="button" class="btn-close" 
                data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <p>محتوى النافذة المنبثقة يذهب هنا.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary"
                 data-bs-dismiss="modal">إغلاق</button>
                <button type="button" class="btn btn-primary">حفظ</button>
            </div>
        </div>
    </div>
</div>

<!-- التلميحات والأدوات (Tooltips & Popovers) -->
<button type="button" class="btn btn-secondary"
 data-bs-toggle="tooltip" data-bs-title="هذا تلميح">
    زر مع تلميح
</button>

<button type="button" class="btn btn-secondary"
 data-bs-toggle="popover"
 data-bs-title="عنوان البوبوفر" data-bs-content="محتوى البوبوفر">
    زر مع بوبوفر
</button>

<!-- تفعيل JavaScript للمكونات -->
<script>
    // تفعيل التلميحات
    const tooltipTriggerList = 
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = 
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
    // تفعيل البوبوفرز
    const popoverTriggerList =
     document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList =
     [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
</script>`}</pre>
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
                          <strong>المحتوى:</strong> Bootstrap 5 كامل
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/65EFKUpYk2A"
                        title="شرح Bootstrap 5 - أكاديمية ترميز"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/watch?v=65EFKUpYk2A"
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
                      href="https://www.youtube.com/watch?v=65EFKUpYk2A"
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
                    <h2>Bootstrap متقدم - الشرح الثالث</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح عبدالرحمن جمال - Bootstrap 4 كامل</h3>
                    <p>شرح مكثف وشامل لـ Bootstrap 4 مع مشاريع عملية</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء الأخير، ستتعلم تقنيات متقدمة في Bootstrap مثل
                    التخصيص، بناء المشاريع الكاملة، وأفضل الممارسات.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>التخصيص المتقدم</strong>
                        <div className="tool-details">
                          Sass، المتغيرات المخصصة، override للأنماط
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>بناء المشاريع</strong>
                        <div className="tool-details">
                          إنشاء مواقع كاملة باستخدام Bootstrap
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التكامل مع JavaScript</strong>
                        <div className="tool-details">
                          استخدام مكونات Bootstrap مع JavaScript مخصص
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أفضل الممارسات</strong>
                        <div className="tool-details">
                          performance، accessibility، SEO
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Abdelrahman Gamal
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> عبدالرحمن جمال
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Bootstrap 4 كامل
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/EzHbZjXDdKc"
                        title="شرح Bootstrap 4 - عبدالرحمن جمال"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/watch?v=EzHbZjXDdKc"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة الشرح على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لعبدالرحمن جمال</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>بناء موقع شركة كامل باستخدام Bootstrap</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>تطبيق التصميم المتجاوب لجميع الأجهزة</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>إضافة مكونات تفاعلية مثل الشرائح والنوافذ</p>
                      </div>
                      <div className="step">
                        <span className="step-number">4</span>
                        <p>تخصيص التصميم ليتناسب مع الهوية البصرية</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.youtube.com/watch?v=EzHbZjXDdKc"
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
              <h3>دورة Bootstrap الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">
                  الزيرو ويب سكول، أكاديمية ترميز، عبدالرحمن جمال
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
                  href="https://youtube.com/playlist?list=PLDoPjvoNmBAw24EjNUp_88S1VeaNK8Cts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  الزيرو ويب سكول
                </a>
                <a
                  href="https://www.youtube.com/watch?v=65EFKUpYk2A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  أكاديمية ترميز
                </a>
                <a
                  href="https://www.youtube.com/watch?v=EzHbZjXDdKc"
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
