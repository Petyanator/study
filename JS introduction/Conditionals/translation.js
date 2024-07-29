// Date: 07/16/2024
// By: Pe Te El
// Translate your week day
let wd = prompt("Type a day of the week").trim().toLowerCase();
let translation;
switch (wd) {
    case 'monday':
        translation = 'Lunes';
        break;
    case 'tuesday':
        translation = 'Martes';
        break;
    case 'wednesday':
        translation = 'Miércoles';
        break;
    case 'thursday':
        translation = 'Jueves';
        break;
    case 'friday':
        translation = 'Viernes';
        break;
    case 'saturday':
        translation = 'Sábado';
        break;
    case 'sunday':
        translation = 'Domingo';
        break;
    default:
        translation = "Wrong word";
}

alert(translation);