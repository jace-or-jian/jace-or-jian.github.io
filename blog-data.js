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
        "text": "What I like most about THz is the large bandwidth. High data rates become possible without putting all the pressure on spectral efficiency and increasingly high modulation orders. That feels like a different way of approaching the rate problem: start with more spectrum, then work out how to keep the link alive."
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
        "text": "At fixed SNR, capacity grows linearly with bandwidth B. With fixed received power Pᵣ, the wider band also collects more noise, so the rate grows more slowly. The point that stays with me is that bandwidth gives another route to a high rate, alongside better use of each hertz."
      },
      {
        "type": "p",
        "text": "The sensing benefit is just as appealing. Range resolution is approximately ΔR = c/(2B) for a monostatic radar waveform: 10 GHz gives about 1.5 cm. Wider bandwidth helps separate nearby objects in range, while aperture and wavelength shape angular resolution."
      },
      {
        "type": "figure",
        "src": "assets/notes/thz-link.svg",
        "alt": "A flow diagram connecting wide bandwidth and short wavelength to their benefits, link constraints, and sensing-assisted control.",
        "caption": "The connection that makes THz interesting to me: more bandwidth and compact arrays, followed by the challenge of keeping the link usable.",
        "width": 900,
        "height": 650
      },
      {
        "type": "h2",
        "text": "Where I picture it being useful"
      },
      {
        "type": "p",
        "text": "My first picture is indoor communication and dense outdoor hotspots: a few metres to tens of metres, with high rates over a short link. I keep “tens of metres, often below a hundred” as an intuition for access scenarios. Inter-satellite communication is also interesting because the path through space avoids atmospheric gas absorption."
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
        "text": "Across roughly 0.1–10 THz, wavelengths run from millimetres down to tens of micrometres. This helps explain why the channel feels so different from lower-frequency wireless: ordinary obstacles are electrically large, diffraction is weak, and surface roughness matters much more."
      },
      {
        "type": "p",
        "text": "A direct path is valuable, and blocking it can be costly. Smooth surfaces may offer reflections, while rough surfaces scatter energy. Water vapour and oxygen absorb at particular molecular resonances; rain, fog, and material composition add their own effects. I find this frequency-dependent view more useful than treating all THz propagation as one large loss."
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
        "text": "For a fixed antenna gain G, a shorter wavelength gives a smaller effective receiving area Aₑ. An array lets many small elements work together, building directional gain in a compact space. This is why massive arrays make sense to me at THz: the short wavelength creates a challenge for individual elements and an opportunity to combine many of them."
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
        "text": "This is where sensing-assisted communication feels particularly natural. Motion estimates can guide predictive beamforming, and an approaching blocker can trigger preparation of a reflected path or another connection. Sensing becomes part of keeping communication available."
      },
      {
        "type": "p",
        "text": "The tradeoff I keep coming back to is gain versus tolerance: a tighter beam reaches farther, but asks for better alignment and faster updates. For me, that is the most interesting part of THz—the bandwidth is attractive, and maintaining the link is where the system design comes alive."
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
        "text": "Wireless systems are easier for me to follow when I first separate two questions: how does one radio link work, and how do several links share the system? That is the picture I use for PHY and MAC."
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
        "text": "An antenna gathers and directs energy"
      },
      {
        "type": "p",
        "text": "The intuition I like is that an antenna controls where energy goes. A transmitting array brings the fields from several elements together. Adjust their phases, and the waves reinforce each other in one direction and partially cancel elsewhere: constructive and destructive interference."
      },
      {
        "type": "figure",
        "src": "assets/notes/beamforming-interference.png",
        "alt": "Two phased arrays with opposite phase progressions. Overlapping wave fronts illustrate constructive interference along the steered beam and destructive interference in other directions.",
        "caption": "The picture that makes beamforming click for me: phase adjustments make the waves reinforce one another in the chosen direction. Click to enlarge.",
        "width": 1024,
        "height": 572
      },
      {
        "type": "p",
        "text": "That picture makes electronic steering much easier to understand. Changing the phase progression changes the direction of reinforcement. In the far field, beamwidth scales roughly as λ/D, so a larger aperture D relative to wavelength produces a tighter beam."
      },
      {
        "type": "h2",
        "text": "RF chains explain the architectural differences"
      },
      {
        "type": "p",
        "text": "I think of an RF chain as an independently controlled signal path, and a phase shifter as a way to adjust an existing signal. That distinction explains why a large antenna array can still have limited spatial freedom."
      },
      {
        "type": "figure",
        "src": "assets/notes/beamforming-architectures.svg",
        "alt": "Three simplified signal-flow rows compare fully digital beamforming, single-chain analog beamforming, and subarray hybrid beamforming.",
        "caption": "Same antenna count, different freedom: four RF chains, one shared chain, and two chains driving subarrays.",
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
        "type": "h2",
        "text": "Wide bandwidth makes delay important"
      },
      {
        "type": "equation",
        "text": "φ(f) = −2πfτ"
      },
      {
        "type": "p",
        "text": "A time delay τ produces a phase shift that changes with frequency. A fixed phase shifter aligns the array around a chosen frequency; across a wide band, different frequencies can steer differently. This is beam squint."
      },
      {
        "type": "p",
        "text": "The delay elements in a wideband architecture now have a clear purpose to me: they help keep the different frequency components aligned. The diagram brings together the digital, RF, phase, and delay parts of the same signal path."
      },
      {
        "type": "figure",
        "src": "assets/notes/hybrid-beamforming-delays.png",
        "alt": "Digital baseband precoding feeds multiple RF chains. Each illustrated branch includes analog phase shifters and delay elements before its antenna subarray, with beams directed toward different users.",
        "caption": "Putting the pieces together: digital processing, RF chains, phase control, and delays before the antenna subarrays. Click to enlarge.",
        "width": 2500,
        "height": 1347
      },
      {
        "type": "h2",
        "text": "A lens makes direction feel like a switch choice"
      },
      {
        "type": "p",
        "text": "A lens maps different arrival directions to different feed positions. In transmission, exciting different feeds produces beams in different directions. Switches can therefore connect a few RF chains to the feeds that matter."
      },
      {
        "type": "p",
        "text": "What I find interesting here is how the physics shapes the optimization: choosing feeds becomes discrete, while the digital weights on those paths can remain continuous. A hardware structure has turned part of beamforming into a selection problem."
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
        "text": "For me, optimization matters because resources are limited and choices compete. More power can improve a link but cost energy or create interference. More beam training can improve alignment but take time away from data. The point is to make a good decision within those tradeoffs."
      },
      {
        "type": "h2",
        "text": "Start with the problem the system actually has"
      },
      {
        "type": "p",
        "text": "I care most about objectives that mean something in the real system: useful throughput, reliability, latency, energy, or secrecy. The constraints should come from the same place—available power, RF chains, hardware settings, and what the system actually knows about its channels."
      },
      {
        "type": "p",
        "text": "This is why I am less interested in combining technique names and then optimizing the combination. The more compelling starting point is a real bottleneck: what is holding the system back, what can be changed, and what must be sacrificed to improve it? That gives the mathematics a reason to exist."
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
        "text": "Find structure in a difficult problem"
      },
      {
        "type": "p",
        "text": "Wireless problems often become nonconvex through interference, variable coupling, discrete choices, or rank constraints. I find it useful to look for an equivalent reformulation first, then for approximations or relaxations that expose a manageable structure."
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
        "text": "A jointly difficult problem can become convex in one group of variables when the others are fixed. Alternating optimization uses that structure. What makes it especially appealing to me is finding explicit updates for the individual blocks."
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
        "text": "My ideal result is a closed-form expression that shows how a decision changes with power, interference, or another system parameter. There is something satisfying about seeing the tradeoff directly in the answer. Even when numerical optimization is needed, a bound, a limiting case, or a sensitivity result can provide that same kind of insight."
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
        "text": "The distinction that helps me most is simple: covert communication hides the existence of a transmission; physical-layer security (PLS) hides its content. One asks whether Willie can notice activity, while the other asks what Eve can learn from the waveform. I find both interesting because the channel itself becomes part of the protection."
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
        "text": "Under H₀, Willie sees the background Zᵢ; under H₁, Alice’s signal is added. My picture of covert communication is to keep that addition small enough, or ambiguous enough, that it blends into what Willie already expects to see."
      },
      {
        "type": "equation",
        "text": "ξ* = min_detector (P_FA + P_MD) ≥ 1 − ε"
      },
      {
        "type": "p",
        "text": "P_FA is the false-alarm probability and P_MD the missed-detection probability. With equal priors, ξ*/2 is the best average detection error. A sum near one means the observations give Willie little advantage over guessing."
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
        "text": "This is the scaling that makes the square-root law intuitive to me. Keeping the divergence bounded asks for received signal power of order 1/√n. Bob’s low-SNR rate per use then has the same scaling, leading to:"
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
        "text": "What interests me is the difference between random noise samples and uncertainty about the background power itself. If Willie has a stable, known baseline, averaging helps expose an added signal. If that baseline is genuinely uncertain, an energy increase may look like background variation even under H₀."
      },
      {
        "type": "p",
        "text": "My understanding is that uncertainty introduced under H₁ often increases the coefficient of the square-root law: more covert bits can be sent, while the growth remains proportional to √n. What interests me more is uncertainty already present under H₀, such as background noise power that Willie cannot accurately determine. If that uncertainty persists as observations accumulate, it may allow growth beyond the square-root law."
      },
      {
        "type": "h2",
        "text": "The viewpoint changes what counts as covert"
      },
      {
        "type": "p",
        "text": "For a state S known to Willie, let ξ*(S) be his best conditional error sum. The performance viewpoint can be written in three ways:"
      },
      {
        "type": "equation",
        "text": "Average: E_S[ξ*(S)] ≥ 1 − ε\nOutage: Pr_S{ξ*(S) < 1 − ε} ≤ δ\nEvery state: inf_s ξ*(s) ≥ 1 − ε"
      },
      {
        "type": "p",
        "text": "What I find interesting is that the relationship between uncertainty and covertness depends strongly on the metric. Greater channel variability may improve average covertness because favorable realizations contribute to the average. Under an outage metric, however, the unfavorable tail becomes particularly important: larger fluctuations may create more states in which the covertness requirement fails. The same variability can therefore improve the average while increasing outage risk. For me, this makes the choice of metric part of the physical interpretation—what looks like useful uncertainty from one viewpoint may become a source of risk from another."
      },
      {
        "type": "p",
        "text": "For a specific system, choosing the metric that matches its actual operating needs is essential. Average performance, tolerance for occasional exposure, and protection in every state correspond to different requirements; the metric should reflect the one the system actually needs."
      },
      {
        "type": "h2",
        "text": "PLS: knowing the codebook and still learning little"
      },
      {
        "type": "p",
        "text": "The public-codebook idea is what makes wiretap coding interesting to me. Everyone can know the encoding scheme. Alice privately randomizes among several codewords associated with a message, using Bob’s channel advantage to support reliable reception while leaving Eve uncertain about the message."
      },
      {
        "type": "equation",
        "text": "Bob: Pr{M̂_B ≠ M} → 0\nEve: I(M; Z_Eⁿ ∣ C) → 0"
      },
      {
        "type": "p",
        "text": "M is the message, C the public codebook, and Z_Eⁿ Eve’s observation. The information-leakage expression gives a precise meaning to the intuition of Eve struggling to distinguish the possibilities. It also captures partial knowledge of the message, beyond whether a whole codeword was decoded."
      },
      {
        "type": "p",
        "text": "For a scalar real Gaussian wiretap channel, the secrecy-capacity expression is especially revealing:"
      },
      {
        "type": "equation",
        "text": "C_s = [C_B − C_E]⁺\n= [½ log₂(1 + γ_B) − ½ log₂(1 + γ_E)]⁺"
      },
      {
        "type": "p",
        "text": "Here [a]⁺ = max(a, 0), with rates per real channel use. The quantity that matters is Bob’s advantage over Eve. This is why beamforming, artificial noise, and channel asymmetry feel central to PLS: they help create room for reliable communication that leaks little."
      },
      {
        "type": "p",
        "text": "The common thread, for me, is uncertainty in the received waveform. Covert communication keeps activity ambiguous; wiretap coding keeps the message ambiguous. Thinking about who is uncertain, about what, and after which observations makes both ideas much easier to connect."
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
        "text": "The small speed ratio multiplies a carrier frequency of billions of cycles per second. At 3.5 GHz, a wavelength is about 8.6 cm, and the train travels 8.3 cm in just 1 ms. That comparison makes more sense to me than v/c alone: moving almost one wavelength changes the received phase substantially."
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
        "text": "That is the architectural part that changed how I look at the problem. A train moves through coverage quickly, leaving less time for each transition. Carriage attenuation, tunnels, weak coverage, and shared capacity also affect the experience. Handover became an important explanation to keep in mind alongside those radio conditions."
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
        "text": "The coordination still has work to do—updating the group, obtaining channel estimates, synchronizing access points, and exchanging information over the fronthaul. To me, the interesting shift is where that work happens: organizing several access points around a connection, instead of treating each cell as its own little world."
      },
      {
        "type": "p",
        "text": "The train ride left me thinking about wireless communication at two levels: how a moving receiver follows the waveform, and how a moving user is followed by the network. Connecting those two pictures is what made cell-free interesting to me."
      }
    ]
  }
];
