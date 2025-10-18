import "./../styles/contact.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SchoolIcon from "@mui/icons-material/School";
import FeedbackIcon from "@mui/icons-material/Feedback";

const Contact = () => (
  <div className="contact-page" dir="rtl">
    {/* === Header Section === */}
    <div className="contact-header-bg">
      <h1 className="contact-main-title">التواصل معنا</h1>
      <hr />
      <p className="contact-main-desc">
        نحن هنا لمساعدتك واستقبال اقتراحاتك. اختر الطريقة المناسبة للتواصل معنا
      </p>
    </div>

    {/* === Contact Cards Section === */}
    <div className="contact-cards-grid">
      {/* بطاقة إضافة كورس جديد */}
      <div className="contact-card">
        <SchoolIcon className="contact-card-icon" />
        <h3>إضافة كورس جديد</h3>
        <p>
          هل لديك كورس مميز تريد إضافته إلى المنصة؟
          <br />
          راسلنا على تويتر مع اسم الكورس ورابط اليوتيوب
        </p>
        <a
          href="https://twitter.com/su05l"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary contact-btn"
        >
          <TwitterIcon className="btn-icon" />
          راسلني على تويتر
        </a>
      </div>

      {/* بطاقة الملاحظات والاستفسارات */}
      <div className="contact-card">
        <FeedbackIcon className="contact-card-icon" />
        <h3>ملاحظات واستفسارات</h3>
        <p>
          لديك ملاحظة أو استفسار حول المنصة؟
          <br />
          نحن نستمع لاقتراحاتك ونرحب بملاحظاتك
        </p>
        <a
          href="https://twitter.com/su05l"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary contact-btn"
        >
          <TwitterIcon className="btn-icon" />
          تواصل معنا على تويتر
        </a>
      </div>

      {/* بطاقة المعلومات الإضافية */}
      <div className="contact-card">
        <TwitterIcon className="contact-card-icon" />
        <h3>الحساب الرسمي</h3>
        <p>
          تابعنا على تويتر لمعرفة آخر التحديثات
          <br />
          والإضافات الجديدة على المنصة
        </p>
        <div className="twitter-handle">
          <TwitterIcon className="handle-icon" />
          <span>@su05l</span>
        </div>
      </div>
    </div>

    {/* === Important Note === */}
    <div className="contact-notice-section">
      <div className="contact-notice-card">
        <SchoolIcon className="contact-card-icon" />
        <h3> ملاحظة مهمة</h3>
        <p>
          نحرص على الرد على جميع الرسائل في أقرب وقت ممكن.
          <strong>
            {" "}
            لاقتراح كورس جديد، يرجى إرسال اسم الكورس والرابط من اليوتيوب
          </strong>
          لتسهيل عملية الإضافة.
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
