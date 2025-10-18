import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CodeIcon from "@mui/icons-material/Code";

import "../../styles/nest.css";

const lessons = [
  { id: 1, title: "مقدمة في Nest.js", icon: "" },
  { id: 2, title: "أساسيات Nest.js - الشرح الأول", icon: "" },
  { id: 3, title: "Nest.js APIs - الشرح الثاني", icon: "" },
  { id: 4, title: "Nest.js متقدم - الشرح الثالث", icon: "" },
  { id: 5, title: "Nest.js بالإنجليزية", icon: "" },
];

export default function NestCourse() {
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
    <div className="html-course-page" dir="rtl">
      <header className="html-course-header">
        <div className="html-course-container">
          <Link to="/courses" className="back-link">
            <ArrowForwardIosIcon
              style={{ transform: "rotate(180deg)", fontSize: 18 }}
            />
            العودة للكورسات
          </Link>
          <div className="html-course-title">
            <h1>Nest.js الكامل</h1>
            <p>
              شرح متكامل لإطار العمل المتقدم لبناء تطبيقات Node.js - دورة شاملة
            </p>
          </div>
        </div>
      </header>

      <section className="html-course-main html-course-container">
        <div className="grid-container">
          <main className="main-content" ref={mainContentRef}>
            <div className="main-content-inner">
              {activeLesson === 1 && (
                <div className="lesson-content">
                  <div className="lesson-header">
                    <span className="icon"></span>
                    <h2>مقدمة في Nest.js</h2>
                  </div>

                  <p className="lesson-text">
                    Nest.js هو إطار عمل متقدم لبناء تطبيقات Node.js كفؤة وقابلة
                    للتطوير. يستخدم أنماط تصميم مثل Dependency Injection ويوفر
                    بنية قوية لتطوير التطبيقات.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>Node.js:</strong>
                        <div className="tool-details">
                          الإصدار 16 أو أعلى مع npm أو yarn
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>TypeScript:</strong>
                        <div className="tool-details">
                          فهم أساسيات TypeScript
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong>
                        <div className="tool-details">
                          VS Code مع إضافات TypeScript و Nest.js
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>أساسيات JavaScript:</strong>
                        <div className="tool-details">
                          فهم ES6+ والبرمجة غير المتزامنة
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
                          <p>تحميل وتثبيت Node.js من الموقع الرسمي</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>تثبيت Nest CLI</h4>
                          <p>تثبيت أداة سطر الأوامر باستخدام npm</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>إنشاء مشروع جديد</h4>
                          <p>استخدام nest new لإنشاء أول مشروع Nest.js</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>تشغيل التطبيق</h4>
                          <p>تشغيل خادم التطوير باستخدام npm run start:dev</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>افهم جيداً مفاهيم Dependency Injection و Modules</li>
                      <li>تعلم TypeScript قبل البدء في Nest.js</li>
                      <li>استخدم Nest CLI لتوليد الكود تلقائياً</li>
                      <li>ابدأ بالتطبيقات البسيطة ثم تدرج نحو المعقدة</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://docs.nestjs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeIcon />
                      المرجع الرسمي الخاص بـ Nest.js
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
                    <h2>أساسيات Nest.js - الشرح الأول</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح Index Academy - اتعلم برمجة بالعربي</h3>
                    <p>سلسلة شاملة لتعلم Nest.js من الصفر حتى الاحتراف</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات Nest.js من خلال شرح Index
                    Academy، بما في ذلك الـ Modules، الـ Controllers، الـ
                    Services، والهيكل الأساسي للتطبيقات.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في Nest.js:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>الـ Modules</h4>
                        <p>تنظيم التطبيق إلى وحدات مستقلة ومترابطة.</p>
                      </div>
                      <div className="concept-card">
                        <h4>الـ Controllers</h4>
                        <p>معالجة طلبات HTTP والاستجابات.</p>
                      </div>
                      <div className="concept-card">
                        <h4>الـ Services</h4>
                        <p>احتواء منطق الأعمال وإعادة استخدامه.</p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>هيكل المشروع</strong>
                        <div className="tool-details">
                          فهم تركيب مشروع Nest.js والملفات الأساسية
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الـ Modules الأساسية</strong>
                        <div className="tool-details">
                          AppModule، Feature Modules، والاعتمادات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الـ Controllers</strong>
                        <div className="tool-details">
                          إنشاء وتنظيم الـ controllers والـ routes
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الـ Services</strong>
                        <div className="tool-details">
                          فصل منطق الأعمال عن الـ controllers
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>أساسيات Nest.js - أمثلة عملية:</h3>
                    <pre className="code-block">{`// app.module.ts - الموديول الرئيسي
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// app.controller.ts - الكونترولر الرئيسي
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('about')
  getAbout(): string {
    return this.appService.getAbout();
  }
}

// app.service.ts - السيرفس الرئيسي
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'مرحباً بك في Nest.js!';
  }

  getAbout(): string {
    return 'هذا تطبيق Nest.js تجريبي';
  }
}

// users/users.module.ts - موديول المستخدمين
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

// users/users.controller.ts - كونترولر المستخدمين
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}

// users/users.service.ts - سيرفس المستخدمين
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find(user => user.id === id);
  }

  create(createUserDto: CreateUserDto) {
    const user = {
      id: Date.now().toString(),
      ...createUserDto,
      createdAt: new Date(),
    };
    this.users.push(user);
    return user;
  }
}

// users/dto/create-user.dto.ts - كائن نقل البيانات
export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly age: number;
}`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Index Academy
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Nest.js كامل بالعربي
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/UiAKv84bsY4?list=PLDQ11FgmbqQP1aaCCiU74LzebvZjY_S4G"
                        title="Nest.js Course - Index Academy"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLDQ11FgmbqQP1aaCCiU74LzebvZjY_S4G"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ Index Academy</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLDQ11FgmbqQP1aaCCiU74LzebvZjY_S4G"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon /> مشاهدة السلسلة الكاملة
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
                    <h2>Nest.js APIs - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح Youssef Abbas</h3>
                    <p>بناء APIs متكاملة باستخدام Nest.js</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم بناء APIs متكاملة باستخدام Nest.js من
                    خلال شرح الاستاذ يوسف عباس، بما في ذلك قواعد البيانات،
                    المصادقة، والتحقق من البيانات.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>قواعد البيانات</strong>
                        <div className="tool-details">
                          التكامل مع TypeORM و MongoDB
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المصادقة</strong>
                        <div className="tool-details">
                          تنفيذ JWT Authentication
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التحقق من البيانات</strong>
                        <div className="tool-details">
                          استخدام Validation Pipes و DTOs
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الوحدات الوسيطة</strong>
                        <div className="tool-details">
                          Middleware و Interceptors
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>بناء APIs في Nest.js:</h3>
                    <pre className="code-block">{`// auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

// auth/auth.controller.ts
import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @UsePipes(new ValidationPipe())
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}

// auth/dto/register.dto.ts
import { IsEmail, IsString, MinLength, IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}

// database/database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'nest_db',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}

// users/entities/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;
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
                          <strong>المحتوى:</strong> Nest.js APIs
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/iNqhEI0l1As?list=PL5gCk5NdNx5-W_GivoyivrwGOlNnffTX4"
                        title="Nest.js APIs - Youssef Abbas"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PL5gCk5NdNx5-W_GivoyivrwGOlNnffTX4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ Youssef Abbas</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://www.youtube.com/playlist?list=PL5gCk5NdNx5-W_GivoyivrwGOlNnffTX4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon /> مشاهدة السلسلة الكاملة
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
                    <h2>Nest.js متقدم - الشرح الثالث</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح Mahmoud Anani</h3>
                    <p>تقنيات متقدمة وأفضل الممارسات في Nest.js</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم تقنيات متقدمة في Nest.js مثل
                    WebSockets، Microservices، Testing، والعديد من الميزات
                    المتقدمة.
                  </p>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Mahmoud Anani
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> محمود عناني
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Nest.js متقدم
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/vYEbRZnJDIU?list=PLOldSEMXUdZsFAEJwxYkE83dhm1ZkWEOL"
                        title="Nest.js متقدم - Mahmoud Anani"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLOldSEMXUdZsFAEJwxYkE83dhm1ZkWEOL"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ Mahmoud Anani</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>بناء نظام إدارة المستخدمين مع المصادقة</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>تطوير RESTful API متكامل مع قواعد البيانات</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>تنفيذ WebSockets للتواصل في الوقت الحقيقي</p>
                      </div>
                      <div className="step">
                        <span className="step-number">4</span>
                        <p>بناء نظام Microservices متكامل</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLOldSEMXUdZsFAEJwxYkE83dhm1ZkWEOL"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon /> مشاهدة السلسلة الكاملة
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

              {activeLesson === 5 && (
                <div className="lesson-content">
                  <div className="lesson-header">
                    <span className="icon"></span>
                    <h2>Nest.js بالإنجليزية</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح Dave Gray</h3>
                    <p>Nest.js مع Prisma ORM و PostgreSQL</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء الأخير، ستتعلم Nest.js من خلال شرح Dave Gray
                    باللغة الإنجليزية، مع التركيز على التكامل مع Prisma ORM
                    وقواعد البيانات.
                  </p>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Dave Gray
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Nest.js مع Prisma ORM
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/6He5Gyuuvxk?list=PL0Zuz27SZ-6MexSAh5x1R3rU6Mg2zYBVr"
                        title="Nest.js with Prisma - Dave Gray"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PL0Zuz27SZ-6MexSAh5x1R3rU6Mg2zYBVr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ Dave Gray</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PL0Zuz27SZ-6MexSAh5x1R3rU6Mg2zYBVr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon /> مشاهدة السلسلة الكاملة
                    </a>
                    <Link to="/courses/nextjs" className="btn btn-outline">
                      الكورس التالي (Next.js){" "}
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
              <h3>دورة Nest.js الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">
                  Index Academy، يوسف عباس، محمود عناني، Dave Gray
                </p>
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
                  href="https://youtube.com/playlist?list=PLDQ11FgmbqQP1aaCCiU74LzebvZjY_S4G"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  Index Academy
                </a>
                <a
                  href="https://youtube.com/playlist?list=PL5gCk5NdNx5-W_GivoyivrwGOlNnffTX4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  Youssef Abbas
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLOldSEMXUdZsFAEJwxYkE83dhm1ZkWEOL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  Mahmoud Anani
                </a>
                <a
                  href="https://youtube.com/playlist?list=PL0Zuz27SZ-6MexSAh5x1R3rU6Mg2zYBVr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  Dave Gray
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
