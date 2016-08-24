var Running = {};

Running.SetTab = function(tab){
    jQuery('#divHS').hide();
    jQuery('#divCollege').hide();

    jQuery('#liHS').removeClass('active');
    jQuery('#liCollege').removeClass('active');

    if (tab === 'High') {
        jQuery('#divHS').show();
        jQuery('#liHS').addClass ('active');
    } else if (tab === 'College') {
        jQuery('#divCollege').show();
        jQuery('#liCollege').addClass ('active');
    }
}