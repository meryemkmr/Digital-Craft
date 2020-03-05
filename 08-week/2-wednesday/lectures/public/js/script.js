let sendMessageButton = document.getElementById("sendMessageButton");
sendMessageButton.addEventListener('click',(e)=>{
    alert('we clicked a button')
})


let form = document.querySelector('form')
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(e);

    let name = document.getElementById('name')
    // console.log(name.value);
    let email = document.getElementById('email')
    // console.log(email.value);
    let phone = document.getElementById('phone')
    // console.log(phone.value);
    let zipcode = document.getElementById('zipcode')
    // console.log(zipcode.value);






    fetch('/',{
        method:'POST',
        header: {'Content- Type':'application/json'},
        body: {
            'email': email.value,
            'name': name.value,
            'phone': phone.value,
            'zipcode': zipcode.value
        }
    })
    .then((response)=>{
        let msg = document.getElementById("msg")
        msg.textContent = 'your form was submitted'
    })
    .catch(()=>{
        let msg = document.getElementById("msg")
        msg.textContent = 'Error'
    })
})





