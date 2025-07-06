import React, { useState, useEffect } from 'react';

const resourceTypes = ['Tutorial Link', 'YouTube Link', 'PYQ', 'Notes', 'PYQ Book'];

function SubjectResources() {
  const [semester, setSemester] = useState('');
  const [branch, setBranch] = useState('');
  const [subject, setSubject] = useState('');
  const [resources, setResources] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Use Vite env for backend URL
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    if (semester && branch && subject) {
      setLoading(true);
      setError(null);

      // ✅ Use full URL
      const url = `${backendURL}/api/resources?semester=${semester}&branch=${branch}&subject=${encodeURIComponent(subject)}`;

      fetch(url)
        .then(res => {
          if (!res.ok) throw new Error('Network response was not ok');
          return res.json();
        })
        .then(data => {
          setResources(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setError('Failed to fetch resources');
          setLoading(false);
        });
    } else {
      setResources({});
    }
  }, [semester, branch, subject]);

  return (
    <div style={{ padding: 20, maxWidth: 800 }}>
      <h2>Find Resources</h2>

      <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
        {/* ✅ Example selectors */}
        <select value={semester} onChange={(e) => setSemester(e.target.value)}>
          <option value="">Select Semester</option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>

        <select value={branch} onChange={(e) => setBranch(e.target.value)}>
          <option value="">Select Branch</option>
          {['CSE', 'ECE', 'ME', 'CE', 'EE'].map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      {loading && <p>Loading resources...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && subject && (
        <div>
          {resourceTypes.map((type) => (
            <div key={type} style={{ marginBottom: 20 }}>
              <h3>{type}s</h3>
              {resources[type] && resources[type].length > 0 ? (
                <ul>
                  {resources[type].map((res) => (
                    <li key={res.id || res.url}>
                      <a href={res.url} target="_blank" rel="noopener noreferrer">
                        {res.title || res.url}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No {type.toLowerCase()} available.</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SubjectResources;
