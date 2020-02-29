function size_calculate(radius) {
    let size = radius*radius*3.14;
    return size;
}

function perimeter_calculate(radius) {
    let perimeter=2*3.14*radius;
    return perimeter;
}

let input_radius=parseInt(prompt('Nhap vao ban kinh hinh tron'));
let S = size_calculate(input_radius);
let P = perimeter_calculate(input_radius);

alert('Dien tich Hinh tron la :'+S+' . Chu vi Hinh tron la :'+P);