/* ===================================================================
   WANDERWAY - LIGHTWEIGHT MODERN JAVASCRIPT ENGINE
   Zero Dependencies, Ultra Fast, Modular, LocalStorage Powered
   =================================================================== */

// Global State
const state = {
  theme: localStorage.getItem('tb_theme') || 'light',
  lang: localStorage.getItem('tb_lang') || 'en',
  user: JSON.parse(localStorage.getItem('wanderway_user')) || null,
  activeTab: 'trips',
  trips: [],
  buddies: [],
  expenses: [],
  photos: [],
  bookings: [],
  isListening: false
};

// ===================================================================
// MULTILINGUAL DICTIONARY
// ===================================================================
const i18n = {
  en: {
    heroTag: '✈️ The #1 Solo Travel Companion Platform',
    heroTitle: 'Find Your Next Travel Partner & Explore Together',
    heroDesc: 'Connect with verified solo adventurers, share itineraries, split trip expenses, and travel the globe safely without going solo.',
    joinBtn: 'Explore Trips',
    hostBtn: 'Lead a Trip',
    statTravelers: 'Solo Adventurers',
    statTrips: 'Trips Organized',
    statSafety: 'Safety Score',
    searchDestLabel: 'Destination',
    searchStyleLabel: 'Trip Style',
    searchDatesLabel: 'Departure Month',
    searchBudgetLabel: 'Max Budget',
    navTrips: 'Explore Trips',
    navMeetup: 'Find Buddies',
    navExpenses: 'Expense Tracker',
    navSafety: 'Safety & SOS',
    navContest: 'Photo Contest',
    navMap: 'Destinations',
    navBookings: 'My Bookings',
    tripsHeading: 'Featured Group Itineraries',
    tripsSub: 'Join planned adventures led by enthusiastic travelers from around the world',
    buddiesHeading: 'Meet Verified Solo Travelers',
    buddiesSub: 'Discover like-minded adventurers with similar hobbies, interests, and bucket lists',
    expenseHeading: 'Trip Expense Tracker & Splitter',
    expenseSub: 'Manage your travel budget in real-time, log expenses, and split bills effortlessly',
    safetyHeading: 'Traveler Safety & Emergency Hub',
    safetySub: 'Live SOS alerts, 24/7 tourist helplines, and essential solo travel protocols',
    contestHeading: 'Community Stories & Photo Contest',
    contestSub: 'Vote for weekly travel moments and showcase your stunning wanderlust captures',
    mapHeading: 'Interactive Hotspot Explorer',
    mapSub: 'Tap on global pins to view weather forecasts, buddy groups, and insider guides'
  },
  hi: {
    heroTag: '✈️ नंबर #1 सोलो ट्रैवल साथी प्लेटफॉर्म',
    heroTitle: 'अपना नया ट्रैवल पार्टनर खोजें और साथ में घूमें',
    heroDesc: 'सत्यापित सोलो यात्रियों से जुड़ें, यात्रा कार्यक्रम साझा करें, खर्च विभाजित करें और दुनिया की सुरक्षित सैर करें।',
    joinBtn: 'यात्राएं देखें',
    hostBtn: 'यात्रा का नेतृत्व करें',
    statTravelers: 'सत्यापित यात्री',
    statTrips: 'आयोजित यात्राएं',
    statSafety: 'सुरक्षा रेटिंग',
    searchDestLabel: 'गंतव्य',
    searchStyleLabel: 'यात्रा शैली',
    searchDatesLabel: 'महीना',
    searchBudgetLabel: 'अधिकतम बजट',
    navTrips: 'यात्राएं खोजें',
    navMeetup: 'साथी खोजें',
    navExpenses: 'खर्च ट्रैकर',
    navSafety: 'सुरक्षा और SOS',
    navContest: 'फोटो प्रतियोगिता',
    navMap: 'गंतव्य मानचित्र',
    navBookings: 'मेरी बुकिंग्स',
    tripsHeading: 'लोकप्रिय समूह यात्राएं',
    tripsSub: 'दुनिया भर के उत्साही यात्रियों द्वारा आयोजित रोमांचक यात्राओं में शामिल हों',
    buddiesHeading: 'सोलो यात्रियों से मिलें',
    buddiesSub: 'समान रुचियों और शौक वाले यात्रियों से जुड़ें',
    expenseHeading: 'यात्रा खर्च ट्रैकर और स्प्लिटर',
    expenseSub: 'अपने यात्रा बजट को वास्तविक समय में ट्रैक और विभाजित करें',
    safetyHeading: 'यात्री सुरक्षा और आपातकालीन हब',
    safetySub: 'लाइव SOS अलर्ट और 24/7 आपातकालीन हेल्पलाइन',
    contestHeading: 'सामुदायिक कहानियां और फोटो प्रतियोगिता',
    contestSub: 'साप्ताहिक यात्रा फ़ोटो के लिए वोट करें',
    mapHeading: 'इंटरएक्टिव गंतव्य एक्सप्लोरर',
    mapSub: 'मौसम पूर्वानुमान और बजट देखने के लिए पिन पर टैप करें'
  },
  es: {
    heroTag: '✈️ La plataforma #1 para viajar en solitario',
    heroTitle: 'Encuentra a tu compañero de viaje y explora el mundo',
    heroDesc: 'Conecta con aventureros solitarios verificados, comparte itinerarios, divide gastos y viaja con total seguridad.',
    joinBtn: 'Explorar Viajes',
    hostBtn: 'Liderar un Viaje',
    statTravelers: 'Aventureros',
    statTrips: 'Viajes Realizados',
    statSafety: 'Puntuación de Seguridad',
    searchDestLabel: 'Destino',
    searchStyleLabel: 'Estilo de Viaje',
    searchDatesLabel: 'Mes de Salida',
    searchBudgetLabel: 'Presupuesto Máx',
    navTrips: 'Explorar Viajes',
    navMeetup: 'Compañeros',
    navExpenses: 'Gastos',
    navSafety: 'Seguridad y SOS',
    navContest: 'Concurso de Fotos',
    navMap: 'Destinos',
    navBookings: 'Mis Reservas',
    tripsHeading: 'Itinerarios Destacados',
    tripsSub: 'Únete a aventuras grupales lideradas por viajeros apasionados',
    buddiesHeading: 'Conoce a Viajeros Verificados',
    buddiesSub: 'Descubre aventureros con intereses y pasiones similares',
    expenseHeading: 'Gestor y División de Gastos',
    expenseSub: 'Administra tu presupuesto de viaje en tiempo real y divide facturas',
    safetyHeading: 'Centro de Seguridad y Emergencia',
    safetySub: 'Alertas SOS en vivo y líneas de ayuda disponibles 24/7',
    contestHeading: 'Historias y Concurso Fotográfico',
    contestSub: 'Vota por las mejores fotos de viajes de la semana',
    mapHeading: 'Explorador Interactivo',
    mapSub: 'Toca los puntos en el mapa para ver clima y guías locales'
  },
  fr: {
    heroTag: '✈️ La plateforme n°1 pour voyager ensemble',
    heroTitle: 'Trouvez votre compagnon de route & explorez le monde',
    heroDesc: 'Connectez-vous avec des voyageurs solo vérifiés, partagez vos itinéraires, partagez vos frais et voyagez sereinement.',
    joinBtn: 'Explorer les voyages',
    hostBtn: 'Créer un voyage',
    statTravelers: 'Voyageurs Solos',
    statTrips: 'Voyages Organisés',
    statSafety: 'Score de Sécurité',
    searchDestLabel: 'Destination',
    searchStyleLabel: 'Style de voyage',
    searchDatesLabel: 'Mois de départ',
    searchBudgetLabel: 'Budget max',
    navTrips: 'Voyages',
    navMeetup: 'Compagnons',
    navExpenses: 'Budget & Dépenses',
    navSafety: 'Sécurité & SOS',
    navContest: 'Concours Photo',
    navMap: 'Carte',
    navBookings: 'Mes Réservations',
    tripsHeading: 'Itinéraires de Groupe à la Une',
    tripsSub: 'Rejoignez des aventures guidées par des voyageurs passionnés',
    buddiesHeading: 'Rencontrez des Voyageurs Solos',
    buddiesSub: 'Trouvez des partenaires de voyage avec les mêmes passions',
    expenseHeading: 'Suivi des Dépenses & Partage',
    expenseSub: 'Gérez votre budget de voyage et partagez les frais instantanément',
    safetyHeading: 'Centre de Sécurité & Urgences',
    safetySub: 'Bouton SOS d’urgence et numéros d’assistance 24h/24',
    contestHeading: 'Concours Photo de la Communauté',
    contestSub: 'Votez pour les plus beaux clichés de la semaine',
    mapHeading: 'Carte Interactive des Destinations',
    mapSub: 'Cliquez sur les points pour découvrir la météo et les groupes'
  }
};

// ===================================================================
// INITIAL MOCK DATA (PERSISTED IN LOCALSTORAGE)
// ===================================================================
const defaultTrips = [
  {
    id: 'tr-1',
    title: 'Manali & Spiti Valley Expedition',
    destination: 'Himachal Pradesh, India',
    type: 'Mountains',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    host: {
      name: 'Rohan Sharma',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      rating: '4.9 ★'
    },
    dates: 'Oct 15 - Oct 22, 2026',
    month: 'oct',
    price: 18500,
    slotsLeft: 3,
    totalSlots: 6,
    desc: 'High mountain passes, stargazing in Kaza, ancient monasteries, and pure Himalayan bliss. Looking for 3 cool companions!',
    tags: ['Trekking', 'Campfire', 'Photography']
  },
  {
    id: 'tr-2',
    title: 'Bali Coastal Hop & Surf Retreat',
    destination: 'Canggu & Uluwatu, Bali',
    type: 'Beaches',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    host: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      rating: '5.0 ★'
    },
    dates: 'Nov 04 - Nov 12, 2026',
    month: 'nov',
    price: 34000,
    slotsLeft: 2,
    totalSlots: 5,
    desc: 'Sunrise volcano hike at Mt. Batur, beach club sunsets, cafe hopping, and learning to surf together in Bali.',
    tags: ['Surfing', 'Yoga', 'Cafes']
  },
  {
    id: 'tr-3',
    title: 'Kyoto Autumn Leaves & Street Food Tour',
    destination: 'Kyoto, Japan',
    type: 'Heritage',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    host: {
      name: 'Kenji Takahashi',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
      rating: '4.8 ★'
    },
    dates: 'Nov 18 - Nov 26, 2026',
    month: 'nov',
    price: 65000,
    slotsLeft: 4,
    totalSlots: 8,
    desc: 'Wander through golden momiji foliage, taste authentic ramen, explore traditional tea ceremonies and temple gardens.',
    tags: ['Culture', 'Foodie', 'Temples']
  },
  {
    id: 'tr-4',
    title: 'Goa Coastal Backpacking & Sunset Cruise',
    destination: 'North & South Goa, India',
    type: 'Beaches',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    host: {
      name: 'Aarav Patel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: '4.9 ★'
    },
    dates: 'Dec 05 - Dec 11, 2026',
    month: 'dec',
    price: 14500,
    slotsLeft: 4,
    totalSlots: 6,
    desc: 'Chill vibes, secret beach coves, Portuguese architecture, water sports, and beach shacks. Perfect for solo first-timers!',
    tags: ['Nightlife', 'Beaches', 'Budget']
  },
  {
    id: 'tr-5',
    title: 'Swiss Alps Hiking & Scenic Trains',
    destination: 'Interlaken & Zermatt, Switzerland',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    host: {
      name: 'Sophie Dubois',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      rating: '5.0 ★'
    },
    dates: 'Dec 15 - Dec 23, 2026',
    month: 'dec',
    price: 88000,
    slotsLeft: 2,
    totalSlots: 4,
    desc: 'Epic train rides through snowy peaks, fondue nights, and breathtaking hikes facing the Matterhorn.',
    tags: ['Snow', 'Scenic', 'Luxury']
  },
  {
    id: 'tr-6',
    title: 'Rajasthan Desert Safari & Royal Palaces',
    destination: 'Jaisalmer & Udaipur, India',
    type: 'Heritage',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    host: {
      name: 'Priya Mehra',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      rating: '4.9 ★'
    },
    dates: 'Jan 10 - Jan 17, 2027',
    month: 'jan',
    price: 19500,
    slotsLeft: 3,
    totalSlots: 6,
    desc: 'Camel safaris under starlit dunes, royal palace heritage walks, lake boat rides, and authentic Rajasthani thali feasts.',
    tags: ['Desert', 'Culture', 'Photography']
  }
];

const defaultBuddies = [
  {
    id: 'b-1',
    name: 'Hardik Sharma',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    location: 'Mumbai, India',
    destinations: 'Spiti Valley, Vietnam, Bali',
    bio: 'Software engineer by weekday, mountain trekker by weekend. Loves indie music and capturing golden hours.',
    interests: ['Hiking', 'Photography', 'Camping', 'Tech'],
    phone: '+919619247188',
    verified: true
  },
  {
    id: 'b-2',
    name: 'Ananya Verma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    location: 'Bangalore, India',
    destinations: 'Goa, Gokarna, Thailand',
    bio: 'Digital nomad & yoga enthusiast. Always looking for cozy cafes with fast Wi-Fi and beach sunsets.',
    interests: ['Yoga', 'Foodie', 'Scuba', 'Cafes'],
    phone: '+919876543210',
    verified: true
  },
  {
    id: 'b-3',
    name: 'Kartik Jolapara',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    location: 'Delhi, India',
    destinations: 'Ladakh, Georgia, Kazakhstan',
    bio: 'Passionate road tripper & history buff. Done over 15 solo trips and always eager to buddy up with new travelers.',
    interests: ['Roadtrips', 'Biking', 'History', 'Culture'],
    phone: '+918655252587',
    verified: true
  },
  {
    id: 'b-4',
    name: 'Camilla Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    location: 'Barcelona / Travelling India',
    destinations: 'Kerala, Rishikesh, Varanasi',
    bio: 'Backpacking through Asia for 6 months. Seeking companions for temple trails and Ayurvedic retreats.',
    interests: ['Backpacking', 'Spirituality', 'Art', 'Museums'],
    phone: '+34612345678',
    verified: true
  }
];

const defaultExpenses = [
  { id: 'exp-1', title: 'Mountain Homestay (4 Nights)', category: 'Stay', amount: 9600, paidBy: 'Rohan' },
  { id: 'exp-2', title: 'SUV Rental & Fuel', category: 'Travel', amount: 14500, paidBy: 'You' },
  { id: 'exp-3', title: 'Riverside Cafe Dinners', category: 'Food', amount: 4800, paidBy: 'Hardik' },
  { id: 'exp-4', title: 'River Rafting & Paragliding Passes', category: 'Activities', amount: 6200, paidBy: 'You' }
];

const defaultPhotos = [
  {
    id: 'ph-1',
    title: 'Sunset over Pangong Tso Lake',
    author: 'Jigar Shah',
    location: 'Ladakh, India',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
    likes: 142
  },
  {
    id: 'ph-2',
    title: 'Evening Lanterns of Kyoto Alley',
    author: 'Elena R.',
    location: 'Gion, Kyoto',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
    likes: 218
  },
  {
    id: 'ph-3',
    title: 'Cliffside Infinity Pool & Ocean Sunset',
    author: 'Aarav Patel',
    location: 'Uluwatu, Bali',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
    likes: 189
  },
  {
    id: 'ph-4',
    title: 'First Light at Swiss Zermatt Peak',
    author: 'Sophie Dubois',
    location: 'Matterhorn, Switzerland',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    likes: 275
  }
];

const destinationPins = [
  {
    id: 'dest-manali',
    name: 'Manali & Spiti',
    country: 'India',
    coords: { top: '35%', left: '38%' },
    weather: '14°C Sunny',
    bestTime: 'May - Oct',
    buddyGroups: '18 Active Groups',
    estBudget: '₹15,000 - ₹25,000',
    img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80',
    desc: 'Gateway to Himalayan passes, river valleys, and remote monasteries.'
  },
  {
    id: 'dest-bali',
    name: 'Bali Island',
    country: 'Indonesia',
    coords: { top: '56%', left: '62%' },
    weather: '29°C Tropical',
    bestTime: 'April - Oct',
    buddyGroups: '34 Active Groups',
    estBudget: '₹30,000 - ₹50,000',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
    desc: 'Vibrant surf beaches, lush rice terraces, waterfalls, and peaceful temples.'
  },
  {
    id: 'dest-kyoto',
    name: 'Kyoto',
    country: 'Japan',
    coords: { top: '38%', left: '76%' },
    weather: '18°C Mild',
    bestTime: 'March - May, Oct - Nov',
    buddyGroups: '12 Active Groups',
    estBudget: '₹60,000 - ₹90,000',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
    desc: 'The cultural soul of Japan with thousands of classical Buddhist temples and gardens.'
  },
  {
    id: 'dest-swiss',
    name: 'Swiss Alps',
    country: 'Switzerland',
    coords: { top: '32%', left: '26%' },
    weather: '8°C Crisp',
    bestTime: 'June - Sept, Dec - March',
    buddyGroups: '9 Active Groups',
    estBudget: '₹85,000 - ₹1,40,000',
    img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80',
    desc: 'Dramatic alpine peaks, crystalline glacier lakes, and scenic cogwheel train journeys.'
  }
];

// ===================================================================
// INIT STORAGE & DATA
// ===================================================================
function initData() {
  state.trips = JSON.parse(localStorage.getItem('tb_trips')) || defaultTrips;
  state.buddies = JSON.parse(localStorage.getItem('tb_buddies')) || defaultBuddies;
  state.expenses = JSON.parse(localStorage.getItem('tb_expenses')) || defaultExpenses;
  state.photos = JSON.parse(localStorage.getItem('tb_photos')) || defaultPhotos;
  state.bookings = JSON.parse(localStorage.getItem('tb_bookings')) || [
    {
      id: 'BK-9482',
      tripTitle: 'Manali & Spiti Valley Expedition',
      destination: 'Himachal Pradesh, India',
      amount: 18500,
      date: 'Oct 15 - Oct 22, 2026',
      status: 'confirmed',
      bookedAt: 'Today'
    }
  ];
}

function saveData(key) {
  if (key === 'trips') localStorage.setItem('tb_trips', JSON.stringify(state.trips));
  if (key === 'expenses') localStorage.setItem('tb_expenses', JSON.stringify(state.expenses));
  if (key === 'photos') localStorage.setItem('tb_photos', JSON.stringify(state.photos));
  if (key === 'bookings') localStorage.setItem('tb_bookings', JSON.stringify(state.bookings));
}

// ===================================================================
// THEME & LANGUAGE CONTROLLER
// ===================================================================
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('tb_theme', theme);
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    themeBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  }
}

function toggleTheme() {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  showVoiceToast(`Switched to ${state.theme} mode`);
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('tb_lang', lang);
  const dict = i18n[lang] || i18n.en;

  // Translate all marked elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = lang;
}

// ===================================================================
// NAVIGATION & VIEWS
// ===================================================================
function setupNavigation() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      switchTab(target);
    });
  });

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Handle hash changes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) switchTab(hash);
  });

  if (window.location.hash) {
    switchTab(window.location.hash.replace('#', ''));
  }
}

function switchTab(tabId) {
  state.activeTab = tabId;
  window.location.hash = tabId;

  // Update active links
  document.querySelectorAll('.nav-link').forEach((link) => {
    if (link.getAttribute('data-target') === tabId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Show/Hide sections
  document.querySelectorAll('.app-section').forEach((sec) => {
    if (sec.id === `sec-${tabId}`) {
      sec.style.display = 'block';
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      sec.style.display = 'none';
    }
  });

  // Close mobile nav if open
  const navLinks = document.getElementById('nav-links');
  if (navLinks) navLinks.classList.remove('open');
}

// ===================================================================
// RENDER TRIPS
// ===================================================================
function renderTrips(filteredTrips = null) {
  const container = document.getElementById('trips-grid');
  if (!container) return;

  const list = filteredTrips || state.trips;
  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍 No matching itineraries found</p>
        <p>Try changing your search destination or filters, or be the first to lead a trip!</p>
      </div>`;
    return;
  }

  container.innerHTML = list
    .map(
      (trip) => `
      <div class="trip-card" data-trip-id="${trip.id}">
        <div class="trip-card-thumb">
          <img src="${trip.image}" alt="${trip.title}" class="trip-card-img" loading="lazy" />
          <span class="trip-badge-top">🏷️ ${trip.type}</span>
          <button class="trip-bookmark" onclick="bookmarkTrip('${trip.id}', this)" title="Bookmark Trip">
            ♥
          </button>
        </div>
        <div class="trip-card-body">
          <div class="trip-host">
            <img src="${trip.host.avatar}" alt="${trip.host.name}" class="trip-host-avatar" />
            <div>
              <div class="trip-host-name">${trip.host.name}</div>
              <div class="trip-host-role">Trip Leader • ${trip.host.rating}</div>
            </div>
          </div>
          <h4 class="trip-card-title">${trip.title}</h4>
          <div class="trip-card-location">📍 ${trip.destination}</div>
          <p class="trip-card-desc">${trip.desc}</p>
          <div class="trip-card-tags">
            ${trip.tags.map((t) => `<span class="trip-tag">#${t}</span>`).join('')}
            <span class="trip-tag" style="color: var(--primary); font-weight: 700;">📅 ${trip.dates}</span>
          </div>
          <div class="trip-card-footer">
            <div class="trip-price-wrap">
              <h5>₹${Number(trip.price).toLocaleString()}</h5>
              <span>/ person • ${trip.slotsLeft} slots left</span>
            </div>
            <button class="btn btn-primary btn-sm" onclick="openBookingModal('${trip.id}')">
              Join Trip
            </button>
          </div>
        </div>
      </div>
    `
    )
    .join('');
}

function filterTrips() {
  const query = document.getElementById('search-dest-input')?.value.toLowerCase().trim() || '';
  const style = document.getElementById('search-style-select')?.value || 'all';
  const month = document.getElementById('search-date-select')?.value || 'all';
  const maxBudget = Number(document.getElementById('search-budget-select')?.value || 999999);

  const filtered = state.trips.filter((t) => {
    const matchQuery =
      t.title.toLowerCase().includes(query) ||
      t.destination.toLowerCase().includes(query) ||
      t.desc.toLowerCase().includes(query);
    const matchStyle = style === 'all' || t.type.toLowerCase() === style.toLowerCase();
    const matchMonth = month === 'all' || t.month === month;
    const matchBudget = t.price <= maxBudget;
    return matchQuery && matchStyle && matchMonth && matchBudget;
  });

  renderTrips(filtered);
}

function filterByPill(pillType, btn) {
  document.querySelectorAll('#trip-filters .filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');

  if (pillType === 'all') {
    renderTrips();
  } else {
    const filtered = state.trips.filter((t) => t.type.toLowerCase() === pillType.toLowerCase());
    renderTrips(filtered);
  }
}

function bookmarkTrip(tripId, btn) {
  btn.classList.toggle('bookmarked');
  if (btn.classList.contains('bookmarked')) {
    btn.style.color = 'var(--secondary)';
    showVoiceToast('Trip saved to your bookmarks!');
  } else {
    btn.style.color = 'var(--text-muted)';
  }
}

// ===================================================================
// LEAD A TRIP (NEW TRIP MODAL)
// ===================================================================
function openNewTripModal() {
  document.getElementById('modal-new-trip').classList.add('active');
}

function closeModals() {
  document.querySelectorAll('.modal-overlay').forEach((m) => m.classList.remove('active'));
}

function handleCreateTrip(e) {
  e.preventDefault();
  const form = e.target;
  const newTrip = {
    id: `tr-${Date.now()}`,
    title: form.title.value,
    destination: form.destination.value,
    type: form.type.value,
    image:
      form.image.value.trim() ||
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    host: {
      name: form.hostName.value || 'You (Host)',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      rating: '5.0 ★'
    },
    dates: form.dates.value,
    month: 'oct',
    price: Number(form.price.value) || 12000,
    slotsLeft: Number(form.slots.value) || 4,
    totalSlots: Number(form.slots.value) || 4,
    desc: form.desc.value,
    tags: form.tags.value.split(',').map((t) => t.trim())
  };

  state.trips.unshift(newTrip);
  saveData('trips');
  renderTrips();
  closeModals();
  form.reset();
  showVoiceToast('🎉 Congratulations! Your trip has been posted live!');
  switchTab('trips');
}

// ===================================================================
// BOOKING & STRIPE CHECKOUT SIMULATOR
// ===================================================================
let currentBookingTrip = null;

function openBookingModal(tripId) {
  const trip = state.trips.find((t) => t.id === tripId);
  if (!trip) return;
  currentBookingTrip = trip;

  document.getElementById('book-trip-title').textContent = trip.title;
  document.getElementById('book-trip-dest').textContent = `📍 ${trip.destination}`;
  document.getElementById('book-trip-dates').textContent = `📅 ${trip.dates}`;
  document.getElementById('book-trip-price').textContent = `₹${Number(trip.price).toLocaleString()} / person`;
  document.getElementById('book-total-amt').textContent = `₹${Number(trip.price).toLocaleString()}`;
  document.getElementById('book-seats').value = '1';

  document.getElementById('modal-booking').classList.add('active');
}

function updateBookingTotal() {
  if (!currentBookingTrip) return;
  const seats = Number(document.getElementById('book-seats').value) || 1;
  const total = seats * currentBookingTrip.price;
  document.getElementById('book-total-amt').textContent = `₹${total.toLocaleString()}`;
}

function handleConfirmPayment(e) {
  e.preventDefault();
  const seats = Number(document.getElementById('book-seats').value) || 1;
  const total = seats * currentBookingTrip.price;

  const newBooking = {
    id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
    tripTitle: currentBookingTrip.title,
    destination: currentBookingTrip.destination,
    amount: total,
    date: currentBookingTrip.dates,
    status: 'confirmed',
    bookedAt: new Date().toLocaleDateString('en-GB')
  };

  state.bookings.unshift(newBooking);
  saveData('bookings');
  renderBookings();

  // Deduct slots
  currentBookingTrip.slotsLeft = Math.max(0, currentBookingTrip.slotsLeft - seats);
  saveData('trips');
  renderTrips();

  closeModals();
  showVoiceToast(`🎉 Booking Confirmed! Ref ID: ${newBooking.id}`);
  switchTab('bookings');
}

// ===================================================================
// RENDER SOLO TRAVEL BUDDIES (#meetup)
// ===================================================================
function renderBuddies(filtered = null) {
  const container = document.getElementById('buddies-grid');
  if (!container) return;

  const list = filtered || state.buddies;
  container.innerHTML = list
    .map(
      (b) => `
      <div class="buddy-card">
        <div class="buddy-avatar-wrap">
          <img src="${b.avatar}" alt="${b.name}" class="buddy-avatar" />
          <div class="buddy-status-dot" title="Active Traveler"></div>
        </div>
        <h4 class="buddy-name">${b.name} ${b.verified ? '✓' : ''}</h4>
        <div class="buddy-loc">📍 ${b.location}</div>
        <p class="buddy-bio">${b.bio}</p>
        <div style="font-size: 0.78rem; font-weight: 700; color: var(--primary); margin-bottom: 0.5rem;">
          Dream Destinations: ${b.destinations}
        </div>
        <div class="buddy-interests">
          ${b.interests.map((i) => `<span class="interest-pill">${i}</span>`).join('')}
        </div>
        <div class="buddy-actions">
          <button class="btn btn-outline btn-sm" onclick="openConnectModal('${b.name}', '${b.phone}')">
            💬 Invite
          </button>
          <a href="https://wa.me/${b.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(
        b.name
      )},%20I%20saw%20your%20profile%20on%20WanderWay%20and%20would%20love%20to%20connect%20for%20travel!" 
             target="_blank" class="btn btn-primary btn-sm">
            WhatsApp
          </a>
        </div>
      </div>
    `
    )
    .join('');
}

function openConnectModal(name, phone) {
  const msg = prompt(`Send a quick travel invite to ${name}:`, `Hey ${name}! I love your travel style. Want to plan a trip together?`);
  if (msg) {
    showVoiceToast(`Invite message dispatched to ${name}!`);
  }
}

// ===================================================================
// EXPENSE TRACKER & SPLITTER (#expenses)
// ===================================================================
function renderExpenses() {
  const listEl = document.getElementById('expense-list');
  if (!listEl) return;

  const total = state.expenses.reduce((sum, item) => sum + Number(item.amount), 0);
  const memberCount = Math.max(1, Number(document.getElementById('split-members-input')?.value || 4));
  const perPerson = Math.round(total / memberCount);

  document.getElementById('exp-total-val').textContent = `₹${total.toLocaleString()}`;
  document.getElementById('exp-split-val').textContent = `₹${perPerson.toLocaleString()}`;

  // Find max category
  const catSums = {};
  state.expenses.forEach((e) => {
    catSums[e.category] = (catSums[e.category] || 0) + Number(e.amount);
  });
  let maxCat = 'General';
  let maxVal = 0;
  for (const [k, v] of Object.entries(catSums)) {
    if (v > maxVal) {
      maxVal = v;
      maxCat = k;
    }
  }
  document.getElementById('exp-top-cat').textContent = maxCat;

  // Render items
  listEl.innerHTML = state.expenses
    .map(
      (item) => `
      <div class="expense-item">
        <div class="expense-item-info">
          <h5>${item.title}</h5>
          <span>🏷️ ${item.category} • Paid by <strong>${item.paidBy}</strong></span>
        </div>
        <div class="expense-item-right">
          <div class="expense-item-amt">₹${Number(item.amount).toLocaleString()}</div>
          <button class="btn-del" onclick="deleteExpense('${item.id}')" title="Delete">✕</button>
        </div>
      </div>
    `
    )
    .join('');

  // Update Category Progress Bars
  const catWrap = document.getElementById('cat-progress-bars');
  if (catWrap) {
    catWrap.innerHTML = Object.entries(catSums)
      .map(([cat, amt]) => {
        const pct = total > 0 ? Math.round((amt / total) * 100) : 0;
        return `
        <div class="cat-item">
          <div class="cat-header">
            <span>${cat}</span>
            <span>₹${amt.toLocaleString()} (${pct}%)</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${pct}%;"></div>
          </div>
        </div>
      `;
      })
      .join('');
  }
}

function handleAddExpense(e) {
  e.preventDefault();
  const form = e.target;
  const newExp = {
    id: `exp-${Date.now()}`,
    title: form.title.value,
    category: form.category.value,
    amount: Number(form.amount.value) || 0,
    paidBy: form.paidBy.value || 'You'
  };

  state.expenses.unshift(newExp);
  saveData('expenses');
  renderExpenses();
  form.reset();
  showVoiceToast('Expense added successfully!');
}

function deleteExpense(id) {
  state.expenses = state.expenses.filter((e) => e.id !== id);
  saveData('expenses');
  renderExpenses();
}

// ===================================================================
// SAFETY & SOS
// ===================================================================
function triggerSOS() {
  const confirmed = confirm(
    '🚨 SOS EMERGENCY ALERT\n\nAre you sure you want to trigger the emergency alert? This will broadcast your live coordinates to registered emergency contacts and local helplines.'
  );
  if (confirmed) {
    if (navigator.vibrate) navigator.vibrate([500, 200, 500, 200, 500]);
    alert(
      '🚨 SOS BROADCAST ACTIVE!\n\nLocation: Coordinates (28.6139° N, 77.2090° E)\nPolice & Tourist Helpline pinged.\nStay calm in a well-lit public area.'
    );
    showVoiceToast('🚨 Emergency SOS dispatched! Helplines notified.');
  }
}

// ===================================================================
// PHOTO CONTEST & COMMUNITY (#contest)
// ===================================================================
function renderContestPhotos() {
  const container = document.getElementById('contest-grid');
  if (!container) return;

  container.innerHTML = state.photos
    .map(
      (p) => `
      <div class="contest-card">
        <div class="contest-thumb">
          <img src="${p.image}" alt="${p.title}" class="contest-img" loading="lazy" />
        </div>
        <div class="contest-body">
          <h4 class="contest-card-title">${p.title}</h4>
          <div class="contest-author">By ${p.author} • 📍 ${p.location}</div>
          <div class="contest-footer">
            <button class="like-btn" onclick="votePhoto('${p.id}', this)">
              ❤️ <span class="vote-count">${p.likes}</span>
            </button>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Weekly Entry</span>
          </div>
        </div>
      </div>
    `
    )
    .join('');
}

function votePhoto(id, btn) {
  const photo = state.photos.find((p) => p.id === id);
  if (!photo) return;
  photo.likes += 1;
  saveData('photos');
  btn.classList.add('liked');
  btn.querySelector('.vote-count').textContent = photo.likes;
  showVoiceToast('Vote recorded for photo contest!');
}

function openSubmitPhotoModal() {
  document.getElementById('modal-photo').classList.add('active');
}

function handleSubmitPhoto(e) {
  e.preventDefault();
  const form = e.target;
  const newPhoto = {
    id: `ph-${Date.now()}`,
    title: form.title.value,
    author: form.author.value || 'Anonymous',
    location: form.location.value,
    image:
      form.image.value.trim() ||
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    likes: 1
  };

  state.photos.unshift(newPhoto);
  saveData('photos');
  renderContestPhotos();
  closeModals();
  form.reset();
  showVoiceToast('Photo submitted to contest!');
}

// ===================================================================
// INTERACTIVE MAP EXPLORER (#map)
// ===================================================================
function renderMapPins() {
  const pinWrap = document.getElementById('map-pins-wrap');
  if (!pinWrap) return;

  pinWrap.innerHTML = destinationPins
    .map(
      (pin) => `
      <div class="map-pin" style="top: ${pin.coords.top}; left: ${pin.coords.left};" onclick="selectDestinationPin('${pin.id}')">
        <div class="pin-icon">📍</div>
        <div class="pin-label">${pin.name}</div>
      </div>
    `
    )
    .join('');

  // Default selection
  selectDestinationPin('dest-manali');
}

function selectDestinationPin(id) {
  const pin = destinationPins.find((p) => p.id === id);
  if (!pin) return;

  const card = document.getElementById('map-destination-card');
  if (!card) return;

  card.innerHTML = `
    <div>
      <img src="${pin.img}" alt="${pin.name}" class="dest-detail-img" />
      <h3 style="font-size: 1.4rem; margin-bottom: 0.2rem;">${pin.name}, ${pin.country}</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">${pin.desc}</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.25rem;">
        <div style="background: var(--surface); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--card-border);">
          <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">CURRENT WEATHER</div>
          <div style="font-weight: 800; color: var(--primary);">${pin.weather}</div>
        </div>
        <div style="background: var(--surface); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--card-border);">
          <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">BEST TIME</div>
          <div style="font-weight: 800;">${pin.bestTime}</div>
        </div>
        <div style="background: var(--surface); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--card-border);">
          <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">BUDDY GROUPS</div>
          <div style="font-weight: 800; color: var(--secondary);">${pin.buddyGroups}</div>
        </div>
        <div style="background: var(--surface); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--card-border);">
          <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">EST. BUDGET</div>
          <div style="font-weight: 800;">${pin.estBudget}</div>
        </div>
      </div>
    </div>
    <button class="btn btn-primary" style="width: 100%;" onclick="findTripsForDest('${pin.name}')">
      Explore Trips to ${pin.name}
    </button>
  `;
}

function findTripsForDest(destName) {
  switchTab('trips');
  const searchInput = document.getElementById('search-dest-input');
  if (searchInput) {
    searchInput.value = destName.split(' ')[0];
    filterTrips();
  }
}

// ===================================================================
// MY BOOKINGS (#bookings)
// ===================================================================
function renderBookings() {
  const container = document.getElementById('bookings-list');
  if (!container) return;

  if (state.bookings.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: var(--text-muted); background: var(--surface); border-radius: var(--radius-lg); border: 1px solid var(--card-border);">
        <p style="font-size: 1.4rem; margin-bottom: 0.5rem;">🎒 No Bookings Yet</p>
        <p>Explore itineraries and join a trip to get your official travel voucher.</p>
        <button class="btn btn-primary" style="margin-top: 1.25rem;" onclick="switchTab('trips')">Browse Itineraries</button>
      </div>`;
    return;
  }

  container.innerHTML = state.bookings
    .map(
      (b) => `
      <div class="booking-item-card">
        <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80" alt="${b.tripTitle}" class="booking-thumb" />
        <div class="booking-info">
          <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.35rem;">
            <span class="badge-status confirmed">Confirmed</span>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary);">Booking Ref: ${b.id}</span>
          </div>
          <h4>${b.tripTitle}</h4>
          <div class="booking-meta">
            <span>📍 ${b.destination}</span>
            <span>📅 ${b.date}</span>
            <span>💰 Paid: ₹${Number(b.amount).toLocaleString()}</span>
          </div>
        </div>
        <div>
          <button class="btn btn-outline btn-sm" onclick="printVoucher('${b.id}')">
            🖨️ Download Voucher
          </button>
        </div>
      </div>
    `
    )
    .join('');
}

function printVoucher(bookingId) {
  const booking = state.bookings.find((b) => b.id === bookingId);
  if (!booking) return;

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>WanderWay Voucher - ${booking.id}</title>
        <style>
          body { font-family: sans-serif; padding: 40px; color: #1e293b; max-width: 600px; margin: auto; border: 2px dashed #008080; border-radius: 12px; }
          h2 { color: #008080; margin-bottom: 5px; }
          .row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
          .badge { background: #e6fffa; color: #008080; padding: 4px 10px; border-radius: 20px; font-weight: bold; }
          .footer { margin-top: 25px; font-size: 12px; color: #64748b; text-align: center; }
        </style>
      </head>
      <body>
        <h2>✈️ WANDERWAY OFFICIAL PASS</h2>
        <p>Verified Group Travel Voucher</p>
        <div class="row"><strong>Booking Reference:</strong> <span>${booking.id}</span></div>
        <div class="row"><strong>Trip:</strong> <span>${booking.tripTitle}</span></div>
        <div class="row"><strong>Destination:</strong> <span>${booking.destination}</span></div>
        <div class="row"><strong>Departure:</strong> <span>${booking.date}</span></div>
        <div class="row"><strong>Amount Paid:</strong> <span>₹${booking.amount.toLocaleString()} (Stripe Verified)</span></div>
        <div class="row"><strong>Status:</strong> <span class="badge">CONFIRMED</span></div>
        <div class="footer">Show this pass to your designated Trip Leader upon departure. Have an unforgettable adventure!</div>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

// ===================================================================
// AI TRAVEL ASSISTANT (BUDDYBOT)
// ===================================================================
function setupChatbot() {
  const trigger = document.getElementById('chatbot-trigger');
  const panel = document.getElementById('chatbot-panel');
  const close = document.getElementById('chatbot-close');
  const form = document.getElementById('chatbot-form');
  const input = document.getElementById('chatbot-input');

  if (!trigger || !panel) return;

  trigger.addEventListener('click', () => {
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) input.focus();
  });

  close.addEventListener('click', () => {
    panel.classList.remove('open');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    addChatMessage(query, 'user');
    input.value = '';

    setTimeout(() => {
      respondBot(query);
    }, 600);
  });
}

function addChatMessage(text, sender) {
  const container = document.getElementById('chatbot-messages');
  if (!container) return;

  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;
  bubble.innerHTML = text;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function sendQuickPrompt(query) {
  addChatMessage(query, 'user');
  setTimeout(() => {
    respondBot(query);
  }, 500);
}

function respondBot(query) {
  const q = query.toLowerCase();
  let reply = '';

  if (q.includes('goa') || q.includes('beach')) {
    reply = `🌴 <strong>3-Day Goa Recommendation:</strong><br>
    • <strong>Day 1:</strong> North Goa cafe hopping in Anjuna & Chapora sunset.<br>
    • <strong>Day 2:</strong> Rent a scooter to Arambol sweet water lake & drum circle.<br>
    • <strong>Day 3:</strong> South Goa peace in Palolem & kayaking at Cola Beach!`;
  } else if (q.includes('bali')) {
    reply = `🌺 <strong>Bali Essentials:</strong><br>
    • Best months: May - September.<br>
    • Must visit: Uluwatu cliff temples, Mt. Batur sunrise hike, Tegalalang rice terraces.<br>
    • Estimated budget for 7 days: ~₹35,000 - ₹45,000.`;
  } else if (q.includes('solo') || q.includes('beginner') || q.includes('tip')) {
    reply = `🧭 <strong>Top 5 Solo Travel Hacks:</strong><br>
    1. Stay in social hostels or join verified Travel Buddy groups.<br>
    2. Keep offline maps (Google Maps / Maps.me) downloaded.<br>
    3. Always split emergency cash between your backpack and jacket.<br>
    4. Share live itinerary tracking with family via WhatsApp.<br>
    5. Learn 5 basic local greetings in your destination!`;
  } else if (q.includes('pack') || q.includes('checklist')) {
    reply = `🎒 <strong>Essential Travel Packing Checklist:</strong><br>
    • Universal power adapter + 20,000mAh power bank.<br>
    • Microfiber quick-dry towel & lightweight rain poncho.<br>
    • First aid: pain relievers, band-aids, ORS hydration sachets.<br>
    • Physical photocopy of Passport/Aadhaar & travel insurance!`;
  } else if (q.includes('safety') || q.includes('emergency')) {
    reply = `🛡️ <strong>Safety Tips:</strong> You can use our top red <strong>SOS Emergency button</strong> in the Safety tab to trigger alarms. Police helpline is <strong>112 / 100</strong> and tourist support is <strong>1363</strong>.`;
  } else {
    reply = `👋 I'm your WanderWay AI Copilot! I can help you plan custom itineraries, find budget accommodations, connect with solo travelers, or give packing advice. What destination are you dreaming of next?`;
  }

  addChatMessage(reply, 'bot');
}

// ===================================================================
// NATIVE WEB SPEECH API (VOICE NAVIGATION)
// ===================================================================
function setupVoiceNavigation() {
  const micBtn = document.getElementById('voice-nav-btn');
  if (!micBtn) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    micBtn.setAttribute('title', 'Speech Recognition not supported in this browser');
    micBtn.addEventListener('click', () => {
      showVoiceToast('Voice recognition not supported. Try Google Chrome or Edge!');
    });
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = state.lang === 'hi' ? 'hi-IN' : 'en-US';

  micBtn.addEventListener('click', () => {
    if (state.isListening) {
      recognition.stop();
      return;
    }

    try {
      recognition.start();
      state.isListening = true;
      micBtn.classList.add('recording');
      showVoiceToast('🎙️ Listening... Say "Trips", "Buddies", "Expenses", or "Dark Mode"');
    } catch (err) {
      console.error(err);
    }
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    showVoiceToast(`Heard: "${transcript}"`);
    handleVoiceCommand(transcript);
  };

  recognition.onerror = () => {
    state.isListening = false;
    micBtn.classList.remove('recording');
  };

  recognition.onend = () => {
    state.isListening = false;
    micBtn.classList.remove('recording');
  };
}

function handleVoiceCommand(cmd) {
  if (cmd.includes('trip') || cmd.includes('itinerary')) {
    switchTab('trips');
    speakResponse('Opening trips feed');
  } else if (cmd.includes('buddy') || cmd.includes('meet') || cmd.includes('people') || cmd.includes('friend')) {
    switchTab('meetup');
    speakResponse('Finding solo travel buddies');
  } else if (cmd.includes('expense') || cmd.includes('budget') || cmd.includes('money')) {
    switchTab('expenses');
    speakResponse('Navigating to expense tracker');
  } else if (cmd.includes('safe') || cmd.includes('emergency') || cmd.includes('sos')) {
    switchTab('safety');
    speakResponse('Opening safety hub');
  } else if (cmd.includes('contest') || cmd.includes('photo')) {
    switchTab('contest');
    speakResponse('Showing photo contest');
  } else if (cmd.includes('map') || cmd.includes('explore') || cmd.includes('destination')) {
    switchTab('map');
    speakResponse('Opening destination map');
  } else if (cmd.includes('booking')) {
    switchTab('bookings');
    speakResponse('Opening your bookings');
  } else if (cmd.includes('login') || cmd.includes('sign in') || cmd.includes('register') || cmd.includes('account')) {
    switchTab('login');
    speakResponse('Opening login page');
  } else if (cmd.includes('dark')) {
    applyTheme('dark');
    speakResponse('Dark mode enabled');
  } else if (cmd.includes('light')) {
    applyTheme('light');
    speakResponse('Light mode enabled');
  } else {
    speakResponse(`Command not recognized: ${cmd}`);
  }
}

function speakResponse(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  }
}

function showVoiceToast(msg) {
  let banner = document.getElementById('voice-feedback-banner');
  if (!banner) return;
  banner.textContent = msg;
  banner.classList.add('active');
  clearTimeout(banner._timer);
  banner._timer = setTimeout(() => {
    banner.classList.remove('active');
  }, 3200);
}

// ===================================================================
// AUTHENTICATION & LOGIN CONTROLLER
// ===================================================================
function isValidEmail(email) {
  // Regex strictly validating standard email format user@domain.tld
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return re.test(String(email).trim());
}

function handleEmailInputValidation(input) {
  const errEl = document.getElementById(`${input.id}-err`);
  const val = input.value.trim();
  if (!val) {
    input.classList.remove('is-invalid');
    if (errEl) errEl.classList.remove('active');
    return false;
  }
  if (!isValidEmail(val)) {
    input.classList.add('is-invalid');
    if (errEl) errEl.classList.add('active');
    return false;
  } else {
    input.classList.remove('is-invalid');
    if (errEl) errEl.classList.remove('active');
    return true;
  }
}

function handlePasswordInputValidation(input) {
  const errEl = document.getElementById(`${input.id}-err`);
  const val = input.value;
  if (!val) {
    input.classList.remove('is-invalid');
    if (errEl) errEl.classList.remove('active');
    return false;
  }
  if (val.length < 6) {
    input.classList.add('is-invalid');
    if (errEl) errEl.classList.add('active');
    return false;
  } else {
    input.classList.remove('is-invalid');
    if (errEl) errEl.classList.remove('active');
    return true;
  }
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
    btn.setAttribute('title', 'Hide Password');
  } else {
    input.type = 'password';
    btn.textContent = '👁️';
    btn.setAttribute('title', 'Show Password');
  }
}

function switchAuthMode(mode) {
  const signinForm = document.getElementById('form-signin');
  const signupForm = document.getElementById('form-signup');
  const tabSignin = document.getElementById('tab-btn-signin');
  const tabSignup = document.getElementById('tab-btn-signup');
  const errBox = document.getElementById('auth-error-box');
  if (errBox) errBox.classList.remove('active');

  if (mode === 'signin') {
    signinForm.style.display = 'block';
    signupForm.style.display = 'none';
    tabSignin.classList.add('active');
    tabSignup.classList.remove('active');
  } else {
    signinForm.style.display = 'none';
    signupForm.style.display = 'block';
    tabSignin.classList.remove('active');
    tabSignup.classList.add('active');
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  const errBox = document.getElementById('auth-error-box');
  const errMsg = document.getElementById('auth-error-msg');

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // Strict email format check
  if (!isValidEmail(email)) {
    emailInput.classList.add('is-invalid');
    document.getElementById('login-email-err').classList.add('active');
    if (errBox && errMsg) {
      errMsg.textContent = 'Please enter a valid email format (e.g. traveler@wanderway.com)';
      errBox.classList.add('active');
    }
    emailInput.focus();
    return;
  }

  // Password check
  if (!password || password.length < 6) {
    passwordInput.classList.add('is-invalid');
    document.getElementById('login-password-err').classList.add('active');
    if (errBox && errMsg) {
      errMsg.textContent = 'Password must be at least 6 characters long';
      errBox.classList.add('active');
    }
    passwordInput.focus();
    return;
  }

  if (errBox) errBox.classList.remove('active');

  // Successful Login
  const namePart = email.split('@')[0];
  const displayName = namePart.charAt(0).toUpperCase() + namePart.slice(1);

  const user = {
    email: email,
    name: displayName,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    loggedInAt: new Date().toISOString()
  };

  state.user = user;
  localStorage.setItem('wanderway_user', JSON.stringify(user));
  updateAuthUI();
  showVoiceToast(`🎉 Welcome to WanderWay, ${displayName}!`);
  switchTab('trips');
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const nameInput = document.getElementById('reg-name');
  const emailInput = document.getElementById('reg-email');
  const passwordInput = document.getElementById('reg-password');
  const locInput = document.getElementById('reg-location');
  const errBox = document.getElementById('auth-error-box');
  const errMsg = document.getElementById('auth-error-msg');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const location = locInput ? locInput.value.trim() : 'Global Explorer';

  if (!isValidEmail(email)) {
    emailInput.classList.add('is-invalid');
    document.getElementById('reg-email-err').classList.add('active');
    if (errBox && errMsg) {
      errMsg.textContent = 'Please provide a valid email format';
      errBox.classList.add('active');
    }
    emailInput.focus();
    return;
  }

  if (!password || password.length < 6) {
    passwordInput.classList.add('is-invalid');
    document.getElementById('reg-password-err').classList.add('active');
    if (errBox && errMsg) {
      errMsg.textContent = 'Password must be at least 6 characters long';
      errBox.classList.add('active');
    }
    passwordInput.focus();
    return;
  }

  const user = {
    email: email,
    name: name || 'Adventurer',
    location: location,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    loggedInAt: new Date().toISOString()
  };

  state.user = user;
  localStorage.setItem('wanderway_user', JSON.stringify(user));
  updateAuthUI();
  showVoiceToast(`🌟 Account created! Welcome, ${user.name}!`);
  switchTab('trips');
}

function handleLogout() {
  state.user = null;
  localStorage.removeItem('wanderway_user');
  updateAuthUI();
  showVoiceToast('🚪 Locked site. Please sign in to enter WanderWay.');
}

function updateAuthUI() {
  const doorEl = document.getElementById('auth-portal-door');
  const appWrapper = document.getElementById('app-protected-wrapper');
  const displayName = document.getElementById('user-display-name');
  const avatarImg = document.getElementById('user-avatar-img');

  if (state.user) {
    // User is logged in -> Hide the door, display the protected app
    if (doorEl) doorEl.style.display = 'none';
    if (appWrapper) {
      appWrapper.style.display = 'flex';
      appWrapper.classList.add('authenticated');
    }
    if (displayName) displayName.textContent = state.user.name;
    if (avatarImg && state.user.avatar) avatarImg.src = state.user.avatar;
  } else {
    // User is NOT logged in -> Door is the only entrance
    if (doorEl) doorEl.style.display = 'flex';
    if (appWrapper) {
      appWrapper.style.display = 'none';
      appWrapper.classList.remove('authenticated');
    }
  }
}

function switchDoorAuthMode(mode) {
  const signinForm = document.getElementById('door-form-signin');
  const signupForm = document.getElementById('door-form-signup');
  const tabSignin = document.getElementById('door-tab-signin');
  const tabSignup = document.getElementById('door-tab-signup');
  const errBox = document.getElementById('door-auth-error-box');
  if (errBox) errBox.classList.remove('active');

  if (mode === 'signin') {
    signinForm.style.display = 'block';
    signupForm.style.display = 'none';
    tabSignin.classList.add('active');
    tabSignup.classList.remove('active');
  } else {
    signinForm.style.display = 'none';
    signupForm.style.display = 'block';
    tabSignin.classList.remove('active');
    tabSignup.classList.add('active');
  }
}

function handleDoorLogin(e) {
  e.preventDefault();
  const emailInput = document.getElementById('door-login-email');
  const passwordInput = document.getElementById('door-login-password');
  const errBox = document.getElementById('door-auth-error-box');
  const errMsg = document.getElementById('door-auth-error-msg');

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // Strict email format verification
  if (!isValidEmail(email)) {
    emailInput.classList.add('is-invalid');
    document.getElementById('door-login-email-err').classList.add('active');
    if (errBox && errMsg) {
      errMsg.textContent = 'Please enter a valid email format (e.g. explorer@wanderway.com)';
      errBox.classList.add('active');
    }
    emailInput.focus();
    return;
  }

  // Password verification
  if (!password || password.length < 6) {
    passwordInput.classList.add('is-invalid');
    document.getElementById('door-login-password-err').classList.add('active');
    if (errBox && errMsg) {
      errMsg.textContent = 'Password must be at least 6 characters long';
      errBox.classList.add('active');
    }
    passwordInput.focus();
    return;
  }

  if (errBox) errBox.classList.remove('active');

  // Successful Login -> Open door!
  const namePart = email.split('@')[0];
  const displayName = namePart.charAt(0).toUpperCase() + namePart.slice(1);

  const user = {
    email: email,
    name: displayName,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    loggedInAt: new Date().toISOString()
  };

  state.user = user;
  localStorage.setItem('wanderway_user', JSON.stringify(user));
  updateAuthUI();
  showVoiceToast(`🚪 Door unlocked! Welcome to WanderWay, ${displayName}!`);
  switchTab('trips');
}

function handleDoorRegister(e) {
  e.preventDefault();
  const nameInput = document.getElementById('door-reg-name');
  const emailInput = document.getElementById('door-reg-email');
  const passwordInput = document.getElementById('door-reg-password');
  const locInput = document.getElementById('door-reg-location');
  const errBox = document.getElementById('door-auth-error-box');
  const errMsg = document.getElementById('door-auth-error-msg');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const location = locInput ? locInput.value.trim() : 'Global Explorer';

  if (!isValidEmail(email)) {
    emailInput.classList.add('is-invalid');
    document.getElementById('door-reg-email-err').classList.add('active');
    if (errBox && errMsg) {
      errMsg.textContent = 'Please enter a valid email format';
      errBox.classList.add('active');
    }
    emailInput.focus();
    return;
  }

  if (!password || password.length < 6) {
    passwordInput.classList.add('is-invalid');
    document.getElementById('door-reg-password-err').classList.add('active');
    if (errBox && errMsg) {
      errMsg.textContent = 'Password must be at least 6 characters long';
      errBox.classList.add('active');
    }
    passwordInput.focus();
    return;
  }

  const user = {
    email: email,
    name: name || 'Adventurer',
    location: location,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    loggedInAt: new Date().toISOString()
  };

  state.user = user;
  localStorage.setItem('wanderway_user', JSON.stringify(user));
  updateAuthUI();
  showVoiceToast(`🌟 Door unlocked! Welcome to WanderWay, ${user.name}!`);
  switchTab('trips');
}

function fillDemoCredentials() {
  const emailInput = document.getElementById('door-login-email');
  const passwordInput = document.getElementById('door-login-password');
  if (emailInput && passwordInput) {
    emailInput.value = 'explorer@wanderway.com';
    passwordInput.value = 'wander123';
    handleDoorLogin(new Event('submit'));
  }
}

function simulateSocialLogin(provider) {
  const user = {
    email: `traveler.${provider.toLowerCase()}@wanderway.com`,
    name: `${provider} Traveler`,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    loggedInAt: new Date().toISOString()
  };

  state.user = user;
  localStorage.setItem('wanderway_user', JSON.stringify(user));
  updateAuthUI();
  showVoiceToast(`🚪 Door unlocked via ${provider}!`);
  switchTab('trips');
}

function handleForgotPassword() {
  const email = prompt('Enter your registered email address for password reset:');
  if (email) {
    if (isValidEmail(email)) {
      alert(`Password reset instructions sent to ${email}`);
    } else {
      alert('Please provide a valid email format.');
    }
  }
}

// ===================================================================
// APP INITIALIZATION
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
  initData();
  applyTheme(state.theme);
  setLanguage(state.lang);
  setupNavigation();
  updateAuthUI();
  renderTrips();
  renderBuddies();
  renderExpenses();
  renderContestPhotos();
  renderMapPins();
  renderBookings();
  setupChatbot();
  setupVoiceNavigation();

  // Search input listeners
  const searchInput = document.getElementById('search-dest-input');
  const styleSelect = document.getElementById('search-style-select');
  const dateSelect = document.getElementById('search-date-select');
  const budgetSelect = document.getElementById('search-budget-select');

  if (searchInput) searchInput.addEventListener('input', filterTrips);
  if (styleSelect) styleSelect.addEventListener('change', filterTrips);
  if (dateSelect) dateSelect.addEventListener('change', filterTrips);
  if (budgetSelect) budgetSelect.addEventListener('change', filterTrips);

  // Split input in expense tracker
  const splitInput = document.getElementById('split-members-input');
  if (splitInput) splitInput.addEventListener('input', renderExpenses);
});
