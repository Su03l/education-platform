import "./../styles/about.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import CodeIcon from "@mui/icons-material/Code";
// import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";
import SchoolIcon from "@mui/icons-material/School";
import CopyrightIcon from "@mui/icons-material/Copyright";

const values = [
  {
    icon: <SearchIcon className="card-icon" />,
    title: "تجميع المحتوى",
    desc: "نجمع أفضل الشروحات العربية من يوتيوب في مكان واحد لتسهيل الوصول لها.",
  },
  {
    icon: <GroupsIcon className="card-icon" />,
    title: "دعم المجتمع",
    desc: "نعمل على ربط المتعلمين بأفضل المدرسين العرب وبناء مجتمع تعليمي قوي.",
  },
  {
    icon: <TipsAndUpdatesIcon className="card-icon" />,
    title: "الجودة والموثوقية",
    desc: "نختار بعناية الشروحات عالية الجودة من المدرسين الموثوقين فقط.",
  },
  {
    icon: <AutoAwesomeIcon className="card-icon" />,
    title: "التنظيم والتبسيط",
    desc: "ننظم المحتوى التعليمي بطريقة سهلة ومنظمة لتسهيل عملية التعلم.",
  },
  {
    icon: <CopyrightIcon className="card-icon" />,
    title: "احترام الحقوق",
    desc: "نحافظ على حقوق الملكية الفكرية للمدرسين ونربط مباشرة بمحتواهم الأصلي.",
  },
  {
    icon: <FavoriteIcon className="card-icon" />,
    title: "خدمة مجانية",
    desc: "نقدم هذه الخدمة مجاناً للمجتمع كمساهمة في تطوير التعليم العربي.",
  },
];

const About = () => (
  <div className="about-page about-bg" dir="rtl">
    <div className="about-header-bg">
      <h1 className="about-main-title">حول المنصة</h1>
      <hr></hr>
      <p className="about-main-desc">
        منصة تعليمية تهدف إلى تسهيل الوصول لأفضل المحتويات التعليمية العربية في
        مجال البرمجة، من خلال تجميع الشروحات المميزة مع الحفاظ الكامل على حقوق
        أصحابها.
      </p>
    </div>
    <div className="about-row about-vision-mission">
      <div className="card vision-big-card">
        <StarIcon className="card-icon" />
        <h2>رؤيتنا</h2>
        <p>
          أن نكون الجسر الذي يصل المتعلمين العرب بأفضل المحتويات التعليمية،
          ونساهم في خلق مجتمع برمجي متعاون ومبدع قادر على المنافسة عالمياً.
        </p>
      </div>
      <div className="card mission-big-card">
        <AssignmentTurnedInIcon className="card-icon" />
        <h2>رسالتنا</h2>
        <p>
          تبسيط رحلة تعلم البرمجة من خلال تجميع وتنظيم أفضل الشروحات العربية في
          مكان واحد، مع التأكيد على حقوق الملكية الفكرية لأصحاب المحتوى
          الأصليين.
        </p>
      </div>
    </div>
    <h2 className="about-values-title">ما يميزنا</h2>
    <hr></hr>
    <p className="about-values-desc">
      المبادئ والأسس التي نعمل بها لتقديم أفضل تجربة تعليمية للمجتمع العربي
    </p>
    <div className="about-cards-grid">
      {values.map((value, idx) => (
        <div key={idx} className="card value-grid-card">
          {value.icon}
          <h3>{value.title}</h3>
          <p>{value.desc}</p>
        </div>
      ))}
    </div>

    {/* قسم الملاحظة المهمة */}
    <div className="about-notice-section">
      <div className="card notice-card">
        <SchoolIcon className="card-icon" />
        <h3> ملاحظة مهمة</h3>
        <p>
          <strong>هذا المشروع تدريبي شخصي</strong> تم تطويره بعد إكمال كورس
          React، ويهدف فقط إلى{" "}
          <strong>تسهيل الوصول للمحتوى التعليمي العربي</strong> مع الحفاظ الكامل
          على <strong>حقوق الملكية الفكرية</strong> للمدرسين. جميع الشروحات
          مرتبطة مباشرة بمصادرها الأصلية على يوتيوب.
        </p>
      </div>
    </div>
  </div>
);

export default About;
