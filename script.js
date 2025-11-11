const div = document.querySelector('div');
const ta = document.querySelector('textarea');

addEventListener('keydown', (e) => {
  if (e.code == 'KeyE' && e.ctrlKey) {
    div.innerText = ta.value;
    div.hidden = true;
    ta.hidden = false;
    e.preventDefault();
  }
  else if (e.code == 'KeyS' && e.ctrlKey) {
    ta.hidden = true;
    div.hidden = false;
    div.innerText = ta.value;
    e.preventDefault();
  }
});
