import React from 'react'

function TodoList(props) {
  return (
    <>
   {props.item && props?.item?.length > 0 && <div className="todos">
        <li className="list-item">
            {props.item} 
        </li>
        {console.log(props.item,'props.item')}

        <span className='icon'>
        <i className="fa-regular fa-trash-can icon-delete" onClick={e=>{
            props.deleteItem(props.Index)
        }}></i>
        </span>
    </div>}
    </>
  )
}

export default TodoList
