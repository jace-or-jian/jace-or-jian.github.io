/*
 * ================================================================
 * EDIT THIS FILE TO PERSONALIZE THE WEBSITE.
 * Keep the field names unchanged; replace values as needed.
 * Set any item or section's `show` value to false to hide it.
 * ================================================================
 */

window.SITE_DATA = {
  profile: {
    name: "Jiajie Jian",
    shortName: "Jiajie Jian",
    initials: "JJ",
    role: "M.Sc. Student in Information and Communication Engineering",
    affiliation: "Chongqing University",
    location: "Chongqing, China",
    email: "jiajiejian02@gmail.com",
    availability: "Open to research conversations and collaborations.",
    photo: "assets/jace-or-jian-city-profile.png",
    photoAlt: "Professional headshot of Jiajie Jian",
    cv: "cv.html?v=4",
    links: [
      { label: "Curriculum Vitae", url: "cv.html?v=4" },
    ],
  },

  about: {
    heading: "Hi, and welcome! I’m Jiajie Jian — glad you’re here.",
    paragraphs: [
      "A little about my work: I develop algorithms and system designs for next-generation wireless systems, drawing on signal processing, optimization, and machine learning. My current research focuses on integrated sensing and communication (ISAC) and physical-layer security in dynamic wireless environments.",
      "I am currently seeking Ph.D. opportunities for Fall 2027.",
    ],
    actions: [
      { label: "Copy email", kind: "copy-email", style: "primary" },
      { label: "View CV", url: "cv.html?v=4", style: "secondary" },
    ],
    interests: [
      "5G/6G Wireless Systems",
      "Integrated Sensing & Communication",
      "Statistical Signal Processing",
      "AI for Wireless",
    ],
  },

  navigation: [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "research", label: "Research" },
    { id: "publications", label: "Publications" },
    { id: "projects", label: "Projects" },
    { id: "awards", label: "Awards" },
    { id: "skills", label: "Skills" },
    { id: "news", label: "News" },
  ],

  education: {
    show: true,
    title: "Education",
    eyebrow: "Background",
    items: [
      {
        period: "Sep. 2024 — Expected Jun. 2027",
        degree: "M.Sc. in Information and Communication Engineering",
        school: "Chongqing University",
        location: "Chongqing, China",
        details: [
          "Co-advisors: Prof. Shu Fu and Prof. Min Liu",
          "Grade: 88.57/100",
        ],
      },
      {
        period: "Sep. 2020 — Jun. 2024",
        degree: "B.Eng. in Electronic Information Engineering",
        school: "Sichuan Normal University",
        location: "Chengdu, China",
        details: [
          "Grade: 84.16/100",
        ],
      },
    ],
  },

  research: {
    show: true,
    title: "Research",
    eyebrow: "Interests",
    intro: "My research interests span wireless systems, digital signal processing, and AI-enabled methods for signal processing and wireless applications.",
    items: [
      {
        number: "01",
        title: "Wireless System Designs",
        description: "5G/6G, wireless sensing and communications, transceiver designs, and PHY-layer techniques.",
      },
      {
        number: "02",
        title: "Digital Signal Processing",
        description: "Statistical signal processing, Bayesian inference, and detection and estimation theory.",
      },
      {
        number: "03",
        title: "AI for Signal Processing and Wireless",
        description: "Efficient machine learning and deep learning algorithms for signal processing and wireless systems.",
      },
    ],
  },

  publications: {
    show: true,
    title: "Publications",
    eyebrow: "Writing",
    note: "",
    items: [
      {
        year: "2026",
        venue: "IEEE Transactions on Vehicular Technology",
        title: "Bidirectional Covertness and Security Enhancement in FD-ISAC Systems",
        authors: "Jiajie Jian, Min Liu, Shu Fu, and Yongming Huang",
        description: "A secure full-duplex ISAC design that provides bidirectional protection through robust joint transceiver optimization and native-signal reuse.",
        figures: [
          {
            src: "assets/publications/tvt-fd-isac-security-scenario.png",
            alt: "Full-duplex ISAC security scenario with covert users, a warden, an eavesdropper, and a sensing target",
            caption: "FD-ISAC security scenario",
          },
          {
            src: "assets/publications/tvt-dual-functional-waveform.png",
            alt: "Combined transmit-receive beampattern comparing the proposed dual-functional waveform with baseline designs",
            caption: "Joint radar-communication waveform design",
          },
        ],
        featured: true,
        links: [
          { label: "PDF", url: "files/publications/Bidirectional_Covertness_and_Security_Enhancement_in_FD-ISAC_Systems.pdf" },
          { label: "DOI", url: "https://doi.org/10.1109/TVT.2026.3701923" },
        ],
      },
      {
        year: "2026",
        venue: "IEEE Transactions on Mobile Computing · Revision under review",
        title: "Cross-Boundary Covert UAV Service Near No-Fly Zones: Risk-Aware Trajectory and Scheduling",
        authors: "Jiajie Jian, Zan Li, Shu Fu, Jiangbo Si, and Min Liu",
        description: "A risk-aware trajectory and scheduling framework that balances UAV service quality with instantaneous RF exposure near regulated areas.",
        manuscriptNote: "Full manuscript available upon reasonable request.",
        abstract: "Covert unmanned aerial vehicle (UAV) communications have attracted increasing attention as a key enabler for surveillance-sensitive aerial networks. In practical aerial service, however, covertness is often constrained not only by wireless detection but also by airspace restrictions. This constraint becomes particularly critical when the intended users are located inside protected regions that the UAV is not permitted to enter. It gives rise to a cross-boundary service scenario near no-fly zones (NFZs), where a UAV must remain outside the restricted airspace while covertly delivering data to ground users inside it under persistent surveillance. This paper studies joint trajectory planning, user scheduling, and rate control for this constrained mobile service system. We formulate an optimization problem that jointly accounts for convex-corridor-based NFZ avoidance, communication reliability, power limits, and a probabilistic covertness constraint. By exactly reformulating this probabilistic requirement into a deterministic cumulative covert-risk budget, we obtain a tractable risk-aware scheduling framework. We further characterize the impact of large-scale uncertainty and show that, in the low-power regime, larger uncertainty can worsen covertness. To solve the resulting nonconvex problem, we develop a two-stage algorithm that explores distinct topological bypass routes, updates scheduling via Lagrangian relaxation, and refines the trajectory and rate variables through corridor-constrained successive convex approximation. Simulation results demonstrate fast convergence and show that the proposed design substantially improves covert service efficiency over benchmark schemes while revealing interpretable risk-aware scheduling patterns under different mission durations.",
        figures: [
          {
            src: "assets/publications/tmc-risk-aware-path-construction.png",
            alt: "Geometric illustration of risk-aware UAV path construction around a no-fly zone",
            caption: "Risk-aware path construction",
          },
          {
            src: "assets/publications/tmc-trajectory-scheduling-results.png",
            alt: "System topology, UAV trajectories, service rates, and risk values for the cross-boundary UAV service study",
            caption: "Topology, trajectories, rates, and risk",
          },
        ],
        featured: false,
      },
      {
        year: "2026",
        venue: "IEEE Wireless Communications Letters · Submitted",
        title: "Resilient Beamforming for Anti-Jamming MIMO-ISAC",
        authors: "Jiajie Jian, Shu Fu, Tingting Chen, and Min Liu",
        description: "A sensing-guided beamforming framework for unknown jamming, with low-dimensional optimization and lightweight learning-based online adaptation.",
        manuscriptNote: "Full manuscript available upon reasonable request.",
        abstract: "Integrated sensing and communication (ISAC) achieves high spectral efficiency by executing target tracking and user communication via one unified waveform. However, this critical dual-role architecture makes it a lucrative target for jammers seeking to inflict maximum disruption with a single attack. To defend against such threats, we propose a resilient beamforming framework for multiple-input multiple-output (MIMO) ISAC systems. Lacking exact jammer knowledge, the base station constructs a surrogate spatial interference model from extracted features. A rank-constrained sensing covariance is jointly designed with the radar combiner to balance target illumination, clutter shaping, and jammer leakage. Transceivers are optimized via alternating fractional programming, utilizing a dual method that reduces high-dimensional matrix optimization to an efficient low-dimensional search. To stress-test this defense, we formulate a reactive jammer that adapts its spatial attack via projected gradient descent (PGD). Simulations verify that the proposed resilient design maintains high effective sum-rate and sensing ability under adaptive attacks.",
        figures: [
          {
            src: "assets/publications/wcl-anti-jamming-system-model.png",
            alt: "MIMO-ISAC system with a target, communication users, clutter, and an unknown jammer",
            caption: "Anti-jamming ISAC system model",
          },
          {
            src: "assets/publications/wcl-transmit-receive-beampatterns.png",
            alt: "Transmit and transmit-receive combined beampatterns for resilient MIMO-ISAC",
            caption: "Transmit and receive beampatterns",
          },
        ],
        featured: false,
      },
    ],
  },

  projects: {
    show: true,
    title: "Projects",
    eyebrow: "Ongoing work",
    items: [
      {
        period: "2026 - Present",
        status: "Ongoing work · Co-author · Manuscript and experiments in preparation",
        title: "Diffusion-Assisted EKF Tracking for UAV-ISAC Beam Alignment",
        description: "A diffusion-assisted EKF combines historical UAV states with innovation-aware DDIM refinement to reduce nonlinear tracking drift and provide reliable state estimates for downstream beam alignment and beamforming.",
        figures: [
          {
            src: "assets/projects/diffusion-assisted-uav-isac-system.png",
            url: "files/projects/diffusion-assisted-uav-isac-system.pdf",
            alt: "UAV-ISAC system model with a base station sensing mobile UAVs while serving communication users",
            caption: "UAV-ISAC system model",
          },
          {
            src: "assets/projects/uav-tracking-results.png",
            alt: "Position, azimuth, and elevation tracking RMSE results across 50 UAV trajectories",
            caption: "Tracking performance across 50 trajectories",
          },
          {
            src: "assets/projects/uav-tracking-demo.gif",
            alt: "Animated comparison of EKF and diffusion-refined UAV tracking in top-down and altitude views",
            caption: "Animated 3D tracking demo",
          },
        ],
      },
    ],
  },

  awards: {
    show: true,
    title: "Honors and Awards",
    eyebrow: "Recognition",
    items: [
      { year: "2024, 2025", title: "First-Class Academic Scholarship", organization: "Chongqing University" },
      { year: "2021, 2023", title: "First- and Second-Class Academic Scholarships", organization: "Sichuan Normal University" },
    ],
  },

  skills: {
    show: true,
    title: "Skills",
    eyebrow: "Toolbox",
    groups: [
      { label: "Programming and Tools", items: ["Python", "PyTorch", "MATLAB", "CVX", "LaTeX"] },
      { label: "Methods", items: ["Optimization Theory", "Statistical Signal Processing", "Matrix Analysis", "Machine Learning"] },
      { label: "Languages", items: ["English (IELTS 7.5, 2026)", "Mandarin (native)"] },
    ],
  },

  news: {
    show: true,
    title: "News",
    eyebrow: "Updates",
    items: [
      { date: "2026.06", text: "Our paper on bidirectional covertness and security in FD-ISAC was published in IEEE Transactions on Vehicular Technology." },
    ],
  },
};
