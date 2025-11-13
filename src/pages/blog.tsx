import React, { useState, useEffect } from "react";
import "../styles/blog.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import { supabase } from "../lib/supabase";
import type { Database } from "../types/supabase";

type PostRow = Database["public"]["Tables"]["posts"]["Row"];
type PostInsert = Database["public"]["Tables"]["posts"]["Insert"];
// type PostUpdate = Database["public"]["Tables"]["posts"]["Update"];

// --- TYPES ---
type Tab = "info" | "notes" | "courses" | "paths";
type Pathway =
  | "frontend-web"
  | "backend-web"
  | "frontend-app"
  | "basics"
  | "ui-ux";

interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  time: string;
  twitter: string;
  tab: Tab;
  likes: number;
  isLiked: boolean;
  timestamp: Date;
  pathway?: Pathway;
  links?: string[];
  isPermanent?: boolean;
}

const permanentPosts: Post[] = [
  {
    id: 1,
    author: "سليمان يوسف",
    title: "اضافة معلومات جديدة الى مجتمعنا",
    content:
      "في المعلومات يمكنك اضافةة معلومات عامة عن التطوير والتصميم, او اي شي اخر. شاركنا معرفتك!",
    time: "قبل 8 دقيقة",
    twitter: "su05l",
    tab: "info",
    likes: 999,
    isLiked: false,
    timestamp: new Date(Date.now() - 8 * 60 * 1000),
    pathway: "frontend-web",
    isPermanent: true,
  },
  {
    id: 2,
    author: "سليمان يوسف",
    title: "اضافة الملاحظات",
    content:
      "يمكنك اضافة الملاحظات هنا من اجل التطوير والتحديث المستمر , شاركنا ملاحظاتك هنا.",
    time: "قبل 7 دقيقة",
    twitter: "su05l",
    tab: "notes",
    likes: 999,
    isLiked: false,
    timestamp: new Date(Date.now() - 7 * 60 * 1000),
    pathway: "frontend-web",
    isPermanent: true,
  },
  {
    id: 3,
    author: "سليمان يوسف",
    title: "اضافة دورة",
    content:
      "في اضافة دورة يمكنك مشاركتنا باي دورة مخصصة للمسارات قد استفدت منها ووضعها كروابط يفضل يوتيوب",
    time: "قبل 5 دقيقة",
    twitter: "su05l",
    tab: "courses",
    likes: 999,
    isLiked: false,
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    pathway: "frontend-web",
    links: ["https://youtube.com"],
    isPermanent: true,
  },
  {
    id: 4,
    author: "سليمان يوسف",
    title: "اقتراح مسار جديد",
    content:
      "هنا يمكنك اقتراح اي مسار تريده مع ذكر بعض التفاصيل الخاصة بالمسار.",
    time: "الآن",
    twitter: "su05l",
    tab: "paths",
    likes: 999,
    isLiked: false,
    timestamp: new Date(),
    isPermanent: true,
  },
];

// --- TIME UTILITY FUNCTIONS ---
const getTimeAgo = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "الآن";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `قبل ${diffInMinutes} دقيقة`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `قبل ${diffInHours} ساعة`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `قبل ${diffInDays} يوم`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `قبل ${diffInWeeks} أسبوع`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `قبل ${diffInMonths} شهر`;
  }

  const diffInYears = Math.floor(diffInDays / 365);
  return `قبل ${diffInYears} سنة`;
};

const formatDateTime = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}/${month}/${day} ${hours}:${minutes}`;
};

// --- PATHWAY OPTIONS ---
const pathwayOptions = [
  { value: "frontend-web", label: "مسار Front-end (Web)" },
  { value: "backend-web", label: "مسار Back-end (Web)" },
  { value: "frontend-app", label: "مسار Front-end (App)" },
  { value: "basics", label: "أساسيات البرمجة" },
  { value: "ui-ux", label: "مسار تصميم الواجهات UI/UX" },
];

const getPathwayLabel = (value: Pathway): string => {
  const option = pathwayOptions.find((opt) => opt.value === value);
  return option ? option.label : value;
};

// --- COMPONENTS ---

// Delete Confirmation Modal
const DeleteConfirmationModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  postTitle: string;
}> = ({ isOpen, onClose, onConfirm, postTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="blog-modal-overlay" onClick={onClose}>
      <div
        className="blog-modal-content blog-delete-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h4>تأكيد الحذف</h4>
        <p>هل أنت متأكد من حذف المنشور "{postTitle}"؟</p>
        <div className="blog-form-actions">
          <button
            type="button"
            className="blog-btn blog-btn-cancel"
            onClick={onClose}
          >
            إلغاء
          </button>
          <button
            type="button"
            className="blog-btn blog-btn-delete"
            onClick={onConfirm}
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
};

// PostCard Component
const PostCard: React.FC<{
  post: Post;
  onLike: (id: number) => void;
  onDelete: (id: number) => void;
}> = ({ post, onLike, onDelete }) => {
  const [currentTime, setCurrentTime] = useState(getTimeAgo(post.timestamp));
  const [showFullDate, setShowFullDate] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getTimeAgo(post.timestamp));
    }, 60000);

    return () => clearInterval(interval);
  }, [post.timestamp]);

  const handleTimeClick = () => {
    setShowFullDate(!showFullDate);
  };

  const handleDeleteClick = () => {
    if (post.isPermanent) return; // لا يمكن حذف البوستات الدائمة
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = () => {
    onDelete(post.id);
    setShowDeleteConfirm(false);
  };

  const getDomainFromUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname;
      return domain.replace("www.", "");
    } catch {
      return url;
    }
  };

  return (
    <>
      <div className="blog-post-card">
        <div className="blog-post-header">
          <div className="blog-post-author-info">
            <span className="blog-post-author">{post.author}</span>
            {post.pathway && (
              <span className="blog-post-pathway">
                {getPathwayLabel(post.pathway)}
              </span>
            )}
          </div>
          {!post.isPermanent && ( // إظهار زر الحذف فقط للبوستات غير الدائمة
            <button
              className="blog-delete-post-btn"
              onClick={handleDeleteClick}
              title="حذف المنشور"
            >
              <DeleteIcon />
            </button>
          )}
        </div>
        <div className="blog-post-body">
          <h5>{post.title}</h5>
          <p>{post.content}</p>
          {post.links && post.links.length > 0 && (
            <div className="blog-post-links">
              <strong>الروابط:</strong>
              <div className="blog-links-container">
                {post.links.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-post-link"
                  >
                    {getDomainFromUrl(link)}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="blog-post-footer">
          <div className="blog-post-actions">
            <button className="blog-like-btn" onClick={() => onLike(post.id)}>
              {post.isLiked ? (
                <FavoriteIcon style={{ color: "#e74c3c" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
              <span>{post.likes}</span>
            </button>
          </div>
          <div className="blog-post-meta">
            {post.twitter && (
              <a
                href={`https://twitter.com/${post.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-post-twitter"
              >
                @{post.twitter}
              </a>
            )}
            <span
              className="blog-post-time"
              onClick={handleTimeClick}
              title={formatDateTime(post.timestamp)}
            >
              {showFullDate ? formatDateTime(post.timestamp) : currentTime}
            </span>
          </div>
        </div>
      </div>

      <DeleteConfirmationModal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={handleConfirmDelete}
        postTitle={post.title}
      />
    </>
  );
};

// Modal Components مع زر الإغلاق
const InfoNotesModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (
    post: Omit<Post, "id" | "time" | "likes" | "isLiked" | "timestamp">
  ) => void;
  activeTab: Tab;
}> = ({ isOpen, onClose, onAddPost, activeTab }) => {
  const [author, setAuthor] = useState("");
  const [twitter, setTwitter] = useState("");
  const [pathway, setPathway] = useState<Pathway>("frontend-web");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const twitterUsername = twitter.startsWith("@")
      ? twitter.slice(1)
      : twitter;
    onAddPost({
      author,
      twitter: twitterUsername,
      title,
      content,
      tab: activeTab,
      pathway,
    });
    setAuthor("");
    setTwitter("");
    setPathway("frontend-web");
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <div className="blog-modal-overlay" onClick={onClose}>
      <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="blog-modal-header">
          <h4>
            {activeTab === "info"
              ? "إضافة معلومات جديدة"
              : "إضافة ملاحظات جديدة"}
          </h4>
          <button className="blog-modal-close" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="blog-form">
          <div className="blog-form-group">
            <label htmlFor="author">الاسم *</label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="blog-form-group">
            <label htmlFor="twitter">اسم المستخدم في تويتر</label>
            <input
              id="twitter"
              type="text"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              placeholder="username (اختياري)"
            />
          </div>
          <div className="blog-form-group">
            <label htmlFor="pathway">المسار *</label>
            <select
              id="pathway"
              value={pathway}
              onChange={(e) => setPathway(e.target.value as Pathway)}
              required
            >
              {pathwayOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="blog-form-group">
            <label htmlFor="title">العنوان *</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="blog-form-group">
            <label htmlFor="content">المحتوى *</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="blog-form-actions">
            <button
              type="button"
              className="blog-btn blog-btn-cancel"
              onClick={onClose}
            >
              إلغاء
            </button>
            <button type="submit" className="blog-btn blog-btn-submit">
              إرسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CoursesModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (
    post: Omit<Post, "id" | "time" | "likes" | "isLiked" | "timestamp">
  ) => void;
}> = ({ isOpen, onClose, onAddPost }) => {
  const [author, setAuthor] = useState("");
  const [twitter, setTwitter] = useState("");
  const [pathway, setPathway] = useState<Pathway>("frontend-web");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [links, setLinks] = useState<string[]>([""]);

  if (!isOpen) return null;

  const addLink = () => {
    setLinks([...links, ""]);
  };

  const removeLink = (index: number) => {
    if (links.length > 1) {
      setLinks(links.filter((_, i) => i !== index));
    }
  };

  const updateLink = (index: number, value: string) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const twitterUsername = twitter.startsWith("@")
      ? twitter.slice(1)
      : twitter;
    const filteredLinks = links.filter((link) => link.trim() !== "");

    onAddPost({
      author: author || twitterUsername,
      twitter: twitterUsername,
      title,
      content,
      tab: "courses",
      pathway,
      links: filteredLinks,
    });
    setAuthor("");
    setTwitter("");
    setPathway("frontend-web");
    setTitle("");
    setContent("");
    setLinks([""]);
    onClose();
  };

  return (
    <div className="blog-modal-overlay" onClick={onClose}>
      <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="blog-modal-header">
          <h4>إضافة دورة جديدة</h4>
          <button className="blog-modal-close" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="blog-form">
          <div className="blog-form-group">
            <label htmlFor="author">الاسم (اختياري)</label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="اسمك الكامل"
            />
          </div>
          <div className="blog-form-group">
            <label htmlFor="twitter">اسم المستخدم في تويتر *</label>
            <input
              id="twitter"
              type="text"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              placeholder="username"
              required
            />
          </div>
          <div className="blog-form-group">
            <label htmlFor="pathway">المسار *</label>
            <select
              id="pathway"
              value={pathway}
              onChange={(e) => setPathway(e.target.value as Pathway)}
              required
            >
              {pathwayOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="blog-form-group">
            <label htmlFor="title">عنوان الدورة *</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="blog-form-group">
            <label htmlFor="content">وصف الدورة *</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="blog-form-group">
            <label>روابط الدورة</label>
            {links.map((link, index) => (
              <div key={index} className="blog-link-input">
                <input
                  type="url"
                  value={link}
                  onChange={(e) => updateLink(index, e.target.value)}
                  placeholder="https://example.com/course"
                />
                {links.length > 1 && (
                  <button
                    type="button"
                    className="blog-remove-link"
                    onClick={() => removeLink(index)}
                  >
                    <RemoveIcon />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="blog-add-link-btn"
              onClick={addLink}
            >
              <AddIcon /> إضافة رابط آخر
            </button>
          </div>
          <div className="blog-form-actions">
            <button
              type="button"
              className="blog-btn blog-btn-cancel"
              onClick={onClose}
            >
              إلغاء
            </button>
            <button type="submit" className="blog-btn blog-btn-submit">
              إرسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PathsModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (
    post: Omit<Post, "id" | "time" | "likes" | "isLiked" | "timestamp">
  ) => void;
}> = ({ isOpen, onClose, onAddPost }) => {
  const [name, setName] = useState("");
  const [twitter, setTwitter] = useState("");
  const [pathwayName, setPathwayName] = useState("");
  const [details, setDetails] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const twitterUsername = twitter.startsWith("@")
      ? twitter.slice(1)
      : twitter;

    onAddPost({
      author: name,
      twitter: twitterUsername,
      title: `اقتراح مسار: ${pathwayName}`,
      content: details || `أقترح إضافة مسار ${pathwayName} إلى منصة المجتمع.`,
      tab: "paths",
    });
    setName("");
    setTwitter("");
    setPathwayName("");
    setDetails("");
    onClose();
  };

  return (
    <div className="blog-modal-overlay" onClick={onClose}>
      <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="blog-modal-header">
          <h4>إضافة مسار جديد</h4>
          <button className="blog-modal-close" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="blog-form">
          <div className="blog-form-group">
            <label htmlFor="name">الاسم *</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="أدخل اسمك الكامل"
              required
            />
          </div>
          <div className="blog-form-group">
            <label htmlFor="twitter">حساب تويتر *</label>
            <input
              id="twitter"
              type="text"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              placeholder="username"
              required
            />
          </div>
          <div className="blog-form-group">
            <label htmlFor="pathwayName">اسم المسار *</label>
            <input
              id="pathwayName"
              type="text"
              value={pathwayName}
              onChange={(e) => setPathwayName(e.target.value)}
              placeholder="مثال: تطوير الويب، برمجة الجوال، الذكاء الاصطناعي..."
              required
            />
          </div>
          <div className="blog-form-group">
            <label htmlFor="details">تفاصيل أخرى</label>
            <textarea
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="شارك تجربتك، التحديات، النصائح، المدة، المصادر التي استخدمتها، أو أي تفاصيل تريد إضافتها... (اختياري)"
              rows={4}
            />
          </div>
          <div className="blog-form-actions">
            <button
              type="button"
              className="blog-btn blog-btn-cancel"
              onClick={onClose}
            >
              إلغاء
            </button>
            <button type="submit" className="blog-btn blog-btn-submit">
              إرسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main Blog Page Component
export default function Blog() {
  const [activeTab, setActiveTab] = useState<Tab>("info");
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  // جلب البيانات من Supabase
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error);
        return;
      }

      if (data) {
        const formattedPosts: Post[] = data.map((post: PostRow) => ({
          id: post.id,
          author: post.author,
          title: post.title,
          content: post.content,
          time: getTimeAgo(new Date(post.created_at)),
          twitter: post.twitter || "",
          tab: post.tab,
          likes: post.likes || 0,
          isLiked: false,
          timestamp: new Date(post.created_at),
          pathway: post.pathway || undefined,
          links: post.links || [],
        }));

        // دمج البوستات الدائمة مع البوستات من قاعدة البيانات
        const allPosts = [...permanentPosts, ...formattedPosts];
        setPosts(allPosts);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleAddPost = async (
    newPost: Omit<Post, "id" | "time" | "likes" | "isLiked" | "timestamp">
  ) => {
    try {
      // إنشاء كائن PostInsert مع الحقول المطلوبة فقط
      const newPostData: PostInsert = {
        author: newPost.author,
        title: newPost.title,
        content: newPost.content,
        twitter: newPost.twitter || null,
        tab: newPost.tab,
        pathway: newPost.pathway || null,
        links: newPost.links || null,
        likes: 0,
      };

      // استخدام type assertion لتجنب أخطاء TypeScript
      const { data, error } = await supabase
        .from("posts")
        .insert([newPostData] as never)
        .select();

      if (error) {
        console.error("Error adding post:", error);
        return;
      }

      if (data && data.length > 0) {
        const addedPost: PostRow = data[0];
        const formattedPost: Post = {
          id: addedPost.id,
          author: addedPost.author,
          title: addedPost.title,
          content: addedPost.content,
          time: "الآن",
          twitter: addedPost.twitter || "",
          tab: addedPost.tab,
          likes: addedPost.likes,
          isLiked: false,
          timestamp: new Date(addedPost.created_at),
          pathway: addedPost.pathway || undefined,
          links: addedPost.links || [],
        };

        setPosts([formattedPost, ...posts]);
        setShowSuccess(true);
        setModalOpen(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLike = async (postId: number) => {
    try {
      const post = posts.find((p) => p.id === postId);
      if (!post) return;

      // لا يمكن الإعجاب على البوستات الدائمة
      if (post.isPermanent) return;

      const newLikes = post.isLiked ? post.likes - 1 : post.likes + 1;

      // استخدام type assertion لتجنب أخطاء TypeScript
      const { error } = await supabase
        .from("posts")
        .update({ likes: newLikes } as never)
        .eq("id", postId);

      if (error) {
        console.error("Error updating likes:", error);
        return;
      }

      setPosts(
        posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              likes: newLikes,
              isLiked: !post.isLiked,
            };
          }
          return post;
        })
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (postId: number) => {
    try {
      const post = posts.find((p) => p.id === postId);

      // لا يمكن حذف البوستات الدائمة
      if (post?.isPermanent) return;

      const { error } = await supabase.from("posts").delete().eq("id", postId);

      if (error) {
        console.error("Error deleting post:", error);
        return;
      }

      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const tabs: { key: Tab; label: string }[] = [
    { key: "info", label: "معلومات" },
    { key: "notes", label: "ملاحظات" },
    { key: "courses", label: "إضافة دورة" },
    { key: "paths", label: "إضافة مسار" },
  ];

  const filteredPosts = posts.filter((post) => post.tab === activeTab);

  const renderModal = () => {
    switch (activeTab) {
      case "info":
      case "notes":
        return (
          <InfoNotesModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            onAddPost={handleAddPost}
            activeTab={activeTab}
          />
        );
      case "courses":
        return (
          <CoursesModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            onAddPost={handleAddPost}
          />
        );
      case "paths":
        return (
          <PathsModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            onAddPost={handleAddPost}
          />
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="blog-page-container">
        <div className="blog-loading">جاري التحميل...</div>
      </div>
    );
  }

  return (
    <div className="blog-page-container">
      <header className="blog-header-container">
        <div className="blog-header-content">
          <h1>مجتمعنا</h1>
          <p>
            شارك معرفتك، استعرض تجاربك، وتواصل مع زملائك في مجتمعنا المخصص
            للمطورين والمصممين.
          </p>
        </div>
      </header>

      <div className="blog-tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`blog-tab-btn ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <main className="blog-tab-content">
        <div className="blog-tab-header">
          <h3>{tabs.find((t) => t.key === activeTab)?.label}</h3>
          <button className="blog-add-btn" onClick={() => setModalOpen(true)}>
            +
          </button>
        </div>

        <div className="blog-posts-container">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onLike={handleLike}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <div className="blog-empty-message">
              لا توجد منشورات في هذا القسم بعد. كن أول من يضيف!
            </div>
          )}
        </div>
      </main>

      {renderModal()}

      <div className={`blog-alert-success ${showSuccess ? "show" : ""}`}>
        تمت إضافة منشورك بنجاح!
      </div>
    </div>
  );
}
