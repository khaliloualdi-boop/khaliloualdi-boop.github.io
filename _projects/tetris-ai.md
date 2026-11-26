---
title: "Tetris AI"
order: 3
number: "03"
file_label: tetris_ai
tags: [Python, Game AI, Neural networks]
summary: "A Tetris environment written from scratch, played by an agent that scores moves with hand-designed metrics, whose weights a neural network learns to tune."
description: "Building a Tetris game environment from scratch and training an agent to play it."
context: Independent project, in progress
math: true
---

## Two problems in one

Tetris AI is an independent project in two parts: first build the game itself, then build something that plays it well.

Writing the environment from scratch, rather than using an existing one, means the rules, the board representation and the move generation are all under my control. The agent sees exactly the state the game defines, nothing more.

## An agent guided by metrics

The current agent plays by evaluating candidate placements of each piece. Every resulting board is measured with several metrics describing its shape, and the agent picks the placement with the best combined score.

If the metrics are $f_1, \dots, f_k$ and the weights are $w_1, \dots, w_k$, the agent chooses the placement $p$ maximising

$$
S(p) = \sum_{i=1}^{k} w_i \, f_i(\text{board after } p).
$$

The behaviour of the agent depends entirely on the weights: the same metrics with different weights produce a very different player.

## Learning the weights

Choosing the weights by hand works, but is guesswork. The part I am working on now is a neural network that learns the right parameters for these metrics from play, instead of fixing them manually.

## Status

The game environment and the metric-guided agent are working; the neural-network stage is in development. I'm writing all of the code myself as a way of learning machine learning in practice.
