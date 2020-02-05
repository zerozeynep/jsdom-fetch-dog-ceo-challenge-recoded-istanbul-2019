window.addEventListener("DOMContentLoaded", (event) => {
    fetch()
    filterDropdown()
 
 });


fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json()) 
  .then(data => {
    data['message'].forEach(dog => { 
        let dogImgs = document.querySelector("#dog-image-container")
        let eachNewImg = document.createElement("img")
        eachNewImg.src = dog
        eachNewImg.style.width = "15rem"
        eachNewImg.style.height = "15rem"
        dogImgs.appendChild(eachNewImg)
        
    })})

    .catch((error) => {
        console.error(error)
    
        });


fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json()) 
  .then(data => {
    Object.keys(data['message']).forEach(dogBreed => { 
        let dogBreedList = document.querySelector("#dog-breeds")
        let eachNewBreed = document.createElement("li")
        eachNewBreed.innerHTML = dogBreed
        eachNewBreed.className = "dog-links"
        dogBreedList.append(eachNewBreed)
        eachNewBreed.addEventListener("click", () => {
            eachNewBreed.style.color = "green"

        })

        
    })})
    
  .catch((error) => {
    console.error(error)

    });



    document.querySelectorAll(".dog-links").addEventListener('change', function filterDropdown() {
  //herbir dog-linkse ulas ve herbiri icin textnode[0] olanlarin displayini block yap. 

  let dogLinks = document.querySelectorAll(".dog-links")
  let opt = document.querySelector("#dog-breeds")

  for (eachDog of dogLinks ) {

    if(eachDog.textContent[0] == opt.value){
      eachDog.style.display = 'block'
    }

    else {
      eachDog.style.display = 'none'
    }
  }

})



