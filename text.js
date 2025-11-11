const resizable = document.querySelector('.resizable');
const resizer = document.querySelector('.resizer');

let isResizing = false;

resizer.addEventListener('mousedown', (e) => {
  isResizing = true;

  const startX = e.clientX;
  const startY = e.clientY;
  const startWidth = parseInt(window.getComputedStyle(resizable).width, 10);
  const startHeight = parseInt(window.getComputedStyle(resizable).height, 10);

  function onMouseMove(e) {
    if (!isResizing) return;
    const newWidth = startWidth + (e.clientX - startX);
    const newHeight = startHeight + (e.clientY - startY);
    resizable.style.width = `${newWidth}px`;
    resizable.style.height = `${newHeight}px`;
  }

  function onMouseUp() {
    isResizing = false;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  }

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
});
