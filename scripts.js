

// array of killers with their title, lore description, difficulty array, and image url of what they look like
let killers = [
    {title: "Nurse",
    description: "The Nurse, also known as Sally Smithson, was once a dedicated nurse who descended into madness after witnessing the horrors of war. Now, she stalks the realm of the Entity, using her ethereal powers to hunt down survivors in Dead by Daylight's twisted trials.", 
    difficulty: ["Hard", 3, "High-Mobility"],
    imageUrl: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/31/K04_charSelect_portrait.png"
}, {
    title: "Trapper",
    description: "Evan MacMillan also known as the Trapper, was born into a family of wealthy landowners. Driven by his father's pressure to uphold the family legacy, Evan's psyche fractured, leading him to become a brutal killer who sets deadly traps to ensnare survivors within the Entity's realm in Dead by Daylight.", 
    difficulty: ["Easy", 1, "Map-Distruption"],
    imageUrl: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9f/K01_charSelect_portrait.png"
}, {
    title: "Hag", 
    description: "The Hag, also known as Lisa Sherwood, was a victim of horrific rituals in her swamp-dwelling village. Cursed and transformed into a vengeful entity, she now lurks in the shadows, ambushing those who trespass onto her traps",
    difficulty: ["Moderate", 2, "High-Mobility"],
    imageUrl: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b4/K06_charSelect_portrait.png"
    }, {
    title: "Trickster", 
    description: "Ji-Woon Hak, known as the Trickster, was once a K-Pop sensation whose obsession with fame drove him insane. Embracing his newfound persona within the Entity's realm, he wields his signature throwing knives with deadly precision, orchestrating a twisted performance to claim his victims in the Entity's trials",
    difficulty: ["Hard", 3, "Ranged"],
    imageUrl: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3e/K23_charSelect_portrait.png"
    }, {
    title: "Wraith", 
    description: "Philip Ojomo, once a humble and hardworking man, was driven to madness by the cruelty of his employers. Transformed into the Wraith by a malevolent entity, he now seeks vengeance on those who wronged him, cloaked in invisibility as he stalks the survivors.",
    difficulty: ["Easy", 1, "Stealthy"],
    imageUrl: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0d/K02_charSelect_portrait.png"
    }, {
    title: "Doctor", 
    description: "The Doctor, also known as Herman Carter, a brilliant psychiatrist, who craved the torture of his unethical experiments on his patients. Now transformed into the Doctor by the Entity, he uses his twisted powers to induce fear and insanity in survivors, tormenting them within game trials.",
    difficulty: ["Moderate", 2, "Map-Control"],
    imageUrl: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ad/K07_charSelect_portrait.png"
    } , {
    title: "Huntress", 
    description: "Anna, the Huntress, was raised in the depths of the Russian wilderness by her deranged mother, who taught her to hunt with a ruthless ferocity. Armed with her trusty hatchets and driven by a primal instinct, she now roams the Entity's realm, relentlessly tracking down survivors.",
    difficulty: 2,
    difficulty: ["Moderate", 2, "Ranged"],
    imageUrl: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/1a/K08_charSelect_portrait.png"
    } , {
    title: "Clown", 
    description: "Kenneth Chase, once a skilled chemist, fell into despair and addiction after the loss of his family. Driven by grief and madness, he now masquerades as the Clown within the Entity's realm, using his toxic concoctions to incapacitate and capture survivors",
    difficulty: ["Easy", 1, "Anti-Looper"],
    imageUrl: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e1/K12_charSelect_portrait.png"
    }, {
    title: "Spirit", 
    description: "Rin Yamaoka, haunted by the tragic loss of her family, embraced her connection to the spirit world. As the Spirit within the Entity's realm, she wields her ancestral katana with deadly precision, seeking vengeance on those who trespass into her domain in Dead by Daylight's trials.",
    difficulty: ["Easy", 1, "Stealthy"],
    imageUrl: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b0/K13_charSelect_portrait.png"
    }, {
    title: "Deathslinger", 
    description: "Known as Caleb Quinn, was once a ruthless bounty hunter in the Wild West. After striking a Faustian bargain for power, he became a servant of the Entity, wielding his fearsome spear gun to ensnare and eliminate survivors.",
    difficulty: ["Moderate", 2, "Ranged"],
    imageUrl: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/84/K19_charSelect_portrait.png"
    }, {
    title: "Blight", 
    description: "Talbot Grimes, a devoted chemist, sought a cure from the Blight flower's essence but was transformed into a monstrous entity by a tragic accident. Now known as The Blight, he relentlessly pursues survivors within the Entity's realm, driven by his cursed obsession and the Entity's influence.",
    difficulty: ["Hard", 3, "Map-Control"],
    imageUrl: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0b/K21_charSelect_portrait.png"
    }

];



// This function adds cards the page to display the data in the array
function showKillers() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < killers.length; i++) {
        let title = killers[i].title;
        let desc = killers[i].description;
        let imageURL = killers[i].imageUrl;
        let difficulty = Array.from(killers[i].difficulty);

        const nextCard = templateCard.cloneNode(true); 
        editCardContent(nextCard, title, imageURL, desc, difficulty); 
        cardContainer.appendChild(nextCard); 
    }
}

//edits the cards content of the specific killer
function editCardContent(card, newTitle, newImageURL, desc, difficulty, number) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    //used for setting the lore description
    const cardDesc = card.querySelector("p");
    cardDesc.textContent = desc;

    //used for creating the tags of the killers using the content in their difficulty arrays
    const cardTag = card.querySelectorAll("h3");
    cardTag[0].textContent = difficulty[0];
    cardTag[1].textContent = difficulty[2];
    setDifficultyColor(cardTag[0], difficulty[1]);

    console.log("new card:", newTitle, "- html: ", card);
}


//removes a killer from the array
function removeLastKiller() {
    killers.pop(); // Remove last item in titles array
    showKillers(); // Call showCards again to refresh
}


//function that compares the difficulty number 
function difficultyCompare(a, b) {
    const difficultyA = a.difficulty[1];
    const difficultyB = b.difficulty[1];

    if (difficultyA < difficultyB) {
        return -1;
    }
    else if (difficultyA > difficultyB) {
        return 1;
    }
}


//sorts killers using the difficultyCompare function
function sortKillers() {
    killers.sort(difficultyCompare);
    showKillers();
}


//sets the color of the difficulty tag
function setDifficultyColor(container, difficulty) {
    if (difficulty == 1) {
        container.style.backgroundColor = "rgba(29, 160, 6, 0.478)";
    }
    else if (difficulty == 2) {
        container.style.backgroundColor = "rgba(240, 244, 14, 0.478)";
    }
    else if (difficulty == 3) {
        container.style.backgroundColor = "rgba(243, 19, 7, 0.392)";
    }
}

//function for filtering the killers based off the dropdown menu option clicked on
function selectedOption() {
    // Get the selected value from the dropdown
    let selectedValue = document.getElementById("dropdown").value;

    // Perform actions based on the selected value
    switch(selectedValue) {
        case 'option1':
            greenDifficulty();
            break;
        case 'option2':
            yellowDifficulty();
            break;
        case 'option3':
            redDifficulty();
            break;
        case 'option4':
            rangedKillers();
            break;
        case 'option5':
            hmKillers();
            break;
        default:
            break;
    }
}

//function to display high mobility killers
function hmKillers() {
    let hmKillers = [];
    for(let i=0; i < killers.length; i++) {
        if (killers[i].difficulty[2] == "High-Mobility") {
            hmKillers.push(killers[i]);
        }
    }
    specificKillers(hmKillers);
}

//function to display ranged killers
function rangedKillers() {
    let rangedKillers = []
    for(let i=0; i < killers.length; i++) {
        if (killers[i].difficulty[2] == "Ranged") {
            rangedKillers.push(killers[i]);
        }
    }
    specificKillers(rangedKillers);
}

//function to display green difficulty killers
function greenDifficulty() {
    let greenKillers = []
    for(let i=0; i < killers.length; i++) {
        if (killers[i].difficulty[1] == 1) {
            greenKillers.push(killers[i]);
        }
    }
    specificKillers(greenKillers);
}

//function to display the yellow difficulty killers
function yellowDifficulty() {
    let yellowKillers = []
    for(let i=0; i < killers.length; i++) {
        if (killers[i].difficulty[1] == 2) {
            yellowKillers.push(killers[i]);
        }
    }
    specificKillers(yellowKillers);
}

//function to display the red difficulty killers
function redDifficulty() {
    let redKillers = []
    for(let i=0; i < killers.length; i++) {
        if (killers[i].difficulty[1] == 2) {
            redKillers.push(killers[i]);
        }
    }
    specificKillers(redKillers);
}

//function used to display the specific killers
function specificKillers(specifickillers) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < specifickillers.length; i++) {
        let title = specifickillers[i].title;
        let desc = specifickillers[i].description;
        let imageURL = specifickillers[i].imageUrl;
        let difficulty = Array.from(specifickillers[i].difficulty);

        const nextCard = templateCard.cloneNode(true); // Copy the template card 
        editCardContent(nextCard, title, imageURL, desc, difficulty); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

//function used for live search filtering when typing in specific killer names
function liveSearch() {
  //locate the search input
  let search_query = document.getElementById("killerBar").value;

  for (let i=0; i < killers.length; i++) {
    if (search_query == "") {
        showKillers();
    }
    else if (killers[i].title.toLowerCase().includes(search_query.toLowerCase())) {
        console.log(killers[i].title)
        foundKiller(killers[i]);
    }
  }
}

//function for the live search function, this displays that specific found killers
function foundKiller(killer) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    let title = killer.title;
    let desc = killer.description;
    let imageURL = killer.imageUrl;
    let difficulty = killer.difficulty;

    const nextCard = templateCard.cloneNode(true); 
    editCardContent(nextCard, title, imageURL, desc, difficulty); 
    cardContainer.appendChild(nextCard); 
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showKillers);
