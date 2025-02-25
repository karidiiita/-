const ball = document.querySelector('.ball');
const containerHeight = document.querySelector('.container').clientHeight;
let height = containerHeight; // Начальная высота по высоте контейнера
let velocity = 0; // Начальная скорость
const gravity = 0.5; // Ускорение свободного падения
const bounceFactor = 0.7; // Коэффициент упругости

function animate() {
    velocity += gravity; 
    height -= velocity;
    ball.style.bottom = `${Math.max(height, 0)}px`; // Ограничиваем высоту до 0

    // Проверка на столкновение с землей
    if (height <= 0) {
        height = 0; // Устанавливаем высоту на ноль
        velocity = -velocity * bounceFactor; // Отскакиваем
        
        // Эффект упругой деформации
        ball.style.transform = 'scaleY(0.7)'; // Сплющиваем мяч
        setTimeout(() => {
            ball.style.transform = 'scaleY(1)'; // Возвращаем к нормальному размеру
        }, 100); // Длительность эффекта трансформации (100 мс)
    } 

    // Продолжаем анимацию, если высота больше нуля или скорость значительная
    if (height > 0 || Math.abs(velocity) > 0.1) {
        requestAnimationFrame(animate);
    } else {
        // Устанавливаем мяч на землю и нормальный размер
        ball.style.bottom = '0px'; // Убедимся, что мяч на земле
        ball.style.transform = 'scaleY(1)'; // Устанавливаем нормальный размер
    }
}

// Запускаем анимацию
animate();
