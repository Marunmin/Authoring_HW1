(function() {

var theImages = document.querySelectorAll('.image-holder'),
    theHeading = document.querySelector('.heading'),
    theSubhead = document.querySelector('.main-copy h2'),
    theSeasonText = document.querySelector('.main-copy p'),
    appliedClass;


function changeElements() {



let objectIndex = dynamicContent[this.id];



let subImages = document.querySelector('.subImagesContainer');



while (subImages.firstChild) {
    subImages.removeChild(subImages.firstChild);
}

objectIndex.images.forEach(function(image, index) {

  let newSubImg = document.createElement('img');


  newSubImg.classList.add('thumb');



  newSubImg.src = "images/" + objectIndex.images[index];



  newSubImg.dataset.index = index;


  newSubImg.addEventListener('click', function() { popLightbox(index, objectIndex); }, false);

  subImages.appendChild(newSubImg);


});




theSubhead.classList.remove(appliedClass);
theHeading.classList.remove(appliedClass);


theSubhead.classList.add(this.id);
theHeading.classList.add(this.id);

theSubhead.firstChild.nodeValue = objectIndex.headline;
theSeasonText.firstChild.nodeValue = objectIndex.text;


appliedClass = this.id;

}


theImages.forEach(function(element, index) {



element.addEventListener('click', changeElements, false);

});





function popLightbox(currentIndex, currentObject) {
  debugger;

  window.scrollTo(0, 0);


  document.body.style.overflow = "hidden";


  let lightbox = document.querySelector('.lightbox');
  let lightboxImg = lightbox.querySelector('img');
  let lightboxDesc = lightbox.querySelector('p');
  let lightboxClose = lightbox.querySelector('.close-lightbox');


  lightboxImg.src = "images/" + currentObject.images[currentIndex];
  lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];

  lightbox.style.display = "block";


  lightboxClose.addEventListener('click', closeLightbox, false);
}

function closeLightbox() {
  debugger;
  let lightbox = document.querySelector('.lightbox');
  let lightboxImg = lightbox.querySelector('img');
  let lightboxDesc = lightbox.querySelector('p');
  let lightboxClose = lightbox.querySelector('.close-lightbox');
  lightbox.style.display = "none";

  document.documentElement.style.overflow='scroll';
      document.body.style.overflow='scroll';

}


changeElements.call(document.querySelector('#spring'));
})();
