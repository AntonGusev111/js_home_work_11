function prBar(){
  const progress = document.getElementById( 'progress' );
  document.forms.form.addEventListener('submit', (e) => {
      e.preventDefault()
      const xhr = new XMLHttpRequest();
      xhr.upload.onprogress = function(event) {       
        progress.value = event.loaded/event.total;
      };
      xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php')
      const formData = new FormData(document.forms.form)
      xhr.send(formData)
  })
    
}

prBar()