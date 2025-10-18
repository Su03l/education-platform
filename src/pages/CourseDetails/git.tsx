import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TerminalIcon from "@mui/icons-material/Terminal";

import "../../styles/git.css";

const lessons = [
  { id: 1, title: "ماذا تحتاج للبدء", icon: "" },
  { id: 2, title: "أساسيات Git & GitHub - الشرح الاول", icon: "" },
  { id: 3, title: "أساسيات Git & GitHub - الشرح الثاني", icon: "" },
];

export default function GitCourse() {
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
    <div className="git-course-page" dir="rtl">
      <header className="git-course-header">
        <div className="git-course-container">
          <Link to="/courses" className="back-link">
            <ArrowForwardIosIcon
              style={{ transform: "rotate(180deg)", fontSize: 18 }}
            />
            العودة للكورسات
          </Link>
          <div className="git-course-title">
            <h1>أساسيات Git & GitHub</h1>
            <p>
              شرح كامل لنظام التحكم بالإصدار والتعاون على المشاريع - دورة
              متكاملة
            </p>
          </div>
        </div>
      </header>

      <section className="git-course-main git-course-container">
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
                    قبل أن تبدأ في تعلم Git و GitHub، هناك بعض الأساسيات
                    والأدوات التي تحتاجها لإدارة مشاريعك البرمجية بشكل احترافي.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>Git:</strong>
                        <div className="tool-details">
                          نظام التحكم بالإصدار - تحميل من git-scm.com
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>حساب GitHub:</strong>
                        <div className="tool-details">
                          حساب مجاني على github.com
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong> VS Code أو أي محرر
                        <div className="tool-details">
                          يوصى باستخدام VS Code مع إضافة GitLens
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>سطر الأوامر:</strong>
                        <div className="tool-details">
                          معرفة أساسية بسطر الأوامر (Terminal/Command Prompt)
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
                          <h4>تثبيت Git</h4>
                          <p>تحميل وتثبيت Git من الموقع الرسمي git-scm.com</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>إنشاء حساب GitHub</h4>
                          <p>تسجيل حساب مجاني على منصة GitHub</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>إعداد Git</h4>
                          <p>تهيئة اسم المستخدم والبريد الإلكتروني في Git</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>اختبار البيئة</h4>
                          <p>إنشاء أول مستودع وتأكد من عمل Git</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>افهم الفرق بين Git و GitHub جيداً</li>
                      <li>تدرب على الأوامر الأساسية بشكل متكرر</li>
                      <li>استخدم Git في جميع مشاريعك الصغيرة والكبيرة</li>
                      <li>تعلم التعامل مع النزاعات (Merge Conflicts)</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://git-scm.com/doc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TerminalIcon />
                      المرجع الخاص بـ Git
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
                    <h2>أساسيات Git & GitHub - الشرح الاول</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح الزيرو ويب سكول - Git & GitHub كامل</h3>
                    <p>
                      هذا الكورس الشامل لتعليم Git و GitHub من البداية حتى
                      الإحتراف
                    </p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات نظام Git وكيفية استخدامه
                    لإدارة الإصدارات والتعاون مع المطورين الآخرين عبر GitHub.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في Git:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>ما هو Git؟</h4>
                        <p>
                          نظام تحكم بالإصدارات يسجل تغييرات المشروع ويتيح
                          التعاون.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>المستودع (Repository)</h4>
                        <p>المجلد الذي يحتوي على مشروعك وتاريخه الكامل.</p>
                      </div>
                      <div className="concept-card">
                        <h4>النسخ (Commits)</h4>
                        <p>لحظات حفظ للتغييرات مع وصف لكل تغيير.</p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>إنشاء وإدارة المستودعات</strong>
                        <div className="tool-details">
                          git init, git clone, git remote
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>تتبع التغييرات</strong>
                        <div className="tool-details">
                          git status, git add, git commit
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الفروع (Branches)</strong>
                        <div className="tool-details">
                          git branch, git checkout, git merge
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التعاون مع GitHub</strong>
                        <div className="tool-details">
                          git push, git pull, pull requests
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>أوامر Git الأساسية:</h3>
                    <pre className="code-block">{`# تهيئة Git للمستخدم
git config --global user.name "اسمك"
git config --global user.email "بريدك@example.com"

# إنشاء مستودع جديد
git init
# أو نسخ مستودع موجود
git clone https://github.com/user/repo.git

# تتبع التغييرات
git status                    # عرض حالة الملفات
git add filename.txt          # إضافة ملف معين
git add .                     # إضافة جميع الملفات
git commit -m "وصف التغييرات" # حفظ التغييرات

# عرض التاريخ
git log                      # عرض تاريخ النسخ
git log --oneline            # عرض مختصر للتاريخ

# العمل مع الفروع
git branch                   # عرض الفروع
git branch new-feature       # إنشاء فرع جديد
git checkout new-feature     # الانتقال لفرع
git checkout -b new-feature  # إنشاء والانتقال لفرع

# الدمج
git merge feature-branch     # دمج فرع مع الفرع الحالي

# التعامل مع GitHub
git push origin main         # رفع التغييرات
git pull origin main         # سحب التغييرات`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>سير العمل اليومي مع Git:</h3>
                    <pre className="code-block">{`# سيناريو عمل يومي نموذجي

# 1. الحصول على أحدث التغييرات
git pull origin main

# 2. إنشاء فرع جديد للمهمة
git checkout -b feature/new-feature

# 3. العمل على المهمة وإضافة الملفات
git add .
git commit -m "إضافة خاصية جديدة"

# 4. الاستمرار في العمل وإضافة المزيد من النسخ
git add file1.js file2.css
git commit -m "تحسينات على الواجهة"

# 5. الرجوع للفرع الرئيسي ودمج التغييرات
git checkout main
git pull origin main
git merge feature/new-feature

# 6. رفع التغييرات لـ GitHub
git push origin main

# 7. حذف الفرع المحلي بعد الانتهاء
git branch -d feature/new-feature`}</pre>
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
                          <strong>المحتوى:</strong> Git & GitHub كامل من الصفر
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/ACOiGZoqC8w?list=PLDoPjvoNmBAw4eOj58MZPakHjaO3frVMF"
                        title="شرح Git & GitHub - الزيرو ويب سكول"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLDoPjvoNmBAw4eOj58MZPakHjaO3frVMF"
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
                      href="https://youtube.com/playlist?list=PLDoPjvoNmBAw4eOj58MZPakHjaO3frVMF"
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
                    <h2>أساسيات Git & GitHub - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح غريب الشيخ - Git & GitHub في ساعة</h3>
                    <p>شرح مكثف وشامل لـ Git و GitHub بأمثلة عملية</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم تقنيات متقدمة في Git و GitHub مثل حل
                    النزاعات، العمل مع Pull Requests، وإدارة المشاريع الكبيرة.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>حل النزاعات (Merge Conflicts)</strong>
                        <div className="tool-details">
                          كيفية التعامل مع تضارب التغييرات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Pull Requests</strong>
                        <div className="tool-details">
                          إنشاء ومراجعة طلبات الدمج
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>GitHub Actions</strong>
                        <div className="tool-details">
                          أتمتة المهام في المشاريع
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>إدارة المشاريع الكبيرة</strong>
                        <div className="tool-details">
                          استراتيجيات للفرق الكبيرة
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>التعامل مع النزاعات:</h3>
                    <pre className="code-block">{`# عندما يحدث نزاع في الدمج
Auto-merging file.txt
CONFLICT (content): Merge conflict in file.txt
Automatic merge failed; fix conflicts and then commit the result.

# الملف سيكون به علامات النزاع
<<<<<<< HEAD
هذا المحتوى من الفرع الحالي
=======
هذا المحتوى من الفرع الذي تحاول دمجه
>>>>>>> branch-name

# لحل النزاع:
# 1. افتح الملف وعدل المحتوى يدوياً
# 2. احذف علامات <<<<<<<, =======, >>>>>>>
# 3. احفظ الملف الذي تريده

# بعد حل النزاع:
git add file.txt
git commit -m "حل نزاع الدمج"

# أو إلغاء الدمج إذا أردت:
git merge --abort`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>أوامر متقدمة في Git:</h3>
                    <pre className="code-block">{`# العمل مع التغييرات
git diff                    # مقارنة التغييرات غير المضافة
git diff --staged           # مقارنة التغييرات المضافة
git restore file.txt        # إلغاء تغييرات ملف
git restore --staged file.txt # إزالة ملف من staged

# إعادة الكتابة على آخر commit
git commit --amend -m "وصف جديد"

# العمل مع tags
git tag v1.0.0             # إنشاء tag للإصدار
git push origin v1.0.0      # رفع tag لـ GitHub

# Stashing (حفظ التغييرات مؤقتاً)
git stash                   # حفظ التغييرات الحالية
git stash list              # عرض قائمة stash
git stash apply             # استعادة آخر stash
git stash drop              # حذف آخر stash

# البحث في التاريخ
git log --grep="كلمة"      # البحث في وصف commits
git log -p file.txt         # عرض تاريخ ملف مع التغييرات`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> غريب الشيخ
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> غريب الشيخ
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Git & GitHub في ساعة
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/fDkR0TDR9dI"
                        title="شرح Git & GitHub - غريب الشيخ"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/embed/fDkR0TDR9dI"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة الشرح على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لغريب الشيخ</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>إنشاء مستودع جديد على GitHub</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>إضافة ملفات المشروع وعمل commits</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>إنشاء فروع ومحاكاة العمل الجماعي</p>
                      </div>
                      <div className="step">
                        <span className="step-number">4</span>
                        <p>عمل Pull Request ودمج التغييرات</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.youtube.com/embed/fDkR0TDR9dI"
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
              <h3>دورة Git & GitHub الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">الزيرو ويب سكول، غريب الشيخ</p>
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
                  href="https://youtube.com/playlist?list=PLDoPjvoNmBAw4eOj58MZPakHjaO3frVMF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  الزيرو ويب سكول
                </a>
                <a
                  href="https://www.youtube.com/embed/fDkR0TDR9dI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  غريب الشيخ
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
