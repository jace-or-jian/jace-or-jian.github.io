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
        "text": "The large bandwidth is what draws me to THz. High data rates become possible without putting all the pressure on spectral efficiency and increasingly high modulation orders. Start with more spectrum, then work out how to keep the link alive."
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
        "text": "At fixed SNR, capacity grows linearly with bandwidth B. With fixed received power Pᵣ, the wider band also collects more noise, so the rate grows more slowly. Increasing bandwidth gives another route to a high rate, alongside better use of each hertz."
      },
      {
        "type": "p",
        "text": "The sensing benefit is just as appealing. Range resolution is approximately ΔR = c/(2B) for a monostatic radar waveform: 10 GHz gives about 1.5 cm. Wider bandwidth helps separate nearby objects in range, while aperture and wavelength shape angular resolution."
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
        "text": "Indoor communication and dense outdoor hotspots are the first scenarios that come to mind: a few metres to tens of metres, with high rates over a short link. I keep “tens of metres, often below a hundred” as an intuition for access scenarios. Inter-satellite paths are also appealing because they avoid atmospheric gas absorption."
      },
      {
        "type": "p",
        "text": "THz sits between electronics and photonics, where producing useful transmit power is difficult. Add wideband thermal noise, kTB, and antenna gain becomes central to the whole design."
      },
      {
        "type": "h2",
        "text": "The propagation picture"
      },
      {
        "type": "p",
        "text": "A shorter wavelength brings small environmental details into the link budget. Across roughly 0.1–10 THz, it runs from millimetres down to tens of micrometres. Obstacles, surface texture, and the atmosphere start to shape the link much more strongly."
      },
      {
        "type": "p",
        "text": "At lower microwave frequencies, diffraction can help a signal reach around an obstacle. With THz wavelengths, a person or an object looks much larger electrically, and bending around it becomes weak. This makes a clear path more valuable and an unexpected blockage more disruptive. Preparing another usable path becomes part of maintaining the connection."
      },
      {
        "type": "p",
        "text": "Take surface roughness: a 0.1 mm surface feature is only one-thousandth of a wavelength at 3 GHz, but one-tenth at 300 GHz. The same physical surface can therefore scatter much more of the energy that a lower-frequency model treats as a clean reflection. Even the texture of a wall starts to matter when choosing a reflected path."
      },
      {
        "type": "p",
        "text": "The air also becomes a more active part of the link budget. Water vapour and oxygen have molecular absorption lines, producing frequency-dependent loss and useful transmission windows. Humidity, frequency, and distance now belong in the same decision: where can that large bandwidth actually be used efficiently?"
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
        "text": "For a fixed antenna gain G, a shorter wavelength gives a smaller effective receiving area Aₑ. An array lets many small elements work together, building directional gain in a compact space. The short wavelength creates both a challenge for individual elements and an opportunity to combine many of them."
      },
      {
        "type": "h2",
        "text": "The beam has to stay useful"
      },
      {
        "type": "p",
        "text": "The cost of high gain is a narrow beam. Finding the beam pair establishes the link; keeping it aligned maintains the link. With motion, that becomes a continuous task."
      },
      {
        "type": "p",
        "text": "Sensing fits naturally into this task. Motion estimates can guide predictive beamforming, and an approaching blocker can trigger preparation of a reflected path or another connection. Sensing becomes part of keeping communication available."
      },
      {
        "type": "p",
        "text": "A tighter beam reaches farther, but asks for better alignment and faster updates. This gain-versus-tolerance tradeoff is why I keep connecting THz with sensing: the two problems fit together at the point where the link needs to stay usable."
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
        "type": "p",
        "text": "I usually start with two questions: how does one radio link work, and how do several links share the system? PHY and MAC fit into those two questions."
      },
      {
        "type": "h2",
        "text": "PHY handles the link; MAC organizes its use"
      },
      {
        "type": "p",
        "text": "PHY takes bits, maps them into an electromagnetic waveform, and tries to recover them reliably after the channel. Channel estimation helps describe that channel; beamforming improves transmission and combining; modulation and coding manage rate and errors."
      },
      {
        "type": "p",
        "text": "MAC decides who transmits, when, and on which resources. It also coordinates retransmissions. Choosing a beam’s weights fits into the link side; choosing which users and beams operate together fits into scheduling. Channel feedback connects the two, and its freshness matters for both."
      },
      {
        "type": "h2",
        "text": "Antennas and beamforming architectures"
      },
      {
        "type": "h3",
        "text": "An antenna gathers and directs energy"
      },
      {
        "type": "p",
        "text": "An antenna controls where energy goes. A transmitting array brings the fields from several elements together. Adjust their phases, and the waves reinforce each other in one direction and partially cancel elsewhere: constructive and destructive interference."
      },
      {
        "type": "figure",
        "src": "assets/notes/beamforming-interference.png",
        "alt": "Two phased arrays with opposite phase progressions. Overlapping wave fronts illustrate constructive interference along the steered beam and destructive interference in other directions.",
        "width": 1024,
        "height": 572
      },
      {
        "type": "p",
        "text": "Changing the phase progression changes the direction of reinforcement. In the far field, beamwidth scales roughly as λ/D, so a larger aperture D relative to wavelength produces a tighter beam."
      },
      {
        "type": "h3",
        "text": "RF chains explain the architectural differences"
      },
      {
        "type": "p",
        "text": "An RF chain supplies an independently controlled signal path; a phase shifter adjusts an existing signal. Many antennas can share one RF input, which explains why element count alone says little about the available spatial freedom."
      },
      {
        "type": "figure",
        "src": "assets/notes/beamforming-architectures.svg",
        "alt": "Three simplified signal-flow rows compare fully digital beamforming, single-chain analog beamforming, and subarray hybrid beamforming.",
        "width": 900,
        "height": 680
      },
      {
        "type": "ul",
        "items": [
          "Digital: conventionally one RF chain per antenna element. Independent complex weights give flexible control, including different weights across subcarriers, with more circuit and converter cost.",
          "Analog: one RF signal is distributed across the array with different phase settings. Many elements cooperate on one spatial input.",
          "Hybrid: a smaller number of RF chains works with a larger analog array. It sits between digital flexibility and analog hardware economy. Channel rank and receiver capability also shape how many streams are useful."
        ]
      },
      {
        "type": "h3",
        "text": "How I picture hybrid beamforming"
      },
      {
        "type": "p",
        "text": "Different RF chains can carry different, independently controlled RF waveforms. The analog network distributes and adjusts those signals across a larger antenna array. Producing the waveforms and shaping how they radiate are two different jobs."
      },
      {
        "type": "p",
        "text": "In the grouped architecture below, each RF chain feeds one antenna subarray. Its phase shifters all work on copies of that chain’s waveform. Each branch can have its own phase setting at the same time, so the elements reinforce that waveform in a chosen direction. Many available phase settings give control over how the waveform is radiated; the independent waveform itself comes from the RF chain."
      },
      {
        "type": "figure",
        "src": "assets/notes/hybrid-beamforming-delays.png",
        "alt": "Digital baseband precoding feeds multiple RF chains. Each illustrated branch includes analog phase shifters and delay elements before its antenna subarray, with beams directed toward different users.",
        "width": 2500,
        "height": 1347
      },
      {
        "type": "h3",
        "text": "Lens antennas: focusing waves and switching feeds"
      },
      {
        "type": "p",
        "text": "A lens antenna uses the lens shape and material to bend the waves and bring their phases together. On reception, waves arriving from different directions are focused near different feed positions. The lens turns a direction in space into a location where the energy is collected."
      },
      {
        "type": "p",
        "text": "On transmission, exciting a feed at one position sends a beam in its corresponding direction. Exciting another feed changes the direction. A switch network can turn these feed connections on or off, selecting which beams are active. Much of the beam shaping is built into the lens itself; changing the electrical connections makes switching among the available directions flexible and straightforward."
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
        "text": "I picture the space around a receiver as an interference pattern: moving means passing through its peaks and valleys. Frequency selectivity connects to the same picture through phase:"
      },
      {
        "type": "equation",
        "text": "Δφ = 2πfΔτ = 2πΔL/λ"
      },
      {
        "type": "p",
        "text": "Keep the receiver still and sweep f. The delay differences stay fixed, but the relative phases change, producing peaks and dips across frequency. A narrow signal fits within a nearly flat patch; a wider one may span peaks and dips—flat versus frequency-selective fading. Greater delay spread makes those patches narrower, reducing coherence bandwidth."
      },
      {
        "type": "p",
        "text": "At fixed f, moving changes ΔL, so a short step can carry the receiver from reinforcement toward cancellation. For two equal waves travelling in opposite directions, peaks are λ/2 apart and the next null is λ/4 away. Multiple paths make the fringes irregular, with occasional deep valleys. A strong direct path makes the fluctuations gentler."
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
        "text": "Doppler is the time side of this changing phase. Paths arriving from different directions acquire different shifts, so their relative phases drift and the interference keeps changing. A wider Doppler spread gives a shorter coherence time. Moving twice as fast crosses the same spatial pattern in half the time."
      },
      {
        "type": "p",
        "text": "Coherence bandwidth and coherence time then become connected intuitions: how far can I sweep in frequency, or move forward in time, before the paths add together quite differently?"
      }
    ]
  }
];
