---
layout: project
title: Dialect Puzzle
authors:  Caro, Tatyana, Lilia
description: Dialect Puzzle brings the diversity of German dialects to life. Children playfully discover language evolution, break down prejudices, and experience how vibrant and valuable dialects are.
teaser: teaser.png
images:
  - image: Dialect Puzzle completed
    url: dialect-puzzle-1.png
  - image: Dialect Puzzle uncompleted
    url: dialect-puzzle-2.png
  - image: Dialect Puzzle components
    url: dialect-puzzle-3.png

---

## Project Description

The interactive dialect puzzle is a multisensory educational game that makes Germany's linguistic diversity tangible and audible. The game consists of a physical puzzle in the shape of a map, where the individual pieces represent different regions.

As soon as a puzzle piece is placed in its correct geographical position on the board, an authentic song or a typical phrase in that region's dialect is immediately played. The game intuitively combines the haptic experience (puzzle piece), visual association (map position), and auditory learning (the sound of the dialect).

The motivation behind the project is to rediscover a cultural asset often perceived as abstract or outdated—the dialect—in a modern, playful, and appreciative way.

Educational goals include:

Playful Knowledge Transfer: Creating a direct and memorable connection between a region and its sound.

Promoting Listening Skills: Training auditory perception and careful listening.

Appreciation for Diversity: Celebrating the richness and unique features of the German language.

Reducing Inhibitions: Presenting dialects as an interesting and living part of the culture and breaking down prejudices.


## Technical Implementation

*The technical implementation is designed to ensure an immediate and reliable response to the player's actions.*

*The heart of the puzzle is an Arduino Nano 33 IoT, which serves as the central control unit. Component detection is achieved through a simple and robust sensor system: A magnet is integrated into each puzzle piece. At the correct position on the game board, there is a Hall sensor that detects the magnetic field as soon as the piece is placed.*

*The Arduino registers which sensor was triggered, thereby uniquely identifying the placed puzzle piece. It then sends a command to an MP3 player module equipped with an SD card. This module then plays the corresponding audio file—the dialect song—through a small speaker built into the housing.*