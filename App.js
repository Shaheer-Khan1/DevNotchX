import React from 'react';
import Navbar from './Components/Navbar/Navbar'; // Adjust path if needed
import ContentBoxes from './Components/ContentBoxes/ContentBoxes'; // Import ContentBoxes component
import VideoSection from './Components/VideoSection/VideoSection'; // Import VideoSection component
import Brands from './Components/Brands/Brands'
import './App.css'; // Import CSS for any additional global styles

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ContentBoxes /> {/* Use ContentBoxes component here */}
      <VideoSection /> {/* Use VideoSection component here */}
      <Brands/>
    </div>
  );
}

export default App;
