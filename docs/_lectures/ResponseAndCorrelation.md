---
layout: page
title: Response and Correlation
author: Austen Lamacraft
chapter: 11
summary: Response functions. Structure factor. Dielectric function. Sum rules.
published: true
---

<p class="message">
Calculating eigenstates and eigenenergies is one thing, but what do experimentalists actually measure?
</p>


## Contents
{:.no_toc}

* Toc
{:toc}

Reading: {% cite Chaikin:2000aa %}, {% cite Nazarov:2013 %}, {% cite Nozieres:1999aa %}.

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

Since $\chi(t)=0$ for $t<0$, we can get a $\delta$-function in \eqref{res_chiode} by choosing a superposition of $e^{-i\omega_\pm t}$ such that $\chi'(0+)=m^{-1}$

$$
\chi(t) = \begin{cases}
0 & t\leq 0 \\
\frac{1}{m\omega_1}\sin(\omega_1 t )e^{-\gamma/2mt} & t>0.
\label{res_shogf}
\end{cases}
$$

The second method is to solve the equation \eqref{res_chiode} in the Fourier domain, where it becomes

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
\chi'(\omega) = \cP \int_{-\infty}^\infty \frac{d\omega'}{\pi}\frac{\chi''(\omega')}{\omega'-\omega},
\label{res_KK}
$$

<p class="message">
Check this for \eqref{res_chi_SHO}.
</p>

where $\cP$ denotes the principal part. Since $\chi(t)$ is real, we have $\chi(-\omega)^*=\chi(\omega)$, so that $\chi'(\omega)$ is an even function, while $\chi''(\omega)$ is odd.

The real and imaginary parts encode different aspects of the response. The imaginary part is related to the power dissipated by a driving force. For $f=f_0\cos\omega t$ we have

$$
\begin{align}
W_\text{diss} = \langle f(t) \dot y(t)\rangle = \frac{1}{2}\omega\chi''(\omega)f_0^2.
\label{res_ClassDiss}
\end{align}
$$

For stability we must have $\omega\chi''(\omega)>0$ (and even).

The real part is related to the shift in the _energy_ of the system in the presence of a driving force. Recalling that the applied force appears in the Hamiltonian as $-f(t)y(t)$, we find the time average

$$
E_\text{shift} = -\langle f(t) x(t)\rangle  = -\frac{1}{2}\chi'(\omega)f_0^2
$$

For the damped oscillator, the sign of of $\chi'(\omega)$ changes at resonance. The drive lowers the energy beneath the resonance, and raises it above.

### Mechanical Model of Dissipation

When we move on to the quantum oscillator, we're going to run into the problem that we only know how to describe Hamiltonian time evolution in quantum mechanics, that is, without dissipation. It's possible to describe the damped oscillator in Hamiltonian terms at the expense of explicitly introducing the degrees of freedom that are doing the dissipating. You've met this in the realm of classical mechanics when you discuss the mechanical impedance of an elastic string.

Attaching an undamped oscillator to a string under tension $\tau$ gives the coupled system

$$
\begin{align}
&m\ddot y +m\omega_0^2 y =\tau\frac{\partial u(x,t)}{\partial x}\Bigg|_{x=0}\nonumber\\
&\frac{\partial^2 u}{\partial x^2}-\frac{1}{c^2}\frac{\partial^2 u}{\partial t^2}=0,\quad x>0\qquad u(0,t) = y(t).
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
\chi''(\omega) =  \frac{\gamma \omega}{(\omega_0^2-\omega^2)^2+\gamma^2\omega^2} = \gamma\omega \abs{\chi(\omega)}^2
$$

we can write \eqref{res_power} as

$$
\E\left[\tilde y(\omega)\tilde y(\omega')\right] = 2\pi S(\omega)\delta(\omega+\omega'),
\label{res_power_final}
$$

where

$$
S(\omega)=\frac{2k_\text{B}T}{\omega} \chi''(\omega).
\label{res_ClassicalFDT}
$$

Note that $S(\omega)=S(-\omega)$ on account of $\chi''(\omega)$ being odd. This result tells us that the fluctuations and response of our oscillator are related to each other. This is actually rather natural -- the fluctuations are a response to the thermal noise felt by the system. Since it is $\chi''(\omega)$ -- the dissipative part of the response -- that appears in \eqref{res_ClassicalFDT}, relations of this sort are called __fluctuation--dissipation relations__. We'll meet the quantum version next.

### Quantum Flucutations

Quantum mechanics provides another source of fluctuations. For a single (undamped) oscillator

$$
H = \frac{p^2}{2m} + \frac{1}{2}m\omega_0^2 y^2,
$$

we have the ground state fluctuations

$$
\bra{0} y^2 \ket{0} = \frac{1}{2m \omega_0},
$$

while at finite temperature

$$
\langle\langle y^2\rangle\rangle=\tr\left[\rho\, y^2\right] = \frac{\coth(\beta\omega_0/2)}{2m\omega_0}.
$$

where $\rho = e^{-\beta H}/Z$ is the equilibrium density matrix, and $Z=\tr[e^{-\beta H}]$ is the partition function. The double angular brackets $\langle\langle (\cdots)\rangle\rangle$ denote that we are taking quantum _and thermal_ expectations.

Now what about _time dependent fluctuations_? This is what was calculated in \eqref{res_power_final} for the classical damped oscillator. A natural candidate is

$$
\langle\langle y(t)y(0)\rangle\rangle,
$$

where $y(t)$ denotes the Heisenberg picture time evolution $y(t) = e^{iHt} y e^{-iHt}$. This gives for the _quantum_ noise spectrum

$$
S(\omega) = \int_{-\infty}^\infty \langle\langle y(t)y(0)\rangle\rangle e^{i\omega t}\,dt.
\label{res_QNoise}
$$

So far, this is a purely formal definition -- we have to figure out what it means. The first and most important thing to notice is that, since $y(0)$ and $y(t)$ do not commute with each other $\langle\langle y(t)y(0)\rangle\rangle\neq \langle\langle y(0)y(t)\rangle\rangle=\langle\langle y(-t)y(0)\rangle\rangle$. Hence

$$
S(\omega)\neq S(-\omega).
$$

Many of the properties of this function are most easily understood from a __spectral representation__, which is obtained by inserting a complete set of energy eigenstates between $x(0)$ and $x(t)$ in \eqref{res_QNoise}. This gives

$$
S(\omega) = 2\pi\sum_{m,n} \frac{e^{-\beta E_n}}{Z} \abs{\bra{n}y\ket{m}}^2 \delta(\omega-E_m-E_n).
\label{res_SSpectral}
$$

This expression is completely general, but already it is possible to see what is going on. The reason for the asymmetry in $S(\omega)$ is that the term with $\delta(\omega-E_m-E_n)$ is weighted by $e^{-\beta E_n}$, while the term with $\delta(\omega-E_n-E_m)$ has $e^{-\beta E_m}$. Thus we can say

$$
S(\omega) = S(-\omega) e^{\beta\omega}.
\label{res_NoiseAsym}
$$

<p class="message">
There seems to be room for disagreement about how to define $S(\omega)$. {% cite Chaikin:2000aa %} and {% cite Nozieres:1999aa %} have it this way, {% cite Nazarov:2013 %} have the energy axis inverted. It comes down to whether you want to think about energy going to or from the system (see later).
</p>

At zero temperature $\beta\to\infty$ and we can see that $S(\omega<0)=0$.

Let's evaluate \eqref{res_SSpectral} for the oscillator. The matrix elements are

$$
\bra{n}y\ket{m} = \frac{1}{\sqrt{2m\omega_0}}\begin{cases}
\sqrt{m+1} & \text{if } n=m+1 \\
\sqrt{m} & \text{if } n=m-1.
\end{cases}
$$

Giving

$$
\begin{align}
S(\omega)&=\frac{\pi}{m\omega_0} \sum_n \frac{e^{-\beta E_n}}{Z} \left[n\delta(\omega+\omega_0)+(n+1)\delta(\omega-\omega_0)\right]\nonumber\\
& = \frac{\pi}{m\omega_0}\left[n_\text{B}(\omega_0)\delta(\omega+\omega_0)+(n_\text{B}(\omega_0)+1)\delta(\omega-\omega_0)\right]
\label{res_QSHONoise}
\end{align}
$$

where

$$
n_\text{B}(\omega)\equiv \frac{1}{\exp\left(\beta\omega\right)-1},
$$

is the Bose distribution function. \eqref{res_QSHONoise} shows the predicted asymmetry between positive and negative frequencies. We can check that

$$
\int S(\omega)\frac{d\omega}{2\pi} = \langle\langle y^2\rangle\rangle= \frac{\coth(\beta\omega_0/2)}{2m\omega_0},
$$

as we found before.

Our discussion of the single oscillator can be generalized to a system of coupled oscillators, of which our damped spring is an example. Although we won't carry out the transformation explicitly, we could express the  $y(t)$ in terms of a system of normal modes as

$$
y(t) = \sum_k \left[c^{}_k \adop_k(t) + c_k^* \aop_k(t)\right],
\label{res_ymode}
$$

where the time evolution of the mode operators is

$$
\adop_k(t) = e^{i\omega_k t}\adop_k,\quad \aop_k(t) = e^{-i\omega_k t}\aop_k.
$$

Repeating the calculation of $S(\omega)$ gives

$$
\begin{align}
S(\omega)= 2\pi\sum_k \abs{c_k}^2\left[n_\text{B}(\omega_k)\delta(\omega+\omega_k)+(n_\text{B}(\omega_k)+1)\delta(\omega-\omega_k)\right].
\label{res_QSHONoiseGen}
\end{align}
$$

With a continuum of modes, as in the oscillator coupled to a string, $S(\omega)$ can have a smooth (not just $\delta$-function like) behaviour. Nevertheless, the basic relation \eqref{res_NoiseAsym} is still obeyed.

Now, we'll show that $S(\omega)$ is related to the _response_ of our quantum system, just as in the classical case. For a system of oscillators, finding the response is actually no harder than the classical case, as the Heisenberg equations of motion in the presence of a driving force are exactly the same as in the classical case. Thus the response is the same. In terms of the normal modes the Hamiltonian looks like

$$
H = \sum_k \omega_k \adop_k\aop_k - f(t)y,
$$

where $y$ is written in terms of the normal modes as in \eqref{res_ymode}. The equation of motion for the modes is

$$
\frac{d\aop_k}{dt} = -i\omega_k \aop_k +i c_k f(t),
$$

so that the response of the oscillator is

$$
\adop_k(\omega) = \frac{c_k}{\omega_k-\omega-i0} f(\omega).
$$

Note the imaginary infinitesimal in the denominator. This is a notational device to remind us that, even though the normal mode has no damping, a causal (retarded) response is analytic in the upper half plane of $\omega$. The response of $y(\omega)$ is then

$$
y(\omega) = \sum_k \abs{c_k}^2\left[\frac{1}{\omega_k-\omega-i0}+\frac{1}{\omega_k+\omega+i0}\right]f(\omega).
$$

Thus we have

$$
\chi(\omega) = \sum_k \abs{c_k}^2\left[\frac{1}{\omega_k-\omega-i0}+\frac{1}{\omega_k+\omega+i0}\right],
\label{res_chi_modes}
$$

but we also know the LHS from the classical calculation \eqref{res_chi_SHO}.

\eqref{res_QSHONoiseGen} and \eqref{res_chi_modes} are rather similar. We can get an explicit relation by using the formula

$$
\Im \frac{1}{x\mp i0} = \pm\pi\delta(x),
$$

which you can prove by allowing the infinitesimal to be finite, and then letting it go to zero. We can then show

$$
\chi''(\omega) = \pi\sum_k \abs{c_k}^2\delta(\omega_k-\omega),\quad \omega>0,
\label{res_Imchi_modes}
$$

with $\chi''(-\omega)=-\chi''(\omega)$. Comparing with the classical answer \eqref{res_chi_SHO} allows us to to find the $\abs{c_k}$ without having to go through the trouble of finding the normal modes explicitly (although we'd be using our knowledge of their density of states).

$S(\omega)$ and $\chi''(\omega)$ are then related by

$$
S(\omega) = 2\chi''(\omega)\left[n_\text{B}(\omega)+1\right].
\label{res_FDTAsym}
$$

This is a quantum fluctuation dissipation relation.

<p class="message">
Check that \eqref{res_FDTAsym} reduces to \eqref{res_ClassicalFDT} in the classical limit. It may help to (just this once) put $\hbar$ back in and then let it go to zero.
</p>


### Golden Rule and Dissipation

We argued for the classical damped oscillator -- actually our discussion is true more generally -- that $\Im\chi(\omega)$ is related to the dissipation of energy. Now we have found a relation between this quantity and our quantum noise spectrum $S(\omega)$. Can we see directly how $S(\omega)$ is connected to energy dissipation?

The key is to regard the driving force as a perturbation that can cause transition between energy eigenstates. The perturbation is

$
H_\text{pert} = - f(t)y,
$

with $f(t)=f_0\cos\omega t$. In lowest order perturbation theory, the system can make a transition either up or down in energy by $\omega$ The transition rates can be found from Fermi's golden rule

$$
\Gamma_{n\to m} = 2\pi \left(\frac{f_0}{2}\right)^2\abs{\bra{n}y\ket{m}}^2 \delta(\pm\omega+E_m-E_n).
$$

The total rate of transitions changing the energy of the system by $\omega$ can then be found by summing the rates, accounting for the probability $e^{-\beta E_n}/Z$ of finding the system initially in eigenstate $n$

$$
\Gamma(\omega) = S(\omega)\left(\frac{f_0}{2}\right)^2.
$$

Thus $S(\omega)$ measures the rate at which transitions _absorbing_ energy $\omega$ are occurring, and $S(-\omega)$ the corrsponding rate for emitting energy $\omega$. The asymmetry of $S(\omega)$ is then interpreted as an inequality between emission and absorption of radiation, which is of course most extreme in the ground state. This is -- eventually -- a clear physical interpretation of the quantum noise spectrum $S(\omega)$.

The rate of energy absorption is

$$
\omega\Gamma(\omega) = \omega S(\omega)\left(\frac{f_0}{2}\right)^2 = \frac{1}{2}\omega\chi''(\omega)\left[n_\text{B}(\omega)+1\right]f_0^2.
\label{res_absorb}
$$

Let's compare with our previous expression for the energy dissipated, \eqref{res_ClassDiss}. We see we have agreement for $n_\text{B}(\omega)\to 0$. This corresponds to the energy of the transition being much larger than the thermal energy $\hbar\omega\gg k_B T$.

## Linear Response: Formal Theory

Our long discussion of the oscillator has laid the ground for some general definitions. Firstly, how do we talk about linear response in a general (quantum) system?

### Kubo Formula

Suppose we want to determine how the expectation value of some obserable $A$ depends on some quantity $\lambda_t$, which appears (for small variations) linearly in the Hamiltonian

$$
H_t = H_0 - \lambda_t B.
$$

Recalling the oscillator, we call $B=-\frac{\partial H}{\partial \lambda}$ the __generalized force__, and $\lambda$ the __generalized displacement__. I'm writing the time dependence like this to distinguish it from the Heisenberg picture time evolution. We assume that $A$ has expectation value zero when $\lambda=0$: we can just define it that way if necessary.

Viewing the time evolution of the state of the system $\ket{\Psi(t)}$ in the interaction picture $\ket{\Psi_I(t)} \equiv e^{iH_0 t}\ket{\Psi(t)}$ gives

$$
i\frac{\partial \ket{\Psi_I(t)}}{\partial t} = -\lambda_t B_I(t) \ket{\Psi_I(t)},
$$

where $B_I(t) = e^{iH_0 t}B e^{-iH_0 t}$. The result of first order time dependent perturbation theory is the state $\ket{\Psi_I(t)}=\ket{\Psi(0)}+\ket{\Psi^{(1)}_I(t)}+\cdots$, with

$$
\ket{\Psi^{(1)}_I(t)} = i\int_0^t dt' \lambda_{t'} B_I(t') \ket{\Psi(0)}.
$$

The expectation value of $A$ is then

$$
\begin{align}
\bra{\Psi(t)}A\ket{\Psi(t)} &= \bra{\Psi_I(t)}A_I(t) \ket{\Psi_I(t)} \nonumber\\
&=\bra{\Psi(0)}A_I(t)\ket{\Psi(0)} +i \int_0^t dt' \lambda_{t'}\bra{\Psi(0)} \left[A_I(t),B_I(t')\right] \ket{\Psi(0)}.
\end{align}
$$

Mixed states can be treated by averaging over a distribution of quantum states -- or one can look at the equation of motion of the density matrix directly. The result allows us to identify the response function $\chi_{AB}(t)$ of $A$ due to a perturbation that couples to $B$ as

$$
\chi_{AB}(t) = i\langle\langle\left[A_I(t),B_I(0)\right]\rangle\rangle,\quad t>0.
\label{res_kubo}
$$

Normally we write $A(t)$ rather than $A_I(t)$, as this is the Heisenberg picture for the unperturbed problem. \eqref{res_kubo} is known as the __Kubo formula__. It expresses the response of a system in terms of the dynamics of the unperturbed system.

### Fluctuation Dissipation Theorem

The Kubo formula makes it clear that there is a connection between response functions and noise correlations. Let's find the connection in its most general form. We start from the correlation function

$$
S_{AB}(t) \equiv \langle\langle A_I(t)B_I(0)\rangle\rangle.
$$

Recalling that $$\langle\langle\cdots \rangle\rangle = \frac{1}{Z}\tr\left[e^{-\beta H}\cdots\right]$$, you should be able to show that

$$
S_{AB}(t) = S_{BA}(-t-i\beta).
$$

<p class="message">
Hint: use the cyclic property of the trace.
</p>

Fourier transforming, we arrive at

$$
S_{AB}(\omega) = e^{\beta\omega} S_{BA}(-\omega).
$$

We've met an example of this relation before, see \eqref{res_NoiseAsym}.

$\chi_{AB}(t)$ can be written in terms of the correlations as

$$
\chi_{AB}(t) = \begin{cases}
i\left[S_{AB}(t)-S_{BA}(-t)\right] & t>0\\
0 & t<0.
\end{cases}
$$

We write this as $\chi_{AB}(t) = i\theta(t)\left[S_{AB}(t)-S_{BA}(-t)\right]$, where $\theta(t)$ is the step function

$$
\theta(t)=\begin{cases}
1 & t\geq 0\\
0 & t<0
\end{cases}.
$$

$\chi_{AB}(\omega)$ can then be expressed as the convolution. The Fourier transform of the step function is

$$
\tilde\theta(\omega) = \frac{i}{\omega+i0},
$$

giving

$$
\begin{align}
\chi_{AB}(\omega)&= -\int \frac{d\omega'}{2\pi}\frac{S_{AB}(\omega')-S_{BA}(-\omega')}{\omega-\omega'+i0}\\
&=-\int \frac{d\omega'}{2\pi}\frac{S_{AB}(\omega')\left[1-e^{-\beta\omega'}\right]}{\omega-\omega'+i0}.
\label{res_Conv}
\end{align}
$$

To make sense of this formula, use the Kramers--Krönig relation \eqref{res_KK} to write

$$
\begin{align}
\chi_{AB}(\omega) &=\chi'(\omega) + i\chi''(\omega)\\
&= \cP \int_{-\infty}^\infty \frac{d\omega'}{\pi}\frac{\chi''(\omega')}{\omega'-\omega} + i\chi''(\omega)\\
&= \int_{-\infty}^\infty \frac{d\omega'}{\pi}\frac{\chi''(\omega')}{\omega'-\omega-i0},
\label{res_KKchi}
\end{align}
$$

where we have used the formula

$$
\frac{1}{x+i0} = \mathcal{P}\frac{1}{x} -i\pi\delta(x).
$$

Comparing \eqref{res_Conv} and \eqref{res_KKchi} gives

$$
S_{AB}(\omega) = 2\chi_{AB}''(\omega)\left[n_\text{B}(\omega)+1\right].
\label{res_FDTGen}
$$

This is the most general form of the quantum fluctuation dissipation relation, which we met before in the case of the oscilator, see \eqref{res_FDTAsym}.

### Spectral Representation

The quantites $\chi_{AB}(\omega)$ and $S_{AB}(\omega)$ have spectral representations in terms of the energy eigenstates and eigenvalues. For example,

$$
S_{AB}(\omega)  = 2\pi\sum_{m,n} \frac{e^{-\beta E_m}}{Z} \bra{m}A\ket{n}\bra{n}B\ket{m} \delta(\omega-E_n+E_m).
\label{res_SABSpectral}
$$

<p class="message">
Use the spectral representation to prove the fluctuation dissipation relation \eqref{res_FDTGen}.
</p>

The function $S_{AA}(\omega)$ can be interpreted in terms of the Fermi golden rule, as we saw in the case of the oscillator. Notice that $S_AA(\omega)>0$.

## Response of Matter

Let's now consider a response function typical of a many body system

### Density Response

Suppose a system is subject to a time dependent potential -- due to an electric field for example -- corresponding to a term in the Hamiltonian

$$
H_\text{pert} = \sum_{j=1}^N V(\br_i,t) = \int  V(\br,t)\rho(\br)\, d\br = \frac{1}{L^3}\sum_\bq V_\bq(t) \rho_{-\bq}.
$$

This perturbation couples to the density, and we ask how the density is affected by it. In a translationally invariant system

$$
\langle\langle \rho_\bq(t)\rangle\rangle = -\frac{1}{L^3} \int_{-\infty}^t  \chi^{\rho}_\bq(t-t') V_\bq(t)\,dt',
$$

where the density response function $\chi^\rho_\bq(t)$ is

$$
\chi_\rho(\bq,t) = i\langle\langle\left[\rho_\bq(t),\rho_{-\bq}(0)\right]\rangle\rangle.
\label{res_kubo_density}
$$


<p class="message">
What is the role of translational invariance?
</p>

The general theory described above applies here with $A=\rho_\bq$ and $B=\rho_{-\bq}$. Focusing on the case of zero temperature, we have the spectral representation of the correlation function

$$
S_\rho(\bq,\omega) = 2\pi\sum_{n}  \abs{\bra{0}\rho_\bq\ket{n}}^2 \delta(\omega-E_n+E_0),
\label{res_Sdef}
$$

where we have used $\rho_\bq^\dagger=\rho_{-\bq}^{}$. This quantity is called the __dynamical structure factor__, on account of its importance in scattering experiments. It gives the rate at which the system makes transitions that impart energy $\omega$ and momentum  $\bq$ in the presence of the perturbation $H_\text{pert}$.

The integral

$$
S_\rho(\bq) = \int S_\rho(\bq,\omega) \frac{d\omega}{2\pi} = \langle\langle\rho_\bq\rho_{-\bq}\rangle\rangle
$$

is usually called the __static structure factor__, which is a bit of a strange name given that it contains all frequencies. A better name would perhaps be _equal time_ structure factor. $S_\rho(\bq)$ quantifies the density fluctuations in a system. It is the Fourier transform of the quantity $\rho_2(\br_1,\br_2)$ considered in [Lecture 1]({{ site.baseurl }}/lectures/ManyBodyWavefunctions/).

<p class="message">
Some texts (e.g {% cite Nozieres:1999aa %}) omit the $2\pi$ in the definition \eqref{res_Sdef}. I prefer to keep it so that $S_\rho(\bq,t) = \langle\langle \rho_\bq(t)\rho_{-\bq}(0)\rangle\rangle$.
</p>

### Sum rules

$S_\rho(\bq,\omega)$ obeys certain relations irrespective of the particular model under consideration. Since these usually involve integrals over the whole range of energy, they are known as __sum rules__. By constraining the form of $S_\rho(\bq,\omega)$, sum rules may be used to prove general statements or check the validity of approximations.

We start with the __f-sum rule__. This follows from considering the double commutator $[[H,\rho_\bq],\rho_{-\bq}]$. In a system where the interaction depends only on density, the interaction commutes with $\rho_\bq$, so the commutator is determined by the kinetic energy

$$
T = -\frac{1}{2m}\sum_{j=1}^N \nabla_i^2.
$$

(We could also consider lattice models, with their own kinetic energy, but we'll stick with the simplest version). Taking $\rho_\bq =\sum_{j=1}^N e^{-i\bq\cdot\br_j}$, we find

$$
[[H,\rho_\bq],\rho_{-\bq}] = -\frac{N\bq^2}{m}.
$$

The left hand side can be written in terms of $S_\rho(\bq,\omega)$, giving the f-sum rule

$$
\int_{-\infty}^\infty \omega S(\bq,\omega) \frac{d\omega}{2\pi}= \frac{N\bq^2}{2m}.
$$

Next we discuss the __compressibility sum rule__. The compressibility is defined in terms of the volume $V$ and pressure $p$ as

$$
\kappa=-\frac{1}{V}\frac{\partial V}{\partial p}.
$$

At zero temperature, the pressure is

$$
p = -\frac{\partial E_0}{\partial V},
$$

where $E_0$ is the ground state energy. Since energy is an extensive quentity we expect $E_0 = V \epsilon(\rho)$, where $\rho = N/V$ is the density, and $\epsilon(\rho)$ the energy per unit volume. Then

$$
\kappa^{-1} = \rho^2 e''(\rho).
$$

Recall that the chemical potential $\mu = \frac{\partial E_0}{\partial N}=\epsilon'(\rho)$. Then

$$
\kappa = \rho^{-2} \frac{\partial \rho}{\partial \mu} = \frac{1}{\rho N}\chi'(0,0).  
$$

Now $\chi'(\bq,\omega)$ can be written in terms of $\chi''(\bq,\omega)$ (Kramers--Krönig) and $\chi''(\bq,\omega)$ is related to $S_\rho(\bq,\omega)$. This gives the compressibility sum rule at zero temperature

$$
\lim_{\bq\to 0}\int_0^\infty \frac{S(\bq,\omega)}{\omega}\frac{d\omega}{2\pi} = \frac{N\rho\kappa}{2}.
$$

<p class="message">
Why do we need $\lim_{\bq\to 0}$?
</p>

The compressibility sum rule is often written in terms of the speed of sound $c = (\kappa m \rho)^{-1/2}$ as

$$
\lim_{\bq\to 0}\int_0^\infty \frac{S(\bq,\omega)}{\omega}\frac{d\omega}{2\pi} = \frac{N}{2mc^2}.
$$

Let's consider a simple example. Some systems, notably Bose gases, have a zero temperature dynamical structure factor that at low momentum has the following approximate form

$$
S_\rho(\bq,\omega) \sim 2\pi S_\rho(\bq) \delta(\omega - \omega(\bq)),
\label{res_SMA}
$$

where $\omega(\bq)$ is the dispersion relation of the collective excitations. In reality, the $\delta$-function is never infinitely sharp, but has a finite width on account of interactions between excitations causing scattering and / or decay. In the approximation \eqref{res_SMA}, often known as the __single mode approximation__, the f-sum rule tells us that

$$
S_\rho(\bq) = \frac{N\bq^2}{2m\omega(\bq)}.
$$

Let's consider two important cases. First, suppose $\omega(\bq) = \frac{\bq^2}{2m}$. This would be the case in a Bose condensate with strictly no interactions, so that excitations out of the condensate are free particles. Then

$$
S_\rho(\bq) = N.
$$

This result corresponds to completely uncorrelated particle positions (Poisson statistics).

Second, suppose $\omega(\bq) = c\abs{\bq}$ i.e. linear dispersion with finite speed of sound. Then

$$
S_\rho(\bq) = \frac{N\abs{\bq}}{2mc}.
$$

In this case the density fluctuations vanish as the wavevector goes to zero, indicating long-range correlations between positions in the ground state.

<p class="message">
Check the compressibility sum rule in these two cases.
</p>

References
----------

{% bibliography --cited %}
