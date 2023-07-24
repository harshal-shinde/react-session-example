import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{

    var pageView = sessionStorage.getItem("pageView");
    if(pageView ==null) {
      pageView = 1;
    }else{
      pageView = Number(pageView) +1;
    }
    //Update session storage
    sessionStorage.setItem("pageItem", pageView)
    setCount(pageView);
  },[]);

  return (
    <div className="App">
      <div> Page view count is :</div>
      {count}
    </div>
  );
}

export default App;
