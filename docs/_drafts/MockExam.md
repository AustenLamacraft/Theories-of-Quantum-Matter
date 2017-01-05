---
layout: page
title: Mock Exam
author: Austen Lamacraft
---

Note the real exam will have __three__ questions, from which you must chose __two__.

## Question 1

In terms of boson operators satisfying $[\aop_\bk,\adop_{\bk'}]=\delta_{\bk,\bk'}$, Bogoliubov's Hamiltonian for the Bose gas takes the form

$$
\begin{align}
H_\text{pair} &= \sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk  +\frac{U_0}{2V}N(N-1) \nonumber\\ &\quad+\frac{U_0n_0}{2}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk} + \aop_{\bk}\aop_{-\bk}+2\adop_\bk\aop_\bk\right],
\end{align}
$$

where $n_0 = N_0/V$ is the density of particles in the zero momentum state, $\epsilon(\bk)=\bk^2/2m$, and $U_0$ is the strength of the interaction.

* Show that the Hamiltonian can be diagonalized by a Bogoliubov transformation

  $$
  \bop_\bp=\aop_\bp\cosh\kappa_\bp+\adop_{-\bp}\sinh\kappa_\bp,
  $$

  where you should find the form of $\kappa_\bp$ and the Bogoliubov dispersion relation $E(\bp)$.

* Find an expression for expectation value of the number of particles not in the condensate in terms of the mean thermal occupation of the Bogoliubov modes

  $$
  n_\text{B}(\bp) = \frac{1}{e^{\beta E(\bp)}-1},
  $$

  where $\beta = 1/k_\text{B}T$. Leave your answer as a sum over momenta.

* Show that the _variance_ of the number of particles not in the condensate is

  $$
  \begin{multline}
    \text{Var}\, N_{\text{nc}}=\sum_{\bp\neq 0}n_\text{B}(\bp)(n_\text{B}(\bp)+1)\left(6\cosh^{2}\kappa_{\bp}\sinh^{2}\kappa_{\bp}+\cosh^{4}\kappa_{\bp}+\sinh^{4}\kappa_{\bp}\right)\\+2\cosh^{2}\kappa_{\bp}\sinh^{2}\kappa_{\bp}
  \end{multline}
  $$

  where you should use the property $\langle n^2\_\bp\rangle = 2n_\text{B}^2(\bp)+n_\text{B}(\bp)$ of the Boltzmann distribution $P(n\_\bp)\propto e^{-\beta E(\bp) n\_\bp}$.

* The momentum sum is singular in the infrared. Show that in three dimensions the variance scales like $\text{Var}\, N\_{\text{nc}}=\alpha V^{4/3}$ as the volume $V\to \infty$, and give an expression for the coefficient $\alpha$ in terms of a momentum sum.

* Consider the case of zero temperature in two dimensions. How does the variance scale with system size in this case?


## Question 2


* Show that the fundamental commutator of a boson field

  $$
  [\pop(x),\pdop(y)]=\delta(x-y)
  $$

  is reproduced if

  $$
  \pop(x)=e^{i\theta(x)}\sqrt{n(x)},
  $$

  and $n(x)$ and $\theta(x)$ satisfy

  $$
  \left[n(x),\theta(y)\right]=i\delta(x-y).
  $$

* An approximate quadratic Hamiltonian describing a gas of interacting bosons of density $n_0$ is

  $$
  H = \frac{1}{2}\int dx\left[n_0(\partial_x\theta)^2+U_0(\rho-n_0)^2\right].
  $$

  Find the spectrum by writing the Hamiltonian in terms of the Fourier modes

  $$
  \begin{split}
	\rho(x) = \frac{1}{\sqrt{L}}\sum_p \rho_p e^{ipx}\\
	\theta(x) = \frac{1}{\sqrt{L}}\sum_p \theta_p e^{ipx},
  \end{split}
  $$

  with $p = 2\pi n/L$ for $n$ integer, $\rho_p^\dagger=\rho_{-p}$, and $\theta_p^\dagger=\theta_{-p}$.


* Show that the ground state wavefunction may be written

  $$
  \exp\left[-\sum_{q\neq 0}\frac{mc}{2n_0|q|}\rho_{q}\rho_{-q}\right],
  $$

  where you should give an expression for the speed of sound $c$.

* Convert the result into a wavefunction for $N$ particles by using the expression for $\rho_{q}$ in terms of the particle coordinates

  $$
  \rho_{q}=\sum_{j=1}^{N}e^{-iqx_j}.
  $$

* For what value of the parameter $K\equiv \frac{\pi n_0}{mc}$ is this system equivalent to a system of free fermions? Why?
