//-----------------------onChange
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [name, setState] = useState("");

//   function handleChange(event) {
//     setState(event.target.value);
//   }
//   return (
//     <div className="App">
//       <input value={name} onChange={handleChange} />
//     </div>
//   );
// }

// export default App;

//-------------------------VALIDATION
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   const [message, setMessage] = useState("");

//   function handleChange(event) {
//     setName(event.target.value);

//     if (name.length === 0) {
//       setMessage("Should not be empty!");
//     } else if (name.length <= 2) {
//       setMessage("Name should consist of more then 2 letters!");
//     } else {
//       setMessage("Everything's fine!");
//     }
//   }

//   console.log("render");
//   return (
//     <div className="App">
//       <input
//         value={name}
//         type="text"
//         name="username"
//         id="name"
//         onChange={handleChange}
//       />
//       <p>Message: {message}</p>
//     </div>
//   );
// }

// export default App;

// practice

// import { useState } from "react";
// import Title from "./components/title/index";

// function App() {
//   return (
//     <div className="App">
//       <Title />
//     </div>
//   );
// }

// export default App;
//-------------------------------------
// Создание простого приложения на React для изменения цвета фона:
// 1.Инициализируйте новый проект React с помощью Create React App, подготовьте его к работе.
// 2.Откройте файл App.js.
// 3.Импортируйте хук useState из библиотеки React.
// 4.В компоненте, используйте useState для создания состояния color, которое будет хранить текущий цвет фона.
// 5.Создайте функцию updateColor, которая принимает новый цвет и обновляет состояние color.
// 6.Внутри JSX компонента App, добавьте стили для вертикального и горизонтального выравнивания содержимого
// и установите фон, используя текущее состояние color.
// 7.Импортируйте компонент Form и передайте ему функцию updateColor через пропсы.
// 8.Создайте новый файл Form.jsx в той же директории.
// 9.Импортируйте useState так же, как и в App.js.
// 10.Создайте функциональный компонент Form.
import { useState } from "react";
import Form from "./components/form/index";
function App() {
  const [color, setColor] = useState("blue");
  const styles = {
    width: "450px",
    height: "550px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color,
    marginLeft: "200px",
  };

  function updateColor(newColor) {
    setColor(newColor);
  }

  return (
    <div className="App" style={styles}>
      <div className="container">
        <Form colorFunction={updateColor} />
      </div>
    </div>
  );
}

export default App;
