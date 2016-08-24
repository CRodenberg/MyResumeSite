var Hobbies = {};

Hobbies.SetTab = function(tab){
    jQuery('#divSports').hide();
    jQuery('#divMovies').hide();
    jQuery('#divBooks').hide();
    jQuery('#divGaming').hide();
    jQuery('#divRunning').hide();

    jQuery('#liBooks').removeClass('active');
    jQuery('#liRunning').removeClass('active');
    jQuery('#liGaming').removeClass('active');
    jQuery('#liMovies').removeClass('active');
    jQuery('#liSports').removeClass('active');

    if (tab === 'Books') {
        jQuery('#divBooks').show();
        jQuery('#liBooks').addClass ('active');
    } else if (tab === 'Gaming') {
        jQuery('#divGaming').show();
        jQuery('#liGaming').addClass ('active');
    } else if (tab === 'Sports') {
        jQuery('#divSports').show();
        jQuery('#liSports').addClass ('active');
    } else if (tab === 'Movies') {
        jQuery('#divMovies').show();
        jQuery('#liMovies').addClass ('active');
    } else if (tab === 'Running') {
        jQuery('#divRunning').show();
        jQuery('#liRunning').addClass ('active');
    }
}