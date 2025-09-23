import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/slices/videoSlice";
import { ChevronRight } from "lucide-react";

const Video = () => {
  const dispatch = useDispatch();
  const { videos, loading, error } = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  const VideoCard = ({ video }) => {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className="card h-100 shadow-sm border-0 position-relative overflow-hidden">
          <div className="position-relative">
            {/* Render the raw iframe string from API */}
            <div
              className="mx-auto"
              dangerouslySetInnerHTML={{ __html: video.video_link }}
            />
          </div>

          {/* Card Body */}
          <div className="card-body d-flex flex-column p-4">
            <h6
              className="card-title text-dark fw-bold mb-3 lh-base"
              style={{ fontSize: "0.95rem" }}
            >
              {video.heading}
            </h6>
            <div className="mt-auto">
              <a
                href={video.hyper_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-100 fw-bold text-white d-flex align-items-center justify-content-center gap-2"
                style={{
                  backgroundColor: "#e6240a",
                  borderColor: "#e6240a",
                  borderRadius: "25px",
                  padding: "10px 20px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cc1e09";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#e6240a";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                ► Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container-fluid py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="text-dark mb-1">
                Watch New, Latest & Upcoming Products Info
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <button
              className="btn btn-outline-danger btn-lg px-5 py-3 fw-bold"
              style={{
                borderRadius: "30px",
                borderWidth: "2px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.classList.remove("btn-outline-danger");
                e.target.classList.add("btn-danger");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("btn-danger");
                e.target.classList.add("btn-outline-danger");
              }}
            >
              Load More Products
              <ChevronRight size={20} className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
