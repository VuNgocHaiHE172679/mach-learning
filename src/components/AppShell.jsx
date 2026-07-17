import { useEffect, useState } from "react";
import {
  BookOpen,
  BrainCircuit,
  Gamepad2,
  Home,
  Menu,
  Search,
  Sparkles,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Trang chủ", icon: Home },
  { id: "hub", label: "Learning Hub", icon: BookOpen },
  { id: "games", label: "Game Arena", icon: Gamepad2 },
];

export default function AppShell({
  activeRoute,
  navigate,
  onOpenAssistant,
  children,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [activeRoute]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <button
          className="brand"
          type="button"
          onClick={() => navigate("home")}
          aria-label="Về trang chủ MẠCH"
        >
          <span className="brand-mark" aria-hidden="true">
            M
          </span>
          <span className="brand-copy">
            <strong>MẠCH</strong>
            <small>Dialectic Learning Lab</small>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              className={activeRoute === id ? "nav-link active" : "nav-link"}
              type="button"
              key={id}
              onClick={() => navigate(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="topbar-actions">
          <button
            className="assistant-button"
            type="button"
            onClick={onOpenAssistant}
          >
            <Sparkles size={16} aria-hidden="true" />
            <span>Hỏi Mạch AI</span>
          </button>
          <button
            className="icon-button search-button"
            type="button"
            aria-label="Mở tìm kiếm"
            onClick={onOpenAssistant}
          >
            <Search size={19} />
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-menu" aria-label="Menu di động">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
              <button
                type="button"
                className={activeRoute === id ? "active" : ""}
                key={id}
                onClick={() => navigate(id)}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <div>
          <span className="brand-mark small" aria-hidden="true">
            M
          </span>
          <p>
            Một không gian học tập thử nghiệm dựa trên ba chương đầu của Giáo
            trình Chủ nghĩa xã hội khoa học.
          </p>
        </div>
        <div className="footer-meta">
          <span>Học có nguồn</span>
          <span>Truy cập công khai</span>
          <span>Không cần tài khoản</span>
          <span>Thiết kế cho khả năng tiếp cận</span>
          <span>AI có kiểm duyệt</span>
        </div>
      </footer>

      <nav className="bottom-nav" aria-label="Điều hướng di động">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <button
            className={activeRoute === id ? "active" : ""}
            type="button"
            key={id}
            onClick={() => navigate(id)}
          >
            <Icon size={20} strokeWidth={activeRoute === id ? 2.4 : 1.8} />
            <span>{label === "Learning Hub" ? "Học tập" : label}</span>
          </button>
        ))}
        <button type="button" onClick={onOpenAssistant}>
          <BrainCircuit size={20} />
          <span>Mạch AI</span>
        </button>
      </nav>
    </div>
  );
}
