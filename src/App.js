import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const [newsList, setNewsList] = useState([])

  useEffect(()=>{
    fetch("https://api.spaceflightnewsapi.net/v3/articles").then((response)=>response.json()).then((data)=>{
      setNewsList(data)
    })
  }, [])

  return (
    <div className="App">
      <div className='title'>
        <h1>Space News Hub</h1>
        <h3>Latest Articles on Space and Beyond</h3>
      </div>
      <div className='newsContainer'>
        {newsList.map((val, key) => {
          return (
            <div key={key} className="article" onClick={()=>{
              window.open(val.url, '_blank')
            }}>
              <h2>{val.title}</h2>
              <img src={val.imageUrl}/>
              <p>{val.summary}</p>
              <h4>{val.publishedAt}</h4>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
