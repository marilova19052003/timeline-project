document.getElementById("addPost").addEventListener("click", () => {
  const postInput = document.getElementById("postInput").value;
  if (postInput) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        addPost(postInput, latitude, longitude);
      },
      () => {
        alert(
          "Не удалось получить координаты. Пожалуйста, введите их вручную."
        );
        // Здесь можно добавить логику для ввода координат вручную
      }
    );
  }
});

function addPost(text, latitude, longitude) {
  const timeline = document.getElementById("timeline");
  const postElement = document.createElement("div");
  postElement.textContent = `${text} (Координаты: ${latitude}, ${longitude})`;
  timeline.prepend(postElement);
}

function parseCoordinates(input) {
  const regex = /^\s*\[?\s*(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)\s*\]?\s*$/;
  const match = input.match(regex);

  if (!match) {
    throw new Error("Неверный формат координат");
  }

  return {
    latitude: parseFloat(match[1]),
    longitude: parseFloat(match[2]),
  };
}
