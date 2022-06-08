import React, { useEffect, useState } from 'react';

function App() {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=100')
    .then(res => console.log(res))
  })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
