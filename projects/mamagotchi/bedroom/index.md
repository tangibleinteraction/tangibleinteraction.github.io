---
layout: project
title: Bedroom
authors: Niklas Kothe, Johannes Horn, Torben Warnke, Enrico Hasenclever
description: A tangible bedroom station for the Mamagotchi system, where users create a calm sleeping situation through touch, light, covering and an alarm clock interaction.
teaser: bedroom-x-teaser.jpg
images:
  - image: Tinkercad bed draft
    url: bedroom-1-tinkercad-draft.png
    space-above: 1
    space-below: 1

  - image: Component & Wiring Overview
    url: bedroom-2-component-overview.png
    space-above: 1
    space-below: 1

  - image: First electronics prototype
    url: bedroom-3-first-prototype.jpg
    space-above: 1
    space-below: 1

  - image: Addition of the alarm clock
    url: bedroom-4-alarm-model.jpg
    space-above: 1
    space-below: 1
    
  - image: Second prototype with model integration
    url: bedroom-5-second-prototype.jpg
    space-above: 1
    space-below: 1

  - image: Final prototype front view
    url: bedroom-6-final-front.jpg
    space-above: 1
    space-below: 1

  - image: Wiring inside the final model
    url: bedroom-8-final-inner.jpg
    space-above: 1
    space-below: 1
---

## Project Description

In our room-based Mamagotchi system, different physical stations represent different needs of the character. Our group focused on the need of sleeping and translated it into a small bedroom scenario. Instead of selecting the sleep state through a screen or a simple menu, the user interacts with a physical environment and performs several caring actions.

The central idea is that sleeping should feel like a short ritual. The user can caress the Mamagotchi, cover it with a blanket, adjust the nightlight and interact with sound. When these actions are completed, the Mamagotchi enters a sleep phase. After this phase, the sleep state has to be actively ended through an alarm clock interaction. Only then is the sleep task considered finished and reported back to the central station.

This turns the Bedroom into more than a technical input station. It becomes a small narrative environment in which calmness, care and feedback are combined. The interaction should be understandable for visitors without much explanation, while still showing clear responses through light, sound and state changes.

## Concept

The concept is based on a simplified bedroom scene. The object is roughly planned in the size of a shoebox and uses a bed or box-like structure as its main physical frame. This model gives the interaction a clear context: users immediately understand that the Mamagotchi is supposed to rest, be comforted and later be woken up again.

The interaction flow follows a simple sequence:

1. The user completes several bedroom-related interactions.
2. The Mamagotchi enters a sleep phase.
3. The alarm clock ends the sleep state.
4. The station sends the completed sleep state to the central system.

The goal was not to create a fully realistic bedroom. Instead, we wanted to build a clear and playful representation of sleeping. The model should be simple enough to be understood during the exhibition, but still open enough for further development in terms of materials, form and interaction quality.

## Interaction Design

The Bedroom combines several small tangible interactions:

| Interaction | Implementation                                                       | Feedback                        |
| ----------- | -------------------------------------------------------------------- | ------------------------------- |
| Caressing   | Capacitive touch input with conductive material under a soft surface | Sound feedback                  |
| Covering    | Hall sensor and magnet to detect the blanket position                | Task recognition                |
| Nightlight  | Slider, rotary encoder and LED strip                                 | Adjustable brightness and color |
| Alarm clock | Servo-based alarm clock movement and button interaction              | Sleep state is ended            |

The interactions are designed to support the feeling of caring for the Mamagotchi. Caressing represents comfort, covering prepares the character for sleep and the nightlight creates a calm atmosphere. The alarm clock has a different role: it does not help the Mamagotchi fall asleep, but ends the sleeping state afterwards.

This distinction became important during development. Initially, the system reported the sleep task as completed once all normal interactions were done. Later we changed the logic so that the central station only receives the completed sleep state after the alarm clock has been triggered. This better matches the actual concept of falling asleep and waking up again.

## Technical Setup and Bill of Materials

The implementation is based on an [M5Stack StampS3](https://docs.m5stack.com/en/core/StampS3) microcontroller. The firmware, pin configuration and interaction logic are available in the [**project repository on GitHub**](https://github.com/niklaskothe/TangibleInteractionMamaGotchiSchlafzimmer).

The code controls the local bedroom interactions, handles light and sound feedback and communicates the completed sleep state back to the central Mamagotchi station.

| Component                                 | Purpose in the prototype                                                           |
| ----------------------------------------- | ---------------------------------------------------------------------------------- |
| M5Stack StampS3                           | Main microcontroller of the bedroom station                                        |
| Capacitive touch input / ESP32 touch pins | Detects the caressing interaction through conductive material under a soft surface |
| Hall sensor and magnet                    | Detects whether the blanket has reached the intended position                      |
| Addressable LED strip                     | Creates the adjustable nightlight                                                  |
| Slider                                    | Controls the brightness of the nightlight                                          |
| Rotary encoder                            | Controls the color of the nightlight                                               |
| DFPlayer Mini with microSD card           | Plays sound feedback and sleep / alarm sounds                                      |
| Speaker                                   | Outputs the audio feedback                                                         |
| Servo motor                               | Moves the alarm clock mechanism                                                    |
| Breadboard power supply adapter           | Provides additional power for the electronic components                            |

The software uses the [DFRobotDFPlayerMini library](https://github.com/DFRobot/DFRobotDFPlayerMini) for audio playback, the [Adafruit NeoPixel library](https://github.com/adafruit/Adafruit_NeoPixel) for controlling the LED strip and the [ESP32Servo library](https://github.com/madhephaestus/ESP32Servo) for the servo-based alarm clock movement. The rotary encoder is read through I2C, while the slider, Hall sensor, touch inputs and buttons are connected directly to the microcontroller pins.

During development, the technical parts were first tested separately and later integrated into the physical bedroom model. The nightlight required stable slider values, limited brightness and controlled LED updates. The caressing interaction was tested with conductive material under a soft surface, while the covering interaction used a Hall sensor and magnet to stay close to the metaphor of putting the Mamagotchi to bed.

The simplified component and wiring overview shows the main inputs and outputs of the system. It is not a full electrical schematic, but it helps explain how the different components are connected to the bedroom station and how they support the interaction sequence.

## Current State and Outlook

At the current stage, the prototype is implemented and integrated into a simplified physical bedroom model. The nightlight can be controlled through a slider and rotary encoder, while the local interaction sequence leads from caressing, covering and light adjustment into the sleep phase. After that, the alarm clock interaction ends the sleep state and reports completion back to the central station.

The model integration helped to make the idea more understandable. As separate components, the electronics mainly show technical functionality. Inside the bed-like structure, they become part of a recognizable bedroom situation and make the interaction feel less abstract.

The project also showed that combining several simple interactions requires careful state logic. Questions such as when a task is completed, when the central station is notified and how a blocked state is communicated became important during implementation. In a future iteration, the prototype could be refined with cleaner wiring, softer materials and more expressive sleep states such as tired, calm, asleep or disturbed.

## Disclosure Statement

This text was prepared with the assistance of the AI language model ChatGPT, GPT-5.5 Thinking. The model was used for structuring, drafting and linguistic revision based on material provided by the authors. The authors selected the topic, reviewed the content and remain responsible for the final version.