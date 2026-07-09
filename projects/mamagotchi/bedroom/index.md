---
layout: project
title: Bedroom
authors: Niklas Kothe, Johannes Horn, Torben Warnke, Enrico Hasenclever
description: A tangible bedroom station for the Mamagotchi system, where users create a calm sleeping situation through touch, light, covering and an alarm clock interaction.
teaser: bedroom-4-teaser.jpg
images:
  - image: Tinkercad bed draft
    url: bedroom-1-tinkercad-draft.png
    space-above: 1
    space-below: 1

  - image: First 3D draft of the bed structure
    url: bedroom-2-draft.png
    space-above: 1
    space-below: 1

  - image: First electronics prototype
    url: bedroom-3-first-prototype.jpg
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

  - image: Final prototype with integrated alarm clock
    url: bedroom-7-final-back.jpg
    space-above: 1
    space-below: 1

  - image: Wiring inside the final model
    url: bedroom-8-final-inner.jpg
    space-above: 1
    space-below: 1
---

## Project Description

In our room-based Mamagotchi system, different physical stations represent different needs of the character. Our group focused on the need of sleeping and translated it into a small bedroom scenario. Instead of selecting the sleep state through a screen or a simple menu, the user interacts with a physical environment and performs several caring actions.

The central idea is that sleeping should feel like a short ritual. The user can stroke the Mamagotchi, cover it with a blanket, adjust the nightlight and interact with sound. When these actions are completed, the Mamagotchi enters a sleep phase. After this phase, the sleep state has to be actively ended through an alarm clock interaction. Only then is the sleep task considered finished and reported back to the central station.

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
| Stroking    | Capacitive touch input with conductive material under a soft surface | Sound feedback                  |
| Covering    | Hall sensor and magnet to detect the blanket position                | Task recognition                |
| Nightlight  | Slider, rotary encoder and LED strip                                 | Adjustable brightness and color |
| Alarm clock | Button or physical alarm clock interaction                           | Sleep state is ended            |

The interactions are designed to support the feeling of caring for the Mamagotchi. Stroking represents comfort, covering prepares the character for sleep and the nightlight creates a calm atmosphere. The alarm clock has a different role: it does not help the Mamagotchi fall asleep, but ends the sleeping state afterwards.

This distinction became important during development. Initially, the system reported the sleep task as completed once all normal interactions were done. Later we changed the logic so that the central station only receives the completed sleep state after the alarm clock has been triggered. This better matches the actual concept of falling asleep and waking up again.

## Prototype Development

During the prototyping phase, we first tested the individual technical parts separately. The nightlight was developed with an addressable LED strip, a slider for brightness and a rotary encoder for color selection. A major focus was making the light stable and predictable. The slider values had to be smoothed, the maximum brightness had to be limited and LED updates were reduced so that the strip is only updated when something actually changes.

The stroking interaction was tested using the ESP32 touch pins and conductive material such as copper wire or foil. The idea is to integrate this input under a textile surface so that the user does not directly touch visible electronics, but instead interacts with a soft and more natural surface.

For covering, a Hall sensor and magnet are used to detect whether the blanket has reached the intended position. This allows the system to recognize the action without requiring a visible switch. The covering interaction therefore stays close to the physical metaphor of putting something to bed.

Sound feedback is handled through a DFPlayer Mini. Different sounds are used for interaction feedback, completion feedback and the sleep or alarm phase. This helps make the state of the prototype understandable without needing a screen.

## Current State and Outlook

At the current stage, the electronic prototype is mostly implemented and has been integrated into a first simplified physical model. The nightlight can be controlled through a slider and rotary encoder, the blocked state from the central station is shown through a weak red pulsing light and the local sequence from interaction completion to sleep phase, alarm phase and reset is implemented.

The first model integration helped to make the idea more understandable. As separate components, the electronics mainly show technical functionality. Inside the bed or box-like structure, they become part of a recognizable bedroom situation and make the interaction feel less abstract.

For the exhibition, the focus is on making this integration more stable and understandable. Wiring, sensor placement and the alarm clock interaction still need refinement. The alarm clock should feel like a meaningful part of the bedroom rather than just a technical button.

The project also showed that combining simple interactions requires careful state logic. Questions such as when a task is completed, when the central station is notified and how a blocked state is communicated became important during implementation. In the future, the prototype could be expanded with cleaner integration, softer materials and more expressive sleep states such as tired, calm, asleep or disturbed.
