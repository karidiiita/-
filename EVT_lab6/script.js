const ball = document.querySelector('.ball');
const containerHeight = document.querySelector('.container').clientHeight;
let height = containerHeight; // Начальная высота по высоте контейнера
let velocity = 0; // Начальная скорость
const gravity = 0.5; // Ускорение свободного падения
const bounceFactor = 0.7; // Коэффициент упругости

function animate() {
    velocity += gravity; // Увеличиваем скорость
    height -= velocity; // Уменьшаем высоту
    ball.style.bottom = `${Math.max(height, 0)}px`; // Ограничиваем высоту до 0

    // Проверка на столкновение с землей
    if (height <= 0) {
        height = 0; // Устанавливаем высоту на ноль
        velocity = -velocity * bounceFactor; // Отскакиваем
    }

    // Продолжаем анимацию, если высота больше нуля или скорость значительная
    if (height > 0 || Math.abs(velocity) > 0.1) {
        requestAnimationFrame(animate);
    }
}

animate(); // Запускаем анимацию
