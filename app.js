// console.log("hello world"); testing

let punchCount = 0;
let cps = 0;

//setting up the clickCounter() 
function clickCounter() {
    const clickButton = document.getElementById("click-button");
    const countNumber = document.getElementById("counts");

    //load from local storage
    const savedCount = localStorage.getItem("punchCount");
    punchCount = savedCount ? Number(savedCount) : 0;

    clickButton.addEventListener("click", function() {
        punchCount++;
        countNumber.textContent = punchCount;
        localStorage.setItem("punchCount", punchCount); 
    })
}

clickCounter();

//fetching API
async function fetchUpgrades() {
    const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    const upgrades = await response.json();

    //using the filter() method to cut down on the amount of upgrades used in the game
    const filterUpgrades = upgrades.filter((upgrade) => upgrade.id < 4);
    console.log(filterUpgrades);

    return filterUpgrades;
}

fetchUpgrades();

//appending the upgrades to the DOM
async function shopUpgrades() {
    const upgrades = await fetchUpgrades();
    const shopContainer = document.getElementById("shop-container");

    upgrades.forEach(function(upgrade) {
        const upgradeContainer = document.createElement("div");
        upgradeContainer.className = "upgrade-container";

        //assigning text content 
        const upgradeName = document.createElement("h3");
        upgradeName.textContent = upgrade.name;

        const upgradeCost = document.createElement("p");
        upgradeCost.textContent = "Cost: " + upgrade.cost;

        const upgradeIncrease = document.createElement("p");
        upgradeIncrease.textContent = "Increase: " + upgrade.increase;

        const upgradeButton = document.createElement("button");
        upgradeButton.textContent = "Buy";
        
        //appending to the DOM
        upgradeContainer.appendChild(upgradeName);
        upgradeContainer.appendChild(upgradeCost);
        upgradeContainer.appendChild(upgradeIncrease);
        upgradeContainer.appendChild(upgradeButton);

        shopContainer.appendChild(upgradeContainer);
    });
}

shopUpgrades();

//writing function for each upgrade 
function autoClicker() {
    if (cookieCount >= 100) {
        cookieCount -= 100;
        cps += 1;
        // updateDisplay() -> will need to write a function for this
    }
}

function enhancedOven() {
    if (cookieCount >= 500) {
        cookieCount -= 500;
        cps += 5;
    }
}

function cookieFarm() {
    if (cookieCount >= 1000) {
        cookieCount -= 1000;
        cps += 10;
    }
}

function robotBaker() {
    if (cookieCount >= 2000) {
        cookieCount -= 2000;
        cps += 20;
    }
}

function cookieFactory() {
    if (cookieCount >= 5000) {
        cookieCount -= 5000;
        cps += 50;
    }
}