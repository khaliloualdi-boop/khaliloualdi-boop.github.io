---
title: "UnRiskOmega Portfolio Analyser"
order: 4
number: "04"
file_label: run_analysis.py
tags: [Python, Quantitative finance, Monte Carlo]
summary: "A client-portfolio analysis pipeline built in a hackathon team for a case set by UnRiskOmega."
description: "A hackathon portfolio analyser: reconciliation, concentration and risk measures, and Monte Carlo simulation of portfolio evolution."
image: /assets/images/unriskomega-preview.svg
image_alt: "Illustration of simulated Monte Carlo paths of portfolio value fanning out around their mean."
context: LauzHack Tour + Swiss {ai} hackathon
repository: https://github.com/khaliloualdi-boop/UnriskOmega
math: true
---

## The case

At a hackathon that was part of LauzHack Tour + Swiss {ai}, UnRiskOmega provided the case: analyse a set of client portfolios and surface what an advisor should look at. Our team built a portfolio analyser in Python; I wrote nearly all of the code.

## From raw data to findings

The pipeline loads client data and optional reference data, validates it, and reconciles each portfolio's reported value against its positions. A few rules keep the analysis honest:

- invalid or missing numbers are never silently treated as zero;
- portfolios are analysed separately, not summed into client-wide exposure where holdings overlap;
- checks that are not implemented are reported as such, not as passed.

Concentration is then measured, for example the weight of the largest single position, and turned into findings with the supporting evidence attached.

## The performance analyser

The part I built on top of this measures how a portfolio is exposed:

- **Diversification**: how concentrated holdings are across positions.
- **Volatility**: the variability of portfolio returns.
- **Risk distribution**: using the covariance matrix $\Sigma$ of asset returns to see how much each position contributes to total risk. For weights $w$, the portfolio variance is $\sigma_p^2 = w^\top \Sigma \, w$.
- **Monte Carlo simulation**: simulating many possible paths of the portfolio's value to see the range of outcomes, not just a single expected value.

## Running it

The project uses Python with `uv`; the repository includes a command-line runner that writes results to a JSON file, and a test suite run with `pytest`.

## Source

[View the source on GitHub](https://github.com/khaliloualdi-boop/UnriskOmega).
