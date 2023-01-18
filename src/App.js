import { useState } from "react";
import { Input } from "./components/Input"

const App = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [password, setComment] = useState("")

  const [fieldType, setfieldType] = useState("password")

  return (<>

  <Input 
  type="text" 
  placeholder="Username"
  value={username}
  name="username"
  onChange={e => setUsername(e.target.value)}
  />

  <Input
   type={fieldType} 
   placeholder="password"
   value={password}
   name="password" 
   onChange={e => setPassword(e.target.value)}
   onMouseUp={() => setFieldType("password")}
   onMouseDown={() => setFieldType("text")}
   
   />
 <Input 
  type="text" 
  placeholder="Comment"
  value={comment}
  name="comment"
  onChange={e => setComment(e.target.value)}
  />

  </> );
}
export default App;
