let sendMessageButton = document.getElementById("sendMessageButton");
sendMessageButton.addEventListener('click',(e)=>{
    alert('we clicked a button')
})

// find form on ejs to form element 
let form = document.querySelector('form')
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    //retrieve data from form
    console.log(e);

    let name = document.getElementById('name')
    // console.log(name.value);
    let email = document.getElementById('email')
    // console.log(email.value);
    let phone = document.getElementById('phone')
    // console.log(phone.value);
    let zipcode = document.getElementById('zipcode')
    // console.log(zipcode.value);

    //data in json format 
    // fetch call back to server 




    fetch('/',{
        method:'POST',
        header: {'Content-Type':'application/json'},
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





