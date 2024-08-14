const list = document.querySelector('.list');
const URL_SERVER = "https://mongoose-learn-ex.onrender.com/api/v1/users";






fetch(URL_SERVER).then(res => res.json()).then(data => {
    const { result } = data;
    console.log(result)
    result.forEach(el => {
        let html = `<li id='${el._id}' class='item'>
          <span class='item_name' style="${el.name.length < 8 ? 'font-size: 1.6rem': 'font-size: 1.2rem'}">${el.name}</span>
          <span class='item_large'>🍆${el.large} Cm</span>
        </li>`;
        list.insertAdjacentHTML('beforeend', html);
        
    });
    
    Array.from(document.querySelectorAll('.item')).forEach(el => {
        el.addEventListener('click', e => {
           
            fetch(`${URL_SERVER}/${e.target.closest('.item').id}`)
            .then(res => res.json())
            .then(data => {
                document.querySelector('.view').innerHTML = `<div class='card'>
                  <img src=https://mongoose-learn-ex.onrender.com/downloads/${data.data.image} alt= "profile" height="100px" />
                  <strong}>${data.data.name}</strong>
                  <p>${data.data.large} </p>
                  <span>${data.data.age || 40} years</span>
                </div>`;
            });
        })
    })
}).catch(err => console.log(err));





// const sendData = (name, large, age) => {
//     console.log(name, large)
//     fetch(URL_SERVER, {
//         method: "POST",
//         headers:{
//             'Content-Type': 'application/json',
//         },
//         body:JSON.stringify({name, large, age, image: image.value})
//     }).then(res => res.json()).then(msg => {
//         console.log(msg.status);
//         if(msg.status !== 200) return document.getElementById('msg').innerText = "Error";
//         else document.getElementById('msg').innerText = "success :)";
//         name.value = "";
//         large.value = "";
//     });
// }
