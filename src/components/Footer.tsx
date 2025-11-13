import { Link } from "react-router-dom";
import "../styles/footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import type { SvgIconComponent } from "@mui/icons-material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

type QuickLink = {
  label: string;
  path: string;
};

type SocialLink = {
  label: string;
  url: string;
  icon: SvgIconComponent;
};

const quickLinks: QuickLink[] = [
  { label: "الرئيسية", path: "/" },
  { label: "من نحن", path: "/about" },
  { label: "الدورات", path: "/courses" },
  { label: "المسارات", path: "/pathways" },
  { label: "المدونة", path: "/blog" },
  { label: "تواصل معنا", path: "/contact" },
];

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/Su03l",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/suliaman-yousef-36265a320",
    icon: LinkedInIcon,
  },
  {
    label: "X",
    url: "https://x.com/Su05l",
    icon: XIcon,
  },
];

const Footer = () => {
  return (
    <footer className="footer" dir="rtl">
      <div className="footer-main">
        <div className="footer-container">
          {/* القسم الأول - البراند والمعلومات */}
          <div className="footer-section brand-section">
            <div className="footer-brand">
              <div className="footer-logo">
                <AutoStoriesIcon className="logo-icon" />
                <span className="logo-text">منصة التعلم</span>
              </div>
              <p className="brand-description">
                منصة عربية لتجميع أفضل الشروحات البرمجية من يوتيوب في مكان واحد،
                مع الحفاظ الكامل على حقوق المدرسين والمحتوى الأصلي.
              </p>
              <div className="footer-suggestion">
                <h4>لاقتراح كورس جديد</h4>
                <div className="suggestion-info">
                  <XIcon className="suggestion-icon" />
                  <div className="suggestion-details">
                    <p className="suggestion-text">يرجى التواصل على تويتر</p>
                    <a
                      href="https://twitter.com/su05l"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="twitter-handle"
                    >
                      @su05l
                    </a>
                  </div>
                </div>
                <p className="suggestion-note">
                  أرسل اسم الكورس + رابط اليوتيوب
                </p>
              </div>
            </div>
          </div>

          {/* القسم الثاني - روابط سريعة */}
          <div className="footer-section links-section">
            <h3 className="section-title">روابط سريعة</h3>
            <div className="footer-links-grid">
              <div className="links-column">
                {quickLinks.slice(0, 3).map((link) => (
                  <Link key={link.path} to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="links-column">
                {quickLinks.slice(3).map((link) => (
                  <Link key={link.path} to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* القسم الثالث - تواصل معنا */}
          <div className="footer-section contact-section">
            <h3 className="section-title">تواصل معنا</h3>
            <div className="contact-info">
              <div className="contact-item">
                <EmailIcon className="contact-icon" />
                <div className="contact-details">
                  <span className="contact-label">البريد الإلكتروني</span>
                  <span className="contact-value">
                    salmanyousef13@gmail.com
                  </span>
                </div>
              </div>
              <div className="contact-item">
                <PhoneIcon className="contact-icon" />
                <div className="contact-details">
                  <span className="contact-label">الهاتف</span>
                  <span className="contact-value" dir="ltr">
                    +966 59 012 8804
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* القسم الرابع - وسائل التواصل */}
          <div className="footer-section social-section">
            <h3 className="section-title">تابعنا</h3>
            <div className="social-content">
              <p className="social-description">
                كن جزءاً من مجتمعنا المتعلم وتابع آخر المستجدات
              </p>
              <div className="social-icons">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <social.icon className="social-icon" />
                  </a>
                ))}
              </div>
              <div className="social-stats">
                <div className="stat-item">
                  <span className="stat-number">1K+</span>
                  <span className="stat-label">متعلم</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">دورة</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">مسارات</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* الفوتر السفلي */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} منصة التعلم -
              <strong> مشروع تدريبي شخصي</strong>
            </p>
            <div className="footer-bottom-links">
              <p>جميع الحقوق محفوظة لأصحاب المحتوى الأصلي</p>
              {/* <Link to="/privacy" className="bottom-link">
                سياسة الخصوصية
              </Link>
              <Link to="/terms" className="bottom-link">
                شروط الاستخدام
              </Link>
              <Link to="/sitemap" className="bottom-link">
                خريطة الموقع
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
