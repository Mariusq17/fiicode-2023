const newsContainer = document.getElementById("newsContainer");
const images = document.getElementsByClassName("grid-item-image");

let fr = [], imagesIndex = 0;
const imageSize = 400;
const imageArray = [
    `https://source.unsplash.com/AaVTg7jXUew/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/eRJCXdb3Q48/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/L8tWZT4CcVQ/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/NFvdKIhxYlU/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/8q-U8X1zkvI/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/701-FJcjLAQ/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/hIgeoQjS_iE/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/Y-3Dt0us7e0/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/y5hQCIn1c6o/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/BxXgTQEw1M4/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/7jjnJ-QA9fY/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/iIDiRMITYik/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/tE7_jvK-_YU/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/KrsoedfRAf4/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/_N7I1JyPYJw/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/Us3AQvyOP-o/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/KltoLK6Mk-g/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/DC9d8HYI5IQ/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/IG96K_HiDk0/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/ruFBkCruBVk/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/RXVfrhCswCQ/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/rnr8D3FNUNY/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/4_hFxTsmaO4/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/36i9vuZrVjc/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/JdtUKqGdqw8/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/In4XVKhYaiI/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/vGu08RYjO-s/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/-msTEzGwKJs/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/GnLuuG9crEY/${imageSize}x${imageSize}`,
    `https://source.unsplash.com/pTrhfmj2jDA/${imageSize}x${imageSize}`,
];


function addImage() {
    for(let i = 0; i < imageArray.length; i++) 
        fr[i] = 0;
    while(imagesIndex < images.length) {
        let randomIndex = Math.floor(Math.random() * imageArray.length);
        if(fr[randomIndex] == 0) {
            fr[randomIndex] = 1;
            let randomImageSrc = imageArray[randomIndex];
            images[imagesIndex].src = randomImageSrc;
            imagesIndex++;
    } 
}
}

//API

const API_URL = "https://newsapi.org/v2/top-headlines?country=ro&category=health&apiKey=dce8fc72c8414c4ba66d793eb4fee8fe";
fetch(API_URL)
    .then(res => res.json())
    .then((data) => {
        for(let i = 0; i < data.totalResults; i++) {
            let title = data.articles[i].title;
            let url = data.articles[i].url;
            let author = data.articles[i].author;

            let date = new Date(data.articles[i].publishedAt);
            console.log(typeof(date));
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, "0");
            const hour = String(date.getHours()).padStart(2, "0");
            const minutes = String(date.getMinutes()).padStart(2, "0");
            const sec = String(date.getSeconds()).padStart(2, "0");

            const dateFormat = `${day}/${month}/${year}`;
            const hourFormat = `${hour}:${minutes}:${sec}`;

            let newGridItem = `
                <a href="${url}" class="grid-item" target="_blank" title="${title}">
                    <img class="grid-item-image">
                    <div class="grid-item-infos">
                        <h3>${title}</h3>
                        <h4>${author}</h4>
                        <div>
                            <span>${hourFormat}</span>
                            <span>${dateFormat}</span>
                        </div>
                    </div>
                </a>
                `;
            newsContainer.innerHTML += newGridItem;
        }
        addImage();
    });
