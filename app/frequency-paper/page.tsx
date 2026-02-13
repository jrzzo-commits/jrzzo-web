import type { Metadata } from 'next';
import Link from 'next/link';
import BrandLogo from '../../components/brand-logo';
import FrequencyPaperPrintButton from './print-button';

export const metadata: Metadata = {
  title: 'Frequency Paper',
  description: 'The Frequency Atlas: Mapping the Electromagnetic Architecture of Human Consciousness.'
};

export default function FrequencyPaperPage() {
  return (
    <div className="page-theme page-theme-research-hub frequency-whitepaper-page">
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
            <Link href="/research" className="nav-link">Research</Link>
            <Link href="/frequency-atlas-visualizer" className="nav-link">Open Visualizer</Link>
            <a href="/research/frequency-atlas-research-paper.pdf" download="frequency-atlas-research-paper.pdf" className="nav-link">
              Download PDF
            </a>
          </div>
        </div>
      </header>

      <main className="main frequency-whitepaper-shell">
        <section className="frequency-whitepaper-hero reveal">
          <p className="frequency-whitepaper-badge">Systematic Review • 156 Studies • 17,000+ Participants</p>
          <h1 className="frequency-whitepaper-title">The Frequency Atlas</h1>
          <p className="frequency-whitepaper-subtitle">Mapping the Electromagnetic Architecture of Human Consciousness</p>
          <p className="frequency-whitepaper-meta">J. Rizzo • February 2026</p>
          <div className="actions no-print" style={{ marginTop: '1rem' }}>
            <FrequencyPaperPrintButton />
            <a href="/research/frequency-atlas-research-paper.pdf" download="frequency-atlas-research-paper.pdf" className="btn btn-primary">
              Download PDF
            </a>
            <Link href="/research" className="btn">Back to Research</Link>
          </div>
        </section>

        <article className="frequency-whitepaper-paper">
          <section className="frequency-whitepaper-section" id="abstract">
            <h2>Abstract</h2>
            <div className="frequency-whitepaper-abstract">
              <p>
                <strong>Background:</strong> Human consciousness arises from complex neurophysiological processes, yet no unified
                framework exists for understanding how diverse interventions, from ancient contemplative practices to modern
                neurotechnologies, modulate conscious states.
              </p>
              <p>
                <strong>Methods:</strong> We conducted a comprehensive systematic review of peer-reviewed literature (1990-2025)
                examining brainwave modulation across intervention types including meditation, binaural beats, transcranial
                magnetic stimulation (TMS), vagus nerve stimulation (VNS), transcranial photobiomodulation (tPBM),
                psychedelics, neurofeedback, heart coherence training, and sound therapy. Final analysis included 156 studies
                with over 17,000 participants.
              </p>
              <p>
                <strong>Results:</strong> Effective interventions converge around repetitive entrainment that induces
                frequency-specific neuroplastic changes. Five reproducible frequency bands map to conscious states: Delta
                (0.5-4 Hz), Theta (4-8 Hz), Alpha (8-13 Hz), Beta (13-30 Hz), and Gamma (30-100 Hz). Optimal function
                requires coherence across cardiac, respiratory, and neural oscillations, with the heart&apos;s electromagnetic field
                acting as a system-wide synchronizer.
              </p>
              <p>
                <strong>Conclusions:</strong> Findings support a model where consciousness is fundamentally electromagnetic, with
                neurons operating as antennae for coherent field states. This unified synthesis has immediate clinical
                implications and points to combination protocols capable of dramatically accelerating state transitions.
              </p>
              <p className="frequency-whitepaper-keywords">
                <strong>Keywords:</strong> brainwave entrainment, consciousness modulation, electromagnetic coherence,
                neurotechnology, meditation, TMS, photobiomodulation, heart-brain coupling.
              </p>
            </div>
          </section>

          <section className="frequency-whitepaper-section">
            <h2>1. Introduction</h2>
            <h3>1.1 The Problem: Fragmented Understanding</h3>
            <p>
              Consciousness research has evolved in silos: contemplative traditions, clinical neuroscience, consumer wellness,
              and psychedelic science. Fragmentation drives redundant discovery, misses cross-domain synergies, and creates
              public confusion around what is evidence-based.
            </p>
            <h3>1.2 The Opportunity: Convergent Evidence</h3>
            <p>
              Advances in EEG and MEG now permit real-time tracking of oscillatory changes across interventions. When these
              findings are analyzed together, common mechanisms emerge with remarkable consistency.
            </p>
            <div className="frequency-whitepaper-callout key-insight">
              <p className="frequency-whitepaper-callout-title">Key Observation</p>
              <p>
                Convergence across disciplines suggests a shared electromagnetic mechanism underlying meditation,
                neuromodulation, and state-change technologies.
              </p>
            </div>
            <h3>1.3 Electromagnetic Coherence Theory</h3>
            <ul>
              <li><strong>Cellular:</strong> Mitochondrial oscillations and gap-junction coupling.</li>
              <li><strong>Local:</strong> Neural ensemble synchronization in cortical columns.</li>
              <li><strong>Regional:</strong> Cross-frequency coupling across distributed networks.</li>
              <li><strong>Global:</strong> Whole-brain coherence with heart-brain entrainment.</li>
              <li><strong>Interpersonal/Planetary:</strong> Field-level coupling with social and environmental rhythms.</li>
            </ul>
            <div className="frequency-whitepaper-callout hypothesis">
              <p className="frequency-whitepaper-callout-title">Central Hypothesis</p>
              <p>
                Conscious states correspond to multi-scale electromagnetic coherence patterns that can be systematically
                modulated through frequency-targeted protocols.
              </p>
            </div>
          </section>

          <section className="frequency-whitepaper-section" id="findings">
            <h2>2. Brainwave Frequency Bands</h2>
            <div className="frequency-whitepaper-band-grid">
              <article className="frequency-whitepaper-band delta">
                <h4>Delta <span>0.5-4 Hz</span></h4>
                <p><strong>Functions:</strong> Deep sleep, healing, regeneration.</p>
                <p><strong>Clinical:</strong> Sleep disorders, chronic pain.</p>
              </article>
              <article className="frequency-whitepaper-band theta">
                <h4>Theta <span>4-8 Hz</span></h4>
                <p><strong>Functions:</strong> REM sleep, creativity, memory access.</p>
                <p><strong>Clinical:</strong> PTSD, creative cognition protocols.</p>
              </article>
              <article className="frequency-whitepaper-band alpha">
                <h4>Alpha <span>8-13 Hz</span></h4>
                <p><strong>Functions:</strong> Relaxed focus, meditation entry.</p>
                <p><strong>Clinical:</strong> Anxiety regulation, performance stability.</p>
              </article>
              <article className="frequency-whitepaper-band beta">
                <h4>Beta <span>13-30 Hz</span></h4>
                <p><strong>Functions:</strong> Active cognition, task execution.</p>
                <p><strong>Clinical:</strong> ADHD and cognitive training.</p>
              </article>
              <article className="frequency-whitepaper-band gamma">
                <h4>Gamma <span>30-100 Hz</span></h4>
                <p><strong>Functions:</strong> Peak awareness, perceptual binding.</p>
                <p><strong>Clinical:</strong> Alzheimer&apos;s and advanced meditation studies.</p>
              </article>
            </div>
          </section>

          <section className="frequency-whitepaper-section">
            <h2>3. Systematic Review: Key Findings</h2>
            <h3>3.1 Meditation &amp; Contemplative Practices</h3>
            <p><span className="frequency-whitepaper-evidence gold">Gold Evidence</span> 28 studies • 1,847 participants • d = 0.8</p>
            <p>
              Long-term practice is associated with elevated high-frequency gamma synchrony, robust alpha stabilization, and
              state-dependent theta modulation. Clinical effects are strong for anxiety, depression, and performance.
            </p>

            <h3>3.2 TMS / Theta Burst Stimulation</h3>
            <p><span className="frequency-whitepaper-evidence gold">Gold Evidence</span> 22 studies • 3,456 participants • d = 0.9</p>
            <p>
              Rhythmic protocols can entrain alpha and theta dynamics with high precision, yielding durable plasticity through
              NMDA/BDNF-linked pathways.
            </p>

            <h3>3.3 Transcranial Photobiomodulation</h3>
            <p><span className="frequency-whitepaper-evidence silver">Silver Evidence</span> 19 studies • 743 participants • d = 0.7</p>
            <p>
              Pulsed near-infrared stimulation, especially at 40 Hz, modulates broad-band oscillatory activity and may support
              improved cognitive and emotional regulation outcomes.
            </p>

            <h3>3.4 Psychedelics</h3>
            <p><span className="frequency-whitepaper-evidence gold">Gold Evidence</span> 17 studies • 687 participants • d = 1.2</p>
            <p>
              Psychedelics uniquely reduce top-down coherence, enabling therapeutic flexibility in conditions characterized by
              rigid cognitive priors.
            </p>

            <h3>3.5 Heart Coherence Training</h3>
            <p><span className="frequency-whitepaper-evidence silver">Silver Evidence</span> 12 studies • 1,456 participants • d = 0.7</p>
            <p>
              Cardiac rhythms demonstrate strong coupling with neural dynamics, supporting the model that heart-field coherence
              can shape system-wide state regulation.
            </p>

            <h3>3.6 Intervention Comparison</h3>
            <div className="frequency-whitepaper-table-wrap">
              <table className="frequency-whitepaper-table">
                <thead>
                  <tr>
                    <th>Intervention</th>
                    <th>Evidence</th>
                    <th>Effect Size</th>
                    <th>Safety</th>
                    <th>Cost</th>
                    <th>Access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Meditation</td><td>Gold</td><td>d = 0.8</td><td>Excellent</td><td>$</td><td>Universal</td></tr>
                  <tr><td>Binaural Beats</td><td>Silver</td><td>d = 0.5</td><td>Excellent</td><td>$</td><td>Universal</td></tr>
                  <tr><td>TMS / TBS</td><td>Gold</td><td>d = 0.9</td><td>Good</td><td>$$$$$</td><td>Clinical</td></tr>
                  <tr><td>VNS</td><td>Gold</td><td>d = 0.8</td><td>Moderate</td><td>$$$$$</td><td>Clinical</td></tr>
                  <tr><td>tPBM</td><td>Silver</td><td>d = 0.7</td><td>Excellent</td><td>$$</td><td>Consumer</td></tr>
                  <tr><td>Psychedelics</td><td>Gold</td><td>d = 1.2</td><td>Moderate*</td><td>$</td><td>Restricted</td></tr>
                  <tr><td>Neurofeedback</td><td>Gold</td><td>d = 0.8</td><td>Excellent</td><td>$$$</td><td>Clinical / Consumer</td></tr>
                  <tr><td>Heart Coherence</td><td>Silver</td><td>d = 0.7</td><td>Excellent</td><td>$</td><td>Universal</td></tr>
                </tbody>
              </table>
            </div>
            <p className="frequency-whitepaper-note">*Requires screening and professional support.</p>
          </section>

          <section className="frequency-whitepaper-section" id="framework">
            <h2>4. Unified Mechanistic Framework</h2>
            <h3>4.1 Electromagnetic Coherence Model</h3>
            <ol>
              <li><strong>Neurons as antennae:</strong> Biophysical emitters and receivers of electromagnetic fields.</li>
              <li><strong>Coherence as binding:</strong> Synchrony integrates distributed information into unified awareness.</li>
              <li><strong>Timescale hierarchy:</strong> Slow-wave phase gates fast-wave amplitude.</li>
              <li><strong>Heart as pacemaker:</strong> Cardiac field contributes a system-level synchronizing signal.</li>
              <li><strong>Environmental resonance:</strong> Nervous systems may couple with geophysical frequencies.</li>
            </ol>
            <div className="frequency-whitepaper-callout">
              <p className="frequency-whitepaper-callout-title">Universal Mechanism</p>
              <p className="frequency-whitepaper-equation">
                External Periodic Stimulus → Frequency Following Response → Neural Entrainment → Repeated Exposure →
                Synaptic Plasticity → Lasting Structural Change
              </p>
            </div>
          </section>

          <section className="frequency-whitepaper-section" id="clinical">
            <h2>5. Clinical Applications</h2>
            <h3>Evidence-Based Protocols by Condition</h3>
            <h4>Depression</h4>
            <ul>
              <li>First-line: alpha-asymmetry neurofeedback with heart coherence.</li>
              <li>Treatment-resistant: accelerated TBS over DLPFC plus taVNS.</li>
              <li>Rapid intervention: psychedelic-assisted therapy in regulated settings.</li>
            </ul>
            <h4>Anxiety</h4>
            <ul>
              <li>Alpha enhancement plus HRV/heart coherence training.</li>
              <li>Targeted alpha/theta protocols alongside CBT.</li>
            </ul>
            <h4>Peak Performance</h4>
            <ul>
              <li>Alpha/theta protocols for flow and recovery cycles.</li>
              <li>Beta-focused blocks for sustained task performance.</li>
            </ul>
          </section>

          <section className="frequency-whitepaper-section">
            <h2>6. Conclusions</h2>
            <ol>
              <li>Effective interventions share entrainment-driven neuroplastic pathways.</li>
              <li>Consciousness organizes across five recurrent oscillatory bands.</li>
              <li>Multi-scale coherence predicts stable cognitive and emotional performance.</li>
              <li>Heart-brain coupling is central to system-wide regulation.</li>
              <li>Ancient and modern protocols converge on parallel mechanisms.</li>
            </ol>
            <div className="frequency-whitepaper-callout key-insight">
              <p className="frequency-whitepaper-callout-title">The Path Forward</p>
              <p>
                Mental health and human performance improve when contemplative practices and modern neurotechnology are treated
                as complementary tools grounded in shared electrophysiological principles.
              </p>
            </div>
          </section>

          <section className="frequency-whitepaper-section">
            <h2>7. Selected References</h2>
            <p className="frequency-whitepaper-note">Complete bibliography (150+ citations) available in supplementary materials.</p>
            <ul className="frequency-whitepaper-references">
              <li>Lutz, A., et al. (2004). Long-term meditators self-induce high-amplitude gamma synchrony. <em>PNAS</em>.</li>
              <li>Blumberger, D. M., et al. (2018). Theta burst vs high-frequency rTMS in depression. <em>Lancet</em>.</li>
              <li>Zomorrodi, R., et al. (2019). Pulsed near-infrared photobiomodulation modulates neural oscillations. <em>NeuroImage</em>.</li>
              <li>Carhart-Harris, R. L., et al. (2016). Neural correlates of LSD revealed by multimodal neuroimaging. <em>PNAS</em>.</li>
              <li>McCraty, R., et al. (2009). Heart-brain interactions and psychophysiological coherence. <em>Integral Review</em>.</li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}
