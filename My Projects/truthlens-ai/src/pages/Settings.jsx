import { useTheme } from "../context/ThemeContext";

export default function Settings() {

  const { theme, setTheme, toggleTheme }= useTheme();

  return (
    <main className="container py-4 py-md-4">

      <div className="mb-4">
        <h1 className="h3 fw-bold">Settings</h1>
        <p className="app-muted mb-0">
          Customize Your TruthLens AI Expierience.
        </p>
      </div>

      <section className="app-card p-4 mb-4">
        <div className="d-flex align-items-start gap-3">
          <div
              className="rounded-3 p-3"
              style={{ background: "var(--bg-hover)"}}
          >
            <i className="bi bi-palette fs-4"
               aria-hidden="true"
            />
          </div>

          <div className="flex-grow-1">
            <h2 className="h5 fw-semibold mb-1">Appearance</h2>

            <p className="app-muted mb-3">
              Choose the appearance that feels comfortable for you. 
            </p>

            <div 
                className="d-flex flex-wrap gap-2"
                role="group"
                aria-label="Theme Selection"
              >
                <button
                    type="button"
                    className={`btn ${
                      theme === "dark"
                        ? "btn-aurora"
                        : "btn-outline-secondary"
                    }`}
                    aria-pressed={theme === "dark"}
                    onClick={() => setTheme("dark")}
                  >
                    <i className="bi bi-moon-stars me-2" aria-hidden="true"/>
                    Dark

                </button>

                <button
                    type="button"
                    className={`btn ${
                      theme === "light"
                      ? "btn-aurora"
                      :"btn-outline-secondary"
                    }`}
                    aria-pressed={theme === "light"}
                    onClick={() => setTheme("light")}
                  >

                    <i className="bi bi-sun me-2" aria-hidden="true"/>
                    Light
                </button>

                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={toggleTheme}
                >
                  <i className="bi bi-arrow-left-right me-2" aria-hidden="true"/>
                  Switch Theme

                </button>
            </div>

            <p className="app-muted small mt-3 mb-0">
              Current Theme:{theme}
            </p>

          </div>

        </div>

      </section>

    </main>
  );

}
