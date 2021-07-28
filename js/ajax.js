$(document).ready(function() {


    // Read selected option
    $('#prueba').click(function() {
        let opcion = $('.custom-select option:selected').text();
        let valor = $('.custom-select').val();
        let input = document.getElementById("inputGroupSelect02").value;

        console.log("valor : " + valor + ", opcion : " + opcion, "input : " + input);

    });
});