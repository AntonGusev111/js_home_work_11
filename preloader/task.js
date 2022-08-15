function dawnloadData(){
    const xhr = new XMLHttpRequest();
    const loader = document.getElementById('loader');

    xhr.addEventListener('readystatechange', () =>{
        if (xhr.readyState === xhr.DONE){
            loader.className = 'loader';
            let json = JSON.parse(xhr.response).response.Valute;
            showInfo(json);
        }
    })

    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');

    xhr.send();

}


function showInfo(json){
    console.log(json)
    for (let obj in json){
        let div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = '<div class="item__code">' +json[obj]['CharCode']+ '</div><div class="item__value">'+json[obj]['Value']+'</div><div class="item__currency">руб.</div></>';
        document.body.append(div);
    }
}

// Прошу объяснить почему не получается доавить значения в элемент класс items при помощи .isertBefore и каким образом вставить созданый элемент в существующий пустой элемент

dawnloadData()