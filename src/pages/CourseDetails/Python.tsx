import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TerminalIcon from "@mui/icons-material/Terminal";
import "../../styles/python.css";

const lessons = [
  { id: 1, title: "ماذا تحتاج للبدء", icon: "" },
  { id: 2, title: "أساسيات Python - الشرح الاول", icon: "" },
  { id: 3, title: "أساسيات Python - الشرح الثاني", icon: "" },
  { id: 4, title: "أساسيات Python - الشرح الثالث", icon: "" },
];

export default function PythonCourse() {
  const [activeLesson, setActiveLesson] = useState<number>(1);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // هذا التأثير سيعيد التمرير إلى الأعلى عندما يتغير activeLesson
  useEffect(() => {
    // التمرير إلى أعلى الصفحة
    window.scrollTo({ top: 0, behavior: "smooth" });

    // أو التمرير إلى بداية المحتوى الرئيسي
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeLesson]); // يعمل عندما يتغير activeLesson

  const getYouTubeUrl = () => {
    const urls = {
      1: "https://youtube.com/playlist?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&si=FRUuDIrH5iIjAwgo",
      2: "https://youtube.com/playlist?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&si=FRUuDIrH5iIjAwgo",
      3: "https://youtube.com/playlist?list=PLYyqC4bNbCIcxKO_r77w5MN1SRRnnfvNQ&si=-nzFT-5QXgTMuuBR",
      4: "https://www.youtube.com/watch?v=pdsc9SVW-S8",
    };
    return urls[activeLesson as keyof typeof urls];
  };

  const handleNextLesson = () => {
    if (activeLesson < lessons.length) setActiveLesson(activeLesson + 1);
    // لا حاجة لـ scrollTo هنا لأن useEffect سيتولى ذلك
  };

  return (
    <div className="python-course-page" dir="rtl">
      <header className="python-course-header">
        <div className="python-course-container">
          <Link to="/courses" className="back-link">
            <ArrowForwardIosIcon
              style={{ transform: "rotate(180deg)", fontSize: 18 }}
            />
            العودة للكورسات{" "}
          </Link>
          <div className="python-course-title">
            <h1>أساسيات Python</h1>
            <p>شرح كامل لغة Python من الصفر حتى الاحتراف - دورة متكاملة</p>
          </div>
        </div>
      </header>

      <section className="python-course-main python-course-container">
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
                    قبل أن تبدأ في تعلم Python، هناك بعض الأساسيات والأدوات التي
                    تحتاجها لتجعل رحلتك في البرمجة سهلة وممتعة.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>تثبيت Python:</strong>
                        <div className="tool-details">
                          تحميل وتثبيت آخر نسخة من Python من الموقع الرسمي
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong> Visual Studio Code
                        <div className="tool-details">
                          مع إضافات Python مثل Python extension by Microsoft
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>بيئة التطوير:</strong>
                        <div className="tool-details">
                          Terminal أو Command Prompt لتشغيل الأكواد
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>فهم أساسيات البرمجة:</strong>
                        <div className="tool-details">
                          مفاهيم مثل المتغيرات، الشروط، الحلقات (مفيد للمبتدئين)
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
                          <h4>تثبيت Python</h4>
                          <p>قم بتحميل وتثبيت Python من python.org</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>تثبيت VS Code</h4>
                          <p>ثبت Visual Studio Code والإضافات المطلوبة</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>اختبار التثبيت</h4>
                          <p>افتح terminal واكتب python لتتأكد من العمل</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>إنشاء أول ملف</h4>
                          <p>أنشئ ملف hello.py وابدأ البرمجة</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>Python لغة بسيطة وسهلة التعلم للمبتدئين</li>
                      <li>
                        ركز على فهم الأساسيات جيداً قبل الانتقال للمواضيع
                        المتقدمة
                      </li>
                      <li>تدرب على كتابة الأكواد بنفسك ولا تعتمد على النسخ</li>
                      <li>استخدم print() بشكل مكثف لفهم كيفية عمل الكود</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.python.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TerminalIcon />
                      المرجع الكامل ل Python
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
                    <h2>أساسيات Python - الشرح الاول</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح الزيرو - Python كامل من الصفر</h3>
                    <p>
                      هذا الكورس الشامل لتعليم Python من البداية حتى الإحتراف
                    </p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات لغة Python وكيفية استخدامها
                    للبرمجة. Python هي لغة برمجة عالية المستوى وسهلة التعلم.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في Python:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>ما هي Python؟</h4>
                        <p>
                          لغة برمجة عالية المستوى، سهلة التعلم، متعددة
                          الاستخدامات.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>المتغيرات وأنواع البيانات</h4>
                        <p>int, float, str, bool, list, tuple, dict, set</p>
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
                          تعريف المتغيرات، أنواع البيانات الأساسية
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
                          if, elif, else, nested conditions
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الحلقات التكرارية</strong>
                        <div className="tool-details">
                          for loops, while loops, loop control
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>أمثلة على Python الأساسية:</h3>
                    <pre className="code-block">{`# المتغيرات وأنواع البيانات
name = "أحمد"
age = 25
height = 175.5
is_student = True

# أنواع البيانات
numbers = [1, 2, 3, 4, 5]          # قائمة
coordinates = (10, 20)             # tuple
person = {"name": "محمد", "age": 30}  # قاموس
unique_numbers = {1, 2, 3, 4}      # set

# العمليات الحسابية
x = 10
y = 3
print(x + y)   # الجمع: 13
print(x - y)   # الطرح: 7
print(x * y)   # الضرب: 30
print(x / y)   # القسمة: 3.333
print(x // y)  # القسمة الصحيحة: 3
print(x % y)   # باقي القسمة: 1
print(x ** y)  # الأس: 1000

# العمليات المنطقية
a = True
b = False
print(a and b)  # False
print(a or b)   # True
print(not a)    # False`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>التحكم في التدفق والحلقات:</h3>
                    <pre className="code-block">{`# التحكم في التدفق
age = 18

if age < 13:
    print("طفل")
elif age < 18:
    print("مراهق")
elif age < 60:
    print("بالغ")
else:
    print("كبير في السن")

# الحلقات التكرارية
# for loop
fruits = ["تفاح", "موز", "برتقال"]
for fruit in fruits:
    print(fruit)

# while loop
count = 0
while count < 5:
    print(f"العدد: {count}")
    count += 1

# nested loops
for i in range(3):
    for j in range(2):
        print(f"({i}, {j})")

# loop control
for number in range(10):
    if number == 3:
        continue  # تخطي الرقم 3
    if number == 7:
        break     # إيقاف عند الرقم 7
    print(number)`}</pre>
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
                          <strong>المحتوى:</strong> شرح Python كامل من الصفر
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/mvZHDpCHphk"
                        title="شرح Python كامل من الزيرو - الجزء الأول"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&si=FRUuDIrH5iIjAwgo"
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
                    <h2>أساسيات Python - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح أكاديمية ترميز - Python متقدم</h3>
                    <p>استكمال شرح Python بمفاهيم متقدمة وتقنيات حديثة</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم مفاهيم Python المتقدمة مثل الدوال،
                    المصفوفات، القواميس، والتعامل مع الملفات.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>الدوال (Functions)</strong>
                        <div className="tool-details">
                          تعريف الدوال، المعاملات، القيم المرجعة
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الهياكل البيانات المتقدمة</strong>
                        <div className="tool-details">
                          lists, tuples, dictionaries, sets
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>معالجة النصوص</strong>
                        <div className="tool-details">
                          string methods, formatting, manipulation
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التعامل مع الملفات</strong>
                        <div className="tool-details">
                          reading, writing, file handling
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>الدوال في Python:</h3>
                    <pre className="code-block">{`# تعريف الدوال الأساسية
def greet(name):

    return f"مرحباً {name}!"

def calculate_area(length, width):

    return length * width

# استخدام الدوال
message = greet("أحمد")
print(message)  # مرحباً أحمد!

area = calculate_area(5, 3)
print(f"المساحة: {area}")  # المساحة: 15

# Default Parameters
def create_user(name, age=18, city="غير محدد"):

    return {
        "name": name,
        "age": age,
        "city": city
    }

user1 = create_user("محمد")
user2 = create_user("فاطمة", 25, "الرياض")

# *args و **kwargs
def print_info(*args, **kwargs):

    print("الوسائط:", args)
    print("الكلمات المفتاحية:", kwargs)

print_info("أحمد", 25, city="القاهرة", job="مطور")

# Lambda Functions
square = lambda x: x ** 2
print(square(5))  # 25

# List Comprehension مع Lambda
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>الهياكل البيانات المتقدمة:</h3>
                    <pre className="code-block">{`# القوائم (Lists)
fruits = ["تفاح", "موز", "برتقال"]
fruits.append("فراولة")        # إضافة عنصر
fruits.remove("موز")           # إزالة عنصر
fruits.sort()                  # ترتيب القائمة
print(fruits[0])               # الوصول للعنصر الأول

# القواميس (Dictionaries)
person = {
    "name": "أحمد",
    "age": 25,
    "city": "القاهرة",
    "hobbies": ["قراءة", "سباحة"]
}

print(person["name"])          # أحمد
person["job"] = "مطور"         # إضافة مفتاح جديد
print(person.keys())           # طباعة المفاتيح
print(person.values())         # طباعة القيم

# Tuples (غير قابلة للتعديل)
coordinates = (10, 20)
x, y = coordinates             # Unpacking
print(f"X: {x}, Y: {y}")

# Sets (مجموعات فريدة)
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

union_set = set1 | set2        # الاتحاد
intersection_set = set1 & set2 # التقاطع
difference_set = set1 - set2   # الفرق

# List Comprehensions
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = [x for x in numbers if x % 2 == 0]
squared_numbers = [x**2 for x in numbers]

print(even_numbers)    # [2, 4, 6, 8, 10]
print(squared_numbers) # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>معالجة النصوص والتعامل مع الملفات:</h3>
                    <pre className="code-block">{`# معالجة النصوص
text = "مرحباً بكم في عالم Python"

print(text.upper())           # تحويل لحروف كبيرة
print(text.lower())           # تحويل لحروف صغيرة
print(text.split())           # تقسيم النص
print(len(text))              # طول النص
print(text.replace("Python", "البرمجة"))

# f-strings (Python 3.6+)
name = "أحمد"
age = 25
message = f"الاسم: {name}, العمر: {age}"
print(message)

# التعامل مع الملفات
# كتابة ملف
with open("example.txt", "w", encoding="utf-8") as file:
    file.write("مرحباً بالعالم!\\n")
    file.write("هذا مثال على الكتابة في ملف\\n")

# قراءة ملف
with open("example.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)

# قراءة سطر بسطر
with open("example.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())

# إضافة محتوى لملف موجود
with open("example.txt", "a", encoding="utf-8") as file:
    file.write("تمت إضافة هذا السطر\\n")`}</pre>
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
                          <strong>المحتوى:</strong> Python متقدم وتقنيات حديثة
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/Yv_QhRp95lk"
                        title="شرح Python متقدم من أكاديمية ترميز - الجزء الثاني"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLYyqC4bNbCIcxKO_r77w5MN1SRRnnfvNQ&si=-nzFT-5QXgTMuuBR"
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
                    <h2>أساسيات Python - الشرح الثالث</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح منصة صحيح - Python متقدم</h3>
                    <p>إتقان Python بمفاهيم متقدمة وأفضل الممارسات</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء الأخير، ستتعلم تقنيات Python المتقدمة مثل الـ
                    OOP، الـ Modules، الـ Error Handling، والتكامل مع المكتبات.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>البرمجة كائنية التوجه (OOP)</strong>
                        <div className="tool-details">
                          classes, objects, inheritance, polymorphism
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>معالجة الأخطاء</strong>
                        <div className="tool-details">
                          try, except, finally, custom exceptions
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الوحدات والمكتبات</strong>
                        <div className="tool-details">
                          import, modules, packages, pip
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>مكتبات Python الشهيرة</strong>
                        <div className="tool-details">
                          requests, pandas, numpy, matplotlib
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>البرمجة كائنية التوجه (OOP):</h3>
                    <pre className="code-block">{`# تعريف الكلاس الأساسي
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"مرحباً، أنا {self.name} وعمري {self.age} سنة"
    
    def have_birthday(self):
        self.age += 1
        return f"عيد ميلاد سعيد! الآن عمري {self.age}"

# إنشاء كائنات
person1 = Person("أحمد", 25)
print(person1.greet())  # مرحباً، أنا أحمد وعمري 25 سنة

# Inheritance
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
        self.courses = []
    
    def enroll(self, course):
        self.courses.append(course)
        return f"تم التسجيل في {course}"
    
    def get_courses(self):
        return self.courses

# استخدام الكلاس الموروث
student1 = Student("فاطمة", 20, "S12345")
print(student1.greet())  # مرحباً، أنا فاطمة وعمري 20 سنة
student1.enroll("الرياضيات")
student1.enroll("الفيزياء")
print(student1.get_courses())  # ['الرياضيات', 'الفيزياء']

# Polymorphism
class Teacher(Person):
    def __init__(self, name, age, subject):
        super().__init__(name, age)
        self.subject = subject
    
    def greet(self):
        return f"أنا الأستاذ {self.name} وأدرس {self.subject}"

teacher1 = Teacher("محمد", 35, "البرمجة")
print(teacher1.greet())  # أنا الأستاذ محمد وأدرس البرمجة`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>معالجة الأخطاء:</h3>
                    <pre className="code-block">{`# معالجة الأخطاء الأساسية
try:
    number = int(input("أدخل رقم: "))
    result = 10 / number
    print(f"الناتج: {result}")
except ValueError:
    print("خطأ: يجب إدخال رقم صحيح")
except ZeroDivisionError:
    print("خطأ: لا يمكن القسمة على صفر")
except Exception as e:
    print(f"حدث خطأ غير متوقع: {e}")
else:
    print("تمت العملية بنجاح")
finally:
    print("هذا السطر ينفذ دائماً")

# Custom Exceptions
class AgeError(Exception):
    
    def __init__(self, age, message="العمر غير صحيح"):
        self.age = age
        self.message = message
        super().__init__(self.message)
    
    def __str__(self):
        return f"{self.message}: {self.age}"

def validate_age(age):
    if age < 0 or age > 150:
        raise AgeError(age, "العمر يجب أن يكون بين 0 و 150")
    return True

# استخدام الاستثناء المخصص
try:
    validate_age(200)
except AgeError as e:
    print(e)  # العمر يجب أن يكون بين 0 و 150: 200

# Context Managers
class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        self.file = open(self.filename, self.mode, encoding="utf-8")
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()

# استخدام Context Manager
with FileManager("data.txt", "w") as f:
    f.write("بيانات الاختبار")`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>الوحدات والمكتبات:</h3>
                    <pre className="code-block">{`# استخدام المكتبات المدمجة
import math
import random
import datetime
import os

print(math.sqrt(16))           # 4.0
print(random.randint(1, 10))   # رقم عشوائي
print(datetime.datetime.now()) # التاريخ والوقت الحالي

# استخدام pip libraries
# pip install requests
import requests

def get_weather(city):
    try:
        # مثال بسيط (في الواقع تحتاج API key)
        response = requests.get(f"https://api.example.com/weather/{city}")
        response.raise_for_status()
        data = response.json()
        return data
    except requests.RequestException as e:
        return f"خطأ في جلب البيانات: {e}"

# مكتبات البيانات
import pandas as pd
import numpy as np

# إنشاء DataFrame
data = {
    'الاسم': ['أحمد', 'فاطمة', 'محمد'],
    'العمر': [25, 22, 30],
    'المدينة': ['القاهرة', 'الرياض', 'دبي']
}

df = pd.DataFrame(data)
print(df)

# العمليات على البيانات
print(df['العمر'].mean())      # متوسط العمر
print(df[df['العمر'] > 25])    # الأشخاص أكبر من 25 سنة

# مكتبات الرسم
import matplotlib.pyplot as plt

# مثال بسيط للرسم
ages = [25, 22, 30, 35, 28]
names = ['أحمد', 'فاطمة', 'محمد', 'خالد', 'نورة']

plt.bar(names, ages)
plt.title('توزيع الأعمار')
plt.xlabel('الأسماء')
plt.ylabel('الأعمار')
plt.show()`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> منصة صحيح
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> منصة صحيح
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Python متقدم وتقنيات حديثة
                        </div>
                        <div className="detail-item">
                          <strong>السلسلة:</strong> Python كامل من الصفر
                          للإحتراف
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/pdsc9SVW-S8"
                        title="شرح Python متقدم من منصة صحيح - الجزء الثالث"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/watch?v=pdsc9SVW-S8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة الشرح الكامل على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لمنصة صحيح</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>أنشئ نظام إدارة موظفين باستخدام OOP</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>طبق معالجة الأخطاء والتعامل مع الملفات</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>استخدم مكتبات خارجية لتحليل البيانات</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.youtube.com/watch?v=pdsc9SVW-S8"
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
              <h3>دورة Python الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">أسامة الزيرو، يعرب، منصة صحيح</p>
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
                  href="https://youtube.com/playlist?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&si=FRUuDIrH5iIjAwgo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  الزيرو ويب سكول
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLYyqC4bNbCIcxKO_r77w5MN1SRRnnfvNQ&si=-nzFT-5QXgTMuuBR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  أكاديمية ترميز
                </a>
                <a
                  href="https://www.youtube.com/watch?v=pdsc9SVW-S8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  منصة صحيح
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
