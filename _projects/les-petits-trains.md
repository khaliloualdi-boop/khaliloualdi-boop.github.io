---
title: "Les Petits Trains"
order: 2
number: "02"
file_label: petits_trains.cpp
tags: [C++, Simulation, Algorithms]
summary: "A railway network in the terminal, where trains and signals follow a precise set of rules."
description: "A closer look at a C++ railway simulation: grid movement, traffic-light control zones, and invariant tests."
visual: trains
context: ICC course, module 2
repository: https://github.com/khaliloualdi-boop/Les-Petits-Trains
---

## A railway network, one step at a time

Les Petits Trains is a C++ console simulation developed for the ICC (Introduction à la Culture Informatique) course, module 2.

Rails occupy cells on a rectangular grid. Each train consists of a locomotive followed by wagons, and each traffic light watches a rectangular control zone. The challenge is to make these simple elements behave consistently as the simulation advances.

## From rules to movement

On each step, a locomotive on a red light stays still. Otherwise, it looks for a valid rail cell in a fixed order: straight ahead, then right, then left.

If a direction is available, the locomotive moves one cell and each wagon follows into the previous position of the car ahead of it. If no direction is possible, the train stays in place.

This is an automatic simulation: the user advances time rather than steering individual trains.

## Signals watch the whole train

A traffic light turns red when any part of a train occupies its control zone. Checking wagons as well as locomotives matters: a train has not cleared a section just because its front has left it.

After movement, the lights are updated from the trains' new positions. These local rules connect the state of the railway to its next step.

## Making the state visible

The terminal uses a compact visual language:

| Symbol    | Meaning                                        |
| :-------- | :--------------------------------------------- |
| `#`       | Locomotive on a green light or without a light |
| `X`       | Locomotive on a red light                      |
| `*`       | Wagon                                          |
| `x` / `o` | Red / green light                              |
| `.`       | Empty rail                                     |

Pressing Enter advances one step, making changes easy to inspect. Typing `stop` ends the simulation. The portfolio preview is a schematic using these symbols.

## Checking the rules

The main implementation runs internal assertion-based tests before starting the interactive simulation. These check core invariants before the default demonstration, which includes four trains and three lights.

The source keeps map, train, and signal data alongside the movement and signal-update functions, making the relationship between representation and behaviour visible.

## Explore the project

[View the source and build instructions on GitHub](https://github.com/khaliloualdi-boop/Les-Petits-Trains).
