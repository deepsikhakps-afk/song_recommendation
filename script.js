let currentMood = null;

function renderMoodButtons() {
  const grid = document.getElementById('moodGrid');
  grid.innerHTML = '';
  MOODS.forEach(mood => {
    const btn = document.createElement('button');
    btn.className = 'mood-btn';
    btn.dataset.mood = mood.key;
    btn.innerHTML = `<span class="emoji">${mood.emoji}</span><span>${mood.label}</span>`;
    btn.addEventListener('click', () => selectMood(mood.key));
    grid.appendChild(btn);
  });
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function selectMood(moodKey) {
  currentMood = moodKey;

  // highlight active button
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mood === moodKey);
  });

  document.getElementById('emptyState').style.display = 'none';
  document.getElementById('shuffleBtn').style.display = 'block';

  renderSongs();
}

function renderSongs() {
  if (!currentMood) return;
  const songs = shuffleArray(SONGS[currentMood]).slice(0, 4);
  const list = document.getElementById('songList');
  list.innerHTML = '';

  songs.forEach(song => {
    const card = document.createElement('div');
    card.className = 'song-card';
    card.innerHTML = `
      <div class="song-info">
        <div class="title">${song.title}</div>
        <div class="artist">${song.artist}</div>
      </div>
      <div class="song-tag">${song.genre}</div>
    `;
    list.appendChild(card);
  });
}

document.getElementById('shuffleBtn').addEventListener('click', renderSongs);

renderMoodButtons();
