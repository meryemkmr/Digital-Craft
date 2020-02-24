let dishList = document.getElementById("dishList");
let dishListDiv = document.getElementById("dishListDiv");
let starters = document.getElementById('starters');
let entrees = document.getElementById('entrees');
let desserts = document.getElementById('desserts');
let menu = document.getElementById('menu');


//----------------------------------------------------------------


dishes.map(each => {
    let title = each.title
    let course = each.course
    let description = each.description
    let price = each.price
    let img = each.imageURL
    let dishItem = `
    <li>
    <img src="${img}" />
    <label><b>${title}</b>
    <p>${description}</p>
    <button>Price: $${price}</button></label>
    </li>
    `
  
      dishListDiv.insertAdjacentHTML('beforeend',dishItem)
  
  // }
  // })
  //----------------------------------------------------------------
  starters.addEventListener("click",function(){
    dishListDiv.innerHTML = ""
  
  for(let i=0; i<dishes.length; i++){
    let title = dishes[i].title
    let course = dishes[i].course
    let description = dishes[i].description
    let price = dishes[i].price
    let img = dishes[i].imageURL
    let dishItem = `
    <li>
    <img src="${img}" />
    <label><b>${title}</b>
    <p>${description}</p>
    <button>Price: $${price}</button></label>
    </li>
    `
    if(course == "Starters"){
  
      dishListDiv.insertAdjacentHTML('beforeend',dishItem)
  
    }
  }
  })
  //-----------------------------------------------------
  entrees.addEventListener("click",function(){
    dishListDiv.innerHTML = ""
  
  for(let i=0; i<dishes.length; i++){
    let title = dishes[i].title
    let course = dishes[i].course
    let description = dishes[i].description
    let price = dishes[i].price
    let img = dishes[i].imageURL
    let dishItem = `
    <li>
    <img src="${img}" />
    <label><b>${title}</b>
    <p>${description}</p>
    <button>Price: $${price}</button></label>
    </li>
    `
    if(course == "Entrees"){
  
      dishListDiv.insertAdjacentHTML('beforeend',dishItem)
  
    }
  }
  })
  //--------------------------------------------
  desserts.addEventListener("click",function(){
    dishListDiv.innerHTML = ""
  
  for(let i=0; i<dishes.length; i++){
    let title = dishes[i].title
    let course = dishes[i].course
    let description = dishes[i].description
    let price = dishes[i].price
    let img = dishes[i].imageURL
    let dishItem = `
    <li>
    <img src="${img}" />
    <label><b>${title}</b>
    <p>${description}</p>
    <button>Price: $${price}</button></label>
    </li>
    `
    if(course == "Desserts"){
  
      dishListDiv.insertAdjacentHTML('beforeend',dishItem)
  
    }
  }
  })
  //--------------------------------------------------
  }
  )
  // //----------------------------------------------------------------