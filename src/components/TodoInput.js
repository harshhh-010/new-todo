import React,{useState} from 'react'

function TodoInput(props) {
    const[InputText,SetInputText]=useState('');
    const handleEnterPress=(e)=>{
        if(e.keyCode===13){
            props.AddList(InputText)
            SetInputText('')
        }
    }
  return (
    <div>
      <div className="input-container">
        <input type="text" placeholder='Enter your Todo' value={InputText}
            onChange={e=>{
                SetInputText(e.target.value)
            }}
            onKeyDown={handleEnterPress}
            />
        <button onClick={()=>{
            props.AddList(InputText)
            SetInputText('')
        }}>+</button>
      </div>
    </div>
  )
}

export default TodoInput
