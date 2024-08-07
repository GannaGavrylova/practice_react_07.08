import { useState } from "react";

function Form({ colorFunction }) {
  const [newColor, setNewColor] = useState("");

  const styles = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",

    padding: "10px 20px",
  };

  function handleChange(inputNewColor) {
    setNewColor(inputNewColor); // Обработчик изменения значения поля ввода
  }

  function handleSubmit(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    colorFunction(newColor); // Передаем выбранный цвет в родительский компонент
  }

  return (
    <div>
      <form action="" style={styles} onSubmit={handleSubmit}>
        <label htmlFor="colorInput">Choose a color </label>
        <input
          id="colorInput"
          type="color"
          value={newColor}
          onChange={(e) => handleChange(e.target.value)}
          style={{
            width: "180px",
            height: "165px",
            border: "8px solid white",
            backgroundColor: newColor,
          }}
        />

        <button type="submit">Change!</button>
      </form>
    </div>
  );
}
export default Form;

// 11.Определите состояние newColor для хранения значения цвета, выбранного пользователем.
// 12.Напишите функцию handleChange, которая обновляет newColor на основе выбора пользователя.
// 13.Реализуйте функцию handleSubmit, которая предотвращает стандартное поведение формы, и вызывает colorFunction переданную через пропсы из App.js, передавая ей newColor.
// 14.Добавьте элементы управления формой: поле ввода для выбора цвета и кнопку для отправки формы.
// 15.Добавьте базовую стилизацию для формы. Установите дисплей flex и направление столбца.
// 16.Назначьте размеры для поля ввода, чтобы упростить выбор цвета.
// 17.Сохраните все изменения.
// 18.В терминале запустите приложение, выполнив команду npm start.
// 19.В браузере откроется ваше приложение. Попробуйте изменить цвет через созданный интерфейс и убедитесь, что цвет фона изменяется соответственно.
