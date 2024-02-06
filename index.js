
let cleave = new Cleave('.text1', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        // update UI ...
    }
});

let cleave_1 = new Cleave('.data_1', {
    date: true,
    delimiter: '-',
    datePattern: ['m', 'd']
});

let cleave_2 = new Cleave('.data_2', {
    date: true,
    // delimiter: '-',
    datePattern: ['Y'] 
});


$(document).ready(function () {

    $('.kod').mask("999");

      $('.text2, .kod').on('blur', function () {
        validateForm();
    });
    function validateForm() {
        if ($('.text1').val() === '' || $('.text2').val() === '' || $('.data_1').val() === '' || $('.data_2').val() === '' || $('.kod').val() === '') {
            console.log('Заполните все поля');
        }
        else {
            console.log('Поля формы успешно заполнены');
            $('.text1, .text2, .data_1, .data_2, .kod').attr('disabled', 'disabled');
        }
    }
});


