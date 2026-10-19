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
  },
  {
    "slug": "covert-communication-and-physical-layer-security",
    "title": "Covert Communication and PLS: Detection and Information Leakage",
    "lang": "en",
    "published": true,
    "summary": "The square-root law, persistent uncertainty, average and outage guarantees, and public-codebook secrecy.",
    "blocks": [
      {
        "type": "p",
        "text": "Covert communication hides whether a transmission occurs. Physical-layer security (PLS), in the wiretap setting, hides the message even when transmission is known. Both exploit physical channels, noise, and coding, but constrain different inferences from the received waveform. Willie is the detector; Eve is the eavesdropper. They may be the same device, but the two requirements remain distinct."
      },
      {
        "type": "h2",
        "text": "1. Covertness is a hypothesis-testing constraint"
      },
      {
        "type": "equation",
        "text": "H₀: Yᵢ = Zᵢ\nH₁: Yᵢ = h_W Xᵢ + Zᵢ,   i = 1, …, n"
      },
      {
        "type": "p",
        "text": "H₀ means no covert signal; Zᵢ includes the modeled background. H₁ adds Alice’s signal through channel h_W. A channel use is one input–output opportunity in the discrete-time model, usually a real or complex symbol dimension. It is not one bit: a codeword spans n uses. Increasing samples beyond the independent signal dimensions does not create free channel uses."
      },
      {
        "type": "equation",
        "text": "ξ* = min_detector (P_FA + P_MD)\nξ* = 1 − TV(P₀ⁿ, P₁ⁿ) ≥ 1 − ε"
      },
      {
        "type": "p",
        "text": "P_FA is a false alarm and P_MD a missed detection. P₀ⁿ and P₁ⁿ are Willie’s full observation laws under the two hypotheses, including the information available to him. For equal priors, the minimum average detection error is ξ*/2; ξ* near one means little advantage over guessing. Low received power helps by keeping the laws close, rather than making the signal literally absent."
      },
      {
        "type": "h2",
        "text": "2. Why the square-root law appears"
      },
      {
        "type": "p",
        "text": "In the standard fixed-channel AWGN setting with known noise statistics and a fixed covertness budget, uncertainty in the sample-average noise energy shrinks as observations accumulate. For real independent Gaussian observations, noise variance σ² and added received signal variance q give:"
      },
      {
        "type": "equation",
        "text": "D(P₁ⁿ ∥ P₀ⁿ) = (n/2)[r − ln(1 + r)]\n≈ nr²/4,   r = q/σ² ≪ 1"
      },
      {
        "type": "p",
        "text": "D uses natural logarithms. By Pinsker’s inequality, D ≤ 2ε² is sufficient for TV ≤ ε. Keeping this Gaussian divergence bounded therefore requires q = O(n⁻¹ᐟ²). With a fixed nonzero Bob-to-Willie gain ratio, Bob’s low-SNR rate per use scales with power, giving:"
      },
      {
        "type": "equation",
        "text": "Covert payload: O(√n) bits\nRate per use: O(1/√n) → 0"
      },
      {
        "type": "p",
        "text": "The square root concerns total bits, not bits per use. Achievability also depends on coding and any shared randomness. A finite-block power budget is therefore not the same as a positive asymptotic covert rate."
      },
      {
        "type": "h2",
        "text": "3. Noise randomness is not persistent uncertainty"
      },
      {
        "type": "p",
        "text": "Known-variance AWGN is already random; Willie can still estimate its average energy increasingly well. Unknown background power can create a different ambiguity: an energy increase may be attributable to the background under H₀. Certain noise-uncertainty models support positive rates under specified covertness criteria, provided the uncertainty survives longer observation and calibration."
      },
      {
        "type": "p",
        "text": "Randomizing only the signal under H₁ does not automatically defeat detection. If it only changes constants while the per-use divergence remains quadratic in small signal power, square-root scaling remains. But “H₁ uncertainty only changes the coefficient” is not a universal theorem. Timing, spatial structure, and other model changes can alter distinguishability. H₀ uncertainty alone is neither a universal necessity nor sufficient proof of a positive rate."
      },
      {
        "type": "h2",
        "text": "4. Average, outage, and per-state guarantees"
      },
      {
        "type": "p",
        "text": "For a channel state S known to Willie, let ξ*(S) be his optimal conditional detection error sum. Three different covertness requirements are:"
      },
      {
        "type": "equation",
        "text": "Average: E_S[ξ*(S)] ≥ 1 − ε\nOutage: Pr_S{ξ*(S) < 1 − ε} ≤ δ\nPer-state: inf_s ξ*(s) ≥ 1 − ε"
      },
      {
        "type": "p",
        "text": "An average can hide bad realizations. An outage constraint limits how often the requirement fails; a per-state guarantee covers every state in the specified set. These are not interchangeable. Per-state covertness means no violating state, not zero detection error: zero error would mean Willie detects perfectly."
      },
      {
        "type": "p",
        "text": "If S is hidden from Willie, his test must use the corresponding mixture laws; giving him a state-specific threshold changes the model. Deep fading on Bob’s link hurts reliability, while fading on Willie’s link can help covertness. The harmful tail depends on which link varies and what information each terminal has."
      },
      {
        "type": "h2",
        "text": "5. PLS: public codebooks, private messages"
      },
      {
        "type": "p",
        "text": "In standard wiretap coding, the codebook and encoding rule can be public. The encoder privately randomizes among multiple codewords associated with the same message. Suitable randomization makes Eve’s observation distributions nearly independent of that message, while Bob can still decode reliably."
      },
      {
        "type": "equation",
        "text": "Reliability: Pr{M̂_B ≠ M} → 0\nStrong secrecy: I(M; Z_Eⁿ ∣ C) → 0"
      },
      {
        "type": "p",
        "text": "M is the message, Z_Eⁿ Eve’s observation, and C the public codebook. Eve may fail to identify the complete codeword yet still learn message bits; decoding error alone is therefore insufficient. “Corrupting the codeword” is a useful noise intuition, but controlling information leakage is the actual secrecy requirement."
      },
      {
        "type": "p",
        "text": "For the scalar real Gaussian wiretap channel with an average-power constraint:"
      },
      {
        "type": "equation",
        "text": "C_s = [C_B − C_E]⁺\n= [½ log₂(1 + γ_B) − ½ log₂(1 + γ_E)]⁺"
      },
      {
        "type": "p",
        "text": "Here [a]⁺ = max(a, 0); units are secret bits per real channel use. The factor ½ is omitted for a complex scalar use. Secrecy capacity depends on Bob’s advantage over Eve, not Eve’s capacity alone. Beamforming and artificial noise can help by improving that advantage, subject to their effect on Bob. The scalar difference formula is not a general formula for arbitrary channels."
      },
      {
        "type": "p",
        "text": "Covertness and secrecy must be checked separately. Similarity between H₀ and H₁ hides activity; similarity between Eve’s laws for different messages hides content. A covert code may also require a shared key, depending on the channel model—public-codebook wiretap secrecy does not settle that assumption."
      }
    ]
  },
  {
    "slug": "high-speed-train-doppler-and-cell-free",
    "title": "A High-Speed Train Ride: Doppler, Handover, and Cell-Free Networks",
    "lang": "en",
    "published": true,
    "summary": "A train-ride observation connected to electromagnetic timescales, Doppler shift, cellular mobility, and user-centric cooperation.",
    "blocks": [
      {
        "type": "p",
        "text": "During high-speed train rides, the connection sometimes deteriorates suddenly. The first explanation that came to mind was Doppler: the train moves fast. Comparing its speed with the speed of light then made that explanation seem doubtful. Learning about cellular handover added another piece. The useful correction is that Doppler and network architecture both matter, on different timescales; the experience alone cannot identify the cause."
      },
      {
        "type": "h2",
        "text": "1. Build an intuition for electromagnetic speed"
      },
      {
        "type": "equation",
        "text": "c ≈ 3 × 10⁸ m/s\nv = 300 km/h ≈ 83.3 m/s\nv/c ≈ 2.8 × 10⁻⁷"
      },
      {
        "type": "p",
        "text": "An electromagnetic wave takes about 3.3 μs to travel 1 km in free space. The train takes 12 seconds to cover that distance. The train is clearly not moving too fast for the wave to reach it. But propagation speed alone says little about how stable the received carrier phase is."
      },
      {
        "type": "h2",
        "text": "2. A tiny speed ratio can still produce appreciable Doppler"
      },
      {
        "type": "equation",
        "text": "f_D = (v cos θ / c) f_c = v cos θ / λ\n|f_D|_max ≈ 972 Hz at 300 km/h and 3.5 GHz"
      },
      {
        "type": "p",
        "text": "θ describes motion relative to the path direction; the sign depends on approaching or receding. Although v/c is tiny, it multiplies a carrier frequency of billions of cycles per second. At 3.5 GHz, the wavelength is about 8.6 cm. In 1 ms, the train travels 8.3 cm—almost one wavelength. For motion along the path, this is nearly a full cycle of phase change."
      },
      {
        "type": "p",
        "text": "A common frequency shift can be estimated and compensated. Multipath components with different shifts also create Doppler spread and time variation, making channel estimates age. A dominant line-of-sight shift and a multipath Doppler spread are therefore different problems. High mobility increases receiver-tracking demands; it does not automatically imply disconnection."
      },
      {
        "type": "h2",
        "text": "3. Cellular architecture adds a slower mobility problem"
      },
      {
        "type": "p",
        "text": "A cellular network divides service among logical cells with overlapping coverage. As serving-link quality changes, the network may hand the connection to another cell. Speed reduces the time available for measurements, decisions, and execution."
      },
      {
        "type": "equation",
        "text": "T_region ≈ L / v\nFor an illustrative L = 1 km: T_region ≈ 12 s"
      },
      {
        "type": "p",
        "text": "L is an effective along-track service-region length, not a universal cell size or a fixed handover interval. Delayed decisions, weak coverage during execution, or a handover failure can interrupt service. A well-supported handover can preserve continuity; a cell boundary is not inherently a dead zone."
      },
      {
        "type": "h2",
        "text": "4. Signal drops do not identify a single mechanism"
      },
      {
        "type": "ul",
        "items": [
          "Radio link: Doppler, fading, interference, and outdated channel estimates can reduce decoding reliability.",
          "Coverage: the carriage body and coated windows can attenuate signals; tunnels, terrain, and trackside deployment change the available paths.",
          "Network: handover procedures, scheduling, and shared capacity can reduce throughput even when signal strength remains usable."
        ]
      },
      {
        "type": "p",
        "text": "Distinguishing these requires measurements: serving-cell changes and handover events, received signal quality, packet loss, and throughput. Better trackside coverage, mobility procedures, and exterior antennas feeding an onboard network address different parts of the problem. Cell-free is one architectural approach, not the only remedy."
      },
      {
        "type": "h2",
        "text": "5. Cell-free: move the serving set with the user"
      },
      {
        "type": "p",
        "text": "In user-centric cell-free massive MIMO, a selected group of distributed access points cooperates to serve a device. As the device moves, that group changes, potentially retaining common access points during the transition:"
      },
      {
        "type": "equation",
        "text": "Serving set: {AP₁, AP₂} → {AP₂, AP₃}"
      },
      {
        "type": "p",
        "text": "The aim is more consistent service and better interference management through cooperation, rather than independent cells serving each region in isolation. The overlap can make a change of serving set less abrupt, provided association, coordination, and resource allocation are well designed."
      },
      {
        "type": "p",
        "text": "“Cell-free” does not remove mobility management. Access-point selection, cluster updates, channel estimation, synchronization, and fronthaul signaling remain. High speed makes timely coordination harder, and the architecture does not eliminate Doppler, vehicle penetration loss, or tunnels."
      },
      {
        "type": "p",
        "text": "The main lesson from the train ride is to separate the scales: microseconds for propagation, milliseconds for carrier and channel tracking, and seconds for crossing coverage regions in this example. A small v/c does not dismiss Doppler, and a sudden connection drop does not by itself prove a handover problem."
      }
    ]
  }
];
