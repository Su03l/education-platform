import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CodeIcon from "@mui/icons-material/Code";
import "../../styles/typescript.css";

const lessons = [
  { id: 1, title: "ماذا تحتاج للبدء", icon: "" },
  { id: 2, title: "أساسيات TypeScript - الشرح الاول ", icon: "" },
  { id: 3, title: "أساسيات TypeScript - الشرح الثاني ", icon: "" },
  { id: 4, title: "أساسيات TypeScript - الشرح الثالث", icon: "" },
];

export default function TypeScriptCourse() {
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
      2: "https://youtube.com/playlist?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ&si=CiDbrW5mcN-IsP0T",
      3: "https://www.youtube.com/watch?v=fIkRHc2plxE",
      4: "https://youtube.com/playlist?list=PL5gCk5NdNx5_QxWasJ3msGjlpB7hs1-nF&si=MCU2SnMhsX-LYNgR",
    };
    return urls[activeLesson as keyof typeof urls];
  };

  const handleNextLesson = () => {
    if (activeLesson < lessons.length) setActiveLesson(activeLesson + 1);
  };

  return (
    <div className="typescript-course-page" dir="rtl">
      <header className="typescript-course-header">
        <div className="typescript-course-container">
          <Link to="/courses" className="back-link">
            <ArrowForwardIosIcon
              style={{ transform: "rotate(180deg)", fontSize: 18 }}
            />
            العودة للكورسات
          </Link>
          <div className="typescript-course-title">
            <h1>أساسيات TypeScript</h1>
            <p>شرح كامل لغة TypeScript من الصفر حتى الاحتراف - دورة متكاملة</p>
          </div>
        </div>
      </header>

      <section className="typescript-course-main typescript-course-container">
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
                    قبل أن تبدأ في تعلم TypeScript، هناك بعض الأساسيات والأدوات
                    التي تحتاجها لتجعل رحلتك في البرمجة بأسلوب Type-Safe أكثر
                    احترافية.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>معرفة أساسية بـ JavaScript:</strong>
                        <div className="tool-details">
                          يجب أن تكون على دراية بالأسس البرمجية في JavaScript
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Node.js و npm:</strong>
                        <div className="tool-details">
                          لتثبيت TypeScript وإدارة الحزم
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong> Visual Studio Code
                        <div className="tool-details">
                          مع دعم TypeScript المدمج والإضافات المناسبة
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>فهم مفاهيم OOP:</strong>
                        <div className="tool-details">
                          مفاهيم البرمجة كائنية التوجه (اختياري لكن مفيد)
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
                          <h4>تثبيت TypeScript</h4>
                          <p>قم بتثبيت TypeScript globally باستخدام npm</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>إنشاء ملف tsconfig.json</h4>
                          <p>تهيئة إعدادات TypeScript للمشروع</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>إنشاء ملف TypeScript</h4>
                          <p>أنشئ ملف app.ts وابدأ بالبرمجة</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>ترجمة الكود</h4>
                          <p>استخدم tsc لترجمة TypeScript إلى JavaScript</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>افهم الفرق بين TypeScript و JavaScript جيداً</li>
                      <li>تعلم نظام الأنواع (Type System) بشكل متدرج</li>
                      <li>استخدم strict mode للحصول على أفضل ممارسات</li>
                      <li>تدرب على كتابة interfaces و types مخصصة</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.typescriptlang.org/docs/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeIcon />
                      المرجع الرسمي لـ TypeScript
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
                    <span className="icon">📘</span>
                    <h2>أساسيات TypeScript - الشرح الاول </h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح الزيرو - TypeScript كامل من الصفر</h3>
                    <p>
                      هذا الكورس الشامل لتعليم TypeScript من البداية حتى
                      الإحتراف
                    </p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات لغة TypeScript وكيفية
                    استخدامها لإضافة نظام الأنواع القوي لـ JavaScript.
                    TypeScript تجعل كودك أكثر موثوقية.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في TypeScript:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>ما هي TypeScript؟</h4>
                        <p>
                          لغة برمجة مبنية على JavaScript تضيف نظام أنواع ثابت
                          اختياري.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>الأنواع الأساسية</h4>
                        <p>
                          string, number, boolean, array, tuple, enum, any, void
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>الوظائف والأنواع</h4>
                        <p>تحديد أنواع المعاملات والقيم المرجعة للدوال.</p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>الأنواع الأساسية في TypeScript</strong>
                        <div className="tool-details">
                          string, number, boolean, array, tuple, enum
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الوظائف والأنواع</strong>
                        <div className="tool-details">
                          function types, parameters, return types
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Interfaces و Type Aliases</strong>
                        <div className="tool-details">
                          تعريف الأنواع المخصصة والهياكل
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الأنواع المتقدمة</strong>
                        <div className="tool-details">
                          union, intersection, literal types
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>الأنواع الأساسية في TypeScript:</h3>
                    <pre className="code-block">{`// الأنواع الأساسية
let name: string = "أحمد";
let age: number = 25;
let isActive: boolean = true;
let scores: number[] = [95, 87, 92];
let tuple: [string, number] = ["أحمد", 25];

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Blue;

// Any و Unknown
let dynamicValue: any = "يمكن أن يكون أي شيء";
let unknownValue: unknown = "قيمة غير معروفة";

// Void و Never
function logMessage(message: string): void {
    console.log(message);
}

function throwError(message: string): never {
    throw new Error(message);
}`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>الوظائف والأنواع:</h3>
                    <pre className="code-block">{`// أنواع المعاملات والقيم المرجعة
function add(x: number, y: number): number {
    return x + y;
}

// Optional Parameters
function greet(name: string, age?: number): string {
    if (age) {
        return \`مرحباً \${name}، عمرك \${age} سنة\`;
    }
    return \`مرحباً \${name}\`;
}

// Default Parameters
function createUser(name: string, role: string = "user"): object {
    return { name, role };
}

// Arrow Functions مع الأنواع
const multiply = (a: number, b: number): number => a * b;

// Function Types
type MathOperation = (a: number, b: number) => number;
const divide: MathOperation = (a, b) => a / b;`}</pre>
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
                          <strong>المحتوى:</strong> شرح TypeScript كامل من الصفر
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/yUndnE-2osg"
                        title="شرح TypeScript كامل من الزيرو - الجزء الأول"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ&si=CiDbrW5mcN-IsP0T"
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
                    <h2>أساسيات TypeScript - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح أكاديمية ترميز - TypeScript متقدم</h3>
                    <p>استكمال شرح TypeScript بمفاهيم متقدمة وتقنيات حديثة</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم مفاهيم TypeScript المتقدمة مثل الـ
                    Classes، الـ Generics، الـ Decorators، والتعامل مع الـ
                    Modules.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>الكلاسات والـ OOP</strong>
                        <div className="tool-details">
                          classes, inheritance, access modifiers, abstract
                          classes
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الـ Generics</strong>
                        <div className="tool-details">
                          generic functions, interfaces, classes, constraints
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الـ Decorators</strong>
                        <div className="tool-details">
                          class decorators, method decorators, property
                          decorators
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الـ Namespaces والـ Modules</strong>
                        <div className="tool-details">
                          organizing code, import/export, module systems
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>الكلاسات والـ OOP في TypeScript:</h3>
                    <pre className="code-block">{`// الكلاسات الأساسية
class Person {
    // Properties
    name: string;
    age: number;
    
    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    greet(): string {
        return \`مرحباً، أنا \${this.name} وعمري \${this.age} سنة\`;
    }
}

// Inheritance
class Student extends Person {
    studentId: string;
    
    constructor(name: string, age: number, studentId: string) {
        super(name, age);
        this.studentId = studentId;
    }
    
    study(): string {
        return \`\${this.name} يذاكر\`;
    }
}

// Access Modifiers
class BankAccount {
    private balance: number;
    public readonly accountNumber: string;
    
    constructor(accountNumber: string, initialBalance: number = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    public deposit(amount: number): void {
        this.balance += amount;
    }
    
    public getBalance(): number {
        return this.balance;
    }
}`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>الـ Generics في TypeScript:</h3>
                    <pre className="code-block">{`// Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interfaces
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

// Generic Classes
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

// Generic Constraints
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// Using Generics with Arrays
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

// Generic Utility Types
type PartialUser = Partial<{ name: string; age: number }>;
type ReadonlyUser = Readonly<{ name: string; age: number }>;`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>الـ Decorators في TypeScript:</h3>
                    <pre className="code-block">{`// Class Decorator
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;
    
    constructor(message: string) {
        this.greeting = message;
    }
    
    greet() {
        return "مرحباً, " + this.greeting;
    }
}

// Method Decorator
function log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
        console.log(\`استدعاء \${propertyName} بالمعطيات:\`, args);
        return method.apply(this, args);
    };
}

class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}

// Property Decorator
function format(formatString: string) {
    return function (target: any, propertyName: string): any {
        let value = target[propertyName];
        
        const getter = () => value;
        const setter = (newVal: any) => {
            value = formatString + newVal + formatString;
        };
        
        return { get: getter, set: setter };
    };
}`}</pre>
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
                          <strong>المحتوى:</strong> TypeScript متقدم وتقنيات
                          حديثة
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/fIkRHc2plxE"
                        title="شرح TypeScript متقدم من أكاديمية ترميز - الجزء الثاني"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/watch?v=fIkRHc2plxE"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة الشرح الكامل على يوتيوب
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
                    <h2>أساسيات TypeScript - الشرح الثالث</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح Youssef Abbas - TypeScript متقدم</h3>
                    <p>إتقان TypeScript بمفاهيم متقدمة وأفضل الممارسات</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء الأخير، ستتعلم تقنيات TypeScript المتقدمة مثل
                    الـ Advanced Types، الـ Utility Types، الـ Conditional
                    Types، والتكامل مع الـ Frameworks.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>الأنواع المتقدمة</strong>
                        <div className="tool-details">
                          conditional types, mapped types, template literal
                          types
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Utility Types</strong>
                        <div className="tool-details">
                          Partial, Required, Readonly, Pick, Omit, Record
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التكامل مع Frameworks</strong>
                        <div className="tool-details">
                          React, Angular, Vue with TypeScript
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أدوات التطوير</strong>
                        <div className="tool-details">
                          tsconfig, ESLint, Prettier, debugging
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>الأنواع المتقدمة في TypeScript:</h3>
                    <pre className="code-block">{`// Conditional Types
type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ClickEvent = EventName<"click">; // "onClick"
type HoverEvent = EventName<"hover">; // "onHover"

// Key Remapping
type Getters<T> = {
    [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P];
};

interface User {
    name: string;
    age: number;
}

type UserGetters = Getters<User>;
// { getName: () => string; getAge: () => number }`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>Utility Types في TypeScript:</h3>
                    <pre className="code-block">{`// Utility Types الأساسية
interface User {
    name: string;
    age: number;
    email: string;
    active: boolean;
}

// Partial - يجعل جميع الخصائص اختيارية
type PartialUser = Partial<User>;

// Required - يجعل جميع الخصائص مطلوبة
type RequiredUser = Required<User>;

// Readonly - يجعل جميع الخصائص للقراءة فقط
type ReadonlyUser = Readonly<User>;

// Pick - يختار خصائص محددة
type UserNameAndAge = Pick<User, "name" | "age">;

// Omit - يحذف خصائص محددة
type UserWithoutEmail = Omit<User, "email">;

// Record - ينشئ نوع من الخصائص
type PageInfo = Record<"home" | "about" | "contact", { title: string; url: string }>;

// Extract و Exclude
type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"

// NonNullable
type T2 = NonNullable<string | number | undefined>; // string | number`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>التكامل مع React و TypeScript:</h3>
                    <pre className="code-block">{`// React Components مع TypeScript
import React, { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserCardProps {
    user: User;
    onEdit: (user: User) => void;
    onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    
    const handleEdit = () => {
        onEdit(user);
        setIsEditing(false);
    };
    
    return (
        <div className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button onClick={() => setIsEditing(true)}>تعديل</button>
            <button onClick={() => onDelete(user.id)}>حذف</button>
        </div>
    );
};

// Custom Hook مع TypeScript
function useApi<T>(url: string): [T | null, boolean, string | null] {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError('فشل في جلب البيانات');
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, [url]);
    
    return [data, loading, error];
}`}</pre>
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
                          <strong>المحتوى:</strong> TypeScript متقدم وتقنيات
                          حديثة
                        </div>
                        <div className="detail-item">
                          <strong>السلسلة:</strong> TypeScript كامل من الصفر
                          للإحتراف
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/OLa68pOFQJU"
                        title="شرح TypeScript متقدم من Youssef Abbas - الجزء الثالث"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PL5gCk5NdNx5_QxWasJ3msGjlpB7hs1-nF&si=MCU2SnMhsX-LYNgR"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لقناة Youssef Abbas</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>أنشئ تطبيق React كامل باستخدام TypeScript</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>طبق الـ Generics والـ Utility Types بشكل عملي</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>استخدم الـ Advanced Types لتحسين نوعية الكود</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PL5gCk5NdNx5_QxWasJ3msGjlpB7hs1-nF&si=MCU2SnMhsX-LYNgR"
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
              <h3>دورة TypeScript الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">أسامة الزيرو، يعرب، يوسف عباس</p>
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
                  href="https://youtube.com/playlist?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ&si=CiDbrW5mcN-IsP0T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  الزيرو ويب سكول
                </a>
                <a
                  href="https://www.youtube.com/watch?v=fIkRHc2plxE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  أكاديمية ترميز
                </a>
                <a
                  href="https://youtube.com/playlist?list=PL5gCk5NdNx5_QxWasJ3msGjlpB7hs1-nF&si=MCU2SnMhsX-LYNgR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  Youssef Abbas
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
