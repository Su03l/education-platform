import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CodeIcon from "@mui/icons-material/Code";

import "../../styles/cpp.css";

const lessons = [
  { id: 1, title: "مقدمة في لغة C++", icon: "" },
  { id: 2, title: "أساسيات C++ - الشرح الأول", icon: "" },
  { id: 3, title: "أساسيات C++ - الشرح الثاني", icon: "" },
  { id: 4, title: "أساسيات C++ - الشرح الثالث", icon: "" },
];

export default function CppCourse() {
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
      1: "https://youtube.com/playlist?list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS",
      2: "https://youtube.com/playlist?list=PLnzqK5HvcpwQ_nQt-hKGAEIDJjTJBCV02",
      3: "https://youtube.com/playlist?list=PLnzqK5HvcpwQ_nQt-hKGAEIDJjTJBCV02",
      4: "https://www.youtube.com/watch?v=M_DD16C2C64",
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
            <h1>C++ الكامل</h1>
            <p>شرح متكامل للغة البرمجة القوية - دورة شاملة</p>
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
                    <h2>مقدمة في لغة C++</h2>
                  </div>

                  <p className="lesson-text">
                    C++ هي لغة برمجة قوية ومتعددة الاستخدامات، تجمع بين برمجة
                    الأنظمة عالية الأداء وميزات البرمجة كائنية التوجه. تستخدم في
                    تطوير الألعاب، أنظمة التشغيل، والتطبيقات الحرجة.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>مترجم C++:</strong>
                        <div className="tool-details">
                          GCC, Clang, أو Visual C++ Compiler
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>بيئة التطوير:</strong>
                        <div className="tool-details">
                          Visual Studio Code, Visual Studio, أو Code::Blocks
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أساسيات البرمجة:</strong>
                        <div className="tool-details">
                          فهم أساسيات الخوارزميات والمنطق البرمجي
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>نظام التشغيل:</strong>
                        <div className="tool-details">
                          Windows, Linux, أو macOS
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
                          <h4>تثبيت المترجم</h4>
                          <p>تحميل وتثبيت GCC أو MinGW على Windows</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>تثبيت VS Code</h4>
                          <p>تثبيت Visual Studio Code مع إضافات C++</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>تهيئة المشروع</h4>
                          <p>إنشاء أول مشروع C++ وتهيئة بيئة التطوير</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>اختبار البيئة</h4>
                          <p>كتابة أول برنامج "Hello World" وتشغيله</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>افهم أساسيات البرمجة قبل التعمق في C++</li>
                      <li>تدرب على كتابة الأكواد يدوياً ولا تعتمد على النسخ</li>
                      <li>تعلم debugging لتحديد الأخطاء وإصلاحها</li>
                      <li>ابدأ بالمشاريع البسيطة ثم تدرج نحو المعقدة</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://isocpp.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeIcon />
                      الموقع الرسمي لـ C++
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
                    <h2>أساسيات C++ - الشرح الأول</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح الزيرو ويب سكول</h3>
                    <p>سلسلة شاملة لتعلم أساسيات البرمجة بلغة C++</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات لغة C++ من خلال شرح الاستاذ
                    اسامة الزيرو، بما في ذلك المتغيرات، الجمل الشرطية، الحلقات
                    التكرارية، والدوال.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في C++:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>المتغيرات وأنواع البيانات</h4>
                        <p>تعريف المتغيرات وأنواع البيانات المختلفة في C++.</p>
                      </div>
                      <div className="concept-card">
                        <h4>الجمل الشرطية</h4>
                        <p>استخدام if, else, switch للتحكم في تدفق البرنامج.</p>
                      </div>
                      <div className="concept-card">
                        <h4>الحلقات التكرارية</h4>
                        <p>استخدام for, while, do-while للتكرار.</p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>تركيب البرنامج الأساسي</strong>
                        <div className="tool-details">
                          main function، المكتبات، والتعليقات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المتغيرات وأنواع البيانات</strong>
                        <div className="tool-details">
                          int, float, double, char, bool, string
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
                        <strong>الدوال Functions</strong>
                        <div className="tool-details">
                          إنشاء واستدعاء الدوال، المعاملات، والقيم المرجعة
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>أساسيات C++ - أمثلة عملية:</h3>
                    <pre className="code-block">{`#include <iostream>
#include <string>
using namespace std;

// الدالة الرئيسية
int main() {
    // المتغيرات وأنواع البيانات
    int age = 25;
    double salary = 1500.75;
    char grade = 'A';
    string name = "أحمد";
    bool isEmployed = true;
    
    // عرض البيانات
    cout << "الاسم: " << name << endl;
    cout << "العمر: " << age << endl;
    cout << "الراتب: " << salary << endl;
    cout << "التقدير: " << grade << endl;
    cout << "موظف: " << (isEmployed ? "نعم" : "لا") << endl;
    
    // الجمل الشرطية
    if (age >= 18) {
        cout << "أنت بالغ" << endl;
    } else {
        cout << "أنت قاصر" << endl;
    }
    
    // if elseif else
    if (salary > 2000) {
        cout << "راتب ممتاز" << endl;
    } else if (salary > 1000) {
        cout << "راتب جيد" << endl;
    } else {
        cout << "راتب يحتاج تحسين" << endl;
    }
    
    // switch case
    switch (grade) {
        case 'A':
            cout << "ممتاز!" << endl;
            break;
        case 'B':
            cout << "جيد جداً" << endl;
            break;
        case 'C':
            cout << "جيد" << endl;
            break;
        default:
            cout << "يحتاج تحسين" << endl;
    }
    
    // الحلقات التكرارية
    // for loop
    cout << "\\nأرقام من 1 إلى 5:" << endl;
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // while loop
    int counter = 1;
    cout << "\\nأرقام من 1 إلى 3 باستخدام while:" << endl;
    while (counter <= 3) {
        cout << counter << " ";
        counter++;
    }
    cout << endl;
    
    // do while loop
    int number = 1;
    cout << "\\nأرقام من 1 إلى 3 باستخدام do-while:" << endl;
    do {
        cout << number << " ";
        number++;
    } while (number <= 3);
    cout << endl;
    
    // المصفوفات Arrays
    int numbers[5] = {1, 2, 3, 4, 5};
    cout << "\\nعناصر المصفوفة:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    // استدعاء دالة
    int result = add(10, 5);
    cout << "\\nنتيجة جمع 10 + 5 = " << result << endl;
    
    return 0;
}

// تعريف دالة خارج main
int add(int a, int b) {
    return a + b;
}`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>المعاملات والدوال في C++:</h3>
                    <pre className="code-block">{`#include <iostream>
#include <cmath>
using namespace std;

// دالة بدون قيمة مرجعة
void greet(string name) {
    cout << "مرحباً " << name << "!" << endl;
}

// دالة مع قيمة مرجعة
double calculateCircleArea(double radius) {
    return 3.14159 * radius * radius;
}

// دالة مع معاملات افتراضية
void printInfo(string name, int age = 25, string city = "غير محدد") {
    cout << "الاسم: " << name << endl;
    cout << "العمر: " << age << endl;
    cout << "المدينة: " << city << endl;
}

// دالة تعيد أكثر من قيمة باستخدام references
void calculate(int a, int b, int &sum, int &product) {
    sum = a + b;
    product = a * b;
}

// دالة تعيد أكثر من قيمة باستخدام pointers
void swapNumbers(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    // المعاملات الحسابية
    int x = 15, y = 4;
    cout << "x + y = " << (x + y) << endl;  // 19
    cout << "x - y = " << (x - y) << endl;  // 11
    cout << "x * y = " << (x * y) << endl;  // 60
    cout << "x / y = " << (x / y) << endl;  // 3
    cout << "x % y = " << (x % y) << endl;  // 3
    
    // المعاملات المنطقية
    bool a = true, b = false;
    cout << "a && b = " << (a && b) << endl;  // false
    cout << "a || b = " << (a || b) << endl;  // true
    cout << "!a = " << (!a) << endl;          // false
    
    // المعاملات المقارنة
    cout << "x == y = " << (x == y) << endl;  // false
    cout << "x != y = " << (x != y) << endl;  // true
    cout << "x > y = " << (x > y) << endl;    // true
    cout << "x < y = " << (x < y) << endl;    // false
    
    // استدعاء الدوال
    greet("محمد");
    
    double area = calculateCircleArea(5.0);
    cout << "مساحة الدائرة: " << area << endl;
    
    printInfo("أحمد");
    printInfo("فاطمة", 30, "الرياض");
    
    int num1 = 10, num2 = 20;
    int sum, product;
    calculate(num1, num2, sum, product);
    cout << "المجموع: " << sum << ", الناتج: " << product << endl;
    
    cout << "قبل التبديل: num1 = " << num1 << ", num2 = " << num2 << endl;
    swapNumbers(&num1, &num2);
    cout << "بعد التبديل: num1 = " << num1 << ", num2 = " << num2 << endl;
    
    // دوال الرياضيات من مكتبة cmath
    cout << "الجذر التربيعي لـ 16: " << sqrt(16) << endl;
    cout << "2^3: " << pow(2, 3) << endl;
    cout << "القيمة المطلقة لـ -5: " << abs(-5) << endl;
    
    return 0;
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
                          <strong>المدرس:</strong> اسامة الزيرو
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> أساسيات البرمجة بـ C++
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/XDuWyYxksXU?list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS"
                        title="أساسيات C++ - الزيرو ويب سكول"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS"
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
                      href="https://youtube.com/playlist?list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS"
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
                    <h2>أساسيات C++ - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح محمد شوشان</h3>
                    <p>أفضل مقدمة لبداية أساسيات البرمجة وفهم صحيح</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم C++ من خلال شرح الاستاذ محمد شوشان مع
                    تركيز على فهم الأساسيات البرمجية بشكل صحيح ومنهجي.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>المؤشرات Pointers</strong>
                        <div className="tool-details">
                          فهم الذاكرة والعناوين في C++
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المراجع References</strong>
                        <div className="tool-details">
                          استخدام المراجع كبديل للمؤشرات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>إدارة الذاكرة</strong>
                        <div className="tool-details">
                          new, delete، والذاكرة الديناميكية
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الهياكل Structures</strong>
                        <div className="tool-details">
                          تجميع البيانات ذات الصلة معاً
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>المؤشرات والهياكل في C++:</h3>
                    <pre className="code-block">{`#include <iostream>
#include <string>
using namespace std;

// تعريف هيكل
struct Student {
    string name;
    int age;
    double gpa;
    string major;
};

// دالة تأخذ هيكل كمعامل
void printStudent(const Student &student) {
    cout << "اسم الطالب: " << student.name << endl;
    cout << "العمر: " << student.age << endl;
    cout << "المعدل: " << student.gpa << endl;
    cout << "التخصص: " << student.major << endl;
}

// دالة تعدل بيانات الهيكل
void updateGPA(Student &student, double newGPA) {
    student.gpa = newGPA;
}

int main() {
    // المؤشرات الأساسية
    int number = 42;
    int *ptr = &number;
    
    cout << "قيمة number: " << number << endl;
    cout << "عنوان number: " << &number << endl;
    cout << "قيمة ptr: " << ptr << endl;
    cout << "قيمة *ptr: " << *ptr << endl;
    
    // تغيير القيمة عبر المؤشر
    *ptr = 100;
    cout << "قيمة number بعد التغيير: " << number << endl;
    
    // مؤشرات مع المصفوفات
    int numbers[5] = {1, 2, 3, 4, 5};
    int *arrPtr = numbers;
    
    cout << "\\nعناصر المصفوفة باستخدام المؤشر:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << *(arrPtr + i) << " ";
    }
    cout << endl;
    
    // الذاكرة الديناميكية
    int *dynamicArray = new int[3];
    dynamicArray[0] = 10;
    dynamicArray[1] = 20;
    dynamicArray[2] = 30;
    
    cout << "\\nالمصفوفة الديناميكية:" << endl;
    for (int i = 0; i < 3; i++) {
        cout << dynamicArray[i] << " ";
    }
    cout << endl;
    
    // تحرير الذاكرة
    delete[] dynamicArray;
    
    // استخدام الهياكل
    Student student1;
    student1.name = "أحمد";
    student1.age = 20;
    student1.gpa = 3.8;
    student1.major = "علوم الحاسب";
    
    Student student2 = {"فاطمة", 22, 3.9, "الهندسة"};
    
    cout << "\\nبيانات الطالب الأول:" << endl;
    printStudent(student1);
    
    cout << "\\nبيانات الطالب الثاني:" << endl;
    printStudent(student2);
    
    // تعديل بيانات الهيكل
    updateGPA(student1, 4.0);
    cout << "\\nبعد تحديث المعدل:" << endl;
    printStudent(student1);
    
    // مصفوفة من الهياكل
    Student students[3] = {
        {"يوسف", 21, 3.5, "الرياضيات"},
        {"سارة", 19, 3.7, "الفيزياء"},
        {"خالد", 23, 3.6, "الكيمياء"}
    };
    
    cout << "\\nجميع الطلاب:" << endl;
    for (int i = 0; i < 3; i++) {
        cout << "الطالب " << i + 1 << ":" << endl;
        printStudent(students[i]);
        cout << endl;
    }
    
    // مؤشرات مع الهياكل
    Student *studentPtr = &student1;
    cout << "الوصول للهيكل عبر المؤشر:" << endl;
    cout << "الاسم: " << studentPtr->name << endl;
    cout << "العمر: " << studentPtr->age << endl;
    
    return 0;
}`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> محمد شوشان
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> محمد شوشان
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> C++ Level 1
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/oKA0aq4BdiY?list=PLnzqK5HvcpwQ_nQt-hKGAEIDJjTJBCV02"
                        title="C++ للمبتدئين - محمد شوشان"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLnzqK5HvcpwQ_nQt-hKGAEIDJjTJBCV02"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لمحمد شوشان</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href={getYouTubeUrl()}
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
                    <h2>أساسيات C++ - الشرح الثالث</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح راكوان للبرمجة - CodeRK</h3>
                    <p>تعلم C++ في فيديو واحد شامل لمدة 3 ساعات</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء الأخير، ستتعلم C++ بشكل مكثف وشامل من خلال
                    فيديو واحد لمدة 3 ساعات يغطي جميع الأساسيات والمفاهيم
                    المهمة.
                  </p>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> راكوان للبرمجة
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> راكون
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> C++ كامل في فيديو واحد
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/M_DD16C2C64"
                        title="C++ كامل في فيديو واحد - راكوان للبرمجة"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/watch?v=M_DD16C2C64"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة الفيديو الكامل على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ راكوان للبرمجة</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>بناء نظام إدارة الطلاب باستخدام الهياكل</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>تطوير آلة حاسبة علمية متقدمة</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>إنشاء نظام إدارة المهام اليومية</p>
                      </div>
                      <div className="step">
                        <span className="step-number">4</span>
                        <p>برنامج لإدارة المخزون باستخدام الملفات</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.youtube.com/watch?v=M_DD16C2C64"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon /> مشاهدة الفيديو الكامل
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
              <h3>دورة C++ الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">
                  الزيرو ويب سكول، محمد شوشان، راكوان للبرمجة
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
                  href="https://youtube.com/playlist?list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  الزيرو ويب سكول
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLnzqK5HvcpwQ_nQt-hKGAEIDJjTJBCV02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  محمد شوشان
                </a>
                <a
                  href="https://www.youtube.com/watch?v=M_DD16C2C64"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  راكوان للبرمجة
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
