import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import "./index.css";

// let a="samer";
// let b="khan"
let hours = new Date(2020,5,5,1);
let curr = hours.getHours();
let greeting = "Good morning";
const cssStyle = {};

if (curr >= 1 && curr <= 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (curr >= 12 && curr < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
}

// let date=today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate();
// let time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
function App() {
  return (
    <div>
      <h1 className="head">
        Hello,
        <span style={cssStyle}>
          {greeting}
        </span>
      </h1>
    </div>
  );
}

{
  /* <h1 contenteditable="true">Sameer {b} </h1>
                  <p>saylani </p>
          <h1> {`hello ${a} ${b}`}</h1>

          <ol>
          <li>money</li>
          <li>friends</li>
          <li>hiest</li>
          </ol>
  <p>{`Today date is ${today}`}</p>
  <p>{`Current time is ${time}`}</p> */
}

// class App extends React.Component {
//   render(
//     [<h1> hellow </h1>],
//   );

// {
//   let name="sameer";
//   let fname="khan"
//   return(
//     <div>
//     <h1>{`${name} ${fname}`}</h1>
//     </div>
//     )
//   }
//}

export default App;
