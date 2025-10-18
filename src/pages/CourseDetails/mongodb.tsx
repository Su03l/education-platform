import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CodeIcon from "@mui/icons-material/Code";

import "../../styles/mongodb.css";

const lessons = [
  { id: 1, title: "ماذا تحتاج للبدء", icon: "" },
  { id: 2, title: "أساسيات MongoDB - الشرح الاول", icon: "" },
  { id: 3, title: "أساسيات MongoDB - الشرح الثاني", icon: "" },
  { id: 4, title: "أساسيات MongoDB - الشرح الثالث", icon: "" },
  { id: 5, title: "أساسيات MongoDB - الشرح الرابع", icon: "" },
];

export default function MongoDBCourse() {
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
    <div className="mongodb-course-page" dir="rtl">
      <header className="mongodb-course-header">
        <div className="mongodb-course-container">
          <Link to="/courses" className="back-link">
            <ArrowForwardIosIcon
              style={{ transform: "rotate(180deg)", fontSize: 18 }}
            />
            العودة للكورسات
          </Link>
          <div className="mongodb-course-title">
            <h1>MongoDB الكامل</h1>
            <p>
              شرح متكامل لقاعدة البيانات NoSQL الأشهر في العالم - دورة شاملة
            </p>
          </div>
        </div>
      </header>

      <section className="mongodb-course-main mongodb-course-container">
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
                    قبل أن تبدأ في تعلم MongoDB، هناك بعض الأساسيات والأدوات
                    التي تحتاجها للعمل مع قواعد البيانات NoSQL بشكل احترافي.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>MongoDB:</strong>
                        <div className="tool-details">
                          تثبيت MongoDB Community Edition من الموقع الرسمي
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>MongoDB Compass:</strong>
                        <div className="tool-details">
                          واجهة رسومية لإدارة قواعد البيانات (اختياري)
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Node.js:</strong>
                        <div className="tool-details">
                          لتطوير التطبيقات باستخدام MongoDB (إصدار 14 أو أعلى)
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong> VS Code
                        <div className="tool-details">
                          مع إضافات مثل MongoDB for VS Code
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
                          <h4>تثبيت MongoDB</h4>
                          <p>تحميل وتثبيت MongoDB Community Edition</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>تشغيل MongoDB</h4>
                          <p>بدء خدمة MongoDB واختبار الاتصال</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>تثبيت MongoDB Compass</h4>
                          <p>إضافة الواجهة الرسومية لإدارة البيانات</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>اختبار البيئة</h4>
                          <p>إنشاء أول قاعدة بيانات ومجموعة</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>افهم الفرق بين قواعد البيانات SQL و NoSQL</li>
                      <li>
                        تدرب على أوامر MongoDB الأساسية قبل الانتقال للتطبيقات
                      </li>
                      <li>استخدم MongoDB Compass لتصور البيانات بشكل أفضل</li>
                      <li>
                        تعلم الـ Aggregation Pipeline فهو قوي جداً في MongoDB
                      </li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.mongodb.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeIcon />
                      المرجع الرسمي لـ MongoDB
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
                    <h2>أساسيات MongoDB - الشرح الاول</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح محمد رمضان - MongoDB كامل</h3>
                    <p>سلسلة شاملة لتعلم MongoDB من البداية مع أمثلة عملية</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات MongoDB وكيفية استخدامه
                    كقاعدة بيانات NoSQL لتخزين البيانات بشكل مرن وفعال.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في MongoDB:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>ما هو MongoDB؟</h4>
                        <p>
                          قاعدة بيانات NoSQL وثائقية تخزن البيانات بصيغة BSON
                          (JSON ثنائي).
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>المستندات والمجموعات</h4>
                        <p>
                          المستندات (Documents) تشبه الصفوف، والمجموعات
                          (Collections) تشبه الجداول.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>BSON vs JSON</h4>
                        <p>
                          BSON هو تنسيق ثنائي لـ JSON يدعم أنواع بيانات إضافية.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>تهيئة MongoDB</strong>
                        <div className="tool-details">
                          التثبيت، التشغيل، وإدارة الخدمة
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أوامر CRUD الأساسية</strong>
                        <div className="tool-details">
                          Create, Read, Update, Delete operations
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الاستعلامات البسيطة</strong>
                        <div className="tool-details">
                          find(), query operators, projection
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>إدارة المجموعات</strong>
                        <div className="tool-details">
                          إنشاء وحذف المجموعات وقواعد البيانات
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>أوامر MongoDB الأساسية:</h3>
                    <pre className="code-block">{`// الاتصال بقاعدة البيانات
use mydatabase

// إنشاء مستندات جديدة
db.users.insertOne({
  name: "أحمد",
  age: 25,
  email: "ahmed@example.com",
  hobbies: ["قراءة", "سباحة"],
  address: {
    city: "القاهرة",
    country: "مصر"
  }
})

// إضافة عدة مستندات
db.users.insertMany([
  {
    name: "فاطمة",
    age: 22,
    email: "fatima@example.com",
    hobbies: ["رسم", "موسيقى"]
  },
  {
    name: "محمد",
    age: 30,
    email: "mohamed@example.com",
    hobbies: ["برمجة", "رياضة"]
  }
])

// قراءة المستندات
db.users.find() // جميع المستندات
db.users.find({ age: { $gt: 25 } }) // عمر أكبر من 25
db.users.find({ name: "أحمد" }) // بالاسم
db.users.findOne({ age: 25 }) // مستند واحد

// تحديث المستندات
db.users.updateOne(
  { name: "أحمد" },
  { $set: { age: 26 } }
)

db.users.updateMany(
  { age: { $lt: 30 } },
  { $set: { status: "شاب" } }
)

// حذف المستندات
db.users.deleteOne({ name: "محمد" })
db.users.deleteMany({ age: { $gt: 40 } })

// الاستعلامات المتقدمة
db.users.find(
  { age: { $gte: 20, $lte: 35 } }, // عمر بين 20 و 35
  { name: 1, email: 1 } // إرجاع name و email فقط
).sort({ age: -1 }) // ترتيب تنازلي حسب العمر`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>أنواع البيانات وعوامل الاستعلام:</h3>
                    <pre className="code-block">{`// أنواع البيانات في MongoDB
{
  _id: ObjectId("507f1f77bcf86cd799439011"), // معرف فريد
  name: "أحمد", // String
  age: 25, // Number
  isActive: true, // Boolean
  birthDate: new Date("1998-05-15"), // Date
  scores: [85, 90, 78], // Array
  address: { // Embedded Document
    street: "شارع النصر",
    city: "القاهرة",
    zipCode: "11511"
  },
  tags: ["مطور", "مصمم"], // Array of Strings
  salary: 5000.50 // Double
}

// عوامل المقارنة
db.users.find({ age: { $eq: 25 } }) // يساوي
db.users.find({ age: { $ne: 25 } }) // لا يساوي
db.users.find({ age: { $gt: 20 } }) // أكبر من
db.users.find({ age: { $gte: 20 } }) // أكبر من أو يساوي
db.users.find({ age: { $lt: 30 } }) // أقل من
db.users.find({ age: { $lte: 30 } }) // أقل من أو يساوي
db.users.find({ age: { $in: [20, 25, 30] } }) // في القائمة
db.users.find({ age: { $nin: [20, 25] } }) // ليس في القائمة

// عوامل المنطق
db.users.find({ $and: [{ age: { $gt: 20 } }, { age: { $lt: 30 } }] })
db.users.find({ $or: [{ age: 25 }, { name: "فاطمة" }] })
db.users.find({ $nor: [{ age: 25 }, { name: "أحمد" }] })
db.users.find({ age: { $not: { $gt: 30 } } })

// عوامل التجميع
db.users.find({ hobbies: { $all: ["قراءة", "سباحة"] } }) // يحتوي على جميع العناصر
db.users.find({ hobbies: { $size: 2 } }) // حجم المصفوفة
db.users.find({ "address.city": "القاهرة" }) // حقل مضمن`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Mohamed Ramadan Abdallah
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> محمد رمضان
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> MongoDB كامل
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/rWQyb1RCLI4?list=PLd6o9p13Lc5387FWk_GXU0Rh5AhrBGod5"
                        title="شرح MongoDB - محمد رمضان"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLd6o9p13Lc5387FWk_GXU0Rh5AhrBGod5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لمحمد رمضان</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLd6o9p13Lc5387FWk_GXU0Rh5AhrBGod5"
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
                    <h2>أساسيات MongoDB - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح Algorithm Academy - MongoDB متقدم</h3>
                    <p>
                      تعلم الاستعلامات المتقدمة والعمليات المعقدة في MongoDB
                    </p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم تقنيات متقدمة في MongoDB مثل الـ
                    Aggregation Pipeline، الـ Indexing، والاستعلامات المعقدة.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>Aggregation Pipeline</strong>
                        <div className="tool-details">
                          مراحل معالجة البيانات وتحويلها
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الفهارس (Indexes)</strong>
                        <div className="tool-details">
                          تحسين أداء الاستعلامات بأنواع الفهارس المختلفة
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الاستعلامات النصية</strong>
                        <div className="tool-details">
                          البحث النصي باستخدام Text Search
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المعالجة المجمعة</strong>
                        <div className="tool-details">
                          Bulk operations والعمليات الجماعية
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>Aggregation Pipeline في MongoDB:</h3>
                    <pre className="code-block">{`// مثال على Aggregation Pipeline
db.orders.aggregate([
  // المرحلة الأولى: فلترة البيانات
  {
    $match: {
      status: "completed",
      orderDate: { $gte: new Date("2023-01-01") }
    }
  },
  
  // المرحلة الثانية: فك مصفوفة العناصر
  {
    $unwind: "$items"
  },
  
  // المرحلة الثالثة: تجميع البيانات
  {
    $group: {
      _id: "$customerId",
      totalOrders: { $sum: 1 },
      totalAmount: { $sum: "$items.price" },
      averageOrder: { $avg: "$total" }
    }
  },
  
  // المرحلة الرابعة: مشروع النتائج
  {
    $project: {
      _id: 0,
      customerId: "$_id",
      totalOrders: 1,
      totalAmount: 1,
      averageOrder: { $round: ["$averageOrder", 2] }
    }
  },
  
  // المرحلة الخامسة: ترتيب النتائج
  {
    $sort: { totalAmount: -1 }
  },
  
  // المرحلة السادسة: تحديد عدد النتائج
  {
    $limit: 10
  }
])

// مراحل Aggregation الشائعة
// $match - فلترة المستندات
// $group - تجميع المستندات
// $sort - ترتيب النتائج
// $project - إعادة تشكيل المستندات
// $unwind - فك مصفوفة
// $lookup - دمج مجموعات (مثل JOIN)
// $facet - عمليات متعددة في نفس الوقت
// $bucket - تجميع في نطاقات

// مثال على $lookup (JOIN)
db.orders.aggregate([
  {
    $lookup: {
      from: "customers", // المجموعة المراد الدمج معها
      localField: "customerId", // الحقل المحلي
      foreignField: "_id", // الحقل في المجموعة الأخرى
      as: "customerInfo" // اسم الحقل الجديد
    }
  }
])

// مثال على Text Search
db.articles.createIndex({ title: "text", content: "text" })

db.articles.find({
  $text: {
    $search: "برمجة تطبيقات ويب",
    $language: "none",
    $caseSensitive: false
  }
})`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Algorithm Academy
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> Algorithm Academy
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> MongoDB متقدم
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/dQAIhdGNXX0?list=PLfDx4cQoUNObp1ujQRNooNiadKdlflevM"
                        title="شرح MongoDB - Algorithm Academy"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLfDx4cQoUNObp1ujQRNooNiadKdlflevM"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ Algorithm Academy</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.youtube.com/playlist?list=PLfDx4cQoUNObp1ujQRNooNiadKdlflevM"
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
                    <h2>MongoDB متقدم - الشرح الثالث</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح Bro Code - MongoDB في ساعة</h3>
                    <p>شرح مكثف وشامل لـ MongoDB باللغة الإنجليزية</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستشاهد شرحاً مكثفاً لـ MongoDB يغطي جميع
                    المفاهيم الأساسية والمتقدمة في وقت قصير.
                  </p>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Bro Code
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> Bro Code
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> MongoDB في ساعة
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
                        src="https://www.youtube.com/embed/c2M-rlkkT5o"
                        title="Learn MongoDB in 1 hour - Bro Code"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/watch?v=c2M-rlkkT5o"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة الشرح على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ Bro Code</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.youtube.com/watch?v=c2M-rlkkT5o"
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
                    <h2>MongoDB كامل - الشرح الرابع</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح ARCTutorials - MongoDB للمطورين</h3>
                    <p>سلسلة شاملة تغطي MongoDB من البداية للإحتراف</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء الأخير، ستتعلم تقنيات متقدمة في MongoDB مثل الـ
                    Transactions، الـ Replication، الـ Sharding، وأفضل
                    الممارسات.
                  </p>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> ARCTutorials
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> ARCT
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> MongoDB كامل
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
                        src="https://www.youtube.com/embed/Ya0H-7A5cE4?list=PLp50dWW_m40UWFSV6PTgYzciZJIxgHy7Q"
                        title="MongoDB Tutorial - ARCTutorials"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLp50dWW_m40UWFSV6PTgYzciZJIxgHy7Q"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ ARCTutorials</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>بناء نظام إدارة مستخدمين باستخدام MongoDB</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>تطبيق الـ Aggregation Pipeline لتقارير متقدمة</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>تحسين الأداء باستخدام الفهارس المناسبة</p>
                      </div>
                      <div className="step">
                        <span className="step-number">4</span>
                        <p>ربط MongoDB مع تطبيق Node.js كامل</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLp50dWW_m40UWFSV6PTgYzciZJIxgHy7Q"
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
              <h3>دورة MongoDB الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">
                  محمد رمضان، Algorithm Academy، Bro Code، ARCTutorials
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
                  href="https://youtube.com/playlist?list=PLd6o9p13Lc5387FWk_GXU0Rh5AhrBGod5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  محمد رمضان
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLfDx4cQoUNObp1ujQRNooNiadKdlflevM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  Algorithm Academy
                </a>
                <a
                  href="https://www.youtube.com/watch?v=c2M-rlkkT5o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  Bro Code
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLp50dWW_m40UWFSV6PTgYzciZJIxgHy7Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  ARCTutorials
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
