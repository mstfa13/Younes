import React from 'react';
import ReactDOM from 'react-dom/client';
import RegistrationForm from './components/RegistrationForm';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RegistrationForm inline={true} isOpen={true} onClose={() => window.close()} />
  </React.StrictMode>
);
