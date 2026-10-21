
export default function StatCard({ title, value, description, icon, tone}) {
  return(
    <article className="app-card p-3 p-md-4 h-100">
      <div className="d-flex justify-content-between align-items-start gap-3">
        <div>
          <p className="app-muted mb-2">{title}</p>
          <div className="display-6 fw-semibold">{value}</div>
          <p className="app-muted small mb-0 mt-2">{description}</p>
        </div>

        <div className={`stat-icon ${tone}`}>
          <i className={`bi ${icon}`} aria-hidden="true"/>

        </div>

      </div>

    </article>
  )
}