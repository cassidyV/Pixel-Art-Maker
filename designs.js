// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var sizePicker, pixelCanvas, inputHeight, inputWeight, colorPicker


$('#pixelCanvas').submit(function makeGrid(grid) {
    var row= $('inputHeight').val();
    var cols=$('inputWidth').val();
    
    
            for (var i=1;; i<=row; i++){
                $('table').append('<tr></tr>');
}   
        
            for(var j=1; j<=cols; j++){
                 $('table').append('<td></td>');                
}    

})

grid.preventDefault();


var inputValue = $(inputSelector).val();

$(inputSelector).change(function(event) {
    inputValue = $(this).val();
});

function makeGrid() {

$('#bgColorPicker').on('change', function(){
    let bgColor = $('#bgColorPicker').val()
    $('body').css('background', bgColor);
    $('#pixelCanvas').css('background', bgColor);
  })
}
