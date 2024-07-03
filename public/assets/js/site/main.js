$(document).ready(function() {
    $('.delete-serie').on('click', function(e){
        e.preventDefault();
        if(confirm('Are you sure that you want to delete this movie?')){
            $(this).closest('.form-delete').submit();
        }
    })

    $('.delete-genre').on('click', function(e){
        e.preventDefault();
        if(confirm('Are you sure that you want to delete this genre?')){
            $(this).closest('.form-delete-genre').submit();
        }
    });
});