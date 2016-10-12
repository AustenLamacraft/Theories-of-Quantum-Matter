#!/bin/bash
#cron this script to update site
git clone https://github.com/AustenLamacraft/Theories-of-Quantum-Matter.git
rm -r /replicated/www/Theories-of-Quantum-Matter/docroot/docs/*
mv Theories-of-Quantum-Matter/docs/_site/* /replicated/www/Theories-of-Quantum-Matter/docroot/docs/
rm -r Theories-of-Quantum-Matter
