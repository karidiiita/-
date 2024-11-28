let selectedElement = null;
let originalPosition = null;
let isDragging = false;

const targets = document.querySelectorAll(".target");

targets.forEach((target) => {
    target.addEventListener("touchstart", (e) => {
        if (selectedElement === null) {
            selectedElement = target;
            originalPosition = {
                top: parseInt(target.style.top) || 0,
                left: parseInt(target.style.left) || 0,
                backgroundColor: target.style.backgroundColor,
            };
            isDragging = true;
            target.style.zIndex = 1;
        }
    });

    target.addEventListener("dblclick", () => {
        if (selectedElement === null) {
            selectedElement = target;
            originalPosition = {
                top: parseInt(target.style.top) || 0,
                left: parseInt(target.style.left) || 0,
                backgroundColor: target.style.backgroundColor,
            };
            isDragging = true;
            target.style.zIndex = 1;
            target.style.backgroundColor = "blue";
        } else {
            selectedElement.style.zIndex = 0;
            selectedElement = null;
            isDragging = false;
            target.style.backgroundColor = originalPosition.backgroundColor;
        }
    });
});

document.addEventListener("touchmove", (e) => {
    if (isDragging && selectedElement) {
        const touch = e.touches[0];
        const newX = touch.clientX - selectedElement.offsetWidth / 2;
        const newY = touch.clientY - selectedElement.offsetHeight / 2;

        selectedElement.style.left = `${newX}px`;
        selectedElement.style.top = `${newY}px`;
    }
});

document.addEventListener("touchend", (e) => {
    if (selectedElement && isDragging) {
        isDragging = false;
        selectedElement.style.zIndex = 0;
    }
    selectedElement = null;
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && selectedElement) {
        selectedElement.style.left = `${originalPosition.left}px`;
        selectedElement.style.top = `${originalPosition.top}px`;
        selectedElement.style.zIndex = 0;
        selectedElement.style.backgroundColor = originalPosition.backgroundColor;
        selectedElement = null;
        isDragging = false;
    }
});
