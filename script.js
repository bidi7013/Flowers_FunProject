/**
 * Bloom & Spell — Custom Floral Studio Engine
 */

// Extended Botanical Dictionary with Unsplash imagery, meanings, colors & lore
const flowerDictionary = {
    'A': { name: 'Aster', meaning: 'Symbol of Love & Daintiness', color: '#a855f7', season: 'Autumn', image: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&w=400&q=80', lore: 'Named after the Greek word for star, asters were considered sacred to the gods and placed on altars for blessing.' },
    'B': { name: 'Begonia', meaning: 'Deep Thoughts & Gratitude', color: '#f43f5e', season: 'Summer', image: 'https://images.unsplash.com/photo-1622484211148-7170984cfb03?auto=format&fit=crop&w=400&q=80', lore: 'Begonias symbolize harmonious connections and thoughtful gestures given from the heart.' },
    'C': { name: 'Carnation', meaning: 'Fascination & Pure Love', color: '#fb7185', season: 'Spring', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80', lore: 'In Victorian floriography, pink carnations represent an unforgettable affection that grows stronger with time.' },
    'D': { name: 'Dahlia', meaning: 'Dignity, Elegance & Inner Strength', color: '#e11d48', season: 'Late Summer', image: 'https://images.unsplash.com/photo-1544860707-c352cc5a92e3?auto=format&fit=crop&w=400&q=80', lore: 'Dahlias stand for steadfast commitment and remaining true to one’s inner nobility.' },
    'E': { name: 'Echinacea', meaning: 'Strength, Health & Healing', color: '#ec4899', season: 'Summer', image: 'https://images.unsplash.com/photo-1599598282361-b75fefbb515d?auto=format&fit=crop&w=400&q=80', lore: 'Revered as a restorative bloom, Echinacea brings energy and protection to those who behold it.' },
    'F': { name: 'Freesia', meaning: 'Innocence, Trust & Thoughtfulness', color: '#facc15', season: 'Spring', image: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=400&q=80', lore: 'Freesia’s sweet citrus fragrance signifies lasting friendship and trusting bonds.' },
    'G': { name: 'Gardenia', meaning: 'Secret Love, Purity & Joy', color: '#f8fafc', season: 'Summer', image: 'https://images.unsplash.com/photo-1614713570650-0196236b2255?auto=format&fit=crop&w=400&q=80', lore: 'Gardenias whisper of unspoken admiration and graceful enchantment.' },
    'H': { name: 'Hyacinth', meaning: 'Playfulness & Constancy', color: '#818cf8', season: 'Spring', image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=400&q=80', lore: 'Hyacinths bring vibrant joy, symbolizing sincerity and constant devotion.' },
    'I': { name: 'Iris', meaning: 'Faith, Hope, Courage & Wisdom', color: '#6366f1', season: 'Spring', image: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&w=400&q=80', lore: 'Named after Iris, the Greek goddess of rainbow messages connecting Earth and Sky.' },
    'J': { name: 'Jasmine', meaning: 'Unconditional Love & Good Fortune', color: '#f1f5f9', season: 'Summer', image: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&w=400&q=80', lore: 'Known as the Queen of the Night, Jasmine radiates grace and spiritual warmth.' },
    'K': { name: 'Kalmia', meaning: 'Ambition & Perseverance', color: '#fda4af', season: 'Late Spring', image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=400&q=80', lore: 'Mountain Laurel (Kalmia) blooms amidst rocky trails, symbolizing victory over hardship.' },
    'L': { name: 'Lily', meaning: 'Purity, Passion & Rebirth', color: '#ffffff', season: 'Summer', image: 'https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?auto=format&fit=crop&w=400&q=80', lore: 'Majestic and serene, lilies represent nobility of spirit and renewal.' },
    'M': { name: 'Marigold', meaning: 'Wealth & Radiant Creativity', color: '#f97316', season: 'Summer', image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=400&q=80', lore: 'Sun-drenched marigolds embody warmth, cheerfulness, and bright creative energy.' },
    'N': { name: 'Narcissus', meaning: 'Renewal, Rebirth & Self-Love', color: '#fde047', season: 'Early Spring', image: 'https://images.unsplash.com/photo-1572454591674-2739f30d8c40?auto=format&fit=crop&w=400&q=80', lore: 'The herald of spring, encouraging fresh starts and celebrating individual beauty.' },
    'O': { name: 'Orchid', meaning: 'Exotic Beauty & Refinement', color: '#d946ef', season: 'All Year', image: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=400&q=80', lore: 'Rare and delicate, orchids signify thoughtful elegance and rare friendship.' },
    'P': { name: 'Peony', meaning: 'Romance, Prosperity & Good Fortune', color: '#f472b6', season: 'Late Spring', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=400&q=80', lore: 'Peony blooms embody lush abundance, bashful romance, and joyful luck.' },
    'Q': { name: "Queen Anne's Lace", meaning: 'Sanctuary, Peace & Haven', color: '#f8fafc', season: 'Summer', image: 'https://images.unsplash.com/photo-1501472312651-726afe119ff1?auto=format&fit=crop&w=400&q=80', lore: 'Intricate lace-like umbrellas offering comfort, safety, and tranquil thoughts.' },
    'R': { name: 'Rose', meaning: 'Love, Romance & Infinite Beauty', color: '#f43f5e', season: 'Summer', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80', lore: 'The timeless symbol of affection, romance, and deep soul connections.' },
    'S': { name: 'Sunflower', meaning: 'Adoration, Loyalty & Longevity', color: '#eab308', season: 'Summer', image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=400&q=80', lore: 'Always turning toward light, sunflowers inspire optimism and unwavering loyalty.' },
    'T': { name: 'Tulip', meaning: 'Deep, Perfect Love Declaration', color: '#fb7185', season: 'Spring', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=400&q=80', lore: 'Emblematic of spring, declaring genuine devotion and vibrant happiness.' },
    'U': { name: 'Ursinia', meaning: 'Innocence & Spontaneous Joy', color: '#fb923c', season: 'Spring', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80', lore: 'Golden daisy-like petals celebrating life’s simple, unexpected wonders.' },
    'V': { name: 'Violet', meaning: 'Modesty, Faithfulness & Virtue', color: '#8b5cf6', season: 'Spring', image: 'https://images.unsplash.com/photo-1618213845607-e54db90efebc?auto=format&fit=crop&w=400&q=80', lore: 'Delicate violets speak of quiet loyalty, wisdom, and gentle affection.' },
    'W': { name: 'Water Lily', meaning: 'Purity of Heart & Enlightenment', color: '#38bdf8', season: 'Summer', image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=400&q=80', lore: 'Floating serenely on calm waters, representing peace and spiritual awakening.' },
    'X': { name: 'Xeranthemum', meaning: 'Cheerfulness Under Adversity', color: '#c084fc', season: 'Autumn', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80', lore: 'An everlasting blossom that retains color when dried, symbolizing resilience.' },
    'Y': { name: 'Yarrow', meaning: 'Healing, Protection & Health', color: '#a3e635', season: 'Summer', image: 'https://images.unsplash.com/photo-1477511801984-4ad318ed9846?auto=format&fit=crop&w=400&q=80', lore: 'Associated with Achilles in myth, bringing courage and emotional healing.' },
    'Z': { name: 'Zinnia', meaning: 'Thoughts of Absent Friends', color: '#f43f5e', season: 'Summer', image: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=400&q=80', lore: 'Bright and enduring blooms honoring cherished memories and lasting bonds.' }
};

// Global App State
let soundEnabled = true;
let currentFlowersList = [];
let audioCtx = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initAmbientPetals();
    setupEventListeners();
    generateBouquet(); // Initial render for default name "AMANDA"
});

// Setup Control Listeners
function setupEventListeners() {
    const nameInput = document.getElementById('nameInput');
    const generateBtn = document.getElementById('generateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const exportBtn = document.getElementById('exportBtn');
    const cardBtn = document.getElementById('cardBtn');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const soundToggleBtn = document.getElementById('soundToggleBtn');

    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') generateBouquet();
    });

    generateBtn.addEventListener('click', generateBouquet);

    clearBtn.addEventListener('click', () => {
        nameInput.value = '';
        nameInput.focus();
    });

    shuffleBtn.addEventListener('click', () => {
        if (currentFlowersList.length > 0) {
            renderBouquet(currentFlowersList, true);
            playChime(660);
        }
    });

    exportBtn.addEventListener('click', exportBouquetPNG);
    cardBtn.addEventListener('click', openCardModal);

    // Theme Toggle
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('theme-midnight');
        const isMidnight = document.body.classList.contains('theme-midnight');
        document.getElementById('themeIcon').textContent = isMidnight ? '☀️' : '🌙';
    });

    // Sound Toggle
    soundToggleBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        document.getElementById('soundIcon').textContent = soundEnabled ? '🔔' : '🔕';
    });

    // Paper Option Chips
    document.querySelectorAll('#paperOptions .chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            document.querySelectorAll('#paperOptions .chip').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            updatePaperStyle(e.target.dataset.paper);
        });
    });

    // Ribbon Option Chips
    document.querySelectorAll('#ribbonOptions .chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            document.querySelectorAll('#ribbonOptions .chip').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            updateRibbonStyle(e.target.dataset.ribbon);
        });
    });

    // Greenery Toggles
    ['accentEucalyptus', 'accentBabysBreath', 'accentFern'].forEach(id => {
        document.getElementById(id).addEventListener('change', () => {
            if (currentFlowersList.length > 0) {
                renderBouquet(currentFlowersList);
            }
        });
    });

    // Modal Close buttons
    document.getElementById('closeModalBtn').addEventListener('click', () => {
        document.getElementById('cardModal').classList.add('hidden');
    });

    document.getElementById('closeDetailBtn').addEventListener('click', () => {
        document.getElementById('flowerDetailModal').classList.add('hidden');
    });

    document.getElementById('copyPoemBtn').addEventListener('click', copyPoemText);
    document.getElementById('printCardBtn').addEventListener('click', () => window.print());
}

// Generate Bouquet Logic
function generateBouquet() {
    const rawName = document.getElementById('nameInput').value.trim();
    if (!rawName) return;

    const formattedName = rawName.toUpperCase();
    const cleanLetters = formattedName.replace(/[^A-Z]/g, '').split('');
    const uniqueLetters = [...new Set(cleanLetters)];

    if (uniqueLetters.length === 0) return;

    // Build flower list
    currentFlowersList = uniqueLetters
        .map(letter => ({ letter, ...flowerDictionary[letter] }))
        .filter(f => f.name !== undefined);

    // Update Titles
    document.getElementById('bouquetTitle').textContent = `${capitalizeFirst(rawName)}'s Handcrafted Bouquet`;
    document.getElementById('bouquetSubtitle').textContent = `Woven from ${currentFlowersList.length} unique botanical blooms`;

    // Render Bouquet Stage
    renderBouquet(currentFlowersList);

    // Render Meanings Breakdown Cards
    renderMeaningsGrid(currentFlowersList);

    // Sound chime
    playHarvestChime();
}

// Render Bouquet Layout on Stage
function renderBouquet(flowers, isShuffle = false) {
    const stage = document.getElementById('bouquetStage');
    const flowersLayer = document.getElementById('flowersLayer');
    const greeneryLayer = document.getElementById('greeneryLayer');
    const stemsSvg = document.getElementById('stemsSvg');

    flowersLayer.innerHTML = '';
    greeneryLayer.innerHTML = '';
    stemsSvg.innerHTML = '';

    const count = flowers.length;
    const stageWidth = stage.clientWidth || 500;
    const stageHeight = stage.clientHeight || 500;
    const centerX = stageWidth / 2;
    const centerY = stageHeight / 2 - 40; // Cluster slightly higher than wrapper tie
    const tiePointX = 250; // SVG viewBox 500x600 coordinates
    const tiePointY = 460;

    // Greenery accents toggles
    const showEuca = document.getElementById('accentEucalyptus').checked;
    const showBaby = document.getElementById('accentBabysBreath').checked;
    const showFern = document.getElementById('accentFern').checked;

    // Render background greenery accents
    if (showFern || showEuca || showBaby) {
        for (let i = 0; i < Math.max(6, count * 2); i++) {
            const angle = (i / (count * 2)) * Math.PI * 2 + (isShuffle ? Math.random() : 0);
            const radius = 140 + Math.random() * 60;
            const gx = centerX + Math.cos(angle) * radius - 30;
            const gy = centerY + Math.sin(angle) * (radius * 0.7) - 30;

            const leaf = document.createElement('div');
            leaf.className = 'greenery-leaf';
            leaf.style.left = `${gx}px`;
            leaf.style.top = `${gy}px`;
            leaf.style.transform = `rotate(${angle * 57.29}deg)`;

            if (showEuca && i % 3 === 0) {
                leaf.style.backgroundImage = 'radial-gradient(circle, #94a3b8 20%, transparent 70%)';
            } else if (showBaby && i % 3 === 1) {
                leaf.style.backgroundImage = 'radial-gradient(circle, #ffffff 40%, transparent 60%)';
            } else if (showFern) {
                leaf.style.backgroundImage = 'radial-gradient(circle, #22c55e 30%, transparent 70%)';
            }
            greeneryLayer.appendChild(leaf);
        }
    }

    // Render SVG Stems & Flower Nodes
    flowers.forEach((flower, index) => {
        // Calculate flower position in organic bouquet cluster
        const angleStep = (Math.PI * 2) / count;
        const angle = index * angleStep - Math.PI / 2 + (isShuffle ? (Math.random() - 0.5) * 0.4 : 0);
        const radius = count === 1 ? 0 : 90 + (index % 2 === 0 ? 30 : -20);
        
        const fx = centerX + Math.cos(angle) * radius;
        const fy = centerY + Math.sin(angle) * (radius * 0.7);

        // Convert DOM coordinates to SVG coordinates (500x600 viewbox)
        const svgFx = (fx / stageWidth) * 500;
        const svgFy = (fy / stageHeight) * 600;

        // Draw Curved Bezier Stem SVG
        const stemPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const cp1x = svgFx + (tiePointX - svgFx) * 0.3 + (index % 2 === 0 ? 20 : -20);
        const cp1y = svgFy + (tiePointY - svgFy) * 0.5;
        
        const pathData = `M ${svgFx} ${svgFy} Q ${cp1x} ${cp1y} ${tiePointX} ${tiePointY}`;
        stemPath.setAttribute('d', pathData);
        stemPath.setAttribute('stroke', '#15803d');
        stemPath.setAttribute('stroke-width', '4');
        stemPath.setAttribute('fill', 'none');
        stemPath.setAttribute('stroke-linecap', 'round');
        stemsSvg.appendChild(stemPath);

        // Create Flower Node Element
        const node = document.createElement('div');
        node.className = 'flower-node';
        node.style.left = `${fx}px`;
        node.style.top = `${fy}px`;
        node.style.animationDelay = `${index * 0.08}s`;
        node.style.zIndex = Math.floor(fy); // Layers lower flowers behind upper ones

        node.innerHTML = `
            <div class="flower-img-wrap">
                <img src="${flower.image}" alt="${flower.name}">
            </div>
            <div class="flower-letter-badge">${flower.letter}</div>
        `;

        // Click to view lore
        node.addEventListener('click', () => {
            openFlowerDetail(flower);
            playChime(440 + index * 50);
        });

        flowersLayer.appendChild(node);
    });
}

// Render Meanings Breakdown Grid
function renderMeaningsGrid(flowers) {
    const grid = document.getElementById('meaningsGrid');
    grid.innerHTML = '';

    flowers.forEach(flower => {
        const item = document.createElement('div');
        item.className = 'meaning-card-item';
        item.innerHTML = `
            <img src="${flower.image}" alt="${flower.name}" class="card-item-thumb">
            <div class="card-item-info">
                <span class="card-item-letter">Letter ${flower.letter}</span>
                <h4 class="card-item-title">${flower.name}</h4>
                <p class="card-item-desc">${flower.meaning}</p>
            </div>
        `;
        item.addEventListener('click', () => {
            openFlowerDetail(flower);
            playChime(520);
        });
        grid.appendChild(item);
    });
}

// Paper & Ribbon Styling Updates
function updatePaperStyle(styleName) {
    const paperMap = {
        blush: { color: '#fecdd3', border: '#fda4af' },
        kraft: { color: '#d7ccc8', border: '#b0bec5' },
        midnight: { color: '#1e293b', border: '#334155' },
        sage: { color: '#dcfce7', border: '#86efac' },
        gold: { color: '#fef08a', border: '#fde047' }
    };
    const style = paperMap[styleName] || paperMap.blush;
    document.documentElement.style.setProperty('--paper-color', style.color);
    document.documentElement.style.setProperty('--paper-border', style.border);
}

function updateRibbonStyle(ribbonName) {
    const ribbonMap = {
        crimson: '#e11d48',
        gold: '#eab308',
        emerald: '#059669',
        lavender: '#c084fc',
        pearl: '#f8fafc'
    };
    document.documentElement.style.setProperty('--ribbon-color', ribbonMap[ribbonName] || '#e11d48');
}

// Modal: Open Flower Detail
function openFlowerDetail(flower) {
    const modal = document.getElementById('flowerDetailModal');
    const body = document.getElementById('detailBody');

    body.innerHTML = `
        <div class="detail-content">
            <img src="${flower.image}" alt="${flower.name}" class="detail-img">
            <div class="tag">Letter ${flower.letter}</div>
            <h2 class="detail-title">${flower.name}</h2>
            <div class="detail-meaning">"${flower.meaning}"</div>
            <p class="detail-desc">${flower.lore}</p>
            <div class="detail-tags">
                <span class="tag">Season: ${flower.season}</span>
                <span class="tag" style="background:${flower.color}; color:white;">Theme Color</span>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
}

// Modal: Card & Poem Generator
function openCardModal() {
    const rawName = document.getElementById('nameInput').value.trim() || 'Friend';
    const modal = document.getElementById('cardModal');
    
    document.getElementById('cardRecipientName').textContent = `For ${capitalizeFirst(rawName)}`;

    // Generate rhyming poem lines dynamically
    const f1 = currentFlowersList[0] ? currentFlowersList[0].name : 'Roses';
    const f2 = currentFlowersList[1] ? currentFlowersList[1].name : 'Lilies';
    
    document.getElementById('cardPoem').innerHTML = `
        In petals soft and blossoms bright,<br>
        Your name weaves magic in the light.<br>
        With ${f1}'s grace and ${f2}'s art,<br>
        A floral bloom to warm your heart.
    `;

    const summaryText = currentFlowersList
        .map(f => `<strong>${f.name}</strong> (${f.meaning})`)
        .join(' • ');
    document.getElementById('cardFlowerSummary').innerHTML = summaryText;

    modal.classList.remove('hidden');
}

function copyPoemText() {
    const recipient = document.getElementById('cardRecipientName').textContent;
    const poem = document.getElementById('cardPoem').innerText;
    const fullText = `${recipient}\n\n${poem}\n\nWoven with love via Bloom & Spell Studio.`;

    navigator.clipboard.writeText(fullText).then(() => {
        alert('Poem copied to clipboard! 📜');
    });
}

// PNG Image Export
function exportBouquetPNG() {
    // Create offscreen canvas snapshot
    const stage = document.getElementById('bouquetStage');
    alert('📸 Generating snapshot! Downloading your bouquet PNG...');

    // Simple canvas snapshot simulation / SVG export anchor
    const link = document.createElement('a');
    link.download = `${document.getElementById('nameInput').value || 'Bouquet'}-Flower-Studio.png`;
    
    // Create temporary SVG data URL
    const svgData = new XMLSerializer().serializeToString(document.getElementById('stemsSvg'));
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    
    link.href = url;
    link.click();
}

// Web Audio Pentatonic Chime Engine
function playChime(freq = 523.25) {
    if (!soundEnabled) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 1.2);
    } catch (e) {
        console.warn('Audio not initialized', e);
    }
}

function playHarvestChime() {
    if (!soundEnabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
        setTimeout(() => playChime(freq), i * 120);
    });
}

// Ambient Floating Petals Background Engine
function initAmbientPetals() {
    const canvas = document.getElementById('ambientCanvas');
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const petals = Array.from({ length: 30 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 6 + Math.random() * 8,
        speedY: 0.5 + Math.random() * 1,
        speedX: Math.sin(Math.random() * Math.PI) * 0.5,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 1.5,
        opacity: 0.3 + Math.random() * 0.4
    }));

    function animate() {
        ctx.clearRect(0, 0, width, height);

        petals.forEach(p => {
            p.y += p.speedY;
            p.x += Math.sin(p.y * 0.01) * 0.5;
            p.rotation += p.rotSpeed;

            if (p.y > height + 20) {
                p.y = -20;
                p.x = Math.random() * width;
            }

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = `rgba(255, 182, 193, ${p.opacity})`;
            ctx.beginPath();
            ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}