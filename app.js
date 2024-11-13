
var cardData = [
    { title: "Kurta",  text: "Rs:499pkr", imageUrl:  "pic1.jpeg" },
    { title: "T-shirt & pant", text: "Rs:699pkr", imageUrl: "pic2.jpeg" },
    { title: "T-shirt & pant", text: "Rs:399pkr", imageUrl: "pic3.jpeg" },
    { title: "T-Shirt & pant", text: "Rs:599pkr", imageUrl: "pic4.jpeg" },
    { title: "Baby frock", text: "Rs:999pkr", imageUrl: "pic7.jpeg" },
    { title: "T-shirt & Trouser", text: "Rs:499pkr", imageUrl: "pic5.jpeg" },
    { title: "Baby frock", text: "Rs:799pkr", imageUrl: "pic6.jpeg" },
    { title: "Baby frock & pant", text: "Rs:499pkr", imageUrl: "pic9.jpeg" }

];

function createCard(title, text, imageUrl , ) {
   
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = imageUrl;
    card.appendChild(img);

    const heartIcon = document.createElement("i");
    heartIcon.classList.add("fa-regular" , "fa-heart" , "card-icon");
    const cartIcon = document.createElement("i");
    cartIcon.classList.add("fa-solid", "fa-cart-shopping", "cart-icon");

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");

    cardTitle.append(` ${title}`);
    cardTitle.appendChild(heartIcon);
    card.appendChild(cardTitle);
    const cardText = document.createElement("div");
    cardText.classList.add("card-text");
    cardText.innerText = text;
    card.appendChild(cardText);
    cardText.appendChild(cartIcon);
    
    return card;
}

function renderCards() {
    const container = document.getElementById("cardContainer");
    cardData.forEach(data => {
        const card = createCard(data.title, data.text, data.imageUrl);
        container.appendChild(card);
    });
}

renderCards();

