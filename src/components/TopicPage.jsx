import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons'; // Optional icon lib

export default function TopicPage({ title, description, algorithms = [], basePath }) {
  const navigate = useNavigate();

  const handleClick = (algo) => {
    const path = `${basePath}/${algo.toLowerCase().replace(/\s+/g, '-')}`;
    navigate(path);
  };

  return (
    <div className="min-vh-100 px-3 py-4">
      {/* Title */}
      <h1 className="page-title text-center mb-4">{title}</h1>

      {/* Description */}
      <div className="container mb-5">
        <p className="fs-5 fw-light text-start">{description}</p>
      </div>

      {/* Algorithm Boxes */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {algorithms.map((algo, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3"
              onClick={() => handleClick(algo)}
            >
              <div className="topic-box">{algo}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
