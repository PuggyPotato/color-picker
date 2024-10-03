import React, { useState } from "react"






const App = () =>{
  const [textColor,setTextColor] = useState("rgb(255,100,50")
  const [backgroundColor,setBackgroundColor] = useState("rgb(0,0,0)")

  function changeTextColor(){
    let color1;
    let color2;
    let color3;
    color1 =  Math.floor(Math.random() * 255 + 1)
    color2 =  Math.floor(Math.random() * 255 + 1)
    color3 =  Math.floor(Math.random() * 255 + 1)
    setTextColor(`rgb(${color1},${color2},${color3})`)
  }

  function changeBackgroundColor(){
    let backgroundColor1,backgroundColor2,backgroundColor3,backgroundColor4,backgroundColor5,backgroundColor6,backgroundColor7,backgroundColor8,backgroundColor9;
    backgroundColor1 =  Math.floor(Math.random() * 255 + 1)
    backgroundColor2 =  Math.floor(Math.random() * 255 + 1)
    backgroundColor3 =  Math.floor(Math.random() * 255 + 1)
    backgroundColor4 =  Math.floor(Math.random() * 255 + 1)
    backgroundColor5 =  Math.floor(Math.random() * 255 + 1)
    backgroundColor6 =  Math.floor(Math.random() * 255 + 1)
    backgroundColor7 =  Math.floor(Math.random() * 255 + 1)
    backgroundColor8 =  Math.floor(Math.random() * 255 + 1)
    backgroundColor9 =  Math.floor(Math.random() * 255 + 1)
    setBackgroundColor(`linear-gradient(rgb(${backgroundColor1},${backgroundColor2},${backgroundColor3}),rgb(${backgroundColor4},${backgroundColor5},${backgroundColor6}),rgb(${backgroundColor7},${backgroundColor8},${backgroundColor9}))`)
    console.log(backgroundColor)
  }

  return(
    <div id="container" style={{background: backgroundColor}}>
      <button id="textColor" style={{color: textColor,
                                     background: "none"
      }} onClick={changeTextColor}>Click To Change Text Color</button><br></br>
      <button  id="backgroundColor"onClick={changeBackgroundColor} style={{color:textColor,
        background:"none"
      }}>Click To Change Background Color</button>
      <h1 style={{color:textColor}}>The Text Color Is {textColor}</h1><br></br>
      <h1 style={{color:textColor}}>The Background Color Is {backgroundColor}</h1>
    </div>
  )
}

export default App