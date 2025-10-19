import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import "../../styles/react.css";
import { Helmet } from "react-helmet";

const lessons = [
  { id: 1, title: "ماذا تحتاج للبدء", icon: "" },
  { id: 2, title: "أساسيات React - الشرح الاول ", icon: "" },
  { id: 3, title: "أساسيات React - الشرح الثاني", icon: "" },
  { id: 4, title: "أساسيات React - الشرح الثالث", icon: "" },
];

export default function ReactCoursePage() {
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
      1: "https://youtube.com/playlist?list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&si=V_pXeDCsaWVqbDLn",
      2: "https://youtube.com/playlist?list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&si=V_pXeDCsaWVqbDLn",
      3: "https://youtube.com/playlist?list=PLpr1Lg_f0v3ojNKR4WzZ_SEXhiKBHDQmB&si=N223XLXVgsnbRye5",
      4: "https://youtube.com/playlist?list=PLxRKoQzM5m3LhmXA4b9FwuuUFzRnJCzoe&si=kwX1kS4nrl9OCl9L",
    };
    return urls[activeLesson as keyof typeof urls];
  };

  const handleNextLesson = () => {
    if (activeLesson < lessons.length) setActiveLesson(activeLesson + 1);
  };

  return (
    <div className="react-course-page" dir="rtl">
      <Helmet>
        <title>كورس React JS للمبتدئين | Edu Platform</title>
        <meta name="description" content="تعلم React JS خطوة بخطوة لبناء تطبيقات ويب احترافية. مسار متكامل من الصفر للاحتراف." />
        <meta name="keywords" content="React, تعلم React, كورسات برمجة, تطوير واجهات, JavaScript" />
        <link rel="canonical" href="https://edu-platform.netlify.app/courses/react" />
        <meta property="og:title" content="كورس React JS للمبتدئين | Edu Platform" />
        <meta property="og:description" content="تعلم React JS خطوة بخطوة لبناء تطبيقات ويب احترافية. مسار متكامل من الصفر للاحتراف." />
        <meta property="og:image" content="https://edu-platform.netlify.app/preview.png" />
        <meta property="og:url" content="https://edu-platform.netlify.app/courses/react" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "Course",
            "name": "كورس React JS للمبتدئين",
            "description": "تعلم React JS خطوة بخطوة لبناء تطبيقات ويب احترافية. مسار متكامل من الصفر للاحتراف.",
            "provider": {
              "@type": "Organization",
              "name": "Edu Platform",
              "url": "https://edu-platform.netlify.app/"
            }
          }
          `}
        </script>
      </Helmet>
      <header className="react-course-header">
        <div className="react-course-container">
          <Link to="/courses" className="back-link">
            <ArrowForwardIosIcon
              style={{ transform: "rotate(180deg)", fontSize: 18 }}
            />
            العودة للكورسات
          </Link>
          <div className="react-course-title">
            <h1>أساسيات React</h1>
            <p>شرح كامل مكتبة React من الصفر حتى الاحتراف - دورة متكاملة</p>
          </div>
        </div>
      </header>

      <section className="react-course-main react-course-container">
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
                    قبل أن تبدأ في تعلم React، هناك بعض الأساسيات والأدوات التي
                    تحتاجها لتجعل رحلتك في تطوير واجهات المستخدم أكثر احترافية.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>معرفة قوية بـ JavaScript:</strong>
                        <div className="tool-details">
                          ES6+ features, arrow functions, destructuring, modules
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>معرفة أساسية بـ HTML و CSS:</strong>
                        <div className="tool-details">
                          هيكل الصفحات وتنسيقها
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Node.js و npm:</strong>
                        <div className="tool-details">
                          لإدارة الحزم وتشغيل مشاريع React
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong> Visual Studio Code
                        <div className="tool-details">
                          مع إضافات React مثل ES7+ React/Redux/React-Native
                          snippets
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
                            قم بتحميل وتثبيت آخر نسخة من Node.js من الموقع
                            الرسمي
                          </p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>إنشاء مشروع React</h4>
                          <p>استخدم Create React App لإنشاء مشروع جديد</p>
                          <p>استعمل الامر npx create-react-app [اسم المشروع]</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>تثبيت الإضافات</h4>
                          <p>ثبت إضافات VS Code الخاصة بـ React</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>بدء التطوير</h4>
                          <p>ابدأ بكتابة أول component في React</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>
                        افهم مفهوم Components و JSX جيداً قبل الانتقال للمواضيع
                        المتقدمة
                      </li>
                      <li>
                        تدرب على استخدام useState و useEffect فهما أساسيان
                      </li>
                      <li>تعلم React Hooks قبل Class Components</li>
                      <li>استخدم React Developer Tools للمتصفح</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://react.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IntegrationInstructionsIcon />
                      المرجع الكامل ل React
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
                    <h2>أساسيات React - الشرح الاول</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح أكاديمية ترميز - React كامل من الصفر</h3>
                    <p>
                      هذا الكورس الشامل لتعليم React من البداية حتى الإحتراف
                    </p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات مكتبة React وكيفية
                    استخدامها لبناء واجهات مستخدم تفاعلية وقابلة لإعادة
                    الاستخدام.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في React:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>ما هي React؟</h4>
                        <p>
                          مكتبة JavaScript لبناء واجهات المستخدم، تركز على مفهوم
                          المكونات.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>JSX</h4>
                        <p>
                          صيغة شبيهة بـ HTML تسمح بكتابة markup داخل JavaScript.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>المكونات (Components)</h4>
                        <p>
                          وحدات مستقلة قابلة لإعادة الاستخدام تبني واجهة
                          المستخدم.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>إنشاء أول تطبيق React</strong>
                        <div className="tool-details">
                          Create React App, project structure, first component
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>JSX و Virtual DOM</strong>
                        <div className="tool-details">
                          JSX syntax, expressions, conditional rendering
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المكونات والخصائص (Props)</strong>
                        <div className="tool-details">
                          Functional components, props, prop types
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الحالة والحدث (State & Events)</strong>
                        <div className="tool-details">
                          useState hook, event handling, forms
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>أمثلة على React الأساسية:</h3>
                    <pre className="code-block">{`// مكون وظيفي بسيط
function Welcome(props) {
    return <h1>مرحباً، {props.name}!</h1>;
}

// استخدام JSX مع JavaScript expressions
function UserCard({ user, age }) {
    return (
        <div className="user-card">
            <h2>{user.name}</h2>
            <p>العمر: {age}</p>
            <p>البريد: {user.email}</p>
        </div>
    );
}

// Conditional Rendering
function Greeting({ isLoggedIn, username }) {
    return (
        <div>
            {isLoggedIn ? (
                <h1>مرحباً بعودتك، {username}!</h1>
            ) : (
                <h1>يرجى تسجيل الدخول</h1>
            )}
        </div>
    );
}

// List Rendering
function UserList({ users }) {
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
    );
}`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>useState و Event Handling:</h3>
                    <pre className="code-block">{`import { useState } from 'react';

// Counter Component
function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    
    return (
        <div className="counter">
            <h2>العداد: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>إعادة تعيين</button>
        </div>
    );
}

// Form Handling
function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('بيانات النموذج:', formData);
        // إرسال البيانات إلى الخادم
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="الاسم"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="البريد الإلكتروني"
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="الرسالة"
            />
            <button type="submit">إرسال</button>
        </form>
    );
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
                          <strong>المحتوى:</strong> شرح React كامل من الصفر
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/ihRRf3EjTV8"
                        title="شرح React كامل من أكاديمية ترميز - الجزء الأول"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&si=V_pXeDCsaWVqbDLn"
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
                      <YouTubeIcon /> المرجع الكامل ل React
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
                    <h2>أساسيات React - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح nageeb darwish - React متقدم</h3>
                    <p>استكمال شرح React بمفاهيم متقدمة وتقنيات حديثة</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم مفاهيم React المتقدمة مثل useEffect،
                    useReducer، Context API، والتعامل مع البيانات.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>useEffect Hook</strong>
                        <div className="tool-details">
                          side effects, lifecycle, cleanup, dependencies
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>useReducer و useRef</strong>
                        <div className="tool-details">
                          complex state management, DOM references
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Context API</strong>
                        <div className="tool-details">
                          global state, provider, consumer, useContext
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Custom Hooks</strong>
                        <div className="tool-details">
                          reusable logic, composition, best practices
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>useEffect Hook:</h3>
                    <pre className="code-block">{`import { useState, useEffect } from 'react';

// useEffect أساسي
function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                const response = await fetch(\`/api/users/\${userId}\`);
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error('فشل في جلب بيانات المستخدم:', error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchUser();
    }, [userId]); // يعتمد على userId
    
    if (loading) return <div>جاري التحميل...</div>;
    if (!user) return <div>لم يتم العثور على المستخدم</div>;
    
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
}

// Cleanup مع useEffect
function Timer() {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        
        // Cleanup function
        return () => clearInterval(interval);
    }, []); // يعمل مرة واحدة فقط
    
    return <div>الوقت المنقضي: {seconds} ثانية</div>;
}

// Multiple Effects
function DataFetcher({ resource, id }) {
    const [data, setData] = useState(null);
    
    // Effect للبيانات
    useEffect(() => {
        fetchData(resource, id).then(setData);
    }, [resource, id]);
    
    // Effect للعنوان
    useEffect(() => {
        document.title = data ? data.title : 'التطبيق';
    }, [data]);
    
    return <div>{/* عرض البيانات */}</div>;
}`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>useReducer و Context API:</h3>
                    <pre className="code-block">{`import { useReducer, createContext, useContext } from 'react';

// useReducer
const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div>
            العد: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>إعادة تعيين</button>
        </div>
    );
}

// Context API
const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ThemedButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <button 
            onClick={toggleTheme}
            className={\`btn \${theme}-theme\`}
        >
            الثيمة: {theme}
        </button>
    );
}`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>Custom Hooks:</h3>
                    <pre className="code-block">{`// Custom Hook للبيانات
function useApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, [url]);
    
    return { data, loading, error };
}

// Custom Hook للنموذج
function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const reset = () => setValues(initialValues);
    
    return { values, handleChange, reset };
}

// استخدام Custom Hooks
function UserForm() {
    const { values, handleChange, reset } = useForm({
        name: '',
        email: '',
        password: ''
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('بيانات النموذج:', values);
        reset();
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="الاسم"
            />
            <input
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="البريد الإلكتروني"
            />
            <input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                placeholder="كلمة المرور"
            />
            <button type="submit">تسجيل</button>
        </form>
    );
}`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> nageeb darwish
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> نجيب درويش
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> React متقدم وتقنيات حديثة
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/EtNyJQItRZk"
                        title="شرح React متقدم من nageeb darwish - الجزء الثاني"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLpr1Lg_f0v3ojNKR4WzZ_SEXhiKBHDQmB&si=N223XLXVgsnbRye5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لقناة nageeb darwish</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href={getYouTubeUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon /> المرجع الكامل ل React
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
                    <h2>أساسيات React - الشرح الثالث</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح simple arab code - React متقدم</h3>
                    <p>إتقان React بمفاهيم متقدمة وأفضل الممارسات</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء الأخير، ستتعلم تقنيات React المتقدمة مثل الـ
                    Performance Optimization، الـ Testing، الـ Routing، والتكامل
                    مع الـ Backend.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>تحسين الأداء</strong>
                        <div className="tool-details">
                          React.memo, useMemo, useCallback, code splitting
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التوجيه (Routing)</strong>
                        <div className="tool-details">
                          React Router, navigation, protected routes
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الاختبار (Testing)</strong>
                        <div className="tool-details">
                          Jest, React Testing Library, unit testing
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التكامل مع Backend</strong>
                        <div className="tool-details">
                          REST APIs, authentication, state management
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>تحسين الأداء في React:</h3>
                    <pre className="code-block">{`import { memo, useMemo, useCallback } from 'react';

// React.memo لمنع إعادة التصيير غير الضرورية
const ExpensiveComponent = memo(function ExpensiveComponent({ data, onUpdate }) {
    console.log('ExpensiveComponent rendered');
    
    // useMemo للحسابات المكلفة
    const processedData = useMemo(() => {
        return data.map(item => ({
            ...item,
            processed: heavyComputation(item)
        }));
    }, [data]);
    
    // useCallback للدوال
    const handleUpdate = useCallback((id, value) => {
        onUpdate(id, value);
    }, [onUpdate]);
    
    return (
        <div>
            {processedData.map(item => (
                <div key={item.id}>
                    {item.name}
                    <button onClick={() => handleUpdate(item.id, item.value)}>
                        تحديث
                    </button>
                </div>
            ))}
        </div>
    );
});

// Lazy Loading و Code Splitting
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
    return (
        <div>
            <Suspense fallback={<div>جاري التحميل...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
}

// Custom Hook للأداء
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    
    return debouncedValue;
}`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>React Router:</h3>
                    <pre className="code-block">{`import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">الرئيسية</Link>
                <Link to="/about">من نحن</Link>
                <Link to="/users">المستخدمين</Link>
            </nav>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

function Home() {
    return <h1>الصفحة الرئيسية</h1>;
}

function About() {
    return <h1>من نحن</h1>;
}

function Users() {
    const [users, setUsers] = useState([]);
    
    return (
        <div>
            <h1>قائمة المستخدمين</h1>
            {users.map(user => (
                <div key={user.id}>
                    <Link to={\`/users/\${user.id}\`}>
                        {user.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        fetchUser(id).then(setUser);
    }, [id]);
    
    if (!user) return <div>جاري التحميل...</div>;
    
    return (
        <div>
            <h1>{user.name}</h1>
            <p>البريد: {user.email}</p>
        </div>
    );
}`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>الاختبار في React:</h3>
                    <pre className="code-block">{`// Unit Testing مع Jest و React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('يظهر العداد القيمة الأولية الصحيحة', () => {
    render(<Counter />);
    const countElement = screen.getByText(/العداد:/i);
    expect(countElement).toHaveTextContent('العداد: 0');
});

test('يزيد العداد عند النقر على زر الزيادة', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    
    const incrementButton = screen.getByText('+');
    await user.click(incrementButton);
    
    const countElement = screen.getByText(/العداد:/i);
    expect(countElement).toHaveTextContent('العداد: 1');
});

test('يتعامل مع إدخال النموذج بشكل صحيح', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    const nameInput = screen.getByPlaceholderText('الاسم');
    await user.type(nameInput, 'أحمد');
    
    expect(nameInput).toHaveValue('أحمد');
});

// Integration Testing
test('يجب أن يسمح بتسجيل الدخول بنجاح', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    
    const emailInput = screen.getByPlaceholderText('البريد الإلكتروني');
    const passwordInput = screen.getByPlaceholderText('كلمة المرور');
    const submitButton = screen.getByText('تسجيل الدخول');
    
    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);
    
    await waitFor(() => {
        expect(screen.getByText('مرحباً بعودتك!')).toBeInTheDocument();
    });
});`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> simple arab code
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> كريم محمد
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> React متقدم وتقنيات حديثة
                        </div>
                        <div className="detail-item">
                          <strong>السلسلة:</strong> React كامل من الصفر للإحتراف
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/cEX_5hry-1c"
                        title="شرح React متقدم من simple arab code - الجزء الثالث"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLxRKoQzM5m3LhmXA4b9FwuuUFzRnJCzoe&si=kwX1kS4nrl9OCl9L"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لقناة simple arab code</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>
                          أنشئ تطبيق React كامل مع Routing و State Management
                        </p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>
                          طبق تحسينات الأداء باستخدام memo و useMemo و
                          useCallback
                        </p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>
                          اكتب اختبارات شاملة للتطبيق باستخدام React Testing
                          Library
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLxRKoQzM5m3LhmXA4b9FwuuUFzRnJCzoe&si=kwX1kS4nrl9OCl9L"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon /> المرجع الكامل ل React
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
              <h3>دورة React الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">يعرب، نجيب درويش، كريم محمد</p>
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
                  href="https://youtube.com/playlist?list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&si=V_pXeDCsaWVqbDLn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  أكاديمية ترميز
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLpr1Lg_f0v3ojNKR4WzZ_SEXhiKBHDQmB&si=N223XLXVgsnbRye5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  nageeb darwish
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLxRKoQzM5m3LhmXA4b9FwuuUFzRnJCzoe&si=kwX1kS4nrl9OCl9L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  simple arab code
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
