
/**
 * Jquery Knob for visitor element
 */
$(function() {
    $(".dial").knob({
        min: 0,
        max: 100,
        readOnly: true,
        thickness: .3,
        width: '170',
        fgColor: '#1fbba6',
        bgColor: '#fff',
        inputColor: '#fff',
        cursor: false
    });

    $(".dial-inner").knob({
        min: 0,
        max: 1,
        readOnly: true,
        displayInput: false,
        thickness: 1,
        width: '150',
        fgColor: '#189382',
        cursor: false
    });
});