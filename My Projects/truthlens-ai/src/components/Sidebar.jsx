
const navigationItems = [
  { label: "Dashboard", icon: "bi-grid-1x2" },
  { label: "Upload Video", icon: "bi-cloud-upload" },
  { label: "Analysis History", icon: "bi-clock-history" },
  { label: "AI Assistant", icon: "bi-robot" },
  { label: "Profile", icon: "bi-person" },
  { label: "Settings", icon: "bi-gear" },
  { label: "Results", icon: "bi-clipboard-data" },
];

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="app-sidebar d-flex flex-column p-3">
      <div className="d-flex align-items-center gap-2 mb-4 px-2">
        <i
          className="bi bi-shield-check fs-3"
          style={{ color: "var(--brand-violet)" }}
          aria-hidden="true"
        />

        <span className="fw-bold fs-5">TruthLens AI</span>
      </div>

      <nav className="d-grid gap-2" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`sidebar-link ${
              activePage === item.label ? "active" : ""
            }`}
            onClick={() => onNavigate(item.label)}
            aria-current={
              activePage === item.label ? "page" : undefined
            }
          >
            <i className={`bi ${item.icon}`} aria-hidden="true" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-4 app-muted small">
        Video Verification Workspace
        <div className="mt-1">TruthLens AI · v0.1</div>
      </div>
    </aside>
  );
}
