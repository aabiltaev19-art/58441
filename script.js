function sendMessage() {
    let input = document.getElementById("input");
    let messages = document.getElementById("messages");

    let text = input.value.toLowerCase();
    if(text === "") return;

    messages.innerHTML += `<p><b>Сіз:</b> ${text}</p>`;

    let reply = "Кешіріңіз, түсінбедім 😊";

    if(text.includes("алматы")) {
        reply = "Алматы — Қазақстанның ең әдемі қалаларының бірі. Мұнда Медеу, Шымбұлақ және Көк-Төбе бар!";
    }
    else if(text.includes("медеу")) {
        reply = "Медеу — әлемдегі ең биік мұз айдыны 🏔️";
    }
    else if(text.includes("шымбулак")) {
        reply = "Шымбұлақ — тау шаңғы курорты ⛷️";
    }
    else if(text.includes("қайда бару")) {
        reply = "Сіз Көлсай, Шарын каньоны немесе Бурабайға бара аласыз!";
    }

    messages.innerHTML += `<p><b>AI:</b> ${reply}</p>`;
    input.value = "";
}
