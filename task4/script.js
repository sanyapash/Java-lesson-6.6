console.log('privet Alexei');
const textfield = document.querySelector('#textfield');
document.querySelector('#textfield').addEventListener('click', 
  (event) => {
    event.preventDefault();
    prompt('Вы кликнули по ссылке и ничего не произошло');
})
textfield.textContent='я буду единственным текстом здесь';
