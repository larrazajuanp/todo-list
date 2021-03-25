import Error from "./Error"
import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Todolist = ({todos, deleteTodo}) => {

  if(!todos.length){
    return(
      <>
      <Error/>
      </>
    )
  }
 
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.300"
      borderWidth="0.1rem"
      borderRadius="md"
      boxShadow="lg"
      p={4}
      w="100%"
      maxW={{base: "90vw", sm:"80vw", lg: "60vw", xl:"50vw"}}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack p={4} key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer/>
          <IconButton icon={<FaTrash />} size="md" isRound="true" onClick={() => deleteTodo(todo.id)}/>
        </HStack>
      ))}
    </VStack>
  );
};

export default Todolist;
