import { useEffect, useRef, useState } from "react";

const MAX_FILE_SIZE = 100 * 1024 * 1024;

const SUPPORTED_TYPES = [
  "video/mp4",
  "video/webm",
  "video/quicktime",
  "video/x-msvideo",
  "video/x-matroska",
  "video/mpeg",
];

export default function Upload({ onAnalysisComplete }) {

  const [video, setVideo] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [demoResult, setDemoResult] = useState(false);


  const inpuRef = useRef(null);

  useEffect(() => {
    if (!video) {
      setPreviewUrl("");
      return;
    }

    const url = URL.createObjectURL(video);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [video]);

  function selectVideo(file) {
    setError("");
    setDemoResult(false);

    if (!file) return;

    const looksLikeVideo = 
      file.type.startsWith("video/") ||
      /\.(mp4|webm|mov|avi|mkv|mpeg)$/i.test(file.name);

    if (!looksLikeVideo) {
      setError("Please select an supported Video File.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("The maximum file size is 100 MB.");
      return;
    }

    if (file.size === 0) {
      setError("This File is empty.please select another video!");
      return;

    }

    if (
      file.type &&
      !SUPPORTED_TYPES.includes(file.type) &&
      !/\.(mp4|webm|mov|avi|mkv|mpeg)$/i.test(file.name)
    ) {
      setError("This Video Format is Not Supported.");
      return;
    }

    setVideo(file);
  }

  function handleFileChange(event) {
    selectVideo(event.target.files?.[0]);
    event.target.value = "";
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    selectVideo(event.dataTransfer.files?.[0]);
  }

  function removeVideo() {
    setVideo(null);
    setError("");
    setDemoResult(false);
    setIsAnalyzing(false);
  }

  async function startAnalysis() {
    if (!video || isAnalyzing) return;

    setIsAnalyzing(true);
    setDemoResult(false);

    try {
      // Temporary demo delay, not real video analysis.
      await new Promise((resolve) => setTimeout(resolve, 1200));

      onAnalysisComplete?.({
        name: video.name,
        size: video.size,
        type: video.type,
        lastModified: video.lastModified,
        status: "unverified",
      });
    } finally {
      setIsAnalyzing(false);
    }
  }

  function formatFileSize(bytes) {
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  return (
    <main className="container-fluid px-3 px-md-4 py-4">
      <div className="mb-4">
        <h1 className="h3 fw-bold">Upload Video</h1>
        <p className="app-muted">
          Select a video to prepare it for authencity analysis.
        </p>
      </div>

      <section className="app-card p-3 p-md-4">
        <div
            className={`upload-dropzone ${isDragging ? "dragging" : ""}`}
            onDragOver={(event) => {
              event.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={()=> setIsDragging(false)}
            onDrop={handleDrop}
          >

            <div className="upload-icon">
              <i className="bi bi-cloud-arrow-up" aria-hidden ="true" />

            </div>

            <h2 className="h5 mt-3">Drop your Video Here</h2>

            <p className="app-muted text-center">
              Or select a file fro your device.
            </p>

            <button
                type="button"
                className="btn btn-aurora px-4"
                onClick={() => inpuRef.current?.click()}
            >
              Browse Files
            </button>

            <input 
                ref={inpuRef}
                type="file"
                accept="video/*,.mp4,.webm,.mov,.avi,.mkv,.mpeg"
                className="visually-hidden"
                onChange={handleFileChange}
                aria-label="Choose a video File"
            />

            <p className="app-muted small mt-3 mb-0">
                Maximum size : 100 MB. supported formats depend on your device
            </p>

        </div>

        {error && (
          <div className="alert alert-danger mt-3 mb-0" role="alert">
              {error}
          </div>
        )}
         
        {video && (
          <div className="upload-file-card mt-4">
            <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
              <div>
                <h3 className="h6 mb-1">selected Video</h3>
                <p className="app-muted small mb-0">
                  {video.name} · {formatFileSize(video.size)}
                </p>
              </div>

              <button
                  type="button"
                  className="icon-button"
                  onClick={removeVideo}
                  aria-label="Remove selected video"
              >
                <i className="bi bi-trash3" aria-hidden="true" />

              </button>

            </div>

            {previewUrl && (
              <video 
                    className="video=preview"
                    src={previewUrl}
                    controls
                    preload="metadata"
              >
                Your Browser Cannot play This Video.

              </video>
            )}

            <button
                  type="button"
                  className="btn btn-aurora w-100 mt-3 py-2"
                  disabled={isAnalyzing}
                  onClick={startAnalysis}
            >
              {isAnalyzing ? (
                <>
                <span
                    className="spinner-border spinner-border-sm me-2"
                    aria-hidden="true" 
                />
                Preparing demo analysis...

                </>
              ) : (
                <>
                <i className="bi bi-search me-2" aria-hidden="true" />
                Start Analysis
                </>
              )}

            </button>

          </div>
        )}

        {demoResult && (
          <div className="analysis-notice mt-4" role="status">
            <h3 className="h6">Demo worksflow completed</h3>
            <p className="app-muted mb-0">
              Your video is successfully selected. No AI detection or
              real-world evidence verification has been performed yet.
            </p>

          </div>

        )}
      </section>

    </main>
  );


}

