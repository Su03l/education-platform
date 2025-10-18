import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CodeIcon from "@mui/icons-material/Code";

import "../../styles/nodejs.css";

const lessons = [
  { id: 1, title: "ماذا تحتاج للبدء", icon: "" },
  { id: 2, title: "أساسيات Node.js - الشرح الاول", icon: "" },
  { id: 3, title: "أساسيات Node.js - الشرح الثاني", icon: "" },
  { id: 4, title: "أساسيات Node.js - الشرح الثالث", icon: "" },
  { id: 5, title: "أساسيات Node.js - الشرح الرابع", icon: "" },
  { id: 6, title: "أساسيات Node.js - الشرح الخامس", icon: "" },
];

export default function NodeCourse() {
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
    <div className="node-course-page" dir="rtl">
      <header className="node-course-header">
        <div className="node-course-container">
          <Link to="/courses" className="back-link">
            <ArrowForwardIosIcon
              style={{ transform: "rotate(180deg)", fontSize: 18 }}
            />
            العودة للكورسات
          </Link>
          <div className="node-course-title">
            <h1>Node.js الكامل</h1>
            <p>
              شرح متكامل لـ Node.js من الصفر حتى بناء التطبيقات المتقدمة - دورة
              شاملة
            </p>
          </div>
        </div>
      </header>

      <section className="node-course-main node-course-container">
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
                    قبل أن تبدأ في تعلم Node.js، هناك بعض الأساسيات والأدوات
                    التي تحتاجها لبناء تطبيقات الخادوم بشكل احترافي.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>Node.js:</strong>
                        <div className="tool-details">
                          أحدث إصدار LTS من Node.js (الإصدار 18 أو أعلى)
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong> VS Code
                        <div className="tool-details">
                          مع إضافات مثل Prettier, ESLint, Thunder Client
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أساسيات JavaScript:</strong>
                        <div className="tool-details">
                          ES6+, Async/Await, Callbacks, Promises
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أدوات مساعدة:</strong>
                        <div className="tool-details">
                          Postman, Git, Terminal/Command Line
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
                          <p>
                            تحميل وتثبيت Node.js من الموقع الرسمي nodejs.org
                          </p>
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
                          <h4>اختبار التثبيت</h4>
                          <p>فتح Terminal والتأكد من عمل node و npm</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>إنشاء أول مشروع</h4>
                          <p>تهيئة package.json وإنشاء أول سكريبت Node.js</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>افهم نظام الـ Modules في Node.js جيداً</li>
                      <li>تدرب على التعامل مع الملفات والـ Streams</li>
                      <li>
                        تعلم بناء REST APIs قبل الانتقال للمواضيع المتقدمة
                      </li>
                      <li>استخدم الـ Debugger المدمج في VS Code</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://nodejs.org/docs/latest/api/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeIcon />
                      المرجع الخاص بـ Node.js
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
                    <h2>أساسيات Node.js - الشرح الاول</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح CodeZone - Node.js من الصفر</h3>
                    <p>
                      هذا الكورس الشامل لتعليم Node.js من البداية حتى الإحتراف
                    </p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات Node.js وكيفية استخدامه
                    لبناء تطبيقات الخادوم. Node.js بيئة تشغيل JavaScript من جهة
                    الخادم.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في Node.js:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>ما هو Node.js؟</h4>
                        <p>
                          بيئة تشغيل JavaScript مبنية على محرك V8، غير متزامنة
                          وموجهة بالأحداث.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>نظام الـ Modules</h4>
                        <p>
                          CommonJS modules، require، exports، module.exports
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>البرمجة غير المتزامنة</h4>
                        <p>Callbacks، Promises، Async/Await، Event Loop</p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>بناء أول تطبيق Node.js</strong>
                        <div className="tool-details">
                          إنشاء خادم ويب بسيط باستخدام http module
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>نظام الملفات</strong>
                        <div className="tool-details">
                          fs module للتعامل مع الملفات والمجلدات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>إدارة الحزم</strong>
                        <div className="tool-details">
                          npm، package.json، تثبيت وإدارة المكتبات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>البيئة التشغيلية</strong>
                        <div className="tool-details">
                          process، global، __dirname، __filename
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>أمثلة على Node.js الأساسية:</h3>
                    <pre className="code-block">{`// إنشاء خادم ويب بسيط
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>مرحباً بك في Node.js!</h1>');
});

server.listen(3000, () => {
  console.log('الخادم يعمل على http://localhost:3000');
});

// التعامل مع الملفات
const fs = require('fs');

// قراءة ملف
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// كتابة ملف
fs.writeFile('newfile.txt', 'محتوى جديد', (err) => {
  if (err) throw err;
  console.log('تم حفظ الملف!');
});

// استخدام الـ Modules
// math.js
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

module.exports = { add, multiply };

// app.js
const math = require('./math');
console.log(math.add(5, 3)); // 8
console.log(math.multiply(4, 2)); // 8`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>إدارة الحزم مع npm:</h3>
                    <pre className="code-block">{`# إنشاء مشروع جديد
npm init -y

# تثبيت حزمة
npm install express

# تثبيت حزمة كـ dev dependency
npm install --save-dev nodemon

# تثبيت إصدار محدد
npm install express@4.18.0

# تحديث الحزم
npm update

# حذف حزمة
npm uninstall express

# package.json مثال على
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "تطبيق Node.js",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  }
}`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> CodeZone
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> أحمد ناصر
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Node.js من الصفر
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/Bzzp0q0T5oM?list=PLQtNtS-WfRa8OF9juY3k6WUWayMfDKHK2"
                        title="شرح Node.js - CodeZone"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLQtNtS-WfRa8OF9juY3k6WUWayMfDKHK2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ CodeZone</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLQtNtS-WfRa8OF9juY3k6WUWayMfDKHK2"
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
                    <h2>أساسيات Node.js - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح كودر شيار - Node.js متقدم</h3>
                    <p>استكمال شرح Node.js بمفاهيم متقدمة وتقنيات حديثة</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم مفاهيم Node.js المتقدمة مثل الـ Event
                    Loop، الـ Streams، الـ Buffers، وبناء التطبيقات الحقيقية.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>الـ Event Loop</strong>
                        <div className="tool-details">
                          فهم كيفية عمل الحلقة الحدثية في Node.js
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الـ Streams والـ Buffers</strong>
                        <div className="tool-details">
                          التعامل مع البيانات الكبيرة بكفاءة
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>قاعدة البيانات</strong>
                        <div className="tool-details">
                          الاتصال بقواعد البيانات مثل MongoDB و MySQL
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المصادقة والأمان</strong>
                        <div className="tool-details">
                          JWT، bcrypt، حماية التطبيقات
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>الـ Streams في Node.js:</h3>
                    <pre className="code-block">{`// Streams للتعامل مع البيانات الكبيرة
const fs = require('fs');

// Readable Stream
const readableStream = fs.createReadStream('largefile.txt', 'utf8');

readableStream.on('data', (chunk) => {
  console.log('تم قراءة جزء من البيانات:', chunk.length);
});

readableStream.on('end', () => {
  console.log('انتهى قراءة الملف');
});

// Writable Stream
const writableStream = fs.createWriteStream('output.txt');

writableStream.write('سطر الأول\\n');
writableStream.write('سطر الثاني\\n');
writableStream.end();

// Pipes لربط الـ Streams
readableStream.pipe(writableStream);

// Buffers للتعامل مع البيانات الثنائية
const buffer = Buffer.from('مرحباً Node.js', 'utf8');
console.log(buffer); // <Buffer ...>
console.log(buffer.toString('utf8')); // مرحباً Node.js

// تحويل Buffer إلى JSON والعكس
const json = JSON.stringify(buffer);
const bufferFromJson = Buffer.from(JSON.parse(json).data);`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>الاتصال بقاعدة البيانات:</h3>
                    <pre className="code-block">{`// MongoDB مع Mongoose
const mongoose = require('mongoose');

// الاتصال بقاعدة البيانات
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// تعريف Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// إنشاء Model
const User = mongoose.model('User', userSchema);

// إنشاء مستخدم جديد
const newUser = new User({
  name: 'أحمد',
  email: 'ahmed@example.com',
  age: 25
});

// حفظ في قاعدة البيانات
newUser.save()
  .then(user => console.log('تم حفظ المستخدم:', user))
  .catch(err => console.error('خطأ:', err));

// MySQL مع mysql2
const mysql = require('mysql2');

// إنشاء اتصال
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

// تنفيذ query
connection.execute(
  'SELECT * FROM users WHERE age > ?',
  [18],
  (err, results) => {
    if (err) throw err;
    console.log('النتائج:', results);
  }
);`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> كودر شيار
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> شيار
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Node.js متقدم
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/6QGHmc4gGBA?list=PLMTdZ61eBnyp3LE99jMZ5qYI7TJfRFdUe"
                        title="شرح Node.js متقدم - كودر شيار"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLMTdZ61eBnyp3LE99jMZ5qYI7TJfRFdUe"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لكودر شيار</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.youtube.com/playlist?list=PLMTdZ61eBnyp3LE99jMZ5qYI7TJfRFdUe"
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
                    <h2>بناء APIs - الشرح الثالث</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح Youssef Abbas - بناء APIs متقدمة</h3>
                    <p>تعلم بناء RESTful APIs احترافية باستخدام Express.js</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم بناء APIs متكاملة باستخدام Express.js
                    مع المصادقة، التحقق من البيانات، والتعامل مع الأخطاء.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>Express.js Framework</strong>
                        <div className="tool-details">
                          إطار العمل الأشهر لبناء تطبيقات Node.js
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>RESTful APIs</strong>
                        <div className="tool-details">
                          تصميم وبناء واجهات برمجة تطبيقات REST
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المصادقة والصلاحيات</strong>
                        <div className="tool-details">
                          JWT، Middleware، نظام الصلاحيات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التحقق من البيانات</strong>
                        <div className="tool-details">
                          Validation، Sanitization، Error Handling
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Youssef Abbas
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> يوسف عباس
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> بناء APIs متقدمة
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/CIYujbGpXZ8?list=PL5gCk5NdNx586mk_JOhe30dd59IgrFG_U"
                        title="شرح بناء APIs - Youssef Abbas"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PL5gCk5NdNx586mk_JOhe30dd59IgrFG_U"
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
                      href="https://youtube.com/playlist?list=PL5gCk5NdNx586mk_JOhe30dd59IgrFG_U"
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

              {activeLesson === 5 && (
                <div className="lesson-content">
                  <div className="lesson-header">
                    <span className="icon"></span>
                    <h2>Node.js متقدم - الشرح الرابع</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح freeCodeCamp - Node.js و Express.js كامل</h3>
                    <p>
                      دورة شاملة باللغة الإنجليزية تغطي جميع جوانب Node.js
                      المتقدمة
                    </p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم تقنيات Node.js المتقدمة مثل الـ
                    Testing، الـ Deployment، الـ Performance Optimization، وأفضل
                    الممارسات.
                  </p>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> freeCodeCamp.org
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> John Smilga
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Node.js و Express.js كامل
                        </div>
                        <div className="detail-item">
                          <strong>اللغة:</strong> الإنجليزية
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/Oe421EPjeBE"
                        title="Node.js and Express.js Full Course - freeCodeCamp"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/watch?v=Oe421EPjeBE"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة الكورس الكامل على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ freeCodeCamp.org</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.youtube.com/watch?v=Oe421EPjeBE"
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

              {activeLesson === 6 && (
                <div className="lesson-content">
                  <div className="lesson-header">
                    <span className="icon"></span>
                    <h2>مشروع كامل - الشرح الخامس</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح Smoljames - Backend كامل مع قواعد البيانات</h3>
                    <p>
                      بناء مشروع كامل باستخدام Node.js، Express، PostgreSQL،
                      Prisma و Docker
                    </p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء الأخير، ستشاهد بناء مشروع backend كامل من الصفر
                    باستخدام أحدث التقنيات والأدوات الاحترافية.
                  </p>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Smoljames
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> Smoljames
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Backend كامل
                        </div>
                        <div className="detail-item">
                          <strong>اللغة:</strong> الإنجليزية
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/9BD9eK9VqXA"
                        title="Backend Full Course - Smoljames"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/watch?v=9BD9eK9VqXA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة الكورس الكامل على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ Smoljames</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>بناء نظام إدارة مستخدمين كامل</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>تطبيق المصادقة باستخدام JWT</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>ربط قاعدة بيانات وإدارة العلاقات</p>
                      </div>
                      <div className="step">
                        <span className="step-number">4</span>
                        <p>نشر التطبيق على خادم حقيقي</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.youtube.com/watch?v=9BD9eK9VqXA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon /> مشاهدة المشروع الكامل
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
              <h3>دورة Node.js الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">
                  CodeZone، كودر شيار، Youssef Abbas، freeCodeCamp، Smoljames
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
                  href="https://youtube.com/playlist?list=PLQtNtS-WfRa8OF9juY3k6WUWayMfDKHK2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  CodeZone
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLMTdZ61eBnyp3LE99jMZ5qYI7TJfRFdUe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  كودر شيار
                </a>
                <a
                  href="https://youtube.com/playlist?list=PL5gCk5NdNx586mk_JOhe30dd59IgrFG_U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  Youssef Abbas
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Oe421EPjeBE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  freeCodeCamp
                </a>
                <a
                  href="https://www.youtube.com/watch?v=9BD9eK9VqXA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  Smoljames
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
