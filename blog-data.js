// Personal study notes, displayed in array order.
window.BLOG_POSTS = [
  {
    "slug": "thz-bandwidth-and-beam-alignment",
    "title": "What I Find Interesting About THz",
    "lang": "en",
    "published": true,
    "summary": "Why the bandwidth appeals to me, how I picture THz propagation, and why sensing fits naturally into beam maintenance.",
    "blocks": [
      {
        "type": "p",
        "text": "What draws me to THz is the possibility of accessing much wider bandwidths. With more spectrum available, high data rates become possible without relying so heavily on spectral efficiency or ever-higher modulation orders. The challenge is then to make those wideband links work reliably."
      },
      {
        "type": "h2",
        "text": "More bandwidth, more room"
      },
      {
        "type": "equation",
        "text": "C = B log₂(1 + SNR)\nSNR = Pᵣ / (N₀B)"
      },
      {
        "type": "p",
        "text": "Bandwidth offers another way to increase communication rate. At a fixed SNR, channel capacity grows linearly with bandwidth B. But if the received power stays fixed, increasing bandwidth also increases the total noise power, so capacity grows more slowly than linearly. In other words, a wider band can increase data rates without relying solely on higher spectral efficiency."
      },
      {
        "type": "p",
        "text": "The same bandwidth is valuable for sensing, too. For a monostatic radar, range resolution is approximately ΔR = c/(2B), so a 10 GHz bandwidth corresponds to about 1.5 cm. Wider bandwidth makes it easier to distinguish objects that are close together in range, while angular resolution depends more on antenna aperture and wavelength."
      },
      {
        "type": "figure",
        "src": "assets/notes/thz-link.svg",
        "alt": "A flow diagram connecting wide bandwidth and short wavelength to their benefits, link constraints, and sensing-assisted control.",
        "width": 900,
        "height": 650
      },
      {
        "type": "h2",
        "text": "Where I picture it being useful"
      },
      {
        "type": "p",
        "text": "The most immediate THz use cases I think of are short-range, high-rate access links, such as indoor communications and dense outdoor hotspots. For these scenarios, I picture links spanning a few to a few tens of metres, usually under 100 m. Inter-satellite links are another interesting case because the signal path avoids atmospheric gas absorption."
      },
      {
        "type": "p",
        "text": "The challenge is making these links practical. At THz frequencies, the hardware sits near the boundary between electronics and photonics, and generating sufficient transmit power remains difficult. Wide bandwidth also means higher thermal noise power kTB. With limited transmit power and substantial noise over a wide bandwidth, antenna gain becomes central to closing the link budget."
      },
      {
        "type": "h2",
        "text": "The propagation picture"
      },
      {
        "type": "p",
        "text": "A shorter wavelength makes the propagation environment much more important to a THz link. Across roughly 0.1–10 THz, the wavelength shrinks from about 3 mm to 30 μm. At these scales, obstacles, surface texture, and atmospheric absorption can all have a significant impact on how the signal propagates."
      },
      {
        "type": "p",
        "text": "At lower microwave frequencies, diffraction can help a signal bend around obstacles. As the wavelength gets shorter, obstacles become electrically larger and diffraction generally becomes weaker. A person or an object can therefore block a THz link much more severely, making a clear path more valuable and unexpected blockage more disruptive. Maintaining a reliable connection may require an alternative propagation path."
      },
      {
        "type": "p",
        "text": "Shorter wavelengths also make ordinary surface features more significant. Consider a surface variation of 0.1 mm: it is only one-thousandth of a wavelength at 3 GHz, but one-tenth of a wavelength at 300 GHz. The same surface can therefore behave much more roughly at THz frequencies. Surface roughness reduces the strength of specular reflection and scatters more energy in other directions. As a result, the texture of a wall can determine how useful its reflected path is."
      },
      {
        "type": "p",
        "text": "If natural reflections are unreliable, a reconfigurable intelligent surface (RIS) offers a way to shape them deliberately. By adjusting the reflection phases across its elements, an RIS can make the reflected contributions reinforce toward a receiver, helping establish a useful alternative path around a blockage when the geometry allows it."
      },
      {
        "type": "p",
        "text": "Obstacles and surfaces are only part of the problem. Water vapour and oxygen also absorb electromagnetic energy at specific molecular resonance frequencies, creating frequency-dependent propagation loss and transmission windows. The usable bandwidth therefore depends not just on the available spectrum, but also on the carrier frequency, humidity, and link distance. The key question becomes: where can the available bandwidth be used most effectively while maintaining a reliable link?"
      },
      {
        "type": "h2",
        "text": "Small elements, a large collective aperture"
      },
      {
        "type": "equation",
        "text": "Aₑ = Gλ² / (4π)"
      },
      {
        "type": "p",
        "text": "For a given antenna gain, the effective aperture decreases with the square of the wavelength. However, shorter wavelengths also allow more antenna elements to fit into a given physical area. By combining these elements in an array, their signals can be steered to form a directional beam with high gain."
      },
      {
        "type": "h2",
        "text": "Near-field wavefronts"
      },
      {
        "type": "p",
        "text": "With a large array and a short wavelength, even modest differences in propagation distance across the aperture can produce substantial phase differences. As a result, wavefront curvature can matter even at typical indoor communication distances. A common estimate of the far-field boundary is the Rayleigh distance:"
      },
      {
        "type": "equation",
        "text": "R ≈ 2D²/λ"
      },
      {
        "type": "p",
        "text": "At 300 GHz, the wavelength is about 1 mm. For an aperture of 20 cm, the Rayleigh distance is approximately 80 m. This means that an indoor receiver may lie in the radiative near field, where the wavefront is still noticeably curved."
      },
      {
        "type": "p",
        "text": "In the far field, the wavefront can often be approximated as planar, and the array mainly steers the beam toward a particular direction. In the near field, the phase pattern across the array also depends on the receiver's distance. By compensating for the different path lengths from each element to a target point, the array can make the signals arrive in phase at that point, focusing energy there. This is the basic idea behind near-field focusing and wavefront engineering."
      },
      {
        "type": "h2",
        "text": "The beam has to stay useful"
      },
      {
        "type": "p",
        "text": "High antenna gain helps compensate for the propagation losses at THz frequencies, but it comes at the cost of a narrower beam. The transmitter and receiver first need to find a suitable beam pair to establish the link. Once the link is established, they must keep the beams aligned. As users move or obstacles enter the path, maintaining that alignment becomes an ongoing task."
      },
      {
        "type": "p",
        "text": "This is where sensing can help. By tracking movement, the system can predict where the user will be and adjust the beam before the link loses alignment. Sensing can also detect an approaching blockage early enough for the system to prepare an alternative reflected path or switch to another connection. In this way, sensing helps communication remain reliable as the environment changes."
      },
      {
        "type": "p",
        "text": "The tradeoff is clear: narrower beams provide higher gain, but they also demand more precise alignment and more frequent updates. This is why I see THz communication and sensing as closely connected. The more directional the link becomes, the more valuable it is to know where the user and potential blockers are, and how they are moving."
      }
    ]
  },
  {
    "slug": "wireless-layers-and-beamforming",
    "title": "My Understanding of Wireless Systems and Beamforming",
    "lang": "en",
    "published": true,
    "summary": "The mental picture I use for PHY, MAC, antennas, and the control offered by different beamforming architectures.",
    "blocks": [
      {
        "type": "h2",
        "text": "1. Wireless System in the bottom layer"
      },
      {
        "type": "p",
        "text": "I find wireless systems easier to understand by starting with two questions: how does a radio link work, and how do multiple links share the same system?"
      },
      {
        "type": "p",
        "text": "The first question belongs mainly to the physical layer (PHY). The PHY takes bits, encodes and modulates them into a waveform, sends that waveform through the channel, and tries to recover the original information at the receiver. Along the way, channel estimation helps characterize the channel, modulation and coding determine how information is represented and how errors are handled, and beamforming shapes how signals are transmitted and received."
      },
      {
        "type": "p",
        "text": "The second question belongs mainly to the medium access control layer (MAC). Even if an individual link works well, multiple users still need to share limited time, frequency, and spatial resources. The MAC decides who gets access to which resources and when, and coordinates retransmissions when necessary."
      },
      {
        "type": "p",
        "text": "The boundary between these two layers is not completely separate. Consider beamforming: choosing the weights that shape a beam is a physical-layer operation, while deciding which users should be served by which beams is closely tied to scheduling. Channel feedback connects the two. The PHY needs channel information to make transmission decisions, while the MAC needs sufficiently fresh information to decide how to allocate resources."
      },
      {
        "type": "h2",
        "text": "2. Why Beamforming Changes the Way We Use Space"
      },
      {
        "type": "p",
        "text": "One way to improve a wireless link is to make better use of the available spectrum. Another is to control where the transmitted energy goes."
      },
      {
        "type": "p",
        "text": "Wireless coverage can be organized into broad coverage areas, sectors, and eventually steerable beams. Each step allows more precise control over the direction in which energy is concentrated. By directing more energy toward a user, beamforming strengthens the useful signal and can reduce interference in other directions."
      },
      {
        "type": "figure",
        "src": "assets/notes/antenna-radiation-evolution.png",
        "alt": "A schematic progression from omnidirectional horizontal coverage to sector radiation and an antenna array producing multiple beams in azimuth and elevation.",
        "width": 2048,
        "height": 1536
      },
      {
        "type": "p",
        "text": "This becomes particularly valuable when several users have sufficiently distinct spatial channels. Instead of assigning each user a separate time or frequency resource, the system may be able to serve multiple users on the same time–frequency resources using different spatial beams. Space then becomes another resource that can be exploited."
      },
      {
        "type": "figure",
        "src": "assets/notes/multiuser-beamforming.png",
        "alt": "An antenna array directs separate beams toward users, vehicles, and buildings to illustrate spatially directed communication.",
        "width": 750,
        "height": 507
      },
      {
        "type": "p",
        "text": "An antenna has a radiation pattern that determines how it radiates energy. When several antenna elements operate together, their electromagnetic fields combine. By adjusting the relative phases of the signals sent to different elements, we can make the waves reinforce each other in some directions and partially cancel in others. This is constructive and destructive interference, and it is the basic physical principle behind beamforming."
      },
      {
        "type": "figure",
        "src": "assets/notes/beamforming-interference.png",
        "alt": "Two phased arrays with opposite phase progressions. Overlapping wave fronts illustrate constructive interference along the steered beam and destructive interference in other directions.",
        "width": 1024,
        "height": 572
      },
      {
        "type": "h2",
        "text": "3. The Difference Between Antennas and RF Chains"
      },
      {
        "type": "p",
        "text": "An antenna element radiates or receives electromagnetic energy. An RF chain, by contrast, provides an independently controlled signal path, typically including the circuitry needed to convert and process signals at radio frequencies. A phase shifter adjusts the phase of a signal that already exists."
      },
      {
        "type": "p",
        "text": "These are different functions, and the distinction matters. Adding antenna elements increases the physical aperture and gives the array more elements with which to shape its radiation pattern. Adding independent RF chains increases the number of independently generated signal paths available to control that array."
      },
      {
        "type": "p",
        "text": "The main beamforming architectures make different tradeoffs here."
      },
      {
        "type": "h2",
        "text": "4. Digital, Analog, and Hybrid Beamforming"
      },
      {
        "type": "p",
        "text": "In a fully digital array, each antenna element typically has its own RF chain. The system can apply independent complex weights to the signals sent to different elements, with flexible control across users and, in many implementations, across subcarriers. This offers substantial freedom, but the RF circuitry, data converters, power consumption, and cost can become significant as the array grows."
      },
      {
        "type": "p",
        "text": "Analog beamforming takes the opposite approach. A single RF chain feeds many antenna elements through a network of phase shifters. The elements cooperate to form a directional beam, but the array has much less freedom to generate multiple independent waveforms. It is a more hardware-efficient way to obtain antenna gain, especially when the system does not need full digital control of every element."
      },
      {
        "type": "p",
        "text": "Hybrid beamforming sits between these two approaches. It uses fewer RF chains than antenna elements and combines digital processing with an analog phase-shifting network. The RF chains provide multiple independently controlled signals, while the analog network distributes those signals across the larger array and shapes their radiation."
      },
      {
        "type": "figure",
        "src": "assets/notes/beamforming-architectures.svg",
        "alt": "Three simplified signal-flow rows compare fully digital beamforming, single-chain analog beamforming, and subarray hybrid beamforming.",
        "width": 900,
        "height": 680
      },
      {
        "type": "h2",
        "text": "5. What a Hybrid Array Actually Controls"
      },
      {
        "type": "p",
        "text": "An RF chain generates and processes its own signal. The analog network then distributes that signal across antenna elements and adjusts their relative phases. The resulting fields combine to form a beam."
      },
      {
        "type": "p",
        "text": "In a subarray-based hybrid architecture, each RF chain feeds its own group of antenna elements. The phase shifters within that subarray can apply different phase settings to the elements, allowing the subarray to steer its beam. Multiple subarrays can operate simultaneously, each driven by a different RF chain and its own waveform."
      },
      {
        "type": "figure",
        "src": "assets/notes/hybrid-beamforming-delays.png",
        "alt": "Digital baseband precoding feeds multiple RF chains. Each illustrated branch includes analog phase shifters and delay elements before its antenna subarray, with beams directed toward different users.",
        "width": 2500,
        "height": 1347
      },
      {
        "type": "p",
        "text": "The important point is that phase shifters do not create additional independent data streams. They control how an existing waveform is distributed in space. The RF chains provide the independent signal paths; the analog network determines how those signals are radiated."
      },
      {
        "type": "h2",
        "text": "6. A Different Approach: Lens Antennas"
      },
      {
        "type": "p",
        "text": "A lens antenna offers another way to control where electromagnetic energy goes. Instead of relying entirely on an electronically controlled phase-shifting network, it uses the lens's geometry and electromagnetic properties to focus or redirect waves."
      },
      {
        "type": "p",
        "text": "On reception, waves arriving from a particular direction are focused near a corresponding feed position. The lens effectively maps an incoming direction to a location where the energy can be collected. On transmission, exciting a feed at a particular position produces a beam in the corresponding direction, with the mapping determined by the lens design."
      },
      {
        "type": "p",
        "text": "A switching network can select among available feeds, allowing the system to switch between different beam directions. Much of the spatial transformation is built into the lens itself, so beam selection can be achieved without independently controlling every antenna element."
      }
    ]
  },
  {
    "slug": "optimization-starts-with-the-system",
    "title": "What Makes an Optimization Problem Worth Solving",
    "lang": "en",
    "published": true,
    "summary": "My view of meaningful objectives, real system bottlenecks, performance benchmarks, and solutions that reveal structure.",
    "blocks": [
      {
        "type": "p",
        "text": "With limited power and time, improving one part of a system usually costs something elsewhere. More power can improve a link but cost energy or create interference. More beam training can improve alignment but take time away from data. Optimization is a way to make a good decision within those tradeoffs."
      },
      {
        "type": "h2",
        "text": "Start with the problem the system actually has"
      },
      {
        "type": "p",
        "text": "The objective should mean something in the real system: useful throughput, reliability, latency, energy, or secrecy. The constraints should come from the same place—available power, RF chains, hardware settings, and what the system actually knows about its channels."
      },
      {
        "type": "p",
        "text": "Combining technique names and then optimizing the combination rarely feels like a satisfying starting point. I care more about the bottleneck: what is holding the system back, what can be changed, and what must be sacrificed to improve it? That gives the mathematics a reason to exist."
      },
      {
        "type": "h2",
        "text": "Optimization also gives a benchmark"
      },
      {
        "type": "p",
        "text": "A practical system may need a fast, reusable solution rather than run an optimizer every time. An optimized reference helps show the price of that convenience: how much performance is exchanged for speed and simplicity, under the same resources and assumptions? That gap makes the engineering decision tangible."
      },
      {
        "type": "p",
        "text": "A local solution supplies a useful design reference; a global solution or proven bound tells more about the remaining room for improvement. The comparison becomes especially meaningful when it includes computation and training overhead."
      },
      {
        "type": "h2",
        "text": "Think about computational cost while building the model"
      },
      {
        "type": "p",
        "text": "Efficiency starts at the modeling stage. Variable dimensions, constraint count, and constraint structure already shape how much work the solver will face. A few examples make this concrete:"
      },
      {
        "type": "ul",
        "items": [
          "Variable dimension: K beamforming vectors for N antennas contain NK complex entries, or 2NK real variables. More users and antennas expand the problem together.",
          "Constraint count: one quality-of-service constraint per user in each of T slots gives KT conditions. A finer time grid can quickly enlarge both the variables and the constraint set.",
          "Constraint type: scalar power bounds and a large positive-semidefinite matrix constraint ask for very different computations. SDR also lifts one complex N-element vector into an N × N Hermitian matrix with N² real degrees of freedom. Gaining a convex formulation can come with a substantial increase in dimension.",
          "Discrete choices: M binary activation variables allow 2ᴹ possible patterns. Even a short list of on/off decisions can introduce a large combinatorial search space."
        ]
      },
      {
        "type": "p",
        "text": "A good model captures the important tradeoff with manageable computational work. Eliminating redundant variables and exposing sparsity, separable blocks, or shared structure can be as valuable as choosing a better solver. These decisions belong in the modeling stage."
      },
      {
        "type": "h2",
        "text": "Find structure in a difficult problem"
      },
      {
        "type": "p",
        "text": "Wireless problems often become nonconvex through interference, variable coupling, discrete choices, or rank constraints. An equivalent reformulation can reveal a simpler problem; approximations and relaxations offer other ways to expose useful structure."
      },
      {
        "type": "ul",
        "items": [
          "SCA builds convex surrogate problems around the current iterate and solves them successively. Well-chosen surrogates can lead to a stationary solution.",
          "Lagrangian methods attach multipliers to constraints. The multipliers make resource tradeoffs visible and can help decompose the problem; the dual also provides a bound.",
          "SDR lifts a quadratic variable to W = wwᴴ and relaxes the rank-one requirement. For suitable formulations this gives a semidefinite program, followed by recovering a usable vector solution."
        ]
      },
      {
        "type": "h2",
        "text": "Alternating updates should be cheap"
      },
      {
        "type": "p",
        "text": "A jointly difficult problem can become convex in one group of variables when the others are fixed. Alternating optimization uses that structure. Explicit updates for the individual blocks make this approach especially attractive."
      },
      {
        "type": "p",
        "text": "If every outer update launches another expensive iterative search, much of that practical appeal disappears. The work per update matters just as much as the number of outer iterations. Closed-form updates are worth pursuing because they can make the algorithm simpler to run and easier to inspect."
      },
      {
        "type": "p",
        "text": "WMMSE is a useful example: receive filters and MSE weights have explicit updates, and a power-constrained precoder can be expressed through a multiplier found by a scalar search. The joint problem becomes a sequence of structured steps."
      },
      {
        "type": "h2",
        "text": "The best part is understanding the answer"
      },
      {
        "type": "p",
        "text": "A closed-form solution lets me see how a decision changes with power, interference, or another system parameter. Getting both a decision and an explanation makes the derivation worth the effort. When numerical optimization is needed, a bound, a limiting case, or a sensitivity result can still provide insight."
      }
    ]
  },
  {
    "slug": "covert-communication-and-physical-layer-security",
    "title": "How I Understand Covert Communication and PLS",
    "lang": "en",
    "published": true,
    "summary": "Hiding a transmission, hiding its message, and why the kind of uncertainty and the chosen performance measure matter.",
    "blocks": [
      {
        "type": "p",
        "text": "Covert communication hides the existence of a transmission; physical-layer security (PLS) hides its content. Willie tries to notice activity, while Eve tries to learn the message. In both cases, the physical channel becomes part of the protection."
      },
      {
        "type": "h2",
        "text": "Hiding a signal inside the background"
      },
      {
        "type": "equation",
        "text": "H₀: Yᵢ = Zᵢ\nH₁: Yᵢ = h_W Xᵢ + Zᵢ,   i = 1, …, n"
      },
      {
        "type": "p",
        "text": "Keeping Alice’s added signal small enough, or ambiguous enough, lets it blend into what Willie already expects to see."
      },
      {
        "type": "equation",
        "text": "ξ* = min_detector (P_FA + P_MD) ≥ 1 − ε"
      },
      {
        "type": "p",
        "text": "With equal priors, ξ*/2 is the best average detection error. A sum near one means the observations give Willie little advantage over guessing."
      },
      {
        "type": "p",
        "text": "A channel use is one input–output opportunity in the signal model, usually a symbol dimension. A codeword spans n such uses, carrying the message across them. This makes blocklength a physical resource to think about alongside power."
      },
      {
        "type": "h2",
        "text": "Why the square root stays in my mind"
      },
      {
        "type": "p",
        "text": "In the classical AWGN model with known noise statistics, Willie estimates average energy more accurately as n grows. For real independent Gaussian observations with noise variance σ² and added signal variance q:"
      },
      {
        "type": "equation",
        "text": "D(P₁ⁿ ∥ P₀ⁿ) ≈ nr²/4\nr = q/σ² ≪ 1"
      },
      {
        "type": "p",
        "text": "Keeping this divergence bounded asks for received signal power of order 1/√n. Bob’s low-SNR rate per use then has the same scaling, leading to:"
      },
      {
        "type": "equation",
        "text": "Total covert bits: O(√n)\nBits per channel use: O(1/√n)"
      },
      {
        "type": "p",
        "text": "There is still more information to send with a longer block, but the per-use rate gets smaller. Low power is the price of hiding from an observer who keeps accumulating evidence."
      },
      {
        "type": "h2",
        "text": "The uncertainty under H₀ feels especially important"
      },
      {
        "type": "p",
        "text": "Random noise samples and an unknown background power create different kinds of uncertainty. With a stable, known baseline, averaging helps Willie expose an added signal. With an uncertain baseline, the same energy increase may look like background variation even under H₀."
      },
      {
        "type": "p",
        "text": "Uncertainty introduced under H₁ often increases the coefficient of the square-root law: more covert bits can be sent, while the growth remains proportional to √n. The more promising possibility for changing that growth is uncertainty already present under H₀, such as background noise power that Willie cannot accurately determine. If it persists as observations accumulate, it may allow growth beyond the square-root law."
      },
      {
        "type": "h2",
        "text": "The viewpoint changes what counts as covert"
      },
      {
        "type": "p",
        "text": "For states S known to Willie, the metric can be chosen as:"
      },
      {
        "type": "equation",
        "text": "Average: E_S[ξ*(S)] ≥ 1 − ε\nOutage: Pr_S{ξ*(S) < 1 − ε} ≤ δ\nEvery state: inf_s ξ*(s) ≥ 1 − ε"
      },
      {
        "type": "p",
        "text": "The relationship between uncertainty and covertness depends strongly on the metric. Greater channel variability may improve average covertness because favorable realizations contribute to the average. Under an outage metric, larger fluctuations may create more states in which the covertness requirement fails. The same variability can therefore improve the average while increasing outage risk. Something useful from one viewpoint becomes a source of risk from another."
      },
      {
        "type": "p",
        "text": "For a specific system, choosing the metric that matches its actual operating needs is essential. Average performance, tolerance for occasional exposure, and protection in every state correspond to different requirements; the metric should reflect the one the system actually needs."
      },
      {
        "type": "h2",
        "text": "PLS: create a channel advantage, then use it"
      },
      {
        "type": "p",
        "text": "Bob and Eve receive the same transmission through different paths, so their observations can have very different quality. This advantage can also be actively created: steer more useful energy toward Bob, inject artificial noise toward Eve, or choose a favorable transmission opportunity."
      },
      {
        "type": "p",
        "text": "The aim is to give Bob a clearer signal while making Eve’s observation less informative. Propagation and signal design become resources for security, and beamforming takes on another purpose."
      },
      {
        "type": "h3",
        "text": "Wiretap coding: a public codebook with deliberate confusion"
      },
      {
        "type": "p",
        "text": "I picture a codebook as a collection of possible transmitted waveforms. Through Bob’s better channel, the received waveform is easier to match to the intended codeword. Through Eve’s noisier channel, many candidates can remain plausible."
      },
      {
        "type": "equation",
        "text": "Message m + private random choice r → codeword xⁿ(m, r)"
      },
      {
        "type": "p",
        "text": "Wiretap coding assigns multiple codewords to each message and randomly chooses one for transmission. The codebook and the grouping can be public; the random choice is private. With suitable coding rates, Bob can distinguish the transmission reliably, while Eve’s observations stay compatible with different messages."
      },
      {
        "type": "equation",
        "text": "Bob: Pr{M̂_B ≠ M} → 0\nEve: I(M; Z_Eⁿ ∣ C) → 0"
      },
      {
        "type": "h3",
        "text": "The advantage appears directly in secrecy capacity"
      },
      {
        "type": "p",
        "text": "For a scalar real Gaussian wiretap channel:"
      },
      {
        "type": "equation",
        "text": "C_s = [C_B − C_E]⁺\n= [½ log₂(1 + γ_B) − ½ log₂(1 + γ_E)]⁺"
      },
      {
        "type": "p",
        "text": "The capacity gap gives the design goal: improve Bob’s reception, reduce Eve’s useful information, and use the difference to carry secret bits. Channel shaping creates the opportunity; wiretap coding uses it."
      },
      {
        "type": "h2",
        "text": "Another route to secure communication"
      },
      {
        "type": "p",
        "text": "PLS and covert communication add another route to secure communication alongside mathematical cryptography and wired connections. They can work together with those established choices, adding protection through the physical channel and the waveform itself. Having that extra possibility is exciting. Who knows what these ideas might grow into in the future?"
      }
    ]
  },
  {
    "slug": "high-speed-train-doppler-and-cell-free",
    "title": "Thoughts from a High-Speed Train Ride",
    "lang": "en",
    "published": true,
    "summary": "How intermittent train connectivity led me from Doppler intuition to thinking about cells and user-centric service.",
    "blocks": [
      {
        "type": "p",
        "text": "Sometimes the connection suddenly gets worse on a high-speed train. My first thought was Doppler: perhaps the train was simply moving too fast. Later, comparing that speed with the speed of electromagnetic waves made me hesitate. Learning about cellular handover then gave the experience a different meaning: I had been thinking mainly about the wave, while the network also had to keep changing how it served me."
      },
      {
        "type": "h2",
        "text": "Getting a feel for the speed of the wave"
      },
      {
        "type": "equation",
        "text": "c ≈ 3 × 10⁸ m/s\nv = 300 km/h ≈ 83.3 m/s\nv/c ≈ 2.8 × 10⁻⁷"
      },
      {
        "type": "p",
        "text": "A wave travels 1 km in about 3.3 μs; the train takes 12 seconds. Putting those numbers together makes the scale difference feel real. The wave reaches the train quickly. What keeps changing is the propagation path, its phase, and the infrastructure serving the connection."
      },
      {
        "type": "h2",
        "text": "The Doppler intuition still has something to it"
      },
      {
        "type": "equation",
        "text": "f_D = (v cos θ / c) f_c = v cos θ / λ\n|f_D|_max ≈ 972 Hz at 300 km/h and 3.5 GHz"
      },
      {
        "type": "p",
        "text": "The small speed ratio multiplies a carrier frequency of billions of cycles per second. At 3.5 GHz, a wavelength is about 8.6 cm, and the train travels 8.3 cm in just 1 ms. Moving almost one wavelength changes the received phase substantially. That was the comparison I had been missing when looking only at v/c."
      },
      {
        "type": "p",
        "text": "Receivers track frequency shifts and changing channels. With several propagation paths, their different Doppler shifts add another tracking task. So the original Doppler thought was pointing at something real; the missing piece was the network’s service structure."
      },
      {
        "type": "h2",
        "text": "Passing through cells"
      },
      {
        "type": "p",
        "text": "As the train moves, one serving cell becomes less suitable and another becomes more useful. The network measures, decides, and executes a handover. What feels like one continuous connection from my seat is supported by a sequence of network decisions."
      },
      {
        "type": "equation",
        "text": "Time across a service region ≈ L / v\nFor an illustrative L = 1 km: about 12 s"
      },
      {
        "type": "p",
        "text": "A train moves through coverage quickly, leaving less time for each transition. Carriage attenuation, tunnels, weak coverage, and shared capacity also affect the experience. Handover became an important explanation to keep in mind alongside those radio conditions."
      },
      {
        "type": "h2",
        "text": "Why cell-free caught my attention"
      },
      {
        "type": "p",
        "text": "User-centric cell-free massive MIMO offers a different picture: a group of distributed access points cooperates around the user, and the group changes as the user moves."
      },
      {
        "type": "equation",
        "text": "Serving set: {AP₁, AP₂} → {AP₂, AP₃}"
      },
      {
        "type": "p",
        "text": "I like the idea that the service follows the user. A shared access point can maintain continuity while another joins or leaves the serving group. That feels more natural for a moving train than thinking entirely in terms of separate regions and cell edges."
      },
      {
        "type": "p",
        "text": "The coordination still has work to do—updating the group, obtaining channel estimates, synchronizing access points, and exchanging information over the fronthaul. The work shifts toward organizing several access points around a connection, instead of treating each cell as its own little world."
      },
      {
        "type": "p",
        "text": "After that train ride, I started thinking about both sides of mobility: the receiver following a changing waveform, and the network following a moving user. Cell-free connects directly to the second question."
      }
    ]
  },
  {
    "slug": "multipath-doppler-and-coherence",
    "title": "Multipath and Motion: Reading the Interference Pattern",
    "lang": "en",
    "published": true,
    "summary": "Connecting delayed paths, frequency selectivity, and motion through one picture of superposition.",
    "blocks": [
      {
        "type": "p",
        "text": "The same transmitted signal can reach the receiver directly, by reflection, by scattering, or by diffraction around an edge. These routes bring copies with different amplitudes, phases, and delays—the physical picture behind multipath."
      },
      {
        "type": "figure",
        "src": "assets/notes/wireless-propagation-paths.png",
        "alt": "A transmitter reaches a vehicle through a direct line-of-sight path, reflection from a building, scattering from a tree, and diffraction around a rooftop.",
        "width": 2400,
        "height": 1790
      },
      {
        "type": "p",
        "text": "Across space, their superposition forms an invisible landscape: bright patches where waves reinforce, dark patches where they cancel. This is the interference pattern I picture. If everything stays still, the result at each point stays fixed."
      },
      {
        "type": "equation",
        "text": "Δφ = 2πfΔτ = 2πΔL/λ"
      },
      {
        "type": "p",
        "text": "When I move, paths from different directions change length by different amounts, changing their relative phases. I therefore cross that landscape’s bright and dark patches. A path difference changing by a fraction of a wavelength can already rearrange the sum."
      },
      {
        "type": "p",
        "text": "Moving faster carries me across the same patches sooner, so the channel stays similar for less time: a shorter coherence time. The unequal rates of phase change appear as different Doppler shifts; a wider spread makes the interference change faster."
      },
      {
        "type": "figure",
        "src": "assets/notes/multipath-spatial.png",
        "alt": "Simulated received power along a twelve-wavelength route: scattered paths produce repeated fluctuations and deep dips; adding a strong direct path reduces the fluctuations.",
        "width": 1620,
        "height": 864
      },
      {
        "type": "p",
        "text": "Staying at one point and sweeping f is like walking through a pattern along the frequency axis. Delays stay fixed, but a longer-delay path accumulates phase faster as f changes. Their relative phase therefore turns, creating peaks and dips. A larger delay difference produces more relative phase change for the same frequency step, narrowing these patches. Coherence bandwidth describes the width of a patch where the channel stays similar."
      },
      {
        "type": "p",
        "text": "A signal occupying a nearly uniform patch sees flat fading; a wider signal spanning different gains experiences frequency-selective fading."
      }
    ]
  },
  {
    "slug": "isac-the-same-wave-different-unknowns",
    "title": "ISAC: The Same Wave, Different Unknowns",
    "lang": "en",
    "published": true,
    "summary": "Connecting waveform design, multipath, and sensing architectures through the same observation model.",
    "blocks": [
      {
        "type": "p",
        "text": "The search for wider available bandwidth takes communication toward higher bands such as THz, bringing benefits for sensing too. More bandwidth helps separate echoes with closer delays, improving range resolution. Shorter wavelengths let many antenna elements fit into a compact aperture; a larger aperture relative to wavelength gives finer angular resolution. Massive-MIMO beamforming and radar phased arrays already share the idea of controlling signals across an array. This makes ISAC feel like a natural convergence: the same hardware, the same spectrum, and the same electromagnetic waveform can carry data and probe the environment. Both tasks fit the same model:"
      },
      {
        "type": "equation",
        "text": "Y = HX + N"
      },
      {
        "type": "p",
        "text": "Communication uses an estimate of H to recover unknown X. Sensing uses known X to infer H and extract delay, angle, and Doppler. The same data-bearing X can be unknown to the communication receiver and already known to the sensing processor."
      },
      {
        "type": "p",
        "text": "Communication needs the waveform to vary with the message; that data-dependent variation gives OFDM its random-looking shape. Radar needs echoes from different delays and velocities to be easy to distinguish, so it favors deliberately designed structure, as in the chirp. Fixing more of the waveform to preserve its sensing properties leaves fewer choices for embedding data. Letting data change it more freely can change the quality of the sensing estimates. Different waveforms therefore offer different combinations of communication rate and sensing accuracy. Yet once the data waveform is generated, its exact form is known to the transmitter. The same OFDM transmission can therefore also serve as a sensing reference."
      },
      {
        "type": "figure",
        "src": "assets/notes/isac-ofdm-and-chirp.png?v=2",
        "alt": "Simulated OFDM with random QPSK data compared with a linear-frequency radar chirp at equal duration and mean power. Real waveforms appear above time-frequency energy maps; the chirp has a clear frequency sweep.",
        "width": 1800,
        "height": 1152
      },
      {
        "type": "h2",
        "text": "Practical challenges"
      },
      {
        "type": "p",
        "text": "Multipath can help MIMO because different spatial paths give the receiver different mixtures of the transmitted streams. When those mixtures are independent, the channel rank increases and more streams can be separated. Radar uses echo delay to infer target range. A reflected detour adds delay without adding a new target; if treated as a direct echo, that extra delay becomes a false target position. The same path can therefore help recover data while making the target’s location ambiguous."
      },
      {
        "type": "p",
        "text": "In a monostatic system listening while transmitting, direct leakage can overwhelm weak echoes, requiring isolation and self-interference cancellation. Separating transmitter and receiver reduces local leakage but introduces a synchronization problem: timing offsets can resemble propagation delays, and frequency offsets can resemble Doppler. The architecture trades one measurement difficulty for another."
      },
      {
        "type": "h2",
        "text": "RF sensing"
      },
      {
        "type": "p",
        "text": "I also see RF sensing as another form of ISAC: using communication signals themselves to learn about the environment. The transmitted wave interacts with objects through reflection, refraction, scattering, and diffraction before reaching the receiver. Those interactions change the paths’ strengths, phases, and delays. CSI records their combined effect; for one antenna pair, a multipath model is:"
      },
      {
        "type": "equation",
        "text": "H(f, t) = Σℓ αℓ(f, t) exp(−j2πfτℓ(t))"
      },
      {
        "type": "p",
        "text": "Each path contributes a complex gain αℓ and a delay τℓ. A reflecting surface adds a path; an edge can bend energy into a shadowed region. Reading these traces across frequency, time, and antennas gives clues about the environment. More intriguingly, even humid air and dry dust particles can noticeably affect the signal, leaving traces of their presence. A communication receiver estimates H to recover the message. RF sensing turns that same H into something worth reading in its own right—the environment has written itself into the signal."
      }
    ]
  },
  {
    "slug": "some-thoughts-on-6g-making-space-more-useful",
    "title": "Some Thoughts on 6G: Making Space More Useful",
    "lang": "en",
    "published": true,
    "summary": "How higher frequencies, larger arrays, and wider bandwidth interact—and what remains after the costs of using them.",
    "blocks": [
      {
        "type": "p",
        "text": "In 6G research, higher carrier frequencies, wider bandwidths, and larger arrays form a tightly coupled triad: each solves a problem created by the others while introducing new constraints. Higher frequencies open up wider bandwidths but suffer from severe blockage and limited transmit power, forcing systems to adopt larger array apertures to concentrate energy at the receiver."
      },
      {
        "type": "p",
        "text": "Expanding the aperture, in turn, shifts the propagation physics. Under the common near-field boundary R ≈ 2D²/λ, a 1.5 m array at 10 GHz extends the near field to about 150 m, making near-field propagation relevant well below THz. Because spherical wavefronts depend on both angle and distance, phase control across the array can focus energy onto a specific location—enabling distance-based user separation, but making the link far harder to maintain."
      },
      {
        "type": "p",
        "text": "Sustaining this focus requires overcoming both spatial and spectral sensitivities. In space, coordinates alone are insufficient: even at a fixed position, device rotation alters antenna orientation and polarization relative to the local field, demanding joint tracking of location and orientation. Across frequency, the wide bandwidths unlocked by higher carriers induce beam squint: phase shifters tuned to the center frequency misalign waves elsewhere in the band, requiring true-time-delay hardware at the cost of added loss and complexity."
      },
      {
        "type": "p",
        "text": "Channel estimation, beam tracking, and wideband hardware thus converge on a single goal: keeping spatial focusing viable in practice. Because every safeguard consumes resources, the central question is how much net gain survives after accounting for training overhead, mobility, hardware loss, and computation."
      }
    ]
  }
];
