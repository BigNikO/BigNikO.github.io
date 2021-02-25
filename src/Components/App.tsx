import React from // useEffect,
// useState,
'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToDo, loadToDoList } from '../actions';
import Layout from './Layout/Layout';
// import { RootState } from '../store';

const App: React.FC = () => {
  // const [newTitle, setNewTitle] = useState<string>('New');
  // const toDoList = useSelector((state: RootState) => state.todoState.toDoList);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadToDoList());
  // }, [dispatch]);

  return <Layout />;
};

export default App;

// <div className="flex space-x-4 space-y-1">
//   <ul className="flex-1 animate-bounce w-6 h-6" >
//     {toDoList.map((element: any) => (
//       <li>
//         <div>
//           {element._id}: {element.title}
//         </div>
//       </li>
//     ))}
//   </ul>
//   <button
//     className="transition duration-500 ease-in-out bg-blue-800 hover:bg-red-600 transform  hover:scale-110 text-white font-bold rounded p-2.5 px-10"
//     onClick={() => {
//       dispatch(
//         addToDo({
//           _id: new Date().getTime(),
//           title: newTitle,
//         })
//       );
//     }}
//   >
//     {'Add new'}
//   </button>
//   <input
//     type="text"
//     onChange={(e) => {
//       setNewTitle(e.target.value);
//     }}
//     className="flex-1 border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent rounded"
//   />
// </div>
