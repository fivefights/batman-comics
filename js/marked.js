jQuery(document).ready(function() {
    jQuery('button').click(function() {
        //make sure the click is being heard
        console.log('clicked!')

        //add or remove bat signal image on click
        jQuery(this).toggleClass('marked');

        //if has class 'marked', toggle button text
        if (jQuery('button').hasClass('marked')) {
            jQuery(this).empty();
            jQuery(this).append('Read It!<i class="material-icons left">bookmark</i>');
        }
        // else (jQuery('button').text('Mark Read'));
        else {
        if (!jQuery('button').hasClass('marked')) {
            jQuery(this).empty();
            (jQuery(this).append('mark read<i class="material-icons left">bookmark_outline</i>'));
            }
        }

        //prevent page from jumping on click
        event.preventDefault();

    });
});
