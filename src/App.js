// App.js
import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import DownloadButton from './components/DownloadButton';

const App = () => {
  const [formData, setFormData] = useState({});

  const handleFormData = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <Form onFormSubmit={handleFormData} />
      {formData && <DownloadButton data={formData} />}
    </div>
  );
};

export default App;
