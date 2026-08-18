---
title: "Characterizing Quantum Signal Processing under Realistic Noise"
year: 2026
summary: |
  Quantum Signal Processing (QSP) is an algorithm that takes any target function f(x) and decomposes it into a quantum circuit that can exactly implement your desired f(x). In theory, QSP is an enormously useful framework with applications in quantum simulation or solving differential equations. But in practice, each element of your circuit is a physical operation on a quantum computer that is prone to all forms of error and hardware defects.

  The basic premise of QSP is we can take any polynomial f(x) and decompose it as a series of unitary rotations controlled by a vector of phi angles that we colloquially call the phase factors. Interestingly, these phase factors are non-unique to a polynomial and recent years have introduced a plethora of methods on how to find these phase factors with various criterion on numerical stability or efficiency. Few studies have specifically analyzed these methods on their behavior under noise. 

  We develop a taxonomy on various methods for phase factor finding and their behavior under various noise models. We use perturbation theory and other techniques to present analytic models to predict the behavior of these phase factors. 

  This work was done as collaborative research project in Prof. Murphy Niu's Lab and was presented at the KITP conference on quantum advantage in the pre-fault-tolerant era.

poster: "/pdf/KITP_QSP_Poster2.pdf"
order: 2
---
