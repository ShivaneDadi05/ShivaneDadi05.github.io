---
title: "Efficient Classical Protocols for Quantum Verification"
year: 2025
summary: |
  One of the touted advantages of Quantum Computers is its ability to provide 'true randomness,' an output that is completely independent of what came before it. True randomness that has a lot of real applications in cryptographic schemes. But if I were to give you a set of random numbers and claim that a quantum computer generated these, how would you know?

  This requires the need for protocols that can verify the "quantumness" of a random output; a 'proof of quantumness.' Most protocols can be broken down as: I design a quantum circuit and send it to you to run on your supposed quantum device. You send me back the outputs, and if those outputs carry the expected statistical signature that my circuit produces AND no classical computer can fake that signature in reasonable time, I accept that you have a quantum device.

  While the idea might seem simple enough, figuring what the expected statistical signature of a circuit can itself be a classically hard computation, and if not careful, the verification can cost as much as the thing being verified. With this premise, for my course project, I studied one family of quantum circuits that was designed to be both efficient and with a protocol for learning the signature; the Instantaneous Quantum Polynomial (IQP) circuit.

  This project was done as a final report for a course on Post-Quantum Cryptography.
writeup: "/pdf/CS292G_Research_Report.pdf"
order: 2
---
