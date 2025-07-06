import React, { useState, useEffect } from 'react';

const resourceTypes = ['Tutorial Link', 'YouTube Link', 'PYQ', 'Notes', 'PYQ Book'];

function SubjectResources() {
  const [semester, setSemester] = useState('');
  const [branch, setBranch] = useState('');
  const [subject, setSubject] = useState('');
  const [resources, setResources] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    if (semester && branch && subject) {
      setLoading(true);
      setError(null);

      // 
      const url = `/api/resources?semester=${semester}&branch=${branch}&subject=${encodeURIComponent(subject)}`;

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
        {/* Semester, Branch, Subject selectors) */}
        {/*  */}
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
                    <li key={res.id}>
                      <a href={res.url} target="_blank" rel="noopener noreferrer">{res.title}</a>
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
