import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CodeIcon from "@mui/icons-material/Code";

import "../../styles/java.css";

const lessons = [
  { id: 1, title: "ماذا تحتاج للبدء", icon: "" },
  { id: 2, title: "أساسيات Java - الشرح الاول", icon: "" },
  { id: 3, title: "أساسيات Java - الشرح الثاني", icon: "" },
  { id: 4, title: "أساسيات Java - الشرح الثالث", icon: "" },
];

export default function JavaCourse() {
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
      1: "https://youtube.com/playlist?list=PL1DUmTEdeA6K7rdxKiWJq6JIxTvHalY8f",
      2: "https://youtube.com/playlist?list=PL1DUmTEdeA6Icttz-O9C3RPRF8R8Px5vk",
      3: "https://www.youtube.com/embed/ck7dreCJfQM",
      4: "https://youtube.com/playlist?list=PLCInYL3l2AajYlZGzU_LVrHdoouf8W6ZN",
    };
    return urls[activeLesson as keyof typeof urls];
  };

  const handleNextLesson = () => {
    if (activeLesson < lessons.length) setActiveLesson(activeLesson + 1);
  };

  return (
    <div className="java-course-page" dir="rtl">
      <header className="java-course-header">
        <div className="java-course-container">
          <Link to="/courses" className="back-link">
            <ArrowForwardIosIcon
              style={{ transform: "rotate(180deg)", fontSize: 18 }}
            />
            العودة للكورسات
          </Link>
          <div className="java-course-title">
            <h1>أساسيات Java</h1>
            <p>شرح كامل لغة Java من الصفر حتى الاحتراف - دورة متكاملة</p>
          </div>
        </div>
      </header>

      <section className="java-course-main java-course-container">
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
                    قبل أن تبدأ في تعلم Java، هناك بعض الأساسيات والأدوات التي
                    تحتاجها لتجعل رحلتك في برمجة التطبيقات احترافية.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>Java Development Kit (JDK):</strong>
                        <div className="tool-details">
                          أحدث إصدار من JDK (الإصدار 8 أو أعلى)
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong> IntelliJ IDEA أو Eclipse
                        <div className="tool-details">
                          يوصى باستخدام IntelliJ IDEA للبداية
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>نظام تشغيل:</strong>
                        <div className="tool-details">
                          Windows, Mac, أو Linux
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أساسيات البرمجة (اختياري):</strong>
                        <div className="tool-details">
                          مفاهيم البرمجة الأساسية تساعد في الفهم السريع
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
                          <h4>تثبيت JDK</h4>
                          <p>
                            تحميل وتثبيت Java Development Kit من موقع Oracle
                          </p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>تثبيت IDE</h4>
                          <p>تحميل وتثبيت IntelliJ IDEA Community Edition</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>إعداد المشروع</h4>
                          <p>إنشاء مشروع Java جديد في الـ IDE</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>اختبار البيئة</h4>
                          <p>كتابة برنامج Hello World والتأكد من التشغيل</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>ابدأ بالأساسيات ولا تتسرع في المواضيع المتقدمة</li>
                      <li>تدرب على كتابة الكود يدوياً ولا تعتمد على النسخ</li>
                      <li>افهم مفاهيم OOP (البرمجة كائنية التوجه) جيداً</li>
                      <li>استخدم الـ Debugger لفهم تدفق البرنامج</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://dev.java/learn/getting-started/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeIcon />
                      المرجع الخاص بـ Java
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
                    <h2>أساسيات Java - الشرح الاول</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح محمد الدسوقي - Java للمبتدئين</h3>
                    <p>هذا الكورس الشامل لتعليم Java من البداية حتى الإحتراف</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات لغة Java وكيفية استخدامها
                    لبناء التطبيقات. Java هي لغة برمجة قوية تستخدم في تطوير
                    التطبيقات Enterprise والويب والموبايل.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في Java:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>ما هي Java؟</h4>
                        <p>
                          لغة برمجة عالية المستوى، كائنية التوجه، مستقلة عن
                          النظام الأساسي.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>المتغيرات وأنواع البيانات</h4>
                        <p>
                          int, double, String, boolean وأنواع البيانات الأساسية
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>التحكم في التدفق</h4>
                        <p>if, else, switch, while, for</p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>بناء أول برنامج Java</strong>
                        <div className="tool-details">
                          Hello World، structure of Java program
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المتغيرات وأنواع البيانات</strong>
                        <div className="tool-details">
                          primitive types, reference types, type casting
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المعاملات والعوامل</strong>
                        <div className="tool-details">
                          arithmetic, relational, logical operators
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التحكم في التدفق</strong>
                        <div className="tool-details">
                          conditional statements, loops
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>أمثلة على Java الأساسية:</h3>
                    <pre className="code-block">{`// أول برنامج في Java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

// المتغيرات وأنواع البيانات
public class Variables {
    public static void main(String[] args) {
        // أنواع البيانات الأساسية
        int age = 25;
        double salary = 1500.50;
        char grade = 'A';
        boolean isJavaFun = true;
        String name = "أحمد";
        
        // عرض القيم
        System.out.println("الاسم: " + name);
        System.out.println("العمر: " + age);
        System.out.println("الراتب: " + salary);
    }
}

// المعاملات الرياضية
public class Operators {
    public static void main(String[] args) {
        int a = 10, b = 5;
        
        System.out.println("الجمع: " + (a + b));      // 15
        System.out.println("الطرح: " + (a - b));      // 5
        System.out.println("الضرب: " + (a * b));      // 50
        System.out.println("القسمة: " + (a / b));     // 2
        System.out.println("الباقي: " + (a % b));     // 0
    }
}`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>التحكم في التدفق والحلقات:</h3>
                    <pre className="code-block">{`// التحكم في التدفق
public class ControlFlow {
    public static void main(String[] args) {
        int score = 85;
        
        // if-else statement
        if (score >= 90) {
            System.out.println("امتياز");
        } else if (score >= 80) {
            System.out.println("جيد جداً");
        } else if (score >= 70) {
            System.out.println("جيد");
        } else {
            System.out.println("مقبول");
        }
        
        // switch statement
        int day = 3;
        switch(day) {
            case 1:
                System.out.println("السبت");
                break;
            case 2:
                System.out.println("الأحد");
                break;
            case 3:
                System.out.println("الاثنين");
                break;
            default:
                System.out.println("يوم غير معروف");
        }
        
        // الحلقات التكرارية
        // for loop
        for (int i = 1; i <= 5; i++) {
            System.out.println("رقم: " + i);
        }
        
        // while loop
        int count = 1;
        while (count <= 3) {
            System.out.println("العد: " + count);
            count++;
        }
    }
}`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> محمد الدسوقي
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> محمد الدسوقي
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Java للمبتدئين
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/FbviMTJ_vP8?list=PL1DUmTEdeA6K7rdxKiWJq6JIxTvHalY8f"
                        title="شرح Java للمبتدئين - محمد الدسوقي"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PL1DUmTEdeA6K7rdxKiWJq6JIxTvHalY8f"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لمحمد الدسوقي</span>
                    </div>
                  </div>

                  <div className="video-section">
                    <h3>
                      <PlayArrowIcon /> برمجة كائنية التوجه مع Java:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/M3Na5luSx50?list=PL1DUmTEdeA6Icttz-O9C3RPRF8R8Px5vk"
                        title="برمجة كائنية التوجه مع Java - محمد الدسوقي"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PL1DUmTEdeA6Icttz-O9C3RPRF8R8Px5vk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لمحمد الدسوقي</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PL1DUmTEdeA6K7rdxKiWJq6JIxTvHalY8f"
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
                    <h2>أساسيات Java - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح كودر شيار - Java متقدم</h3>
                    <p>استكمال شرح Java بمفاهيم متقدمة وتقنيات حديثة</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم مفاهيم Java المتقدمة مثل المصفوفات،
                    الدوال، البرمجة كائنية التوجه، والتعامل مع الملفات.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>المصفوفات والهياكل</strong>
                        <div className="tool-details">
                          Arrays, ArrayLists, Collections
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الدوال والأساليب</strong>
                        <div className="tool-details">
                          methods, parameters, return values
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>البرمجة كائنية التوجه</strong>
                        <div className="tool-details">
                          classes, objects, inheritance, polymorphism
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>معالجة الاستثناءات</strong>
                        <div className="tool-details">
                          try-catch, exception handling
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>المصفوفات والهياكل في Java:</h3>
                    <pre className="code-block">{`// المصفوفات في Java
public class ArraysExample {
    public static void main(String[] args) {
        // تعريف مصفوفة
        int[] numbers = {1, 2, 3, 4, 5};
        String[] names = {"أحمد", "محمد", "فاطمة"};
        
        // الوصول للعناصر
        System.out.println("العنصر الأول: " + numbers[0]);
        System.out.println("الاسم الثاني: " + names[1]);
        
        // تكرار عبر المصفوفة
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("رقم: " + numbers[i]);
        }
        
        // for-each loop
        for (String name : names) {
            System.out.println("الاسم: " + name);
        }
        
        // مصفوفة ثنائية الأبعاد
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}

// ArrayList
import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> students = new ArrayList<>();
        
        // إضافة عناصر
        students.add("أحمد");
        students.add("محمد");
        students.add("فاطمة");
        
        // الوصول للعناصر
        System.out.println("الطالب الأول: " + students.get(0));
        
        // إزالة عنصر
        students.remove(1);
        
        // حجم ArrayList
        System.out.println("عدد الطلاب: " + students.size());
        
        // التكرار عبر ArrayList
        for (String student : students) {
            System.out.println("طالب: " + student);
        }
    }
}`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>الدوال والبرمجة كائنية التوجه:</h3>
                    <pre className="code-block">{`// الدوال في Java
public class MethodsExample {
    
    // دالة بدون قيمة إرجاع
    public static void greet() {
        System.out.println("مرحباً بالجميع!");
    }
    
    // دالة مع معاملات
    public static void greetPerson(String name) {
        System.out.println("مرحباً " + name);
    }
    
    // دالة مع قيمة إرجاع
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        greet();
        greetPerson("أحمد");
        int result = add(5, 3);
        System.out.println("نتيجة الجمع: " + result);
    }
}

// البرمجة كائنية التوجه
// تعريف class
class Student {
    // attributes (خصائص)
    String name;
    int age;
    double gpa;
    
    // constructor (منشئ)
    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    
    // methods (أساليب)
    public void displayInfo() {
        System.out.println("الاسم: " + name);
        System.out.println("العمر: " + age);
        System.out.println("المعدل: " + gpa);
    }
    
    public boolean isExcellent() {
        return gpa >= 3.5;
    }
}

// استخدام class
public class OOPExample {
    public static void main(String[] args) {
        // إنشاء objects
        Student student1 = new Student("أحمد", 20, 3.8);
        Student student2 = new Student("فاطمة", 22, 3.2);
        
        // استدعاء methods
        student1.displayInfo();
        student2.displayInfo();
        
        System.out.println(student1.name + " ممتاز: " + student1.isExcellent());
        System.out.println(student2.name + " ممتاز: " + student2.isExcellent());
    }
}`}</pre>
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
                          <strong>المحتوى:</strong> Java متقدم وتقنيات حديثة
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/ck7dreCJfQM"
                        title="شرح Java متقدم من كودر شيار"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/embed/ck7dreCJfQM"
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
                    <h2>أساسيات Java - الشرح الثالث</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح عادل نسيم - Java متقدم</h3>
                    <p>إتقان Java بمفاهيم متقدمة وأفضل الممارسات</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء الأخير، ستتعلم تقنيات Java المتقدمة مثل الـ
                    Inheritance، الـ Polymorphism، الـ Interfaces، والتعامل مع
                    الملفات والاستثناءات.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>مفاهيم OOP المتقدمة</strong>
                        <div className="tool-details">
                          inheritance, polymorphism, encapsulation, abstraction
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الواجهات والفئات المجردة</strong>
                        <div className="tool-details">
                          interfaces, abstract classes
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>معالجة الاستثناءات</strong>
                        <div className="tool-details">
                          try-catch-finally, custom exceptions
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التعامل مع الملفات</strong>
                        <div className="tool-details">
                          file I/O, streams, serialization
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> عادل نسيم
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> عادل نسيم
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Java متقدم وتقنيات حديثة
                        </div>
                        <div className="detail-item">
                          <strong>السلسلة:</strong> Java كامل من الصفر للإحتراف
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/mNvJipMTKSM?list=PLCInYL3l2AajYlZGzU_LVrHdoouf8W6ZN"
                        title="شرح Java متقدم من عادل نسيم"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLCInYL3l2AajYlZGzU_LVrHdoouf8W6ZN"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لعادل نسيم</span>
                    </div>
                  </div>

                  <div className="code-example">
                    <h3>مفاهيم OOP المتقدمة:</h3>
                    <pre className="code-block">{`// Inheritance (التوريث)
class Person {
    String name;
    int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void display() {
        System.out.println("الاسم: " + name + ", العمر: " + age);
    }
}

class Student extends Person {
    String studentId;
    double gpa;
    
    public Student(String name, int age, String studentId, double gpa) {
        super(name, age); // استدعاء constructor الأب
        this.studentId = studentId;
        this.gpa = gpa;
    }
    
    @Override
    public void display() {
        super.display();
        System.out.println("رقم الطالب: " + studentId + ", المعدل: " + gpa);
    }
}

// Polymorphism (تعدد الأشكال)
class Animal {
    public void makeSound() {
        System.out.println("الحيوان يصدر صوتاً");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("الكلب ينبح: هوو هوو!");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("القطة تموء: مياوو!");
    }
}

// Interface (واجهة)
interface Drawable {
    void draw();
    double getArea();
}

class Circle implements Drawable {
    double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("رسم دائرة بنصف قطر: " + radius);
    }
    
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

// استخدام الكلاسات
public class AdvancedOOP {
    public static void main(String[] args) {
        // Inheritance
        Student student = new Student("أحمد", 20, "S123", 3.8);
        student.display();
        
        // Polymorphism
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        
        myDog.makeSound();
        myCat.makeSound();
        
        // Interface
        Drawable circle = new Circle(5.0);
        circle.draw();
        System.out.println("مساحة الدائرة: " + circle.getArea());
    }
}`}</pre>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>أنشئ نظام إدارة طلاب باستخدام Java</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>طبق مفاهيم OOP المتقدمة في التصميم</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>استخدم الـ File I/O لحفظ البيانات</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLCInYL3l2AajYlZGzU_LVrHdoouf8W6ZN"
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
              <h3>دورة Java الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">محمد الدسوقي، كودر شيار، عادل نسيم</p>
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
                  href="https://youtube.com/playlist?list=PL1DUmTEdeA6K7rdxKiWJq6JIxTvHalY8f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  محمد الدسوقي - أساسيات
                </a>
                <a
                  href="https://youtube.com/playlist?list=PL1DUmTEdeA6Icttz-O9C3RPRF8R8Px5vk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  محمد الدسوقي - OOP
                </a>
                <a
                  href="https://www.youtube.com/embed/ck7dreCJfQM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  كودر شيار
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLCInYL3l2AajYlZGzU_LVrHdoouf8W6ZN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  عادل نسيم
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
