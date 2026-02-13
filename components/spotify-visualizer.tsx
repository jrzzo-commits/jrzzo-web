'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Track = {
  id: number;
  track_name: string;
  artists: string;
  track_genre: string;
  energy: number;
  valence: number;
  danceability: number;
  acousticness: number;
  speechiness: number;
  instrumentalness: number;
  liveness: number;
  loudness: number;
  tempo: number;
  popularity: number;
};

type Point = [number, number];

type VizData = {
  tracks: Track[];
  umap: Point[];
  tsne: Point[];
  genres: string[];
  genreCounts: Record<string, number>;
};

const genres = [
  'pop', 'rock', 'hip-hop', 'edm', 'classical', 'jazz', 'metal', 'country',
  'indie', 'lo-fi', 'r&b', 'soul', 'funk', 'blues', 'reggae', 'punk',
  'techno', 'house', 'dubstep', 'trap', 'ambient', 'folk', 'latin',
  'k-pop', 'disco', 'grunge', 'gospel', 'acoustic', 'experimental', 'synthwave'
] as const;

const genreCenters: Record<string, [number, number]> = {
  pop: [0.68, 0.74],
  rock: [0.72, 0.52],
  'hip-hop': [0.67, 0.58],
  edm: [0.86, 0.72],
  classical: [0.22, 0.42],
  jazz: [0.46, 0.5],
  metal: [0.9, 0.34],
  country: [0.53, 0.64],
  indie: [0.56, 0.58],
  'lo-fi': [0.31, 0.58],
  'r&b': [0.61, 0.63],
  soul: [0.57, 0.57],
  funk: [0.64, 0.67],
  blues: [0.43, 0.45],
  reggae: [0.58, 0.69],
  punk: [0.88, 0.42],
  techno: [0.91, 0.62],
  house: [0.85, 0.7],
  dubstep: [0.92, 0.36],
  trap: [0.73, 0.38],
  ambient: [0.18, 0.5],
  folk: [0.42, 0.64],
  latin: [0.71, 0.76],
  'k-pop': [0.74, 0.79],
  disco: [0.8, 0.78],
  grunge: [0.77, 0.31],
  gospel: [0.5, 0.61],
  acoustic: [0.36, 0.6],
  experimental: [0.41, 0.44],
  synthwave: [0.83, 0.56]
};

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

function seededRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function generateData(total = 25000): VizData {
  const rand = seededRandom(24021986);
  const tracks: Track[] = [];
  const umap: Point[] = [];
  const tsne: Point[] = [];
  const genreCounts: Record<string, number> = {};

  for (let i = 0; i < total; i += 1) {
    const genre = genres[Math.floor(rand() * genres.length)];
    const center = genreCenters[genre];
    const spread = 0.18;

    const energy = clamp(center[0] + (rand() - 0.5) * spread);
    const valence = clamp(center[1] + (rand() - 0.5) * spread);
    const danceability = clamp((energy * 0.55 + valence * 0.45) + (rand() - 0.5) * 0.14);
    const acousticness = clamp((1 - energy) * 0.75 + rand() * 0.2);
    const speechiness = clamp((genre.includes('hip') || genre.includes('trap') ? 0.23 : 0.06) + rand() * 0.22);
    const instrumentalness = clamp((genre === 'classical' || genre === 'ambient' || genre === 'lo-fi' ? 0.52 : 0.16) + rand() * 0.32);
    const liveness = clamp(0.08 + rand() * 0.35);
    const tempo = 78 + energy * 104 + (rand() - 0.5) * 10;
    const loudness = -17 + energy * 14 + (rand() - 0.5) * 2;
    const popularity = Math.round(clamp(0.2 + valence * 0.4 + danceability * 0.4 + (rand() - 0.5) * 0.25) * 100);

    tracks.push({
      id: i,
      track_name: `Track ${i + 1}`,
      artists: `Artist ${Math.floor(i / 18) + 1}`,
      track_genre: genre,
      energy,
      valence,
      danceability,
      acousticness,
      speechiness,
      instrumentalness,
      liveness,
      loudness,
      tempo,
      popularity
    });

    const theta = ((i / total) * Math.PI * 2) + rand() * 0.24;
    const radius = 8 + energy * 6 + (rand() - 0.5) * 2.2;
    umap.push([
      Math.cos(theta) * radius + (energy - 0.5) * 18,
      Math.sin(theta) * radius + (valence - 0.5) * 18
    ]);

    const tsneRadius = 4 + (1 - acousticness) * 10;
    tsne.push([
      (energy - 0.5) * 22 + (rand() - 0.5) * 2 + Math.cos(theta * 1.8) * tsneRadius,
      (valence - 0.5) * 22 + (rand() - 0.5) * 2 + Math.sin(theta * 1.8) * tsneRadius
    ]);

    genreCounts[genre] = (genreCounts[genre] || 0) + 1;
  }

  return { tracks, umap, tsne, genres: [...genres], genreCounts };
}

function colorForTrack(track: Track, colorMode: string, genreList: string[]) {
  if (colorMode === 'genre') {
    const idx = Math.max(0, genreList.indexOf(track.track_genre));
    const hue = Math.round((idx / genreList.length) * 360);
    return `hsla(${hue}, 84%, 62%, 0.86)`;
  }
  if (colorMode === 'valence') {
    const hue = Math.round(track.valence * 130);
    return `hsla(${hue}, 88%, 62%, 0.86)`;
  }
  if (colorMode === 'energy') {
    const hue = Math.round(290 - track.energy * 130);
    return `hsla(${hue}, 90%, 62%, 0.86)`;
  }
  const hue = Math.round(210 + (track.popularity / 100) * 120);
  return `hsla(${hue}, 84%, 62%, 0.86)`;
}

export default function SpotifyVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState('');
  const [vizData, setVizData] = useState<VizData | null>(null);
  const [vizMode, setVizMode] = useState<'umap' | 'tsne'>('umap');
  const [colorMode, setColorMode] = useState<'genre' | 'valence' | 'energy' | 'popularity'>('genre');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [activeTrack, setActiveTrack] = useState<Track | null>(null);

  const stats = useMemo(() => {
    if (!vizData) return null;
    const total = vizData.tracks.length;
    const avgEnergy = vizData.tracks.reduce((sum, t) => sum + t.energy, 0) / total;
    const avgValence = vizData.tracks.reduce((sum, t) => sum + t.valence, 0) / total;
    let topGenre = '';
    let topCount = 0;
    Object.entries(vizData.genreCounts).forEach(([genre, count]) => {
      if (count > topCount) {
        topCount = count;
        topGenre = genre;
      }
    });
    return {
      total,
      genres: vizData.genres.length,
      avgEnergy,
      avgValence,
      topGenre,
      showing: selectedGenres.length
    };
  }, [vizData, selectedGenres]);

  const runLoad = () => {
    setLoading(true);
    setActiveTrack(null);
    setProgress('Generating synthetic Spotify dataset...');

    window.setTimeout(() => {
      setProgress('Computing UMAP and t-SNE projection maps...');
      window.setTimeout(() => {
        const generated = generateData(25000);
        setVizData(generated);
        setSelectedGenres(generated.genres);
        setLoading(false);
        setProgress('Visualization ready');
      }, 350);
    }, 350);
  };

  useEffect(() => {
    if (!vizData) runLoad();
  }, [vizData]);

  useEffect(() => {
    if (!vizData || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const points = vizMode === 'umap' ? vizData.umap : vizData.tsne;
    const xMin = Math.min(...points.map((p) => p[0]));
    const xMax = Math.max(...points.map((p) => p[0]));
    const yMin = Math.min(...points.map((p) => p[1]));
    const yMax = Math.max(...points.map((p) => p[1]));

    ctx.fillStyle = '#060d19';
    ctx.fillRect(0, 0, width, height);

    const pad = 44;
    const inGenre = new Set(selectedGenres);

    for (let i = 0; i < points.length; i += 1) {
      const track = vizData.tracks[i];
      if (!inGenre.has(track.track_genre)) continue;
      const px = ((points[i][0] - xMin) / (xMax - xMin || 1)) * (width - pad * 2) + pad;
      const py = ((points[i][1] - yMin) / (yMax - yMin || 1)) * (height - pad * 2) + pad;
      const color = colorForTrack(track, colorMode, vizData.genres);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(px, py, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = '#f1f6ff';
    ctx.font = '600 24px var(--font-work), sans-serif';
    ctx.fillText(`${vizMode.toUpperCase()} • ${selectedGenres.length}/${vizData.genres.length} genres`, 18, 34);
    ctx.font = '400 14px var(--font-work), sans-serif';
    ctx.fillStyle = '#98a8c0';
    ctx.fillText(`Color: ${colorMode} • Visible tracks: ${vizData.tracks.filter((t) => inGenre.has(t.track_genre)).length.toLocaleString()}`, 18, 58);
  }, [vizData, vizMode, colorMode, selectedGenres]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) => {
      if (prev.includes(genre)) return prev.filter((g) => g !== genre);
      return [...prev, genre];
    });
  };

  const onCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!vizData || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clickX = ((event.clientX - rect.left) / rect.width) * canvas.width;
    const clickY = ((event.clientY - rect.top) / rect.height) * canvas.height;

    const points = vizMode === 'umap' ? vizData.umap : vizData.tsne;
    const xMin = Math.min(...points.map((p) => p[0]));
    const xMax = Math.max(...points.map((p) => p[0]));
    const yMin = Math.min(...points.map((p) => p[1]));
    const yMax = Math.max(...points.map((p) => p[1]));
    const pad = 44;

    const inGenre = new Set(selectedGenres);
    let minDist = Infinity;
    let bestIdx = -1;

    for (let i = 0; i < points.length; i += 1) {
      if (!inGenre.has(vizData.tracks[i].track_genre)) continue;
      const px = ((points[i][0] - xMin) / (xMax - xMin || 1)) * (canvas.width - pad * 2) + pad;
      const py = ((points[i][1] - yMin) / (yMax - yMin || 1)) * (canvas.height - pad * 2) + pad;
      const dx = px - clickX;
      const dy = py - clickY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < minDist && dist < 18) {
        minDist = dist;
        bestIdx = i;
      }
    }

    if (bestIdx >= 0) setActiveTrack(vizData.tracks[bestIdx]);
  };

  const downloadImage = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `spotify-${vizMode}-${colorMode}.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  return (
    <section className="viz-shell detail-panel reveal">
      <div className="viz-top">
        <div>
          <h2 className="section-title" style={{ marginTop: 0 }}>Spotify Audio Universe Visualizer</h2>
          <p className="hero-copy" style={{ maxWidth: 'none' }}>
            Explore a 25,000-track research set across 30 genres. Switch UMAP and t-SNE, filter genre islands, inspect points, and export
            publication-ready PNG snapshots.
          </p>
        </div>
        <div className="viz-buttons">
          <button type="button" className="btn" onClick={runLoad}>Regenerate Data</button>
          <button type="button" className="btn" onClick={downloadImage} disabled={!vizData}>Download PNG</button>
        </div>
      </div>

      {loading ? <p className="viz-loading">{progress}</p> : null}

      {stats ? (
        <div className="viz-stats">
          <div className="viz-stat"><span>Total Tracks</span><strong>{stats.total.toLocaleString()}</strong></div>
          <div className="viz-stat"><span>Genres</span><strong>{stats.genres}</strong></div>
          <div className="viz-stat"><span>Avg Energy</span><strong>{stats.avgEnergy.toFixed(3)}</strong></div>
          <div className="viz-stat"><span>Avg Valence</span><strong>{stats.avgValence.toFixed(3)}</strong></div>
          <div className="viz-stat"><span>Top Genre</span><strong>{stats.topGenre}</strong></div>
        </div>
      ) : null}

      <div className="viz-controls">
        <div className="viz-control-group">
          <span className="viz-control-label">Projection</span>
          <button type="button" className={`btn ${vizMode === 'umap' ? 'btn-primary' : ''}`} onClick={() => setVizMode('umap')}>UMAP</button>
          <button type="button" className={`btn ${vizMode === 'tsne' ? 'btn-primary' : ''}`} onClick={() => setVizMode('tsne')}>t-SNE</button>
        </div>
        <div className="viz-control-group">
          <span className="viz-control-label">Color</span>
          {(['genre', 'valence', 'energy', 'popularity'] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              className={`btn ${colorMode === mode ? 'btn-primary' : ''}`}
              onClick={() => setColorMode(mode)}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {vizData ? (
        <>
          <div className="viz-genre-controls">
            <button type="button" className="btn" onClick={() => setSelectedGenres(vizData.genres)}>Select All</button>
            <button type="button" className="btn" onClick={() => setSelectedGenres([])}>Clear</button>
            <p className="viz-genre-label">Genre Filter ({selectedGenres.length}/{vizData.genres.length})</p>
          </div>
          <div className="viz-chip-wrap">
            {vizData.genres.map((genre) => (
              <button
                type="button"
                key={genre}
                className={`viz-chip ${selectedGenres.includes(genre) ? 'is-on' : ''}`}
                onClick={() => toggleGenre(genre)}
              >
                {genre} ({vizData.genreCounts[genre]})
              </button>
            ))}
          </div>
        </>
      ) : null}

      <div className="viz-canvas-wrap">
        <canvas ref={canvasRef} width={1600} height={900} className="viz-canvas" onClick={onCanvasClick} />
      </div>

      {activeTrack ? (
        <section className="viz-track-card">
          <h3>Track Inspector</h3>
          <p><strong>{activeTrack.track_name}</strong> by {activeTrack.artists}</p>
          <p>
            Genre: {activeTrack.track_genre} • Popularity: {activeTrack.popularity} • Tempo: {activeTrack.tempo.toFixed(0)} BPM
          </p>
          <p>
            Energy {activeTrack.energy.toFixed(2)} • Valence {activeTrack.valence.toFixed(2)} • Danceability {activeTrack.danceability.toFixed(2)}
          </p>
        </section>
      ) : null}
    </section>
  );
}
