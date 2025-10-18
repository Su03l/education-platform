import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CodeIcon from "@mui/icons-material/Code";

import "../../styles/flutter.css";

const lessons = [
  { id: 1, title: "مقدمة في Flutter", icon: "" },
  { id: 2, title: "أساسيات Flutter - الشرح الأول", icon: "" },
  { id: 3, title: "أساسيات Flutter  - الشرح الثاني", icon: "" },
  { id: 4, title: "أساسيات Flutter - الشرح الثالث", icon: "" },
];

export default function FlutterCourse() {
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
      1: "https://youtube.com/playlist?list=PLw6Y5u47CYq47oDw63bMqkq06fjuoK_GJ",
      2: "https://youtube.com/playlist?list=PL93xoMrxRJIvtIXjAiX15wcyNv-LOWZa9",
      3: "https://youtube.com/playlist?list=PL93xoMrxRJIvHhxhB21YzzeimEEzzAz6g",
      4: "https://youtube.com/playlist?list=PL8ZeRCFAAEvS4CicwrEKy2vmbm9glaLxZ",
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
            <h1>Flutter الكامل</h1>
            <p>شرح متكامل لتطوير تطبيقات الموبايل - دورة شاملة</p>
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
                    <h2>مقدمة في Flutter</h2>
                  </div>

                  <p className="lesson-text">
                    Flutter هو إطار عمل مفتوح المصدر من جوجل لإنشاء تطبيقات
                    متميزة ومجمعة أصليًا للجوال والويب وسطح المكتب من قاعدة كود
                    واحدة.
                  </p>

                  <div className="tools-section">
                    <h3>المتطلبات الأساسية:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>لغة Dart:</strong>
                        <div className="tool-details">
                          اللغة المستخدمة في تطوير تطبيقات Flutter
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Android Studio / VS Code:</strong>
                        <div className="tool-details">
                          بيئة التطوير المتكاملة مع إضافات Flutter
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Flutter SDK:</strong>
                        <div className="tool-details">
                          حزمة تطوير Flutter الأساسية
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>محرك أندرويد / iOS:</strong>
                        <div className="tool-details">
                          محاكي أو جهاز حقيقي للاختبار
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
                          <h4>تثبيت Flutter SDK</h4>
                          <p>تحميل وتثبيت Flutter SDK من الموقع الرسمي</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>تثبيت Android Studio</h4>
                          <p>تثبيت Android Studio مع إضافات Flutter و Dart</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>تهيئة المحاكي</h4>
                          <p>إعداد محاكي أندرويد أو iOS للاختبار</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>اختبار التثبيت</h4>
                          <p>تشغيل flutter doctor للتحقق من التثبيت</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tip-box">
                    <h3>نصائح للمبتدئين:</h3>
                    <ul className="tips-list">
                      <li>ابدأ بتعلم أساسيات لغة Dart قبل Flutter</li>
                      <li>تدرب على بناء واجهات بسيطة أولاً</li>
                      <li>افهم جيداً مفهوم الـ Widgets و State Management</li>
                      <li>استخدم المحاكي والجهاز الحقيقي للاختبار</li>
                    </ul>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://flutter.dev/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeIcon />
                      المرجع الرسمي الخاص بـ Flutter
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
                    <h2>أساسيات Flutter - الشرح الأول</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح Ammar Alkhatib</h3>
                    <p>سلسلة شاملة لتعلم Flutter من الصفر حتى الاحتراف</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعرف على أساسيات Flutter من خلال شرح الاستاذ
                    عمار الخطيب، بما في ذلك الـ Widgets، الـ State، والتخطيط.
                  </p>

                  <div className="concepts-section">
                    <h3>المفاهيم الأساسية في Flutter:</h3>
                    <div className="concepts-grid">
                      <div className="concept-card">
                        <h4>الـ Widgets</h4>
                        <p>لبناء واجهات المستخدم في Flutter، كل شيء Widget.</p>
                      </div>
                      <div className="concept-card">
                        <h4>الـ State</h4>
                        <p>إدارة حالة التطبيق والتحديثات الديناميكية.</p>
                      </div>
                      <div className="concept-card">
                        <h4>التخطيط</h4>
                        <p>ترتيب الـ Widgets باستخدام Rows, Columns وغيرها.</p>
                      </div>
                    </div>
                  </div>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>إنشاء أول تطبيق</strong>
                        <div className="tool-details">
                          استخدام flutter create وإنشاء أول مشروع
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>الـ Widgets الأساسية</strong>
                        <div className="tool-details">
                          Text, Container, Row, Column, Scaffold
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>إدارة الحالة</strong>
                        <div className="tool-details">
                          Stateful vs Stateless Widgets
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التنقل بين الشاشات</strong>
                        <div className="tool-details">
                          استخدام Navigator للتنقل
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>أساسيات Flutter - أمثلة عملية:</h3>
                    <pre className="code-block">{`import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'تطبيق Flutter الأول',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('تطبيق عداد'),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'عدد النقرات:',
              style: TextStyle(fontSize: 20),
            ),
            Text(
              '\\$_counter',
              style: TextStyle(fontSize: 40, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 20),
            Container(
              padding: EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.grey[200],
                borderRadius: BorderRadius.circular(12),
              ),
              child: Column(
                children: [
                  Text(
                    'معلومات التطبيق',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 10),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      Icon(Icons.android, color: Colors.green),
                      Icon(Icons.apple, color: Colors.black),
                      Icon(Icons.web, color: Colors.blue),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'زيادة',
        child: Icon(Icons.add),
      ),
    );
  }
}

// شاشة ثانية للتنقل
class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('الشاشة الثانية'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'مرحباً بك في الشاشة الثانية!',
              style: TextStyle(fontSize: 24),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text('العودة للشاشة الرئيسية'),
            ),
          ],
        ),
      ),
    );
  }
}`}</pre>
                  </div>

                  <div className="code-example">
                    <h3>الـ Widgets والتخطيط:</h3>
                    <pre className="code-block">{`import 'package:flutter/material.dart';

class WidgetsExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('أمثلة الـ Widgets'),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // نص وعنوان
            Text(
              'عنوان رئيسي',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
                color: Colors.blue,
              ),
            ),
            SizedBox(height: 10),
            Text(
              'هذا نص عادي يصف محتوى الصفحة يمكن أن يكون طويلاً بعض الشيء لاختبار التخطيط.',
              style: TextStyle(fontSize: 16),
            ),
            
            SizedBox(height: 20),
            
            // صورة
            Container(
              height: 200,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(12),
                image: DecorationImage(
                  image: NetworkImage('https://picsum.photos/400/200'),
                  fit: BoxFit.cover,
                ),
              ),
            ),
            
            SizedBox(height: 20),
            
            // أزرار متنوعة
            Row(
              children: [
                Expanded(
                  child: ElevatedButton(
                    onPressed: () {},
                    child: Text('زر أساسي'),
                  ),
                ),
                SizedBox(width: 10),
                Expanded(
                  child: OutlinedButton(
                    onPressed: () {},
                    child: Text('زر إطار'),
                  ),
                ),
              ],
            ),
            
            SizedBox(height: 20),
            
            // قائمة من العناصر
            Card(
              child: Padding(
                padding: EdgeInsets.all(16),
                child: Column(
                  children: [
                    ListTile(
                      leading: Icon(Icons.person, color: Colors.blue),
                      title: Text('المستخدم الأول'),
                      subtitle: Text('user1@example.com'),
                      trailing: Icon(Icons.arrow_forward_ios),
                    ),
                    Divider(),
                    ListTile(
                      leading: Icon(Icons.person, color: Colors.green),
                      title: Text('المستخدم الثاني'),
                      subtitle: Text('user2@example.com'),
                      trailing: Icon(Icons.arrow_forward_ios),
                    ),
                    Divider(),
                    ListTile(
                      leading: Icon(Icons.person, color: Colors.orange),
                      title: Text('المستخدم الثالث'),
                      subtitle: Text('user3@example.com'),
                      trailing: Icon(Icons.arrow_forward_ios),
                    ),
                  ],
                ),
              ),
            ),
            
            SizedBox(height: 20),
            
            // شبكة من العناصر
            GridView.count(
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              crossAxisCount: 3,
              crossAxisSpacing: 10,
              mainAxisSpacing: 10,
              children: List.generate(6, (index) {
                return Container(
                  decoration: BoxDecoration(
                    color: Colors.blue[100],
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.star, color: Colors.blue),
                      Text('عنصر \\$//{index + 1}'),
                    ],
                  ),
                );
              }),
            ),
          ],
        ),
      ),
    );
  }
}`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Ammar Alkhatib
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> عمار الخطيب
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Flutter كامل
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/lRercKJaAes?list=PLw6Y5u47CYq47oDw63bMqkq06fjuoK_GJ"
                        title="Flutter course - Ammar Alkhatib"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PLw6Y5u47CYq47oDw63bMqkq06fjuoK_GJ"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ Ammar Alkhatib</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PLw6Y5u47CYq47oDw63bMqkq06fjuoK_GJ"
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
                    <h2>أساسيات Flutter - الشرح الثاني </h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح Wael abo hamza</h3>
                    <p>دمج Flutter مع Firebase لتطبيقات كاملة</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء، ستتعلم كيفية دمج Flutter مع Firebase لإنشاء
                    تطبيقات كاملة مع قاعدة بيانات، مصادقة، وتخزين ملفات.
                  </p>

                  <div className="tools-section">
                    <h3>ما ستتعلمه في هذا الجزء:</h3>
                    <ul className="tools-list">
                      <li>
                        <span className="bullet">•</span>
                        <strong>تهيئة Firebase</strong>
                        <div className="tool-details">
                          ربط تطبيق Flutter بمشروع Firebase
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>المصادقة</strong>
                        <div className="tool-details">
                          تسجيل الدخول باستخدام البريد الإلكتروني وجوجل
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>Firestore Database</strong>
                        <div className="tool-details">
                          تخزين وجلب البيانات في الوقت الحقيقي
                        </div>
                      </li>
                      <li>
                        <span className="bullet">•</span>
                        <strong>التخزين السحابي</strong>
                        <div className="tool-details">
                          رفع وإدارة الملفات في Cloud Storage
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="code-example">
                    <h3>دمج Flutter مع Firebase:</h3>
                    <pre className="code-block">{`import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter with Firebase',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: StreamBuilder<User?>(
        stream: FirebaseAuth.instance.authStateChanges(),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return HomePage();
          }
          return LoginPage();
        },
      ),
    );
  }
}

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  Future<void> _signIn() async {
    try {
      await FirebaseAuth.instance.signInWithEmailAndPassword(
        email: _emailController.text.trim(),
        password: _passwordController.text.trim(),
      );
    } on FirebaseAuthException catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(e.message ?? 'حدث خطأ ما')),
      );
    }
  }

  Future<void> _signUp() async {
    try {
      await FirebaseAuth.instance.createUserWithEmailAndPassword(
        email: _emailController.text.trim(),
        password: _passwordController.text.trim(),
      );
    } on FirebaseAuthException catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(e.message ?? 'حدث خطأ ما')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('تسجيل الدخول')),
      body: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: _emailController,
              decoration: InputDecoration(
                labelText: 'البريد الإلكتروني',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 16),
            TextField(
              controller: _passwordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: 'كلمة المرور',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 20),
            Row(
              children: [
                Expanded(
                  child: ElevatedButton(
                    onPressed: _signIn,
                    child: Text('تسجيل الدخول'),
                  ),
                ),
                SizedBox(width: 10),
                Expanded(
                  child: OutlinedButton(
                    onPressed: _signUp,
                    child: Text('إنشاء حساب'),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class HomePage extends StatelessWidget {
  final _messageController = TextEditingController();

  void _addMessage() {
    if (_messageController.text.isNotEmpty) {
      FirebaseFirestore.instance.collection('messages').add({
        'text': _messageController.text,
        'timestamp': FieldValue.serverTimestamp(),
        'userId': FirebaseAuth.instance.currentUser!.uid,
      });
      _messageController.clear();
    }
  }

  void _signOut() {
    FirebaseAuth.instance.signOut();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('الرئيسية'),
        actions: [
          IconButton(
            icon: Icon(Icons.logout),
            onPressed: _signOut,
          ),
        ],
      ),
      body: Column(
        children: [
          Padding(
            padding: EdgeInsets.all(16),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _messageController,
                    decoration: InputDecoration(
                      labelText: 'رسالة جديدة',
                      border: OutlineInputBorder(),
                    ),
                  ),
                ),
                SizedBox(width: 10),
                ElevatedButton(
                  onPressed: _addMessage,
                  child: Text('إرسال'),
                ),
              ],
            ),
          ),
          Expanded(
            child: StreamBuilder<QuerySnapshot>(
              stream: FirebaseFirestore.instance
                  .collection('messages')
                  .orderBy('timestamp', descending: true)
                  .snapshots(),
              builder: (context, snapshot) {
                if (snapshot.hasError) {
                //   return Center(child: Text('حدث خطأ: // $//{snapshot.error}'));
                }

                if (snapshot.connectionState == ConnectionState.waiting) {
                  return Center(child: CircularProgressIndicator());
                }

                return ListView(
                  children: snapshot.data!.docs.map((doc) {
                    final data = doc.data() as Map<String, dynamic>;
                    return ListTile(
                      title: Text(data['text']),
                      subtitle: Text(
                        data['timestamp'] != null
                            ? data['timestamp'].toDate().toString()
                            : '',
                      ),
                    );
                  }).toList(),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}`}</pre>
                  </div>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Wael abo hamza
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> وائل ابو حمزة
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Flutter مع Firebase
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل الجزء الاول :
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/6bSP4vazmyw?list=PL93xoMrxRJIvtIXjAiX15wcyNv-LOWZa9"
                        title="Flutter with Firebase - Wael abo hamza"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PL93xoMrxRJIvtIXjAiX15wcyNv-LOWZa9&si=nxuJEs1PGelgi9HG"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ Wael abo hamza</span>
                    </div>

                    <h3 style={{ marginTop: "30px" }}>
                      <PlayArrowIcon /> فيديو الشرح الكامل الجزء الثاني :
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/gZSqLbxXjjs?list=PL93xoMrxRJIvHhxhB21YzzeimEEzzAz6g"
                        title="Flutter with Firebase - Wael abo hamza"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PL93xoMrxRJIvHhxhB21YzzeimEEzzAz6g"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ Wael abo hamza</span>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href={getYouTubeUrl()}
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
                    <h2>أساسيات Flutter - الشرح الثالث</h2>
                  </div>

                  <div className="instructor-info">
                    <h3>شرح Code With Ramy</h3>
                    <p>تقنيات متقدمة وأفضل الممارسات في Flutter</p>
                  </div>

                  <p className="lesson-text">
                    في هذا الجزء الأخير، ستتعلم تقنيات متقدمة في Flutter مثل
                    State Management المتقدم، التحميل الأمثل، والتطبيقات
                    المعقدة.
                  </p>

                  <div className="video-section">
                    <div className="video-info">
                      <h3>تفاصيل الشرح:</h3>
                      <div className="video-details">
                        <div className="detail-item">
                          <strong>القناة:</strong> Code With Ramy
                        </div>
                        <div className="detail-item">
                          <strong>المدرس:</strong> رامي
                        </div>
                        <div className="detail-item">
                          <strong>المحتوى:</strong> Flutter متقدم
                        </div>
                      </div>
                    </div>
                    <h3>
                      <PlayArrowIcon /> فيديو الشرح الكامل:
                    </h3>
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube.com/embed/7yu2CJT2-B4?list=PL8ZeRCFAAEvS4CicwrEKy2vmbm9glaLxZ"
                        title="Flutter متقدم - Code With Ramy"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-footer">
                      <a
                        href="https://youtube.com/playlist?list=PL8ZeRCFAAEvS4CicwrEKy2vmbm9glaLxZ"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LaunchIcon /> مشاهدة السلسلة الكاملة على يوتيوب
                      </a>
                      <span>جميع الحقوق محفوظة لـ Code With Ramy</span>
                    </div>
                  </div>

                  <div className="practice-section">
                    <h3>مشروع نهائي متكامل:</h3>
                    <div className="practice-steps">
                      <div className="step">
                        <span className="step-number">1</span>
                        <p>بناء تطبيق طقس متكامل مع APIs خارجية</p>
                      </div>
                      <div className="step">
                        <span className="step-number">2</span>
                        <p>تطبيق تجارة إلكترونية مع سلة مشتريات</p>
                      </div>
                      <div className="step">
                        <span className="step-number">3</span>
                        <p>تطبيق دردشة في الوقت الحقيقي</p>
                      </div>
                      <div className="step">
                        <span className="step-number">4</span>
                        <p>نشر التطبيق على متاجر التطبيقات</p>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <a
                      className="btn btn-primary"
                      href="https://youtube.com/playlist?list=PL8ZeRCFAAEvS4CicwrEKy2vmbm9glaLxZ"
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
              <h3>دورة Flutter الكاملة</h3>
              <div className="course-info">
                <p>شرح متكامل من مصادر متنوعة</p>
                <p className="instructor">عمار الخطيب، وائل ابو حمزة، رامي</p>
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
                  href="https://youtube.com/playlist?list=PLw6Y5u47CYq47oDw63bMqkq06fjuoK_GJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  عمار الخطيب
                </a>
                <a
                  href="https://youtube.com/playlist?list=PL93xoMrxRJIvtIXjAiX15wcyNv-LOWZa9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  وائل ابو حمزة
                </a>
                <a
                  href="https://youtube.com/playlist?list=PL8ZeRCFAAEvS4CicwrEKy2vmbm9glaLxZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-btn"
                >
                  <YouTubeIcon />
                  Code With Ramy
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
