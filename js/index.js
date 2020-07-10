$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle ="popover"]').popover();
    $('.carousel').carousel({interval: 2000});

    $('#comprarModal').on('show.bs.modal', function (e) {
        console.log("se muestra modal");
        $('#comprarBtn').removeClass('btn-primary');
        $('#comprarBtn').addClass('btn-success');
        $('#comprarBtn').prop('disabled', true);
        
    })
    $('#comprarModal').on('shown.bs.modal', function (e) {
        console.log("se mostró modal");
    })
    $('#comprarModal').on('hide.bs.modal', function (e) {
        console.log("se oculta modal");
    })
    $('#comprarModal').on('hidden.bs.modal', function (e) {
        console.log("se ocultó modal");
        $('#comprarBtn').removeClass('btn-success');
        $('#comprarBtn').addClass('btn-primary');
        $('#comprarBtn').prop('disabled', false);
    })
});