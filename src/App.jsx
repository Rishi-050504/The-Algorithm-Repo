import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { appRoutes } from '/src/routes/index';
import Header from '/src/components/Header'; // Make sure this path is correct

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />

      <Routes>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
