import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [bundles, setBundles] = useState<string[]>([]);

  const fetchBundles = async () => {
    try {
      const response = await axios.post('http://localhost:3000/train-model');
      setBundles(response.data.data.choices);
    } catch (error) {
      console.error('Error fetching product bundles:', error);
    }
  };

  return (
    <div>
      <h1>Seasonal Product Bundles</h1>
      <button onClick={fetchBundles}>Get Recommended Bundles</button>
      <ul>
        {bundles.map((bundle, index) => (
          <li key={index}>{bundle.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
