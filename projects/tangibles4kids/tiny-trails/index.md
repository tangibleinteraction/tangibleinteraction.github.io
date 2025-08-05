---
layout: project
title: TinyTrails
authors: Lara Loreen Balkanski, Lea Sophie Rochner
description: TinyTrails is a tangible learning toy for children aged 4 and up that teaches basic programming concepts through storytelling, music, and exploration on an interactive play carpet.
teaser: teaser.jpg
images:
  - image: Cubetto Testing
    url: tiny-trails-1.jpg
    space-above: 80
  - image: Participatory Design
    url: tiny-trails-2.jpeg
    space-above: 110
  - image: Input Board 1
    url: tiny-trails-3.jpeg
  - image: Input Board 2
    url: tiny-trails-4.jpeg
  - image: Concepts
    url: tiny-trails-5.jpeg
  - image: Fox Robot
    url: tiny-trails-6.jpeg
  - image: Adventure Mat Concept
    url: tiny-trails-7.jpeg
  - image: Adventure Mat Design
    url: tiny-trails-8.jpeg
  - image: Branding
    url: tiny-trails-9.jpeg
  - image: Installation
    url: tiny-trails-10.jpeg
  - image: Circuit of the Arduino Robot Set
    url: tiny-trails-11.jpeg
  - image: First circuit with powerbank
    url: tiny-trails-12.jpeg
  - image: First resistor control board prototype
    url: tiny-trails-13.jpeg
  - image: Control board wiring
    url: tiny-trails-14.jpeg
  - image: Further Control board wiring
    url: tiny-trails-15.jpeg
  - image: Circuit extension for the audio functionality
    url: tiny-trails-16.jpeg
  - image: Robot with all components
    url: tiny-trails-17.jpeg
  - image: Chosen fields for audio functionality
    url: tiny-trails-18.jpeg
  - image: Workaround for user testing
    url: tiny-trails-19.jpeg
---

## Concept

TinyTrails consists of three main components:

1. A large illustrated carpet divided into a 7×7 grid, each field representing a tiny scene with a unique story or song.
2. A tangible input board with color-coded blocks, where each block represents a specific action such as “move forward”, “play music”, or “tell a story”.
3. A soft, programmable fox that executes the commands input via the board and interacts with the carpet.

Children arrange the blocks to create a simple “program” that the fox follows. As the fox explores different fields on the carpet, it triggers sound responses, like stories and music, depending on the programmed route. This playful interaction fosters an understanding of sequences, planning, and cause-effect relationships, while also improving fine motor skills.

## Design Process

The goal behind TinyTrails was to create an inclusive, tangible way for young children to explore the basic logic of programming — without screens, without a technical or “nerdy” look, and without excluding anyone. We wanted the experience to feel playful, cozy and approachable for all kids.

Exploring Existing Tools
As a starting point, we observed and tested the existing tangible coding toy Cubetto in a local kindergarten. The hands-on testing helped us understand both the strengths (simplicity, clarity) and limitations (lack of feedback, limited storytelling) of similar products.

### Participatory Design

To better understand what engages children visually and emotionally, we worked directly with kids in the kindergarten. Through drawing and crafting sessions, we gathered input on what kinds of animals, themes, and environments they love. This helped shape the tone, colors and storytelling of TinyTrails.

We noticed a strong interest in nature — many children drew trees, forests, and animals. One child even drew a little fox, which eventually became the central character of our game.

### The Input Board

We developed a custom input board with a clean, child-friendly design. Children place colorful, organically shaped coding blocks into the slots – each one representing a different command. The symbols were designed to be intuitive and playful: move forward, go backward, turn left, turn right, play a story, or play a song.

### The Fox Robot

At the heart of TinyTrails is a small robotic fox, lovingly sewn from felt and fabric. We first created a detailed sewing pattern and prototype. The fox is mounted on a small motorized base using a flexible band. This allows it to be swapped out easily — making space for more characters and animals in future versions.

### The Adventure Mat: Interactive Carpet

The large textile play mat was designed to resemble a vibrant nature scene. We first mapped out different zones — forest, meadow, pond, music, picnic area, and magical world — to inspire varied interactions.
Using the AI tool Sora and image editing in Photoshop, we created 49 illustrated scenes, later assembled into a 7×7 grid. Each tile on the map hides a little surprise: a story or a song, waiting to be discovered.
In future versions, we envision expanding TinyTrails to include themed worlds like space, underwater or city environments. We also see great potential in working with illustrators who bring their unique artistic voice to each version of the mat.

### Branding

The visual identity of TinyTrails is defined by soft pastel colors, rounded organic shapes, and a warm, inviting look. It intentionally avoids typical “tech” aesthetics to create a more inclusive and emotionally accessible experience for all children.

## User Testing

We conducted user testing by inviting children from a local kindergarten to our university. Since the robot’s driving function wasn’t fully working yet, we used a Wizard-of-Oz setup to simulate the interaction. The children were highly engaged:
– They asked for longer stories
– The input board was observed to be very intuitive
– The large illustrated playmat kept their attention due to its rich variety
Some children were confused or a bit disappointed that the robot didn’t move on its own. Once the movement feature is functional, another round of user testing would definitely be valuable.

## Reflection

The design process behind TinyTrails was shaped by constant iteration, playful prototyping, and close collaboration with children. The focus was always on creating a product that invites discovery, imagination and learning — all through tangible interaction and storytelling.

## Technological realization

The initial step in the TinyTrails project was to establish a stable Bluetooth connection between the tangible input board and the programmable fox robot. The development began using a Keyestudio Smart Small Turtle Robot, which is based on an Arduino microcontroller. However, it proved difficult to create a reliable Bluetooth connection between the ESP32 microcontroller on the input board and the XBee-Bluetooth module used in the Arduino-based robot.

To overcome the limitation, the decision was made to switch to a system where both the tangible input board and the programmable robot use ESP32 microcontroller, as Bluetooth communication between two ESP32s is significantly more stable.

### Programmable robot

To make an own robot an Arduino Robot Set was modified for the purpose of this project.

The TinyTrails robot is powered by a ESP32 Microcontroller, which offers built-in Bluetooth functionalities. The ESP32 is connected to a powerbank for stable and mobile power supply. The robot’s two DC motors are driven by an L298N motor driver module, which receives power separately from two parallel-connected 3.7V 2000mAh Li-Po batteries. A switch is integrated between the batteries and the motor driver, allowing convenient control of the motor power circuit.

### Control board

The TinyTrails robot is controlled through a control board featuring an ESP32-based microcontroller. This board interprets analog voltage values resulting from different resistors inserted into the circuit.

Each physical command block contains a fixed resistor, which, when connected, causes a specific voltage drop across a reference circuit. The ESP microcontroller reads this analog voltage and translates it into a corresponding command. Each voltage range is mapped to a control character, which is then transmitted via Bluetooth to the robot’s ESP32-based control unit.

| Command | Resistor value | Voltage range | Control character | Play music |
|---|---|---|---|---|---|---|
| 10 Ω | 10 - 130 mV | M |
| Forward | 4.7 Ω | 150 - 230 mV | F |
| Backward | 10 kΩ | 300 - 450 mV | B |
| Turn Left | 22 kΩ | 750 - 1050 mV | L |
| Turn Right | 33 kΩ | 1600 - 2200 mV | R |
| Play story | 10 Ω | 2300 - 3000 mV | G |

### Audio Functionality

The audio functionality allows the robot to play back songs and stories when a child places the corresponding tangible input blocks "Music" and "Story" onto the control board.

Further components were added to the circuit:

- RFID Module (RC522)
- DFPlayer Mini
- Audio Amplifier and Speaker
- 1kΩ Resistor

The robot is able to recognize specific input blocks that correspond to either playing music or telling a story. When the child selects one of these blocks, the control board sends the corresponding command ('M' for music, 'G' for story) via Bluetooth to the robot. Upon receiving this command, the robot plays a matching audio file.

For this project 11 interactive fields were implemented. Each of the 11 interactive fields on the carpet is associated with an RFID tag, and every tag is linked to two specific audio files, one song and one story.

| field | RFID-Tag | file structure for story audio files | file structure for music audio files |
|---|---|---|---|
| A2 | UID: B9:46:0C:B3 UID String: b946cb3 Card type: MIFARE 1KB | MP3/01/002.mp3 | MP3/11/002.mp3 |
| A5 | UID: 19:55:7C:9C UID String: 19557c9c Card type: MIFARE 1KB | MP3/01/005.mp3 | MP3/11/005.mp3 |
| B7 | UID: 89:21:73:9C UID String: 8921739c Card type: MIFARE 1KB | MP3/02/007.mp3 | MP3/12/007.mp3 |
| C1 | UID: 69:5F:8A:9D UID String: 695f8a9d Card type: MIFARE 1KB | MP3/03/001.mp3 | MP3/13/001.mp3 |
| C4 | UID: B3:2A:D2:03 UID String: b32ad23 Card type: MIFARE 1KB | MP3/03/004.mp3 | MP3/13/004.mp3 |
| D2 | UID: 63:2F:32:0B UID String: 632f32b Card type: MIFARE 1KB | MP3/04/002.mp3 | MP3/14/002.mp3 |
| D4 | UID: 29:D1:B4:B2 UID String: 29d1b4b2 Card type: MIFARE 1KB | MP3/04/004.mp3 | MP3/14/004.mp3 |
| D6 | UID: 66:BB:1A:29 UID String: 66bb1a29 Card type: MIFARE 1KB | MP3/04/006.mp3 | MP3/14/006.mp3 |
| E7 | UID: F7:83:F3:A6 UID String: f783f3a6 Card type: MIFARE 1KB | MP3/05/007.mp3 | MP3/15/007.mp3 |
| F1 | UID: B3:88:E4:02 UID String: b388e42 Card type: MIFARE 1KB | MP3/06/001.mp3 | MP3/15/001.mp3 |
| F3 | UID: D9:8D:8B:9D UID String: d98d8b9d Card type: MIFARE 1KB | MP3/06/003.mp3 | MP3/15/003.mp3 |
| G6 | UID: 77:D9:73:B5 UID String: 77d973b5 Card type: MIFARE 1KB | MP3/07/006.mp3 | MP3/16/006.mp3 |

During the implementation of the audio playback functionality, it was discovered that enabling Bluetooth communication on the ESP32 interfered with the operation of the RFID module. The SPI-based RFID reader failed to function reliably when the ESP32’s Bluetooth was active. To ensure a smooth testing experience, a workaround was introduced: an external Bluetooth audio module was connected to the speaker system. This allowed audio files to be played wirelessly from a laptop or smartphone during user testing, bypassing the internal playback system temporarily.

During the implementation of the audio playback functionality, it was discovered that enabling Bluetooth communication on the ESP32 interfered with the operation of the RFID module. The SPI-based RFID reader failed to function reliably when the ESP32’s Bluetooth was active. To ensure a smooth testing experience, a workaround was introduced: an external Bluetooth audio module was connected to the speaker system. This allowed audio files to be played wirelessly from a laptop or smartphone during user testing, bypassing the internal playback system temporarily.

## User Testing and Evaluation

During user testing with children, the system proved to be engaging and easy to use overall. However, two notable insights emerged:

1. **Directional Understanding:** During the first time interacting with TinyTrails the children had difficulties interpreting the directional blocks (left, right, forward, etc.). The arrow-based symbols were not always intuitive for them, leading to misunderstandings in programming the movement sequence.
2. **Content Preferences:** Many children expressed a strong interest in the story elements of the experience. They wished for longer and more immersive stories to be played when the fox reached certain tiles, indicating the potential for a deeper narrative component in future iterations.

These findings suggest opportunities for refinement in both the interaction design and content.
