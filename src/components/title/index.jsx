import { useState } from "react";

function Title() {
  const [title, setTitle] = useState("Начальная надпись");

  function handleTitle(newTitle) {
    setTitle(newTitle.target.value);
  }
  return (
    <div>
      <h1>{title}</h1>
      <input
        value={title}
        type="text"
        name="username"
        id="name"
        onChange={handleTitle}
      />
    </div>
  );
}
export default Title;
