 
 
 import Demo from "./Demo";
 import Button from "./ui/Button";

import { useState } from "react";
// props -eto  csposob peredaet dannyx Js ot reditelskogo kompanenta k dochernom komponentam
// children eto sboistvo parnovo elemente 
/// 
function App() {
  const [toggle, setToggle] = useState(false)
  const [deled, setDeled] = useState(false)
  const [add, setAdd] = useState(false)
  const [edit, setEdit] = useState(false)


const toggleHandler = () => {
  setToggle(prevState => !prevState)
}
const deletedHandler = () => {
  setDeled(prevState => !prevState)
}
   
const addHandler = () => {
  setAdd(prevState => !prevState)

}
const editHandler = () => {
  setEdit(prevState => !prevState)

}
   
 let nums = [1, 2, 3, 4, 5, 6]
 
  return (
    
    <div>
      {edit && <section style={{fontSize: '3rem', width: '300px',height: '300px', backgroundColor: 'red', alignItems: "center"}}> MONACO</section>}
      {toggle && <p>Hello</p>}
      {deled && <h1>Tompochka</h1>}
      {add && <h2 style={{color: 'red'}}>SOme add page</h2>}
 Hello
 <Demo text={'This is a demo page'} list={nums}/>
<Button onClick={toggleHandler}>Toggle</Button>
 <Button onClick={deletedHandler}>Delete</Button>
 <Button onClick={addHandler}>Add</Button>
 <Button onClick={editHandler}>Edit</Button>
    </div>
  );
}

export default App;
