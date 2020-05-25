
import React,{ useState, useEffect} from 'react';

import twitterIcon from '../Images/twit.png';
import tumbleIcon from '../Images/tumblr.png';

 const Quotes = () => {

    const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }

  const handleClick = () => {
    getQuote();
  }
    return (
        <div className="quote-box">
            <div className="quote"><p>{quote}</p></div>

            <div className="author">{author}</div>

            <div className="buttons">
                <div className="social-media">
                    <a href="#" className="tweet-quote"><span>
                          <img src={twitterIcon} alt="TwitterImage"/>
                        </span></a>

                    <a href="#" className="tweet-quote"><span>
                          <img src={tumbleIcon} alt="TumblrImage"/>
                        </span></a>
                </div>
                <button onClick={handleClick} className="button-quote">New Quotes</button>
            </div>
        </div>
    )
}

export default Quotes;