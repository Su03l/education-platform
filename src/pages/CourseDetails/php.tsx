import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhpIcon from "@mui/icons-material/Php";

import "../../styles/php.css";

const lessons = [
  { id: 1, title: "مقدمة في لغة PHP", icon: "" },
  { id: 2, title: "أساسيات PHP - الشرح الأول", icon: "" },
  { id: 3, title: "أساسيات PHP - الشرح الثاني", icon: "" },
  { id: 4, title: "أساسيات PHP - الشرح الثالث", icon: "" },
];

export default function PhpCourse() {
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
            <h1>PHP الكامل</h1>
            <p>شرح متكامل للغة البرمجة الأشهر في تطوير الويب - دورة شاملة</p>
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
                    <h2>مقدمة في لغة PHP</h2>
                  </div>

                  <p className="lesson-text">
                    PHP هي لغة برمجة نصية صممت أساساً من أجل تطوير الويب. يمكن
                    تضمينها في HTML وهي مناسبة لأنشاء تطبيقات الويب الديناميكية.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>خادم ويب محلي:</strong>
                        <div className="tool-details">
                          XAMPP, WAMP, أو MAMP لتشغيل PHP محلياً
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong>
                        <div className="tool-details">
                          VS Code, PHPStorm, أو Sublime Text
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أساسيات HTML:</strong>
                        <div className="tool-details">
                          فهم أساسي لتركيب HTML
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>متصفح ويب:</strong>
                        <div className="tool-details">
                          Chrome, Firefox لأغراض الاختبار
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
                          <h4>تثبيت XAMPP</h4>
                          <p>
                            تحميل وتثبيت حزمة XAMPP التي تحتوي على Apache و PHP
                            و MySQL
                          </p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>تهيئة VS Code</h4>
                          <p>إضافة إضافات PHP مثل PHP Intelephense</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>إنشاء أول ملف PHP</h4>
                          <p>كتابة أول سكريبت PHP واختباره على الخادم المحلي</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>اختبار البيئة</h4>
                          <p>تشغيل الخادم المحلي وفتح الملف في المتصفح</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>ابدأ بتعلم الأساسيات قبل الانتقال للإطارات</li>
                      <li>تدرب على كتابة الأكواد يدوياً ولا تعتمد على النسخ</li>
                      <li>افهم الفرق بين PHP واللغات الأخرى مثل JavaScript</li>
                      <li>استخدم الدوال الجاهزة ولكن افهم كيف تعمل</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.php.net/docs.php"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PhpIcon />
                      المرجع الرسمي الخاص بـ PHP
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
                    <h2>أساسيات PHP - الشرح الأول</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح راكوان للبرمجة - CodeRK</h3>
                    <p>سلسلة شاملة لتعلم PHP من الصفر حتى الاحتراف</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات لغة PHP من خلال شرح الاستاذ
                    راكون، بما في ذلك المتغيرات، الجمل الشرطية، الحلقات
                    التكرارية، والدوال.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في PHP:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>ما هي PHP؟</h4>
                        <p>
                          لغة برمجة نصية مفتوحة المصدر تستخدم لتطوير تطبيقات
                          الويب الديناميكية.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>المتغيرات وأنواع البيانات</h4>
                        <p>
                          طريقة تعريف المتغيرات وأنواع البيانات المختلفة في PHP.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>الجمل الشرطية</h4>
                        <p>استخدام if, else, elseif للتحكم في تدفق البرنامج.</p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>تركيب PHP الأساسي</strong>
                        <div className="tool-details">
                          &lt;?php ?&gt;، echo، print، والتعليقات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المتغيرات وأنواع البيانات</strong>
                        <div className="tool-details">
                          String, Integer, Float, Boolean, Array, Object, NULL
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المعاملات Operators</strong>
                        <div className="tool-details">
                          معاملات حسابية، مقارنة، منطقية، وتخصيص
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الجمل الشرطية</strong>
                        <div className="tool-details">
                          if, else, elseif, switch case
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>أساسيات PHP - أمثلة عملية:</h3>
                    <pre className="code-block">{`<?php
// المتغيرات وأنواع البيانات
$name = "أحمد";           // String
$age = 25;               // Integer
$salary = 1500.50;       // Float
$is_employed = true;     // Boolean
$skills = ["PHP", "HTML", "CSS"]; // Array

// عرض البيانات
echo "الاسم: " . $name . "<br>";
echo "العمر: " . $age . "<br>";
echo "الراتب: $" . $salary . "<br>";

// الجمل الشرطية
if ($age >= 18) {
    echo "أنت بالغ<br>";
} else {
    echo "أنت قاصر<br>";
}

// if elseif else
if ($salary > 2000) {
    echo "راتب ممتاز<br>";
} elseif ($salary > 1000) {
    echo "راتب جيد<br>";
} else {
    echo "راتب يحتاج تحسين<br>";
}

// switch case
$day = "السبت";
switch ($day) {
    case "السبت":
        echo "اليوم هو السبت<br>";
        break;
    case "الأحد":
        echo "اليوم هو الأحد<br>";
        break;
    default:
        echo "يوم آخر<br>";
}

// الحلقات التكرارية
// for loop
for ($i = 1; $i <= 5; $i++) {
    echo "رقم: " . $i . "<br>";
}

// while loop
$counter = 1;
while ($counter <= 3) {
    echo "عداد: " . $counter . "<br>";
    $counter++;
}

// foreach loop للمصفوفات
foreach ($skills as $skill) {
    echo "مهارة: " . $skill . "<br>";
}

// الدوال Functions
function greet($name) {
    return "مرحباً " . $name . "!";
}

echo greet("محمد"); // ناتج: مرحباً محمد!

function calculateSum($a, $b) {
    return $a + $b;
}

echo "مجموع 5 + 3 = " . calculateSum(5, 3);
?>`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> راكوان للبرمجة - CodeRK
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> الاستاذ راكون
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> PHP خطوة بخطوة للاحتراف
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/yDt8oy4-M9I?list=PLSiLeKadTQ7mfep8d_FXWLnoARZyXJ5ob"
                        title="تعلم PHP خطوة بخطوة للاحتراف - راكوان للبرمجة"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLSiLeKadTQ7mfep8d_FXWLnoARZyXJ5ob"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ راكوان للبرمجة - CodeRK</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLSiLeKadTQ7mfep8d_FXWLnoARZyXJ5ob"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon /> مشاهدة السلسلة الكاملة
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
                    <h2>أساسيات PHP - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح الزيرو ويب سكول</h3>
                    <p>سلسلة متكاملة لتعلم PHP 8 مع التطبيقات العملية</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم تقنيات متقدمة في PHP مثل المصفوفات،
                    الدوال، التعامل مع النماذج، والاتصال بقواعد البيانات.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>المصفوفات المتقدمة</strong>
                        <div className="tool-details">
                          مصفوفات متعددة الأبعاد، ودوال التعامل مع المصفوفات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الدوال المتقدمة</strong>
                        <div className="tool-details">
                          دوال مجهولة، دوال السهم، والمتغيرات العالمية
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التعامل مع النماذج</strong>
                        <div className="tool-details">
                          GET, POST، والتحقق من صحة البيانات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>قواعد البيانات</strong>
                        <div className="tool-details">
                          الاتصال بـ MySQL، إجراءات CRUD
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>المصفوفات والدوال المتقدمة:</h3>
                    <pre className="code-block">{`<?php
// المصفوفات Arrays
// مصفوفة indexed array
$fruits = ["تفاح", "موز", "برتقال"];
echo $fruits[0]; // تفاح

// مصفوفة associative array
$person = [
    "name" => "أحمد",
    "age" => 25,
    "city" => "الرياض"
];
echo $person["name"]; // أحمد

// مصفوفة متعددة الأبعاد
$employees = [
    ["name" => "محمد", "salary" => 5000],
    ["name" => "فاطمة", "salary" => 6000],
    ["name" => "يوسف", "salary" => 5500]
];

// دوال المصفوفات
$numbers = [1, 2, 3, 4, 5];

// count() - عدد العناصر
echo count($numbers); // 5

// array_push() - إضافة عنصر
array_push($numbers, 6);

// array_pop() - إزالة آخر عنصر
array_pop($numbers);

// array_merge() - دمج مصفوفات
$array1 = [1, 2];
$array2 = [3, 4];
$merged = array_merge($array1, $array2); // [1, 2, 3, 4]

// in_array() - التحقق من وجود قيمة
if (in_array("تفاح", $fruits)) {
    echo "التفاح موجود في المصفوفة";
}

// الدوال المتقدمة
// دالة مع قيمة افتراضية
function sayHello($name = "زائر") {
    return "مرحباً " . $name;
}

echo sayHello(); // مرحباً زائر
echo sayHello("أحمد"); // مرحباً أحمد

// دالة بإرجاع multiple values باستخدام array
function calculate($a, $b) {
    $sum = $a + $b;
    $product = $a * $b;
    return [$sum, $product];
}

list($total, $multiply) = calculate(5, 3);
echo "المجموع: " . $total . "، الناتج: " . $multiply;

// الدوال المجهولة Anonymous Functions
$greet = function($name) {
    return "أهلاً " . $name;
};

echo $greet("سارة");
?>`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> الزيرو ويب سكول
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> الاستاذ اسامة الزيرو
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Learn PHP 8 In Arabic 2022
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/xcg9qq6SZ0w?list=PLDoPjvoNmBAy41u35AqJUrI-H83DObUDq"
                        title="Learn PHP 8 In Arabic - الزيرو ويب سكول"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLDoPjvoNmBAy41u35AqJUrI-H83DObUDq"
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
                      href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAy41u35AqJUrI-H83DObUDq"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon /> مشاهدة السلسلة الكاملة
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
                    <h2>أساسيات PHP - الشرح الثالث</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح Coder Shiyar (كودر شيار)</h3>
                    <p>تقنيات متقدمة في PHP وبناء تطبيقات ويب احترافية</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء الأخير، ستتعلم تقنيات متقدمة في PHP مثل البرمجة
                    كائنية التوجه OOP، التعامل مع APIs، الأمان، وأفضل الممارسات.
                  </p>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Coder Shiyar
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> الاستاذ شيار
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Learn PHP in Arabic
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/l66t7kBmbTM?list=PLMTdZ61eBnypZGBMDMGYI48WfZEyAgQK_"
                        title="Learn PHP in Arabic - Coder Shiyar"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLMTdZ61eBnypZGBMDMGYI48WfZEyAgQK_"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ Coder Shiyar</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>بناء نظام إدارة محتوى CMS بسيط</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>إنشاء نظام تسجيل دخول ومستخدمين</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>تصميم واجهة برمجة تطبيقات API</p>
                      </div>
                      <div className="step">
                        <span className="step-number">4</span>
                        <p>تطبيق مفاهيم الأمان والحماية</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLMTdZ61eBnypZGBMDMGYI48WfZEyAgQK_"
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
              <h3>دورة PHP الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">
                  راكوان للبرمجة، الزيرو ويب سكول، كودر شيار
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
                  href="https://youtube.com/playlist?list=PLSiLeKadTQ7mfep8d_FXWLnoARZyXJ5ob"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  راكوان للبرمجة
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLDoPjvoNmBAy41u35AqJUrI-H83DObUDq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  الزيرو ويب سكول
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLMTdZ61eBnypZGBMDMGYI48WfZEyAgQK_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  كودر شيار
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
