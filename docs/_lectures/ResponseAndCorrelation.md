---
layout: page
title: Response and Correlation
author: Austen Lamacraft
chapter: 10
summary: Response functions. Structure factor. Dielectric function. Sum rules.
---

<p class="message">
Calculating eigenstates and eigenenergies is one thing, but what do experimentalists actually measure?
</p>


## Contents
{:.no_toc}

* Toc
{:toc}

Reading: {% cite Chaikin:2000aa %}.

---

## Probing Many Body systems

Our first encounters with quantum mechanics involve finding the _energies_ of stationary states, whether of the Hydrogen atom or a box of radiation in thermal equilibrium. Finding the energy of metallic Sodium (to pick a simple metal) is important if you want to be able calculate the melting temperature, but most experiments probe properties of a state of matter that are not simply contained in thermodynamic functions of state. For example, seeing that a metal is reflective involves shining light and measuring how it is scattered.

When a theorist looks at an experimentalist, what they see is a machine for measuring __response functions__, which encode the response of a system to external perturbations. The theorist's job is to understand what kinds of response are possible (e.g. metallic, insulating, superconducting), and hopefully to actually calculate response functions for a particular model. Often this is what really characterizes a state of matter: the thermodynamic differences between a metal and a superconductor are far less significant that the differing electromagnetic response.

In this lecture we will see how response functions are encoded in the eigenvalues and eigenstates of a many body system, and their general features. In fact, you've probably already met response functions in another guise: as __Green's functions__.

## Response of a Damped Oscillator

On the grounds that it's always best to start with a single degree of freedom first, we introduce the idea of response functions for (sigh) the harmonic oscillator.

### Green's Function for the Damped Oscillator

Consider your old friend, the damped driven oscillator

$$
\ddot x +\omega_0^2 x + \gamma \dot x =\frac{f(t)}{m}.
\label{res_sho}
$$

Solving this problem, as you've doubtless done many times, involves finding $x(t)$ given $f(t)$. Without going any further, what can we say about such a solution? \eqref{res_sho} is linear, which means that $x(t)$ depends linearly on $f(t)$. By the principle of superposition we can immediately write

$$
x(t) = \int \chi(t,s) f(s)\,ds.
$$

$\chi(t,s)$ is our first example of a response function, Green's function, or __susceptibility__. On general grounds, we can say two more things about $\chi(t,s)$. First, that it is __causal__, meaning that, since effect follows cause:

$$
\chi(t,s)=0,\quad \text{for }t<s.
$$

Second, since the LHS of \eqref{res_sho} has no explicit time dependence, $\chi$ is really a function only of $t-s$. We can certainly imagine situations where this is not true. Causality, however, seems pretty watertight (even if we don't understand why).

We can interpret $\chi(t)$ as the solution of \eqref{res_sho} to a $\delta$-function force at $t=0$.

$$
\ddot \chi +\omega_0^2 \chi + \gamma \dot \chi =\frac{\delta(t)}{m}.
\label{res_chiode}
$$

There are at least two ways to go about finding $\chi(t)$ in this case. The first is most direct: recall that the free motion of the oscillator can be written in terms of the complex exponential $e^{-i\omega t}$, where $\omega$ satisfies

$$
\omega^2+i\gamma\omega - \omega_0^2 =0,
$$

so that

$$
\omega_{\pm} = \pm \sqrt{\omega_0^2-\frac{\gamma^2}{4}}-i\gamma /2\equiv \pm\omega_1-i\gamma/2.
$$

Since $\chi(t)=0$ for $t<0$, we can get a $\delta$-functin in \eqref{res_chiode} by choosing a superposition of $e^{-i\omega_\pm t}$ such that $\chi'(0+)=m^{-1}$

$$
\chi(t) = \begin{cases}
0 & t\leq 0 \\
\frac{1}{m\omega_1}\sin(\omega_1 t )e^{-\gamma/2t} & t>0.
\label{res_shogf}
\end{cases}
$$

The second method is to solve the equation \eqref(res_chiode) in the Fourier domain, where it becomes

$$
\left[-\omega^2+\omega_0^2-i\gamma\omega\right]\tilde\chi(\omega) = \frac{1}{m},
$$

so that

$$
\tilde\chi(\omega) = \frac{1}{m}\frac{1}{\omega_0^2-\omega^2-i\gamma\omega}.
$$

I'm going to assume that you've plotted the amplitude and phase of this function enough times in your life already. Fourier transforming

$$
\chi(t) = \int_{-\infty}^\infty \tilde\chi(\omega)e^{-i\omega t}\,\frac{d\omega}{2\pi} = -\frac{1}{m} \int_{-\infty}^\infty \frac{e^{-i\omega t}}{(\omega-\omega_+)(\omega-\omega_-)}\,\frac{d\omega}{2\pi}.
\label{res_chiFT}
$$

The integrand has two poles in the lower half plane at $\omega_\pm$, on account of $\gamma$ being positive, which in turn follows from (or defines?) the direction of time. The fact that the frequency response is _analytic in the upper half plane_ is equivalent to causality in the real time response. This is because for $t<0$ we can close the contour in \eqref{res_chiFT} in the upper half plane, avoiding the poles and getting zero by Cauchy's theorem. For $t>0$ we close in the lower half plane (not forgetting the - from going the other way) and use the residue theorem to give

$$
\chi(t) = \frac{i}{m}\left(\frac{e^{-i\omega_+ t}}{\omega_+-\omega_-} + \frac{e^{-i\omega_- t}}{\omega_--\omega_+}\right) = \frac{1}{m\omega_1}\sin(\omega_1 t )e^{-\gamma/2t} \quad  t>0,
$$

as before.

### Mechanical Model of Dissipation

When we move on to the quantum oscillator, we're going to run into the problem that we only know how to describe Hamiltonian time evolution in quantum mechanics, that is, without dissipation. It's possible to describe the damped oscillator in Hamiltonian terms at the expense of explicitly introducing the degrees of freedom that are doing the dissipating. You've met this in the realm of classical mechanics when you discuss the mechanical impedance of an elastic string.

Imagine attaching an undamped oscillator to 

### Response of the Quantum Oscillator: Kubo Formula

### Finite Temperature and Fluctuation Dissipation Theorem

### Spectral Representation and Dynamical Structure Factor

## Response of Matter

### Density Response

### Sum rules

### Inelastic Scattering Measures the DSF

### Phonon Decay

Here we introduce..


References
----------

{% bibliography --cited %}
