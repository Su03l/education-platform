import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhpIcon from "@mui/icons-material/Php";

import "../../styles/laravel.css";

const lessons = [
  { id: 1, title: "مقدمة في Laravel", icon: "" },
  { id: 2, title: "أساسيات Laravel - الشرح الأول", icon: "" },
  { id: 3, title: "أساسيات Laravel - الشرح الثاني", icon: "" },
  { id: 4, title: "Laravel متقدم - الشرح الثالث", icon: "" },
  { id: 5, title: "Laravel بالإنجليزية", icon: "" },
];

export default function LaravelCourse() {
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
      1: "https://youtube.com/playlist?list=PLmhb7ed0Oj8mV7gsjxtKZqNh_uqnbuEpd",
      2: "https://youtube.com/playlist?list=PLDoPjvoNmBAy_mAhY0x8cHf8oSGPKsEKP",
      3: "https://www.youtube.com/watch?v=v6Vtn84gvzU",
      4: "https://youtube.com/playlist?list=PLDoPjvoNmBAy_mAhY0x8cHf8oSGPKsEKP",
      5: "https://youtube.com/playlist?list=PL3VM-unCzF8hy47mt9-chowaHNjfkuEVz",
    };
    return urls[activeLesson as keyof typeof urls];
  };

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
            <h1>Laravel الكامل</h1>
            <p>شرح متكامل لإطار العمل الأشهر في PHP - دورة شاملة</p>
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
                    <h2>مقدمة في Laravel</h2>
                  </div>

                  <p className="lesson-text">
                    Laravel هو إطار عمل PHP أنيق وواضح مفتوح المصدر، يتبع نمط
                    MVC ويهدف إلى جعل عملية تطوير الويب أسهل وأكثر متعة.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>PHP 8.1 أو أعلى:</strong>
                        <div className="tool-details">
                          إصدار PHP المدعوم من Laravel
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Composer:</strong>
                        <div className="tool-details">
                          مدير حزم PHP المطلوب لتثبيت Laravel
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>قاعدة بيانات:</strong>
                        <div className="tool-details">
                          MySQL, PostgreSQL, SQLite, أو SQL Server
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرر أكواد:</strong>
                        <div className="tool-details">
                          VS Code مع إضافات PHP و Laravel
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
                          <h4>تثبيت Composer</h4>
                          <p>تحميل وتثبيت Composer من الموقع الرسمي</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>تثبيت Laravel Installer</h4>
                          <p>تثبيت أداة Laravel العالمية عبر Composer</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>إنشاء مشروع جديد</h4>
                          <p>استخدام أمر laravel new لإنشاء أول مشروع</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>تشغيل الخادم</h4>
                          <p>تشغيل خادم التطوير باستخدام artisan serve</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>افهم MVC جيداً قبل البدء في Laravel</li>
                      <li>تعلم أساسيات PHP OOP قبل الشروع في الإطار</li>
                      <li>استخدم Artisan CLI فهو صديقك في التطوير</li>
                      <li>ابدأ بالمشاريع الصغيرة ثم تدرج نحو الكبيرة</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://laravel.com/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PhpIcon />
                      المرجع الرسمي لـ Laravel
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
                    <h2>أساسيات Laravel - الشرح الأول</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح Mohamed Qatish | محمد قطيش</h3>
                    <p>سلسلة شاملة لتعلم Laravel APIs من الصفر</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات Laravel من خلال شرح الاستاذ
                    محمد قطيش، بما في ذلك التهيئة، Routing، Controllers، وبناء
                    APIs.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في Laravel:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>نمط MVC</h4>
                        <p>
                          فهم نموذج Model-View-Controller وأهميته في Laravel.
                        </p>
                      </div>
                      <div className="concept-card">
                        <h4>Routing</h4>
                        <p>توجيه الطلبات إلى الـ controllers المناسبة.</p>
                      </div>
                      <div className="concept-card">
                        <h4>Eloquent ORM</h4>
                        <p>التعامل مع قواعد البيانات بطريقة كائنية التوجه.</p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>تهيئة المشروع</strong>
                        <div className="tool-details">
                          إنشاء مشروع جديد وتهيئة البيئة
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Routing الأساسي</strong>
                        <div className="tool-details">
                          تعريف المسارات والتحكم في الطلبات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الـ Controllers</strong>
                        <div className="tool-details">
                          إنشاء وتنظيم الـ controllers
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الـ Views</strong>
                        <div className="tool-details">
                          استخدام Blade template engine
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>أساسيات Laravel - أمثلة عملية:</h3>
                    <pre className="code-block">{`<?php
// routes/web.php
Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return 'صفحة عنا';
});

Route::get('/user/{id}', function ($id) {
    return 'معرف المستخدم: ' . $id;
});

// استخدام الـ controllers
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/create', [PostController::class, 'create']);
Route::post('/posts', [PostController::class, 'store']);
Route::get('/posts/{id}', [PostController::class, 'show']);

// app/Http/Controllers/PostController.php
namespace App\\Http\\Controllers;

use App\\Models\\Post;
use Illuminate\\Http\\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return view('posts.index', compact('posts'));
    }

    public function create()
    {
        return view('posts.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
        ]);

        Post::create($validated);

        return redirect('/posts')->with('success', 'تم إنشاء المنشور بنجاح!');
    }

    public function show($id)
    {
        $post = Post::findOrFail($id);
        return view('posts.show', compact('post'));
    }
}

// resources/views/posts/index.blade.php
@extends('layouts.app')

@section('content')
<div class="container">
    <h1>جميع المنشورات</h1>
    
    @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    @foreach($posts as $post)
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">{{ $post->title }}</h5>
                <p class="card-text">{{ Str::limit($post->content, 100) }}</p>
                <a href="/posts/{{ $post->id }}" class="btn btn-primary">قراءة المزيد</a>
            </div>
        </div>
    @endforeach
</div>
@endsection`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>نموذج Eloquent والهجرة:</h3>
                    <pre className="code-block">{`<?php
// database/migrations/2023_01_01_000000_create_posts_table.php
use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

class CreatePostsTable extends Migration
{
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('posts');
    }
}

// app/Models/Post.php
namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function getExcerptAttribute()
    {
        return Str::limit($this->content, 100);
    }
}

// تنفيذ الهجرة وإنشاء البيانات
php artisan migrate
php artisan make:factory PostFactory
php artisan make:seeder PostSeeder
php artisan db:seed`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Mohamed Qatish
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> محمد قطيش
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Laravel APIs
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/6Uf6ybu3W2g?list=PLmhb7ed0Oj8mV7gsjxtKZqNh_uqnbuEpd"
                        title="Laravel APIs - Mohamed Qatish"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLmhb7ed0Oj8mV7gsjxtKZqNh_uqnbuEpd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ Mohamed Qatish</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLmhb7ed0Oj8mV7gsjxtKZqNh_uqnbuEpd"
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
                    <h2>أساسيات Laravel - الشرح الثاني</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح أكاديمية ترميز</h3>
                    <p>بناء APIs متكاملة باستخدام Laravel</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم بناء APIs متكاملة باستخدام Laravel، بما
                    في ذلك المصادقة، التحقق من البيانات، والتعامل مع قواعد
                    البيانات.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>بناء RESTful APIs</strong>
                        <div className="tool-details">
                          إنشاء APIs متوافقة مع معايير REST
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المصادقة باستخدام Sanctum</strong>
                        <div className="tool-details">
                          تنفيذ نظام تسجيل دخول باستخدام Tokens
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التحقق من البيانات</strong>
                        <div className="tool-details">
                          استخدام Form Requests للتحقق من صحة البيانات
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الاستجابة JSON</strong>
                        <div className="tool-details">
                          تصميم استجابات APIs بشكل منظم
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>بناء APIs في Laravel:</h3>
                    <pre className="code-block">{`<?php
// routes/api.php
use App\\Http\\Controllers\\Api\\AuthController;
use App\\Http\\Controllers\\Api\\PostController;
use Illuminate\\Support\\Facades\\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    
    Route::apiResource('posts', PostController::class);
});

// app/Http/Controllers/Api/AuthController.php
namespace App\\Http\\Controllers\\Api;

use App\\Models\\User;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Hash;
use Illuminate\\Support\\Facades\\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user
        ], 201);
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'بيانات الدخول غير صحيحة'
            ], 401);
        }

        $user = User::where('email', $request->email)->first();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'تم تسجيل الخروج بنجاح'
        ]);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}

// app/Http/Controllers/Api/PostController.php
namespace App\\Http\\Controllers\\Api;

use App\\Models\\Post;
use App\\Http\\Requests\\StorePostRequest;
use App\\Http\\Requests\\UpdatePostRequest;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('user')->latest()->get();
        
        return response()->json([
            'data' => $posts,
            'message' => 'تم جلب المنشورات بنجاح'
        ]);
    }

    public function store(StorePostRequest $request)
    {
        $post = Post::create([
            'title' => $request->title,
            'content' => $request->content,
            'user_id' => auth()->id()
        ]);

        return response()->json([
            'data' => $post,
            'message' => 'تم إنشاء المنشور بنجاح'
        ], 201);
    }

    public function show(Post $post)
    {
        return response()->json([
            'data' => $post->load('user', 'comments'),
            'message' => 'تم جلب المنشور بنجاح'
        ]);
    }

    public function update(UpdatePostRequest $request, Post $post)
    {
        $this->authorize('update', $post);

        $post->update($request->validated());

        return response()->json([
            'data' => $post,
            'message' => 'تم تحديث المنشور بنجاح'
        ]);
    }

    public function destroy(Post $post)
    {
        $this->authorize('delete', $post);
        
        $post->delete();

        return response()->json([
            'message' => 'تم حذف المنشور بنجاح'
        ]);
    }
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
                          <strong>المدرس:</strong> الاستاذ يعرب
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Laravel APIs متكاملة
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/v6Vtn84gvzU"
                        title="Laravel APIs - أكاديمية ترميز"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://www.youtube.com/watch?v=v6Vtn84gvzU"
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
                    <h2>Laravel متقدم - الشرح الثالث</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح الزيرو ويب سكول</h3>
                    <p>إتقان Laravel بتقنيات متقدمة وأفضل الممارسات</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم تقنيات متقدمة في Laravel مثل Events,
                    Listeners, Jobs, Queues، والعديد من الميزات المتقدمة.
                  </p>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> الزيرو ويب سكول
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> الاستاذ اسامة الزيرو
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Mastering Laravel
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/bXjRQM_VK_I?list=PLDoPjvoNmBAy_mAhY0x8cHf8oSGPKsEKP"
                        title="Mastering Laravel - الزيرو ويب سكول"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLDoPjvoNmBAy_mAhY0x8cHf8oSGPKsEKP"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة للزيرو ويب سكول</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>بناء نظام مدونة متكامل مع لوحة تحكم</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>تنفيذ نظام مستخدمين متقدم مع الصلاحيات</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>إنشاء RESTful API كامل للتطبيقات</p>
                      </div>
                      <div className="step">
                        <span className="step-number">4</span>
                        <p>تطبيق مفاهيم متقدمة مثل Queues و Events</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLDoPjvoNmBAy_mAhY0x8cHf8oSGPKsEKP"
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
                    <h2>Laravel بالإنجليزية</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح Laracasts - Jeffrey Way</h3>
                    <p>30 يوم لتعلم Laravel من الخبير العالمي</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم Laravel من خلال شرح Jeffrey Way باللغة
                    الإنجليزية، وهو من أفضل المصادر العالمية لتعلم Laravel.
                  </p>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Laracasts
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> Jeffrey Way
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> 30 Days to Learn Laravel
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/1NjOWtQ7S2o?list=PL3VM-unCzF8hy47mt9-chowaHNjfkuEVz"
                        title="30 Days to Learn Laravel - Laracasts"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PL3VM-unCzF8hy47mt9-chowaHNjfkuEVz"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ Laracasts</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PL3VM-unCzF8hy47mt9-chowaHNjfkuEVz"
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
              <h3>دورة Laravel الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">
                  محمد قطيش، أكاديمية ترميز، الزيرو ويب سكول، Laracasts
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
                  href="https://youtube.com/playlist?list=PLmhb7ed0Oj8mV7gsjxtKZqNh_uqnbuEpd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  محمد قطيش
                </a>
                <a
                  href="https://www.youtube.com/watch?v=v6Vtn84gvzU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  أكاديمية ترميز
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLDoPjvoNmBAy_mAhY0x8cHf8oSGPKsEKP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  الزيرو ويب سكول
                </a>
                <a
                  href="https://youtube.com/playlist?list=PL3VM-unCzF8hy47mt9-chowaHNjfkuEVz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  Laracasts
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
