// History Data
const historyData = [];

// Heart Icons Function
let heartCounter = 0;
const hearts = document.querySelectorAll(".heart");
for (const heart of hearts) {
    heart.addEventListener("click", function () {
        heart.classList.add();
        heartCounter++;
        document.getElementById("heart-number").innerText = heartCounter;
    });

}

// Call Button Functions
const callButtons = document.querySelectorAll(".call-btn");
const coinsEl = document.getElementById("coins");
const reduceCoins = 20;

for (const button of callButtons) {
    button.addEventListener("click", function () {
        const card = button.closest(".parent-card");
        if (!card) return;

        const serviceName = card.querySelector("h1")?.innerText || "Service";
        const serviceNumber = card.querySelector(".hotline-number")?.innerText || "Number";

        let currentCoins = parseInt(coinsEl.innerText, 10);

        if (currentCoins >= reduceCoins) {
            currentCoins -= reduceCoins;
            coinsEl.innerText = currentCoins;

            alert(`📞Calling: ${serviceName} ${serviceNumber}`);

            // Add to history
            const data = {
                name: serviceName,
                number: serviceNumber,
                date: new Date().toLocaleTimeString(),
            };
            historyData.push(data);

            // Render history
            const historyContainer = document.getElementById("history");
            historyContainer.innerHTML = "";
            for (const data of historyData) {
                const div = document.createElement("div");
                div.innerHTML = `
          <div class="flex justify-between items-center p-3 rounded-xl bg-[#fafafa] mt-3">
            <div>
              <h2 class="text-lg mb-1 font-bold">${data.name}</h2>
              <p class="text-gray-500 font-semibold">${data.number}</p>
            </div>
            <div>
              <p class="font-semibold">${data.date}</p>
            </div>
          </div>
        `;
                historyContainer.appendChild(div);
            }
        } else {
            alert("❌Not enough coins! Need 20 coins to call.");
        }
    });
}

// Clear Button Function
document.getElementById('clear-btn').addEventListener('click', function () {
    historyData.length = 0;
    document.getElementById('history').innerHTML = '';
});