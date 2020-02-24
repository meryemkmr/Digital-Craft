// personarray = [
//     "Jake",
//     "Liz",
//     "Max",
//     "Rob",
//     "Zakia"
//   ]
  
//   greetings = {
//      'greeting': 'Splendid to see you this fine day',
//     'relaxed': "S'up <head nod>",
//     'excited': "OMG HELLO HELLO HELLO AAAARRRRGGGGGH",
//   }
  
//   def greet(personarray, greetdict,  personindex, greetkey):
//     print "%s, %s!"  greet (greetdict[greetkey], personarray[personindex])
  
//   greet(persons,  'greeting', 2, 'formal')


// const text = document.querySelector(".title");
const userlist = document.querySelector(".list-items ");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector('.addListBtn');




  addListBtn.addEventListener("click",function(){
    // text.classList.toggle("change")
    const newli = document.createElement('LI');
    const liCont = document.createTextNode(listInput.value);
    newli.appendChild(liCont);
    userlist.appendChild(newli);
    
});

// for(user of userlist){
//     user.addEventListener("click",function(){
//         this.style.color = "red";
//     })
// }

