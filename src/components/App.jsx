import React from 'react';
import Card from './Card.jsx';
import '../assets/style.css';
import { data1, data2 } from '../assets/cardData.jsx';

const App = () => (
  <div className="container">
    <Card {...data1}>
      <img src="https://picsum.photos/id/24/200/180" className="card-image-top" alt="..." />
    </Card>
    <Card {...data2} />
  </div>
);

export default App;
