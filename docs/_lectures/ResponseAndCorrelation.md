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
m\ddot y +m\omega_0^2 y + \gamma \dot y =f(t).
\label{res_sho}
$$

Solving this problem, as you've doubtless done many times, involves finding $y(t)$ given $f(t)$. Without going any further, what can we say about such a solution? \eqref{res_sho} is linear, which means that $y(t)$ depends linearly on $f(t)$. By the principle of superposition we can immediately write

$$
y(t) = \int \chi(t,s) f(s)\,ds.
$$

$\chi(t,s)$ is our first example of a response function, Green's function, or __susceptibility__. On general grounds, we can say two more things about $\chi(t,s)$. First, that it is __causal__, meaning that, since effect follows cause:

$$
\chi(t,s)=0,\quad \text{for }t<s.
$$

Second, since the LHS of \eqref{res_sho} has no explicit time dependence, $\chi$ is really a function only of $t-s$. We can certainly imagine situations where this is not true. Causality, however, seems pretty watertight (even if we don't understand why).

We can interpret $\chi(t)$ as the solution of \eqref{res_sho} to a $\delta$-function force at $t=0$.

$$
m\ddot \chi +m\omega_0^2 \chi + \gamma \dot \chi =\delta(t).
\label{res_chiode}
$$

There are at least two ways to go about finding $\chi(t)$ in this case. The first is most direct: recall that the free motion of the oscillator can be written in terms of the complex exponential $e^{-i\omega t}$, where $\omega$ satisfies

$$
m\omega^2+i\gamma\omega - m\omega_0^2 =0,
$$

so that

$$
\omega_{\pm} = \pm \sqrt{\omega_0^2-\frac{\gamma^2}{4m^2}}-i\frac{\gamma}{2m} \equiv \pm\omega_1-i\frac{\gamma}{2m}.
$$

Since $\chi(t)=0$ for $t<0$, we can get a $\delta$-functin in \eqref{res_chiode} by choosing a superposition of $e^{-i\omega_\pm t}$ such that $\chi'(0+)=m^{-1}$

$$
\chi(t) = \begin{cases}
0 & t\leq 0 \\
\frac{1}{m\omega_1}\sin(\omega_1 t )e^{-\gamma/2mt} & t>0.
\label{res_shogf}
\end{cases}
$$

The second method is to solve the equation \eqref(res_chiode) in the Fourier domain, where it becomes

$$
\left[-m\omega^2+m\omega_0^2-i\gamma\omega\right]\tilde\chi(\omega) = 1,
$$

so that

$$
\tilde\chi(\omega) = \frac{1}{m(\omega_0^2-\omega^2)-i\gamma\omega}.
\label{res_chi_SHO}
$$

I'm going to assume that you've plotted the amplitude and phase of this function enough times in your life already. Fourier transforming back to the time domain

$$
\chi(t) = \int_{-\infty}^\infty \tilde\chi(\omega)e^{-i\omega t}\,\frac{d\omega}{2\pi} = -\frac{1}{m} \int_{-\infty}^\infty \frac{e^{-i\omega t}}{(\omega-\omega_+)(\omega-\omega_-)}\,\frac{d\omega}{2\pi}.
\label{res_chiFT}
$$

The integrand has two poles in the lower half plane at $\omega_\pm$, on account of $\gamma$ being positive, which in turn follows from (or defines?) the direction of time. The fact that the frequency response is _analytic in the upper half plane_ is equivalent to causality in the real time response. This is because for $t<0$ we can close the contour in \eqref{res_chiFT} in the upper half plane, avoiding the poles and getting zero by Cauchy's theorem. For $t>0$ we close in the lower half plane (not forgetting the - from going the other way) and use the residue theorem to give

$$
\chi(t) = \frac{i}{m}\left(\frac{e^{-i\omega_+ t}}{\omega_+-\omega_-} + \frac{e^{-i\omega_- t}}{\omega_--\omega_+}\right) = \frac{1}{m\omega_1}\sin(\omega_1 t )e^{-\gamma/2mt} \quad  t>0,
$$

as before.

### Properties of the Susceptibility

(I'm going to drop the tilde from $\tilde\chi(\omega)$, as there's no real chance of confusion.)

We've already argued that causality dictates that $\chi(\omega)$ be analytic in the upper half plane. What is the implication for the response measured at _real_ frequencies? Let's split $\chi(\omega)$ into its real and imaginary parts

$$
\chi(\omega) = \chi'(\omega) + i\chi''(\omega).
$$

Then analyticity in the UHP implies the __Kramers--Krönig relation__

$$
\chi'(\omega) = \cP \int_{-\infty}^\infty \frac{d\omega'}{\pi}\frac{\chi''(\omega)}{\omega'-\omega},
$$

<p class="message">
Check this for \eqref{res_chi_SHO}.
</p>

where $\cP$ denotes the principal part. Since $\chi(t)$ is real, we have $\chi(-\omega)^*=\chi(\omega)$, so that $\chi'(\omega)$ is an even function, while $\chi''(\omega)$ is odd.

The real and imaginary parts encode different aspects of the response. The imaginary part is related to the power dissipated by a driving force. For $f=f_0\cos\omega t$ we have

$$
\begin{align}
W_\text{diss} = \langle f(t) \dot x(t)\rangle = \frac{1}{2}\omega\chi'(\omega)f_0^2.
\end{align}
$$

For stability we must have $\omega\chi'(\omega)>0$ (and even).

The real part is related to the shift in the _energy_ of the system in the presence of a driving force. Recalling that the applied force appears in the Hamiltonian as $-f(t)x(t)$, we find the time average

$$
E_\text{shift} = -\langle f(t) x(t)\rangle  = -\frac{1}{2}\chi''(\omega)f_0^2
$$

For the damped oscillator, the sign of of $\chi''(\omega)$ changes at resonance. The drive lowers the energy beneath the resonance, and raises it above.

### Mechanical Model of Dissipation

When we move on to the quantum oscillator, we're going to run into the problem that we only know how to describe Hamiltonian time evolution in quantum mechanics, that is, without dissipation. It's possible to describe the damped oscillator in Hamiltonian terms at the expense of explicitly introducing the degrees of freedom that are doing the dissipating. You've met this in the realm of classical mechanics when you discuss the mechanical impedance of an elastic string.

Attaching an undamped oscillator to a string under tension $\tau$ gives the coupled system

$$
\begin{align}
m\ddot y +m\omega_0^2 y =\tau\frac{\partial u(x,t)}{\partial x}\Bigg|_{x=0}\nonumber\\
\frac{\partial^2 u}{\partial x^2}-\frac{1}{c^2}\frac{\partial^2 u}{\partial t^2}=0,\quad x>0\qquad u(0,t) = y(t).
\label{res_SHOString}
\end{align}
$$

If nothing is propagating towards the oscillator from the string, only away from it, we can write

$$
u(x,t) = y(t-x/c).
\label{res_ret}
$$

This gives $\frac{\partial u(x,t)}{\partial x}\big\|_{x=0} = -\dot y/c$, and hence a closed equation for $y$

$$
\ddot y +\omega_0^2 y + \gamma \dot y =0.
\label{res_sho2}
$$

with $\gamma=\tau/c$. Note that this is the impedance of the string.

The nice thing about this model is that it is very explicit. In particular, we can see exactly where the arrow of time comes from: the assumption \eqref{res_ret}. Had we somehow arranged to have an incoming wave that matched the motion of the oscillator, we would arrive at an equation of motion for the oscillator with damping of the other sign.

Although we've introduced response functions for a linear system, this isn't a requirement (fortunately). More generally, we can ask how the (nonlinear) motion of a system is modified at first order in some perturbation -- a force in the case of the oscillator. The susceptibility describes the __linear response__ of the system. Many quantities that we meet in elementary physics such as elastic constants and conductance (electrical and thermal) are really linear response functions that represent a convenient first approximation to the true nonlinear behaviour.


### Finite Temperature Fluctuations

\eqref{res_ret} corresponds to a 'zero temperature' environment. Finite temperature corresponds to an 'incoming' wave describing the thermal occupation of the Fourier modes of the string, which would cause Brownian motion of the oscillator. The energy scale of this motion is $k_\text{B}T$.

We can easily extend the earlier discussion to finite temperature by writing $u(x,t)$ in terms of components approaching and leaving the oscillator

$$
u(x,t) = u_\text{in}(t+x/c) + u_\text{out}(t-x/c).
$$

The force on the oscillator is proportional to

$$
\frac{\partial u(x,t)}{\partial x}\Bigg|_{x=0} = c^{-1}\left(u'_\text{in}(t)-u'_\text{out}(t)\right) = c^{-1}\left(2u'_\text{in}(t)-\dot y(t)\right).
$$

The equation of motion can then be written as

$$
m\ddot y +m\omega_0^2 y + \gamma \dot y =f_\text{noise}(t),
\label{res_sho2_noise}
$$

where $f_\text{noise}(t) = \frac{2\tau}{c}u'_\text{in}(t)$ is a random force due to thermal fluctuations. As this derivation makes clear, the noise and the damping have a common origin.

On account of the infinite bandwidth of the string, $f_\text{noise}$ is white noise

$$
\E\left[f_\text{noise}(t)f_\text{noise}(t')\right] = 2\gamma k_\text{B}T\delta(t-t').
\label{res_noise_var}
$$

A differential equation driven by noise like \eqref{res_sho2_noise} is known as a __Langevin equation__ in physics and as a __stochastic differential equation__ (SDE) in mathematics.

<div class="message">
<p> Actually, no self-respecting mathematician would write something like \eqref{res_sho2_noise}, implying as it does that the instantaneous acceleration of the oscillator is infinite. Physicists, on the other hand, know that this is just an approximation caused by setting certain time scales to zero.
</p>

<p>The mathematical way to write an equation like \eqref{res_sho2_noise} is as the pair of first order SDEs

$$
\begin{align}
dy &= \frac{p}{m} dt\nonumber \\
dp &= -m\left[\omega_0^2 y +\gamma p\right]dt +\sqrt{2\gamma k_\text{B}T}dW,
\end{align}
$$

where $W$ is a <a href="https://en.wikipedia.org/wiki/Wiener_process">Wiener process</a>. Writing the equation in terms of differentials avoids the awkward subject of infinite forces.
</p>
</div>

The motion of the oscillator in response to the thermal noise can be calculated using the response function. In the frequency domain,
\eqref{res_noise_var} is

$$
\E\left[\tilde f_\text{noise}(\omega)\tilde f_\text{noise}(\omega')\right] = 4\pi \gamma k_\text{B}T\delta(\omega+\omega'),
$$

giving a power spectrum of oscillator fluctuations

$$
\E\left[\tilde y(\omega)\tilde y(\omega')\right] = 4\pi \gamma k_\text{B}T \abs{\chi(\omega)}^2 \delta(\omega+\omega').
\label{res_power}
$$

Noting that

$$
\Im \tilde\chi(\omega) =  \frac{\gamma \omega}{(\omega_0^2-\omega^2)^2+\gamma^2\omega^2} = \gamma\omega \abs{\chi(\omega)}^2
$$

we can write \eqref{res_power} as

$$
\E\left[\tilde y(\omega)\tilde y(\omega')\right] = \frac{2k_\text{B}T}{\omega} \Im\chi(\omega) (2\pi)\delta(\omega+\omega').
\label{res_power_final}
$$

### Quantum Flucutations

Quantum mechanics provides another source of fluctuations. For a single oscillator

$$
H = \frac{p^2}{2m} + \frac{1}{2}m\omega^2 x^2,
$$

we have the ground state fluctuations

$$
\bra{0} x^2 \ket{0} = \frac{\omega}{2m},
$$

while at finite temperature

$$
\tr\left[\rho\, x^2\right] = \frac{\omega\coth(\beta\omega/2)}{2m}.
$$

where $\rho = e^{-\beta H}/Z$ is the equilibrium density matrix.

Now what about _time dependent fluctuations_? This is what was calculated in \eqref{res_power_final} for the classical damped oscillator. A natural candidate is

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
