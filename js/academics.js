var Academics = {};

Academics.SetTab = function(tab){
	 jQuery('#divClasses').hide();
        jQuery('#divJobs').hide();
        jQuery('#divBooks').hide();

        jQuery('#liBooks').removeClass('active');
        jQuery('#liJobs').removeClass('active');
        jQuery('#liClasses').removeClass('active');

        if (tab === 'Books') {
            jQuery('#divBooks').show();
            jQuery('#liBooks').addClass ('active');
        } else if (tab === 'Jobs') {
            jQuery('#divJobs').show();
            jQuery('#liJobs').addClass ('active');
        } else if (tab === 'Classes') {
            jQuery('#divClasses').show();
            jQuery('#liClasses').addClass ('active');
        }
}