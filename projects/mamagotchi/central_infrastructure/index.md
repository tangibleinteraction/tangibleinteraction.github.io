---
title: "The Interface Layer of MAMAgotchi: Communication Infrastructure and State Visualization"
authors: Julia-Robin Schuster, Janek Engel, Hong Lâm Nguyen, Finja Adam
date: "2026-07-06"
description: An overview of the communication protocol stack, server-side business logic, and visualization architecture developed by the interface group for the MAMAgotchi tangible interaction project.
layout: blog
order: 1
images:
  - image: "Figure 1: Overview of the infrastructure and the used components (own figure)."
    url: overview-mamagotchi-infrastructure.png
    space-above: 24
  - image: "Figure 2: Infrastructure connection details (own figure)."
    url: infrastructure-connection-details.png
    space-above: 27
  - image: "Figure 3: Server-Side Architecture with a Python server and different modules (own figure)."
    url: raspberry-pi-content.png
    space-above: 8
  # NOTICE:
  # The space-above parameter cannot be >30! To display the visual gap, I added an empty image
  - image:
    space-above: 3
  - image: "Figure 4: Screenshot of the implemented visualization."
    url: visualization-final.png
    space-above: 30
---

This article documents the contribution of the interface group to the MAMAgotchi tangible interaction project. While the accompanying station groups were responsible for the physical hardware placed throughout the apartment, our group designed and implemented the underlying **communication infrastructure** and the **server-side business logic** that translate physical interactions into the behavior of a virtual companion. In addition, we were responsible for the technical **implementation and integration of the visualization**, whose conceptual design was developed by a separate group within the project. This post describes the architectural decisions made, the protocols evaluated, and the technical realization of the visualization component as well as the business logic of the MAMAgotchi.

## Project Context

MAMAgotchi is a distributed tangible interaction system in which physical stations located in different rooms (the bedroom, kitchen, dance room, and playroom) register the completion of everyday tasks and translate them into a shared score. This score determines the mood and appearance of a virtual pet, the _MAMAgotchi_, displayed on a central screen. The individual station hardware and interaction concepts are described in the respective station groups' contributions; this article focuses exclusively on the infrastructure connecting these stations to a coherent, centrally maintained system state.

## System Architecture

The system is organized into three tiers: distributed **stations**, a central  M5Stack AtomS3R **controller** (M5Stack (2026).), and a **python server** running on a Raspberry Pi 5 (Raspberry Pi Foundation 2026) as shown in _Figure 1_. Stations communicate wirelessly with the controller, which in turn forwards all data to the server over a wired connection. The server hosts both the business logic that maintains the MAMAgotchi's state and the visualization presented to the user.

### Station-to-Controller Communication: ESP-NOW

Communication between individual stations and the AtomS3R controller is implemented using **ESP-NOW**, a connectionless, low-latency wireless protocol designed for ESP32-based microcontrollers (Espressif Systems, 2026). ESP-NOW was selected primarily because the station hardware was built on the M5Stack platform, for which ESP-NOW is natively supported as a connectionless communication protocol. This made it the most direct and low-effort choice for wireless communication between stations and the controller, without requiring an additional network stack or infrastructure such as a WiFi access point.

To reduce the integration effort for the station groups, we developed a dedicated **Arduino library** that abstracts the ESP-NOW protocol and is distributed together with example code and accompanying documentation. This allowed station groups to integrate their hardware without requiring in-depth knowledge of the underlying wireless communication stack (_see Figure 1_).

Station identification is handled automatically: upon transmitting its first message, a station's MAC address is registered by the controller, eliminating the need for manual configuration of station identities. All payloads are transmitted using a shared C++ structure, `tangible_dto`, comprising the following fields:

- Score (integer) — accumulated points recorded at the station
- Blocked (boolean) — current lock state of the station
- Station (enum) — station identifier
- MacAddress (uint8_t[6]) — hardware address of the originating station

### Controller-to-Server Communication: USB Serial

Establishing reliable communication between the AtomS3R controller and the Raspberry Pi server required more extensive evaluation than initially anticipated. Two alternative approaches were prototyped and subsequently discarded: a UDP-based server architecture, and a Python reimplementation of the ESP-NOW protocol ("ESPythoNOW"). Both approaches introduced either excessive implementation complexity or insufficient reliability for the scope of this project.

The final architecture instead relies on **USB serial communication**, transmitting a compressed JSON string between controller and server. Although the serial interface of ESP32-based controllers is conventionally reserved for debugging output, repurposing it for application-level communication proved to be the more robust and maintainable solution. Communication in both directions is **event-driven**: updates are transmitted only when the underlying state changes, minimizing communication overhead and latency. For the two-sided communication, USB serial communication was a reliable and stable choice.

The result of the various communication protocols and the data sent over the connections is the system architecture (_see Figure 2_). All communication steps were tested with the individual station groups.

## Server-Side Architecture

The Python server, running on the Raspberry Pi, is structured into three cooperating modules:

1. **Interface module**<br>
    Receives and parses incoming JSON messages relayed from the stations via the controller and sends it to the business logic module (_see step 1 and 2 in Figure 3). Receive state changes from business logic module and sends it to the stations and the visualization (_see step 13 and 4 in Figure 3).
2. **Business logic module**<br>
    Maintains the authoritative state of the MAMAgotchi and reconstructs its JSON representation whenever new station data is received (e.g., following the completion of a task at a station) or the state is updated over time. Sends the updated states to the interface module (_see step 3 in Figure 3)
3. **Visualization module**<br>
    A JavaScript-based front end that consumes the state produced by the business logic module and renders it accordingly (_see step 4 in top in Figure 3). Our contribution consisted of implementing and integrating the given design into a functioning front end driven by the live system state.

Communication between the business logic and visualization modules is unidirectional and is triggered exclusively by state changes, ensuring that the displayed representation remains consistent with the underlying system state without continuous polling.


### Business-Logic: Need-Based State Model

The business logic module is centered around a small set of needs: movement, energy, satiety, and play. Each of which is influenced by the four rooms of the apartment. Completing a task in a room increases its associated needs, while needs decay over time if left unattended. The aggregate of all needs determines the MAMAgotchi's overall mood, which is classified into three states: content (aggregate score above 66%), neutral, and discontented (aggregate score below 33%). The states are mapped to a corresponding visual representation.
In addition to this continuous mood state, individual needs can trigger a blocking mechanism: if a specific need falls below a critical threshold (e.g., 15%), the rooms associated with replenishing other needs are temporarily locked until the critical need is addressed. For instance, a critically low satiety value blocks the use of the sleep, dance, and play stations until the kitchen station has been used. This mechanism was designed to reflect the project's underlying metaphor of care work and is implemented as a finite-state model driving both the blocking logic and the corresponding visual feedback.

## Deployment and Autostart

To simplify deployment, the Raspberry Pi is configured to start the entire system automatically without manual intervention. Once connected to a power supply and a display, the server components are launched inside **Docker containers**, ensuring a consistent runtime environment. Immediately afterwards, Firefox is started automatically and directed to the local visualization endpoint, so that the MAMAgotchi interface is displayed on screen without requiring any further setup steps. This approach significantly reduces the effort needed to bring the system up in stressful contexts, where no tech-specialists may be present, e.g. in exhibitions.

If a controller needs to be replaced, all that's needed is the code. A connection to the main station can be established at any time with no additional effort and requires no extra setup.

## Visualization Implementation

While the conceptual design of the visualization, including the iconography, layout, and the MAMAgotchi character itself, was developed by a separate group within the project, our group was responsible for the technical implementation and integration of this design into the live system.

Over the course of the project, the visualization concept underwent several iterations, progressing from linear progress bars combined with a generic emoji-based facial expression to  a custom-illustrated MAMAgotchi character whose facial expression reflects the aggregate wellbeing state, framed by the four categorical progress rings (_see Figure 4_). Our group implemented the corresponding front end, connecting the visual assets and layout to the live state produced by the business logic module so that the displayed representation updated correctly whenever the underlying system state changed. 
The state representation exposed by our business logic module had to be defined in a way that was both technically consistent and directly usable by the visualization design.

## Limitations and Future Work

Several aspects of the current implementation remain open for further refinement.
The autostart configuration currently has to be set up manually once on each new Raspberry Pi, which would benefit from further automation should the hardware need to be replaced, e.g. due to a defect.
Beyond deployment, the system currently provides limited visual feedback, upon state changes and no dedicated visual indicator (e.g. desutarion) for blocked stations. Extending the central MAMAgotchi with haptic or acoustic feedback would be a natural next step.

## Conclusion

The interface group's contribution to MAMAgotchi was the "brain" of the system. A central state and data management layer connect distributed physical stations to a coherent virtual representation. On the communication side, an initially favored network-based approach (UDP, ESPythoNOW) was superseded by a simpler serial-based architecture, showing that implementation robustness, rather than architectural sophistication, was the decisive criterion for this project. On the logic side, a small set of decaying needs, combined with a threshold-based blocking mechanism, was sufficient to translate everyday tasks into a mood state that reflects the project's underlying metaphor of ongoing care work. Finally, the technical implementation and integration of the visualization ensured that this infrastructure remained visible and legible to users, while the containerized, autostarting deployment made the system robust enough to be run without technical supervision, e.g. at exhibitions.

## References

Espressif Systems (2026): *ESP-NOW Overview*. ESP-IDF Programming Guide. Retrieved July 6, 2026, from https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/network/esp_now.html

M5Stack (2026): *AtomS3R Documentation*. Retrieved July 6, 2026, from https://docs.m5stack.com/en/core/AtomS3R

Raspberry Pi Foundation (2026): *Raspberry Pi 5 Product Specification*. Retrieved July 6, 2026, from https://www.raspberrypi.com/products/raspberry-pi-5/

## Disclosure Statement

This text was prepared with the assistance of the AI language model Sonnet-5 (Claude), which was used for drafting and linguistic revision. The authors defined the content requirements and remain responsible for the final version.
