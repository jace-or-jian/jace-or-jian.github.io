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
    "title": "Beamforming: From Wireless System Layers to Antenna Architectures",
    "lang": "en",
    "published": true,
    "summary": "From PHY and MAC to beam formation, antenna elements, RF chains, digital, analog, and hybrid architectures, and lens antennas.",
    "blocks": [
      {
        "type": "p",
        "text": "Before understanding beamforming, I think it helps to first understand how a wireless communication system is organized and how it works."
      },
      {
        "type": "p",
        "text": "A wireless communication system mainly needs to address two related questions: how to transmit information reliably through a wireless channel, and how to let multiple users share limited wireless resources."
      },
      {
        "type": "p",
        "text": "The first question is mainly handled by the physical layer (PHY), while the second is mainly handled by the medium access control (MAC) layer."
      },
      {
        "type": "p",
        "text": "Beamforming is an important physical-layer technique that improves wireless links by controlling the direction of antenna radiation. Its role extends beyond strengthening a single user's signal: it can also help the system use spatial resources more effectively, influencing how the MAC layer allocates resources among users."
      },
      {
        "type": "p",
        "text": "Understanding beamforming therefore starts with the basic layers of a wireless system, then moves toward how electromagnetic waves combine, antenna hardware, and different implementation architectures."
      },
      {
        "type": "h2",
        "text": "1. Understanding Wireless System Layers"
      },
      {
        "type": "p",
        "text": "A wireless communication system can be understood at two levels: the PHY handles how information travels through the wireless channel, while the MAC handles how multiple users share wireless resources."
      },
      {
        "type": "h3",
        "text": "1.1 Physical Layer (PHY)"
      },
      {
        "type": "p",
        "text": "The main task of the physical layer is to convert digital information into electromagnetic waves that can travel through a wireless channel, and to recover the original information at the receiver."
      },
      {
        "type": "p",
        "text": "At the transmitter, the original bits undergo channel coding and modulation to form a transmit signal, which is then radiated into space through radio-frequency (RF) circuitry and antennas."
      },
      {
        "type": "p",
        "text": "At the receiver, the system extracts information from the received signal and attempts to recover the original data as accurately as possible."
      },
      {
        "type": "p",
        "text": "Several important techniques are involved in this process:"
      },
      {
        "type": "ul",
        "items": [
          {
            "text": "Channel Estimation: Estimates the properties of the wireless channel and provides channel information for subsequent signal processing.",
            "parts": [
              {
                "tag": "strong",
                "text": "Channel Estimation:"
              },
              {
                "text": " Estimates the properties of the wireless channel and provides channel information for subsequent signal processing."
              }
            ]
          },
          {
            "text": "Modulation and Coding: Determines how information is mapped onto wireless signals and how transmission reliability is improved.",
            "parts": [
              {
                "tag": "strong",
                "text": "Modulation and Coding:"
              },
              {
                "text": " Determines how information is mapped onto wireless signals and how transmission reliability is improved."
              }
            ]
          },
          {
            "text": "Signal Detection: Recovers the transmitted data from the received signal.",
            "parts": [
              {
                "tag": "strong",
                "text": "Signal Detection:"
              },
              {
                "text": " Recovers the transmitted data from the received signal."
              }
            ]
          },
          {
            "text": "Beamforming: Controls the transmit and receive directions of an antenna array to improve signal quality and manage spatial interference.",
            "parts": [
              {
                "tag": "strong",
                "text": "Beamforming:"
              },
              {
                "text": " Controls the transmit and receive directions of an antenna array to improve signal quality and manage spatial interference."
              }
            ]
          }
        ]
      },
      {
        "type": "h3",
        "text": "1.2 Medium Access Control (MAC)"
      },
      {
        "type": "p",
        "text": "While the PHY focuses on how information is transmitted, the MAC layer mainly addresses how multiple users share limited communication resources."
      },
      {
        "type": "p",
        "text": "The main resources in a wireless system are time, frequency, and space."
      },
      {
        "type": "p",
        "text": "If multiple users transmit simultaneously on the same time and frequency resources, their signals may interfere with one another. The MAC therefore needs to decide:"
      },
      {
        "type": "ul",
        "items": [
          "Which users can transmit?",
          "When should each user transmit?",
          "Which time and frequency resources should each user use?",
          "Should a failed transmission be retransmitted?"
        ]
      },
      {
        "type": "p",
        "text": "The MAC coordinates these decisions through user scheduling and resource allocation."
      },
      {
        "type": "p",
        "text": "The PHY and MAC are closely connected. For example, beamforming is a PHY signal-processing technique, but it can create more opportunities for spatial multiplexing, allowing the MAC to schedule multiple users on the same time and frequency resources."
      },
      {
        "type": "p",
        "text": "This leads to one of beamforming's most important roles: making space a communication resource that the system can use.",
        "parts": [
          {
            "text": "This leads to one of beamforming's most important roles: "
          },
          {
            "tag": "strong",
            "text": "making space a communication resource that the system can use."
          }
        ]
      },
      {
        "type": "h2",
        "text": "2. Why Beamforming Matters"
      },
      {
        "type": "p",
        "text": "One way to improve wireless communication performance is to increase the available spectrum. Another is to control more effectively the directions in which wireless signals propagate."
      },
      {
        "type": "p",
        "text": "Conventional antennas often provide relatively broad coverage. With antenna arrays and beamforming, a system can concentrate more energy in a particular direction, improving the received signal quality for the target user."
      },
      {
        "type": "h3",
        "text": "2.1 The Physical Principle of Beamforming"
      },
      {
        "type": "p",
        "text": "An individual antenna has its own radiation pattern, which describes its radiation intensity in different directions."
      },
      {
        "type": "p",
        "text": "When multiple antenna elements form an array, the electromagnetic fields they generate combine in space."
      },
      {
        "type": "p",
        "text": "By controlling the relative phases of the signals transmitted by different elements, the system can change how the electromagnetic waves combine in different directions:"
      },
      {
        "type": "ul",
        "items": [
          "In some directions, the waves reinforce one another, producing constructive interference.",
          "In other directions, the waves may partially cancel one another, producing destructive interference."
        ]
      },
      {
        "type": "p",
        "text": "By adjusting the element phases appropriately, the system can form a high-gain beam in the target direction."
      },
      {
        "type": "p",
        "text": "This is the basic physical principle behind beamforming."
      },
      {
        "type": "figure",
        "src": "assets/notes/beamforming-interference.png",
        "alt": "Two phased arrays with opposite phase progressions. Overlapping wave fronts illustrate constructive interference along the steered beam and destructive interference in other directions.",
        "width": 1024,
        "height": 572
      },
      {
        "type": "h3",
        "text": "2.2 From Broad Coverage to Directional Beams"
      },
      {
        "type": "p",
        "text": "With this picture of how a beam is formed, it becomes easier to understand why beamforming can improve wireless communication."
      },
      {
        "type": "p",
        "text": "Wireless coverage can progress from broad omnidirectional coverage to sector coverage, and then to directional beams whose pointing directions can be adjusted dynamically."
      },
      {
        "type": "p",
        "text": "Each step gives the system greater control over the directions in which electromagnetic energy propagates."
      },
      {
        "type": "p",
        "text": "By concentrating energy toward a particular user, the system can strengthen that user's useful signal and reduce unnecessary radiation in other directions."
      },
      {
        "type": "figure",
        "src": "assets/notes/antenna-radiation-evolution.png",
        "alt": "A schematic progression from omnidirectional horizontal coverage to sector radiation and an antenna array producing multiple beams in azimuth and elevation.",
        "width": 2048,
        "height": 1536
      },
      {
        "type": "h3",
        "text": "2.3 Beamforming and Multi-user Communication"
      },
      {
        "type": "p",
        "text": "Beamforming is valuable both for strengthening an individual user's link and for helping the system serve multiple users simultaneously."
      },
      {
        "type": "p",
        "text": "Conventional resource allocation often assigns different time or frequency resources to different users to avoid mutual interference."
      },
      {
        "type": "p",
        "text": "However, if users have sufficiently distinct spatial channel characteristics, the system can direct different beams toward them and allow them to communicate simultaneously on the same time and frequency resources."
      },
      {
        "type": "p",
        "text": "This is closely related to multi-user multiple-input multiple-output (MU-MIMO) communication and spatial multiplexing."
      },
      {
        "type": "p",
        "text": "For example, a base station can use an antenna array to form different beams that serve users in different directions."
      },
      {
        "type": "p",
        "text": "Space then becomes a dimension that can be used for user scheduling and resource allocation, in addition to being the physical environment through which signals propagate."
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
        "text": "Of course, users being in different directions does not guarantee that their mutual interference can be completely eliminated. The result also depends on how distinguishable their spatial channels are, the accuracy of the channel state information, and whether the antenna array and RF architecture support the required spatial degrees of freedom."
      },
      {
        "type": "h2",
        "text": "3. Antenna Elements vs. RF Chains"
      },
      {
        "type": "p",
        "text": "Before comparing beamforming architectures, it is important to distinguish two concepts: antenna elements and RF chains."
      },
      {
        "type": "p",
        "text": "They often appear together in an antenna array, but they perform very different functions."
      },
      {
        "type": "h3",
        "text": "3.1 Antenna Elements"
      },
      {
        "type": "p",
        "text": "Antenna elements convert electrical signals into electromagnetic waves and radiate them into space."
      },
      {
        "type": "p",
        "text": "When multiple elements form an array, the system can change the overall radiation pattern by controlling their relative phases and amplitudes."
      },
      {
        "type": "p",
        "text": "Adding antenna elements can generally increase the array's physical aperture and spatial control, allowing higher-gain, narrower beams or more spatial degrees of freedom."
      },
      {
        "type": "h3",
        "text": "3.2 RF Chains"
      },
      {
        "type": "p",
        "text": "An RF chain generates and processes the radio-frequency signal that drives the antennas."
      },
      {
        "type": "p",
        "text": "A simplified transmit RF chain typically involves digital-to-analog conversion, frequency conversion, and power amplification, ultimately supplying an RF signal that the antennas can radiate."
      },
      {
        "type": "p",
        "text": "If one RF chain connects to multiple antenna elements, those elements can transmit differently phase-shifted versions of the same data waveform."
      },
      {
        "type": "p",
        "text": "Phase shifters adjust the relative phases of these signals, controlling the directions in which they combine constructively."
      },
      {
        "type": "p",
        "text": "The key distinction is therefore:"
      },
      {
        "type": "ul",
        "items": [
          {
            "text": "Antenna Elements determine how many radiating elements the array has and how the system can control its spatial radiation.",
            "parts": [
              {
                "tag": "strong",
                "text": "Antenna Elements"
              },
              {
                "text": " determine how many radiating elements the array has and how the system can control its spatial radiation."
              }
            ]
          },
          {
            "text": "RF Chains determine how many RF signals the system can generate and control independently.",
            "parts": [
              {
                "tag": "strong",
                "text": "RF Chains"
              },
              {
                "text": " determine how many RF signals the system can generate and control independently."
              }
            ]
          }
        ]
      },
      {
        "type": "p",
        "text": "Adding antenna elements does not automatically allow more independent data streams to be transmitted. The number of independent streams is generally limited by both the number of RF chains and the spatial rank of the wireless channel."
      },
      {
        "type": "p",
        "text": "For example, a single RF chain can drive dozens of antenna elements to form a high-gain beam, while those elements still transmit the same independent data waveform."
      },
      {
        "type": "p",
        "text": "This is why different beamforming architectures make different choices about the numbers of RF chains and antenna elements."
      },
      {
        "type": "h2",
        "text": "4. Digital, Analog, and Hybrid Beamforming"
      },
      {
        "type": "p",
        "text": "Depending on how RF chains connect to antenna elements, beamforming can be broadly divided into three architectures: digital, analog, and hybrid beamforming."
      },
      {
        "type": "p",
        "text": "The main distinction is whether the system controls each antenna signal independently in the digital domain, shares RF signals and controls their phases in the analog domain, or combines both approaches."
      },
      {
        "type": "h3",
        "text": "4.1 Digital Beamforming"
      },
      {
        "type": "p",
        "text": "Digital beamforming typically assigns an independent RF chain to each antenna element."
      },
      {
        "type": "p",
        "text": "This allows the system to control the amplitude and phase of each element's signal independently in the digital domain."
      },
      {
        "type": "p",
        "text": "With independent control over every element, digital beamforming offers considerable flexibility. It can form multiple beams and support the transmission of multiple independent data streams."
      },
      {
        "type": "p",
        "text": "Its main advantages are:"
      },
      {
        "type": "ul",
        "items": [
          "Independent digital signal processing for each antenna element.",
          "Flexible control over beam direction and shape.",
          "Greater flexibility in supporting MU-MIMO and multiple data streams."
        ]
      },
      {
        "type": "p",
        "text": "The drawback is also clear: a very large antenna array requires many RF chains, digital-to-analog converters, and associated RF components."
      },
      {
        "type": "p",
        "text": "This substantially increases hardware cost, power consumption, and implementation complexity."
      },
      {
        "type": "h3",
        "text": "4.2 Analog Beamforming"
      },
      {
        "type": "p",
        "text": "Analog beamforming takes a different approach."
      },
      {
        "type": "p",
        "text": "It typically uses a single RF chain to drive multiple antenna elements, with analog phase shifters controlling the relative phases across the elements."
      },
      {
        "type": "p",
        "text": "Because the elements share the same RF chain, they transmit the same data waveform with different phase shifts."
      },
      {
        "type": "p",
        "text": "This architecture greatly reduces the number of RF chains required, usually lowering hardware cost and power consumption."
      },
      {
        "type": "p",
        "text": "It also introduces limitations:"
      },
      {
        "type": "ul",
        "items": [
          "The array has only a limited number of independent RF waveforms.",
          "Beam control relies mainly on analog phase shifters, offering less flexibility than a fully digital architecture.",
          "A typical single-RF-chain implementation cannot transmit multiple independent data streams simultaneously."
        ]
      },
      {
        "type": "p",
        "text": "In a wideband system, using fixed phase shifters alone can also cause beam squint: different frequency components point in different directions."
      },
      {
        "type": "h3",
        "text": "4.3 Hybrid Beamforming"
      },
      {
        "type": "p",
        "text": "Hybrid beamforming combines features of digital and analog architectures."
      },
      {
        "type": "p",
        "text": "It uses multiple RF chains, but typically fewer RF chains than antenna elements."
      },
      {
        "type": "p",
        "text": "The digital stage handles data-stream mapping and precoding. The analog stage uses a phase-shifter network to distribute the RF signals among antenna elements and control their relative phases."
      },
      {
        "type": "p",
        "text": "The system can therefore support multiple independent data streams without providing a complete RF chain for every antenna element."
      },
      {
        "type": "p",
        "text": "Hybrid beamforming offers a tradeoff between hardware complexity, power consumption, and flexibility in beam control."
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
        "text": "5. Understanding Hybrid Array Architecture"
      },
      {
        "type": "p",
        "text": "To understand hybrid beamforming more clearly, it helps to look at its signal-processing steps."
      },
      {
        "type": "p",
        "text": "In a hybrid architecture, the digital precoder and analog precoder jointly determine the final transmit signal:"
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
        "text": "Here:"
      },
      {
        "type": "ul",
        "items": [
          "s represents the original data streams.",
          {
            "text": "F_BB is the digital baseband precoding matrix.",
            "parts": [
              {
                "tag": "strong",
                "text": "F"
              },
              {
                "tag": "sub",
                "text": "BB"
              },
              {
                "text": " is the digital baseband precoding matrix."
              }
            ]
          },
          {
            "text": "F_RF is the analog RF precoding matrix.",
            "parts": [
              {
                "tag": "strong",
                "text": "F"
              },
              {
                "tag": "sub",
                "text": "RF"
              },
              {
                "text": " is the analog RF precoding matrix."
              }
            ]
          },
          "x is the signal vector ultimately transmitted by the antenna array."
        ]
      },
      {
        "type": "p",
        "text": "The process can be understood in two steps."
      },
      {
        "type": "p",
        "text": "First, the digital baseband precoder F_BB processes the original data streams and maps them to different RF chains.",
        "parts": [
          {
            "text": "First, the digital baseband precoder "
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
            "text": " processes the original data streams and maps them to different RF chains."
          }
        ]
      },
      {
        "type": "p",
        "text": "Second, the analog precoder F_RF distributes the signals from those RF chains among the antenna elements through an analog network, using phase shifters to control their relative phases.",
        "parts": [
          {
            "text": "Second, the analog precoder "
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
            "text": " distributes the signals from those RF chains among the antenna elements through an analog network, using phase shifters to control their relative phases."
          }
        ]
      },
      {
        "type": "h3",
        "text": "5.1 Subarray-based Hybrid Architecture"
      },
      {
        "type": "p",
        "text": "A common implementation is the subarray architecture."
      },
      {
        "type": "p",
        "text": "In this structure, each RF chain connects to its own group of antenna elements, rather than to the entire array."
      },
      {
        "type": "p",
        "text": "Phase shifters control the relative phases within each group, allowing it to form its own directional beam."
      },
      {
        "type": "p",
        "text": "When multiple RF chains operate simultaneously, each subarray can use a different RF signal and form a beam in a different direction."
      },
      {
        "type": "p",
        "text": "The system can therefore serve multiple users simultaneously while using fewer RF chains than a fully digital architecture."
      },
      {
        "type": "p",
        "text": "It is important to remember that phase shifters do not create new independent data streams. They control how existing RF signals are distributed in space."
      },
      {
        "type": "p",
        "text": "The RF chains provide the independent signal paths, while the analog network determines how those signals radiate through the antenna array."
      },
      {
        "type": "p",
        "text": "For wideband systems, adding true-time-delay elements to the analog network can better handle differences in beam direction across frequency components, mitigating the beam squint that can arise when using phase shifters alone."
      },
      {
        "type": "figure",
        "src": "assets/notes/hybrid-beamforming-delays.png",
        "alt": "Digital baseband precoding feeds multiple RF chains. Each illustrated branch includes analog phase shifters and delay elements before its antenna subarray, with beams directed toward different users.",
        "width": 2500,
        "height": 1347
      },
      {
        "type": "h2",
        "text": "6. An Alternative: Lens Antennas"
      },
      {
        "type": "p",
        "text": "Alongside phase-controlled antenna arrays, lens antennas offer another way to produce directional beams."
      },
      {
        "type": "p",
        "text": "The basic idea is similar to that of an optical lens."
      },
      {
        "type": "p",
        "text": "An optical lens changes the direction of light through refraction and focusing. An electromagnetic lens uses its material and geometry to shape electromagnetic propagation, focusing waves arriving from different directions at different positions."
      },
      {
        "type": "p",
        "text": "In reception, waves arriving from different directions focus near feed antennas at different positions behind the lens."
      },
      {
        "type": "p",
        "text": "In transmission, feed antennas at different positions produce directional beams in their corresponding directions."
      },
      {
        "type": "p",
        "text": "An RF switching network connects the RF chains to different feed antennas, allowing the system to select the beam directions it needs."
      },
      {
        "type": "p",
        "text": "In a lens antenna system:"
      },
      {
        "type": "ul",
        "items": [
          {
            "text": "The Lens performs electromagnetic focusing and maps directions to feed positions.",
            "parts": [
              {
                "tag": "strong",
                "text": "The Lens"
              },
              {
                "text": " performs electromagnetic focusing and maps directions to feed positions."
              }
            ]
          },
          {
            "text": "Feed Antennas correspond to different beam directions.",
            "parts": [
              {
                "tag": "strong",
                "text": "Feed Antennas"
              },
              {
                "text": " correspond to different beam directions."
              }
            ]
          },
          {
            "text": "The RF Switching Network selects which beams are active.",
            "parts": [
              {
                "tag": "strong",
                "text": "The RF Switching Network"
              },
              {
                "text": " selects which beams are active."
              }
            ]
          }
        ]
      },
      {
        "type": "p",
        "text": "Compared with a conventional phase-shifter array, this approach reduces reliance on electronic phase control at every antenna element. The available beam directions, however, are generally constrained by the feed positions and lens design."
      },
      {
        "type": "p",
        "text": "In essence, lens antennas offer a different way to process signals spatially: part of the beam formation is performed by the electromagnetic structure itself, rather than relying entirely on digital or analog phase control."
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
    "title": "How I Understand Covert Communication and Physical-Layer Security",
    "lang": "en",
    "published": true,
    "summary": "My understanding of covert communication, the square-root law, uncertainty and covertness metrics, physical-layer security, and wiretap coding.",
    "blocks": [
      {
        "type": "p",
        "text": "In wireless communication, security can mean more than preventing others from reading the transmitted information. It can also mean preventing them from knowing that communication is taking place."
      },
      {
        "type": "p",
        "text": "These correspond to two different security goals: covert communication focuses on whether communication activity can be detected, while physical-layer security (PLS) focuses on whether the transmitted information can be learned by an eavesdropper."
      },
      {
        "type": "p",
        "text": "In these settings, Willie typically denotes an observer trying to detect communication activity, while Eve denotes an eavesdropper trying to learn the message. Both approaches use the physical properties of wireless channels to provide protection, but they address different questions."
      },
      {
        "type": "h2",
        "text": "1. Covert Communication"
      },
      {
        "type": "p",
        "text": "The central idea of covert communication is to make Alice's transmitted signal blend as closely as possible into the background noise that Willie already expects to receive."
      },
      {
        "type": "p",
        "text": "Willie needs to distinguish between two hypotheses:"
      },
      {
        "type": "ul",
        "items": [
          "H₀: Alice is not transmitting.",
          "H₁: Alice is transmitting."
        ]
      },
      {
        "type": "p",
        "text": "In a simple channel model, Willie's received signal can be written as:"
      },
      {
        "type": "equation",
        "text": "H₀: Yᵢ = Zᵢ\nH₁: Yᵢ = h_W Xᵢ + Zᵢ,   i = 1, …, n",
        "parts": [
          {
            "text": "H₀: Yᵢ = Zᵢ\nH₁: Yᵢ = "
          },
          {
            "text": "h"
          },
          {
            "tag": "sub",
            "text": "W"
          },
          {
            "text": " Xᵢ + Zᵢ,   i = 1, …, n"
          }
        ]
      },
      {
        "type": "p",
        "text": "Here, Yᵢ is the signal received by Willie, Zᵢ is the background noise, Xᵢ is Alice's transmitted signal, and h_W is the channel coefficient from Alice to Willie.",
        "parts": [
          {
            "text": "Here, Yᵢ is the signal received by Willie, Zᵢ is the background noise, Xᵢ is Alice's transmitted signal, and "
          },
          {
            "text": "h"
          },
          {
            "tag": "sub",
            "text": "W"
          },
          {
            "text": " is the channel coefficient from Alice to Willie."
          }
        ]
      },
      {
        "type": "p",
        "text": "The goal of covert communication is to make the received signals under these two hypotheses as difficult to distinguish as possible."
      },
      {
        "type": "p",
        "text": "Willie can use a detector to decide whether communication is taking place, but two kinds of error are possible: a false alarm (P_FA), in which he declares communication when none is occurring, and a missed detection (P_MD), in which he fails to detect an ongoing transmission.",
        "parts": [
          {
            "text": "Willie can use a detector to decide whether communication is taking place, but two kinds of error are possible: a false alarm ("
          },
          {
            "text": "P"
          },
          {
            "tag": "sub",
            "text": "FA"
          },
          {
            "text": "), in which he declares communication when none is occurring, and a missed detection ("
          },
          {
            "text": "P"
          },
          {
            "tag": "sub",
            "text": "MD"
          },
          {
            "text": "), in which he fails to detect an ongoing transmission."
          }
        ]
      },
      {
        "type": "p",
        "text": "Covertness can be measured by the minimum sum of these two error probabilities over all detectors:"
      },
      {
        "type": "equation",
        "text": "ξ* = min_detector (P_FA + P_MD) ≥ 1 − ε",
        "parts": [
          {
            "text": "ξ* = "
          },
          {
            "text": "min"
          },
          {
            "tag": "sub",
            "text": "detector"
          },
          {
            "text": " ("
          },
          {
            "text": "P"
          },
          {
            "tag": "sub",
            "text": "FA"
          },
          {
            "text": " + "
          },
          {
            "text": "P"
          },
          {
            "tag": "sub",
            "text": "MD"
          },
          {
            "text": ") ≥ 1 − ε"
          }
        ]
      },
      {
        "type": "p",
        "text": "When ξ* is close to 1, Willie has difficulty distinguishing H₀ from H₁. For hypotheses with equal prior probabilities, the minimum average detection error probability is ξ*/2."
      },
      {
        "type": "p",
        "text": "Two other concepts worth noting are channel use and blocklength. A channel use is one input–output opportunity in the channel model, while the blocklength n is the number of channel uses spanned by a codeword. The length of a transmission is therefore an important resource in covert communication."
      },
      {
        "type": "h2",
        "text": "2. The Square-Root Law"
      },
      {
        "type": "p",
        "text": "In the classical additive white Gaussian noise (AWGN) model, if Willie knows the background noise statistics, increasing the number of observations n allows him to estimate the average received energy more accurately by accumulating more data."
      },
      {
        "type": "p",
        "text": "Suppose the background noise variance is σ² and Alice's signal increases the received signal variance by q. Define:"
      },
      {
        "type": "equation",
        "text": "r = q / σ² ≪ 1"
      },
      {
        "type": "p",
        "text": "For independent, real-valued Gaussian observations at low signal power, the Kullback–Leibler (KL) divergence between the distributions under the two hypotheses is approximately:"
      },
      {
        "type": "equation",
        "text": "D(P₁ⁿ ∥ P₀ⁿ) ≈ nr² / 4"
      },
      {
        "type": "p",
        "text": "Limiting Willie's ability to distinguish H₀ from H₁ requires controlling the difference between these distributions. Under the conditions of the classical square-root law, this means:"
      },
      {
        "type": "equation",
        "text": "r = O(1/√n)"
      },
      {
        "type": "p",
        "text": "As the blocklength increases, Alice must therefore reduce the signal power received at Willie on the order of 1/√n."
      },
      {
        "type": "p",
        "text": "With Bob also operating in the low-SNR regime, the information transmitted per channel use is approximately proportional to the SNR. This leads to:"
      },
      {
        "type": "equation",
        "text": "Total covert bits: O(√n)\nBits per channel use: O(1/√n)"
      },
      {
        "type": "p",
        "text": "This is the classical square-root law."
      },
      {
        "type": "p",
        "text": "It does not mean that a longer transmission carries less information. The total amount of information still increases with n, but it grows as √n rather than linearly with n."
      },
      {
        "type": "p",
        "text": "I find this result interesting: the longer communication continues, the more opportunities Willie has to accumulate evidence, so Alice must further limit her signal strength. Low power is the price of hiding from an observer who keeps watching."
      },
      {
        "type": "h2",
        "text": "3. Channel Uncertainty and Covertness Metrics"
      },
      {
        "type": "p",
        "text": "The preceding analysis assumes that Willie knows the background noise statistics. In a real wireless environment, however, an observer may not have accurate knowledge of this information."
      },
      {
        "type": "p",
        "text": "It helps to distinguish two kinds of uncertainty: uncertainty about the signal under H₁, and uncertainty about the background noise under H₀."
      },
      {
        "type": "p",
        "text": "Random noise samples and unknown background noise power are different sources of uncertainty. With a stable, known noise baseline, Willie can discover an additional signal by repeatedly averaging his observations. If the background noise power itself is uncertain, however, the same change in received energy may be explained as normal background variation."
      },
      {
        "type": "p",
        "text": "Uncertainty under H₁ can often improve the constant factor in the square-root law, allowing Alice to transmit more covert information while the growth still remains proportional to √n."
      },
      {
        "type": "p",
        "text": "Uncertainty under H₀ is more interesting in this respect. If Willie cannot accurately determine the background noise power, and that uncertainty persists as the number of observations grows, some models can allow covert information to grow faster than the traditional square-root scaling."
      },
      {
        "type": "p",
        "text": "Beyond uncertainty itself, another important question is how to evaluate covertness. Suppose the system has a random state S that is known to Willie, such as a channel state or noise power level. Three different covertness metrics can be used:"
      },
      {
        "type": "p",
        "text": "Average:",
        "parts": [
          {
            "tag": "strong",
            "text": "Average:"
          }
        ]
      },
      {
        "type": "equation",
        "text": "E_S[ξ*(S)] ≥ 1 − ε",
        "parts": [
          {
            "text": "E"
          },
          {
            "tag": "sub",
            "text": "S"
          },
          {
            "text": "[ξ*(S)] ≥ 1 − ε"
          }
        ]
      },
      {
        "type": "p",
        "text": "Outage:",
        "parts": [
          {
            "tag": "strong",
            "text": "Outage:"
          }
        ]
      },
      {
        "type": "equation",
        "text": "Pr_S{ξ*(S) < 1 − ε} ≤ δ",
        "parts": [
          {
            "text": "Pr"
          },
          {
            "tag": "sub",
            "text": "S"
          },
          {
            "text": "{ξ*(S) < 1 − ε} ≤ δ"
          }
        ]
      },
      {
        "type": "p",
        "text": "Worst-case:",
        "parts": [
          {
            "tag": "strong",
            "text": "Worst-case:"
          }
        ]
      },
      {
        "type": "equation",
        "text": "inf_s ξ*(s) ≥ 1 − ε",
        "parts": [
          {
            "text": "inf"
          },
          {
            "tag": "sub",
            "text": "s"
          },
          {
            "text": " ξ*(s) ≥ 1 − ε"
          }
        ]
      },
      {
        "type": "p",
        "text": "These metrics express different security requirements. The average metric concerns mean covertness performance. The outage metric concerns the probability that covertness falls below the requirement. The worst-case metric requires every possible state to satisfy the covertness condition."
      },
      {
        "type": "p",
        "text": "The same channel uncertainty may therefore improve average covertness while increasing outage risk. For a particular system, it is important to choose a metric that matches its actual requirements."
      },
      {
        "type": "h2",
        "text": "4. Physical-Layer Security"
      },
      {
        "type": "p",
        "text": "Physical-layer security focuses on protecting the information content of a transmission that is already taking place."
      },
      {
        "type": "p",
        "text": "Bob and Eve may receive the same transmitted signal through different propagation paths, resulting in different reception quality. If Bob has a better channel than Eve, Alice can use that channel advantage to keep the information secret."
      },
      {
        "type": "p",
        "text": "This advantage can arise naturally from the propagation environment or be created through system design. For example:"
      },
      {
        "type": "ul",
        "items": [
          {
            "text": "Beamforming: Concentrates more useful energy toward Bob.",
            "parts": [
              {
                "tag": "strong",
                "text": "Beamforming:"
              },
              {
                "text": " Concentrates more useful energy toward Bob."
              }
            ]
          },
          {
            "text": "Artificial Noise: Injects artificial noise toward Eve without substantially degrading Bob's reception.",
            "parts": [
              {
                "tag": "strong",
                "text": "Artificial Noise:"
              },
              {
                "text": " Injects artificial noise toward Eve without substantially degrading Bob's reception."
              }
            ]
          },
          {
            "text": "Transmission Opportunity Selection: Chooses more favourable times, frequencies, or channel states for transmission.",
            "parts": [
              {
                "tag": "strong",
                "text": "Transmission Opportunity Selection:"
              },
              {
                "text": " Chooses more favourable times, frequencies, or channel states for transmission."
              }
            ]
          }
        ]
      },
      {
        "type": "p",
        "text": "For a simple real-valued Gaussian wiretap channel, the secrecy capacity is:"
      },
      {
        "type": "equation",
        "text": "C_s = [C_B − C_E]⁺\n= [½ log₂(1 + γ_B) − ½ log₂(1 + γ_E)]⁺",
        "parts": [
          {
            "text": "C"
          },
          {
            "tag": "sub",
            "text": "s"
          },
          {
            "text": " = ["
          },
          {
            "text": "C"
          },
          {
            "tag": "sub",
            "text": "B"
          },
          {
            "text": " − "
          },
          {
            "text": "C"
          },
          {
            "tag": "sub",
            "text": "E"
          },
          {
            "text": "]⁺\n= [½ log₂(1 + "
          },
          {
            "text": "γ"
          },
          {
            "tag": "sub",
            "text": "B"
          },
          {
            "text": ") − ½ log₂(1 + "
          },
          {
            "text": "γ"
          },
          {
            "tag": "sub",
            "text": "E"
          },
          {
            "text": ")]⁺"
          }
        ]
      },
      {
        "type": "p",
        "text": "Here, C_B and C_E are the channel capacities of Bob and Eve, respectively; γ_B and γ_E are their received SNRs; and [x]⁺ = max(x, 0).",
        "parts": [
          {
            "text": "Here, "
          },
          {
            "text": "C"
          },
          {
            "tag": "sub",
            "text": "B"
          },
          {
            "text": " and "
          },
          {
            "text": "C"
          },
          {
            "tag": "sub",
            "text": "E"
          },
          {
            "text": " are the channel capacities of Bob and Eve, respectively; "
          },
          {
            "text": "γ"
          },
          {
            "tag": "sub",
            "text": "B"
          },
          {
            "text": " and "
          },
          {
            "text": "γ"
          },
          {
            "tag": "sub",
            "text": "E"
          },
          {
            "text": " are their received SNRs; and [x]⁺ = max(x, 0)."
          }
        ]
      },
      {
        "type": "p",
        "text": "This formula directly expresses the design goal of PLS: improve Bob's reception while reducing the useful information available to Eve. The difference between their channel capacities determines the achievable secrecy rate."
      },
      {
        "type": "h2",
        "text": "5. Wiretap Coding and Secure Communication"
      },
      {
        "type": "p",
        "text": "Gaining a channel advantage is only the first step. The system also needs suitable coding to protect the transmitted content. This is where wiretap coding comes in."
      },
      {
        "type": "p",
        "text": "I find it helpful to picture a codebook as a collection of waveforms that might be transmitted. Alice can prepare several possible codewords for the same message and randomly choose one to transmit:"
      },
      {
        "type": "equation",
        "text": "Message m + private random choice r → codeword xⁿ(m, r)"
      },
      {
        "type": "p",
        "text": "The codebook and the way codewords are grouped can be public, while the random choice r remains private from Eve."
      },
      {
        "type": "p",
        "text": "Through his better channel, Bob can reliably identify the corresponding codeword and recover the message. Eve's poorer channel, meanwhile, may prevent her from determining which message Alice actually sent, even when she knows the entire codebook."
      },
      {
        "type": "p",
        "text": "With suitable coding rates and randomization, both of the following can hold:"
      },
      {
        "type": "equation",
        "text": "Bob: Pr{M̂_B ≠ M} → 0\nEve: I(M; Z_Eⁿ | C) → 0",
        "parts": [
          {
            "text": "Bob: Pr{"
          },
          {
            "text": "M̂"
          },
          {
            "tag": "sub",
            "text": "B"
          },
          {
            "text": " ≠ M} → 0\nEve: I(M; "
          },
          {
            "text": "Z"
          },
          {
            "tag": "sub",
            "text": "E"
          },
          {
            "text": "ⁿ | C) → 0"
          }
        ]
      },
      {
        "type": "p",
        "text": "The first condition says that Bob's decoding error probability approaches zero. The second says that the information Eve obtains about the original message approaches zero, a typical expression of strong secrecy."
      },
      {
        "type": "p",
        "text": "Wiretap coding therefore does not prevent Eve from seeing the signal. It prevents her from learning the message effectively from her received signal, even when she knows the coding structure."
      },
      {
        "type": "p",
        "text": "Looking back at these two approaches, covert communication aims to hide communication activity, while PLS aims to protect its content. They can work alongside traditional cryptography and other security mechanisms to provide protection at different levels. Who knows how these ideas will develop in the future?"
      }
    ]
  },
  {
    "slug": "high-speed-train-doppler-and-cell-free",
    "title": "Wireless Communication on High-Speed Trains: Doppler Effects and Cell-Free Architecture",
    "lang": "en",
    "published": true,
    "summary": "How a train ride led me from Doppler shifts and channel variation to cellular handover and user-centric cell-free service.",
    "blocks": [
      {
        "type": "p",
        "text": "Sometimes, while travelling on a high-speed train, the wireless connection suddenly gets worse. My first thought was the Doppler effect: perhaps the train was simply moving too fast."
      },
      {
        "type": "p",
        "text": "Later, however, comparing the train's speed with the propagation speed of electromagnetic waves made me question whether that explanation was sufficient. As I learned about cellular handover, I began to realize that the problem concerns both how radio waves propagate and how the network continually adapts its service as users move."
      },
      {
        "type": "h2",
        "text": "1. Doppler Effect and Channel Variation"
      },
      {
        "type": "p",
        "text": "First, consider the orders of magnitude involved:"
      },
      {
        "type": "equation",
        "text": "c ≈ 3 × 10⁸ m/s\nv = 300 km/h ≈ 83.3 m/s\nv/c ≈ 2.8 × 10⁻⁷"
      },
      {
        "type": "p",
        "text": "An electromagnetic wave takes only about 3.3 μs to travel 1 km, while the train takes about 12 seconds to cover the same distance. The time scales are vastly different: the wave reaches the train almost instantaneously."
      },
      {
        "type": "p",
        "text": "The Doppler shift can be expressed as:"
      },
      {
        "type": "equation",
        "text": "f_D = (v cos θ / c) f_c = v cos θ / λ\n|f_D|_max ≈ 972 Hz at 300 km/h and 3.5 GHz",
        "parts": [
          {
            "text": "f"
          },
          {
            "tag": "sub",
            "text": "D"
          },
          {
            "text": " = (v cos θ / c) f"
          },
          {
            "tag": "sub",
            "text": "c"
          },
          {
            "text": " = v cos θ / λ\n|f"
          },
          {
            "tag": "sub",
            "text": "D"
          },
          {
            "text": "|"
          },
          {
            "tag": "sub",
            "text": "max"
          },
          {
            "text": " ≈ 972 Hz at 300 km/h and 3.5 GHz"
          }
        ]
      },
      {
        "type": "p",
        "text": "At 3.5 GHz, the wavelength is about 8.6 cm. A train travelling at 300 km/h moves about 8.3 cm in just 1 ms, nearly a full wavelength. If its motion is aligned with the propagation path, the received signal's phase can change by almost a full cycle during that interval."
      },
      {
        "type": "p",
        "text": "This helped me understand why Doppler can significantly affect wireless communication even when v/c is tiny. What matters is not just speed relative to the speed of light, but also the distance travelled relative to the signal's wavelength."
      },
      {
        "type": "p",
        "text": "At high speeds, larger Doppler shifts and faster channel variations make signal processing at the receiver more difficult. If frequency compensation or channel tracking cannot keep up, decoding errors and retransmissions can increase, ultimately reducing the data rate."
      },
      {
        "type": "p",
        "text": "Still, I do not see rapid channel variation as the biggest challenge for high-speed train communication. As the train moves along the track, the network also has to keep changing which base station serves the user."
      },
      {
        "type": "h2",
        "text": "2. Cellular Handover"
      },
      {
        "type": "p",
        "text": "As the train moves, the current serving cell may gradually become less suitable, while another cell offers better signal conditions."
      },
      {
        "type": "p",
        "text": "Through measurement, decision-making, and execution, the network performs a handover, transferring the user's connection from one serving cell to another."
      },
      {
        "type": "p",
        "text": "To a passenger on the train, the connection may seem continuous. Behind that experience, however, the network must keep making mobility-management decisions."
      },
      {
        "type": "p",
        "text": "The time a train spends within a service region can be roughly expressed as:"
      },
      {
        "type": "equation",
        "text": "Time across a service region ≈ L / v"
      },
      {
        "type": "p",
        "text": "For example, if the service region is L = 1 km long, a train travelling at 300 km/h takes only about 12 seconds to pass through it."
      },
      {
        "type": "p",
        "text": "High-speed movement therefore shortens the time a user remains within a coverage region, leaving the network less time to complete measurements and handover."
      },
      {
        "type": "h2",
        "text": "3. User-Centric Cell-Free Architecture"
      },
      {
        "type": "p",
        "text": "User-centric cell-free massive MIMO offers a different approach to network architecture."
      },
      {
        "type": "p",
        "text": "Conventional cellular networks organize service mainly around individual cells. In user-centric cell-free massive MIMO, multiple distributed access points (APs) cooperate to serve the user. As the user moves, the set of serving APs can change dynamically."
      },
      {
        "type": "p",
        "text": "For example:"
      },
      {
        "type": "equation",
        "text": "Serving set: {AP₁, AP₂} → {AP₂, AP₃}"
      },
      {
        "type": "p",
        "text": "As the user moves, AP₁ can gradually leave the serving set while AP₃ joins. If AP₂ continues serving the user throughout this process, it can help maintain connection continuity."
      },
      {
        "type": "p",
        "text": "This architecture also brings new challenges. As the train moves, the network needs to update channel state information (CSI) promptly, coordinate synchronized transmissions among APs, and decide which APs should join or leave the current serving set. All of these operations create additional coordination overhead."
      },
      {
        "type": "p",
        "text": "For high-speed trains, the key question is whether the network can make these updates smoothly enough to reduce noticeable connection interruptions while maintaining stable service. From this perspective, cell-free architecture changes how users are served at the network level, making the coordination and transition of serving nodes during movement a central challenge."
      }
    ]
  },
  {
    "slug": "multipath-doppler-and-coherence",
    "title": "Multipath and Motion: Understanding Wireless Channels Through Interference Patterns",
    "lang": "en",
    "published": true,
    "summary": "Understanding multipath fading, motion, Doppler spread, delay spread, coherence time, and coherence bandwidth through one interference pattern.",
    "blocks": [
      {
        "type": "p",
        "text": "A transmitted signal rarely reaches the receiver along just one path. It may travel directly to the receiver, reflect off a wall, scatter from objects, or diffract around an edge. The receiver therefore usually receives several copies of the signal along different paths."
      },
      {
        "type": "p",
        "text": "These copies have different amplitudes, phases, and delays. When they combine, they reinforce one another at some positions and cancel one another at others, producing multipath fading."
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
        "text": "I like to picture this as an invisible interference pattern spread across space. Like the bright and dark fringes in an optical interference experiment, radio waves combine constructively at some positions to create stronger-signal regions, while cancelling one another at other positions to create weaker-signal regions."
      },
      {
        "type": "p",
        "text": "If the transmitter and the surrounding environment remain unchanged, this pattern also remains relatively fixed in space. The receiver's position determines which part of the pattern we actually observe."
      },
      {
        "type": "h2",
        "text": "1. Spatial Interference Pattern"
      },
      {
        "type": "p",
        "text": "The key to this interference pattern is the relative phase between different propagation paths."
      },
      {
        "type": "p",
        "text": "For two paths with a delay difference Δτ, the phase difference at frequency f can be expressed as:"
      },
      {
        "type": "equation",
        "text": "Δφ = 2πfΔτ = 2πΔL/λ"
      },
      {
        "type": "p",
        "text": "Here, ΔL is the difference in path length and λ is the wavelength."
      },
      {
        "type": "p",
        "text": "Even a small change in path length can alter the relative phase between the two paths and change how they combine."
      },
      {
        "type": "p",
        "text": "This also explains why the received signal keeps changing as the receiver moves. The lengths of paths arriving from different directions change at different rates, shifting their relative phases. As I move through space, it is as though I am passing through this fixed interference pattern, encountering regions of stronger and weaker signal in turn."
      },
      {
        "type": "figure",
        "src": "assets/notes/multipath-spatial.png",
        "alt": "Simulated received power along a twelve-wavelength route: scattered paths produce repeated fluctuations and deep dips; adding a strong direct path reduces the fluctuations.",
        "width": 1620,
        "height": 864
      },
      {
        "type": "h2",
        "text": "2. Motion and Temporal Variation"
      },
      {
        "type": "p",
        "text": "If we imagine the spatial interference pattern as a static picture, the receiver's movement is like travelling through that picture."
      },
      {
        "type": "p",
        "text": "From the receiver's perspective, a signal-strength distribution that is fixed in space becomes a fluctuation over time as its position changes."
      },
      {
        "type": "p",
        "text": "In channel terms, each propagation path experiences a Doppler shift due to relative motion. Since the paths usually arrive from different directions, their Doppler shifts generally differ as well."
      },
      {
        "type": "p",
        "text": "These different frequency shifts cause the relative phases between paths to change continuously, making the interference pattern observed by the receiver evolve over time."
      },
      {
        "type": "p",
        "text": "A larger Doppler spread generally means that the relative phases change more quickly, and so does the observed interference pattern. The interval over which the received channel remains similar becomes shorter: in other words, the coherence time decreases."
      },
      {
        "type": "h2",
        "text": "3. Frequency Variation and Delay Spread"
      },
      {
        "type": "p",
        "text": "Alongside moving through space and observing changes over time, we can also examine the same interference pattern from a frequency perspective."
      },
      {
        "type": "p",
        "text": "Suppose I stay at a fixed position and change only the frequency of the transmitted signal. The physical path lengths remain unchanged, but the phase differences between paths still vary with frequency."
      },
      {
        "type": "p",
        "text": "For paths with a larger delay difference, even a small frequency change can produce a substantial change in relative phase. Peaks and dips in the channel response therefore occur more closely together along the frequency axis."
      },
      {
        "type": "p",
        "text": "This is the connection between delay spread and coherence bandwidth: larger differences in path delays generally cause the channel response to vary more rapidly with frequency, resulting in a smaller coherence bandwidth."
      },
      {
        "type": "h2",
        "text": "4. Coherence Time and Coherence Bandwidth"
      },
      {
        "type": "p",
        "text": "We can now connect the spatial, temporal, and frequency perspectives."
      },
      {
        "type": "p",
        "text": "In time, a larger Doppler spread means that the observed interference pattern changes more quickly, so the coherence time is shorter."
      },
      {
        "type": "p",
        "text": "In frequency, a larger root-mean-square (RMS) delay spread means that the interference pattern changes more quickly as frequency varies, so the coherence bandwidth is smaller."
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
      },
      {
        "type": "p",
        "text": "These parameters also help characterize the fading we observe."
      },
      {
        "type": "p",
        "text": "If the signal bandwidth is much smaller than the coherence bandwidth, the channel response is approximately the same across the entire signal band. Different frequency components experience similar gains and phases, producing flat fading."
      },
      {
        "type": "p",
        "text": "If the signal bandwidth is wide enough to span several pronounced peaks and dips in the interference pattern, different frequency components experience different gains and phases, producing frequency-selective fading."
      },
      {
        "type": "p",
        "text": "From this perspective, multipath fading, Doppler spread, delay spread, coherence time, and coherence bandwidth are closely connected concepts. They can all be understood through the same interference pattern: the relative phases of different propagation paths determine how signals combine, while changes in position, time, and frequency determine how that pattern appears."
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
