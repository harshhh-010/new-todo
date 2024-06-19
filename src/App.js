import React,{useState} from 'react'
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [listTodo,SetListTodo]=useState([]);
  let AddList= (inputText)=>{
    if (inputText!=='') {
      SetListTodo([...listTodo,inputText]);
    }
  }
  const deleteListItem =(Key)=>{
    let NewListTodo=[...listTodo];
    NewListTodo.splice(Key,1)
    SetListTodo([NewListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput AddList={AddList}/>
        <h3>TODO</h3>
        <hr />
        {console.log(listTodo,'listTodo')}
        {listTodo && listTodo?.length>0 &&listTodo.map((listItem,i)=>{
          return(
            <TodoList Key={i} Index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}

      </div>
    </div>
  );
}

export default App;
