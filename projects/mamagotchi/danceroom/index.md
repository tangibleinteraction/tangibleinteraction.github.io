---
layout: project
title: Burning Feet
authors: Frederic Schneider, Laura Richter, Josina Andrees, Marco Rudolph
description: How can a museum installation invite children to move, play together and care for a digital creature without relying on a screen? Burning Feet is an interactive dance station that turns music, movement and collaboration into a playful care activity for MAMAgotchi.
teaser: setup.png
order: 7
images:
  - image: Construct
    url: construct.jpg
    space-above: 1
    space-below: 1
---

## Burning Feet – A Tangible Dance Game for MAMAgotchi

### An interactive dance station for movement, play and collaboration

How can a museum installation invite children to move, play together and care for a digital creature without relying on a screen? This question became the starting point for Burning Feet, an interactive dance station developed as part of the MAMAgotchi project.

Burning Feet was inspired by the nostalgic rhythm game Dance Dance Revolution, where players use their whole body to interact with the game by stepping on physical plates at the right moment. For MAMAgotchi, this idea was adapted into a tangible and collaborative museum experience. Instead of focusing on a single player in front of a screen, Burning Feet invites visitors to move together, react to light signals and coordinate their actions as a group.

Within the MAMAgotchi system, the dance station addresses the creature’s need for play and movement. Similar to a child that wants attention and activity, the MAMAgotchi can become happier when visitors play with it. At the same time, dancing also consumes energy, connecting the station to the larger care system of the project.

### What is Burning Feet?

Burning Feet consists of six physical step plates arranged in three pairs around a central unit. The setup is designed for collaborative play: ideally, three people play together, but up to six visitors can participate at the same time.

The interaction is intentionally simple. A song is selected, a countdown starts and the players follow visual cues. LEDs indicate which plate will be needed next and when an input is expected. The visitors then move their feet over the correct plates at the right moment.

The goal is not only to hit the right notes, but to create a shared moment of movement. Players have to pay attention to the rhythm, to the light signals and to each other. This makes Burning Feet both a dance game and a small exercise in coordination and collaboration.

The station is generally interesting for all visitors, but it was especially designed with children aged 7 to 11 in mind. Therefore, the interaction should be playful, intuitive and easy to understand through trying rather than through long explanations.

## Concept and Interaction

The interaction starts with the selection of a song. For this, we designed an input device that is meant to resemble a CD player. Visitors choose a physical medium containing an NFC chip. The NFC reader recognises the selected medium and sends its ID to the ESP32-S3 microcontroller.

The ESP maps the ID to the corresponding song and interaction sequence. In the current prototype, this connection is realised by cable, as this was the most reliable and manageable solution during development. A wireless version would be a possible improvement for a future iteration.

After the song has been selected, the station starts with a countdown. The LEDs then guide the players through the rhythm. As the expected input gets closer, more lights turn on. During the perfect input window, the corresponding plate lights up fully. After an input, visual feedback can show whether the interaction was successful or not, for example through green light for a positive input and red light for a missed or imprecise one.

The interaction is designed to be mostly self-explanatory. Instead of long instructions, visitors should understand the basic idea by trying it out. The familiar elements of music selection, rhythm, light and movement help make the experience accessible, especially for children.

## Tangible Interaction Instead of Screens

A central design decision was to avoid using a screen as the main interface. Burning Feet focuses on tangible interaction: physical step plates, visible light signals and a recognisable input device.

This makes the interaction direct and bodily. The visitors do not control the game through a digital menu, but through their own movement. Their feet become the input, and the room itself becomes the interface.

This screen-free approach supports the playful character of the station. It keeps the focus on physical activity, group dynamics and immediate feedback. For the context of MAMAgotchi, this was especially important because the project aims to translate care, attention and everyday responsibilities into accessible spatial experiences.

## Technical Setup

Each of the six step plates contains one ToF sensor. The sensor continuously measures the distance to objects within its range. When a user moves a foot over the plate, the measured distance changes and an input is detected.

This input is sent to the ESP32-S3. The microcontroller compares the input with the expected timing of the current song. If the input happens within the ideal time window, it is evaluated as more precise. If the reaction is too early or too late, the result becomes less accurate.

The current printed version of the plates measures approximately 10 × 6.66 × 1.4 cm. The plates are arranged in a triangular layout around a central point. From this centre, LED strips lead to the individual plates and provide visual guidance for the game.

The step plates were developed together with the model-building group. Their work included the form of the plates, material considerations, the integration of sensors and LEDs inside the plates and the planning of the 3D print. Additional support was given for the design and printing of the current input device.

## Development

During the development process, different versions of the plates were considered. The current 3D-printed version is relatively small and served as the main prototype. A larger version was also planned and was originally meant to replace the smaller prototype, but it had to be discarded for the time being because of the amount of material required.

Another planned version would have included more advanced running lights directly connected to the plates. These lights would have made it easier to anticipate upcoming notes. However, this iteration could not be realised within the project due to communication issues and unclear responsibilities between the subgroups.

The project also involved collaboration with the interface group. Their library was used, and successful tests were carried out to ensure that data could be transmitted between the components. These tests were important for connecting Burning Feet to the larger MAMAgotchi system.

One of the biggest challenges was finding a realistic way to implement the concept with the available materials and technical knowledge and time. The project combined spatial design, electronics, programming and physical prototyping. Because the responsibilities between the different groups were not always clear, some parts of the concept had to be simplified.

## Challenges and Learnings

The development showed how important early prototyping and clear responsibilities are for an interactive installation. Since the project depended on several technical and physical components, it would have been helpful to have more working prototypes earlier in the process. This would have allowed more group members to test the technology directly and identify problems sooner.

The available tools and materials also influenced the final design. While pressure-based plates might have provided a more reliable input for a dance game, ToF sensors were used for the prototype because they were available and could detect movement without requiring a mechanical button.

At the same time, this limitation also shaped the interaction in an interesting way. Users do not need to press a button, but only move their foot over the plate. This keeps the interaction light and responsive, although further testing would be needed to evaluate how reliable it is in an exhibition context.

## Outlook

For a future version, the station could be refined in several ways. The physical design would benefit from cleaner construction, hidden cables and a more polished input device. The ESP32-S3 should also be integrated into the installation instead of remaining visible.

The physical media used for song selection could be designed more carefully, making the interaction feel more like choosing music on a familiar device. While the current input device already refers to a CD player, a more refined version could make this reference clearer and more appealing.

Additional feedback would also improve the experience. At the moment, the plates mainly rely on visual feedback. In the future, audio feedback could be added when an input is recognised. Different sounds for perfect, good or missed inputs could make the game easier to understand and more satisfying to play.

Further testing with the complete setup would be essential. This includes testing the reliability of the sensors, the readability of the LED signals and the size of the plates. Target group testing with children aged 7 to 11 would be especially important to adjust the difficulty and make sure the interaction is intuitive and enjoyable.

## Conclusion

Burning Feet turns care into movement. It adds a playful and energetic station to the MAMAgotchi experience and shows how tangible interaction can create intuitive access to complex themes.

By combining music, light and physical movement, the station invites visitors to become active together. It does not explain care through text or screens, but translates it into a shared bodily experience: sometimes, taking care also means playing, reacting quickly and creating a joyful moment together.
