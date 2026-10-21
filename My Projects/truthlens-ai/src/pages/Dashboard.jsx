


import StatCard from "../components/StatCard.jsx";
import AnalysisList from "../components/AnalysisList.jsx";

const statistics = [
  {
    title: "Total scans",
    value: "12",
    description: "Videos submitted",
    icon: "bi-collection-play",
    tone: "tone-indigo",
  },
  {
    title: "Likely authentic",
    value: "6",
    description: "Signals support authenticity",
    icon: "bi-shield-check",
    tone: "tone-cyan",
  },
  {
    title: "Flagged for review",
    value: "3",
    description: "Further investigation needed",
    icon: "bi-exclamation-triangle",
    tone: "tone-violet",
  },
  {
    title: "Unverified",
    value: "3",
    description: "Insufficient evidence",
    icon: "bi-search",
    tone: "tone-neutral",
  },
];

export default function Dashboard({ onNavigate }) {
  return (
    <main className="container-fluid px-3 px-md-4 py-4">
      <section className="welcome-panel p-4 p-md-5 mb-4">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-8">
            <span className="eyebrow">VIDEO AUTHENTICITY WORKSPACE</span>

            <h2 className="display-6 fw-bold mt-3">
              Look beyond the pixels.
            </h2>

            <p className="app-muted mt-3 mb-4">
              Analyze video signals, investigate claims, and examine
              credible evidence before drawing conclusions.
            </p>

            <button
              type="button"
              className="btn btn-aurora px-4 py-2"
              onClick={() => onNavigate("Upload Video")}
            >
              <i className="bi bi-cloud-upload me-2" aria-hidden="true" />
              Analyze a video
            </button>
          </div>

          <div className="col-12 col-lg-4 text-center">
            <i
              className="bi bi-shield-check hero-icon"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-semibold mb-3">Overview</h2>

        <div className="row g-3">
          {statistics.map((stat) => (
            <div key={stat.title} className="col-12 col-sm-6 col-xl-3">
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </section>

      <AnalysisList />
    </main>
  );
}
