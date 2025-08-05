---
layout: project
title: SNOLD
authors: Gabriel Pechstein, Robert Kürzel
description: SNOLD is an interactive, sensor-equipped toy designed to answer the questions that naturally arise during active play; How high can I throw it? How fast can I run? How far can I jump?
teaser: teaser.png
images:
  - image: Playable Object
    url: snold-1.png
  - image: Playable Object rendered
    url: snold-2.png
  - image: Sketches
    url: snold-3.JPG
  - image: Sketches
    url: snold-4.JPG
  - image: Sketches
    url: snold-5.JPG
  - image: Sketches
    url: snold-6.JPG
  - image: Logos Interface
    url: snold-7.png
  - image: Object from inside
    url: snold-8.jpeg
  - image: Workflow photo
    url: snold-9.JPG
  - image: Workflow photo
    url: snold-10.JPG
  - image: Workflow photo
    url: snold-11.JPG
  - image: Electornics
    url: snold-12.JPG
---

## 1 Introduction

In a world where children are increasingly surrounded by digital technology, the fundamental principles of the physical world—such as speed, height, and acceleration—can feel abstract and disconnected from their daily lives. Our project, SNOLD, addresses this gap by transforming these physics concepts into a tangible and exciting play experience. The core idea is rooted in Experimental Learning: empowering children to learn by doing, exploring, and seeing the immediate results of their own physical actions.SNOLD is an interactive, sensor-equipped toy designed to answer the questions that naturally arise during active play: *How high can I throw it? How fast can I run? How far can I jump?* Instead of just playing, children become young scientists, measuring their world in a fun and intuitive way. By embedding sensors within a durable and playful object, we translate complex data into simple, engaging feedback, fostering curiosity and a deeper, more intuitive understanding of the physical world.

## 2 Concept & Design

The design of SNOLD was driven by the need to create an object that is not only technologically functional but also safe, inviting, and robust enough for active play.

**Form and Ergonomics**: Our design exploration focused on organic, soft, and approachable forms, moving away from hard-edged electronics. Early sketches explored various "blob," "UFO," and rounded-cube shapes, all designed to be comfortably held, thrown, and caught by small hands. The final form is ergonomic and free of sharp corners, ensuring safety during vigorous play.

**User Interface (UI) and Experience (UX)**: The user experience is designed to be as simple as possible. Upon activation, the child is presented with a clear choice: engage in a free-form "Measure" mode or accept a "Challenge." Challenges like "Throw as high as you can!" or "Jump as high as you can!" guide the play and provide clear goals. Based on user testing, we prioritized a graphical interface over text. Simple, bold icons represent actions like running, jumping, or throwing. This visual language is more accessible to our target age group (4-8 years), who may not be strong readers. Feedback is delivered instantly on the screen through animations and large numbers, reinforced with sounds and lights to create a rewarding experience.

**Materials and Construction**: Durability and safety were paramount in the construction of SNOLD. The internal architecture features a multi-layered system designed for resilience. At its core, a rigid, 3D-printed case houses and shields the sensitive electronics. This inner case is then encased in a shock-absorbing cushioning layer, made from a soft material like EVA or polyurethane foam, which dissipates the energy from impacts during play. The entire assembly is sealed within a durable, tear-resistant, and waterproof outer skin, likely made of silicone, providing a pleasant tactile feel while protecting the internal components from the elements.


## 3 Technical Implementation

SNOLD's ability to measure the world is powered by a carefully selected suite of modern, compact electronics. At its heart is a versatile microcontroller, such as an ESP32, which serves as the brain of the device, processing sensor data and driving the display. The primary measurement tool is a 6-DoF sensor suite, combining an accelerometer to measure G-forces for detecting throws and impacts, and a gyroscope to track rotation. A barometer was also considered for its ability to accurately measure altitude changes, making it ideal for calculating the height of a throw or jump.To ensure durability, the device is powered by a compact, rechargeable LiPo battery, with wireless charging explored as a solution to eliminate physical ports that could compromise waterproofing. User interaction is handled through robust, waterproof buttons integrated directly into the soft outer shell for reliable operation in any environment. The software logic then translates this raw sensor data into meaningful metrics, such as calculating the maximum height of a throw from flight time, and displays the result instantly to the user.

Our project is built around an ESP32 microcontroller that creates an interactive device capable of detecting and measuring thrown objects. The system combines a high-precision barometric sensor with a vibrant color OLED display to deliver a smooth, responsive user experience. The visual interface is managed by a screen management system that acts like a controller for your 128x128 pixel color display. Six different animated screens cycle automatically every five seconds, showing activities like walking, playing, throwing, and rocket animations. Each screen displays pairs of images that alternate rapidly to create simple animations, similar to flipbook-style movement. When something important happens, like detecting a throw, the system immediately switches to display measurement results, interrupting the normal cycling sequence.Since microcontrollers have very limited memory, your system uses a clever image conversion process that transforms regular PNG files into a specialized RGB565 format. Python scripts automatically handle this conversion, taking images from your asset folder and generating optimized data that the ESP32 can display quickly. This preprocessing approach means the device doesn't waste time converting images during operation, and the RGB565 format provides an optimal balance between image quality and memory usage. The throw detection system uses a BMP388 barometric pressure sensor that reads altitude changes ten times per second with remarkable precision. The detection algorithm operates through three phases: it monitors for rapid upward movement exceeding 2 meters per second, tracks the maximum altitude reached during flight, and determines when the device has peaked and begun descent. Once a throw is complete, it calculates the total height by subtracting the starting altitude from the peak altitude, displaying results in centimeters for shorter throws and meters for longer ones. The entire system is optimized for performance, running the ESP32 at maximum 240MHz speed.

The code is publicly available under https://github.com/royalcaster/snold.


## 4 Evaluation & User Testing

To validate our concept, we conducted user tests with children in our target age range to assess usability, interface clarity, and overall engagement. The testing sessions provided invaluable insights into how children interact with the device. We observed a high level of engagement, as children were immediately drawn to the physical activity and playfulness of a "ball"-like object. The also tests confirmed our hypothesis that young children respond far better to graphical icons than to text. Furthermore, we learned that standard units of measurement are too abstract for this age group; relatable comparisons are more effective. The physical form factor also proved critical, as we needed to find the right balance between being easy to throw and easy to catch.

**Conclusion and Future Directions**: The user testing was a success, validating the core concept of SNOLD as an engaging tool for experimental learning. The feedback gathered will directly inform the next iteration of the design. Future development will focus on implementing more "playable" modes, refining the user interface with even clearer graphics, translating measurements into more relatable, child-friendly comparisons, and optimizing the physical form factor for the best possible play experience.
