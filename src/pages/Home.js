import { useEffect, useState } from "react";
import React from "react";

function Home(props) {
//       // create state to hold about data
//   const [about, setAbout] = useState(null);

//   // create function to make api call
//   const getAboutData = async () => {
//     // make api call and get response
//     const response = await fetch(props.URL + "about");
//     // turn response into javascript object
//     const data = await response.json();
//     // set the about state to the data
//     setAbout(data);
//   };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
//   useEffect(() => getAboutData(), []);

  // define a function that will return the JSX needed once we get the data
return(
    <div>
  <div className="introText">
    <h1>Rosanne Anderson:</h1>
    <h2>Software Engineer - Web Developer - Problem Solver</h2>
  </div>
    </div>
)


  // if data arrives return the result of loaded, if not, an h1 that says loading
}
  
  export default Home;