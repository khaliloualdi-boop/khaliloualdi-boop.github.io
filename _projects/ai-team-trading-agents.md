---
title: "Portfolio-Allocation Agents"
order: 5
number: "05"
file_label: allocation_agent
tags: [Python, Quantitative finance, Agents]
summary: "An agent that allocates a portfolio across five strategy classes and adapts to the macroeconomic regime it detects, built at an EPFL AI Team hackathon judged by Brevan Howard."
description: "Portfolio-allocation agent with volatility-based sizing and macroeconomic regime detection."
image: /assets/images/agents-preview.svg
image_alt: "Illustration of a price series with a shaded high-volatility regime."
context: EPFL AI Team hackathon
math: true
---

## The challenge

At a hackathon organised by the EPFL AI Team and judged by Brevan Howard, I built an agent that allocates a portfolio across five strategy classes.

## Sizing positions by risk

The allocation combines three ideas:

- **Inverse-volatility weighting**: a class with volatility $\sigma_i$ receives a weight proportional to $1/\sigma_i$, so that riskier classes get less capital.
- **Covariance-based risk sizing** across holdings: with covariance matrix $\Sigma$ and weights $w$, the portfolio variance is $\sigma_p^2 = w^\top \Sigma \, w$, which accounts for how holdings move together, not just individually.
- **Volatility targeting**: the overall exposure is scaled so that the portfolio's volatility stays near a chosen target.

All of this respects hard allocation bounds on every class.

## Detecting the regime

A strategy that works in one market environment can fail in another. A macroeconomic regime-detection module classifies market conditions into four regimes, **growth, inflation, recession** and **stagflation**, and the agent automatically shifts its allocation to suit the regime it detects.
