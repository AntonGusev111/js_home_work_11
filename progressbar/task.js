function prBar(){
  const button = document.getElementById('send');

  button.addEventListener('click', ()=>{
    let file = document.getElementsByClassName('input__wrapper input__wrapper-desc')[0]['outerText']
    if (file != 'Имя файла...'){
      const xhr = new XMLHttpRequest()
      xhr.addEventListener('readystatechange', ()=>{
        console.log(xhr.readyState)
      })
      xhr.open('POST','https://netology-slow-rest.herokuapp.com/upload.php')
      xhr.send(file)
    }
  })
    
}
 // Прошу объяснить, почему при нажатии на кнопку "отправить"Б на странцу начинает выгружаться большое количество текста. Так же прошу подробно объяснить как выполнить данное задание
prBar()