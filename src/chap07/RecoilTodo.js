import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";
import { todoAtom, todoLastIdSelector } from "../store/atom";
import '../chap04/StateTodo.css';

// let maxId = 6;

const RecoilTodo = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useRecoilState(todoAtom);
  const maxId = useRecoilValue(todoLastIdSelector);
  

  const handleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleAdd = () => {
    setTodos([
      ...todos,
      {
        id: ++maxId,
        title,
        isDone: false
      }
    ]);
    setTitle('');
  };
  const handleDone = (e) => {
    setTodos((todos.map((todo) => {
      if(todo.id === Number(e.target.dataset.id)){
        return {
          ...todo,
          isDone: !todo.isDone
        }
      } else {
        return todo;
      }
    })));
  };
  const handleRemove = (e) => {
    setTodos(todos.filter((todo) => {
      return todo.id !== Number(e.target.dataset.id);
    }));
  }

  return (
    <>
    <label>
      やること：
      <input type="text" value={title} onChange={handleChange} />
      <button type="button" onClick={handleAdd}>Add</button>
    </label>
    <hr />
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id} className={todo.isDone ? 'done' : ''}>
            {todo.title}
            <button type="button" onClick={handleDone} data-id={todo.id}>Done</button>
            <button type="button" onClick={handleRemove} data-id={todo.id}>Delete</button>
          </li>
        )
      })}
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