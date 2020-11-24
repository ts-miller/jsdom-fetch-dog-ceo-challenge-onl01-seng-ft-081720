// console.log('%c HI', 'color: firebrick')
window.addEventListener('DOMContentLoaded', (event) => {
    const imgContainer = document.getElementById('dog-image-container')
    const breedsContainer = document.getElementById('dog-breeds')
    let imgs = []

    function fetchImages() {
        fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => resp.json())
        .then(json => renderImages(json.message))
    }

    function renderImages(urls) {
        urls.forEach(url => {
            let imgElement = document.createElement('IMG')
            imgElement.src = url
            imgElement.width = 300
            imgContainer.appendChild(imgElement)
        })
    }

    function fetchBreeds() {
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
          .then(res => res.json())
          .then(json => {
            renderBreeds(json.message);
          })
      }

    function renderBreeds(breeds) {
        for(const breed in breeds) {
            const li = document.createElement('li')
            li.innerText = breed
            li.addEventListener('click', (e) => { e.target.style.color = 'red' })
            breedsContainer.appendChild(li)
        }
    }

    fetchImages()
    fetchBreeds()
})
