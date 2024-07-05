$(document).ready(function() {
    $('.delete-serie').on('click', function(e){
        e.preventDefault();
        if(confirm('Are you sure that you want to delete this movie?')){
            $(this).closest('.form-delete').submit();
        }
    });

    $('.delete-genre').on('click', function(e){
        e.preventDefault();
        if(confirm('Are you sure that you want to delete this genre?')){
            $(this).closest('.form-delete-genre').submit();
        }
    });

    $('.save').on('click', function(e){
        e.preventDefault();
        const name = $('.name').val();
        const image = $('.image').val();
        const video = $('.video').val();
        const genres = $('.f-select').val();

        if(name === '' || image === '' || video === '' || genres == 0 ){
            $('.name').addClass('validate').attr('placeholder', 'you must enter a movie name');
            $('.image').addClass('validate').attr('placeholder', 'you must enter a image');
            $('.video').addClass('validate').attr('placeholder', 'you must enter a video');
            $('.f-select').addClass('validate');

        }else{
            $(this).closest('.form-save').submit();
        }
    });

    $('.save-genre').on('click', function(e){
        e.preventDefault();
        const name = $('.name').val();
        console.log(name);
        if(name === ''){
            $('.name').addClass('validate').attr('placeholder', 'you must enter a genre');
        }else{
            $('.name').addClass('validate-success');
            $(this).closest('.form-genres').submit();
        }
    });

    $('.search-btn').on('click', function(e){
        e.preventDefault();
        const name = $('.search-name').val();
        if(name === ''){
            $('.search-name').addClass('validate').attr('placeholder', 'you must enter a name');
        }else{
            $('.search-name').addClass('validate-success');
            $(this).closest('.form-search').submit();
        }
    });

    $('.genre-btn').on('click', function(e){
        e.preventDefault();
        const value = $('.genre-select').val();
        if(value == 0){
            $('.genre-select').addClass('validate').attr('placeholder', 'you must enter a name');
        }else{
            $('.genre-select').addClass('validate-success');
            $(this).closest('.form-search').submit();
        }
    });

});