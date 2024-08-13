const name = document.getElementById('name');
const large = document.getElementById('large');
const age = document.getElementById('age');
const list = document.querySelector('.list');
const image = document.getElementById('image')
const URL_SERVER = "http://localhost:4000/api/v1/users";


const sendData = (name, large, age) => {
    console.log(name, large)
    fetch(URL_SERVER, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({name, large, age, image: image.value})
    }).then(res => res.json()).then(msg => {
        console.log(msg.status);
        if(msg.status !== 200) return document.getElementById('msg').innerText = "Error";
        else document.getElementById('msg').innerText = "success :)";
        name.value = "";
        large.value = "";
    });
}


fetch(URL_SERVER).then(res => res.json()).then(data => {
    const { result } = data;
    console.log(result)
    result.forEach(el => {
        let html = `<li id='${el._id}' class='item'>${el.name}</li>`;
        list.insertAdjacentHTML('beforeend', html);
        
    });
    Array.from(document.querySelectorAll('.item')).forEach(el => {
        el.addEventListener('click', e => {
            fetch(`${URL_SERVER}/${e.target.id}`)
            .then(res => res.json())
            .then(data => {
                document.querySelector('.view').innerHTML = `<div class='card'>
                  <strong>${data.data.name}</strong>
                  <p>${data.data.large} </p>
                  <span>${data.data.age || 40} years</span>
                </div>`;
            });
        })
    })
}).catch(err => console.log(err));

document.getElementById('form').onsubmit = e =>  {
    e.preventDefault();
    
    if(name.value === ""){
        return document.getElementById('msg').innerText = "Please Complete you info";
    }

    sendData(name.value, large.value, age.value);

}
name.addEventListener('keypress', (event) => {
    document.getElementById('msg').innerText = "";
});