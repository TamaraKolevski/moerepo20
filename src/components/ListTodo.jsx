
const ListTodo = (props) => { 
const { todos } = props;
   
const style = {
    border: "1px solid black",
    borderCollapse: "collapse",
    padding: 5px,


return (

    <div>
        <table stayle={style}>
            <thead>
                <tr>
                    <td>userID</td>
                    <td>id</td>
                    <td>title</td>
                    <td>completed</td>
                    <td>Delete</td>
                    <td>Complete</td>
            </tr> 
            </thead> 
            <tbody>
            {todos.map((todo) =>  (
                <td>{todo.userID}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed}</td>
                <td>{todo.Delete}</td>
                <td>{todo.Complete}</td>
                <td>
                    <input type="checkebox" cheked={todo.complited}/>
                </td>
                <td>
                    <button onClick={() =>}></button>
                </td>
 )
  )}
            </tbody>  
        </table>
       
    </div>
   )
   }
export default ListTodo;
