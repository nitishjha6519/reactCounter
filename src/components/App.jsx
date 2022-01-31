import React, {useState}  from 'react';


function App(){
const [count, setCount] = useState(0);

function handleClick(){
  
  setCount(count+1);
}

    return (

      <div>
        <h2>{count} </h2>
        <button onClick={handleClick}> Counter + </button>
  </div>
    );
}

export default App;