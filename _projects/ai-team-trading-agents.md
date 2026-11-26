---
title: "Investment-Strategy Agents"
order: 5
number: "05"
file_label: agents
tags: [Python, Quantitative finance, Agents]
summary: "Agents that run investment strategies on real-time market data, built at an EPFL AI Team hackathon judged by Brevan Howard."
description: "Investment-strategy agents on real-time data: volatility, risk allocation and regime changes."
context: EPFL AI Team hackathon
math: true
---

## The challenge

At a hackathon organised by the EPFL AI Team and judged by Brevan Howard, the task was to build agents that make investment decisions on real-time market data.

## What the agents react to

The agents were built around three questions a strategy has to keep answering as new data arrives:

- **Volatility**: how much is the market moving right now, and how much risk does that imply?
- **Risk allocation**: given that, how should capital be split across positions?
- **Regime changes**: has the market's behaviour shifted, so that a strategy that worked a moment ago no longer fits?

Working on live data rather than a fixed historical dataset means the decisions must be made with only the information available at that moment.
