---
title: Spatial Interaction - Space, Position, and Movement 
authors: Julia Schuster, Oliver Mey
date: 2026/05/10
description: How space, distance, orientation, movement, and body awareness are used as central design elements in interactive systems. 
layout: blog
order: 1
images:
  - image: Proxemic display; An example implementation of proxemic dimensions (Marquardt, 2012). 
    url: attention.png
    space-above: 20
    space-below: 30

  - image: HIER NOCH BESCHREIBUNG FÜR PROXEMIC ZONES 
    url: zones.png
    space-above: 20
    space-below: 30

  - image: HIER NOCH BESCHREIBUNG FÜR PROXEMIC DIMENSIONEN 
    url: zones.png
    space-above: 20
    space-below: 30

  - image: An illustration for the article "The Rat Studies that Foretold a Nightmarish Human Future" (Um, 2024).
    url: rats.png
    space-above: 20
    space-below: 30
---


_"When you walk up to your computer, does the screen saver stop and the working windows reveal themselves? Does it even know if you are there? How hard would it be to change this? Is it not ironic that, in this regard, a motion-sensing light switch is “smarter” than any of the switches in the computer…?_"
(Bill Buxton)

## Characteristics of spatial interaction

To merge a physical space with a computer system, the characteristics of spatial interaction must first be defined. This abstraction allows the physical properties to be translated into digital ones. The properties of a space are topology, ontology, volatility, and agency. (Benyon, 2012)

The topology of a space describes the distances between objects within that space as well as their relative orientations. In the context of geography, for example, topology can describe the locations of landmarks in a city. It can also specify the arrangement of desks and chairs in a classroom. (Benyon, 2012)

An ontology describes the categorization of objects within a domain. It can be either fine-grained or coarse-grained. Depending on its level of granularity, it determines how different objects can be from one another while still belonging to the same category. In a fine-grained ontology, there are more objects that differ from one another. In a coarse-grained ontology, there are many objects that are similar. 
Using a website as an example, the ontology would determine how many objects are found under a search category. For instance, a shopping site might feature categories such as women’s and men’s clothing. A more granular ontology would already offer several specific objects here, such as women’s pants, women’s T-shirts, men’s pants, and men’s T-shirts. The ontology can accordingly determine how many objects are present in the space at the same time. (Benyon, 2012)

Volatility indicates how often changes occur within the domain. Frequent changes mean that the domain is considered unstable, i.e., highly volatile. Unstable domains require an interface tailored to the specific use case.
For a stable space with low volatility, an ontology should be chosen that defines sufficiently broad distinctions between objects. Changes to an object are then less likely to cause a change in its type. This allows for the creation of a stable space in which changeable content can be presented more clearly. (Benyon, 2012)

Agency describes the possibilities for interaction within a room. It indicates whether the user is in the room with other users and how they can interact with one another. For example, they can be in the same room at the same time without being able to see each other. The reverse scenario is also possible: users may not be in the room at the same time, but they can see and interact with traces left by others. (Benyon, 2012)

One example of how physical space and a computer system can be incorporated is the creation of a walking tour that tells the story of Robert Louis Stevenson’s (RLS) last day in Edinburgh. QR codes were placed at RLS’s favorite locations, linking to relevant excerpts from his writings. Here, digital information is connected to the physical space via the QR codes.
The ontology here consists of the physical locations and RLS’s texts that describe the location. The topology is determined by the geographical location of the sites. Volatility is very low, as no changes are made to the space during the system’s runtime. There is no agent activity. The user is alone in the digital space. (Benyon, 2012)

## The role of position, proximity, orientation, and movement

Edward T. Hall studied how people use social distance to convey their relationships with others. The distance a person tries to maintain from another depends on their culture, age and personal relationships. 
With the term “proxemics”, he established the theoretical basis for spatial interaction in modern computer systems. To this end, four culture-dependent zones of personal space were identified. Different degrees of interpersonal closeness are associated with these zones. (Marquardt, 2012)

| Zone | Distance |
| --- | --- |
| Intimate | 0–50cm |
| Personal | 0.5–1m |
| Social | 1–4m |
| Public | < 4m | 

(Hall, 1966)

If one person’s personal space is invaded by another, the person affected would try to compensate for the lack of space. An example of such compensation would be turning away from one another in a cramped lift. 
Taking a physical display screen as an example, different information could be shown depending on the distance between the device and the user, taking into account the proximity zones. In this way, sensitive information could be displayed when the user is in close proximity, whilst remaining hidden at a greater distance. This principle will be illustrated later using the Proxemic Media Player. (Wang, 2011, Marquardt, 2012)


The concept of proxemic dimensions is applied in ubiquitous computing (Ubicomp). It is used as a mechanism to help integrate technology into everyday environments. By taking this concept into account, the aim is for technology to be perceived as less intrusive and to feel natural. The aim of Greenberg and Marquardt’s work is to make the concept of proxemics tangible for this purpose. By capturing proxemic dimensions, devices can detect the relationships between entities within an environment. (Wang, 2011)

The dimension of distance describes the measurable distance between entities. Rather than using continuous values, one should simply specify, in discrete terms, which proxemic distance zone an entity is located in. (Wang, 2011)
Similarly, the orientation of entities relative to one another can be specified. It is stated discretely whether an entity is facing another, facing something, or turned away. Continuous values can be used to specify the angle or rotation of an entity. (Wang, 2011)
The movement of entities is the change over time in the distance and orientation of the entities. In this context, both the speed and the direction of movement must be measured. (Wang, 2011)
A system’s ability to recognise who or what an entity is is described by the dimension of identity. When determining the identity of an entity, a decision must first be made as to whether detailed measurements for precise identification or merely minimal measurements for rough differentiation of the entities are required. (Wang, 2011)
The interpretation of the information from each of these four dimensions depends on the location. This specifies the physical context of the space. Information can have different meanings in different spaces. For example, a short distance between people in a lift would be expected, whereas in front of a cash machine it could indicate a breach of the rules. (Wang, 2011)

## Space-centered and object-centered forms of interaction

When integrating technology into a room, it can happen in two different ways. One is space-centered and the other is object-centered forms of interaction.

Space-centered interaction leads with the question: "Where am I in the context of the room?". The room itself is understood as a whole and interactive media. A mixture of the physical und digital room is created, also called "blended spaces". The room includes Fixed features (e.g. doors, walls) and semi-fixed features (e.g. furniture). Emphasis is placed on the topology (structure) and volatility (variability) of space. (Wang, 2011, Benyon, 2012)

Another form of spatial interaction is object-centered interaction. In this case, the question is: “How do I relate to this device?” This concerns the relationship between discrete entitities, such as between a person, a device, and an object. The objects relate to one another across five proxemic dimensions (distance, orientation, movement, identity, and location). The technology responds to relative approaches or movements away. An example would be a display, that shows more details the closer you get to it. (Wang, 2011)


| Aspect | Space-Centric | Object-Centric |
| --- | --- | --- |
| **Core Question** | *"Where am I located in the spatial context?"* | *"How am I positioned relative to this device?"* |
| **Focus** | The space as a medium or "Blended Space" | Distance and relationship between entities (human/device, etc.) |
| **Design Elements** | Fixed and semi-fixed features, topology of the space (e.g., walls, furniture) | Distances and discrete zones, orientation, and identity |
| **Interaction Logic** | Interaction takes place "in" the space, the system reacts to position within spatial structures (e.g., thresholds). | Interaction takes place "with" or "between" objects based on their relative proximity (e.g., Hall's four distance zones). |


## Requirements in public or collaborative spaces

Since overpopulation in confined spaces, such as large cities, can lead to stress and destructive behavior, the issue must also be considered from the perspective of “architecture and urban planning” The amount of space available per person and the resulting limitations on one’s sensory environment must be taken into account in order to create a harmonious living environment. The requirements for public or collaborative spaces can be broken down into five points. (Hall, 1966)

One of these is the issue of privacy and security. The demand for privacy increases in crowded spaces. The system must detect the number of people in the vicinity and adjust the visibility of content accordingly.
For example, personal calendar data should only be displayed on a public screen when the user is standing very close to it, and it should be hidden again immediately as soon as the user steps back. (Marquardt, 2012)

Another requirement is coordinating multiple users and preventing conflicts. Multiple users can share a system. The system must then respond to overlapping actions.
For example, if one person is looking at the screen and a second person blocks the view, the system must pause the video that is playing and display a neutral image. (Wang, 2011)

Systems must signal that they are open to interaction. In other words, they must attract attention and invite interaction. This can be achieved, for example, by offering touch-based controls. (Marquardt, 2012)

Another key point is distinguishing between gestures and targeted input. A system must be able to recognize whether an interaction is a natural gesture or conversation, or whether it is a targeted action that must be directed at a specific device.
Input can be provided, for example, through speech, gestures, or eye tracking.
It must be determined whether the input is directed at a personal smartphone, a shared group device, or a public wall display. (Marquardt, 2012)

The sixth requirement is support through spatial arrangement. The nature of collaboration between people is reflected in the layout of a space (semi-permanent features).
For collaborative tasks, people tend to sit side by side. For competitive tasks or conversations, however, people tend to sit across from each other or at angle positions. (Marquardt, 2012)

In summary, the more technology merges with our physical world, the more developers and designers must take into account not only technological factors, but also social, psychological, and architectural ones. (Marquardt, 2012, Benyon, 2012)


## References

Benyon, D. (2012). Presence in blended spaces. Interacting with Computers, 24(4), 219–226.

Marquardt, N., & Greenberg, S. (2012). Informing the design of proxemic interactions. IEEE Pervasive Computing, 11(2), 14–23.

Wang, M. (2011). Proxemic interactions: The new ubicomp? Interactions, 18(1), 42–50.

Hall, E. T. (1966). The Hidden Dimension. Doubleday.

Um, T. (2024). [Illustration for the article "The Rat Studies that Foretold a Nightmarish Human Future" by E. Kolbert]. The New Yorker. https://www.newyorker.com/magazine/2024/10/07/dr-calhouns-mousery-lee-alan-dugatkin-book-reviews-rat-city-edmund-ramsden-and-jon-adams
