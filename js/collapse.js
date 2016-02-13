/**
 * Created by stefan on 4/10/2015.
 * http://stackoverflow.com/questions/16680543/hide-twitter-bootstrap-nav-collapse-on-click
 * It's best practice to wrap your code in a closure. A closure is nothing more
 * than a function that helps limit the scope of variables so you don't
 * accidentally overwrite global variables.
 * https://www.drupal.org/node/171213
 *
 * Volgende $(this).find toevoegen aan regel 19 om ervoor te zorgen dat het click event enkel van
 * toepassing is op het naviagatie menu, hier in dit geval niet nodig omdat er op deze
 * pagina geen enkele andere tool gebruik maakt van het click event
 * $(this).find(".navbar-toggle").trigger( "click" );
 */

jQuery(document).ready(function($) {
    //navigation collapse after click on menu item
    $('.nav a').on('click', function(){
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });

    $("body").click(function(event) {
        // only do this if navigation is visible, otherwise you see jump in
        // navigation while collapse() is called
        if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
            $('.navbar-collapse').collapse('toggle');
        }
    });
});