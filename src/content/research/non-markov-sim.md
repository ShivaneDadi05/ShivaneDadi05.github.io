---
title: "Tensor Network Simulation of Non-Markovian Dynamics"
year: 2025
summary: |
  Simulating quantum circuits on classical computers is a game of what assumptions you hold. If you are interested in purely the theoretical ability of a quantum computer, then you simulate its behavior as though it were perfect. If you were interested in how a quantum computer would operate on near-term hardware, then you try to simulate some of the imperfections that a near-term device would face.

  These imperfections are normally modeled as coherent, memoryless perturbations on the circuit. We can remove the assumption of coherence and we are left with density matrices representing noise that we can staple throughout the circuit. In this project, we go one step further and try simulating quantum circuits with memory. 

  We introduce a framework for simulating these "non-markovian" dynamics. The basic idea is to first truncate our time-correlated dynamics using some tensor network methods and take our ideal quantum circuit, and inject it into the dynamics of the whole system; effectively modeling a quantum circuit with non-markovian noise
  
  This work was done as a final project for a course on Tensor Computation
presentation: "/pdf/ECE273_Final_Presentation2.pdf"
code: "https://github.com/ShivaneDadi05/non-markov-noise-sim/"
order: 2
---
