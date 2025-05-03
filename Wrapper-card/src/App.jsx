import { useState } from 'react'


function App() {
  return <div>
    <CardWrapper >
      <CardWrapper>
        <TextComponent>
          hii there
          </TextComponent>
        </CardWrapper>
    </CardWrapper>
  </div>
}

function CardWrapper({children}) {
  // create a div wich has a border (hint: the way to create a border ks border: "2px solid black")
  // and inside the div, render the prop
  return <div style={{border: "2px solid black",padding:20}}>
    {children}
  </div>
}

function TextComponent(children) {
  return <div>
      hi there22
    </div>
  
}


export default App
