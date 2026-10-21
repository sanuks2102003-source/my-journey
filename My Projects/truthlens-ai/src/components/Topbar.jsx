
import { useTheme } from "../context/ThemeContext.jsx";


export default function Topbar({ activePage }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="app-topbar d-flex align-items-center justify-content-between gap-3 px-3 px-md-4 py-3">
      <div>
        <h1 className="h5 mb-1 fw-semibold">{activePage}</h1>
        <p className="app-muted small mb-0">
          Your Video Verification Workspace
        </p>
      </div>

      <div className="d-flex align-items-center gap-2">
        <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title="switch Theme"
        >
          <i 
              className={`bi ${
                theme === "dark" ? "bi-sun" : "bi-moon-stars"
              }`}
              aria-hidden="true"
          />

        </button>

        <div className="profile-avatar" aria-label="user profile">
          S
        </div>

      </div>
            
    </header>
  )
}
