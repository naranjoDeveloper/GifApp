import { useState } from "react";

export function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar GIFS"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
}
