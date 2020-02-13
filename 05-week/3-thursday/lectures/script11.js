// $(document).ready( () =>{
     //jquery
//   });

// $(()=>{
    // anonomous function
// })

// $(function(){
     // es5 function
// })

//=================================================================

// $(()=>{
//     let result= $("div");
//     $("#paragraph")
//     resul = $(".myImage")
//     console.log(result);

// })

//=====================================
// $(()=>{
//     $("div").html("<span class ='someClass'> This is great day! </span>")
// })

//=================================
// $(()=>{
    //jquery
    // let result = $('div')
    // $('#paragraph')
    // let $result = $('.myImage')
    // console.log(result);
    // $('div').html("<span class='someClass' >This is  great day!</span>");
//     let $a = $('<a>', {
//         'class': 'myAnchor',
//         'text': "Digital Crafts",
//         'href': "https://www.digitalcrafts.com/"
//     });
// })

// $('div').append($a);
// $(body).append($a);


//===================================================
// let $img = $('<img>',{
//     'src': 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg',
//     'alt': 'image of puppies'

// });
// $('div').append($img);
// $(body).append($img);

//===============================
// $('p').click(()=>{
// alert('you click on the yellow')
// })
//============================
// $('p').on('click',(e)=>{
//     alert('you click on the yellow')

// })

//===========================================

// $('body').keydown((e)=>{
//     alert(`Key down: ${e.keycode}`);

// })
// $('body').keyup((e)=>{
//     alert(`Key up: ${e.keycode}`);

// })


//========================================
$(()=>{
    //jquery
    // let result = $('div')
    // $('#paragraph')
    // let $result = $('.myImage')
    // console.log(result);
    // $('div').html("<span class='someClass' >This is  great day!</span>");
    let $a = $('<a>', {
        'class': 'myAnchor',
        'text': "Digital Crafts",
        'href': "https://www.digitalcrafts.com/"
    });
    // $('div').append($a);
    $('body').append($a);
    let $img = $('<img>', {
        'src': 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg',
        'alt': 'image of puppies'
    });
    $('div').append($img);
    // $('p').removeClass('myImage');
    // $('p').click(()=>{
    //     alert('you clicked on the yellow box')
    // })
    // $('p').on('click', (e)=>{
    //     alert('you clicked on the yellow box')
    // })
    // $('body').keydown((e)=>{
    //     console.log(`Key down: ${e.keyCode}`);
    // })
    // $('body').keyup((e)=>{
    //     console.log(`Key up: ${e.keyCode}`);
    // })
    // let $inputCount = $('input')
    // $('input').keyup((e)=>{
    //     console.log($inputCount.val().length);
    //     $('#count').html($inputCount.val().length);
    // })
    // $('#aButton').click((e)=>{
    //     $('textarea').toggle();
    // })
    // $('#aButtonShow').click((e)=>{
    //     $('textarea').show();
    // })
    // $('#aButton').click((e)=>{
    //     $('.animation').fadeOut(100);
    // })
    $('#aButton').click((e)=>{
        $('.animation').slideDown(100);
    })
})