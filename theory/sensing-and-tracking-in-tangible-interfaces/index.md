---
title: Sensing and Tracking in Tangible Interfaces
authors: Emma Kirchner, Maja Ruprecht, Mohamad Kadabashi 
date: "2026-07-09"
description: Sensors act as the bridge between the physical and digital world.
layout: blog
images:
- image: Figure 1&colon; Depth Camera setup - dSensingNI (Klompmaker, 2012)
  url: DepthCamera.png
  space-above: 19
  space-below: 1
- image: Figure 2&colon; Outside In Tracking - Tangible Tiles (Waldner, 2006)
  url: OutsideIn_TangibleTiles.png
  space-above: 5
  space-below: 1
- image: Figure 3&colon; Inside Out Tracking - Dothraki (Schüsselbauer, 2021)
  url: InsideOut_Dothraki.png
  space-above: 2
  space-below: 1
- image: Figure 4&colon; Detection System of Ultrasonic FMCW Sensors (Kong, 2022)
  url: ultrasonicSensor.png
  space-above: 2
  space-below: 1
- image: Figure 5&colon;  Capacitive Sensing - SmartSkin (Rekimoto, 2002)
  url: CapacitiveSensing.png
  space-above: 2
  space-below: 1
- image: Figure 6&colon; Wearables (Cofer, 2022)
  url: Wearables.png
  space-above: 2
  space-below: 1
---

The core idea behind Tangible User Interfaces (TUIs) is controlling digital content simply by moving, rotating, or touching physical objects, where everyday interactions with real objects become intuitive ways of interacting with digital systems. Making this possible requires one essential ingredient: sensor technology.

Sensors act as the bridge between the physical and digital world. They capture movements, positions, gestures, and touch, translating them into digital actions in real time. Over the years, researchers have explored a wide range of sensing and tracking technologies, each offering unique strengths and addressing different interaction scenarios.

## Depth Cameras

One of the most common sensing approaches for tangible interfaces is the use of depth cameras, such as the Microsoft Kinect. Instead of capturing only color images, depth cameras generate a depth map where every pixel contains information about the distance to an object.

Frameworks like dSensingNI use this information to detect hands, fingers, arms, and physical objects in interactive environments. Unlike many tabletop systems, depth cameras can also be used on vertical displays such as interactive walls or whiteboards, allowing users to interact with digital content through gestures, touch, or physical objects.

The main advantage of depth cameras is their flexibility. They are relatively easy to set up and support natural interaction without requiring markers attached to every object. However, they also have limitations. Hands or other objects can block the camera's view (known as occlusion), reducing tracking accuracy. In addition, noisy depth data and limited precision make fine-grained interactions more difficult than simple gestures.
(Klompmaker, 2012) (See Figure 1)

## Tracking Physical Objects: Outside-In vs. Inside-Out

Tracking tangible objects generally follows two different approaches: outside-in and inside-out tracking.

## Outside-In Tracking

Outside-in systems rely on external cameras that observe passive objects equipped with visual markers. A well-known example is Tangible Tiles, where transparent acrylic tiles contain markers that allow a camera above the table to determine each tile's position, rotation, and identity.

This approach works particularly well in collaborative environments. Users can freely rotate, combine, and rearrange physical objects while interacting with shared digital content. Studies have shown that tangible tiles often provide a more natural and haptic experience than traditional touchscreens.

The downside is the dependence on external infrastructure. Occlusion, lighting conditions, shadows, and camera positioning can all negatively affect tracking performance.
(Waldner, 2006) (See Figure 2)

## Inside-Out Tracking

Inside-out tracking takes the opposite approach by placing the sensing technology directly inside the object itself. The Dothraki system, for example, integrates an optical sensor similar to the one found in a computer mouse.

Instead of relying on external cameras, the object continuously analyzes a specially designed surface pattern called a De Bruijn Torus, allowing it to determine its own position with sub-millimeter precision.

Because no direct line of sight is required, inside-out tracking is much more robust against occlusion. It also enables flexible deployment without installing external cameras. However, embedding sensors into every object increases hardware complexity and requires additional image processing.
(Schüsselbauer, 2021) (See Figure 3)

## Beyond Cameras: Alternative Sensor Technologies

Although cameras dominate many tangible interface systems, researchers continue exploring alternative sensing technologies that overcome their limitations.

## Ultrasonic FMCW Sensors

Ultrasonic Frequency Modulated Continuous Wave (FMCW) sensors use sound waves instead of light. By analyzing returning echoes, they can accurately determine both the distance and movement speed of a user's hand.

Because they do not depend on lighting conditions, ultrasonic sensors work even in complete darkness and can recognize micro-gestures with remarkable precision. Their main drawbacks are limited operating range and the computational effort required to interpret the signals using machine learning.
(Kong, 2022) (See Figure 4)

## Capacitive Sensing

Capacitive sensing creates an invisible electric field beneath an interactive surface. As a hand approaches, it disturbs the field, allowing the system to detect not only touch but also proximity and even the overall shape of the hand.

This technology supports multiple users simultaneously and can be integrated into various surfaces and materials. However, it requires dedicated hardware beneath the interaction surface and primarily responds to conductive objects such as human hands.
(Rekimoto, 2002) (See Figure 5)

## Wearable Sensors

Wearable devices increasingly combine Inertial Measurement Units (IMUs) with near-infrared sensors to recognize gestures.

IMUs use accelerometers, gyroscopes, and sometimes magnetometers to measure movement and orientation, making them highly suitable for continuous motion tracking. Near-infrared sensors complement this by detecting subtle tissue movements around the wrist that correspond to hand gestures. Machine learning algorithms combine both sensor streams to classify gestures with high accuracy.

While this combination enables reliable gesture recognition, it also introduces challenges. IMUs accumulate positioning errors over time, and infrared sensors require careful calibration depending on how the device is worn.
(Cofer, 2022) (See Figure 6)

## Acoustic and Pressure Sensors

Microphones can also become input devices. Systems like StickEar attach small acoustic sensors to everyday objects, allowing them to recognize different sounds and respond accordingly. These solutions are inexpensive and do not require a direct line of sight, but they are sensitive to background noise.
(Yeo, 2013)

Pressure sensors represent another important category. Instead of tracking movement through space, they detect contact forces and pressure distribution across a surface. They are highly robust and intuitive but provide a more limited range of interaction compared to vision-based systems.
(Fraunhofer, 2026)

## Electromagnetic and NFC Tracking

Other tracking methods focus on identifying and locating physical objects rather than gestures.

Electromagnetic tracking uses magnetic fields to determine an object's position and orientation with high precision while avoiding occlusion problems. However, objects require specialized hardware.
(Patten, 2001)

Near Field Communication (NFC) offers a simpler alternative by assigning each object a unique digital identity through an NFC tag. Although NFC is inexpensive and widely available, it provides only short-range identification and cannot continuously track movement or rotation.
(Villar, 2018)

## Conclusion

No single sensing technology is ideal for every tangible interface. Depth cameras offer flexibility for large interactive spaces, inside-out tracking provides robustness without external infrastructure, wearable sensors enable mobile interaction, while ultrasonic, capacitive, acoustic, and pressure sensors each address specific challenges.

Designing successful tangible interfaces therefore means selecting the sensing technology that best fits the intended interaction, environment, and user experience. As sensor technology continues to evolve, tangible interfaces are becoming increasingly natural, precise, and capable of seamlessly blending the physical and digital worlds.

## References

Cofer, S., Chen, T. N., Yang, J., Follmer, S. (2022). Detecting touch and grasp gestures using a wrist-worn optical and inertial sensing network. IEEE Robotics and Automation Letters 7, 4 (2022), 10842–10849. https://doi.org/10.1109/LRA.2022.3191173

Fraunhofer IFF. n.d. Taktile Sensorsysteme – Interaktionssysteme. Retrieved April 12, 2026 from https://www.iff.fraunhofer.de/de/geschaeftsbereiche/robotersysteme/taktile-sensorsysteme-interaktionssysteme.html

Klompmaker, F., Nebe, K., Fast, A. (2012). DSensingNI: a framework for advanced tangible interaction using a depth camera. In Proceedings of the Sixth International Conference on Tangible, Embedded and Embodied Interaction (TEI '12). Association for Computing Machinery, New York, NY, USA, 217–224. https://doi.org/10.1145/2148131.2148179

Kong, F., Deng, J., Fan, Z. (2022). Gesture recognition system based on ultrasonic FMCW and ConvLSTM model. Measurement 190 (2022), 110743. https://doi.org/10.1016/j.measurement.2022.110743

Patten, J., Ishii, H., Hines, J., Pangaro, G. (2001). “Sensetable: A Wireless Object Tracking Platform for Tangible User Interfaces”. In Proceedings of CHI 2001 https://trackr-media.tangiblemedia.org/publishedmedia/Papers/293-Sensetable%20A%20Wireless%20Object/Published/PDF

Rekimoto, J. (2002). SmartSkin: an infrastructure for freehand manipulation on interactive surfaces. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems: Changing Our World, Changing Ourselves (CHI ’02). Association for Computing Machinery, New York, NY, USA, 113–120. https://doi.org/10.1145/503376.503397

Schüsselbauer, D., Schmid, A., Wimmer, R. (2021). Dothraki: Tracking Tangibles Atop Tabletops Through De-Bruijn Tori. In Proceedings of the Fifteenth International Conference on Tangible, Embedded, and Embodied Interaction (TEI '21). Association for Computing Machinery, New York, NY, USA, Article 37, 1–10. https://doi.org/10.1145/3430524.3440656

Villar, N., Cletheroe, D., Saul, G., Holz, C., Regan, T., Salandin, O., Sra, M., Yeo, H., Field, W., Zhang, H. (2018). “Project Zanzibar: A Portable and Flexible Tangible Interaction Platform,” In Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems, Montreal QC Canada: ACM, pp. 1–13. doi: 10.1145/3173574.3174089.

Waldner, M., Hauber, J., Zauner, J., Haller, M., Billinghurst, M. (2006). Tangible tiles: design and evaluation of a tangible user interface in a collaborative tabletop setup. In Proceedings of the 18th Australia conference on Computer-Human Interaction: Design: Activities, Artefacts and Environments (OZCHI '06). Association for Computing Machinery, New York, NY, USA, 151–158. https://doi.org/10.1145/1228175.1228203

Yeo, K. P., Nanayakkara, S. C., Ransiri, S. (2013). StickEar: making everyday objects respond to sound. In Proceedings of the 26th Annual ACM Symposium on User Interface Software and Technology (UIST ’13). Association for Computing Machinery, New York, NY, USA, 221–226. https://www.researchgate.net/publication/262425563_StickEar_Making_everyday_objects_respond_to_sound

## Disclosure Statement

This text was prepared with the assistance of the AI language model
GPT-5.4, which was used for drafting and linguistic revision. The
author defined the content requirements and remains responsible for the
final version.