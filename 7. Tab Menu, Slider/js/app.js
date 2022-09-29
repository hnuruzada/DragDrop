// // var btns = document.querySelectorAll('.tab-links button');

// // for(var btn of btns) {
// //     btn.addEventListener('click',function(e) {

// //         var active = document.querySelector('.active-btn');
// //         // console.log(active);
// //         active.classList.remove('active-btn');
// //         this.classList.add('active-btn');

// //         var id = this.getAttribute('id');
// //         // var id = this.id;

// //         var divs = document.querySelectorAll('.contents div');

// //         for(var div of divs) {
// //             if(div.id === id) {
// //                 div.classList.remove('active-div');
// //             }
// //             else{
// //                 div.classList.add('active-div');
// //             }
// //         }
// //     })
// // }


// var SlideImages = [
//     'images/image1.jpg',
//     'images/image2.jpg',
//     'images/image3.jpg'
// ]

// var index = 0;
// var img = document.querySelector('.slider img');
// img.src = SlideImages[index];

// var next = document.querySelector('.next');
// var prev = document.querySelector('.prev');


// function AutoPlay(){
//     index++;

//     if(index > SlideImages.length - 1) {
//         index = 0;
//     }

//     img.src = SlideImages[index];
// }


// next.addEventListener('click',function() {
//     AutoPlay()
//     // index++;

//     // if(index > SlideImages.length - 1) {
//     //     index = 0;
//     // }

//     // img.src = SlideImages[index];
// })

// prev.onclick = () => {
//     index--;
//     if(index === -1) {
//         index = SlideImages.length - 1;
//     }
//     img.src = SlideImages[index];
// }



// setInterval(() => {
//     AutoPlay();
// }, 2000);

var #x = 10