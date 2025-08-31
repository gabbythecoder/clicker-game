// console.log("hello world"); testing

let stats = {
    punchCount: 0,
    cps: 0
}

const images = [
    {
        title: "Fist",
        src: "./images/Fist.png",
        alt: "An icon image of a fist"
    },
    {
        title: "Wrapped First",
        src: "./images/Wrapped-Fist.png",
        alt: "An icon image of a wrapped first"
    },
    {
        title: "Boxing Glove",
        src: "./images/Boxing-Glove.png",
        alt: "An icon image of a boxing glove"
    },
    {
        title: "Robot Fist",
        src: "./images/Robot-Fist.png",
        alt: "An icon image of a robot fist"
    }
];

//local storage
function getSavedData() {
    const savedStats = localStorage.getItem("stats");
        return savedStats ? JSON.parse(savedStats) : { punchCount: 0, cps: 0 };
}

function saveStats() {
    localStorage.setItem("stats", JSON.stringify(stats));
}

//setting up the clickCounter() 
function clickCounter() {
    const clickButton = document.getElementById("click-button");
    const countNumber = document.getElementById("counts");
    const displayCPS = document.getElementById("cps-display");
    const resetButton = document.getElementById("reset-button");
    const punchSound = document.getElementById("punch-sound");
    const volumeControl = document.getElementById("volume-control");

    //load from local storage
    stats = getSavedData();

    //display the punchCount and cps on page load
    countNumber.textContent = stats.punchCount;
    displayCPS.textContent = "CPS: " + stats.cps;

    //setting the default volume for punchSound
    punchSound.volume = 0.5;

    //event listener for the click button
    clickButton.addEventListener("click", function() {
        stats.punchCount++;
        countNumber.textContent = stats.punchCount;
        saveStats();

        punchSound.currentTime = 0; //resets the sound
        punchSound.play();
    })

    //adjusting volume bar
    volumeControl.addEventListener("input", function() {
        punchSound.volume = volumeControl.value;
    })

    //event listener for the reset button
    resetButton.addEventListener("click", function() {
        stats.punchCount = 0;
        stats.cps = 0;
        countNumber.textContent = stats.punchCount;
        displayCPS.textContent = "CPS: " + stats.cps;
        saveStats();
    })
}

//fetching API -> added try/catch for error handling 
async function fetchUpgrades() {
    try {
        const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");

        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const upgrades = await response.json();

        //using the filter() method to cut down on the amount of upgrades used in the game
        const filterUpgrades = upgrades.filter((upgrade) => upgrade.id < 5);
        console.log(filterUpgrades);

        return filterUpgrades;

    } catch (error) {
        console.log("Error with fetching API:" + error);
        return [];
    }
}

// fetchUpgrades();

//appending the upgrades to the DOM
async function displayUpgrades() {
    const upgrades = await fetchUpgrades();
    const shopContainer = document.getElementById("shop-container");

    if (upgrades.length === 4 && images.length === 4) {
        upgrades.forEach(function(upgrade, index) {
            const upgradeContainer = document.createElement("div");
            upgradeContainer.className = "upgrade-container";

            const upgradeButton = document.createElement("button");
            upgradeButton.className = "upgrade-button";
            upgradeButton.textContent = "Buy"; //default text

            //getting the images for the upgrade from the images array 
            const upgradeImage = images[index];

            if (upgradeImage) {
                const imageUpgradeButton = document.createElement("img");
                imageUpgradeButton.src = upgradeImage.src;
                imageUpgradeButton.alt = upgradeImage.alt;
                imageUpgradeButton.title = upgradeImage.title;

                //replacing the button text with the image
                upgradeButton.innerHTML = ""; //clearing the upgradeButton default text
                upgradeButton.appendChild(imageUpgradeButton);

                imageUpgradeButton.className = "image-upgrade-button";
            }

            //assigning text content 
            const upgradeDescription = document.createElement("div");
            upgradeDescription.className = "upgrade-description";

            const upgradeName = document.createElement("h3");
            upgradeName.className = "upgrade-name";
            upgradeName.textContent = upgrade.name;

            const upgradeCost = document.createElement("p");
            upgradeCost.className = "upgrade-cost";
            upgradeCost.textContent = "Cost: " + upgrade.cost;

            const upgradeIncrease = document.createElement("p");
            upgradeIncrease.className = "upgrade-increase";
            upgradeIncrease.textContent = "Increase: " + upgrade.increase;

            //appending to the description container
            upgradeDescription.appendChild(upgradeName);
            upgradeDescription.appendChild(upgradeCost);
            upgradeDescription.appendChild(upgradeIncrease);

            //appending the upgradeButton and upgradeDescription to upgradeContainer
            upgradeContainer.appendChild(upgradeButton);
            upgradeContainer.appendChild(upgradeDescription);

            //append to the shop container 
            shopContainer.appendChild(upgradeContainer);

            //add event listener to the imageUpgradeButton 
            upgradeButton.addEventListener("click", function() {
                buyUpgrades(upgrade);
            })
        });

        } else {
            console.log(`Error: The number of upgrades or images do not match.`); 
    }
}

displayUpgrades();

function buyUpgrades(upgrade) {
    if (stats.punchCount >= upgrade.cost) {
        stats.punchCount -= upgrade.cost;

        //update cps after purchasing new upgrade
        stats.cps += upgrade.increase;

        saveStats();

        //update the display 
        document.getElementById("counts").textContent = stats.punchCount;
        document.getElementById("cps-display").textContent = "CPS: " + stats.cps;

    } else {
        alert(`Not enough punchCount for ${upgrade.name}`);
    }
}

// setting up the interval to increment automatically every second 
setInterval(function() {
    stats.punchCount += stats.cps;
    document.getElementById("counts").textContent = stats.punchCount;
    saveStats();
}, 1000);

//testing animations for my punching bag image
const punchImage = document.querySelector(".punching-bag");

punchImage.addEventListener("click", function() {
    punchImage.classList.add("punched");
    setTimeout(function() {
        punchImage.classList.remove("punched");
    }, 150);
});

clickCounter();