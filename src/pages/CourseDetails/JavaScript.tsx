import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import JavascriptIcon from "@mui/icons-material/Javascript";

import "../../styles/javascript.css";

const lessons = [
  { id: 1, title: "ماذا تحتاج للبدء", icon: "" },
  { id: 2, title: "أساسيات JavaScript - الشرح الاول", icon: "" },
  { id: 3, title: "أساسيات JavaScript - الشرح الثاني ", icon: "" },
  { id: 4, title: "أساسيات JavaScript - الشرح الثالث", icon: "" },
];

export default function JavaScriptCourse() {
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
      2: "https://youtube.com/playlist?list=PLYyqC4bNbCIfMY5CoGmiWaPi9l86qaz5B",
      3: "https://youtube.com/playlist?list=PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE&si=y9xkq5zmMxCurooA",
      4: "https://youtube.com/playlist?list=PLYyqC4bNbCIdvviLNbvYKfvHqszFPnUkj&si=l2ujqGThcMjg4h13",
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
            <h1>أساسيات JavaScript</h1>
            <p>شرح كامل لغة JavaScript من الصفر حتى الاحتراف - دورة متكاملة</p>
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
                    قبل أن تبدأ في تعلم JavaScript، هناك بعض الأساسيات والأدوات
                    التي تحتاجها لتجعل رحلتك في برمجة الويب تفاعلية وأكثر
                    احترافية.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>معرفة أساسية بـ HTML و CSS:</strong>
                        <div className="tool-details">
                          يجب أن تكون على دراية بالوسوم الأساسية في HTML وتنسيق
                          CSS
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong> Visual Studio Code
                        <div className="tool-details">
                          مع الإضافات الموصى بها مثل ESLint, Prettier, Live
                          Server
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
                        <strong>Node.js (اختياري):</strong>
                        <div className="tool-details">
                          لتشغيل JavaScript خارج المتصفح وتثبيت الحزم
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
                          <h4>إعداد محرر الأكواد</h4>
                          <p>تثبيت VS Code والإضافات الأساسية</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>إنشاء ملف JavaScript</h4>
                          <p>أنشئ ملف script.js في مجلد مشروعك</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>ربط JavaScript مع HTML</h4>
                          <p>استخدم الوسم {"<script>"} لربط الملف</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>اختبار البيئة</h4>
                          <p>
                            اكتب كود JavaScript بسيط وتأكد من عمل console.log
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>
                        افهم الأساسيات جيداً قبل الانتقال للمواضيع المتقدمة
                      </li>
                      <li>
                        تدرب على كتابة الأكواد بنفسك ولا تعتمد على النسخ فقط
                      </li>
                      <li>استخدم console.log بشكل مكثف لفهم كيفية عمل الكود</li>
                      <li>تعلم debugging باستخدام أدوات المطورين</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://javascript.info/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <JavascriptIcon />
                      المرجع الخاص بـ JavaScript
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
                    <h2>أساسيات JavaScript - الشرح الاول </h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح الزيرو - JavaScript كامل من الصفر</h3>
                    <p>
                      هذا الكورس الشامل لتعليم JavaScript من البداية حتى
                      الإحتراف
                    </p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات لغة JavaScript وكيفية
                    استخدامها لجعل صفحات الويب تفاعلية. JavaScript هي لغة
                    البرمجة التي تضيف الحياة لمواقعك.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في JavaScript:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>ما هي JavaScript؟</h4>
                        <p>
                          لغة برمجة عالية المستوى تستخدم لتطوير الويب التفاعلي
                          والتطبيقات.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>المتغيرات وأنواع البيانات</h4>
                        <p>
                          let, const, var وأنواع البيانات مثل String, Number,
                          Boolean
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>العوامل والمعاملات</h4>
                        <p>العوامل الحسابية، المنطقية، والمقارنة.</p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>المتغيرات وأنواع البيانات</strong>
                        <div className="tool-details">
                          let, const, var - String, Number, Boolean, null,
                          undefined
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>العوامل والمعاملات</strong>
                        <div className="tool-details">
                          arithmetic, comparison, logical operators
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التحكم في التدفق</strong>
                        <div className="tool-details">
                          if, else, switch, ternary operator
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الحلقات التكرارية</strong>
                        <div className="tool-details">
                          for, while, do while loops
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>أمثلة على JavaScript الأساسية:</h3>
                    <pre className="code-block">{`// المتغيرات وأنواع البيانات
let name = "أحمد";
const age = 25;
var isStudent = true;

// أنواع البيانات
let score = 95; // number
let message = "مرحباً"; // string
let isActive = true; // boolean
let data = null; // null
let undefinedVar; // undefined

// العوامل والمعاملات
let x = 10, y = 5;
let sum = x + y; // 15
let difference = x - y; // 5
let product = x * y; // 50
let quotient = x / y; // 2

// المقارنات
console.log(x > y); // true
console.log(x === 10); // true
console.log(x !== y); // true

// العوامل المنطقية
let isAdult = age >= 18;
let canVote = isAdult && isCitizen;`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>التحكم في التدفق والحلقات:</h3>
                    <pre className="code-block">{`// التحكم في التدفق
let temperature = 25;

if (temperature > 30) {
    console.log("الجو حار");
} else if (temperature > 20) {
    console.log("الجو معتدل");
} else {
    console.log("الجو بارد");
}

// switch statement
let day = "الاثنين";
switch(day) {
    case "السبت":
        console.log("عطلة نهاية الأسبوع");
        break;
    case "الأحد":
        console.log("بداية الأسبوع");
        break;
    default:
        console.log("يوم عمل");
}

// الحلقات التكرارية
for (let i = 0; i < 5; i++) {
    console.log("رقم: " + i);
}

let count = 0;
while (count < 3) {
    console.log("العد: " + count);
    count++;
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
                          <strong>المحتوى:</strong> شرح JavaScript كامل من الصفر
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> الجزء الاول فيديو الشرح الكامل :
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/gIGGhFlGgLI
"
                        title="شرح JavaScript كامل من الزيرو - الجزء الأول"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://elzero.org/study/javascript-bootcamp-2021-study-plan/
"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة للزيرو ويب سكول</span>
                    </div>
                    <h3>
                      <PlayArrowIcon /> الجزء الاول فيديو الشرح الكامل :
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/FKrfis1W1tk
"
                        title="شرح JavaScript كامل من الزيرو - الجزء الأول"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://elzero.org/study/javascript-bootcamp-2021-study-plan/
"
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
                      href="https://youtu.be/gIGGhFlGgLI?si=PSfTYhGqt0bvW3e2"
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
                    <h2>أساسيات JavaScript - الشرح الثاني </h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح عبدالرحمن جمال - JavaScript متقدم</h3>
                    <p>استكمال شرح JavaScript بمفاهيم متقدمة وتقنيات حديثة</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم مفاهيم JavaScript المتقدمة مثل الدوال،
                    المصفوفات، الكائنات، والتعامل مع DOM.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>الدوال (Functions)</strong>
                        <div className="tool-details">
                          function declarations, expressions, arrow functions
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المصفوفات والكائنات</strong>
                        <div className="tool-details">
                          Arrays, Objects, methods, destructuring
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التعامل مع DOM</strong>
                        <div className="tool-details">
                          document object model, event handling
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>البرمجة غير المتزامنة</strong>
                        <div className="tool-details">
                          callbacks, promises, async/await
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>الدوال في JavaScript:</h3>
                    <pre className="code-block">{`// تعريف الدوال
function greet(name) {
    return "مرحباً " + name;
}

// function expression
const multiply = function(a, b) {
    return a * b;
};

// arrow function
const divide = (a, b) => a / b;

// استخدام الدوال
console.log(greet("أحمد")); // مرحباً أحمد
console.log(multiply(5, 3)); // 15
console.log(divide(10, 2)); // 5

// default parameters
function createUser(name, age = 18) {
    return { name, age };
}

// rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>المصفوفات والكائنات:</h3>
                    <pre className="code-block">{`// المصفوفات
let fruits = ["تفاح", "موز", "برتقال"];
fruits.push("فراولة"); // إضافة عنصر
fruits.pop(); // إزالة آخر عنصر

// طرق المصفوفات
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
let evenNumbers = numbers.filter(num => num % 2 === 0);
let sum = numbers.reduce((total, num) => total + num, 0);

// الكائنات
let person = {
    name: "أحمد",
    age: 25,
    city: "القاهرة",
    getInfo: function() {
        return this.name + " - " + this.age + " سنة";
    }
};

// destructuring
let { name, age } = person;
let [firstFruit, secondFruit] = fruits;`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>التعامل مع DOM:</h3>
                    <pre className="code-block">{`// الوصول إلى العناصر
let title = document.getElementById("title");
let buttons = document.getElementsByClassName("btn");
let paragraphs = document.querySelectorAll("p");

// تعديل المحتوى
title.textContent = "عنوان جديد";
title.innerHTML = "<strong>عنوان قوي</strong>";

// إضافة event listeners
let button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    alert("تم النقر على الزر!");
});

// إنشاء عناصر جديدة
let newDiv = document.createElement("div");
newDiv.className = "card";
newDiv.textContent = "بطاقة جديدة";
document.body.appendChild(newDiv);

// تعديل الأنماط
title.style.color = "red";
title.style.fontSize = "24px";`}</pre>
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
                          <strong>المحتوى:</strong> JavaScript متقدم وتقنيات
                          حديثة
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/PWuTLTFMtYw"
                        title="شرح JavaScript متقدم من عبدالرحمن جمال - الجزء الثاني"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE&si=y9xkq5zmMxCurooA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لعبدالرحمن جمال</span>
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
                    <h2>أساسيات JavaScript - الشرح الثالث </h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح أكاديمية ترميز - JavaScript متقدم</h3>
                    <p>إتقان JavaScript بمفاهيم متقدمة وأفضل الممارسات</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء الأخير، ستتعلم تقنيات JavaScript المتقدمة مثل
                    ES6+ features، الـ APIs، الـ Modules، والـ Frameworks.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>ميزات ES6+ الحديثة</strong>
                        <div className="tool-details">
                          classes, modules, template literals, destructuring
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>البرمجة غير المتزامنة</strong>
                        <div className="tool-details">
                          async/await, fetch API, error handling
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التعامل مع APIs</strong>
                        <div className="tool-details">
                          REST APIs, JSON, HTTP requests
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أدوات التطوير</strong>
                        <div className="tool-details">
                          npm, webpack, babel, frameworks
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> أكاديمية ترميز
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> أكاديمية ترميز
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> JavaScript متقدم وتقنيات
                          حديثة
                        </div>
                        <div className="detail-item">
                          <strong>السلسلة:</strong> JavaScript كامل من الصفر
                          للإحتراف
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل الجزء الاول :
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/TbHeHAyAV7Q?list=PLYyqC4bNbCIeLEjcSPO61bsGPKEvYceb0"
                        title="شرح JavaScript متقدم من أكاديمية ترميز - الجزء الثالث"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLYyqC4bNbCIeLEjcSPO61bsGPKEvYceb0&si=WRYEW4FBDWcLJs12"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لأكاديمية ترميز</span>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل الجزء الثاني:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/pPnfmpj_MSQ?list=PLYyqC4bNbCIdvviLNbvYKfvHqszFPnUkj"
                        title="شرح JavaScript متقدم من أكاديمية ترميز - الجزء الثالث"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLYyqC4bNbCIdvviLNbvYKfvHqszFPnUkj&si=4g7bVJJnZ12aRUYL"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لأكاديمية ترميز</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>أنشئ تطبيق ويب تفاعلي باستخدام JavaScript النقي</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>طبق التعامل مع APIs لجلب وعرض البيانات</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>استخدم الـ Modules والـ Classes لتنظيم الكود</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLYyqC4bNbCIdvviLNbvYKfvHqszFPnUkj&si=l2ujqGThcMjg4h13"
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
              <h3>دورة JavaScript الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">
                  أسامة الزيرو، عبدالرحمن جمال، أكاديمية ترميز
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
                  href="https://elzero.org/study/javascript-bootcamp-2021-study-plan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  الزيرو ويب سكول
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  عبدالرحمن جمال
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PLYyqC4bNbCIdvviLNbvYKfvHqszFPnUkj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  أكاديمية ترميز
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
