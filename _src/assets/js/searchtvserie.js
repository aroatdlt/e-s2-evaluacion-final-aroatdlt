//In this file we want to collect all the information about a show

function handleClickFunction() {
  let inputValue = inputEl.value;

  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then(response => response.json())
    .then(datasTvserie => {
      for (const dataTvserie of datasTvserie) {
        eachTvserie = dataTvserie.show;
        tvSerieImages = eachTvserie.image;
        if (tvSerieImages === null){
          //In case of no image, we want to print a default image
          newImage.src = 'https://via.placeholder.com/210x295/cccccc/666666/?text=TV';
        } else {
          imageTvserie = tvSerieImages.original;
          newImage = document.createElement('img');
          newImage.className = "image__tvserie";
          newImage.src = `${imageTvserie}`;
        };
        //With all the information, we want to write the information in our web (title&photo)
        titleTvserie = eachTvserie.name;
        //Write this information in html
        //First create Li
        newItem = document.createElement('li');
        newItem.className = "info__tvserie";
        listUlEl.appendChild(newItem);
        //Then create image and title
        newTitle = document.createElement('p');
        newTitle.className = "name__tvserie";
        newContent = document.createTextNode(`${titleTvserie}`);
        newTitle.appendChild(newContent);
        //Add image and title to li
        newItem.append(newImage, newTitle);
      }
      allElements = document.querySelectorAll('li');
      console.log(allElements); 
      for (let i = 0; i < allElements.length; i++) {
        allElements[i].addEventListener('click', clickFavoriteTvseries);
      };
      function clickFavoriteTvseries(event){
        let selectedTvserie = event.currentTarget;
        selectedTvserie.classList.toggle('selected__favorite');
      };
    })
};

button.addEventListener('click', handleClickFunction);





