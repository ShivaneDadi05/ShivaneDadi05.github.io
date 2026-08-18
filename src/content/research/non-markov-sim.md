---
title: "Tensor Network Simulation of Non-Markovian Dynamics"
year: 2025
summary: |
  Simulating quantum circuits on classical computers is a game of what assumptions you hold. If you are interested in purely the theoretical ability of a quantum computer, then you simulate its behavior as though it were perfect. If you were interested in how a quantum computer would operate on near-term hardware, then you try to simulate some of the imperfections that a near-term device would face.

  These imperfections are normally modeled as channels; CPTP maps that we can staple on each gate in the circuit, each acting independently of what came before. In this project, we go one step further and try simulating quantum circuits with memory, when those channels can no longer act independent of each other. 

  We introduce a framework for simulating these "non-Markovian" dynamics. The basic idea is to first compress our time-correlated dynamics into a matrix product operator, then inject each operation of our ideal quantum circuit into the evolution of those dynamics; effectively modeling a quantum circuit with non-markovian noise.
  
  This work was done as a final project for a course on Tensor Computation
presentation: "/pdf/ECE273_Final_Presentation2.pdf"
code: "https://github.com/ShivaneDadi05/non-markov-noise-sim/"
order: 3
---
