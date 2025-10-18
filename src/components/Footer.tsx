import { Link } from "react-router-dom";
import "../styles/footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import type { SvgIconComponent } from "@mui/icons-material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EmailIcon from "@mui/icons-material/Email";

// Types for our footer data
type QuickLink = {
  label: string;
  path: string;
};

type SocialLink = {
  label: string;
  url: string;
  icon: SvgIconComponent;
};

// Data objects now live inside the component file
const quickLinks: QuickLink[] = [
  { label: "الرئيسية", path: "/" },
  { label: "من نحن", path: "/about" },
  { label: "الدورات", path: "/courses" },
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
      <div className="footer-container">
        {/* القسم الأول - نبذة */}
        <div className="footer-section">
          <div className="footer-brand">
            <div className="footer-logo">
              <AutoStoriesIcon />
              <Link to="/" className="logo-text">
                منصة التعلم
              </Link>
            </div>
            <p className="brand-description">
              منصة عربية لتجميع أفضل الشروحات البرمجية من يوتيوب في مكان واحد،
              مع الحفاظ الكامل على حقوق المدرسين والمحتوى الأصلي.
            </p>
          </div>
        </div>

        {/* القسم الثاني - روابط سريعة */}
        <div className="footer-section">
          <h3 className="section-title">روابط سريعة</h3>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* القسم الثالث - تواصل معنا */}
        <div className="footer-section">
          <h3 className="section-title">تواصل معنا</h3>
          <div className="contact-content">
            <p className="contact-description">
              لديك استفسار أو ترغب في اقتراح كورس جديد؟
            </p>
            <div className="contact-method">
              <XIcon className="contact-icon" />
              <div className="contact-details">
                <p className="contact-label">راسلنا على تويتر</p>
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

            <div className="contact-method">
              <EmailIcon className="contact-icon" />
              <div className="contact-details">
                <p className="contact-label">لاقتراح الكورسات</p>
                <p className="contact-info">أرسل اسم الكورس + رابط اليوتيوب</p>
              </div>
            </div>
          </div>
        </div>

        {/* القسم الرابع - تابعنا */}
        <div className="footer-section">
          <h3 className="section-title">تابعنا</h3>
          <div className="social-content">
            <p className="social-description">تابعنا على منصات التواصل</p>
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
          </div>
        </div>
      </div>

      <hr className="footer-line" />

      {/* الحقوق */}
      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} منصة التعلم -
          <strong> مشروع تدريبي شخصي</strong> - جميع الحقوق محفوظة لأصحاب
          المحتوى الأصلي.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
