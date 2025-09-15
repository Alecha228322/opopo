const st1 = document.getElementById('stor1');
const st2 = document.getElementById('stor2');
const st3 = document.getElementById('stor3');
const btn = document.getElementById('knopka');
const resultat = document.getElementById('rez');
const error = document.getElementById('err');

function triygolnic() {
    let a = Number(st1.value);
    let b = Number(st2.value);
    let c = Number(st3.value);

    error.textContent = '';
    resultat.textContent = '';

    if (st1.value === '' || st2.value === '' || st3.value === '') {
        error.textContent = 'Введите числовые значения.';
    } else if (isNaN(a) || isNaN(b) || isNaN(c)) {
        error.textContent = 'Введите числовые значения.';
    } else if (a <= 0 || b <= 0 || c <= 0) {
        error.textContent = 'Стороны должны быть положительными числами.';
    } else if (a + b <= c || a + c <= b || b + c <= a) {
        error.textContent = 'С указанными сторонами треугольник не существует.';
    } else {
        error.textContent = '';

        if (a === b && b === c) {
            resultat.textContent = 'Это равносторонний треугольник.';
        } else if (a === b || a === c || b === c) {
            resultat.textContent = 'Это равнобедренный треугольник.';
        } else {
            resultat.textContent = 'Это разносторонний треугольник.';
        }
    }
}

btn.addEventListener('click', triygolnic);