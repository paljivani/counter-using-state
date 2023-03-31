import './App.css';
import { Button, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  const hAdd = () => {
    setCount(count + 5);
  };

  const hRemove = () => {
    setCount(count - 3);
  };

  const hClear = () => {
    setCount(0);
  };

  return (
    <div className='sec'>
      <h1>{count}</h1>

      <Stack direction='row' align='center'>
        <div className='Stacks'>
        <Button colorScheme='teal' size='md' onClick={hAdd} mx="2" mt="2">
          Add 5
        </Button>
        <Button colorScheme='teal' size='md' onClick={hRemove} mx="2"  mt="2">
          Remove 3
        </Button>
        <Button colorScheme='teal' size='md' onClick={hClear} mx="2"  mt="2">
          Clear
        </Button>
        </div>
      </Stack>
    </div>
  );
}


export default App;
