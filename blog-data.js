// Personal study notes, displayed in array order.
window.BLOG_POSTS = [
  {
    "slug": "thz-bandwidth-and-beam-alignment",
    "title": "THz Communication: Bandwidth Advantages, Propagation, and Beam Alignment",
    "lang": "en",
    "published": true,
    "summary": "How wide bandwidth, THz propagation, antenna arrays, and beam alignment connect to sensing-assisted link reliability.",
    "blocks": [
      {
        "type": "p",
        "text": "Terahertz (THz) communication has attracted widespread interest, largely because it offers extremely wide available bandwidths. Compared with conventional microwave and millimetre-wave communication, the THz band opens up new possibilities for higher data rates. However, wider spectrum does not make reliable communication links easy to establish. As the carrier frequency increases, propagation loss, blockage, atmospheric absorption, and beam alignment become more significant challenges."
      },
      {
        "type": "p",
        "text": "The central question in THz communication is therefore not only how to make use of greater bandwidth, but also how to establish and maintain reliable wireless connections in complex propagation environments. Starting with the appeal of bandwidth, I will discuss THz propagation, antenna arrays, and the connection between beam management and sensing."
      },
      {
        "type": "h2",
        "text": "1. Why Is THz Bandwidth So Attractive?"
      },
      {
        "type": "p",
        "text": "One direct way to increase data rates is to increase the available bandwidth, without relying entirely on higher-order modulation to improve spectral efficiency."
      },
      {
        "type": "p",
        "text": "According to Shannon's channel capacity formula:"
      },
      {
        "type": "equation",
        "text": "C = B log₂(1 + SNR)"
      },
      {
        "type": "p",
        "text": "Here, B is the bandwidth and SNR is the signal-to-noise ratio. If the SNR remains constant, channel capacity increases linearly with bandwidth."
      },
      {
        "type": "p",
        "text": "In practical communication systems, however, the received power is usually limited. As bandwidth increases, so does the total thermal noise power collected by the receiver:"
      },
      {
        "type": "equation",
        "text": "SNR = Pᵣ / (N₀B)"
      },
      {
        "type": "p",
        "text": "Here, Pᵣ is the received power and N₀ is the noise power spectral density."
      },
      {
        "type": "p",
        "text": "This means that increasing bandwidth alone cannot make the data rate grow linearly without limit. Even so, wider spectrum still offers substantial room for higher data rates, especially as spectrum in conventional frequency bands becomes increasingly scarce."
      },
      {
        "type": "p",
        "text": "The value of bandwidth also extends beyond communication. For a monostatic radar system, range resolution is approximately:"
      },
      {
        "type": "equation",
        "text": "ΔR = c / (2B)"
      },
      {
        "type": "p",
        "text": "Here, c is the speed of light. For example, a bandwidth of 10 GHz provides a range resolution of about 1.5 cm. The greater the bandwidth, the easier it is to distinguish two targets that are very close together in range."
      },
      {
        "type": "p",
        "text": "Wideband THz systems therefore offer potential benefits for both high-speed data transmission and high-resolution sensing."
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
        "text": "2. THz Propagation and Practical Challenges"
      },
      {
        "type": "p",
        "text": "THz communication is particularly well suited to short-range applications that require high data rates, such as indoor wireless communication and densely deployed outdoor hotspots. Typical communication distances may range from a few metres to a few tens of metres, usually within 100 m. Inter-satellite communication is another application worth exploring: the main propagation path through space is free from atmospheric gas absorption, although any atmospheric propagation near a terminal still needs to be considered."
      },
      {
        "type": "p",
        "text": "To understand why THz links can be difficult to maintain, we first need to look at their propagation characteristics."
      },
      {
        "type": "h3",
        "text": "2.1 Short Wavelengths Make the Environment More Important"
      },
      {
        "type": "p",
        "text": "One defining feature of the THz band is its very short wavelength. Across roughly 0.1–10 THz, for example, the wavelength decreases from about 3 mm to 30 μm."
      },
      {
        "type": "p",
        "text": "As the wavelength becomes shorter, obstacles and surface structures in the surrounding environment have a more pronounced effect on signal propagation."
      },
      {
        "type": "p",
        "text": "At lower microwave frequencies, diffraction can help electromagnetic waves bend around some obstacles. With a shorter wavelength, however, the same obstacle becomes electrically larger, and diffraction generally becomes weaker."
      },
      {
        "type": "p",
        "text": "A person or another object can therefore cause more severe blockage of a THz link. Compared with lower-frequency communication, THz communication relies more heavily on a clear line-of-sight (LoS) path. Once that direct path is blocked, the link may suffer substantial signal attenuation or even an interruption."
      },
      {
        "type": "p",
        "text": "The system therefore needs to do more than find an available propagation path. It also needs to consider whether other paths can maintain communication if the direct path fails."
      },
      {
        "type": "h3",
        "text": "2.2 Surface Roughness and Reflected Paths"
      },
      {
        "type": "p",
        "text": "Short wavelengths also make small features on ordinary surfaces more important."
      },
      {
        "type": "p",
        "text": "Consider a surface variation of 0.1 mm. At 3 GHz, the wavelength is about 10 cm, so this variation is only one-thousandth of a wavelength. At 300 GHz, the wavelength is about 1 mm, and the same variation is already one-tenth of a wavelength."
      },
      {
        "type": "p",
        "text": "The same surface can therefore exhibit very different electromagnetic behaviour at different frequencies. At THz frequencies, surface roughness can weaken specular reflection and scatter more energy in other directions. The surface structures of walls, furniture, and other objects may directly affect whether a reflected path can be used effectively. The specific effect also depends on the roughness distribution and the angle of incidence."
      },
      {
        "type": "p",
        "text": "When the direct path is blocked, natural reflections in the environment can sometimes provide an alternative route. For example, a signal may reach the receiver by reflecting off a wall or another surface to bypass an obstacle."
      },
      {
        "type": "p",
        "text": "The challenge is that the system needs to know which surfaces can provide useful reflected paths and where the transmitter and receiver should point their beams."
      },
      {
        "type": "p",
        "text": "This is where environmental sensing or a channel map can help. Information about the surroundings allows the system to identify potential reflecting surfaces and guide the search for alternative paths and beam directions. However, even when a reflected path exists geometrically, its propagation loss may be too high to provide sufficient received power."
      },
      {
        "type": "figure",
        "src": "assets/notes/blocked-link-wall-reflection.png",
        "alt": "A direct wireless path is blocked by a person while a wall-reflected path remains available with lower received signal strength.",
        "width": 941,
        "height": 967,
        "maxWidth": 640
      },
      {
        "type": "p",
        "text": "Beyond natural reflections, a reconfigurable intelligent surface (RIS) offers a more actively controllable way to shape a reflected path."
      },
      {
        "type": "p",
        "text": "An RIS consists of multiple controllable reflecting elements. By adjusting their reflection phases, the system can control the relative phases of the reflected electromagnetic waves so that they combine as coherently as possible near the receiver, strengthening the signal in the target direction."
      },
      {
        "type": "p",
        "text": "Rather than relying entirely on existing natural reflections, an RIS allows the system to deliberately shape the reflected path to some extent. This offers another possibility for establishing an alternative route around an obstacle."
      },
      {
        "type": "figure",
        "src": "assets/notes/ris-reflected-path.png",
        "alt": "A reconfigurable intelligent surface redirects a reflected wireless path around a line-of-sight blockage.",
        "width": 320,
        "height": 320,
        "maxWidth": 320
      },
      {
        "type": "h3",
        "text": "2.3 Atmospheric Absorption and Usable Spectrum"
      },
      {
        "type": "p",
        "text": "Obstacles and surface reflections are not the only factors that THz communication needs to account for."
      },
      {
        "type": "p",
        "text": "Atmospheric molecules, including water vapour and oxygen, absorb electromagnetic energy near specific molecular resonance frequencies, producing frequency-selective propagation loss. As a result, propagation characteristics can differ substantially across THz frequency bands."
      },
      {
        "type": "p",
        "text": "Absorption is strong near certain frequencies, while other frequency ranges offer transmission windows with relatively low loss."
      },
      {
        "type": "p",
        "text": "The bandwidth that a THz system can actually use therefore depends not only on spectrum availability, but also on factors such as carrier frequency, humidity, and communication distance."
      },
      {
        "type": "p",
        "text": "In other words, THz communication requires both sufficiently wide spectrum and frequency ranges in which that spectrum can be used effectively under actual propagation conditions."
      },
      {
        "type": "h2",
        "text": "3. Antenna Arrays: Compensating for Propagation Loss with High Gain"
      },
      {
        "type": "p",
        "text": "The propagation characteristics discussed above mean that THz links often need higher antenna gain to compensate for propagation loss."
      },
      {
        "type": "p",
        "text": "Antenna gain and effective aperture are related by:"
      },
      {
        "type": "equation",
        "text": "Aₑ = Gλ² / (4π)"
      },
      {
        "type": "p",
        "text": "Here, Aₑ is the effective antenna aperture, G is the antenna gain, and λ is the wavelength."
      },
      {
        "type": "p",
        "text": "For a given antenna gain, a shorter wavelength corresponds to a smaller effective aperture. At the same time, shorter wavelengths allow more antenna elements to fit within the same physical area."
      },
      {
        "type": "p",
        "text": "By combining many antenna elements into an array and controlling the phases of the signals transmitted by different elements, the system can use coherent superposition to form a directional beam with high gain."
      },
      {
        "type": "p",
        "text": "This is why large antenna arrays and beamforming are so important in THz communication: they concentrate limited transmit power in the target direction, increasing the signal strength at the receiver."
      },
      {
        "type": "h3",
        "text": "3.1 The Near Field: From Beam Steering to Spatial Focusing"
      },
      {
        "type": "p",
        "text": "With a large array and a short operating wavelength, the propagation distances from different positions on the array to the receiver may differ enough to matter, even over relatively short indoor distances."
      },
      {
        "type": "p",
        "text": "These path-length differences produce different phase shifts, making wavefront curvature impossible to ignore."
      },
      {
        "type": "p",
        "text": "The Rayleigh distance is commonly used to estimate the boundary between the near field and the far field:"
      },
      {
        "type": "equation",
        "text": "R ≈ 2D² / λ"
      },
      {
        "type": "p",
        "text": "Here, D is the physical aperture of the antenna array and λ is the wavelength."
      },
      {
        "type": "p",
        "text": "For example, at 300 GHz, the wavelength is about 1 mm. If the array aperture is 20 cm, the corresponding Rayleigh distance is approximately 80 m. An indoor receiver may therefore lie in the radiative near field, where the wavefront still has noticeable curvature."
      },
      {
        "type": "p",
        "text": "In the far field, the wavefront can usually be approximated as a plane wave, and the array mainly controls the beam direction by adjusting the relative phases across its elements."
      },
      {
        "type": "p",
        "text": "In the near field, the propagation distance from each position on the array to the target receiver differs. Beam control therefore needs to account for both the direction and the distance of the receiver relative to the array."
      },
      {
        "type": "p",
        "text": "By compensating for the different propagation distances from individual elements to the target point, the system can make their signals arrive in phase at that position, concentrating energy at a specific point in space."
      },
      {
        "type": "p",
        "text": "This is the basic idea behind near-field focusing, and it provides a foundation for near-field wavefront engineering."
      },
      {
        "type": "h2",
        "text": "4. Beam Alignment: A Challenge That Continues After Connection"
      },
      {
        "type": "p",
        "text": "High-gain antenna arrays help THz links overcome propagation loss, but this high gain usually comes with narrower beams."
      },
      {
        "type": "p",
        "text": "A narrow beam concentrates more energy in the target direction, while also requiring more precise alignment between the transmitter and receiver."
      },
      {
        "type": "p",
        "text": "Before establishing a communication link, the system first needs to find a suitable pair of transmit and receive beams. This process is commonly called beam training or beam search."
      },
      {
        "type": "p",
        "text": "Finding a suitable beam pair, however, does not resolve the whole problem. Once the connection is established, the system must continue to maintain beam alignment."
      },
      {
        "type": "p",
        "text": "For example, as a user moves, their position and orientation relative to the base station change. A beam that was initially aligned with the user may gradually drift away from the target, reducing the received signal strength."
      },
      {
        "type": "p",
        "text": "Similarly, a person or another object entering the propagation path can suddenly block the link."
      },
      {
        "type": "p",
        "text": "Beam management therefore involves both finding suitable beams during initial access and continuously tracking the environment and the user's state during communication, so that beam directions can be adjusted as conditions change."
      },
      {
        "type": "h2",
        "text": "5. How Can Sensing Help Maintain Reliable THz Communication?"
      },
      {
        "type": "p",
        "text": "This is one of the main reasons I see a natural connection between THz communication and sensing."
      },
      {
        "type": "p",
        "text": "Because THz communication relies heavily on directional beams, the system needs timely information about the user's position and motion, as well as changes in the surrounding environment."
      },
      {
        "type": "p",
        "text": "By sensing the user's motion, the system can estimate where the user is likely to be next and adjust the beam in advance, rather than waiting until the current beam has drifted off target and communication quality has already declined."
      },
      {
        "type": "p",
        "text": "Environmental sensing can also help identify potential blockers. When the system detects an object approaching the current propagation path, it can start looking for an alternative reflected path or switch to another available communication link before blockage occurs."
      },
      {
        "type": "p",
        "text": "Sensing can therefore provide environmental information and support beam search, beam tracking, and link recovery."
      },
      {
        "type": "p",
        "text": "There is an interesting tradeoff here: narrower beams generally offer higher antenna gain, but they also require more accurate alignment and more frequent updates."
      },
      {
        "type": "p",
        "text": "This is why I see such a close connection between THz communication and sensing. The more a communication system relies on highly directional beams, the more precisely it needs to know where the user is, what potential obstacles are nearby, and how those objects are moving."
      },
      {
        "type": "p",
        "text": "From this perspective, sensing is more than an extra feature added to a communication system. It is an important part of helping future THz systems adapt to dynamic propagation environments and maintain reliable communication."
      }
    ]
  },
  {
    "slug": "wireless-layers-and-beamforming",
    "title": "Beamforming: Principles and Architectures",
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
        "text": "5. Hybrid Array Architecture"
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
    "slug": "deep-learning-reinforcement-learning-and-optimization",
    "title": "Deep Learning, Reinforcement Learning, and Optimization in Wireless Communications: Roles and Integration",
    "lang": "en",
    "published": true,
    "summary": "The roles, advantages, limitations, and integration of deep learning, reinforcement learning, and optimization in wireless communications.",
    "blocks": [
      {
        "type": "h2",
        "text": "1. Deep Learning (DL)"
      },
      {
        "type": "p",
        "text": "Deep learning is a representation learning approach built around multilayer neural networks. It uses training data to learn complex feature representations and input–output mappings. In wireless communications, it is mainly used for channel estimation, signal detection, modulation recognition, and channel prediction. It can also be used to approximate solutions to optimization problems such as beamforming and resource allocation."
      },
      {
        "type": "p",
        "text": "Advantages: It can automatically extract features from complex data and fit nonlinear relationships that are difficult to describe with traditional analytical models. It offers advantages in high-dimensional signal processing, complex pattern recognition, and state prediction.",
        "parts": [
          {
            "tag": "strong",
            "text": "Advantages:"
          },
          {
            "text": " It can automatically extract features from complex data and fit nonlinear relationships that are difficult to describe with traditional analytical models. It offers advantages in high-dimensional signal processing, complex pattern recognition, and state prediction."
          }
        ]
      },
      {
        "type": "p",
        "text": "Limitations: It usually relies on large amounts of representative training data and is constrained by the distribution of that data. Changes in the channel model, SNR, antenna configuration, or communication environment may reduce its ability to generalize. Model interpretability is also relatively limited, and the outputs do not inherently satisfy physical constraints such as limits on transmit power and spectrum resources. Additional design is needed to enforce these constraints.",
        "parts": [
          {
            "tag": "strong",
            "text": "Limitations:"
          },
          {
            "text": " It usually relies on large amounts of representative training data and is constrained by the distribution of that data. Changes in the channel model, SNR, antenna configuration, or communication environment may reduce its ability to generalize. Model interpretability is also relatively limited, and the outputs do not inherently satisfy physical constraints such as limits on transmit power and spectrum resources. Additional design is needed to enforce these constraints."
          }
        ]
      },
      {
        "type": "h2",
        "text": "2. Reinforcement Learning (RL)"
      },
      {
        "type": "p",
        "text": "Reinforcement learning is a learning paradigm for sequential decision-making. An agent observes the state of the environment, takes an action, and updates its policy using rewards from the environment, with the aim of maximizing long-term cumulative return. Deep reinforcement learning (DRL) further uses deep neural networks to represent a policy or value function."
      },
      {
        "type": "p",
        "text": "In wireless communications, RL is mainly used for dynamic resource allocation, user scheduling, power control, beam management, and interference coordination. It is particularly suited to situations in which current decisions continue to affect future network states."
      },
      {
        "type": "p",
        "text": "Advantages: It does not necessarily require an accurate state-transition model in advance. Through interaction with the environment, it can learn complex decision-making policies and account for how current actions affect future network performance.",
        "parts": [
          {
            "tag": "strong",
            "text": "Advantages:"
          },
          {
            "text": " It does not necessarily require an accurate state-transition model in advance. Through interaction with the environment, it can learn complex decision-making policies and account for how current actions affect future network performance."
          }
        ]
      },
      {
        "type": "p",
        "text": "Limitations: Training usually requires extensive interaction with the environment, resulting in low sample efficiency. Reward design directly affects the learning outcome; a poorly designed reward may lead the policy away from the actual communication objectives. Differences between a simulation environment and a real network—the sim-to-real gap—also mean that a trained policy may not transfer directly to a real system. Safe exploration, training stability, and policy generalization are further important concerns.",
        "parts": [
          {
            "tag": "strong",
            "text": "Limitations:"
          },
          {
            "text": " Training usually requires extensive interaction with the environment, resulting in low sample efficiency. Reward design directly affects the learning outcome; a poorly designed reward may lead the policy away from the actual communication objectives. Differences between a simulation environment and a real network—the sim-to-real gap—also mean that a trained policy may not transfer directly to a real system. Safe exploration, training stability, and policy generalization are further important concerns."
          }
        ]
      },
      {
        "type": "h2",
        "text": "3. Optimization"
      },
      {
        "type": "p",
        "text": "Optimization is a mathematical framework for modeling and solving problems. It defines objective functions, decision variables, and constraints to find optimal or approximately optimal decisions. It is not a machine learning method. In wireless communications, it is widely used for power control, spectrum allocation, beamforming, resource scheduling, and network energy-efficiency optimization."
      },
      {
        "type": "p",
        "text": "Advantages: It uses mathematical models and physical constraints to explicitly describe the objectives and the feasible solution space. Problems with suitable mathematical structure can offer rigorous guarantees of optimality or convergence, and the results are relatively easy to interpret.",
        "parts": [
          {
            "tag": "strong",
            "text": "Advantages:"
          },
          {
            "text": " It uses mathematical models and physical constraints to explicitly describe the objectives and the feasible solution space. Problems with suitable mathematical structure can offer rigorous guarantees of optimality or convergence, and the results are relatively easy to interpret."
          }
        ]
      },
      {
        "type": "p",
        "text": "Limitations: The quality of the solution depends on the accuracy of the mathematical model. When wireless channels, user behavior, and network traffic are difficult to model accurately, the optimization results may differ from those of the real system. Nonconvex, combinatorial, and high-dimensional problems can also be computationally expensive, making it difficult to meet the real-time decision-making requirements of dynamic wireless networks.",
        "parts": [
          {
            "tag": "strong",
            "text": "Limitations:"
          },
          {
            "text": " The quality of the solution depends on the accuracy of the mathematical model. When wireless channels, user behavior, and network traffic are difficult to model accurately, the optimization results may differ from those of the real system. Nonconvex, combinatorial, and high-dimensional problems can also be computationally expensive, making it difficult to meet the real-time decision-making requirements of dynamic wireless networks."
          }
        ]
      },
      {
        "type": "h2",
        "text": "4. Relationships and Method Selection"
      },
      {
        "type": "p",
        "text": "The three approaches are not mutually exclusive. They provide different ways to address a problem:"
      },
      {
        "type": "ul",
        "items": [
          {
            "text": "Optimization: Specify the objectives, mathematical model, and feasibility constraints to determine how to solve for optimal decisions.",
            "parts": [
              {
                "tag": "strong",
                "text": "Optimization:"
              },
              {
                "text": " Specify the objectives, mathematical model, and feasibility constraints to determine how to solve for optimal decisions."
              }
            ]
          },
          {
            "text": "Deep learning: Learn complex feature representations and input–output mappings from data to extract patterns, predict states, or approximate solutions.",
            "parts": [
              {
                "tag": "strong",
                "text": "Deep learning:"
              },
              {
                "text": " Learn complex feature representations and input–output mappings from data to extract patterns, predict states, or approximate solutions."
              }
            ]
          },
          {
            "text": "Reinforcement learning: Learn sequential decision-making policies through interaction with the environment to improve long-term returns in a dynamic setting.",
            "parts": [
              {
                "tag": "strong",
                "text": "Reinforcement learning:"
              },
              {
                "text": " Learn sequential decision-making policies through interaction with the environment to improve long-term returns in a dynamic setting."
              }
            ]
          }
        ]
      },
      {
        "type": "p",
        "text": "In practical wireless communications research, the choice of method should depend on the problem itself:"
      },
      {
        "type": "ol",
        "items": [
          "If the system model is well defined, the objectives and constraints are clear, and traditional algorithms can solve the problem efficiently, mathematical optimization should be considered first.",
          "If the task mainly involves extracting complex signal features, learning nonlinear mappings, or predicting states, deep learning can be considered.",
          "If the system state keeps changing, current actions affect future states, and long-term decision-making returns matter, reinforcement learning can be considered."
        ]
      },
      {
        "type": "p",
        "text": "A dynamic problem does not necessarily require reinforcement learning. Repeated optimization and model predictive control (MPC) can also handle dynamic systems. RL should be introduced only when it offers practical advantages in areas such as incomplete models, long-term decision-making, or online computational efficiency."
      },
      {
        "type": "p",
        "text": "The three approaches can also be combined. For example, communication theory can provide the physical model, deep learning can extract complex features, and reinforcement learning can perform dynamic resource allocation."
      },
      {
        "type": "h2",
        "text": "5. Integrating Wireless Domain Knowledge with AI (Domain-Knowledge-Guided AI)"
      },
      {
        "type": "p",
        "text": "An important research idea in combining wireless communications with AI goes beyond simply applying deep learning or reinforcement learning to a communication problem. It incorporates existing domain theories, physical laws, mathematical models, and system constraints into AI learning and decision-making, helping AI learn more efficiently and produce more reliable solutions."
      },
      {
        "type": "p",
        "text": "The central idea is to use domain knowledge to provide AI with prior information and structural constraints, narrowing the learning space, reducing unproductive exploration, and lowering dependence on training data and environmental interaction, while improving generalization and decision reliability.",
        "parts": [
          {
            "text": "The central idea is to "
          },
          {
            "tag": "strong",
            "text": "use domain knowledge to provide AI with prior information and structural constraints, narrowing the learning space, reducing unproductive exploration, and lowering dependence on training data and environmental interaction, while improving generalization and decision reliability."
          }
        ]
      },
      {
        "type": "p",
        "text": "This can be achieved in several ways:"
      },
      {
        "type": "h3",
        "text": "(1) Knowledge-Guided Deep Learning"
      },
      {
        "type": "p",
        "text": "The physical models and mathematical structure of communication systems can be incorporated into a neural network’s input representations, architecture, and loss functions. For example, multipath propagation, time–frequency correlations, and MIMO signal models can guide the design of feature-extraction modules. Physical equations can be used to construct a physics-informed loss, or traditional signal-processing and iterative optimization algorithms can be unfolded into trainable networks through deep unfolding. This retains the structural strengths of traditional communication theory while using data to learn complex relationships that traditional models cannot describe accurately."
      },
      {
        "type": "h3",
        "text": "(2) Knowledge-Guided Reinforcement Learning"
      },
      {
        "type": "p",
        "text": "Communication system knowledge can be incorporated into the design of states, actions, rewards, and environments. For example, CSI, SINR, channel capacity, and queue states can be used to construct the state space. Spectrum, power, and QoS constraints can restrict the action space. Throughput, latency, and energy consumption can inform the reward function, while channel models and network protocols can provide a training environment consistent with real communication behavior. This can reduce unproductive exploration and help the agent learn policies that meet communication requirements more effectively."
      },
      {
        "type": "h3",
        "text": "(3) Combining Optimization Theory with Machine Learning (Learning to Optimize)"
      },
      {
        "type": "p",
        "text": "The mathematical structure of traditional optimization algorithms can guide neural network design, or machine learning can approximate the process of solving complex optimization problems. For example, deep unfolding maps an iterative algorithm into multiple trainable network layers. Learning to optimize uses neural networks to learn algorithm parameters or decision-making policies to improve the efficiency of solving complex problems."
      },
      {
        "type": "p",
        "text": "With these combinations, AI can use existing wireless communications knowledge to guide learning rather than relying entirely on data-driven black-box learning. This can improve sample efficiency, model generalization, physical consistency, and reliability in practical deployment."
      },
      {
        "type": "p",
        "text": "More domain knowledge is not always better. Inaccurate physical models or assumptions that do not match the real communication environment may instead restrict AI’s ability to learn. It is therefore necessary to decide which knowledge is reliable, which knowledge is suitable for incorporation, and which complex relationships should be learned from data."
      },
      {
        "type": "p",
        "text": "The ultimate goal is not to replace communication theory with AI, but to let communication theory guide AI learning, then use AI to address the limitations of traditional models and algorithms, enabling more efficient, reliable, and intelligent wireless communication systems.",
        "parts": [
          {
            "tag": "strong",
            "text": "The ultimate goal is not to replace communication theory with AI, but to let communication theory guide AI learning, then use AI to address the limitations of traditional models and algorithms, enabling more efficient, reliable, and intelligent wireless communication systems."
          }
        ]
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
        "text": "Cell-Free Architecture"
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
        "text": "Another challenge is self-interference. In a monostatic system that transmits while listening, direct leakage from the transmitter can overwhelm weak target echoes."
      },
      {
        "type": "p",
        "text": "THz could offer an opportunity to reduce self-interference within a compact device. At 300 GHz, just 1 cm of antenna spacing already spans ten wavelengths. For wavelength-scaled antennas, the reactive near field is confined to a small physical region, so a short separation can move the receiving antenna beyond the region of strong reactive coupling. Together with suitable antenna orientation and shielding, this could provide useful isolation while keeping the transmitter and receiver close together."
      },
      {
        "type": "p",
        "text": "Their proximity also gives the remaining direct leakage a useful timing feature. It travels only the short distance between the antennas, while a target echo makes a much longer round trip: τₗₑₐₖ ≈ d/c, compared with τₑ꜀ₕₒ ≈ 2R/c. With sufficient bandwidth, receiver processing can exploit this delay difference to distinguish direct leakage from distant echoes. Combining physical isolation with this separation could make simultaneous transmission and sensing more practical."
      },
      {
        "type": "p",
        "text": "Separating the transmitter and receiver reduces direct coupling, but the two stations must synchronize their clocks and frequency references. A clock mismatch can make an echo appear to have travelled longer or shorter than it actually did, giving an incorrect target range. A frequency mismatch can likewise be mistaken for a Doppler shift from target motion."
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
        "text": "One goal of 6G is to support higher data rates, which requires access to wider bandwidths. With lower frequency bands already crowded, finding large blocks of available spectrum pushes research toward higher carrier frequencies."
      },
      {
        "type": "p",
        "text": "The next challenge is receiving enough energy. With comparable antenna gains, higher frequencies bring greater free-space path loss. This is closely related to antenna size: elements are often roughly half a wavelength in size, so shorter wavelengths mean smaller elements with smaller effective receiving areas. Combining many elements into a larger array helps collect more of the incoming energy."
      },
      {
        "type": "p",
        "text": "The transmitter faces a related limitation: generating sufficient power becomes difficult at very high frequencies. Transmit arrays help by directing the available power toward the receiver. Both ends therefore depend heavily on antenna gain, producing highly directional links with narrow beams. This makes precise alignment essential: user movement can move the receiver outside the beam, while blockage can interrupt the path. Maintaining the link becomes as important as providing more bandwidth."
      },
      {
        "type": "p",
        "text": "A larger array does more than increase antenna gain. It also changes how the wave propagates across practical link distances. A common estimate of the far-field boundary is the Rayleigh distance, R ≈ 2D²/λ, where D is the array aperture and λ is the wavelength. At 10 GHz, where the wavelength is about 3 cm, an aperture of 1.5 m gives a Rayleigh distance of roughly 150 m. Even at frequencies well below THz, a sufficiently large array can therefore operate in the radiative near field over typical communication distances."
      },
      {
        "type": "p",
        "text": "This creates an opportunity as well as a challenge. In the far field, beamforming mainly controls the direction of the transmitted energy. In the near field, the curvature of the wavefront also depends on the receiver's distance. By adjusting the phase across the array, the system can focus energy at a particular location, potentially separating users by both angle and distance. But this more precise spatial control also makes the link more sensitive to changes in the user's position and the array's orientation. If a device rotates, its antenna orientation and polarization alignment with the incoming field can change even when its position remains the same. A practical system may need to track both position and orientation to maintain a reliable link."
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
        "text": "Engineering is about trade-offs: gains in one direction usually come at a cost elsewhere. The same applies to 6G. Higher performance may demand more power, more complex hardware, or greater computational effort. A useful design should strike a balance that fits the application. Different requirements call for different choices of frequency, bandwidth, array size, and architecture. The task is to understand which gains are worth their cost, and how much complexity the actual requirements justify."
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
  }
];
