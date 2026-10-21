
const analyses = [
  {
    id: 1,
    name: "City_Event.mp4",
    date: "Today",
    status: "Unverified",
    tone: "status-neutral",
  },
  {
    id: 2,
    name: "Wildlife_Clip.mp4",
    date: "Yesterday",
    status: "Analysis complete",
    tone: "status-success",
  },
  {
    id: 3,
    name: "News_Clip.mp4",
    date: "Yesterday",
    status: "Review needed",
    tone: "status-warning",
  },
];

export default function AnalysisList() {
  return (
    <section className="app-card p-3 p-md-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h5 mb-0">Recent Analysis</h2>
        <button type="button" className="text-action">
          View All
        </button>
      </div>

      <div className="d-grid gap-3">
        {analyses.map((analysis) => (
          <div
              key={analysis.id}
              className="analysis-row d-flex flex-wrap justify-content-between align-items-center gap-3"
          >
            <div 
                className="d-flex align-items-center gap-3">
                  <div className="file-icon">
                    <i className="bi bi-file-earmark-play" aria-hidden="true"/>
                  </div>

                  <div>
                    <div className="fw-medium">{analysis.name}</div>
                    <div className="app-muted small">{analysis.date}</div>
                  </div>

            </div>

            <span className={`status-badge ${analysis.tone}`}>
              {analysis.status}
            </span>

          </div>
        ))}

      </div>

    </section>

  )
}