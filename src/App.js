
import Student from "./components/Student"
import PersonIterator from "./components/PersonIterator"
import StudentClass from "./components/StudentClass"
import "./css/style.css/"

const App = () =>{
const name = "Mia Koluci"
const age = 34
const toShow = true
const fruits = ['apple', 'android', 'banana']

const student ={
  name,
  age,
  fruits,
}


  return (<>
    <div className="red">Hello World</div>
    <div style={{padingleft : "10px", color: "green"}}>Hello World</div>
    
    
    <Student fruits={fruits} name={name} age={age} shouldTheComponentShow={toShow}/>

    <Student 
    fruits={["orange", "lemon", "lime"]} 
    name={"svetle"} 
    age={44} 
    shouldTheComponentShow={true}/>


    <hr /><hr /><hr />

    <PersonIterator />

    <hr /><hr /><hr />

    <StudentClass />
    fruits={fruits} 
    name={name} 
    age={age} 
    shouldTheComponentShow={toShow}/>

    </> );
}

// function App() {
//   return (
//     <div>Hello World</div>
//   );
// }

export default App;
