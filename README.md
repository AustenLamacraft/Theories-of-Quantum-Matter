# Theories of Quantum Matter

Material for a Part III Physics course at the University of Cambridge, running in Michaelmas 2016.

1. `docs` contains the files for the Jekyll site, currently living [here](http://tqm.courses.phy.cam.ac.uk/docs/).

2. `notebooks` contains some Jupyter notebooks used to produce some of the figures.

## To Do

1. Background charge density in Jellium lecture handled correctly?

1. Improve discussion of fractional statistics

1. Question on condensate fluctuations (essentially in my atoms notes)

1. Sawada for plasmons

1. Question on Majumdar--Ghosh

1. Luttinger model: density matrix of left movers when right movers traced out.

1. Structure factor from scattering of a particle from density fluctuations.

1. Issue of $\sqrt{n(x)}e^{i\theta(x)}$ vs. $e^{i\theta(x)}\sqrt{n(x)}$.

1. Comment on Lieb--Liniger

 >In (7) we defined $\theta$ (after taking the log) $$\theta(k) = 2 \mathrm{arccot}(k/c)$$ which is the physical phase shift upon scattering. In Lieb-Liniger's paper, however, $$\theta(k) = -2 \arctan(k/c)$$ which is more by $\pi$ than our definition for negative $k$ and less by $\pi$ for positive ones.
 There are two issues with this:
 <ol>
 <li>In (24), $I_j$ must be an integer no matter what with our definitions, since it's a direct consequence of periodic BC. In Lieb-Liniger's paper, the half-integer $I$'s for even $N$ are due to the $\pi$'s defined away; in fact they remark that the impenetrable limit of an even number of bosons is linked to free fermions with antiperiodic BC (footnote 6 in the paper).</li>
 <li>The argument in the paper for $I$'s all being different relies on the fact that their definition of $\theta(k)$ decreases monotonically for all $k$ (eq. (2.25) in the paper). This is not true for our definition (it jumps from $-\pi$ at $k=0-$ to $+\pi$ at $k=0+$, so there is no good reason why $I$'s in our treatment are all different.</li>
 </ol>
 This could be fixed by changing over completely to Lieb-Liniger's definition which is not as intuitive as keeping $\theta$ the physical scattering phase; or by defining $\theta(k)$ on the interval $[0,2\pi]$ so that it decreases monotonically: this saves Lieb-Liniger's argument for different $I$'s, but they will change to (presumably negative) integers and it's not fully intuitive either. In any case, the argument used to get half-integer $I$ for even $N$ is wrong.
 The continuum limit derivations depend only on $\theta'(k)$ which goes unaffected, so that part should be fine, although the $\pi$ in (39) and (42) may have something to do with this.
