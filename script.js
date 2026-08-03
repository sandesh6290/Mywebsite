// 1. Anime Data List (Aap yahan naye animes add kar sakte hain)
const animeList = [
    {
        title: "Naruto Shippuden",
        image: "https://via.placeholder.com/200x280",
        badge: "SUB / DUB",
        link: "#"
    },
    {
        title: "Attack on Titan",
        image: "https://via.placeholder.com/200x280",
        badge: "SUB / DUB",
        link: "#"
    },
    {
        title: "Demon Slayer: Kimetsu no Yaiba",
        image: "https://via.placeholder.com/200x280",
        badge: "SUB",
        link: "#"
    },
    {
        title: "One Piece",
        image: "https://via.placeholder.com/200x280",
        badge: "SUB / DUB",
        link: "#"
    },
    {
        title: "Jujutsu Kaisen",
        image: "https://via.placeholder.com/200x280",
        badge: "SUB / DUB",
        link: "#"
    }
];

// DOM Elements
const animeGrid = document.getElementById('animeGrid');
const searchInput = document.getElementById('searchInput');

// 2. Function: Cards Render Karna
function displayAnimes(animes) {
    animeGrid.innerHTML = ""; // Pehle ka content clear karein

    if(animes.length === 0) {
        animeGrid.innerHTML = "<p>Koi Anime Nahi Mila!</p>";
        return;
    }

    animes.forEach(anime => {
        const cardHTML = `
            <div class="card" onclick="window.location.href='${anime.link}'">
                <img src="${anime.image}" alt="${anime.title}">
                <h3>${anime.title}</h3>
                <span class="sub-dub">${anime.badge}</span>
            </div>
        `;
        animeGrid.innerHTML += cardHTML;
        });
}

// 3. Search Functionality (Live Filtering)
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredAnime = animeList.filter(anime => 
        anime.title.toLowerCase().includes(searchTerm)
    );
    
    displayAnimes(filteredAnime);
});

// Initial Load par saare animes dikhana
displayAnimes(animeList);