---
title: "Testing the pipeline"
date: 2026-07-27
description: "A throwaway post to confirm Markdown, code, and math all render."
draft: false
---

This post exists to prove the build works. Delete it whenever.

Inline math: the ground state energy $E_0 = \min_\psi \langle \psi | H | \psi \rangle$.

Block math:

$$
|\psi(t)\rangle = e^{-iHt} |\psi(0)\rangle
$$

And a code block:

```python
def expectation(H, psi):
    return psi.conj().T @ H @ psi
```

> A blockquote, for good measure.
