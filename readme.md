#ARBOR-service
A Drupal8 theme for Joey. A tree care and gardening service.

##Structure
Splitscreen layout voor de desktop versie, voor de mobile versie wordt enkel de rechterkant getoond.

###Menu
Het beperkte menu op het linkerdeel is geen Drupal menu, het onderste item dient ook enkel om het submenu (bomen)
te tonen, dit schuifsysteem enkel met CSS, een tutorial op https://github.com/illutek/SlideOutNavigation 

###Bomenpagina's
De sidebar (submenu bomen) zal altijd zichtbaar moeten blijven, dus beste manier is om een aparte page aan te maken 
page--bomen.topl.php bijvoorbeeld (page--bomen.html.twig), dit hebben we niet gedaan
Een extra class toegevoegd aan left-fixed-container, nl. trees op de bomen html pagina's, met een extra 
_leftSideTrees.scss bestand zorgen dat de sidebare steeds zichtbaar is, dit via de extra class dat de pagina meekrijgt
via het inhoudstype 'trees' (class 'page-node-type-trees')

####Block pagetitle
Deze via de node.html.twig uitgeschakeld, door de if structuur ´´´if not page´´´opzij te zetten.

####Block tabs
Ook enkel zichtbaar voor de role administrator.

####SASS
De smacss structuur aangehouden, op github om dit bij een volgend project te hergebruiken 
https://github.com/illutek/sass-directory

####Templates
Ook bij de templates een directory aangehouden  
- templates
  - block
  - content
  - field
  - layout
  - misc
  - navigation
  - partials
  - user
  - views
  
####Mediaquery's
  
  
####Page.html.twig
Veel vuldig gebruik gemaakt van includes, dit om bij een volgend project een aantal dingen gemakkelijk te hergebruiken.

#### Inhoudstypes
trees - alle inhoud over boomverzorging,  hierdoor een extra class aan de body tag nl. 'page-node-type-trees'
één extra scss bestand '_leftSideTrees.scss' zorgt ervoor dat zolang de bezoeker op deze boomverzorging pagina's
vertoefd het submenu trees niet terug dichtklapt.


####Partials
Partials is een eigen iets, plaats daar verschillende onderdelen van de page.html.twig om deze compact/leesbaar/modulair 
te houden.  
Het include op de page.html.twig van een partial met volgende code
´´´{% include directory ~ '/templates/partials/contact_data.inc.twig' %}´´´  








