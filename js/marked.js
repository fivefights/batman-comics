// this is probably where local storage should be used

jQuery(document).ready(function() {
    jQuery('button').click(function() {
        //make sure click event is being heard
        console.log('clicked!')
        //if has class 'marked', turn on green button background and change text
        if (!jQuery(this).hasClass('marked')) {
            jQuery(this).addClass('marked');
            jQuery(this).empty();
            jQuery(this).append('Read It!<i class="material-icons left">bookmark</i>');
        }
        //class does not have class 'marked', turn off green button background and change text
        else {
            jQuery(this).removeClass('marked');
            jQuery(this).empty();
            jQuery(this).append('mark read<i class="material-icons left">bookmark_outline</i>');
        }
        //prevent page from jumping on click
        event.preventDefault();
    });
});
