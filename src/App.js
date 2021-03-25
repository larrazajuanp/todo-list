import Header from "./Components/Header";
import AddTodo from "./Components/Addtodo";
import Todolist from "./Components/Todolist";
import { VStack, IconButton, useColorMode} from "@chakra-ui/react";
import { FaSun, FaMoon} from "react-icons/fa";
import { IconContext } from "react-icons";
import {useState, useEffect} from "react"

function App() {
  
  
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos'))|| []
  );

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const deleteTodo = (id) =>{
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const addTodo = (todo)=>{
    setTodos([...todos, todo]);
  }

  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <VStack p={4}>
      <IconContext.Provider value={{ color: "yellow"}}>
        <IconButton
          icon={colorMode === "light" ? <FaSun /> : <FaMoon/>}
          isRound="true"
          size="md"
          alignSelf="flex-end"
          onClick = {toggleColorMode}
        />
      </IconContext.Provider>

      <Header  fontWeight="extrabold" size="2xl"/>
      <AddTodo  addTodo={addTodo}/>
      <Todolist todos={todos} deleteTodo={deleteTodo}/>
    </VStack>
  );
}

export default App;
