import { useLocation, useNavigate } from 'react-router-dom';

export default function Header({ theme, setTheme }) {
  const location = useLocation();
  const navigate = useNavigate();
  const showBack = location.pathname !== '/';

  return (
    <div className="d-flex justify-content-between align-items-center flex-wrap px-3 py-3 header-bar">
      {showBack ? (
        <button
          className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} me-2`}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      ) : (
        <div style={{ width: '85px' }} /> // Spacer
      )}

      <h1 className="page-title text-center flex-grow-1 m-0">The Algorithm Repo</h1>

      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="algo-btn ms-auto"
      >
        {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}
