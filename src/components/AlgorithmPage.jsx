import { useState } from 'react';

export default function AlgorithmPage({
  title,
  description,
  javaCode,
  cppCode,
  sampleInput,
  sampleOutput,
  timeComplexity,
  spaceComplexity
}) {
  const [lang, setLang] = useState('java');
  const [copied, setCopied] = useState(false);

  const getHighlightedCode = () => (lang === 'java' ? javaCode : cppCode);

  const handleCopy = () => {
    navigator.clipboard.writeText(getHighlightedCode()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    });
  };

  return (
    <div className="container py-5">
      {/* Title */}
      <h2 className="text-primary fw-bold mb-3">{title}</h2>

      {/* Description */}
      <p className="fs-5 mb-4 text-secondary">{description}</p>

      {/* Language Toggle */}
      <div className="d-flex gap-3 mb-3 flex-wrap">
        <button
          className={`btn btn-sm ${lang === 'java' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setLang('java')}
        >
          JAVA
        </button>
        <button
          className={`btn btn-sm ${lang === 'cpp' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setLang('cpp')}
        >
          C++
        </button>
      </div>

      {/* Code Block with Copy Button */}
      <div className="position-relative mb-4" style={{ maxWidth: '100%', overflowX: 'auto' }}>
        <button
          className="btn btn-outline-light position-absolute end-0 top-0 mt-2 me-2 btn-sm"
          onClick={handleCopy}
        >
          {copied ? '✓ Copied!' : '📋 Copy'}
        </button>
        <pre
          className="bg-dark text-light rounded p-3 mb-4"
          style={{ whiteSpace: 'pre-wrap', fontSize: '0.9rem' }}
        >
          <code>{getHighlightedCode()}</code>
        </pre>
      </div>

      {/* Sample Input/Output */}
      <div className="mb-4">
        <h5 className="fw-semibold">Sample Input:</h5>
        <pre className="p-3 rounded text-dark bg-warning-subtle border border-warning">
          {sampleInput}
        </pre>

        <h5 className="fw-semibold mt-3">Sample Output:</h5>
        <pre className="p-3 rounded text-dark bg-success-subtle border border-success">
          {sampleOutput}
        </pre>
      </div>

      {/* Complexity */}
      <div className="mb-4">
        <p><strong>Time Complexity:</strong> {timeComplexity}</p>
        <p><strong>Space Complexity:</strong> {spaceComplexity}</p>
      </div>
    </div>
  );
}
