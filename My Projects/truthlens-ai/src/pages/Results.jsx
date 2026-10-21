


export default function Results({ video }) {
  return (
    <main className="container-fluid p-3 p-md-4">
      <div className="mb-4">
        <h1 className="h3 fw-bold">Analysis Results</h1>
        <p className="app-muted">
          Review the video signals and available evidence.
        </p>
      </div>

      <div className="app-card p-4 mb-4">
        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-file-earmark-play fs-2" />

          <div className="flex-grow-1">
            <h2 className="h5 mb-1">
              {video?.name ?? "No video selected"}
            </h2>
            <p className="app-muted mb-0">
              Example analysis report
            </p>
          </div>

          <span className="badge text-bg-warning">
            Unverified
          </span>
        </div>
      </div>

      <div className="app-card p-4 mb-4">
        <h2 className="h5">Overall Assessment</h2>

        <h3 className="h4 mt-3 text-warning">
          Insufficient Evidence
        </h3>

        <p className="app-muted mb-0">
          {video
            ? `${(video.size / (1024 * 1024)).toFixed(2)} MB`
            : "Upload a video to begin"}
        </p>
        
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6">
          <div className="app-card p-4 h-100">
            <i className="bi bi-camera-video fs-3" />

            <h2 className="h5 mt-3">
              Video Signals
            </h2>

            <p className="app-muted">
              Technical and visual checks for possible
              manipulation or AI-generation artifacts.
            </p>

            <span className="badge text-bg-secondary">
              Pending
            </span>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="app-card p-4 h-100">
            <i className="bi bi-globe fs-3" />

            <h2 className="h5 mt-3">
              Evidence Verification
            </h2>

            <p className="app-muted">
              Independent sources that may support or
              contradict claims made about the video.
            </p>

            <span className="badge text-bg-secondary">
              Pending
            </span>
          </div>
        </div>
      </div>

      <div className="app-card p-4">
        <h2 className="h5">Verification Summary</h2>

        <p className="app-muted mb-0">
          This is a demonstration report. Actual video
          analysis and evidence verification will be connected
          in a later development phase.
        </p>
      </div>
    </main>
  );
}
