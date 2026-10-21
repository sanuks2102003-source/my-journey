// pages
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Upload from "./pages/Upload";
import Results from "./pages/Results";


// components
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function App() {

  const [activePage, setActivePage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  function renderPage() {
    switch (activePage) {
      
      case "Dashboard":
        return <Dashboard onNavigate={setActivePage} />;

      case "Upload Video":
        return (
          <Upload
            onAnalysisComplete={(videoDetails) => {
              setSelectedVideo(videoDetails);
              setActivePage("Results");
            }}
          />
        );

      case "Results":
        return <Results video={selectedVideo} />;

      case "Settings":
        return <Settings />;


      default:
        return (
          <main className="container-fluid p-4">
            <div className="app-card p-4">
              <h2 className="h4">{activePage}</h2>
              <p className="app-muted mb-0">
                This page will be implemented in a later milestone.
              </p>
            </div>
          </main>
        );
    }
  }

  return (
    <div className="app-layout">
      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setSidebarOpen((open) => !open)}
        aria-label="Toggle navigation"
        aria-expanded={sidebarOpen}
      >
        <i className="bi bi-list" aria-hidden="true" />
      </button>

      <div
        className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      <div className={`sidebar-container ${sidebarOpen ? "open" : ""}`}>
        <Sidebar
          activePage={activePage}
          onNavigate={(page) => {
            setActivePage(page);
            setSidebarOpen(false);
          }}
        />
      </div>

      <div className="app-main">
        <Topbar activePage={activePage} />
        {renderPage()}
      </div>
    </div>
  );
}