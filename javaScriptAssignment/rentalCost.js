function rentedCost(days,carType){
    switch (carType) {
        case 'luxury':
            return days * 20000;      
            break;
        case 'midsize':
            return days * 10000;      
            break;
        case 'economy':
            return days * 4000;      
            break;
    
        default:
            return 'Invalid type';
            break;
    }
}
console.log(rentedCost(2,'luxury'));