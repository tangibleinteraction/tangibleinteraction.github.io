---
layout: project
title: MAMAgotchi - Kitchen
authors: Emma Kirchner, Maja Ruprecht, Mohamad Kadabashi
description: The kitchen station is responsible for feeding the MAMAgotchi via playful interactions.
order: 4
teaser: final_2.jpeg
images:
- image: Figure 2&colon; CAD model
  url: modell.png
  space-above: 1
  space-below: 1
- image: Figure 3&colon; Building the model
  url: zusammenfügen.jpeg
  space-above: 1
  space-below: 1
- image: Figure 4&colon; Wires and sensors inside the model
  url: wiring.jpeg
  space-above: 1
  space-below: 1
- image: Figure 5&colon; Final prototype with food 
  url: final_1.jpeg
  space-above: 2
  space-below: 1
---

## Project Description

The kitchen station represents the food preparation area of our MAMAgotchi ecosystem. Whenever the pet becomes hungry, players can place food into the station. The system automatically detects the food, transports it via a conveyor belt (that has to be cranked), and delivers it into the basket. For the food wooden fruits (toys) are used (Figure 5).

To make the interaction more engaging, the station provides visual feedback throughout the entire feeding process. A LED indicates the current state of the basket, while animated GIFs on the display visualize the MAMAgotchi's mood depending on its hunger level. Once enough food has been delivered, the MAMAgotchi becomes full and reacts with a happy animation. If the player continues feeding after it is already full, it enters an "overfed" state accompanied by a special animation and sound effect. Additionally, when the basket is full, there is a popup saying you need to empty the basket to get "new" food. 

The result is a small interactive installation that combines physical interaction with digital feedback and encourages users to actively care for their virtual companion (Figure 1).

## Design Process and Modelling

The development started with several sketches exploring different layouts for the kitchen station. The main objectives were to keep the feeding process clearly visible while ensuring that all electronic components remained easily accessible for maintenance.

After defining the basic concept, the individual parts were modelled in CAD software (Figure 2). The housing was designed as a wooden construction consisting of the actual model (Figure 3), the 3D-printed belt, a basket, wooden fruit and sensors. 

Special attention was given to the conveyor mechanism. Multiple iterations were necessary to determine the optimal dimensions for the rollers, guides, and food basket. Clearances between moving parts had to be adjusted several times to ensure reliable transportation without objects getting stuck.

The modular design also simplified the integration of electronic components. Dedicated mounting points were included for the microcontroller, sensors, LED, display, and cable routing, resulting in a clean and maintainable assembly.

Throughout the development process, a prototype was produced and tested. 

## Technical Implementation

The kitchen station is controlled by an ESP32-based M5Stack-StampS3 development board, which coordinates all hardware components and manages the station's state.

The software follows a simple state-based workflow:

* **Hungry:** The MAMAgotchi requires food. The LED lights up green and the display shows the hunger animation.
* **Food on Conveyor:** Once food is detected, the conveyor needs to be cranked transporting it toward the basket while the LED changes to yellow.
* **Basket Full / Satisfied:** After enough food has been delivered, the LED turns red and the MAMAgotchi becomes satisfied, displaying a happy animation.
* **Overfed:** Additional feeding after the MAMAgotchi is full triggers a special overfeeding animation together with an audio notification.

Several hardware components work together during this process (Figure 4):

* A distance sensor (Time-of-Flight Distance Unit) detects food entering the conveyor.
* The conveyor belt needs to be operated by hand mimicking the feeding process.
* RGB LED provides immediate visual feedback about the current system state.
* A display (Tab5) plays animated GIFs representing the MAMAgotchi's emotions.
* A speaker outputs sound effects for important events such as overfeeding.
* A weight sensor (Unit Mini Scales) that weights the food coming into the basket.
* A StampS3 controller for coordination and communication with the central API.

The control software continuously monitors sensor values and updates the current state accordingly. Every state change immediately affects both the physical hardware and the graphical user interface, creating a synchronized user experience. The modular software architecture also makes it straightforward to extend the system with additional sensors, animations, or gameplay mechanics in future versions.

To connect all MAMAgotchi stations into one shared system, the kitchen communicates with a central API that synchronizes the MAMAgotchi's global state. The kitchen station is never blocked by other stations. Whenever the user successfully feeds the MAMAgotchi, the kitchen station sends the corresponding food value to the API. The backend updates the MAMAgotchi's overall status and returns the current global hunger-score. Feeding in the kitchen increases the score, while it gradually decreases over time or through activities performed at other stations, such as the playing-station. As a result, every station contributes to the same virtual pet, creating a connected and collaborative gameplay experience.


## Limitations and Future Work

Several aspects of the current prototype remain open for further refinement. In the current model the LED is lacking sometimes and probably needs to be exchanged in the future. Also the display currently needs to run on battery, because there is no room in the model for a charging cable. The mechanism to pull out the basket and put it back in needs to be enhanced as well, since you need to be aware of the weight sensor and place the basket over it. 
In the future the model could be painted. 

## Conclusion

The kitchen station combines mechanical engineering, electronics, and embedded software into one interactive experience. From the first CAD models to the final implementation, each development step focused on making the feeding process intuitive, reliable, and entertaining.

By combining physical interaction with animated feedback, the station transforms a simple feeding action into an engaging gameplay element that gives the MAMAgotchi a much stronger sense of personality and responsiveness.
