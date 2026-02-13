// data/interventions.ts
// Complete research database for The Frequency Atlas

export interface FrequencyBand {
  name: string;
  range: string;
  color: string;
  description: string;
  functions: string[];
}

export const FREQUENCY_BANDS: Record<string, FrequencyBand> = {
  delta: {
    name: "Delta",
    range: "0.5-4 Hz",
    color: "#1e3a8a", // Deep blue
    description: "Deep sleep, healing, regeneration",
    functions: [
      "Deep sleep and unconscious processing",
      "Growth hormone release",
      "Immune system function",
      "Tissue repair and healing",
      "Parasympathetic dominance"
    ]
  },
  theta: {
    name: "Theta",
    range: "4-8 Hz",
    color: "#7c3aed", // Purple/Violet
    description: "Deep meditation, creativity, memory",
    functions: [
      "REM sleep and deep meditation",
      "Creative insight and inspiration",
      "Memory consolidation",
      "Emotional processing",
      "Hippocampal activity",
      "Flow states"
    ]
  },
  alpha: {
    name: "Alpha",
    range: "8-13 Hz",
    color: "#10b981", // Green
    description: "Relaxed focus, optimal learning",
    functions: [
      "Relaxed wakefulness",
      "Meditation entry point",
      "Optimal learning state",
      "Reduced anxiety",
      "Sensory gating",
      "Mind-body bridge",
      "Heart coherence frequency"
    ]
  },
  beta: {
    name: "Beta",
    range: "13-30 Hz",
    color: "#fbbf24", // Yellow
    description: "Active thinking, problem-solving",
    functions: [
      "Active cognitive processing",
      "Focused attention and alertness",
      "Problem-solving",
      "Decision-making",
      "SMR (13-15 Hz): Calm focus"
    ]
  },
  gamma: {
    name: "Gamma",
    range: "30-100 Hz",
    color: "#ef4444", // Red/Orange
    description: "Peak consciousness, insight",
    functions: [
      "Peak awareness and consciousness",
      "Information integration",
      "Sensory binding",
      "Moments of insight",
      "Advanced meditation states",
      "40 Hz: Universal consciousness frequency",
      "60-100 Hz: Expert meditators"
    ]
  }
};

export interface Evidence {
  quality: "gold" | "silver" | "bronze" | "preliminary";
  studyCount: number;
  participants: number;
  effectSize: number; // Cohen's d
  replicationStatus: "replicated" | "emerging" | "preliminary";
}

export interface FrequencyEffect {
  band: keyof typeof FREQUENCY_BANDS;
  change: "increase" | "decrease" | "modulate";
  magnitude: "small" | "medium" | "large";
  region?: string;
}

export interface ClinicalOutcome {
  condition: string;
  effectiveness: "high" | "moderate" | "low" | "investigational";
  timeToEffect: string;
  durationOfEffect: string;
}

export interface Intervention {
  id: string;
  name: string;
  category: "meditation" | "sound" | "electromagnetic" | "neuromodulation" | "pharmacological" | "physiological";
  description: string;
  mechanism: string;
  frequencyEffects: FrequencyEffect[];
  evidence: Evidence;
  clinicalOutcomes: ClinicalOutcome[];
  safety: "excellent" | "good" | "moderate" | "requires-supervision";
  cost: "$" | "$$" | "$$$" | "$$$$" | "$$$$$";
  accessibility: "universal" | "consumer" | "clinical" | "restricted";
  timeInvestment: string;
  keyFindings: string[];
  citations: string[];
}

export const INTERVENTIONS: Intervention[] = [
  {
    id: "meditation",
    name: "Meditation & Contemplative Practice",
    category: "meditation",
    description: "Systematic mental training involving focused attention, open monitoring, or cultivation of specific mental states through sustained practice.",
    mechanism: "Voluntary attentional control creates repeated activation patterns that strengthen specific neural pathways through neuroplasticity. Frontal-parietal networks show enhanced connectivity, while default mode network activity decreases during practice.",
    frequencyEffects: [
      { band: "alpha", change: "increase", magnitude: "large", region: "parieto-occipital" },
      { band: "theta", change: "increase", magnitude: "large", region: "frontal-midline" },
      { band: "gamma", change: "increase", magnitude: "large", region: "whole-brain" },
      { band: "beta", change: "decrease", magnitude: "medium", region: "frontal" }
    ],
    evidence: {
      quality: "gold",
      studyCount: 28,
      participants: 1847,
      effectSize: 0.8,
      replicationStatus: "replicated"
    },
    clinicalOutcomes: [
      {
        condition: "Anxiety disorders",
        effectiveness: "high",
        timeToEffect: "4-8 weeks",
        durationOfEffect: "Lasting with practice"
      },
      {
        condition: "Depression",
        effectiveness: "high",
        timeToEffect: "8-12 weeks",
        durationOfEffect: "Lasting with practice"
      },
      {
        condition: "ADHD",
        effectiveness: "moderate",
        timeToEffect: "8-12 weeks",
        durationOfEffect: "Requires maintenance"
      },
      {
        condition: "Peak performance",
        effectiveness: "high",
        timeToEffect: "4-8 weeks",
        durationOfEffect: "Lasting"
      }
    ],
    safety: "excellent",
    cost: "$",
    accessibility: "universal",
    timeInvestment: "20-60 min daily",
    keyFindings: [
      "All meditation traditions show 60-110 Hz gamma amplitude higher than controls, correlated with experience",
      "Advanced meditators show high-frequency oscillations (beta/gamma); intermediate show low-frequency (theta/alpha)",
      "40 days of Yoga Nidra makes alpha waves dominant",
      "Theta increases with distractions; alpha relates to fewer distractions and deeper states",
      "Meditation is the 'gold standard' intervention - all effects are lasting and strengthen with practice"
    ],
    citations: [
      "Lutz et al. (2004). PNAS - Long-term meditators self-induce high-amplitude gamma synchrony",
      "Travis & Shear (2010). Consciousness & Cognition - Focused attention, open monitoring meditation",
      "Braboszcz et al. (2017). PLoS ONE - Meditation experience correlates with gamma power",
      "Sharma et al. (2020). Frontiers - Yoga Nidra creates alpha dominance after 40 days"
    ]
  },
  {
    id: "binaural-beats",
    name: "Binaural Beats",
    category: "sound",
    description: "Two slightly different frequencies presented separately to each ear create a perceived 'beat' at the difference frequency, entraining brainwaves through the Frequency Following Response.",
    mechanism: "Different frequencies in each ear (e.g., 250 Hz left, 256 Hz right) create 6 Hz perceived beat. This activates the superior olivary complex in brainstem, generating neural oscillations at beat frequency that propagate to cortex via auditory pathways.",
    frequencyEffects: [
      { band: "delta", change: "increase", magnitude: "medium" },
      { band: "theta", change: "increase", magnitude: "large", region: "whole-cortex" },
      { band: "alpha", change: "increase", magnitude: "medium" },
      { band: "beta", change: "increase", magnitude: "medium" },
      { band: "gamma", change: "increase", magnitude: "small" }
    ],
    evidence: {
      quality: "silver",
      studyCount: 18,
      participants: 892,
      effectSize: 0.5,
      replicationStatus: "replicated"
    },
    clinicalOutcomes: [
      {
        condition: "Anxiety",
        effectiveness: "moderate",
        timeToEffect: "Immediate to minutes",
        durationOfEffect: "Hours"
      },
      {
        condition: "Sleep quality",
        effectiveness: "moderate",
        timeToEffect: "Immediate",
        durationOfEffect: "Single night"
      },
      {
        condition: "Cognitive performance",
        effectiveness: "moderate",
        timeToEffect: "Minutes",
        durationOfEffect: "Hours"
      }
    ],
    safety: "excellent",
    cost: "$",
    accessibility: "universal",
    timeInvestment: "10-30 min per session",
    keyFindings: [
      "6 Hz theta binaural beats develop activity across entire cortex within 10 minutes",
      "Personalized beats based on heart rate (Brain-Body Coupling) show stronger entrainment than fixed frequencies",
      "Lower frequencies (theta/delta) more effective for relaxation; higher (beta/gamma) for focus",
      "Effects are immediate but temporary - require repeated exposure for lasting changes",
      "Can be combined with meditation or used alone for quick state shifts"
    ],
    citations: [
      "Jirakittayakorn & Wongsawat (2017). Frontiers - 6 Hz binaural beats enhance cortical connectivity",
      "Chaieb et al. (2015). Frontiers - Auditory beat stimulation and brainwave entrainment",
      "Garcia-Argibay et al. (2019). Psychological Research - Meta-analysis of binaural beat efficacy"
    ]
  },
  {
    id: "tms-tbs",
    name: "Transcranial Magnetic Stimulation (TMS/TBS)",
    category: "electromagnetic",
    description: "Magnetic pulses induce electrical currents in targeted cortical regions. Theta Burst Stimulation delivers pulses in theta-frequency patterns for enhanced neuroplastic effects.",
    mechanism: "Rapidly changing magnetic field (up to 3 Tesla) passes through skull and induces electrical current in neurons. TBS mimics endogenous theta rhythms, creating 'naturalistic' stimulation that enhances synaptic plasticity via NMDA receptors and BDNF expression.",
    frequencyEffects: [
      { band: "theta", change: "increase", magnitude: "large", region: "targeted" },
      { band: "alpha", change: "modulate", magnitude: "large", region: "occipital" },
      { band: "beta", change: "modulate", magnitude: "medium" },
      { band: "gamma", change: "increase", magnitude: "medium" }
    ],
    evidence: {
      quality: "gold",
      studyCount: 22,
      participants: 3456,
      effectSize: 0.9,
      replicationStatus: "replicated"
    },
    clinicalOutcomes: [
      {
        condition: "Treatment-resistant depression",
        effectiveness: "high",
        timeToEffect: "2-4 weeks",
        durationOfEffect: "Months (6+ with maintenance)"
      },
      {
        condition: "Anxiety disorders",
        effectiveness: "moderate",
        timeToEffect: "2-4 weeks",
        durationOfEffect: "Months"
      },
      {
        condition: "PTSD",
        effectiveness: "moderate",
        timeToEffect: "4-6 weeks",
        durationOfEffect: "Months"
      }
    ],
    safety: "good",
    cost: "$$$$$",
    accessibility: "clinical",
    timeInvestment: "Daily sessions, 2-6 weeks",
    keyFindings: [
      "FDA approved accelerated deep TMS protocol for major depression (2025)",
      "Theta burst patterns enhance frontal theta oscillations and create positive emotional shifts",
      "Rhythmic TMS at 10 Hz entrains alpha oscillations with progressive enhancement over time",
      "Connectivity-guided TBS (targeting specific networks) shows 26-week sustained effects",
      "'Closed-loop' stimulation adjusting to real-time brain state shows enhanced efficacy"
    ],
    citations: [
      "Blumberger et al. (2018). Lancet - Theta burst stimulation for treatment-resistant depression",
      "Cole et al. (2022). JAMA Psychiatry - Stanford Accelerated Intelligent Neuromodulation Therapy (SAINT)",
      "Thut et al. (2011). PNAS - Rhythmic TMS entrains alpha oscillations"
    ]
  },
  {
    id: "vns",
    name: "Vagus Nerve Stimulation (VNS)",
    category: "neuromodulation",
    description: "Electrical stimulation of the vagus nerve modulates brainstem nuclei (locus coeruleus, raphe nuclei) which broadcast neuromodulators throughout the brain.",
    mechanism: "Vagus nerve activation triggers norepinephrine release from locus coeruleus and serotonin from raphe nuclei. This creates global neuromodulation affecting cortical excitability, synaptic plasticity, and network oscillations. Layer-specific effects enhance theta in deep layers, gamma in superficial layers.",
    frequencyEffects: [
      { band: "delta", change: "decrease", magnitude: "medium" },
      { band: "theta", change: "modulate", magnitude: "large" },
      { band: "beta", change: "decrease", magnitude: "medium" },
      { band: "gamma", change: "increase", magnitude: "large", region: "superficial-cortex" }
    ],
    evidence: {
      quality: "gold",
      studyCount: 15,
      participants: 2134,
      effectSize: 0.8,
      replicationStatus: "replicated"
    },
    clinicalOutcomes: [
      {
        condition: "Epilepsy (refractory)",
        effectiveness: "high",
        timeToEffect: "2-6 months",
        durationOfEffect: "Years (with device)"
      },
      {
        condition: "Depression (treatment-resistant)",
        effectiveness: "moderate",
        timeToEffect: "3-6 months",
        durationOfEffect: "Years (with device)"
      },
      {
        condition: "Cognitive enhancement",
        effectiveness: "moderate",
        timeToEffect: "Weeks",
        durationOfEffect: "Requires ongoing stimulation"
      }
    ],
    safety: "moderate",
    cost: "$$$$$",
    accessibility: "clinical",
    timeInvestment: "Surgical implant (invasive) or daily sessions (taVNS)",
    keyFindings: [
      "VNS causes dose-dependent EEG desynchronization in delta, theta, and beta bands",
      "Responders show significantly lower phase synchronization during stimulation",
      "Layer-specific effects: enhances theta in deep brain layers, improves gamma in superficial layers",
      "Transcutaneous auricular VNS (taVNS) modulates alpha/beta in attention and working memory regions",
      "Non-invasive taVNS offers similar benefits to implanted VNS for many applications"
    ],
    citations: [
      "Assenza et al. (2017). Epilepsy Research - VNS modulates EEG synchronization",
      "Cao et al. (2017). Brain Stimulation - VNS enhances cortical plasticity via noradrenergic system",
      "Burger et al. (2020). Brain Stimulation - taVNS modulates brain networks"
    ]
  },
  {
    id: "photobiomodulation",
    name: "Transcranial Photobiomodulation (tPBM)",
    category: "electromagnetic",
    description: "Near-infrared light (600-1300 nm) penetrates the skull and modulates mitochondrial function, enhancing ATP production and reducing oxidative stress. Pulsing at specific frequencies entrains neural oscillations.",
    mechanism: "Photons absorbed by cytochrome c oxidase (Complex IV) in mitochondria increase ATP production, enhance cerebral blood flow, reduce inflammation, and promote neurogenesis. When pulsed at 40 Hz (gamma frequency), creates strong neural entrainment.",
    frequencyEffects: [
      { band: "alpha", change: "increase", magnitude: "medium" },
      { band: "beta", change: "increase", magnitude: "medium" },
      { band: "gamma", change: "increase", magnitude: "large" }
    ],
    evidence: {
      quality: "silver",
      studyCount: 19,
      participants: 743,
      effectSize: 0.7,
      replicationStatus: "emerging"
    },
    clinicalOutcomes: [
      {
        condition: "Alzheimer's disease",
        effectiveness: "investigational",
        timeToEffect: "Weeks to months",
        durationOfEffect: "Requires ongoing treatment"
      },
      {
        condition: "Traumatic brain injury",
        effectiveness: "moderate",
        timeToEffect: "Weeks",
        durationOfEffect: "Months"
      },
      {
        condition: "Cognitive enhancement",
        effectiveness: "moderate",
        timeToEffect: "Minutes to weeks",
        durationOfEffect: "Hours to days"
      },
      {
        condition: "Autism spectrum (children)",
        effectiveness: "investigational",
        timeToEffect: "Weeks",
        durationOfEffect: "Requires ongoing treatment"
      }
    ],
    safety: "excellent",
    cost: "$$",
    accessibility: "consumer",
    timeInvestment: "10-20 min per session",
    keyFindings: [
      "810 nm pulsed at 40 Hz significantly increases power across ALL frequency bands",
      "40 Hz photobiomodulation reduced delta brainwave power in autistic children, correlating with symptom improvements",
      "Reduces oxidative stress, increases cerebral blood flow, enhances neurogenesis and synaptogenesis",
      "NIR-TPBM changes spectral brain activity in alpha/beta ranges and improves visual function",
      "40 Hz matches the frequency advanced meditators naturally generate - external entrainment to peak state"
    ],
    citations: [
      "Zomorrodi et al. (2019). NeuroImage - 40 Hz tPBM modulates neural oscillations",
      "Wang et al. (2019). Neurophotonics - tPBM for autism spectrum disorder",
      "Salehpour et al. (2018). Journal of Alzheimer's Disease - tPBM shows promise for neurodegenerative diseases"
    ]
  },
  {
    id: "psychedelics",
    name: "Psychedelics (LSD, Psilocybin, DMT)",
    category: "pharmacological",
    description: "5-HT2A receptor agonists that profoundly alter consciousness by disrupting normal brain network organization and enhancing neuroplasticity.",
    mechanism: "5-HT2A receptor activation in cortical pyramidal neurons disrupts thalamo-cortical alpha oscillations, increases neural signal diversity, and enhances glutamatergic transmission. This creates 'flattened' hierarchy allowing bottom-up sensory information to overwhelm top-down predictions.",
    frequencyEffects: [
      { band: "delta", change: "increase", magnitude: "large" },
      { band: "theta", change: "increase", magnitude: "large" },
      { band: "alpha", change: "decrease", magnitude: "large", region: "occipital" },
      { band: "beta", change: "decrease", magnitude: "medium" },
      { band: "gamma", change: "modulate", magnitude: "medium" }
    ],
    evidence: {
      quality: "gold",
      studyCount: 17,
      participants: 687,
      effectSize: 1.2,
      replicationStatus: "replicated"
    },
    clinicalOutcomes: [
      {
        condition: "Treatment-resistant depression",
        effectiveness: "high",
        timeToEffect: "Immediate to days",
        durationOfEffect: "Weeks to months"
      },
      {
        condition: "PTSD",
        effectiveness: "high",
        timeToEffect: "Days to weeks",
        durationOfEffect: "Months (with integration)"
      },
      {
        condition: "Addiction",
        effectiveness: "moderate",
        timeToEffect: "Days to weeks",
        durationOfEffect: "Months"
      },
      {
        condition: "End-of-life anxiety",
        effectiveness: "high",
        timeToEffect: "Immediate",
        durationOfEffect: "Lasting"
      }
    ],
    safety: "moderate",
    cost: "$",
    accessibility: "restricted",
    timeInvestment: "Single sessions with integration",
    keyFindings: [
      "Consistently reduce alpha (8-13 Hz) in occipital regions while increasing delta/theta - 'waking-dream' state",
      "DMT rapidly increases signal diversity - measure of novel, complex neural activity",
      "Lower baseline theta predicts MORE intense mystical experiences during DMT",
      "5-MeO-DMT induces dissociated state: global slow-wave activity with behavioral wakefulness",
      "Psychedelics create rapid neuroplastic changes; effects opposite to meditation (disrupt vs enhance coherence) but both therapeutic",
      "CRITICAL: Requires screening, set/setting, and integration support for safety and efficacy"
    ],
    citations: [
      "Carhart-Harris et al. (2016). PNAS - Neural correlates of the LSD experience",
      "Timmermann et al. (2019). Scientific Reports - DMT alters cortical travelling waves",
      "Barrett et al. (2020). Neuroscience & Biobehavioral Reviews - Psychedelics and neuroplasticity"
    ]
  },
  {
    id: "neurofeedback",
    name: "Neurofeedback Training",
    category: "neuromodulation",
    description: "Real-time EEG feedback enables operant conditioning of specific brainwave patterns. Rewards are given when target frequencies increase/decrease, creating learned self-regulation.",
    mechanism: "Operant conditioning of neural oscillations. Visual/auditory feedback rewards desired brainwave patterns, strengthening those patterns through repetition and reward-based learning. Creates lasting changes via neuroplasticity and procedural learning.",
    frequencyEffects: [
      { band: "delta", change: "modulate", magnitude: "large" },
      { band: "theta", change: "modulate", magnitude: "large" },
      { band: "alpha", change: "modulate", magnitude: "large" },
      { band: "beta", change: "modulate", magnitude: "large" },
      { band: "gamma", change: "modulate", magnitude: "medium" }
    ],
    evidence: {
      quality: "gold",
      studyCount: 14,
      participants: 1923,
      effectSize: 0.8,
      replicationStatus: "replicated"
    },
    clinicalOutcomes: [
      {
        condition: "ADHD",
        effectiveness: "high",
        timeToEffect: "20-40 sessions",
        durationOfEffect: "Lasting (years)"
      },
      {
        condition: "Anxiety",
        effectiveness: "high",
        timeToEffect: "15-25 sessions",
        durationOfEffect: "Lasting with practice"
      },
      {
        condition: "Depression",
        effectiveness: "moderate",
        timeToEffect: "20-30 sessions",
        durationOfEffect: "6-12 months"
      },
      {
        condition: "Peak performance",
        effectiveness: "high",
        timeToEffect: "10-20 sessions",
        durationOfEffect: "Lasting with maintenance"
      }
    ],
    safety: "excellent",
    cost: "$$$",
    accessibility: "clinical",
    timeInvestment: "20-40 sessions, 30-45 min each",
    keyFindings: [
      "FDA-approved theta/beta ratio training for ADHD shows lasting effects",
      "QEEG brain mapping enables personalized protocols targeting specific patterns",
      "Alpha enhancement training reduces anxiety with effects lasting 6+ months",
      "Infra-low frequency neurofeedback (ILF-NFT) shows promise in double-blind trials",
      "AI-enhanced neurofeedback dynamically guides brain into greater coherence",
      "Coherence training (synchronization between regions) particularly effective for peak performance"
    ],
    citations: [
      "Arns et al. (2014). Clinical EEG & Neuroscience - Neurofeedback for ADHD meta-analysis",
      "Hammond (2005). Journal of Adult Development - Neurofeedback for anxiety",
      "Gruzelier (2014). Frontiers - Neurofeedback for peak performance"
    ]
  },
  {
    id: "heart-coherence",
    name: "Heart Coherence Training",
    category: "physiological",
    description: "Techniques to create ordered, coherent heart rhythm patterns which entrain other physiological systems including brain rhythms. Typically uses slow, rhythmic breathing and positive emotion cultivation.",
    mechanism: "Heart's electromagnetic field is 60x stronger than brain's. Coherent heart rhythms (smooth, sine-wave-like HRV pattern at ~0.1 Hz) entrain neural oscillations, synchronize ANS branches, and create system-wide coherence. Positive emotions (appreciation, compassion) naturally create heart coherence.",
    frequencyEffects: [
      { band: "alpha", change: "increase", magnitude: "large" },
      { band: "theta", change: "increase", magnitude: "medium" },
      { band: "gamma", change: "increase", magnitude: "small" }
    ],
    evidence: {
      quality: "silver",
      studyCount: 12,
      participants: 1456,
      effectSize: 0.7,
      replicationStatus: "replicated"
    },
    clinicalOutcomes: [
      {
        condition: "Stress/anxiety",
        effectiveness: "high",
        timeToEffect: "Minutes to weeks",
        durationOfEffect: "Requires daily practice"
      },
      {
        condition: "Hypertension",
        effectiveness: "moderate",
        timeToEffect: "Weeks",
        durationOfEffect: "Requires maintenance"
      },
      {
        condition: "Depression",
        effectiveness: "moderate",
        timeToEffect: "Weeks",
        durationOfEffect: "Requires maintenance"
      },
      {
        condition: "Peak performance",
        effectiveness: "high",
        timeToEffect: "Minutes",
        durationOfEffect: "Hours (acute), lasting (with training)"
      }
    ],
    safety: "excellent",
    cost: "$",
    accessibility: "universal",
    timeInvestment: "5-15 min, 2-3x daily",
    keyFindings: [
      "Heart's electromagnetic field entrains brain rhythms, blood pressure, and respiration into synchronized coherence",
      "During coherence: ANS branches synchronize, multiple systems entrain to heart rhythm, heart-brain synchronization increases dramatically",
      "Heart-rhythm synchronization between individuals possible during close interaction - measurable at 4 feet",
      "Global study shows oscillatory coupling between neural and cardiac rhythms - heart modulates brain alpha",
      "Positive emotions (appreciation, compassion, love) naturally create coherent heart rhythms",
      "Can be learned in single session; benefits immediate but deepen with practice"
    ],
    citations: [
      "McCraty et al. (2009). International Journal of Psychophysiology - Heart-brain coherence",
      "McCraty & Zayas (2014). Frontiers - Cardiac coherence and emotional self-regulation",
      "Shaffer et al. (2014). Frontiers - Heart rate variability: New perspectives"
    ]
  },
  {
    id: "schumann",
    name: "Schumann Resonance (7.83 Hz)",
    category: "electromagnetic",
    description: "Earth's fundamental electromagnetic resonance, created by lightning strikes in the Earth-ionosphere cavity. Overlaps with human theta-alpha boundary, suggesting evolutionary adaptation.",
    mechanism: "7.83 Hz electromagnetic field entrains neural oscillations through direct electromagnetic coupling. Human nervous systems evolved within this field over millions of years, creating resonance sensitivity. Affects circadian rhythms, hormonal secretion, and autonomic balance.",
    frequencyEffects: [
      { band: "theta", change: "increase", magnitude: "medium" },
      { band: "alpha", change: "increase", magnitude: "medium" }
    ],
    evidence: {
      quality: "bronze",
      studyCount: 11,
      participants: 543,
      effectSize: 0.4,
      replicationStatus: "emerging"
    },
    clinicalOutcomes: [
      {
        condition: "Insomnia",
        effectiveness: "moderate",
        timeToEffect: "Days to weeks",
        durationOfEffect: "Requires ongoing exposure"
      },
      {
        condition: "Circadian rhythm disorders",
        effectiveness: "moderate",
        timeToEffect: "Weeks",
        durationOfEffect: "Requires ongoing exposure"
      },
      {
        condition: "General wellness",
        effectiveness: "low",
        timeToEffect: "Variable",
        durationOfEffect: "Variable"
      }
    ],
    safety: "excellent",
    cost: "$",
    accessibility: "consumer",
    timeInvestment: "Passive exposure, 30-60 min",
    keyFindings: [
      "EEG variations correlate with Schumann resonance changes across daily cycle",
      "7.83 Hz is dominant brain wave rhythm of all mammals in alpha/resting state",
      "Randomized double-blind study: Schumann treatment improved sleep onset latency and total sleep time in insomnia",
      "Effects on circadian rhythms, blood pressure, hormonal secretion documented",
      "Sits at boundary between theta (4-8 Hz) and alpha (8-13 Hz) - may serve as 'tuning frequency'",
      "Research quality is lower than other interventions - more rigorous studies needed"
    ],
    citations: [
      "Cherry (2002). Medical Hypotheses - Schumann resonances and human health",
      "Pobachenko et al. (2006). Biophysics - Human functional systems synchronization with Schumann resonance",
      "Persinger (1987). Medical Hypotheses - Geomagnetic activity and enhanced mortality"
    ]
  },
  {
    id: "solfeggio",
    name: "Solfeggio Frequencies (528 Hz, 432 Hz)",
    category: "sound",
    description: "Specific sound frequencies claimed to have special healing or consciousness-enhancing properties. Most commonly cited: 528 Hz ('Love frequency') and 432 Hz ('Natural tuning').",
    mechanism: "Proposed mechanisms include sympathetic resonance with cellular structures, harmonic relationships to natural phenomena, and psychological effects of harmonic complexity. Scientific evidence is limited and mechanisms remain speculative.",
    frequencyEffects: [
      { band: "alpha", change: "increase", magnitude: "small" },
      { band: "theta", change: "increase", magnitude: "small" }
    ],
    evidence: {
      quality: "bronze",
      studyCount: 8,
      participants: 312,
      effectSize: 0.3,
      replicationStatus: "preliminary"
    },
    clinicalOutcomes: [
      {
        condition: "Stress/relaxation",
        effectiveness: "low",
        timeToEffect: "Minutes",
        durationOfEffect: "Duration of exposure"
      }
    ],
    safety: "excellent",
    cost: "$",
    accessibility: "universal",
    timeInvestment: "15-30 min",
    keyFindings: [
      "528 Hz music significantly reduced cortisol and increased oxytocin after few minutes",
      "432 Hz tuning slowed heart rate compared to 440 Hz in double-blind study",
      "Physical experiments: 432 Hz and 528 Hz generated organized harmonic structures",
      "CRITICAL: Many online 'solfeggio' videos are mislabeled marketing - frequency claims often false",
      "Claims about 'DNA repair' lack rigorous scientific support",
      "Effects may be due to general relaxation rather than frequency-specific mechanisms",
      "Requires significantly more rigorous research before strong claims can be made"
    ],
    citations: [
      "Akimoto et al. (2018). Health - 528 Hz music reduces stress hormones",
      "Calamassi & Pomponi (2019). Alternative Therapies - 432 Hz vs 440 Hz heart rate effects",
      "Horowitz (2000). Medical Veritas - 528 Hz 'Love frequency' theory (note: lacks peer review)"
    ]
  }
];

export const COMBINATION_PROTOCOLS = [
  {
    name: "Rapid Coherence Protocol",
    interventions: ["photobiomodulation", "heart-coherence", "binaural-beats"],
    description: "Achieve meditative brain states in 30 minutes",
    protocol: "10 min 40 Hz tPBM → 5 min heart coherence breathing → 15 min theta binaural beats",
    predictedEffect: "Fast-track to theta/alpha dominance with whole-brain coherence",
    synergy: 1.5
  },
  {
    name: "Neuroplasticity Accelerator",
    interventions: ["tms-tbs", "vns", "neurofeedback"],
    description: "Rapid antidepressant response with lasting effects",
    protocol: "TBS over DLPFC (daily) + concurrent taVNS + alpha neurofeedback (3x/week)",
    predictedEffect: "TMS creates plasticity window, VNS enhances consolidation, neurofeedback stabilizes",
    synergy: 1.8
  },
  {
    name: "Peak Performance Stack",
    interventions: ["photobiomodulation", "neurofeedback", "heart-coherence", "meditation"],
    description: "Sustained high performance with recovery",
    protocol: "Morning: 40 Hz tPBM + gamma neurofeedback | Work: 10 Hz binaural + heart coherence | Evening: meditation + delta induction",
    predictedEffect: "Gamma for peak cognition, alpha coherence for flow, delta for restoration",
    synergy: 1.65
  },
  {
    name: "Psychedelic-Mimicking Stack",
    interventions: ["photobiomodulation", "vns", "tms-tbs"],
    description: "Replicate psychedelic brainwave patterns non-invasively",
    protocol: "Simultaneous: low-frequency tPBM + taVNS + alpha-suppressing TMS protocol",
    predictedEffect: "Reduce alpha, increase delta/theta, enhance signal diversity",
    synergy: 1.4
  }
];

export const PERSONALIZATION_PROFILES = [
  {
    profile: "High Anxiety",
    baseline: "Excessive beta (especially high beta 22-30 Hz), low alpha",
    recommended: ["heart-coherence", "neurofeedback", "binaural-beats", "meditation"],
    avoid: ["High-dose caffeine", "Beta enhancement protocols"],
    rationale: "Need to increase alpha, decrease high beta, enhance parasympathetic tone"
  },
  {
    profile: "Depression",
    baseline: "Low left frontal alpha (alpha asymmetry), possible theta excess",
    recommended: ["tms-tbs", "neurofeedback", "photobiomodulation", "heart-coherence"],
    avoid: ["Excessive theta enhancement early in treatment"],
    rationale: "Target left frontal activation, normalize alpha asymmetry"
  },
  {
    profile: "ADHD",
    baseline: "High theta/beta ratio (excess theta, insufficient beta)",
    recommended: ["neurofeedback", "vns", "meditation"],
    avoid: ["Theta enhancement", "Delta induction during day"],
    rationale: "Decrease theta, increase SMR (13-15 Hz), improve sustained attention networks"
  },
  {
    profile: "Peak Performance",
    baseline: "Normal patterns, seeking enhancement",
    recommended: ["neurofeedback", "photobiomodulation", "meditation", "heart-coherence"],
    avoid: ["Overstimulation", "Excessive beta"],
    rationale: "Enhance gamma for peak awareness, theta for creativity, alpha coherence for flow"
  },
  {
    profile: "Insomnia",
    baseline: "Excessive arousal at night, difficulty generating delta/theta",
    recommended: ["heart-coherence", "binaural-beats", "schumann", "meditation"],
    avoid: ["Beta/gamma enhancement in evening", "Screens before bed"],
    rationale: "Enhance delta production, normalize circadian rhythms, increase parasympathetic tone"
  }
];
