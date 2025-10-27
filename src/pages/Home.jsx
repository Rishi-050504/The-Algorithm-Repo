import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaSearch,
  FaSortAlphaDown,
  FaMicrochip,
  FaWindowRestore,
  FaCodeBranch,
  FaLayerGroup,
  FaStream,
  FaLink,
  FaTree,
  FaProjectDiagram,
  FaFont,
  FaRobot,
  FaCalculator,
  FaThList,
  FaUser
} from 'react-icons/fa';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from 'firebase/firestore';

import app from '/src/firebase';

const topics = [
  'Searching',
  'Sorting',
  'Bit Manipulation',
  'Sliding Window',
  'Recursion & Backtracking',
  'Stack',
  'Queue',
  'Linked List',
  'Trees',
  'Graph',
  'String Matching',
  'Dynamic Programming',
  'Number Theory',
  'Array Algorithms'
];

const icons = {
  'Searching': <FaSearch />,
  'Sorting': <FaSortAlphaDown />,
  'Bit Manipulation': <FaMicrochip />,
  'Sliding Window': <FaWindowRestore />,
  'Recursion & Backtracking': <FaCodeBranch />,
  'Stack': <FaLayerGroup />,
  'Queue': <FaStream />,
  'Linked List': <FaLink />,
  'Trees': <FaTree />,
  'Graph': <FaProjectDiagram />,
  'String Matching': <FaFont />,
  'Dynamic Programming': <FaRobot />,
  'Number Theory': <FaCalculator />,
  'Array Algorithms': <FaThList />
};

export default function Home() {
  const navigate = useNavigate();
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const isHomePage = window.location.pathname === '/';
    if (!isHomePage) return;

    const db = getFirestore(app);
    const countRef = doc(db, 'analytics', 'visitorCount');

    const updateVisitorCount = async () => {
      try {
        const docSnap = await getDoc(countRef);
        if (docSnap.exists()) {
          await updateDoc(countRef, { count: increment(1) });
          const updatedSnap = await getDoc(countRef);
          setVisitorCount(updatedSnap.data().count);
        } else {
          await setDoc(countRef, { count: 1 });
          setVisitorCount(1);
        }
      } catch (err) {
        console.error("Visitor count error:", err);
      }
    };

    updateVisitorCount();
  }, []);

  const handleClick = (topic) => {
    navigate(`/topic/${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`);
  };

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between px-3 py-5">
      <div>
        <div className="container mb-4">
          <p className="fs-5 fw-light text-start">
            <strong>Hi, We're Rishi, Omkar and Srujan 👋</strong>
            <br />
            Final-year undergraduates in Computer Science and Business Systems, with a strong interest in problem-solving, algorithms, and system design.
            This platform is a personal initiative to consolidate and share my learning journey in Data Structures Algorithms and competitive programming—organized in a way that's accessible and helpful to others preparing for interviews or exploring algorithmic concepts.
            <br />
            This website is created with the assumption that you are already familiar with basic programming in either Java or C++. To get the maximum clarity and truly understand the logic behind each concept, I strongly encourage you to use pen and paper while going through the material.
          </p>
        </div>

        <div className="container">
          <div className="row g-4 justify-content-center">
            {topics.map((topic) => (
              <div
                key={topic}
                className="col-6 col-sm-4 col-md-3"
                onClick={() => handleClick(topic)}
              >
                <div className="topic-box d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="mb-2 fs-3">{icons[topic]}</div>
                  <span>{topic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer mt-5 text-center">
        <p className="mb-2">Contact</p>
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="mailto:reshyendravenaganti@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/reshyendravenaganti/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-lg"></i>
          </a>
        </div>

        <div className="visitor-count d-flex justify-content-center align-items-center gap-2 mt-2">
          <FaUser className="fs-5" />
          <span>{visitorCount}</span>
        </div>
      </footer>
    </div>
  );
}
