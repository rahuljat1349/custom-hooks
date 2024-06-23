import React, { useEffect, useState } from "react";

function useDeboune(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
   let timeOutNumber =  setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);


    return ()=>{
      clearInterval(timeOutNumber);
    }
  }, [value]);

  return debouncedValue;
}

//
//
const DebounceHook = () => {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDeboune(inputValue, 500);
  return (
    <div>
      debounceValue is {debounceValue} <br />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default DebounceHook;
