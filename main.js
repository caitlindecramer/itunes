$('#youtube_modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var artiest = button.data('titel') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var link = button.data('youtube');
    var modal = $(this);
    modal.find('.modal-title').text(artiest);
    document.getElementById('youtube').src=link;
    })


    jQuery('#youtube_modal').on('hidden.bs.modal', function (e) {
        // do something...
        jQuery('#youtube_modal iframe').attr("src", jQuery("#youtube_modal  iframe").attr("src"));
    });