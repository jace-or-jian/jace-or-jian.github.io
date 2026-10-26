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
        "text": "THz offers much wider bandwidths, so higher data rates can come from using more spectrum without pushing spectral efficiency ever higher through more complex modulation. The main challenge is keeping those wideband links reliable."
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
        "text": "The same bandwidth is valuable for sensing, too. For a monostatic radar, range resolution is approximately ΔR = c/(2B), so a 10 GHz bandwidth corresponds to about 1.5 cm. Wider bandwidth also makes it easier to distinguish objects that are close together in range."
      },
      {
        "type": "figure",
        "src": "assets/notes/thz-link.svg?v=2",
        "alt": "A flow diagram connecting wide bandwidth and short wavelength to their benefits, link constraints, and sensing-assisted control.",
        "width": 900,
        "height": 650
      },
      {
        "type": "h2",
        "text": "Where THz could be useful"
      },
      {
        "type": "p",
        "text": "THz is well suited to short-range links that need high data rates, such as indoor communications and dense outdoor hotspots. Typical distances are a few to a few tens of metres, usually under 100 m. Inter-satellite links are another interesting use case because the signal travels through space without atmospheric gas absorption."
      },
      {
        "type": "p",
        "text": "Making these links practical requires enough received power. THz sits between electronics and photonics, where generating sufficient transmit power remains difficult. Meanwhile, wider bandwidth increases thermal noise power, kTB. With limited transmit power and more noise across the band, high antenna gain becomes essential to maintaining a usable SNR."
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
        "text": "When the direct link is blocked, natural reflections may still provide an alternative route. Sensing or a channel map can help locate useful reflecting surfaces and identify the directions in which the transmitter and receiver should point their beams. This environmental information gives the system a starting point for finding and tracking a reflected path. At THz, precise alignment remains essential because the beams are narrow. Propagation and reflection losses also mean that a geometrically available path may deliver too little power to support the link."
      },
      {
        "type": "p",
        "text": "An RIS provides more control over the reflected wave. By adjusting the reflection phases across its elements, it can make those contributions reinforce toward the receiver. Rather than relying entirely on how an ordinary surface happens to reflect energy, the system can deliberately shape a reflected path around the blockage."
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
        "text": "Wireless systems involve two closely connected questions: how to transmit information reliably over a radio link, and how to let multiple users share limited resources."
      },
      {
        "type": "p",
        "text": "The first question belongs mainly to the physical layer (PHY). The PHY takes bits, encodes and modulates them into a waveform, sends that waveform through the channel, and tries to recover the original information at the receiver. Along the way, channel estimation helps characterize the channel, modulation and coding determine how information is represented and how errors are handled, and beamforming shapes how signals are transmitted and received."
      },
      {
        "type": "p",
        "text": "The second question belongs mainly to the medium access control layer (MAC). Multiple users compete for limited time, frequency, and spatial resources, and their transmissions can interfere when those resources overlap. The MAC coordinates who transmits, when, and on which resources to manage this competition and limit harmful interference. It also coordinates retransmissions when necessary."
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
        "text": "On transmission, an RF chain supplies a waveform, and the antenna elements radiate it into space. If one RF chain feeds many elements, they transmit copies of the same waveform. Phase shifters adjust the phases of those copies so their fields reinforce in a chosen direction."
      },
      {
        "type": "p",
        "text": "Adding antenna elements gives the array more radiating points for shaping the beam. Adding RF chains allows more signals to be controlled independently. Digital, analog, and hybrid beamforming make different choices about how these RF chains connect to the antenna elements."
      },
      {
        "type": "h2",
        "text": "4. Digital, Analog, and Hybrid Beamforming"
      },
      {
        "type": "p",
        "text": "Fully digital beamforming typically uses one RF chain per antenna element. Digital processing controls the amplitude and phase of each element’s signal independently, giving the array flexibility to form beams and carry multiple data streams. The cost is a large number of RF chains and data converters, with higher power consumption."
      },
      {
        "type": "p",
        "text": "Analog beamforming uses one RF chain shared by many antenna elements. The elements transmit copies of the same waveform, and phase shifters adjust how those copies combine into a beam. It uses much less RF hardware, but provides only one independently controlled RF waveform for the whole array."
      },
      {
        "type": "p",
        "text": "Hybrid beamforming uses several RF chains shared across a larger antenna array. The RF chains supply different, independently controlled waveforms, and the analog network distributes and phase-shifts them across the elements. This allows multiple signal paths while keeping the number of RF chains smaller than the number of antennas."
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
        "type": "equation",
        "text": "x = FRF FBB s",
        "parts": [
          {
            "tag": "strong",
            "text": "x"
          },
          {
            "text": " = "
          },
          {
            "tag": "strong",
            "text": "F"
          },
          {
            "tag": "sub",
            "text": "RF"
          },
          {
            "text": " "
          },
          {
            "tag": "strong",
            "text": "F"
          },
          {
            "tag": "sub",
            "text": "BB"
          },
          {
            "text": " "
          },
          {
            "tag": "strong",
            "text": "s"
          }
        ]
      },
      {
        "type": "p",
        "text": "Data streams s are first mapped to RF-chain signals by the digital weights, then distributed across the antennas by the analog network."
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
        "text": "Like an optical lens, a lens antenna uses its material and shape to refract and focus electromagnetic waves. Different arrival directions focus near different feed antennas; in transmission, each feed produces a beam in its corresponding direction."
      },
      {
        "type": "p",
        "text": "An RF switching network connects the RF chains to selected feed antennas. Switching these connections on or off selects which beams are active: the lens performs the focusing, while the switches choose the directions to use."
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
        "text": "Solver efficiency is shaped long before the solver starts. The way a problem is modeled determines not only how many variables the solver must handle, but also the structure of the constraints and the complexity of the search. A few examples show why these details matter."
      },
      {
        "type": "ul",
        "items": [
          "Variable dimension. If each of K users has an N-element complex beamforming vector, the model contains NK complex entries, equivalent to 2NK real variables. Increasing the number of users or antennas expands the optimization problem. If the beamformers are optimized independently over T time slots, the variable count grows with T as well.",
          "Constraint count. Suppose each user must satisfy one quality-of-service (QoS) requirement in every time slot. Across T slots, this gives KT constraints. A finer time grid can therefore increase both the number of decisions and the number of conditions that must be satisfied.",
          "Constraint structure. The number of constraints alone does not tell us how difficult a problem is to solve. Simple scalar power limits are generally much easier to handle than a large positive-semidefinite matrix constraint. Semidefinite relaxation (SDR), for example, lifts a complex beamforming vector into an N × N Hermitian matrix. This matrix has N² real degrees of freedom, a substantial increase over the original vector representation. The relaxation can make the problem convex, but that improvement in mathematical structure may come at a higher computational cost.",
          "Discrete decisions. Suppose M binary variables represent whether individual components are active or inactive. They define 2ᴹ possible activation patterns. Unlike a simple increase in continuous variables, adding binary decisions can introduce combinatorial complexity that grows exponentially with M."
        ]
      },
      {
        "type": "p",
        "text": "A good model captures the important tradeoff with manageable computational work. Eliminating redundant variables and exposing sparsity, separable blocks, or shared structure can be as valuable as choosing a better solver. These decisions belong in the modeling stage."
      },
      {
        "type": "h2",
        "text": "Find Structure in a Difficult Problem"
      },
      {
        "type": "p",
        "text": "Wireless optimization problems can be difficult for different reasons. Interference couples the decisions made for different users, some constraints are nonconvex, and discrete choices introduce combinatorial complexity."
      },
      {
        "type": "p",
        "text": "The first step is to understand where the difficulty comes from. Sometimes an equivalent reformulation reveals useful structure. When an exact reformulation is not enough, approximations and relaxations offer other ways to make the problem more manageable. Three techniques illustrate these different approaches, for example."
      },
      {
        "type": "ul",
        "items": [
          "SCA: solve a sequence of simpler problems. Instead of tackling the original nonconvex problem directly, successive convex approximation (SCA) constructs a convex surrogate around the current iterate and solves it repeatedly. Each solution provides a new point around which to build the next subproblem. Under suitable conditions, this process can converge to a stationary point, although it does not generally guarantee a global optimum.",
          "Lagrangian methods: expose the relationships between constraints and decisions. By attaching multipliers to constraints, we can interpret them as prices associated with limited resources or constraint violations. When the problem has suitable separable structure, dualizing coupling constraints can break it into smaller subproblems that are easier to handle individually. The dual problem can also provide a bound on the primal optimum, although a nonzero duality gap may remain.",
          "SDR: trade a difficult constraint for a larger convex problem. For a quadratic beamforming problem with a complex vector w, define W = wwᴴ. The quadratic expressions can then be represented using the matrix W, but the exact formulation also requires W to have rank one. Dropping that rank constraint gives a semidefinite relaxation (SDR), which is convex for suitable formulations. The tradeoff is that the matrix variable is much larger, and the relaxed solution may not have rank one. If so, an additional recovery step, such as randomization, may be needed to obtain a feasible beamforming vector for the original problem."
        ]
      },
      {
        "type": "equation",
        "text": "wH A w = tr(AW),   W = wwH",
        "parts": [
          {
            "tag": "strong",
            "text": "w"
          },
          {
            "tag": "sup",
            "text": "H"
          },
          {
            "text": " "
          },
          {
            "tag": "strong",
            "text": "A"
          },
          {
            "text": " "
          },
          {
            "tag": "strong",
            "text": "w"
          },
          {
            "text": " = tr("
          },
          {
            "tag": "strong",
            "text": "AW"
          },
          {
            "text": "),   "
          },
          {
            "tag": "strong",
            "text": "W"
          },
          {
            "text": " = "
          },
          {
            "tag": "strong",
            "text": "ww"
          },
          {
            "tag": "sup",
            "text": "H"
          }
        ]
      },
      {
        "type": "p",
        "text": "The quadratic expression in w becomes linear in W; the rank-one requirement carries the remaining difficulty."
      },
      {
        "type": "h2",
        "text": "Alternating Updates Should Be Cheap"
      },
      {
        "type": "p",
        "text": "A jointly difficult optimization problem can sometimes be handled more easily by optimizing one block of variables at a time while keeping the others fixed. If each block update has a simpler structure than the original problem, alternating optimization can turn a difficult joint optimization into a sequence of manageable subproblems."
      },
      {
        "type": "p",
        "text": "But splitting the problem is only part of the solution. What matters in practice is how expensive each update is. If every block requires another costly iterative optimization, the algorithm may still be slow even when each subproblem is smaller. This is why closed-form updates are especially valuable: they reduce the computational effort per iteration and make the algorithm easier to implement and analyze."
      },
      {
        "type": "p",
        "text": "WMMSE provides a useful example. In the standard formulation, the receiver filters and MSE weights can be updated explicitly when the other variables are fixed. The precoder update is also structured: under a sum-power constraint, it can often be expressed in terms of a Lagrange multiplier found through a one-dimensional search. Instead of solving the entire problem at once, WMMSE alternates between these updates, making each step relatively efficient."
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
        "text": "A wave travels 1 km in about 3.3 μs; the train takes 12 seconds. Putting those numbers together makes the scale difference feel real. The wave reaches the train quickly."
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
        "text": "At 3.5 GHz, the wavelength is about 8.6 cm, and a train moving at 300 km/h covers 8.3 cm in just 1 ms. For a path along the direction of motion, that changes the received phase by almost a full cycle. Comparing movement with wavelength explains why Doppler can matter even when v/c is tiny."
      },
      {
        "type": "p",
        "text": "At train speeds, larger Doppler shifts and faster channel variations make accurate reception harder. If frequency compensation or channel tracking falls behind, decoding errors and retransmissions increase, slowing the connection. Along the route, maintaining the connection also requires the network to transfer service between cells."
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
        "text": "The challenge is keeping the serving group up to date as the train moves. The access points need fresh channel information and synchronized transmission, and the network has to decide when each one should join or leave. These updates create coordination overhead. For the train journey, the useful question is whether the network can make those changes smoothly enough to maintain the connection without noticeable interruptions."
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
        "text": "A transmitted signal rarely reaches the receiver along just one path. It may arrive directly, reflect off a wall, scatter from objects, or diffract around an edge. These copies arrive with different amplitudes, phases, and delays. When they combine at the receiver, they can reinforce or cancel one another, creating the phenomenon known as multipath fading."
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
        "text": "I like to picture this as an invisible interference landscape spread across space: bright patches where the waves reinforce each other, and dark patches where they cancel. If the environment and the receiver stay still, this pattern stays fixed."
      },
      {
        "type": "p",
        "text": "The key is the relative phase between paths. For two paths with a delay difference Δτ, the phase difference at frequency f is"
      },
      {
        "type": "equation",
        "text": "Δφ = 2πfΔτ = 2πΔL/λ"
      },
      {
        "type": "p",
        "text": "where ΔL is the path-length difference and λ is the wavelength. Even a small change in path length can alter the relative phase and change how the waves combine."
      },
      {
        "type": "p",
        "text": "When I move, the lengths of paths arriving from different directions change at different rates. Their relative phases shift, so I move through the interference landscape, passing through regions of stronger and weaker signal."
      },
      {
        "type": "p",
        "text": "This also explains how motion changes the channel over time. As I move, each path experiences a Doppler shift determined by my motion relative to that path. The wider the spread of these shifts, the faster the relative phases change and the more quickly the interference pattern evolves. This is why a larger Doppler spread generally means a shorter coherence time."
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
        "text": "The same idea applies along the frequency axis. Imagine staying in one place and sweeping the signal frequency. The physical path lengths remain fixed, but the phase difference between paths changes with frequency. A path with a larger delay difference accumulates relative phase more quickly as the frequency changes, causing the peaks and dips in the channel response to occur more closely together."
      },
      {
        "type": "p",
        "text": "Finally, the relationship between coherence bandwidth and signal bandwidth determines the type of fading we observe. If the signal bandwidth is much smaller than the coherence bandwidth, the channel response is approximately uniform across the signal band, producing flat fading. If the signal bandwidth is wide enough to span substantial variations in the channel response, different frequency components experience different gains and phases, producing frequency-selective fading."
      },
      {
        "type": "p",
        "text": "A wider Doppler spread shortens coherence time; a larger RMS delay spread narrows coherence bandwidth."
      },
      {
        "type": "equation",
        "text": "Tc ∝ 1/BD\nBc ∝ 1/στ",
        "parts": [
          {
            "text": "T"
          },
          {
            "tag": "sub",
            "text": "c"
          },
          {
            "text": " ∝ 1/B"
          },
          {
            "tag": "sub",
            "text": "D"
          },
          {
            "text": "\nB"
          },
          {
            "tag": "sub",
            "text": "c"
          },
          {
            "text": " ∝ 1/σ"
          },
          {
            "tag": "sub",
            "text": "τ"
          }
        ]
      }
    ]
  },
  {
    "slug": "isac-the-same-wave-different-unknowns",
    "title": "Integrated Sensing and Communication: One Waveform, Two Purposes",
    "lang": "en",
    "published": true,
    "summary": "Connecting waveform design, multipath, and sensing architectures through the same observation model.",
    "blocks": [
      {
        "type": "p",
        "text": "The search for wider bandwidths pushes communication toward higher frequency bands, including THz. This benefits sensing as well as communication. Wider bandwidth improves range resolution by making echoes with small delay differences easier to distinguish. Shorter wavelengths also allow more antenna elements to fit into a given physical aperture, improving angular resolution."
      },
      {
        "type": "p",
        "text": "This is why integrated sensing and communication (ISAC) feels like a natural convergence. Both functions transmit and receive electromagnetic waves, and both can be described using a common signal model:"
      },
      {
        "type": "equation",
        "text": "Y = HX + N"
      },
      {
        "type": "p",
        "text": "Here, X is the transmitted signal, H represents the channel or propagation environment, and N is noise. The difference lies in what we want to recover. Communication estimates the channel and uses it to decode the unknown data in X. Sensing, by contrast, uses a known reference signal to infer the environment from the received echoes. The delays, angles, and Doppler shifts in those echoes reveal information about the targets."
      },
      {
        "type": "p",
        "text": "This distinction also explains why the same data-bearing waveform can serve both purposes. The communication receiver initially treats the transmitted data as unknown, while a sensing processor with access to the transmitted symbols can use them as a reference for analyzing the echoes. The waveform does not have to be designed exclusively for either communication or sensing."
      },
      {
        "type": "p",
        "text": "There is still a tradeoff in how that waveform is designed. Communication needs to encode information efficiently, while sensing benefits from waveforms whose delay and Doppler responses make targets easy to distinguish. Chirps are a familiar radar example because their structure can provide useful sensing properties. OFDM, on the other hand, carries data through symbols distributed across multiple subcarriers. Even its transmitted waveform depends on those data symbols, but once the symbols are known, the actual OFDM signal can also serve as a sensing reference."
      },
      {
        "type": "p",
        "text": "The key trade-off is between randomness and deterministic structure in waveform design. Random data symbols provide the flexibility needed to carry information, while a more deterministic waveform can be designed to provide desirable sensing properties. ISAC waveform design must balance these two needs, allowing the signal to carry data while preserving its usefulness for sensing."
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
        "text": "Higher carrier frequencies, wider bandwidths, and larger antenna arrays are closely connected in 6G research. Higher frequencies provide access to wider bandwidths, but they also bring challenges such as severe blockage and the difficulty of generating sufficient transmit power. Large antenna arrays help compensate for these limitations by concentrating energy toward the receiver. In this sense, the three technologies reinforce one another, but each also introduces new design challenges."
      },
      {
        "type": "p",
        "text": "A larger array does more than increase antenna gain. It also changes how the wave propagates across practical link distances. A common estimate of the far-field boundary is the Rayleigh distance, R ≈ 2D²/λ, where D is the array aperture and λ is the wavelength. At 10 GHz, where the wavelength is about 3 cm, an aperture of 1.5 m gives a Rayleigh distance of roughly 150 m. Even at frequencies well below THz, a sufficiently large array can therefore operate in the radiative near field over typical communication distances."
      },
      {
        "type": "p",
        "text": "This creates an opportunity as well as a challenge. In the far field, beamforming mainly controls the direction of the transmitted energy. In the near field, the curvature of the wavefront also depends on the receiver's distance. By adjusting the phase across the array, the system can focus energy at a particular location, potentially separating users by both angle and distance. But this more precise spatial control also makes the link more sensitive to changes in the user's position and the array's orientation."
      },
      {
        "type": "p",
        "text": "Maintaining a near-field focus is therefore not just a matter of tracking coordinates. If a device rotates, its antenna orientation and polarization alignment with the incoming field can change even when its position remains the same. A practical system may need to track both position and orientation to maintain a reliable link."
      },
      {
        "type": "p",
        "text": "Wide bandwidth introduces a different challenge. Conventional phase shifters apply frequency-independent phase shifts, so a beam designed for the center frequency may point in slightly different directions at other frequencies. This effect, known as beam squint, can become significant for wideband signals and large arrays."
      },
      {
        "type": "equation",
        "text": "Δφres(f) = 2π(f − fc)Δτ",
        "parts": [
          {
            "text": "Δφ"
          },
          {
            "tag": "sub",
            "text": "res"
          },
          {
            "text": "(f) = 2π(f − f"
          },
          {
            "tag": "sub",
            "text": "c"
          },
          {
            "text": ")Δτ"
          }
        ]
      },
      {
        "type": "p",
        "text": "Here Δτ is the propagation-delay difference between elements. Moving farther from the design frequency leaves a larger phase mismatch, especially when the delay differences across the array are large. True-time-delay hardware can reduce this problem by aligning signals across the band, but it adds hardware complexity, loss, and cost."
      },
      {
        "type": "p",
        "text": "These issues point to a broader question. Near-field focusing promises more precise spatial control, but realizing that benefit requires accurate channel estimation, continuous beam tracking, and hardware that can handle wide bandwidths. Each comes with its own overhead or implementation cost. The real question for 6G is how much of that gain remains after accounting for mobility, training overhead, hardware limitations, and computational complexity."
      }
    ]
  }
];
