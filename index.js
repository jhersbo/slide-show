const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]

//Planning 
    //When the page loads, select the img element and set its src to the first image path from the array of images.
    // When the user clicks the → button:
        // Set the src to the next image path in the array
        // Change the textContent of each bubble button to '○'
        // Change the textContent of the selected bubble button to '●'
    // When the user clicks the ← button:
        // Set the src to the previous image path in the array
        // Change the textContent of each bubble button to '○'
        // Change the textContent of the selected bubble button to '●'
    // When the user clicks a bubble button:
        // Set the src to the selected image path in the array
        // Change the textContent of each bubble button to '○'
        // Change the textContent of the selected bubble button to '●'



//First Load
let bubble = document.querySelectorAll('.bubble')
bubble[0].textContent = '●'

let firstLoadImage = document.querySelector('.image')
firstLoadImage.setAttribute('src', images[0])

//Global variable 'i'
let i = 0

//When the user clicks the 'next' button
let nextButton = document.querySelector('.next')
nextButton.addEventListener('click', function(){
    
    if (i < images.length-1){
        i++
        firstLoadImage.setAttribute('src', images[i])
        bubble[i].textContent = '●'
        for (let n = 0; n < images.length; n++){
            if (n != i){
                bubble[n].textContent = '○'
            }
        }
    }

})

//When the user clicks the 'previous' button
let previousButton = document.querySelector('.previous')
previousButton.addEventListener('click',function(){
    if (i > 0){
        i--
        firstLoadImage.setAttribute('src', images[i])
        bubble[i].textContent = '●'
        for (let p = 0; p < images.length; p++){
            if(p != i){
                bubble[p].textContent = '○'
            }
        }
    }
})

//When a user clicks a 'bubble' button
for(let b = 0; b < bubble.length; b++){
    bubble[b].addEventListener('click',function(){
        bubble[b].textContent = '●'
        let i = b 
        firstLoadImage.setAttribute('src', images[i])
        for(let m = 0; bubble.length; m++){
            if(m != b){
                bubble[m].textContent = '○'
            }
        }
    })
}