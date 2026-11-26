---
title: "Tetris AI"
order: 3
number: "03"
file_label: tetris_ai.py
tags: [Python, Game AI, Neural networks]
summary: "A Tetris environment written from scratch, and an agent whose move-evaluation weights are learned by a neural network: from 3/800 at random to a consistent 790+/800."
description: "Building a Tetris game environment from scratch and training an agent to play it."
image: /assets/images/tetris-preview.svg
image_alt: "Illustration of a Tetris board with a T piece falling onto stacked pieces."
context: Personal project, since June 2026
math: true
---

## Two problems in one

Tetris AI is a personal project in two parts: build the game, then build something that plays it well.

I wrote the game environment from scratch in Python, as a reusable testbed for training and comparing learning agents. The rules, the board representation and the move generation are all under my control, and every agent sees exactly the state the game defines.

## Scoring every move

For each new piece, the agent considers every candidate placement. Each resulting board is described by features $f_1, \dots, f_k$ of its shape, and an evaluation function combines them with weights $w_1, \dots, w_k$. The agent plays the placement $p$ maximising

$$
S(p) = \sum_{i=1}^{k} w_i \, f_i(\text{board after } p).
$$

The same features with different weights produce a very different player, so the weights decide the move at each step.

## Learning the weights

Rather than tuning the weights by hand, a neural network learns them.

The hardest part turned out not to be the learning but the features: finding ones that genuinely improve play. This is the first time I turned to the published research literature on Tetris agents, to understand, test and redesign the feature set.

## Results

| Agent | Average score |
| :---- | :------------ |
| Random baseline | 3 / 800 |
| Final trained model | consistently 790+ / 800 |
