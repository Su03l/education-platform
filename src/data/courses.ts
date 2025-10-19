import type { ReactNode } from "react";
import jsImage from "../assets/images/javascript-logo-svgrepo-com.svg";
import javaImage from "../assets/images/java-svgrepo-com.svg";
import pythonImage from "../assets/images/python-svgrepo-com.svg";
import sqlImage from "../assets/images/postgresql-logo-svgrepo-com.svg";
import htmlImage from "../assets/images/html-5-svgrepo-com.svg";
import cssImage from "../assets/images/css-3-svgrepo-com.svg";
import tsImage from "../assets/images/typescript-official-svgrepo-com.svg";
import reactImage from "../assets/images/react-svgrepo-com.svg";
import gitImage from "../assets/images/git-svgrepo-com.svg";
import nodeImage from "../assets/images/nodejs-icon-svgrepo-com.svg";
import tailwindImage from "../assets/images/tailwind-css-svgrepo-com.svg";
import bootstrapImage from "../assets/images/bootstrap-svgrepo-com.svg";
import mongoImage from "../assets/images/mongo-svgrepo-com.svg";
import phpImage from "../assets/images/php-svgrepo-com.svg";
import laravelImage from "../assets/images/laravel-svgrepo-com.svg";
import flutterImage from "../assets/images/flutter-svgrepo-com.svg";
import cppImage from "../assets/images/c.svg";
import uiuxImage from "../assets/images/UI-UX.svg";
import nestImage from "../assets//images/nest-middleware-js-svgrepo-com.svg";
import nextJsImage from "../assets/images/next-js-svgrepo-com.svg";
export type Course = {
  icon?: ReactNode;
  image?: string;
  title: string;
  description: string;
  level?: string;
  rating?: number;
  duration?: string;
  students?: string;
  link: string;
  linkText: string;
  className?: string;
};

export const coursesData: Course[] = [
  {
    image: htmlImage,
    title: "أساسيات HTML5",
    description:
      "ابدأ رحلتك في تطوير الويب بتعلم كيفية إنشاء صفحات الإنترنت باستخدام أحدث معايير HTML5.",
    level: "مبتدئ",
    rating: 4.5,
    link: "/courses/html",
    linkText: "ابدأ الكورس",
  },
  {
    image: cssImage,
    title: "تنسيق الصفحات بـ CSS3",
    description:
      "تعلم تصميم صفحات ويب احترافية وجميلة باستخدام CSS3 وخصائص Flexbox وGrid.",
    level: "مبتدئ",
    rating: 4.6,
    link: "/courses/css",
    linkText: "ابدأ الكورس",
  },
  {
    image: jsImage,
    title: "تطوير الويب بـ JavaScript",
    description:
      "احترف لغة JavaScript وتعلم كيفية بناء مواقع وتطبيقات ويب تفاعلية من الصفر حتى الاحتراف.",
    duration: "10 أسابيع",
    students: "2,100",
    rating: 4.9,
    level: "متوسط",
    link: "/courses/javascript",
    linkText: "ابدأ التعلم الآن",
  },
  {
    image: tsImage,
    title: "TypeScript للمطورين",
    description:
      "ارتقِ بمهاراتك في JavaScript إلى مستوى أعلى مع TypeScript لكتابة كود منظم وقابل للتطوير.",
    level: "متوسط",
    rating: 4.7,
    link: "/courses/typescript",
    linkText: "ابدأ الكورس",
  },
  {
    image: reactImage,
    title: "تطوير واجهات المستخدم بـ React",
    description:
      "تعلم بناء تطبيقات ويب تفاعلية وسريعة باستخدام مكتبة React JS مع أحدث الممارسات.",
    level: "متوسط إلى متقدم",
    rating: 4.8,
    link: "/courses/react",
    linkText: "ابدأ الكورس",
  },
  {
    image: nextJsImage,
    title: "تطوير تطبيقات الويب بـ Next.js",
    description:
      "تعلم بناء تطبيقات ويب متقدمة وسريعة مع SSR وSSG باستخدام إطار Next.js مع أفضل الممارسات الحديثة.",
    level: "متوسط إلى متقدم",
    rating: 4.7,
    link: "/courses/nextjs",
    linkText: "ابدأ الكورس",
  },

  {
    image: tailwindImage,
    title: "تصميم واجهات احترافية باستخدام Tailwind CSS",
    description:
      "تعلم كيف تنشئ تصاميم عصرية ومتجاوبة بسهولة وسرعة باستخدام إطار العمل Tailwind CSS القوي والمخصص للمطورين المبدعين.",
    level: "مبتدئ إلى متوسط",
    rating: 4.7,
    link: "/courses/tailwind",
    linkText: "ابدأ الكورس",
  },
  {
    image: bootstrapImage,
    title: "إتقان تصميم الواجهات مع Bootstrap",
    description:
      "اكتشف كيف تبني مواقع جميلة ومتجاوبة بسرعة باستخدام Bootstrap، أشهر إطار لتصميم واجهات الويب الجاهزة.",
    level: "مبتدئ إلى متوسط",
    rating: 4.6,
    link: "/courses/bootstrap",
    linkText: "ابدأ الكورس",
  },
  {
    image: nodeImage,
    title: "تطوير الباك إند باستخدام Node.js",
    description:
      "ابدأ رحلتك في بناء الخوادم باستخدام Node.js وتعلم كيفية إنشاء واجهات برمجية (APIs) قوية وربطها مع قواعد البيانات.",
    level: "متوسط إلى متقدم",
    rating: 4.8,
    link: "/courses/nodejs",
    linkText: "ابدأ الكورس",
  },
  {
    image: nestImage,
    title: "تطوير التطبيقات باستخدام NestJS",
    description:
      "تعلم بناء واجهات خلفية قوية ومنظمة باستخدام إطار العمل NestJS المبني على TypeScript لتطوير تطبيقات احترافية.",
    level: "متوسط إلى متقدم",
    rating: 4.7,
    link: "/courses/nestjs",
    linkText: "ابدأ الكورس",
  },
  {
    image: mongoImage,
    title: "إدارة قواعد البيانات باستخدام MongoDB",
    description:
      "تعلم كيفية إنشاء وإدارة قواعد بيانات NoSQL باستخدام MongoDB وربطها مع تطبيقاتك لبناء مشاريع متكاملة.",
    level: "متوسط إلى متقدم",
    rating: 4.8,
    link: "/courses/mongodb",
    linkText: "ابدأ الكورس",
  },

  {
    image: sqlImage,
    title: "تصميم قواعد البيانات PostgreSQL",
    description:
      "تعلم كيفية تصميم وتنظيم وإدارة قواعد البيانات باستخدام SQL مع مشاريع عملية.",
    level: "متوسط",
    rating: 4.6,
    link: "/courses/sql",
    linkText: "ابدأ الكورس",
  },
  {
    image: phpImage,
    title: "برمجة PHP",
    description:
      "تعلم أساسيات لغة PHP لبناء تطبيقات ويب ديناميكية: متغيرات، تحكم بالتيار، التعامل مع النماذج، الجلسات، وربط قواعد البيانات.",
    level: "مبتدئ إلى متوسط",
    rating: 4.7,
    link: "/courses/php",
    linkText: "ابدأ الكورس",
  },
  {
    image: laravelImage,
    title: "تطوير الويب باستخدام Laravel",
    description:
      "تعلّم بناء تطبيقات ويب احترافية باستخدام إطار العمل Laravel: تنظيم المشروع، Eloquent ORM، المصادقة، وإنشاء APIs متكاملة.",
    level: "متوسط إلى متقدم",
    rating: 4.8,
    link: "/courses/laravel",
    linkText: "ابدأ الكورس",
  },

  {
    image: pythonImage,
    title: "Python للمبتدئين",
    description:
      "ابدأ تعلم لغة Python السهلة والمميزة لتطوير التطبيقات والذكاء الاصطناعي وتحليل البيانات.",
    level: "مبتدئ",
    rating: 4.7,
    link: "/courses/python",
    linkText: "ابدأ الكورس",
  },
  {
    image: javaImage,
    title: "أساسيات Java",
    description:
      "تعلم مفاهيم البرمجة الكائنية وتطوير التطبيقات باستخدام لغة Java مع أمثلة عملية.",
    level: "مبتدئ إلى متوسط",
    rating: 4.6,
    link: "/courses/java",
    linkText: "ابدأ الكورس",
  },
  {
    image: flutterImage,
    title: "أساسيات Flutter",
    description:
      "تعلم بناء تطبيقات الموبايل لأنظمة Android و iOS باستخدام إطار العمل Flutter مع تطبيقات عملية.",
    level: "مبتدئ إلى متوسط",
    rating: 4.7,
    link: "/courses/flutter",
    linkText: "ابدأ الكورس",
  },
  {
    image: cppImage,
    title: "أساسيات ++C",
    description:
      "اكتشف قوة لغة ++C في تطوير الأنظمة والبرامج عالية الأداء مع تطبيقات وأمثلة عملية.",
    level: "مبتدئ إلى متوسط",
    rating: 4.5,
    link: "/courses/cpp",
    linkText: "ابدأ الكورس",
  },
  {
    image: uiuxImage,
    title: "تصميم واجهات وتجربة المستخدم (UI & UX)",
    description:
      "تعلم كيفية تصميم واجهات احترافية وتجارب مستخدم مميزة باستخدام أدوات حديثة ومبادئ التصميم الفعّالة.",
    level: "مبتدئ إلى متوسط",
    rating: 4.8,
    link: "/courses/ui-ux",
    linkText: "ابدأ الكورس",
  },

  {
    image: gitImage,
    title: "إدارة الإصدارات باستخدام Git و GitHub",
    description:
      "تعلم أساسيات Git وGitHub للتحكم في الإصدارات، ومشاركة الكود، وإدارة المشاريع البرمجية باحتراف.",
    level: "مبتدئ إلى متوسط",
    rating: 4.7,
    link: "/courses/git",
    linkText: "ابدأ الكورس",
  },
];

export default coursesData;
