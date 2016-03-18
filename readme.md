#ARBOR-service
![Drupal8](/images/drupal8.png) A Drupal8 theme for Joey. A tree care and gardening service.

##Structure
![Screenshot](screenshot.png)  

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

###Block pagetitle
Deze via de node.html.twig uitgeschakeld, door de if structuur ```if not page``` opzij te zetten.

###Block tabs
Ook enkel zichtbaar voor de role administrator.

###SASS
![SASS logo](/images/sass.png)  
De SMACSS structuur aangehouden, en voorbeeld op github om dit bij een volgend project te hergebruiken 
https://github.com/illutek/sass-directory

####SMACSS
![SMACSS logo](/images/SMACSS.jpg)  
https://www.drupal.org/taxonomy/term/40340

####BEM
![BEM logo](/images/bem-logo.jpg)  
Alle css class in de BEM format
http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/

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
Alle opgedeeld in verschillende files onder de directory 'state'
  
####Page.html.twig
Veel vuldig gebruik gemaakt van includes, dit om bij een volgend project een aantal dingen gemakkelijk te hergebruiken.

#### Inhoudstypes
'trees' - alle inhoud over boomverzorging,  hierdoor een extra class aan de body tag nl. 'page-node-type-trees'
één extra scss bestand '_leftSideTrees.scss' zorgt ervoor dat zolang de bezoeker op deze boomverzorging pagina's
vertoefd het submenu trees niet terug dichtklapt.


####Partials
Partials is een eigen iets, plaats daar verschillende onderdelen van de page.html.twig om deze compact/leesbaar/modulair 
te houden.  
Het include op de page.html.twig van een partial met volgende code  

```{% include directory ~ '/templates/partials/contact_data.inc.twig' %}```


###Een aantal opmerkingen
####Include van google fonts
In arbor.libraries.yml de link naar google fonts  
```
'//fonts.googleapis.com/css?family=Rubik:400,500,900': { type: external }  
'//fonts.googleapis.com/css?family=Open+Sans': { type: external }  

https://fonts.googleapis.com/css?family=Rubik:400,500,900: { type: external }  
https://fonts.googleapis.com/css?family=Open+Sans: { type: external }  
```
https://ffwagency.com/blog/managing-css-and-javascript-files-drupal-8-libraries  

Allebei methodes geven het zelfde resultaat

Oproep font 'Open sans' verhuisd naar arbor.theme om de opmerking bij google page speedtest
terwille te zijn, zonder resultaat.
'Uw pagina heeft 5 blokkerende CSS-bronnen. Dit veroorzaakt vertraging bij het weergeven van uw pagina.'  

```
/**
 * Implements hook_css_alter().
 */
function arbor_css_alter(&$css) {
    // Add CDN Google fonts.
    $googlefonts = '//fonts.googleapis.com/css?family=Open+Sans';
    $css[$googlefonts] = array(
        'data' => $googlefonts,
        'type' => 'external',
        'every_page' => TRUE,
        'media' => 'all',
        'preprocess' => FALSE,
        'group' => CSS_AGGREGATE_THEME,
        'browsers' => array('IE' => TRUE, '!IE' => TRUE),
        'weight' => 2,
    );
}
```











