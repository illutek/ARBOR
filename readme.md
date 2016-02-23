#ARBOR-service
A Drupal8 theme for Joey. A tree care and gardening service.

##Structure
On the index page two containers , one with the desktop environment and another to the 
mobile version, 'm not sure if this is the best solution.  
With media queries switch between the two containers


###Bomenpagina's
De sidebar zal altijd zichtbaar moeten blijven, dus beste manier is om een aparte page aan te maken page--bomen.topl.php
bijvoorbeeld (page--bomen.html.twig)
Een extra class toegevoegd aan left-fixed-container, nl. trees op de bomen html pagina's, met een extra 
_leftSideTrees.scss bestand zorgen dat de sidebare steeds zichtbaar is.





