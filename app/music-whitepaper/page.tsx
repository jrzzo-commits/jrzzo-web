import Link from 'next/link';
import BrandLogo from '../../components/brand-logo';
import PrintButton from './print-button';

const featureRows = [
  ['Danceability', '[0, 1]', 'Rhythmic stability, beat strength, regularity'],
  ['Energy', '[0, 1]', 'Perceptual intensity and activity measure'],
  ['Loudness', '[-60, 0] dB', 'Overall amplitude of track'],
  ['Speechiness', '[0, 1]', 'Presence of spoken words'],
  ['Acousticness', '[0, 1]', 'Confidence measure of acoustic instrumentation'],
  ['Instrumentalness', '[0, 1]', 'Predicts absence of vocals'],
  ['Liveness', '[0, 1]', 'Presence of audience in recording'],
  ['Valence', '[0, 1]', 'Musical positiveness/happiness'],
  ['Tempo', '[80, 180] BPM', 'Overall estimated tempo']
];

const genreDistanceRows = [
  ['Lo-fi ↔ Ambient', '0.82', 'Low energy, high instrumentalness'],
  ['Classical ↔ Acoustic', '1.15', 'High acousticness, low speechiness'],
  ['Techno ↔ House', '1.28', 'High energy, high danceability'],
  ['Hip-Hop ↔ R&B', '1.41', 'High speechiness, moderate valence'],
  ['EDM ↔ Classical', '12.4', 'Maximally dissimilar']
];

const qualityRows = [
  ['UMAP', '0.89', 'Excellent local preservation'],
  ['t-SNE', '0.91', 'Excellent local preservation']
];

const comparisonRows = [
  ['Theoretical Basis', 'Riemannian geometry', 'Probability distributions'],
  ['Global Structure', 'Better preserved (ρ=0.62)', 'Sacrificed (ρ=0.41)'],
  ['Local Structure', 'Excellent (T=0.89)', 'Excellent (T=0.91)'],
  ['Cluster Separation', 'Moderate (DB=1.24)', 'Strong (DB=1.08)'],
  ['Computational Speed', 'Faster (30-60s)', 'Slower (45-90s)'],
  ['Stability', 'More deterministic', 'Higher variability']
];

const references = [
  'McInnes, L., Healy, J., & Melville, J. (2018). UMAP: Uniform Manifold Approximation and Projection for Dimension Reduction. arXiv preprint arXiv:1802.03426.',
  'Van der Maaten, L., & Hinton, G. (2008). Visualizing data using t-SNE. Journal of Machine Learning Research, 9(11), 2579-2605.',
  'Spotify for Developers. (2024). Web API Reference: Audio Features. https://developer.spotify.com/documentation/web-api/reference/get-audio-features',
  'Pandya, M. (2023). Spotify Tracks Dataset [Data set]. Kaggle. https://www.kaggle.com/datasets/maharshipandya/-spotify-tracks-dataset',
  'Bogdanov, D., Porter, A., Herrera, P., & Serra, X. (2019). AcousticBrainz platform. ISMIR Proceedings, 475-481.',
  'Schedl, M., Knees, P., McFee, B., & Bogdanov, D. (2022). Music Recommendation Systems. Springer.',
  'Sturm, B. L. (2014). Determining if a MIR system is a horse. IEEE Transactions on Multimedia, 16(6), 1636-1644.',
  'Müller, M. (2015). Fundamentals of Music Processing. Springer.',
  'Casey, M. A., et al. (2008). Content-based music information retrieval directions. Proceedings of the IEEE, 96(4), 668-696.',
  'Bertin-Mahieux, T., Ellis, D. P., Whitman, B., & Lamere, P. (2011). The Million Song Dataset. ISMIR Proceedings, 591-596.'
];

const notationRows = [
  ['x ∈ ℝ9', 'Track feature vector (9-dimensional)'],
  ['y ∈ ℝ2', 'Low-dimensional embedding (2D)'],
  ['n', 'Number of tracks (25,000)'],
  ['k', 'Number of genres (30)'],
  ['d(xi, xj)', 'Euclidean distance between tracks i and j'],
  ['μj', 'Mean of feature j'],
  ['σj', 'Standard deviation of feature j'],
  ['pij', 'High-dimensional similarity probability (t-SNE)'],
  ['qij', 'Low-dimensional similarity probability (t-SNE)'],
  ['w(i,j)', 'Edge weight in UMAP graph'],
  ['∇L', 'Gradient of loss function'],
  ['η', 'Learning rate'],
  ['ρ', 'Spearman correlation coefficient']
];

export default function MusicWhitepaperPage() {
  return (
    <>
      <header className="site-header no-print">
        <div className="header-wrap">
          <BrandLogo />
          <div className="header-actions">
            <Link href="/" className="nav-link nav-home-link" aria-label="Home">
              <svg className="home-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 3.2 3.6 10v10.8h6.2v-6.7h4.4v6.7h6.2V10L12 3.2Zm0-2.2 10.8 8.8v13H12v-6.7h0v6.7H1.2v-13L12 1Z" />
              </svg>
              <span className="nav-home-text">Home</span>
            </Link>
            <Link href="/rzzodue" className="nav-link">Enter Drop</Link>
            <Link href="/whitepaper" className="nav-link">Rzzodue Whitepaper</Link>
          </div>
        </div>
      </header>

      <PrintButton />

      <main className="music-whitepaper-shell">
        <article className="music-whitepaper-paper">
          <header className="music-whitepaper-header">
            <h1 className="music-whitepaper-title">Visualizing Musical Similarity Through Dimensionality Reduction</h1>
            <p className="music-whitepaper-subtitle">A Computational Analysis of Spotify Audio Features Using UMAP and t-SNE</p>
            <p className="music-whitepaper-author">J. Rizzo</p>
            <p className="music-whitepaper-affiliation">Independent Researcher • Computational Musicology and Data Science</p>
            <p className="music-whitepaper-date">January 2026</p>
          </header>

          <section className="music-whitepaper-abstract">
            <h2>Abstract</h2>
            <p>
              This paper presents a comprehensive analysis of musical similarity patterns across 25,000 tracks spanning 30 distinct genres
              using dimensionality reduction techniques. By applying UMAP and t-SNE to Spotify&apos;s multi-dimensional audio feature space,
              we demonstrate that genres form geometrically distinct clusters in reduced dimensional space. Findings indicate strong statistical
              separation (MANOVA F≈142.7, p&lt;0.0001) with high trustworthiness scores (UMAP T=0.89, t-SNE T=0.91), supporting applications in
              recommendation, playlist generation, and computational musicology.
            </p>
          </section>

          <p className="music-whitepaper-keywords">
            <strong>Keywords:</strong> Music Information Retrieval, Dimensionality Reduction, UMAP, t-SNE, Audio Features, Genre Classification,
            Computational Musicology, Machine Learning
          </p>

          <section>
            <h2>1. Introduction</h2>
            <h3>1.1 Background and Motivation</h3>
            <p>
              Streaming and recommendation systems need robust similarity models that go beyond simple genre labels. Spotify audio analysis
              exposes high-dimensional descriptors that make quantitative study practical at scale.
            </p>
            <h3>1.2 Research Question</h3>
            <p>
              Can high-dimensional audio representations be projected into 2D while preserving local neighborhood structure and meaningful
              global genre relationships?
            </p>
            <h3>1.3 Contributions</h3>
            <ul>
              <li>Empirical validation that audio features encode significant genre structure.</li>
              <li>Comparative analysis of UMAP and t-SNE with quantitative quality metrics.</li>
              <li>Discovery of cross-genre relationships not captured by traditional taxonomy.</li>
              <li>Feature importance analysis identifying Energy and Acousticness as dominant discriminators.</li>
              <li>Practical guidance for recommendation and music discovery interfaces.</li>
            </ul>
          </section>

          <section>
            <h2>2. Methodology</h2>
            <h3>2.1 Dataset Construction</h3>
            <p>
              Balanced dataset of 25,000 tracks across 30 genres (approximately 833 tracks per genre), designed to support robust analysis
              with tractable processing.
            </p>
            <h3>2.2 Audio Feature Space</h3>
            <table className="music-whitepaper-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Range</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="music-whitepaper-caption">Table 1: Spotify Audio Features Specification</p>

            <h3>2.3 Data Preprocessing</h3>
            <p>Z-score standardization ensures equal feature contribution across distance computations.</p>
            <div className="music-whitepaper-equation">x&apos;ij = (xij - μj) / σj</div>

            <h3>2.4 UMAP Algorithm</h3>
            <p>
              UMAP builds a fuzzy manifold graph and optimizes a low-dimensional representation through attractive and repulsive forces,
              balancing local fidelity and readable global shape.
            </p>
            <div className="music-whitepaper-equation">w(i,j)sym = w(i,j) + w(j,i) - w(i,j)·w(j,i)</div>

            <h3>2.5 t-SNE Algorithm</h3>
            <p>
              t-SNE minimizes KL divergence between high-dimensional and low-dimensional probability distributions, with Student-t tails to
              reduce crowding.
            </p>
            <div className="music-whitepaper-equation">∂C/∂yi = 4 Σj (pij - qij)(yi - yj)(1 + ||yi - yj||²)^-1</div>
          </section>

          <section>
            <h2>3. Results and Analysis</h2>
            <h3>3.1 Cluster Formation Patterns</h3>
            <ul>
              <li><strong>High-Energy Cluster:</strong> EDM, techno, house, dubstep, trap, metal, punk.</li>
              <li><strong>Acoustic-Chill Cluster:</strong> classical, ambient, lo-fi, acoustic, folk.</li>
              <li><strong>Vocal-Centric Cluster:</strong> hip-hop, r&amp;b, soul, pop, k-pop.</li>
            </ul>

            <h3>3.2 Statistical Validation</h3>
            <p>MANOVA: F(261, 223,290) ≈ 142.7, p&lt;0.0001.</p>
            <table className="music-whitepaper-table">
              <thead>
                <tr>
                  <th>Genre Pair</th>
                  <th>D²</th>
                  <th>Shared Features</th>
                </tr>
              </thead>
              <tbody>
                {genreDistanceRows.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="music-whitepaper-caption">Table 2: Genre similarity measured by Mahalanobis distance</p>

            <h3>3.3 Feature Importance Analysis</h3>
            <ol>
              <li>Energy: 18.4%</li>
              <li>Acousticness: 16.7%</li>
              <li>Danceability: 14.5%</li>
              <li>Instrumentalness: 13.2%</li>
              <li>Speechiness: 12.1%</li>
              <li>Valence: 9.8%</li>
              <li>Loudness: 8.7%</li>
              <li>Tempo: 4.1%</li>
              <li>Liveness: 2.5%</li>
            </ol>

            <h3>3.4 Dimensionality Reduction Quality</h3>
            <table className="music-whitepaper-table">
              <thead>
                <tr>
                  <th>Algorithm</th>
                  <th>T(k)</th>
                  <th>Interpretation</th>
                </tr>
              </thead>
              <tbody>
                {qualityRows.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="music-whitepaper-caption">Table 3: Trustworthiness scores</p>

            <h3>3.5 UMAP vs t-SNE</h3>
            <table className="music-whitepaper-table">
              <thead>
                <tr>
                  <th>Criterion</th>
                  <th>UMAP</th>
                  <th>t-SNE</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="music-whitepaper-caption">Table 4: Comparative performance (n=25,000)</p>
            <aside className="music-whitepaper-note">
              <strong>Key finding:</strong> UMAP is stronger for global landscape exploration; t-SNE yields tighter local cluster separation.
            </aside>
          </section>

          <section>
            <h2>4. Applications</h2>
            <ul>
              <li><strong>Recommendation Systems:</strong> blend acoustic similarity with collaborative signals.</li>
              <li><strong>Gradient Playlists:</strong> generate smooth path-based transitions between states.</li>
              <li><strong>Data-Driven Taxonomy:</strong> infer acoustic macro/micro genres from clustering.</li>
              <li><strong>Musicology Research:</strong> track genre drift, artist consistency, and collaboration bridges.</li>
            </ul>
          </section>

          <section>
            <h2>5. Discussion</h2>
            <p>
              Results show meaningful structure in acoustic space while also highlighting that similarity in sound does not fully capture
              similarity in lived emotional meaning.
            </p>
            <div className="music-whitepaper-highlight">
              <strong>Philosophical note:</strong> Mathematics reveals structure in music, but human context gives that structure meaning.
            </div>
          </section>

          <section>
            <h2>6. Future Research Directions</h2>
            <ul>
              <li>Deep-learning embeddings from raw waveform encoders.</li>
              <li>Multi-modal fusion across audio, lyrics, visuals, and metadata.</li>
              <li>3D temporal visualizations for genre evolution.</li>
              <li>Cross-cultural feature robustness analysis.</li>
              <li>User-personalized embedding metrics.</li>
            </ul>
          </section>

          <section>
            <h2>7. Conclusions</h2>
            <ol>
              <li>Audio features encode statistically significant genre structure.</li>
              <li>Dimensionality reduction preserves meaningful neighborhood patterns.</li>
              <li>Cross-genre relationships emerge beyond taxonomy labels.</li>
              <li>Energy and Acousticness dominate discrimination power.</li>
              <li>UMAP and t-SNE serve complementary analytical roles.</li>
            </ol>
            <blockquote className="music-whitepaper-quote">Mathematics reveals structure, but humans give it meaning.</blockquote>
          </section>

          <section>
            <h2>References</h2>
            <ol className="music-whitepaper-references">
              {references.map((ref) => (
                <li key={ref}>{ref}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2>Appendix A: Mathematical Notation</h2>
            <table className="music-whitepaper-table">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                {notationRows.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2>Appendix B: Implementation Details</h2>
            <ul>
              <li><strong>Language:</strong> JavaScript ES6+ (browser-based)</li>
              <li><strong>Framework:</strong> React 18</li>
              <li><strong>Rendering:</strong> HTML5 Canvas API</li>
              <li><strong>Processing Time:</strong> 30-90 seconds for 25,000 tracks</li>
              <li><strong>Memory Usage:</strong> approximately 150MB</li>
            </ul>
            <p>
              Reproducibility note: the visualization and whitepaper are intended for direct web access with parameter toggles, genre filtering,
              and image export support.
            </p>
          </section>

          <footer className="music-whitepaper-footer">
            Spotify Audio Universe Project • Research by J. Rizzo • January 2026
          </footer>
        </article>
      </main>
    </>
  );
}
