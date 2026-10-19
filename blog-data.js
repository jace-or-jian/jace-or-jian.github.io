// Notes are displayed in array order. Text blocks are rendered safely as plain text.
window.BLOG_POSTS = [
  {
    "slug": "thz-bandwidth-and-beam-alignment",
    "title": "THz Communications: Plenty of Bandwidth, a Fragile Link",
    "lang": "en",
    "published": true,
    "summary": "My understanding of why THz is attractive, what limits its links, and how sensing can help keep them connected.",
    "blocks": [
      {
        "type": "p",
        "text": "What attracts me most to THz communications is the possibility of achieving a very high data rate with a large bandwidth, instead of relying only on increasingly high spectral efficiency. But the more I think about it, the more the main challenge seems to shift: having spectrum is one thing; maintaining a usable radio link is another. This note follows that connection from bandwidth to propagation, antenna gain, and beam tracking."
      },
      {
        "type": "h2",
        "text": "1. Start with the bandwidth advantage"
      },
      {
        "type": "p",
        "text": "The familiar Shannon expression gives a useful starting point for an ideal flat AWGN channel:"
      },
      {
        "type": "equation",
        "text": "C = B log₂(1 + SNR)\nSNR = Pᵣ / (N₀B)"
      },
      {
        "type": "p",
        "text": "Here, C is capacity in bits per second, B is bandwidth, Pᵣ is received signal power, and N₀ is the noise power spectral density. At a fixed SNR, capacity grows linearly with bandwidth. That is the appealing part: a high rate need not come entirely from squeezing more bits into each hertz."
      },
      {
        "type": "p",
        "text": "The qualification matters, though. If received power is fixed, increasing bandwidth also collects more noise, so SNR falls. Capacity then grows sublinearly and approaches a power-limited ceiling in this ideal model. Large bandwidth is an opportunity, not a guarantee of a proportionally larger rate."
      },
      {
        "type": "p",
        "text": "My practical takeaway is that THz can reduce the pressure to chase very high modulation orders for a target rate. It does not remove the need for coding, efficient receivers, or a sufficient link budget. Also, the useful bandwidth is not one uninterrupted, equally good THz-wide channel: hardware capability and atmospheric transmission windows determine what a system can actually use."
      },
      {
        "type": "p",
        "text": "Bandwidth also helps sensing. For an ideal monostatic radar waveform, range resolution is approximately ΔR = c/(2B). A 10 GHz bandwidth gives about 1.5 cm range resolution. This is the ability to separate nearby targets in range, not a promise of 1.5 cm estimation accuracy in every environment. Angular resolution is a different issue, closely tied to antenna aperture and wavelength."
      },
      {
        "type": "figure",
        "src": "assets/notes/thz-link.svg",
        "alt": "A flow diagram connecting wide bandwidth and short wavelength to their benefits, link constraints, and sensing-assisted control.",
        "caption": "Figure 1. The attraction and the cost come together: bandwidth offers rate and range resolution, while directional gain makes link maintenance more demanding. Conceptual diagram; not a measured performance result.",
        "width": 900,
        "height": 650
      },
      {
        "type": "h2",
        "text": "2. Where would I expect THz to be useful?"
      },
      {
        "type": "p",
        "text": "My first mental picture is short-range access: indoor links and dense outdoor hotspots, often over a few metres to tens of metres. “Below 100 metres” is a useful starting intuition for some access scenarios, not a physical range limit. A highly directional fixed link can have a very different budget from a moving handheld device."
      },
      {
        "type": "p",
        "text": "Inter-satellite links are another interesting case because a path through space avoids atmospheric gas absorption. But “no air” does not mean “no loss”: geometric spreading, available transmit power, pointing accuracy, and terminal hardware still matter. A ground-to-satellite path also passes through the atmosphere, so it does not share that same simplification."
      },
      {
        "type": "h2",
        "text": "3. Why the propagation is unforgiving"
      },
      {
        "type": "p",
        "text": "It helps to separate several mechanisms rather than calling all of them “high path loss.” THz research often uses the broad range 0.1–10 THz, corresponding to wavelengths from roughly 3 mm down to 30 μm. The wavelength is therefore millimetre to submillimetre scale, not always millimetre scale."
      },
      {
        "type": "p",
        "text": "First, diffraction around ordinary obstacles is often weak because those obstacles are large relative to the wavelength. A person or an object entering the direct path can therefore interrupt a link. Second, surface roughness becomes more important relative to wavelength and can produce diffuse scattering. This does not mean every surface only scatters: smooth surfaces can still provide useful specular reflections. THz links are often strongly directional and line-of-sight dependent, but non-line-of-sight paths are not impossible."
      },
      {
        "type": "p",
        "text": "Third, gas absorption is frequency selective. Water vapour and oxygen have molecular resonances that create absorption features. The explanation is not that a water molecule is approximately as large as the wavelength; individual molecules are much smaller. Rain, fog, and other particles add different absorption and scattering effects, depending on their size, composition, and concentration. Some dry materials can be relatively transparent, but “dry” alone does not guarantee low attenuation."
      },
      {
        "type": "h2",
        "text": "4. Why antenna gain becomes essential"
      },
      {
        "type": "p",
        "text": "THz sits between the electronic and photonic domains. Generating useful output power efficiently is difficult, particularly as devices operate near their high-frequency limits. At the receiver, a wide bandwidth also means more integrated thermal noise: the familiar noise floor is kTB before receiver noise contributions. The problem is not that THz automatically means a higher temperature; it is that the receiver integrates noise over a very wide band."
      },
      {
        "type": "p",
        "text": "Antenna aperture provides the other part of the picture:"
      },
      {
        "type": "equation",
        "text": "Aₑ = Gλ² / (4π)"
      },
      {
        "type": "p",
        "text": "For a fixed antenna gain G, the effective receiving area Aₑ scales with wavelength squared. A smaller wavelength therefore means less intercepted power under that fixed-gain comparison. But if physical aperture and efficiency are held fixed instead, gain can increase as wavelength shrinks. It is important to state which quantity is fixed before claiming that higher frequency necessarily causes a particular antenna penalty."
      },
      {
        "type": "p",
        "text": "This is why large arrays are attractive. Short wavelengths allow many elements in a compact area, and coherent beamforming can concentrate radiated energy toward the receiver. They do not create energy, and adding elements inside a fixed aperture is not an unlimited source of gain. Hardware losses, power consumption, calibration, and aperture size still constrain the design."
      },
      {
        "type": "h2",
        "text": "5. Gain solves one problem and creates another"
      },
      {
        "type": "p",
        "text": "A high-gain beam is narrow. That helps the link budget, but the transmitter and receiver must keep pointing at each other. I find it useful to divide beam alignment into link establishment—finding a useful beam pair in the first place—and link tracking—maintaining alignment as the terminals or their surroundings move."
      },
      {
        "type": "p",
        "text": "Misalignment and blockage are related but different. Tracking can steer a beam toward a moving receiver; it cannot make an opaque obstacle disappear. A blocked link needs an alternative, such as a usable reflected path, another access point, a relay, or a fallback band."
      },
      {
        "type": "p",
        "text": "This is where sensing-assisted communication becomes interesting to me. Motion estimates can support predictive beamforming rather than waiting for the link to deteriorate. Sensing may also reveal an approaching blocker early enough to prepare another path. The sensing information could come from the radio itself or another sensor, with its own uncertainty and latency."
      },
      {
        "type": "p",
        "text": "The question I would want to study is not simply whether sensing improves a rate expression. It is whether the system can obtain reliable information and act on it before the beam or path becomes unusable. Narrower beams offer more gain, but demand more accurate prediction and faster updates. That tradeoff connects the attractive THz bandwidth to the practical task of keeping the link alive."
      }
    ]
  },
  {
    "slug": "wireless-layers-and-beamforming",
    "title": "From Radio Links to Beamforming: How I Think About Wireless Systems",
    "lang": "en",
    "published": true,
    "summary": "A physical view of PHY and MAC, antenna architectures, and the system constraints behind a useful research question.",
    "blocks": [
      {
        "type": "p",
        "text": "When I read about a wireless technique, I find it helpful to ask two questions first: what problem is the system actually facing, and where does this technique act? Starting from the radio link makes PHY, MAC, and antenna architectures easier to connect. It also helps me judge whether a research idea addresses a real bottleneck."
      },
      {
        "type": "h2",
        "text": "1. PHY makes the radio link work; MAC decides how to use it"
      },
      {
        "type": "p",
        "text": "My simplest view of the physical layer is this: turn bits into an electromagnetic waveform, send it through an imperfect channel, and recover the bits at the receiver with an acceptable error rate. Channel estimation tells us what the channel is doing. Beamforming controls how the array transmits or combines signals. Modulation and coding balance rate and reliability, while synchronization and equalization make reception possible."
      },
      {
        "type": "p",
        "text": "MAC looks at the shared system. Who gets to transmit, on which time-frequency resources, and alongside which other users? How should resources be reassigned when channels, queues, or traffic requirements change? When should a failed packet be retransmitted? These questions concern scheduling and access, rather than only the waveform on one link."
      },
      {
        "type": "p",
        "text": "The boundary is not perfectly clean. Choosing a modulation and coding scheme uses PHY information but is often part of a scheduling decision. Likewise, calculating beam weights is a PHY operation, while choosing which users and beams can be active together is a resource-allocation problem. HARQ combines retransmission decisions with physical-layer decoding and combining. The exact split depends on the system."
      },
      {
        "type": "p",
        "text": "I therefore would not say the scheduler runs only as fast as channel feedback arrives. Its decisions also depend on the slot structure, traffic, latency requirements, processing time, and how long the available channel information remains useful. A perfectly optimized decision based on stale information can still be a poor decision."
      },
      {
        "type": "h2",
        "text": "2. An antenna directs energy; it does not create it"
      },
      {
        "type": "p",
        "text": "The most useful intuition for me is conservation of energy. A transmitting antenna takes supplied power and distributes radiation over directions. A receiving antenna couples part of an incident field into its receiver. Antenna gain describes directional concentration together with efficiency; it is not an independent source of power."
      },
      {
        "type": "p",
        "text": "An array adds another degree of control. Signals from different elements travel different distances to a point in space. By adjusting their phases, we can make those fields add coherently in a chosen direction and less coherently elsewhere. Reversing the phase progression steers the main beam in the opposite direction. It does not cancel all radiation outside the main beam: sidelobes remain."
      },
      {
        "type": "figure",
        "src": "assets/notes/beam-steering.svg",
        "alt": "Three arrays show equal phase for a broadside beam, then opposite progressive phase settings for beams steered left and right.",
        "caption": "Figure 2. Relative phases control where fields add coherently. Arrows show intended main-beam directions only; they are not full radiation patterns. The sign of a steering phase depends on the coordinate and signal convention.",
        "width": 900,
        "height": 460
      },
      {
        "type": "p",
        "text": "The physical aperture measured in wavelengths largely sets how tightly the beam can be concentrated. As a rough far-field rule, beamwidth scales as λ/D, where D is aperture extent in the relevant direction. Element count alone is not enough: spacing, amplitude taper, scan angle, and array geometry also matter. At short distances from a large array, near-field focusing may be more appropriate than a direction-only beam model."
      },
      {
        "type": "h2",
        "text": "3. RF chains determine how much independent control is available"
      },
      {
        "type": "p",
        "text": "A phase shifter adjusts a signal that already exists. An RF chain provides an independently controllable transmit or receive signal path, with frequency conversion and associated conversion hardware. This distinction explains the main architectural choices better than simply counting antenna elements."
      },
      {
        "type": "figure",
        "src": "assets/notes/beamforming-architectures.svg",
        "alt": "Three simplified signal-flow rows compare fully digital beamforming, single-chain analog beamforming, and subarray hybrid beamforming.",
        "caption": "Figure 3. Three transmit-side examples with four elements. Digital has four RF chains; analog shares one; this hybrid example uses two subarrays and two chains. Fully connected hybrid networks are also possible. More RF chains offer more signal dimensions, not a guaranteed equal number of usable spatial streams.",
        "width": 900,
        "height": 680
      },
      {
        "type": "p",
        "text": "In a conventional fully digital array, each antenna element has its own RF chain. Digital processing can assign different complex weights to each element and, in a wideband system, to different subcarriers. This is flexible, but many fast converters and RF chains increase power consumption, cost, and calibration demands."
      },
      {
        "type": "p",
        "text": "In a single-chain analog array, one RF signal is distributed to multiple elements through an analog weighting network, often using phase shifters. At a given frequency, the element signals are weighted versions of the same input. That does not mean the waveform can contain only one tone or one user’s bits; it means the array lacks multiple independently controlled spatial signal dimensions."
      },
      {
        "type": "p",
        "text": "Hybrid beamforming places a smaller number of RF chains between digital processing and a larger antenna array. The analog network may connect every chain to every element, or use subarrays. Its useful spatial streams are bounded by RF-chain count, channel rank, and the receiver, not by RF-chain count alone. Hybrid design is therefore a compromise between flexibility and hardware cost, rather than an automatic substitute for fully digital processing."
      },
      {
        "type": "h2",
        "text": "4. A phase shift is not the same as a time delay"
      },
      {
        "type": "p",
        "text": "This difference becomes especially important with large bandwidth. A true delay τ produces a frequency-dependent phase shift:"
      },
      {
        "type": "equation",
        "text": "φ(f) = −2πfτ"
      },
      {
        "type": "p",
        "text": "A phase shifter chosen to align signals at one carrier frequency does not reproduce that same delay across an arbitrarily wide band. Different frequencies can then point in different directions: beam squint. A narrow beam can lose substantial gain when part of the signal bandwidth points away from the intended receiver."
      },
      {
        "type": "p",
        "text": "True-time-delay elements can help preserve alignment across frequency. They also add practical constraints, including delay range, resolution, insertion loss, and circuit complexity. This explains why a wideband hybrid architecture may include both phase shifters and delay elements: they solve related but different parts of the beamforming problem."
      },
      {
        "type": "h2",
        "text": "5. A lens turns direction into a port-selection problem"
      },
      {
        "type": "p",
        "text": "A lens antenna provides another way to shape the field. On reception, waves from different directions can focus near different feed positions on a focal surface. By reciprocity, exciting different feeds can produce beams in different directions. A switch network can then connect a limited number of RF chains to selected feeds."
      },
      {
        "type": "p",
        "text": "The useful intuition is that the lens implements a physical direction-to-port mapping. The discrete choices are the available feeds and their switch connections, not the propagation angles themselves. Selecting which ports are active—and possibly how many—is a discrete optimization problem, while digital weights on the selected paths may still be continuous. Beam leakage, finite port spacing, and wideband effects mean the mapping is not ideal."
      },
      {
        "type": "h2",
        "text": "6. Start a research question from the bottleneck"
      },
      {
        "type": "p",
        "text": "I see physical-layer security, covert communication, NOMA, and RIS as tools or problem frameworks, not as contributions by themselves. Physical-layer security concerns limiting information leakage under a specified model; covert communication concerns hiding the existence of a transmission. NOMA explores non-orthogonal resource sharing, while RIS attempts to control part of the propagation environment. Each has value only in relation to a concrete system need."
      },
      {
        "type": "p",
        "text": "What I want to avoid is a research question built mainly by combining technology names and optimizing the resulting expression. I would rather start with a bottleneck: insufficient RF chains, an unreliable reflected path, stale channel information, a limited training budget, or a hardware delay range. Then the mathematical constraints have a reason to be there."
      },
      {
        "type": "ul",
        "items": [
          "What observable failure or cost motivates the problem?",
          "Which controllable variable can change it?",
          "What competing objective prevents a trivial solution?",
          "Does the benefit survive realistic overhead and a strong, simpler baseline?"
        ]
      },
      {
        "type": "p",
        "text": "For example, narrowing a THz beam increases directional gain but also makes pointing errors more costly. More frequent tracking improves alignment but consumes time and energy. More RF chains allow richer control but raise hardware cost. These are the kinds of tradeoffs I find meaningful: the same design choice helps one part of the system while making another part harder."
      },
      {
        "type": "p",
        "text": "That is the connection I want to keep in mind when moving between PHY, MAC, and antenna hardware. A useful optimization problem should explain something about the system—not just produce a better objective value for a combination of techniques."
      }
    ]
  }
];
