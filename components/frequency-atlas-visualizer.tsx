'use client';

import { useMemo, useState } from 'react';
import {
  COMBINATION_PROTOCOLS,
  FREQUENCY_BANDS,
  INTERVENTIONS,
  type Intervention
} from '../lib/frequency-atlas-data';

type Category = 'all' | Intervention['category'];

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'meditation', label: 'Meditation' },
  { value: 'sound', label: 'Sound' },
  { value: 'electromagnetic', label: 'Electromagnetic' },
  { value: 'neuromodulation', label: 'Neuromodulation' },
  { value: 'pharmacological', label: 'Pharmacological' },
  { value: 'physiological', label: 'Physiological' }
];

function effectToAfter(change: string, magnitude: string) {
  const map: Record<string, number> = { small: 12, medium: 22, large: 34 };
  const delta = map[magnitude] ?? 12;
  if (change === 'increase') return Math.min(92, 50 + delta);
  if (change === 'decrease') return Math.max(8, 50 - delta);
  return 62;
}

export default function FrequencyAtlasVisualizer() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('all');
  const [selectedId, setSelectedId] = useState<string>(INTERVENTIONS[0]?.id ?? '');

  const filtered = useMemo(() => {
    return INTERVENTIONS.filter((item) => {
      const byCategory = category === 'all' || item.category === category;
      const q = query.trim().toLowerCase();
      const byQuery =
        q.length === 0 ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.keyFindings.some((k) => k.toLowerCase().includes(q));
      return byCategory && byQuery;
    });
  }, [query, category]);

  const selected = useMemo(() => {
    return INTERVENTIONS.find((item) => item.id === selectedId) ?? filtered[0] ?? INTERVENTIONS[0] ?? null;
  }, [selectedId, filtered]);

  const bandRows = useMemo(() => {
    if (!selected) return [];
    return Object.entries(FREQUENCY_BANDS).map(([key, band]) => {
      const effect = selected.frequencyEffects.find((entry) => entry.band === key);
      return {
        key,
        name: band.name,
        range: band.range,
        color: band.color,
        before: 50,
        after: effect ? effectToAfter(effect.change, effect.magnitude) : 50,
        change: effect?.change ?? 'none',
        magnitude: effect?.magnitude ?? 'none'
      };
    });
  }, [selected]);

  return (
    <div className="atlas-shell">
      <div className="atlas-controls">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="atlas-search"
          placeholder="Search interventions"
        />
        <div className="atlas-categories">
          {categories.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setCategory(item.value)}
              className={`atlas-chip ${category === item.value ? 'is-on' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="atlas-grid">
        <aside className="atlas-list">
          {filtered.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`atlas-item ${selected?.id === item.id ? 'is-selected' : ''}`}
              onClick={() => setSelectedId(item.id)}
            >
              <strong>{item.name}</strong>
              <span>{item.evidence.studyCount} studies • d={item.evidence.effectSize.toFixed(2)}</span>
              <small>{item.category}</small>
            </button>
          ))}
        </aside>

        <section className="atlas-detail">
          {!selected ? (
            <p className="atlas-empty">No intervention matches the current filter.</p>
          ) : (
            <>
              <h3>{selected.name}</h3>
              <p>{selected.description}</p>

              <div className="atlas-meta">
                <span>Evidence: {selected.evidence.quality}</span>
                <span>Participants: {selected.evidence.participants.toLocaleString()}</span>
                <span>Time: {selected.timeInvestment}</span>
                <span>Safety: {selected.safety}</span>
              </div>

              <div className="atlas-bands">
                {bandRows.map((band) => (
                  <div key={band.key} className="atlas-band-row">
                    <div className="atlas-band-label">
                      <strong>{band.name}</strong>
                      <span>{band.range}</span>
                    </div>
                    <div className="atlas-band-bars">
                      <div className="atlas-bar-track">
                        <div className="atlas-bar before" style={{ width: `${band.before}%` }} />
                      </div>
                      <div className="atlas-bar-track">
                        <div className="atlas-bar after" style={{ width: `${band.after}%`, background: band.color }} />
                      </div>
                    </div>
                    <div className="atlas-band-status">
                      {band.change !== 'none' ? `${band.change} (${band.magnitude})` : 'no shift'}
                    </div>
                  </div>
                ))}
              </div>

              <div className="atlas-findings">
                <h4>Key Findings</h4>
                <ul>
                  {selected.keyFindings.slice(0, 5).map((finding) => (
                    <li key={finding}>{finding}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </section>
      </div>

      <section className="atlas-protocols">
        <h4>Combination Protocols</h4>
        <div className="atlas-protocol-grid">
          {COMBINATION_PROTOCOLS.map((protocol) => (
            <article key={protocol.name} className="atlas-protocol-card">
              <strong>{protocol.name}</strong>
              <p>{protocol.description}</p>
              <p className="atlas-protocol-line">{protocol.protocol}</p>
              <span>Synergy: {protocol.synergy.toFixed(2)}x</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
