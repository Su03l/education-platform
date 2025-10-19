import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HTMLCourse from "./pages/CourseDetails/html";
import CSSCourse from "./pages/CourseDetails/css";
import JavaScriptCourse from "./pages/CourseDetails/JavaScript";
import TypeScriptCourse from "./pages/CourseDetails/typescript";
import ReactCourse from "./pages/CourseDetails/react";
import PythonCourse from "./pages/CourseDetails/Python";
import JavaCourse from "./pages/CourseDetails/Java";
import SQLCourse from "./pages/CourseDetails/SQL";
import GitCourse from "./pages/CourseDetails/git";
import BootstrapCourse from "./pages/CourseDetails/bootstrap";
import MongoDBCourse from "./pages/CourseDetails/mongodb";
import NodeCourse from "./pages/CourseDetails/nodejs";
import TailwindCSSCourse from "./pages/CourseDetails/TailwindCSS";
import CoursesPage from "./pages/Courses";
import AboutPage from "./pages/about";
import ContactPage from "./components/Contact";
import Footer from "./components/Footer";
import PhpCourse from "./pages/CourseDetails/php";
import LaravelCourse from "./pages/CourseDetails/laravel";
import FlutterCourse from "./pages/CourseDetails/flutter";
import CppCourse from "./pages/CourseDetails/cpp";
import UiUxCourse from "./pages/CourseDetails/ui-ux";
import NestJs from "./pages/CourseDetails/nestjs";
import PathwaysSection from "./components/PathwaysSection";
// استيراد صفحات المسارات الجديدة
import FrontendWebPathway from "./pages/pathways/FrontendWebPathway";
import BackendWebPathway from "./pages/pathways/BackendWebPathway";
import FrontendAppPathway from "./pages/pathways/FrontendAppPathway";
import ProgrammingBasicsPathway from "./pages/pathways/ProgrammingBasicsPathway";
import UIUXPathway from "./pages/pathways/UIUXPathway";
import NextJs from "./pages/CourseDetails/nextjs";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* مسارات التعلم */}
          <Route path="/pathways" element={<PathwaysSection />} />
          <Route
            path="/pathways/frontend-web"
            element={<FrontendWebPathway />}
          />
          <Route path="/pathways/backend-web" element={<BackendWebPathway />} />
          <Route
            path="/pathways/frontend-app"
            element={<FrontendAppPathway />}
          />
          <Route
            path="/pathways/programming-basics"
            element={<ProgrammingBasicsPathway />}
          />
          <Route path="/pathways/ui-ux" element={<UIUXPathway />} />

          {/* تفاصيل الكورسات */}
          <Route path="/courses/html" element={<HTMLCourse />} />
          <Route path="/courses/css" element={<CSSCourse />} />
          <Route path="/courses/javascript" element={<JavaScriptCourse />} />
          <Route path="/courses/typescript" element={<TypeScriptCourse />} />
          <Route path="/courses/react" element={<ReactCourse />} />
          <Route path="/courses/python" element={<PythonCourse />} />
          <Route path="/courses/java" element={<JavaCourse />} />
          <Route path="/courses/sql" element={<SQLCourse />} />
          <Route path="/courses/git" element={<GitCourse />} />
          <Route path="/courses/bootstrap" element={<BootstrapCourse />} />
          <Route path="/courses/mongodb" element={<MongoDBCourse />} />
          <Route path="/courses/nodejs" element={<NodeCourse />} />
          <Route path="/courses/tailwind" element={<TailwindCSSCourse />} />
          <Route path="/courses/php" element={<PhpCourse />} />
          <Route path="/courses/laravel" element={<LaravelCourse />} />
          <Route path="/courses/flutter" element={<FlutterCourse />} />
          <Route path="/courses/cpp" element={<CppCourse />} />
          <Route path="/courses/ui-ux" element={<UiUxCourse />} />
          <Route path="/courses/nestjs" element={<NestJs />} />
          <Route path="/courses/nextjs" element={<NextJs />} />
        </Routes>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
