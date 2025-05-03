import React,{ Fragment, useState } from 'react'


function App() {
  const [title, setTitle] = useState ("My name is vikash");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <Fragment>
      <button onClick={updateTitle}>click me change the title</button>
      {/* Dynamic Header */}
      <Header title={title} />

      {/* Static Headers - will not re-render */}
      <Header title='enjoy exploring features!' />
      <Header title='enjoy  features!' />
      <Header title='enjoy explore' />
      <Header title='enjoy new features!' />
    </Fragment>
  )
}

  const Header = React.memo(function Header({title}) {
    return <div>
      {title}
    </div> 
  })


// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }
 
export default App
