import React, { useState, useEffect } from 'react';
function App() {
  const [message, setMessage] = useState('Loading...');
  useEffect(() => {
    fetch('/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Failed to connect to backend'));
  }, []);
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Simple Full-Stack App</h1>
      <h1> My first deployment</h1>
      <h1>praveen</h1>
      <h2> Mallela Praveen Kumar</h2>
      <h1> praveen</h1>
      <h1> devops</h1>
      <h1> SST tech</h1>
      <h1> mallela</h1>
      <h1>praveen</h1>
      <p>This frontend is served by a React container.</p>
      <h2>Message from Backend:</h2>
      <p style={{ color: '#3498db', fontSize: '1.5em', fontWeight: 'bold' }}>{message}</p>
    </div>
  );
}
export default App;
