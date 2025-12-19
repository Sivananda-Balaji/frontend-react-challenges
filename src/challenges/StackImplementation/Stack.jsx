import { useState } from "react";
import style from "./Stack.module.css";

const Stack = () => {
  const [userInput, setUserInput] = useState("");
  const [stack, setStack] = useState([]);
  const [text, setText] = useState("Stack Size is 10");

  const handlePush = () => {
    if (userInput === "") {
      setText("Enter a value");
    } else {
      if (stack.length < 10) {
        setStack([...stack, userInput]);
        setUserInput("");
        setText(`${userInput} is pushed into the Stack`);
      } else {
        setText("Stack is Full!");
      }
    }
  };
  const handlePop = () => {
    if (stack.length === 0) {
      setText("Stack is Empty!");
    } else {
      const newStack = [...stack];
      const removed = newStack.pop();
      setStack(newStack);
      setText(`${removed} is popped from the stack`);
    }
  };
  const handlePeek = () => {
    if (stack.length === 0) {
      setText("Stack is Empty!");
    } else {
      const lastItem = stack.at(-1);
      setText(`Last Element is ${lastItem}`);
    }
  };
  const handleIsEmpty = () => {
    if (stack.length === 0) {
      setText("Stack is Empty!");
    } else {
      setText("Stack is not Empty");
    }
  };
  const handleIsFull = () => {
    if (stack.length === 10) {
      setText("Stack is Full!");
    } else {
      setText("Stack is not Full!");
    }
  };
  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <input
          type="text"
          id="userInput"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          required
        />
      </div>
      <div className={style.buttonSection}>
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
        <button onClick={handlePeek}>Peek</button>
        <button onClick={handleIsEmpty}>IsEmpty</button>
        <button onClick={handleIsFull}>IsFull</button>
      </div>
      <h3>{text}</h3>
      <div>
        {[...stack].reverse().map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Stack;
