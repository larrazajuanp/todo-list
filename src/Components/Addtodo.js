import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import {useState} from "react";
import {nanoid} from "nanoid";


const AddTodo = ({addTodo}) => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!content){
      toast({
        title: "No content written",
        status: "error",
        duration: 4000,
        isClosable: true,
      })
      return
    }
      
      const todo = {
        id:nanoid(),
        body: content,
      }
      addTodo(todo)
      setContent('')
  };

  const[content, setContent] = useState('');


  return (
    <form onSubmit={handleSubmit}>
      <HStack mb="4">
        <Input
          placeholder="Set a to do item"
          variant="filled"
          borderRadius="md"
          boxShadow="lg"
          size="sm"
          w="20rem"
          value = {content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px={16} type="submit" >
          Add todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;

<></>;
