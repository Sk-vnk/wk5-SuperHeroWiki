import { useState } from 'react';
import './App.css';
 
const App = () => {
  // useState Hooks
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(false);
 
  const addItem = () => {
    // Write the add item by copying the state array using
    // a spread operator
    // then set the state back
    let  itemsCopy = [...items]
    itemsCopy.push(inputText)
    setItems(itemsCopy)
  };
 
  const deleteItem = (selectedIndex) => {
      // Write the delete functionality to copy the state array
    // remove the item with index 'selectedIndex' (SPLICE)
    // set it back to state array
    let itemsCopy = [...items]
    itemsCopy.splice(selectedIndex, 1)
    setItems(itemsCopy)
  };
 
  const crossItem = inputText => {
    setToggle(!toggle);    
 
    if (inputText.target.parentElement.style.textDecoration === "line-through") {
      inputText.target.parentElement.style.setProperty(`text-decoration`, "none");
    } else {
      inputText.target.parentElement.style.setProperty('text-decoration', 'line-through');
    }
  }
 
  return (
 
    <div className="App">
      <h1>ToDo List</h1>
     
      <div className="addItem">
        <input className="inputBox" type="text" placeholder='Add to list' value={inputText} onChange={(event) => setInputText(event.target.value)} ></input>
        <button className="addButton" onClick={addItem}>Add</button>
      </div>
 
      <div className="items">
          {items.map((item, index) => {
 
            return (
              <div className="eachItem">
                <h4 key={index}>{item}</h4>
                <button className="button1" onClick={crossItem}>Done?</button>
                <button className="button2" onClick={() => deleteItem(index)}>Remove</button>
              </div>
            )
           
          })}
      </div>
 
    </div>
   
  )
 
}
 
export default App;