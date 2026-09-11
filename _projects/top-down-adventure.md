---
title: "Top-Down Adventure"
order: 1
number: "01"
file_label: adventure.py
tags: [Python, Arcade, Game development]
summary: "A Zelda-inspired adventure built around exploration, combat, and a world of interconnected rules."
description: "Inside a Python and Arcade adventure game: map parsing, weapon state machines, and graph-based pathfinding."
image: /assets/images/dungeon-tileset.png
image_alt: "Dungeon tileset used in Top-Down Adventure, showing pixel-art floor, wall and doorway tiles."
visual: adventure
context: Object-oriented programming project
repository: https://github.com/khaliloualdi-boop/TopDown-Adventure
math: true
---

## A small world with a lot going on

Top-Down Adventure is a top-down game inspired by Zelda, built in Python with Arcade. The player explores a tiled world, collects crystals, operates switches, fights enemies, and makes their way to a final boss.

The interesting part is how these pieces fit together. A switch changes a gate's state. An enemy navigates around obstacles. A thrown boomerang has to find its way back to a player who may have moved.

## Designing the systems

### Maps that are validated before play

Map files combine a YAML header with a character grid. The parser checks dimensions, tile contents, switches, and gate conditions before constructing the map.

The map and its configuration objects use frozen dataclasses and tuples. Keeping the underlying layout immutable gives movement and navigation a stable foundation.

Gate conditions can combine switches with `and`, `or`, and `not`. A recursive validator checks these expressions and the switch identifiers they reference.

### Different weapons, one interface

The sword and boomerang share an abstract weapon interface. The game loop can trigger an attack or update a weapon without needing to handle every weapon type itself.

The sword has active and inactive states. The boomerang adds a returning state: on its return journey, it repeatedly calculates a direction towards the player's current position.

### Navigation as a graph problem

The navigation system divides tiles into a finer grid and represents walkable positions as graph nodes. Integer coordinates keep node comparison and lookup reliable.

The project's design notes describe a change from Dijkstra's algorithm to NetworkX's A* search. An octile-distance heuristic guides the search through a world that permits diagonal movement:

$$
h = \max(\Delta x, \Delta y) + (\sqrt{2}-1)\min(\Delta x, \Delta y)
$$

The pursuing enemy recalculates its route when the player changes tile, avoiding a new search on every frame.

## Testing the pieces

The repository includes focused tests for map parsing, player behaviour, weapons, enemies, gates, and switches. Separating map parsing and movement calculations from rendering makes core rules easier to test on their own.

## Explore the project

The repository includes the source, setup instructions, and a longer design document. The gameplay controls are arrow keys to move, Space to attack, and R to switch weapons.

- [Source and setup instructions](https://github.com/khaliloualdi-boop/TopDown-Adventure)
- [Technical design notes](https://github.com/khaliloualdi-boop/TopDown-Adventure/blob/main/DESIGN.md)

The preview shows a tileset from the game's asset pack, not a gameplay screenshot.
