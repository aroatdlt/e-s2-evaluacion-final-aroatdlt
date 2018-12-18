//In this file we want to collect all the information about a show

function handleClickFunction() {
  let inputValue = inputEl.value;
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then(response => response.json())
    .then(datasTvserie => {
      for (const dataTvserie of datasTvserie) {
        eachTvserie = dataTvserie.show;
        //With all the information, we want to write the information in our web (title&photo)
        titleTvserie = eachTvserie.name;
        //Write this information in html
        //First create Li
        newItem = document.createElement('li');
        newItem.className = "info__tvserie";
        addId = eachTvserie.id;
        newItem.setAttribute('id', addId);
        listUlEl.appendChild(newItem);
        //Second create image
        tvSerieImages = eachTvserie.image;
        if (tvSerieImages === null) {
          //In case of no image, we want to print a default image
          newImage.src = 'https://via.placeholder.com/210x295/cccccc/666666/?text=TV';
        } else {
          imageTvserie = tvSerieImages.original;
          newImage = document.createElement('img');
          newImage.className = "image__tvserie";
          newImage.src = `${imageTvserie}`;
        };
        //Then create title
        newTitle = document.createElement('p');
        newTitle.className = "name__tvserie";
        newContent = document.createTextNode(`${titleTvserie}`);
        newTitle.appendChild(newContent);
        //Add image and title to li
        newItem.append(newImage, newTitle);
      }
      //We search in local storage if this search is already in local storage
      const infoFromLocalStorage = localStorage.getItem('id_list');
      allElements = document.querySelectorAll('li');
      for (let i = 0; i < allElements.length; i++) {
        if (infoFromLocalStorage.includes(allElements[i].id)) {
          allElements[i].classList.add('selected__favorite');
        }
        //Using this for, we get all favorites and we add a listener in each one. 
        allElements[i].addEventListener('click', clickFavoriteTvseries);
      }
      //Now we want to highlight our favorite shows. We will storage all the lis elements and add a listener.
      function clickFavoriteTvseries(event) {
        const selectedTvserie = event.currentTarget;
        selectedTvserie.classList.toggle('selected__favorite');
        //Here we send this information to localstorage
        let allFavoriteTvSerie = document.querySelectorAll('.selected__favorite');
        let arrFavorites = [];
        for (const favoriteTvserie of allFavoriteTvSerie) {
          const savedInfo = parseInt(favoriteTvserie.id);
          arrFavorites.push(savedInfo);
        }
        localStorage.setItem('id_list', arrFavorites);
      };
    })

    function deleteInfo() {
      listUlEl.remove(newItem);
    };
    inputEl.addEventListener('change', deleteInfo);
};

button.addEventListener('click', handleClickFunction);






