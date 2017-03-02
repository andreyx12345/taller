$(document).ready(function() {

    $('select').material_select();


    $('.datepicker').pickadate({
     selectMonths: true, // Creates a dropdown to control month
     selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    var picker = new CP(document.querySelector('p[id="colorPickerId"]'));
    picker.on("change", function(color) {
        this.target.value = '#' + color;
        $('#colorPickerId').css("background-color",'#'+color);
        $('#colorPickerValId').val('#' + color);
    });
});
