// --- VIDEO LOADER INITIALIZATION LOGIC ---
window.addEventListener('DOMContentLoaded', () => {
    const loaderScreen = document.getElementById('loadingScreen');
    const loaderText = document.getElementById('loaderPercent');
    let progress = 0;

    // Increments percentage value sequentially to emulate data loading
    const progressInterval = setInterval(() => {
        progress += Math.floor(Math.random() * 4) + 1; // Randomized steady progress jumps
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            
            // Allow user to view full 100% for a split second, then dismiss loader screen smoothly
            setTimeout(() => {
                loaderScreen.classList.add('fade-out');
            }, 500);
        }
        
        loaderText.textContent = `${progress}%`;
    }, 40); // Ticker speed config
});


// --- REST OF ORIGINAL FLOWER DICTIONARY & EXTRACTION ENGINE ---
const flowerDictionary = {
    'A': { name: 'Aster', meaning: 'Symbol of Love & Daintiness', image: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&w=150&q=80' },
    'B': { name: 'Begonia', meaning: 'Deep Thoughts & Gratitude', image: 'https://images.unsplash.com/photo-1622484211148-7170984cfb03?auto=format&fit=crop&w=150&q=80' },
    'C': { name: 'Carnation', meaning: 'Fascination & Pure Love', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=150&q=80' },
    'D': { name: 'Dahlia', meaning: 'Dignity, Elegance & Inner Strength', image: 'https://images.unsplash.com/photo-1544860707-c352cc5a92e3?auto=format&fit=crop&w=150&q=80' },
    'E': { name: 'Echinacea', meaning: 'Strength, Health & Healing', image: 'https://images.unsplash.com/photo-1599598282361-b75fefbb515d?auto=format&fit=crop&w=150&q=80' },
    'F': { name: 'Freesia', meaning: 'Innocence, Trust & Thoughtfulness', image: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=150&q=80' },
    'G': { name: 'Gardenia', meaning: 'Secret Love, Purity & Joy', image: 'https://images.unsplash.com/photo-1614713570650-0196236b2255?auto=format&fit=crop&w=150&q=80' },
    'H': { name: 'Hyacinth', meaning: 'Playfulness & Constancy', image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=150&q=80' },
    'I': { name: 'Iris', meaning: 'Faith, Hope, Courage & Wisdom', image: 'https://images.unsplash.com/photo-15607177871-3375b49704da?auto=format&fit=crop&w=150&q=80' },
    'J': { name: 'Jasmine', meaning: 'Unconditional Love & Good Luck', image: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&w=150&q=80' },
    'K': { name: 'Kalmia', meaning: 'Ambition & Perseverance', image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=150&q=80' },
    'L': { name: 'Lily', meaning: 'Purity, Passion & Rebirth', image: 'https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?auto=format&fit=crop&w=150&q=80' },
    'M': { name: 'Marigold', meaning: 'Wealth & Radiant Creativity', image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=150&q=80' },
    'N': { name: 'Narcissus', meaning: 'Renewal, Rebirth & Self-Love', image: 'https://images.unsplash.com/photo-1572454591674-2739f30d8c40?auto=format&fit=crop&w=150&q=80' },
    'O': { name: 'Orchid', meaning: 'Exotic Beauty & Refinement', image: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=150&q=80' },
    'P': { name: 'Peony', meaning: 'Romance, Prosperity & Good Fortune', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=150&q=80' },
    'Q': { name: "Queen Anne's Lace", meaning: 'Sanctuary, Peace & Haven', image: 'https://images.unsplash.com/photo-1501472312651-726afe119ff1?auto=format&fit=crop&w=150&q=80' },
    'R': { name: 'Rose', meaning: 'Love, Romance & Infinite Beauty', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=150&q=80' },
    'S': { name: 'Sunflower', meaning: 'Adoration, Loyalty & Longevity', image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=150&q=80' },
    'T': { name: 'Tulip', meaning: 'Deep, Perfect Love Declaration', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=150&q=80' },
    'U': { name: 'Ursinia', meaning: 'Innocence & Spontaneous Joy', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=150&q=80' },
    'V': { name: 'Violet', meaning: 'Modesty, Faithfulness & Virtue', image: 'https://images.unsplash.com/photo-1618213845607-e54db90efebc?auto=format&fit=crop&w=150&q=80' },
    'W': { name: 'Water Lily', meaning: 'Purity of Heart & Enlightenment', image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=150&q=80' },
    'X': { name: 'Xeranthemum', meaning: 'Cheerfulness Under Adversity', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=150&q=80' },
    'Y': { name: 'Yarrow', meaning: 'Healing, Protection & Health', image: 'https://images.unsplash.com/photo-1477511801984-4ad318ed9846?auto=format&fit=crop&w=150&q=80' },
    'Z': { name: 'Zinnia', meaning: 'Thoughts of Affection', image: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=150&q=80' }
};

document.getElementById('generateBtn').addEventListener('click', generateBouquet);
document.getElementById('nameInput').addEventListener('keypress', (e) => { if (e.key === 'Enter') generateBouquet(); });

function generateBouquet() {
    const inputName = document.getElementById('nameInput').value.trim().toUpperCase();
    const flowerCanvas = document.getElementById('flowerCanvas');
    const meaningsList = document.getElementById('meaningsList');
    
    const bouquetContainer = document.getElementById('bouquetContainer');
    const meaningsContainer = document.getElementById('meaningsContainer');

    flowerCanvas.innerHTML = '';
    meaningsList.innerHTML = '';

    if (!inputName) return;

    const cleanLetters = inputName.replace(/[^A-Z]/g, '').split('');
    const uniqueLetters = [...new Set(cleanLetters)];

    if (uniqueLetters.length === 0) return;

    bouquetContainer.classList.remove('hidden');
    meaningsContainer.classList.remove('hidden');

    uniqueLetters.forEach((letter, index) => {
        const flower = flowerDictionary[letter];
        if (flower) {
            const flowerItem = document.createElement('div');
            flowerItem.classList.add('flower-item');
            flowerItem.style.animationDelay = `${index * 0.08}s`;
            flowerItem.innerHTML = `
                <img src="${flower.image}" alt="${flower.name}" class="flower-img">
                <span class="flower-letter">${letter}</span>
            `;
            flowerCanvas.appendChild(flowerItem);

            const listItem = document.createElement('li');
            listItem.style.animation = `fadeInUp 0.4s ease-out forwards`;
            listItem.style.animationDelay = `${index * 0.05}s`;
            listItem.innerHTML = `
                <div class="list-left">
                    <img src="${flower.image}" alt="" class="list-thumb">
                    <span><strong>${letter}</strong> — ${flower.name}</span>
                </div>
                <span class="meaning-text">${flower.meaning}</span>
            `;
            meaningsList.appendChild(listItem);
        }
    });
}