import './AppStyles.css'
import React, {useEffect, useState} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {

  const [newsList, setNewsList] = useState([])

  useEffect(()=>{
    fetch("https://api.spaceflightnewsapi.net/v3/articles").then((response)=>response.json()).then((data)=>{
      setNewsList(data)
    })
  }, [])

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const date = dateObj.toDateString();
    const time = dateObj.toLocaleTimeString();
    return { date, time };
  };

  return (
    <div className="App">
      <Header/>
      <div className='newsContainer'>
        {newsList.map((val, key) => {
          const { date, time } = formatDate(val.publishedAt);
          return (
            <div key={key} className="article" onClick={()=>{
              window.open(val.url, '_blank')
            }}>
              <h2>{val.title}</h2>
              <img src={val.imageUrl} alt={val.title} />
              <p>{val.summary}</p>
              <h4>{date}</h4>
              <h5>{time}</h5>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
