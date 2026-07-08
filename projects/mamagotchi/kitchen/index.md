---
layout: project
title: MAMAgotchi - Kitchen
authors: Emma Kirchner, Maja Ruprecht, Mohamad Kadabashi
description: The kitchen station is responsible for feeding the MAMAgotchi via playful interactions.
teaser: 
images:
---

## Project Description

The kitchen station represents the food preparation area of our MAMAgotchi ecosystem. Whenever the pet becomes hungry, players can place food into the station. The system automatically detects the food, transports it via a conveyor belt (that has to be cranked), and delivers it into the basket.

To make the interaction more engaging, the station provides visual feedback throughout the entire feeding process. A LED indicates the current state of the basket, while animated GIFs on the display visualize the MAMAgotchi's mood depending on its hunger level. Once enough food has been delivered, the MAMAgotchi becomes full and reacts with a happy animation. If the player continues feeding after the basket is already full, it enters an "overfed" state accompanied by a special animation and sound effect.

The result is a small interactive installation that combines physical interaction with digital feedback and encourages users to actively care for their virtual companion.

## Design Process and Modelling

The development started with several sketches exploring different layouts for the kitchen station. The main objectives were to keep the feeding process clearly visible while ensuring that all electronic components remained easily accessible for maintenance.

After defining the basic concept, the individual parts were modelled in CAD software. The housing was designed as a wooden construction consisting of the actual model, the 3D-printed belt, a basket, wooden fruit and sensors. 

Special attention was given to the conveyor mechanism. Multiple iterations were necessary to determine the optimal dimensions for the rollers, guides, and food basket. Clearances between moving parts had to be adjusted several times to ensure reliable transportation without objects getting stuck.

The modular design also simplified the integration of electronic components. Dedicated mounting points were included for the microcontroller, sensors, LED, display, and cable routing, resulting in a clean and maintainable assembly.

Throughout the development process, a prototype was produced and tested. 

## Technical Implementation

The kitchen station is controlled by an ESP32-based M5Stack development board, which coordinates all hardware components and manages the station's state.

The software follows a simple state-based workflow:

* **Hungry:** The MAMAgotchi requires food. The LED lights up green and the display shows the hunger animation.
* **Food on Conveyor:** Once food is detected, the conveyor needs to be cranked transporting it toward the basket while the LED changes to yellow.
* **Basket Full / Satisfied:** After enough food has been delivered, the LED turns red and the MAMAgotchi becomes satisfied, displaying a happy animation.
* **Overfed:** Additional feeding after the basket is full triggers a special overfeeding animation together with an audio notification.

Several hardware components work together during this process:

* A distance sensor detects food entering the conveyor.
* The conveyor belt needs to be operated by end mimicking the feeding process.
* RGB LED provides immediate visual feedback about the current system state.
* A display plays animated GIFs representing the MAMAgotchi's emotions.
* A speaker outputs sound effects for important events such as overfeeding.

The control software continuously monitors sensor values and updates the current state accordingly. Every state change immediately affects both the physical hardware and the graphical user interface, creating a synchronized user experience. The modular software architecture also makes it straightforward to extend the system with additional sensors, animations, or gameplay mechanics in future versions.

## Conclusion

The kitchen station combines mechanical engineering, electronics, and embedded software into one interactive experience. From the first CAD models to the final implementation, each development step focused on making the feeding process intuitive, reliable, and entertaining.

By combining physical interaction with animated feedback, the station transforms a simple feeding action into an engaging gameplay element that gives the MAMAgotchi a much stronger sense of personality and responsiveness.
