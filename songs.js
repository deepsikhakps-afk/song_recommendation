// Dataset of songs tagged by mood. Feel free to add more entries per mood.
const SONGS = {
  happy: [
    { title: "Happy", artist: "Pharrell Williams", genre: "Pop" },
    { title: "Kar Gayi Chull", artist: "Badshah, Fazilpuria", genre: "Bollywood" },
    { title: "Uptown Funk", artist: "Bruno Mars", genre: "Pop/Funk" },
    { title: "London Thumakda", artist: "Labh Janjua", genre: "Bollywood" },
    { title: "Good as Hell", artist: "Lizzo", genre: "Pop" },
    { title: "Badtameez Dil", artist: "Benny Dayal", genre: "Bollywood" }
  ],
  sad: [
    { title: "Someone Like You", artist: "Adele", genre: "Pop" },
    { title: "Channa Mereya", artist: "Arijit Singh", genre: "Bollywood" },
    { title: "Fix You", artist: "Coldplay", genre: "Rock" },
    { title: "Tum Hi Ho", artist: "Arijit Singh", genre: "Bollywood" },
    { title: "Let Her Go", artist: "Passenger", genre: "Folk/Pop" },
    { title: "Agar Tum Saath Ho", artist: "Alka Yagnik, Arijit Singh", genre: "Bollywood" }
  ],
  stressed: [
    { title: "Weightless", artist: "Marconi Union", genre: "Ambient" },
    { title: "Breathe Me", artist: "Sia", genre: "Alt/Pop" },
    { title: "Kal Ho Naa Ho (Title Track)", artist: "Sonu Nigam", genre: "Bollywood" },
    { title: "Clair de Lune", artist: "Debussy", genre: "Classical" },
    { title: "Ocean Eyes", artist: "Billie Eilish", genre: "Pop" }
  ],
  bored: [
    { title: "Blinding Lights", artist: "The Weeknd", genre: "Synth-pop" },
    { title: "Zinda", artist: "Siddharth Mahadevan", genre: "Bollywood" },
    { title: "Levitating", artist: "Dua Lipa", genre: "Pop" },
    { title: "Malhari", artist: "Vishal Dadlani", genre: "Bollywood" },
    { title: "Sunflower", artist: "Post Malone, Swae Lee", genre: "Pop/Hip-hop" }
  ],
  romantic: [
    { title: "Perfect", artist: "Ed Sheeran", genre: "Pop" },
    { title: "Raabta", artist: "Arijit Singh", genre: "Bollywood" },
    { title: "All of Me", artist: "John Legend", genre: "R&B" },
    { title: "Tum Se Hi", artist: "Mohit Chauhan", genre: "Bollywood" },
    { title: "Just the Way You Are", artist: "Bruno Mars", genre: "Pop" }
  ],
  energetic: [
    { title: "Believer", artist: "Imagine Dragons", genre: "Rock" },
    { title: "Zinda Hoon Yaar", artist: "Vishal Dadlani", genre: "Bollywood" },
    { title: "Eye of the Tiger", artist: "Survivor", genre: "Rock" },
    { title: "Sultan (Title Track)", artist: "Sukhwinder Singh", genre: "Bollywood" },
    { title: "Stronger", artist: "Kanye West", genre: "Hip-hop" }
  ]
};

// Mood metadata for UI buttons
const MOODS = [
  { key: "happy", label: "Happy", emoji: "😄" },
  { key: "sad", label: "Sad", emoji: "😢" },
  { key: "stressed", label: "Stressed", emoji: "😖" },
  { key: "bored", label: "Bored", emoji: "🥱" },
  { key: "romantic", label: "Romantic", emoji: "🥰" },
  { key: "energetic", label: "Energetic", emoji: "⚡" }
];
