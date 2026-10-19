// Notes are displayed in array order. Text blocks are rendered safely as plain text.
window.BLOG_POSTS = [
  {
    "slug": "thz-bandwidth-and-beam-alignment",
    "title": "THz Communications: Bandwidth, Propagation, and Beam Alignment",
    "lang": "en",
    "published": true,
    "summary": "Bandwidth gains, propagation mechanisms, aperture scaling, and the distinction between beam tracking and blockage mitigation.",
    "blocks": [
      {
        "type": "p",
        "text": "The main attraction of THz is large bandwidth. The main difficulty is maintaining enough received power and keeping a narrow beam aligned. These are linked: the antenna gain needed to close the link budget makes connectivity sensitive to motion and blockage."
      },
      {
        "type": "h2",
        "text": "1. Bandwidth: the fixed quantity matters"
      },
      {
        "type": "equation",
        "text": "C = B log₂(1 + SNR)\nSNR = Pᵣ / (N₀B)"
      },
      {
        "type": "p",
        "text": "For an ideal flat AWGN channel, C is capacity, B is bandwidth, Pᵣ is received power, and N₀ is noise power spectral density. At fixed SNR, capacity grows linearly with B. At fixed Pᵣ, more bandwidth collects more noise, SNR falls, and capacity approaches a power-limited ceiling."
      },
      {
        "type": "p",
        "text": "Large bandwidth can deliver a target rate at lower spectral efficiency, reducing reliance on very high modulation orders. Coding and a sufficient link budget remain necessary. Usable bandwidth is limited by hardware and atmospheric transmission windows, rather than one uniformly good THz-wide channel."
      },
      {
        "type": "p",
        "text": "For ideal monostatic radar, range resolution is approximately ΔR = c/(2B): 10 GHz gives 1.5 cm. Resolution means separating targets in range; it is distinct from estimation accuracy. Angular resolution depends mainly on aperture relative to wavelength."
      },
      {
        "type": "figure",
        "src": "assets/notes/thz-link.svg",
        "alt": "A flow diagram connecting wide bandwidth and short wavelength to their benefits, link constraints, and sensing-assisted control.",
        "caption": "Figure 1. Bandwidth and short wavelength offer different benefits and impose different constraints. Closing the link budget and maintaining connectivity require separate responses. Conceptual diagram.",
        "width": 900,
        "height": 650
      },
      {
        "type": "h2",
        "text": "2. Scenarios and distance"
      },
      {
        "type": "p",
        "text": "Short-range indoor access and dense outdoor hotspots are natural scenarios, often over a few metres to tens of metres. “Below 100 metres” is a useful access-link intuition, not a physical limit. Fixed directional links and moving handheld terminals have different power and pointing budgets."
      },
      {
        "type": "p",
        "text": "Inter-satellite paths avoid atmospheric gas absorption. Geometric spreading, limited transmit power, and pointing errors remain. Ground-to-satellite paths still cross the atmosphere."
      },
      {
        "type": "h2",
        "text": "3. Separate the propagation mechanisms"
      },
      {
        "type": "p",
        "text": "The broad 0.1–10 THz range corresponds to wavelengths of about 3 mm to 30 μm. Several effects need to be distinguished:"
      },
      {
        "type": "ul",
        "items": [
          "Diffraction: ordinary obstacles are large relative to wavelength, so bending around them is often weak. Blocking the direct path can interrupt the link.",
          "Surface interaction: roughness relative to wavelength affects diffuse scattering. Smooth surfaces can still provide useful specular reflections; non-line-of-sight paths are possible.",
          "Gas absorption: water vapour and oxygen have frequency-selective molecular resonances. This is not a wavelength–molecule size match; individual molecules are much smaller.",
          "Weather and materials: rain, fog, and particles introduce absorption and scattering depending on size, composition, and concentration. Some dry materials are relatively transparent, but dryness alone is insufficient."
        ]
      },
      {
        "type": "h2",
        "text": "4. Aperture, gain, and noise"
      },
      {
        "type": "p",
        "text": "THz lies between electronic and photonic technologies. Efficient power generation is difficult near device frequency limits. Wide bandwidth also increases integrated thermal noise, kTB, before receiver noise contributions. The bandwidth, rather than an inherently higher temperature, causes this increase."
      },
      {
        "type": "equation",
        "text": "Aₑ = Gλ² / (4π)"
      },
      {
        "type": "p",
        "text": "At fixed gain G, effective receiving area Aₑ decreases with λ². At fixed physical aperture and efficiency, gain instead increases as wavelength decreases. Frequency-dependent link-loss claims therefore need to specify the antenna assumptions."
      },
      {
        "type": "p",
        "text": "Short wavelengths allow many elements in a compact array. Coherent beamforming concentrates supplied energy toward the receiver; it does not generate energy. Aperture, losses, calibration, and circuit power limit the benefit of adding elements."
      },
      {
        "type": "h2",
        "text": "5. Alignment and blockage require different responses"
      },
      {
        "type": "p",
        "text": "High gain usually means a narrow beam. Link establishment finds an initial beam pair; link tracking maintains alignment during motion. Tracking corrects pointing, while blockage requires a viable alternative: a reflection, another access point, a relay, or a fallback band."
      },
      {
        "type": "p",
        "text": "Sensing supports predictive beamforming through motion estimates and can give advance warning of blockage. The information may come from the radio or another sensor. Its uncertainty, acquisition overhead, and latency determine whether the system can act before the link fails."
      },
      {
        "type": "p",
        "text": "The central tradeoff is directional gain versus tracking tolerance. Narrower beams demand more accurate prediction and faster updates; preparing backup paths adds overhead. A rate improvement is useful only if the sensing and control loop can sustain it."
      }
    ]
  },
  {
    "slug": "wireless-layers-and-beamforming",
    "title": "Wireless Systems: PHY, MAC, and Beamforming",
    "lang": "en",
    "published": true,
    "summary": "Layer responsibilities, interference-based beam steering, RF-chain freedom, wideband delays, and lens beam selection.",
    "blocks": [
      {
        "type": "h2",
        "text": "1. PHY and MAC: link operation and resource use"
      },
      {
        "type": "p",
        "text": "PHY maps bits to electromagnetic waveforms and recovers them through an imperfect channel. Channel estimation characterizes the link; beamforming controls transmission and combining; modulation and coding balance rate and reliability. Synchronization and equalization support reception."
      },
      {
        "type": "p",
        "text": "MAC schedules users and time-frequency resources, coordinates simultaneous transmissions, and handles retransmission decisions. The boundary is implementation-dependent: link adaptation uses PHY feedback, while HARQ combines retransmission control with physical-layer decoding and combining."
      },
      {
        "type": "p",
        "text": "Beam weights belong to PHY; deciding which users and beams operate together is a scheduling problem. Scheduling speed depends on slots, traffic, deadlines, processing, and channel-information freshness. Frequent feedback alone does not guarantee a useful decision."
      },
      {
        "type": "h2",
        "text": "2. Antennas redistribute energy"
      },
      {
        "type": "p",
        "text": "A transmitting antenna directs supplied power; a receiving antenna couples part of the incident field into a receiver. Gain combines directivity and efficiency. It is not an independent source of energy."
      },
      {
        "type": "p",
        "text": "Array elements have different propagation distances to a point in space. Relative phase adjustments make their fields add coherently in a chosen direction—constructive interference—and partially cancel elsewhere—destructive interference. Reversing the phase progression reverses steering. Radiation outside the main beam is not eliminated; sidelobes remain."
      },
      {
        "type": "figure",
        "src": "assets/notes/beamforming-interference.png",
        "alt": "Two phased arrays with opposite phase progressions. Overlapping wave fronts illustrate constructive interference along the steered beam and destructive interference in other directions.",
        "caption": "Figure 2. Relative phases produce constructive interference along the intended beam and partial cancellation elsewhere. Reversing the phase progression reverses the steering direction. Sidelobes are omitted. Click to view full size.",
        "width": 1024,
        "height": 572
      },
      {
        "type": "p",
        "text": "In the far field, beamwidth scales roughly as λ/D, where D is aperture extent in the relevant direction. Aperture in wavelengths matters more than element count alone. Spacing, taper, geometry, and scan angle also affect the pattern. Close to a large array, near-field focusing may require a range-dependent model."
      },
      {
        "type": "h2",
        "text": "3. RF chains and independent signal dimensions"
      },
      {
        "type": "p",
        "text": "A phase shifter weights an existing RF signal. An RF chain provides an independently controllable signal path with frequency conversion and associated hardware. Many antenna elements sharing one chain therefore have different phase settings but share the same spatial input."
      },
      {
        "type": "figure",
        "src": "assets/notes/beamforming-architectures.svg",
        "alt": "Three simplified signal-flow rows compare fully digital beamforming, single-chain analog beamforming, and subarray hybrid beamforming.",
        "caption": "Figure 3. Four antenna elements driven by four, one, or two RF chains. The hybrid example uses subarrays; fully connected networks are also possible. RF-chain count bounds signal dimensions, not the number of guaranteed usable streams.",
        "width": 900,
        "height": 680
      },
      {
        "type": "ul",
        "items": [
          "Fully digital: conventionally one RF chain per element, with digital complex weights and frequency-dependent control. Flexible, but costly in converters, circuit power, and calibration.",
          "Single-chain analog: one RF waveform is distributed through an analog weighting network. At a given frequency, all element signals are weighted copies of that input. The waveform can contain multiple tones or users’ data, but only one independent spatial input is available.",
          "Hybrid: fewer RF chains drive more antenna elements through a fully connected network or subarrays. Spatial streams are limited by chain count, channel rank, and receiver capability. The saving in hardware comes with restrictions on controllable weights."
        ]
      },
      {
        "type": "h2",
        "text": "4. Phase shift versus time delay"
      },
      {
        "type": "equation",
        "text": "φ(f) = −2πfτ"
      },
      {
        "type": "p",
        "text": "A true delay τ produces a phase shift proportional to frequency. A fixed phase setting that aligns a beam at the carrier does not reproduce that delay across a wide band. Different frequencies can then point in different directions: beam squint. The loss is especially important when the intended beam is narrow."
      },
      {
        "type": "p",
        "text": "True-time-delay elements can preserve wideband alignment, at the cost of delay-range limits, finite resolution, insertion loss, and circuit complexity. Phase shifters and delays can be combined; they are not interchangeable wideband components."
      },
      {
        "type": "figure",
        "src": "assets/notes/hybrid-beamforming-delays.png",
        "alt": "Digital baseband precoding feeds multiple RF chains. Each illustrated branch includes analog phase shifters and delay elements before its antenna subarray, with beams directed toward different users.",
        "caption": "Figure 4. Digital precoding → RF chains → analog phase control → delays → antenna subarrays. Phase shifters and delay elements address different parts of wideband steering. Click to view full size.",
        "width": 2500,
        "height": 1347
      },
      {
        "type": "h2",
        "text": "5. Lens arrays: direction mapped to feed position"
      },
      {
        "type": "p",
        "text": "On reception, a lens focuses waves from different directions near different feed positions. By reciprocity, exciting different feeds produces different beam directions. A switch network connects a limited number of RF chains to selected feeds."
      },
      {
        "type": "p",
        "text": "Available feeds and switch connections are discrete; propagation angles are continuous. Port selection is therefore a discrete decision, while digital weights on selected paths may remain continuous. Finite feed spacing, beam leakage, and wideband effects limit the ideal direction-to-port mapping."
      }
    ]
  },
  {
    "slug": "optimization-starts-with-the-system",
    "title": "Optimization: Modeling, Benchmarks, and Solution Structure",
    "lang": "en",
    "published": true,
    "summary": "Physical objectives and constraints, performance references, convex approximations, and the cost and insight of alternating updates.",
    "blocks": [
      {
        "type": "p",
        "text": "Optimization allocates limited resources when choices compete. More transmit power can improve reliability but consume energy or increase interference. More beam training can improve alignment but reduce data time. The objective and constraints specify which tradeoff is acceptable."
      },
      {
        "type": "h2",
        "text": "1. Start from the system bottleneck"
      },
      {
        "type": "p",
        "text": "The objective needs a physical meaning: delivered rate, outage, latency, energy, or information leakage. A proxy must track that goal. Instantaneous rate, for example, can overstate delivered throughput if training overhead is ignored."
      },
      {
        "type": "p",
        "text": "Constraints describe the actual limits: power, deadlines, RF-chain count, uncertain channel knowledge, and hardware phase or delay ranges. Each constraint needs a physical origin and a defensible value."
      },
      {
        "type": "p",
        "text": "Combining RIS, NOMA, or security techniques is insufficient by itself. The useful questions are what limits the existing system, which control can change it, and what competing cost prevents a trivial solution. The formulation follows from those answers."
      },
      {
        "type": "h2",
        "text": "2. Optimization as a performance benchmark"
      },
      {
        "type": "p",
        "text": "A practical implementation may need a fast, reusable rule instead of solving a new optimization problem for each instance. Comparing it with a carefully optimized reference under the same model and resource limits quantifies the performance sacrificed for speed and simplicity. Training overhead, computation time, and application requirements determine whether that gap is acceptable."
      },
      {
        "type": "p",
        "text": "A local reference measures the gap to that particular design, not necessarily to the global optimum. A global solution or proven bound supports an optimality-gap assessment. Modeled performance also needs validation against measurements before it represents a real deployment."
      },
      {
        "type": "h2",
        "text": "3. Reformulation, approximation, and relaxation"
      },
      {
        "type": "p",
        "text": "Interference coupling, discrete variables, and rank constraints often cause nonconvexity. An equivalent reformulation preserves the problem; a local approximation changes it near an iterate; a relaxation enlarges the feasible set and may provide a bound. A tractable subproblem is not automatically an exact solution to the original problem."
      },
      {
        "type": "p",
        "text": "SCA: solve successive convex surrogate problems around the current iterate. Bounds, first-order consistency, and update rules determine feasibility and convergence. Under suitable assumptions, stationary-point convergence is possible; global optimality is generally not guaranteed."
      },
      {
        "type": "p",
        "text": "Lagrangian methods: attach multipliers to constraints to expose resource tradeoffs or enable decomposition. The dual provides a lower bound for minimization. Strong duality holds under appropriate conditions, such as convexity with Slater’s condition; nonconvex problems may retain a duality gap."
      },
      {
        "type": "p",
        "text": "SDR: lift a quadratic beamforming variable to W = wwᴴ, then drop the rank-one constraint while keeping W positive semidefinite. The result is an SDP if the remaining formulation is convex. Rank-one recovery can be exact; higher-rank solutions need a recovery step and feasibility checks in the original problem."
      },
      {
        "type": "h2",
        "text": "4. Alternating optimization: count the inner work"
      },
      {
        "type": "p",
        "text": "A jointly nonconvex problem may be convex in each variable block with the others fixed. Alternating optimization updates these blocks in turn. Exact block minimization makes the objective nonincreasing, but objective convergence alone does not guarantee a global optimum; stationarity requires further assumptions."
      },
      {
        "type": "p",
        "text": "Closed-form updates avoid repeatedly running an inner solver. Total cost still includes outer iterations, any inner searches, and matrix operations. A closed-form expression involving a large linear-system solve may remain expensive. Nested iteration is acceptable when its accuracy and total runtime justify it."
      },
      {
        "type": "p",
        "text": "WMMSE exposes simple updates for receive filters, MSE weights, and precoders. Receive filters and weights have closed-form expressions. With power constraints, the precoder is typically explicit for a given multiplier, which may still require a one-dimensional search such as bisection."
      },
      {
        "type": "h2",
        "text": "5. Extract insight as well as a decision"
      },
      {
        "type": "p",
        "text": "An explicit solution can reveal how power, interference, and uncertainty change the decision. When no exact closed form is available, bounds, limiting cases, and sensitivity analysis can still expose structure. Final checks belong to the original problem: feasibility, runtime, robustness, and performance against a strong, simpler benchmark."
      }
    ]
  }
];
