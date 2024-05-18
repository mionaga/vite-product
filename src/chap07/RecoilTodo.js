import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";
import { todoAtom, todoLastIdSelector } from "../store/atom";
import '../chap04/StateTodo.css';

let maxId = 6;

const RecoilTodo = () => {
  const {todos, setTodos} = useState('');
  const {addTodo, setAddTodo} = useState(todoAtom);
  

  const handleChange = (e) => {
    setTodos(e.target.value);
  }
  const handleClick = () => {
    setAddTodo([
      ...todos,
      {
        id: ++maxId,
        todos,
      }
    ]);
  };
  
  return (
    <>
    <label htmlFor="title">やること： </label>
    <input type="text" name="title" value={todos} id="title" onChange={handleChange} />
    <button type="button" onClick={handleClick}>Add</button>
    <hr/>
    <ul>
      {console.log(todos)}
    {/* {todos.map((todo) => {
      return (
        <li key={todo.id}>
        {todo.title}
        </li>
      )
    })} */}
    </ul>
    </>
  );
};

export default RecoilTodo;


// import { useRecoilState, useRecoilValue } from 'recoil';
// import { useState } from 'react';
// import { todoAtom, todoLastIdSelector } from '../store/atom';
// import '../chap04/StateTodo.css';

// export default function RecoilTodo() {
//   const [title, setTitle] = useState('');
//   const [todo, setTodo] = useRecoilState(todoAtom);
//   const maxId = useRecoilValue(todoLastIdSelector);

//   const handleChangeTitle = e => setTitle(e.target.value);
//   const handleAdd = () => {
//     setTodo([
//       ...todo,
//       {
//         id: maxId + 1,
//         title,
//         isDone: false
//       }
//     ]);
//   };
//   const handleDone = e => {
//     setTodo(todo.map(item => {
//       if (item.id === Number(e.target.dataset.id)) {
//         return {
//           ...item,
//           isDone: true
//         };
//       } else {
//         return item;
//       }
//     }));
//   };
//   const handleRemove = e => {
//     setTodo(todo.filter(item =>
//       item.id !== Number(e.target.dataset.id)
//     ));
//   };

//   return (
//     <div>
//       <label>
//         やること：
//         <input type="text" name="todo"
//           value={title} onChange={handleChangeTitle} />
//       </label>
//       <button type="button"
//         onClick={handleAdd}>追加</button>
//       <hr />
//       <ul>
//         {todo.map(item => (
//           <li key={item.id}
//             className={item.isDone ? 'done' : ''}>
//             {item.title}
//             <button type="button"
//               onClick={handleDone} data-id={item.id}>済
//             </button>
//             <button type="button"
//               onClick={handleRemove} data-id={item.id}>削除
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }