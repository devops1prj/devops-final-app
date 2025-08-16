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
      <h2>Dsatm</h2>
      <h2>mallela</h2>
      <h1>Demo deen</h1>
      <h2>kumar</h2>
      <h1>hello world</h1>
      <h1>no one</h1>
      <p>This frontend is served by a React container.</p>
      <h2>Message from Backend:</h2>
      <p style={{ color: '#3498db', fontSize: '1.5em', fontWeight: 'bold' }}>{message}</p>
    </div>
  );
}
export default App;
