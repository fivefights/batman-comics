jQuery(document).ready(function() {
    jQuery('button').click(function() {
        //make sure the click is being heard
        console.log('clicked2!')

        //add or remove bat signal image on click
        //jQuery(this).toggleClass('marked');

        //if has class 'marked', toggle button text
        if (!jQuery(this).hasClass('marked')) {
            jQuery(this).addClass('marked');
            jQuery(this).empty();
            jQuery(this).append('Read It!<i class="material-icons left">bookmark</i>');
        }
        // else (jQuery('button').text('Mark Read'));
        else {
            jQuery(this).removeClass('marked');

            jQuery(this).empty();
            jQuery(this).append('mark read<i class="material-icons left">bookmark_outline</i>');
        }

        //prevent page from jumping on click
        event.preventDefault();

    });
});
