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
  { id: "home", label: "Trang chủ", shortLabel: "Trang chủ", icon: Home },
  { id: "hub", label: "Kho tri thức", shortLabel: "Tri thức", icon: BookOpen },
  {
    id: "games",
    label: "Tự kiểm tra",
    shortLabel: "Kiểm tra",
    icon: Gamepad2,
  },
];

export default function AppShell({
  activeRoute,
  navigate,
  onOpenAssistant,
  children,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const openKnowledgeSearch = () => {
    navigate("hub");
    window.setTimeout(() => {
      document.getElementById("knowledge-search")?.focus();
    }, 80);
  };

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
          aria-label="Về trang chủ Group 2"
        >
          <span className="brand-mark" aria-hidden="true">
            G2
          </span>
          <span className="brand-copy">
            <strong>Group 2</strong>
            <small>Không gian triết học Việt Nam</small>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              className={activeRoute === id ? "nav-link active" : "nav-link"}
              type="button"
              key={id}
              onClick={() => navigate(id)}
              aria-current={activeRoute === id ? "page" : undefined}
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
            <span>Hỏi trợ lý Group 2</span>
          </button>
          <button
            className="icon-button search-button"
            type="button"
            aria-label="Mở tìm kiếm"
            onClick={openKnowledgeSearch}
          >
            <Search size={19} />
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            aria-label={menuOpen ? "Đóng trình đơn" : "Mở trình đơn"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-menu" aria-label="Trình đơn di động">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
              <button
                type="button"
                className={activeRoute === id ? "active" : ""}
                key={id}
                onClick={() => navigate(id)}
                aria-current={activeRoute === id ? "page" : undefined}
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
            G2
          </span>
          <p>
            Không gian học tập công khai được biên soạn từ tài liệu “Nhà nước
            xã hội chủ nghĩa Việt Nam” do nhóm cung cấp.
          </p>
        </div>
        <div className="footer-meta">
          <span>Học có nguồn</span>
          <span>Truy cập công khai</span>
          <span>Không cần tài khoản</span>
          <span>Thiết kế cho khả năng tiếp cận</span>
          <span>Mở đúng trang tài liệu nguồn</span>
        </div>
      </footer>

      <nav className="bottom-nav" aria-label="Điều hướng di động">
        {NAV_ITEMS.map(({ id, shortLabel, icon: Icon }) => (
          <button
            className={activeRoute === id ? "active" : ""}
            type="button"
            key={id}
            onClick={() => navigate(id)}
            aria-current={activeRoute === id ? "page" : undefined}
          >
            <Icon size={20} strokeWidth={activeRoute === id ? 2.4 : 1.8} />
            <span>{shortLabel}</span>
          </button>
        ))}
        <button type="button" onClick={onOpenAssistant}>
          <BrainCircuit size={20} />
          <span>Trợ lý Group 2</span>
        </button>
      </nav>
    </div>
  );
}
