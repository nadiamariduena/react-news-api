import React, { useState, useCallback, useEffect } from "react";
import { debounce } from "lodash";
import News from "./News";

// f8d7869212c24907bc585db6b6d267be

const App = () => {
  //    {/* 3  */}
  const [term, setTerm] = useState("");

  //
  //
  //
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  //
  //find the API's info in the link below
  // https://newsapi.org/
  //
  //
  //
  // https://rickandmortyapi.com/
  //
  //    {/* 6 */}
  const fetchData = async (value) => {
    let url;
    if (value)
      url = `https://newsapi.org/v2/everything?q=${value}&apiKey=f8d7869212c24907bc585db6b6d267be
      `;
    else
      url = `https://newsapi.org/v2/top-headlines?country=US&apiKey=f8d7869212c24907bc585db6b6d267be
      `;

    // const res = fetch(url).then(data => data.JSON.then(...)).catch(err=> ..);
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setLoading(false);

    setArticles(data.articles || []);
  };

  //
  //
  //  You will call this method if something change
  //
  const debounceLoadData = useCallback(
    debounce((value) => fetchData(value), 1000),
    []
  );

  //    {/* 2 HERE YOU DEFINE THE FUNCTION from the input */}
  const handleSearch = (e) => {
    {
      /* 4 set term, check step 3 where you have it */
    }
    setTerm(e.target.value);
    debounceLoadData(e.target.value);
    /*so once we type (step 1), it calls the DEBOUNCE LOAD DATA:
                                debounceLoadData(e.target.value);

     And then othe DEBOUNCE itself is being call only "since its a hook":

       debounce((value) => fetchData(value), 1000),

     is being call only when this stuff in line 50 ,  changes:

       []



    */
  };

  //
  //
  //     {/* 5  */}
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className={loading ? "loading show-loading" : "loading"}>
        <img src="https://media.giphy.com/media/l0MYHq0IFikDrVQOc/giphy.gif"></img>
      </div>
      <div className="nav">
        <form>
          {/* 1 HERE YOU MAKE THE FUNCTION */}
          <input onChange={handleSearch}></input>
        </form>
      </div>
      <News articles={articles}></News>
    </div>
  );
};

export default App;

/*





                                            ****** Debounce  ********




import { debounce } from "lodash";

LODASH LIBRARY



Debounce Explained – How to Make Your JavaScript Wait For Your User To Finish Typing




<p>


Say that you have a function named myFunc that gets called each time you type 
something into an input field. After going through the requirements for your project, 
you decide that you want to change the experience.

Instead, you want myFunc to execute when at least 2 seconds have passed since the last 
time you typed something in.

This is where a debounce can comes into play. Instead of passing myFunc to the event 
listener, you would pass in the debounce. The debounce itself would then take myFunc
as an argument, along with the number 2000.

</p>

https://www.freecodecamp.org/news/debounce-explained-how-to-make-your-javascript-wait-for-your-user-to-finish-typing-2/



*/
