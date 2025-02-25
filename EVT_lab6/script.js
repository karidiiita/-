const ball = document.querySelector('.ball');
const containerHeight = document.querySelector('.container').clientHeight;
let height = 600; // Начальная высота
let velocity = 0; // Начальная скорость
let gravity = 0.5; // Ускорение свободного падения
let bounceFactor = 0.7; // Коэффициент упругости
let isFalling = true;

function animate() {
    if (isFalling) {
        velocity += gravity; // Увеличиваем скорость за счет гравитации
        height -= velocity; // Уменьшаем высоту
        ball.style.bottom = `${height}px`;

        // Проверка на столкновение с землей
        if (height <= 0) {
            height = 0; // Устанавливаем высоту на ноль
            velocity = -velocity * bounceFactor; // Отскакиваем
        }
    } else {
        // Если мячик уже не падает, уменьшаем скорость до полного остановки
        velocity *= 0.98; // Замедляем мячик
        height -= velocity;
        ball.style.bottom = `${height}px`;

        if (height <= 0) {
            height = 0;
            velocity = 0; // Останавливаем мячик
            isFalling = false; // Заканчиваем анимацию
        }
    }

    if (isFalling || Math.abs(velocity) > 0.1) {
        requestAnimationFrame(animate); // Продолжаем анимацию
    }
}

animate(); // Запускаем анимацию