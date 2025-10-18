import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CodeIcon from "@mui/icons-material/Code";

import "../../styles/sql.css";

const lessons = [
  { id: 1, title: "ماذا تحتاج للبدء", icon: "" },
  { id: 2, title: "أساسيات PostgreSQL - الشرح الاول", icon: "" },
  { id: 3, title: "أساسيات PostgreSQL - الشرح الثاني", icon: "" },
  { id: 4, title: "أساسيات PostgreSQL - الشرح الثالث", icon: "" },
];

export default function PostgresqlCourse() {
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
      1: "https://www.youtube.com/watch?v=kb-_GbpH3sQ",
      2: "https://youtube.com/playlist?list=PLqmv-PiN1b7hLJ_2ktdE9YX7Ba_7UZq3f",
      3: "https://youtube.com/playlist?list=PLqmv-PiN1b7hLJ_2ktdE9YX7Ba_7UZq3f",
      4: "https://youtube.com/playlist?list=PL00B5GtBL1kHeJnRHn0SmcGuu2oGHWy1U",
    };
    return urls[activeLesson as keyof typeof urls];
  };

  const handleNextLesson = () => {
    if (activeLesson < lessons.length) setActiveLesson(activeLesson + 1);
  };

  return (
    <div className="postgresql-course-page" dir="rtl">
      <header className="postgresql-course-header">
        <div className="postgresql-course-container">
          <Link to="/courses" className="back-link">
            <ArrowForwardIosIcon
              style={{ transform: "rotate(180deg)", fontSize: 18 }}
            />
            العودة للكورسات
          </Link>
          <div className="postgresql-course-title">
            <h1>PostgreSQL الكامل</h1>
            <p>شرح متكامل لقاعدة البيانات العلائقية المتقدمة - دورة شاملة</p>
          </div>
        </div>
      </header>

      <section className="postgresql-course-main postgresql-course-container">
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
                    قبل أن تبدأ في تعلم PostgreSQL، هناك بعض الأساسيات والأدوات
                    التي تحتاجها للعمل مع قواعد البيانات العلائقية المتقدمة.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>PostgreSQL:</strong>
                        <div className="tool-details">
                          تثبيت PostgreSQL من الموقع الرسمي (الإصدار 14 أو أعلى)
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>pgAdmin:</strong>
                        <div className="tool-details">
                          واجهة رسومية لإدارة قواعد البيانات PostgreSQL
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أساسيات SQL:</strong>
                        <div className="tool-details">
                          فهم أساسيات لغة الاستعلامات البنيوية
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong> VS Code
                        <div className="tool-details">
                          مع إضافات مثل PostgreSQL و SQL Formatter
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
                          <h4>تثبيت PostgreSQL</h4>
                          <p>تحميل وتثبيت PostgreSQL مع جميع المكونات</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>تثبيت pgAdmin</h4>
                          <p>إضافة الواجهة الرسومية لإدارة قواعد البيانات</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>تهيئة قاعدة البيانات</h4>
                          <p>إنشاء أول قاعدة بيانات وتهيئة المستخدمين</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>اختبار البيئة</h4>
                          <p>تشغيل أول استعلام SQL للتأكد من العمل</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>
                        ابدأ بتعلم SQL الأساسي قبل الانتقال للمواضيع المتقدمة
                      </li>
                      <li>استخدم pgAdmin لفهم هيكل قاعدة البيانات بشكل مرئي</li>
                      <li>تدرب على كتابة الاستعلامات البسيطة أولاً</li>
                      <li>افهم الفرق بين PostgreSQL وقواعد البيانات الأخرى</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.postgresql.org/docs/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeIcon />
                      المرجع الرسمي الخاص بـ PostgreSQL
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
                    <h2>أساسيات PostgreSQL - الشرح الاول</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح بالعربي Big Data - SQL لتحليل البيانات</h3>
                    <p>
                      شرح شامل لـ SQL و PostgreSQL مع تطبيقات عملية في تحليل
                      البيانات
                    </p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات PostgreSQL وكيفية استخدامه
                    كقاعدة بيانات علائقية متقدمة مع تطبيقات في تحليل البيانات.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في PostgreSQL:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>ما هو PostgreSQL؟</h4>
                        <p>
                          نظام إدارة قواعد بيانات علائقية متقدم ومفتوح المصدر
                          يدعم SQL بالكامل.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>الجداول والحقول</h4>
                        <p>
                          تخزين البيانات في جداول مرتبطة مع بعضها عبر العلاقات.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>الاستعلامات SQL</h4>
                        <p>استخدام لغة SQL لاسترجاع ومعالجة البيانات.</p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>تهيئة PostgreSQL</strong>
                        <div className="tool-details">
                          التثبيت، الإعداد، وإدارة الخدمة
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أوامر SQL الأساسية</strong>
                        <div className="tool-details">
                          CREATE, SELECT, INSERT, UPDATE, DELETE
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أنواع البيانات</strong>
                        <div className="tool-details">
                          INTEGER, VARCHAR, TEXT, DATE, BOOLEAN وغيرها
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>القيود Constraints</strong>
                        <div className="tool-details">
                          PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>أوامر SQL الأساسية في PostgreSQL:</h3>
                    <pre className="code-block">{`-- إنشاء قاعدة بيانات جديدة
CREATE DATABASE company;

-- الاتصال بقاعدة البيانات
\\c company

-- إنشاء جدول الموظفين
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    salary DECIMAL(10, 2),
    hire_date DATE DEFAULT CURRENT_DATE,
    department_id INTEGER
);

-- إنشاء جدول الأقسام
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    manager_id INTEGER
);

-- إضافة مفتاح خارجي
ALTER TABLE employees 
ADD CONSTRAINT fk_department 
FOREIGN KEY (department_id) 
REFERENCES departments(id);

-- إدخال بيانات في جدول الأقسام
INSERT INTO departments (name) VALUES 
('التطوير'),
('المبيعات'),
('التسويق'),
('الدعم الفني');

-- إدخال بيانات في جدول الموظفين
INSERT INTO employees (first_name, last_name, email, salary, department_id) VALUES 
('أحمد', 'محمد', 'ahmed@company.com', 5000.00, 1),
('فاطمة', 'علي', 'fatima@company.com', 4500.00, 2),
('يوسف', 'خالد', 'youssef@company.com', 6000.00, 1),
('سارة', 'إبراهيم', 'sara@company.com', 4000.00, 3);

-- استعلام بسيط
SELECT * FROM employees;

-- استعلام مع شروط
SELECT first_name, last_name, salary 
FROM employees 
WHERE salary > 4500;

-- استعلام مع JOIN
SELECT e.first_name, e.last_name, d.name as department_name
FROM employees e
JOIN departments d ON e.department_id = d.id;

-- تحديث بيانات
UPDATE employees 
SET salary = salary * 1.1 
WHERE department_id = 1;

-- حذف بيانات
DELETE FROM employees 
WHERE salary < 4000;`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>أنواع البيانات والقيود في PostgreSQL:</h3>
                    <pre className="code-block">{`-- أنواع البيانات الرقمية
CREATE TABLE numeric_types (
    small_int SMALLINT,          -- -32768 to 32767
    integer_col INTEGER,         -- -2147483648 to 2147483647
    big_int BIGINT,              -- -9223372036854775808 to 9223372036854775807
    decimal_col DECIMAL(10,2),   -- أرقام عشرية دقيقة
    real_col REAL,               -- أرقام فاصلة عائمة (6 خانات عشرية)
    double_col DOUBLE PRECISION  -- أرقام فاصلة عائمة (15 خانة عشرية)
);

-- أنواع البيانات النصية
CREATE TABLE text_types (
    char_col CHAR(10),           -- نص بطول ثابت
    varchar_col VARCHAR(100),    -- نص بطول متغير
    text_col TEXT,               -- نص طويل غير محدد الطول
    email VARCHAR(255) CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$')
);

-- أنواع البيانات التاريخية والزمنية
CREATE TABLE date_time_types (
    date_col DATE,               -- تاريخ فقط
    time_col TIME,               -- وقت فقط
    timestamp_col TIMESTAMP,     -- تاريخ ووقت
    timestamp_tz TIMESTAMPTZ,    -- تاريخ ووقت مع المنطقة الزمنية
    interval_col INTERVAL        -- فترة زمنية
);

-- أنواع البيانات الخاصة
CREATE TABLE special_types (
    boolean_col BOOLEAN,         -- true/false
    json_col JSON,               -- بيانات JSON
    jsonb_col JSONB,             -- JSON ثنائي (أسرع)
    array_col INTEGER[],         -- مصفوفة أعداد
    uuid_col UUID                -- معرف فريد عالمي
);

-- القيود Constraints
CREATE TABLE products (
    id SERIAL PRIMARY KEY,                    -- مفتاح أساسي تلقائي
    name VARCHAR(100) NOT NULL,               -- لا يمكن أن يكون NULL
    sku VARCHAR(50) UNIQUE,                   -- قيمة فريدة
    price DECIMAL(10,2) CHECK (price > 0),    -- شرط تحقق
    category_id INTEGER REFERENCES categories(id), -- مفتاح خارجي
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- قيمة افتراضية
);`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> بالعربي Big Data
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> أحمد سامي
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> SQL لتحليل البيانات
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/kb-_GbpH3sQ"
                        title="شرح PostgreSQL - بالعربي Big Data"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/watch?v=kb-_GbpH3sQ"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة الشرح على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ بالعربي Big Data</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.youtube.com/watch?v=kb-_GbpH3sQ"
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
                    <h2>أساسيات PostgreSQL - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح محمد جبريل - PostgreSQL كامل</h3>
                    <p>سلسلة شاملة لتعلم PostgreSQL من البداية حتى الإحتراف</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم تقنيات متقدمة في PostgreSQL مثل الـ
                    Joins، الـ Subqueries، الـ Functions، والاستعلامات المعقدة.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>الـ Joins المتقدمة</strong>
                        <div className="tool-details">
                          INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الاستعلامات الفرعية</strong>
                        <div className="tool-details">
                          Subqueries، EXISTS، IN مع الاستعلامات الفرعية
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الدوال المجمعة</strong>
                        <div className="tool-details">
                          COUNT, SUM, AVG, MAX, MIN مع GROUP BY
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الدوال المضمنة</strong>
                        <div className="tool-details">
                          دوال النصوص، التواريخ، والتحويل
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>الـ Joins والاستعلامات المتقدمة:</h3>
                    <pre className="code-block">{`-- أنواع الـ Joins المختلفة

-- INNER JOIN (العرض فقط عند وجود تطابق)
SELECT e.first_name, e.last_name, d.name as department
FROM employees e
INNER JOIN departments d ON e.department_id = d.id;

-- LEFT JOIN (جميع السجلات من الجدول الأيسر)
SELECT e.first_name, e.last_name, d.name as department
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;

-- RIGHT JOIN (جميع السجلات من الجدول الأيمن)
SELECT e.first_name, e.last_name, d.name as department
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.id;

-- FULL JOIN (جميع السجلات من كلا الجدولين)
SELECT e.first_name, e.last_name, d.name as department
FROM employees e
FULL JOIN departments d ON e.department_id = d.id;

-- CROSS JOIN (المنتج الديكارتي)
SELECT e.first_name, p.product_name
FROM employees e
CROSS JOIN products p;

-- SELF JOIN (ربط الجدول مع نفسه)
SELECT e1.first_name as employee, e2.first_name as manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id;

-- الاستعلامات الفرعية Subqueries
-- استعلام فرعي في WHERE
SELECT first_name, last_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- استعلام فرعي في FROM
SELECT dept_name, avg_salary
FROM (
    SELECT d.name as dept_name, AVG(e.salary) as avg_salary
    FROM departments d
    JOIN employees e ON d.id = e.department_id
    GROUP BY d.name
) as dept_stats
WHERE avg_salary > 5000;

-- استعلام فرعي مع EXISTS
SELECT first_name, last_name
FROM employees e
WHERE EXISTS (
    SELECT 1 
    FROM departments d 
    WHERE d.id = e.department_id 
    AND d.name = 'التطوير'
);

-- استعلام فرعي مع IN
SELECT name
FROM departments
WHERE id IN (
    SELECT DISTINCT department_id 
    FROM employees 
    WHERE salary > 6000
);`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>الدوال المجمعة والمضمنة:</h3>
                    <pre className="code-block">{`-- الدوال المجمعة Aggregate Functions
SELECT 
    COUNT(*) as total_employees,          -- عدد الموظفين
    AVG(salary) as average_salary,        -- متوسط الراتب
    MAX(salary) as max_salary,            -- أعلى راتب
    MIN(salary) as min_salary,            -- أقل راتب
    SUM(salary) as total_salary           -- مجموع الرواتب
FROM employees;

-- GROUP BY مع HAVING
SELECT 
    d.name as department,
    COUNT(*) as employee_count,
    AVG(e.salary) as avg_salary
FROM departments d
JOIN employees e ON d.id = e.department_id
GROUP BY d.name
HAVING AVG(e.salary) > 4500;

-- دوال النصوص String Functions
SELECT 
    first_name,
    UPPER(first_name) as upper_name,      -- تحويل لحروف كبيرة
    LOWER(first_name) as lower_name,      -- تحويل لحروف صغيرة
    LENGTH(first_name) as name_length,    -- طول النص
    CONCAT(first_name, ' ', last_name) as full_name, -- دمج النصوص
    SUBSTRING(email FROM '@(.*)$') as domain -- استخراج جزء من النص
FROM employees;

-- دوال التواريخ Date Functions
SELECT 
    hire_date,
    EXTRACT(YEAR FROM hire_date) as hire_year,   -- استخراج السنة
    EXTRACT(MONTH FROM hire_date) as hire_month, -- استخراج الشهر
    AGE(CURRENT_DATE, hire_date) as employment_duration, -- الفارق الزمني
    hire_date + INTERVAL '1 year' as anniversary -- إضافة فترة
FROM employees;

-- دوال التحويل Conversion Functions
SELECT 
    salary,
    salary::TEXT as salary_text,          -- تحويل لنص
    '5000'::INTEGER as text_to_int,       -- تحويل لعدد
    TO_CHAR(salary, '999,999.99') as formatted_salary, -- تنسيق الأرقام
    TO_DATE('2023-12-25', 'YYYY-MM-DD') as christmas -- تحويل لتاريخ
FROM employees
LIMIT 1;`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> محمد جبريل
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> محمد جبريل
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> PostgreSQL كامل
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/kt5i5UjA69s?list=PLqmv-PiN1b7hLJ_2ktdE9YX7Ba_7UZq3f"
                        title="شرح PostgreSQL - محمد جبريل"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLqmv-PiN1b7hLJ_2ktdE9YX7Ba_7UZq3f"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لمحمد جبريل</span>
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
                    <h2>PostgreSQL متقدم - الشرح الثالث</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح عمر خليل - PostgreSQL System Architecture</h3>
                    <p>فهم البنية التحتية والنظام الداخلي لـ PostgreSQL</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء الأخير، ستتعلم تقنيات متقدمة في PostgreSQL مثل
                    الـ Transactions، الـ Indexes، الـ Views، والـ Stored
                    Procedures.
                  </p>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Omer Khalil
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> عمر خليل
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> PostgreSQL System
                          Architecture
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/s3wO0BdYBgM?list=PL00B5GtBL1kHeJnRHn0SmcGuu2oGHWy1U"
                        title="شرح PostgreSQL - عمر خليل"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PL00B5GtBL1kHeJnRHn0SmcGuu2oGHWy1U"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لعمر خليل</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>تصميم قاعدة بيانات متكاملة لنظام إدارة الموظفين</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>إنشاء الاستعلامات المعقدة والتقارير المتقدمة</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>تحسين الأداء باستخدام الفهارس المناسبة</p>
                      </div>
                      <div className="step">
                        <span className="step-number">4</span>
                        <p>تنفيذ إجراءات مخزنة ومعاملات متقدمة</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PL00B5GtBL1kHeJnRHn0SmcGuu2oGHWy1U"
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
              <h3>دورة PostgreSQL الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">
                  بالعربي Big Data، محمد جبريل، عمر خليل
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
                  href="https://www.youtube.com/watch?v=kb-_GbpH3sQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  بالعربي Big Data
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLqmv-PiN1b7hLJ_2ktdE9YX7Ba_7UZq3f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  محمد جبريل
                </a>
                <a
                  href="https://youtube.com/playlist?list=PL00B5GtBL1kHeJnRHn0SmcGuu2oGHWy1U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  عمر خليل
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
