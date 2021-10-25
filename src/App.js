import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import News from './Components/Card/News';
import Header from "./Components/Card/Header/Header";
import Side from "./Components/Card/Side/Side";


function App() {
  const [news, setNews] = useState([]);
  const [addedNews, setAddedNews] = useState([]);
  useEffect(() => {
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2021-09-25&sortBy=publishedAt&apiKey=dd096b29ee064feb870869011ca1e5cd";
    fetch(url)
    .then(res => res.json())
    .then(data => setNews(data.articles))
  }, [])
  const clickHandler = (clickedNews) => {
    let newNews = [...addedNews, clickedNews];
    setAddedNews(newNews);
    console.log(addedNews);
  }
  return (
    <div>
      <Header content={news}></Header>
      <Side newAddedNews={addedNews}></Side>
      <Button>Click Me</Button>
      <News clickHandler={clickHandler} news={news}></News>
    </div>
  );
}

export default App;
