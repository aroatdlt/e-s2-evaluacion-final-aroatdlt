//In this file we want to collect all the information about a show


function handleClickFunction() {
  let inputValue = inputEl.value;

  fetch(`http://api.tvmaze.com/singlesearch/shows?q=${inputValue}`)
  .then (response => response.json())
  .then (dataTvserie => {
      //With all the information, we want to write the information in our web (title&photo)
      imageTvserie = dataTvserie.image.original;
      titleTvserie = dataTvserie.name;
      console.log(titleTvserie);
      //Write this information in html
      
  })
};

button.addEventListener('click', handleClickFunction);
