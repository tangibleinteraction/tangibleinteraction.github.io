---
layout: project
title: MuCo
authors: Florian Zeibig, Christina Epple
description: How can children explore and remember museum content better? MuCo is an interactive, child-friendly companion that playfully supports, structures, and extends the experience of the exhibition World of the Senses at the Deutsches Hygiene-Museum Dresden.
teaser: image.png
images: 
  - image: Interaction
    url: image1.png
  - image: Concept
    url: image2.png
  - image: Variations of the concept
    url: image3.png
  - image: Development
    url: image4.jpeg
  - image: Development Stages
    url: image5.png
  - image: Electronics
    url: image6.png
  - image: Final Products
    url: image7.png
  - image: Website
    url: image8.png
---

## MuCo – your personal museum companion

### An educational project at the Deutsches Hygiene-Museum Dresden

How can children experience museum content more intensively and remember it later? This question was the starting point for the development of MuCo, a child-friendly educational tool that was created as part of a design project especially for the children's exhibition ‘World of the Senses’ at the Deutsches Hygiene-Museum Dresden. The exhibition focuses on independent exploration, physical experience and deliberately reduced media, and this is exactly where MuCo comes in: as an analogue digital museum companion that structures and emotionalises the visit to the exhibition and extends it beyond the actual duration of the visit.

### What is MuCo?

MuCo is a small, abstract figure that children assemble themselves from several components at the beginning of their tour. It consists of a combination of wood and coloured plastic. Inside is an inconspicuously installed RFID chip, the technology deliberately remains in the background. The figure becomes a personal companion through the museum: a haptic object to hold, reconnect and remember.
Children will find a special station in each themed world of the exhibition. They can place their MuCo there and receive a complementary pin that matches the respective station. A small, symbolic object that can be easily attached to the figure. At the same time, a built-in RFID scanner recognises the station and stores this information on the figure. At the station fo the sense “seeing”, the whole process is accompanied by light animations that makes collecting visible and exciting. The figure grows with every discovery and becomes a tangible reminder of what has been seen, experienced and learnt.
After a visit to the museum, MuCo comes to life again at home: If you hold the figure to a smartphone or tablet, a child-friendly website opens automatically. A personalised audio plays based on the stations collected in the museum can be played there. Each themed world visited becomes its own chapter. The MuCo appears in the story and guides the child once again through the most important content. Without an app, without logging in, without screen overload.
MuCo is not an app, not a toy in the traditional sense and is not a worksheet. It is a new educational tool that combines analogue haptics with digital depth - with minimal technology, maximum self-activity and real memory value. MuCo was developed as a prototype with a view to creating a sustainable, easily integrated and scalable solution for children's exhibitions - initially at the Hygiene Museum Dresden, with a view to expanding beyond.
Target group
MuCo targets children between the ages of 4 and 10 who are curious to discover, make their own decisions and take their experiences home with them. The figure is easy to use, robust and can be customised. It enables a playful, self-determined museum experience, and gives children something that is meaningful beyond the visit.

## Starting Point and Project Goals

Museum visits can be exciting, but often overwhelming for children. They are frequently confronted with sensory overload, an abundance of impressions, and limited opportunities for structured reflection. As a result, the content is rarely retained in the long term and the experience remains fleeting. What’s often missing is a personal point of reference or a tool that enables children to actively engage and deepen their understanding.

The aim was to create a companion that supports children throughout their museum visit in a playful, intuitive and creative way. The object is designed to spark curiosity about the exhibits, encourage active exploration, and allows children to collect and store information that can be revisited after the visit. Importantly, the device works entirely without screens or apps while in the museum. It offers a tactile, analog experience that integrates digital functions subtly and meaningfully. The focus lies on self-directed discovery, creativity, and emotional engagement, turning the museum visit into a more personal, lasting, and meaningful experience for each child.

## Development

The initial development phase included experiments with Raspberry Pi and RFID readers, as well as early CAD models focusing on a modular plug-in system for the figure. The form language was kept abstract and symbolic rather than anthropomorphic, aiming to spark curiosity without encouraging over-interpretation. The first idea was to embed all technical components directly within the figure. However, this approach proved to be too complex, costly, and ultimately unnecessary. As a result, the decision was made to move the technology into the museum stations themselves. The figures instead contain simple NFC tags, which interact with the stations and can also be used to access the project’s website after the visit.
This shift in approach led to an important insight: less technology allows for more freedom, in design, use, and interaction. The final solution relies on passive, power-free NFC chips integrated into the base of the figure.
Early prototypes used PLA threads to attach components, but these often jammed and proved impractical. The system was then redesigned using plug-in connections combined with sealing elements, creating a more robust and user-friendly construction. The final figures are made from a combination of wood and PLA, with wood offering warmth and familiarity, and PLA providing color, flexibility, and precise shaping.

## Design and Website

The figure was developed with optimized plug connections that balance movable and fixed components, making assembly intuitive and playful. The body is made from pink and orange PLA, vibrant, eye-catching colors that appeal to children, while the head, arms, and hands are crafted from solid wood, creating a warm contrast and a pleasant tactile experience.

In parallel, a custom website was developed, visually aligned with the corporate identity of the Deutsches Hygiene-Museum. It can be accessed via the NFC tag embedded in the base of the figure. The website features the child’s personalised audio story, generated during their museum visit, as well as an interactive section that visually reflects themes from the exhibition. Through playful elements, children can engage with images and content related to the five senses, extending the museum experience into the digital space in a way that is intuitive and enjoyable. The first functional version of the audio story has already been implemented and demonstrates the potential of the system to blend analog interaction with digital storytelling. The website can also be visited through the url [https://muco-dhmd.vercel.app](https://muco-dhmd.vercel.app).
