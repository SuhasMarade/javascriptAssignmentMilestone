let color1 = 'yellow';
let color2 = 'red';
switch (color1) {
    case 'red':
        if(color2 == 'blue'){
            console.log('violet')
        }
        else if(color2 == 'yellow'){
            console.log('orange')
        }
        else{
            console.log('Invalid Color Combination');
        }
        break;
    case 'blue':
        if(color2 == 'yellow'){
            console.log('green')
        }
        else if(color2 == 'red'){
            console.log('violet');
        }
        else{
            console.log('Invalid Color Combination');
        }
        
        break;
    case 'yellow':
        if(color2 == 'blue'){
            console.log('green')
        }
        else if(color2 == 'red'){
            console.log('orange');
        }
        else{
            console.log('Invalid Color Combination');
        }
        
        break;

    default:
        console.log('Invalid Color Combination')
        break;
}