//In this file we want to collect all the information about a show

function handleClickFunction() {
  let inputValue = inputEl.value;

  fetch(`http://api.tvmaze.com/singlesearch/shows?q=${inputValue}`)
    .then(response => response.json())
    .then(dataTvserie => {
      //With all the information, we want to write the information in our web (title&photo)
      imageTvserie = dataTvserie.image.original;
      titleTvserie = dataTvserie.name;
      //Write this information in html
      //First create Li
      newItem = document.createElement('li');
      newItem.className = "info__tvserie";
      listUlEl.appendChild(newItem);
      //Then create image and title
      newImage = document.createElement('img');
      newImage.className = "image__tvserie";
      newImage.src = `${imageTvserie}`;
      newTitle = document.createElement('p');
      newTitle.className = "name__tvserie";
      newContent = document.createTextNode(`${titleTvserie}`);
      newTitle.appendChild(newContent);
      //Add image and title to li
      newItem.append(newImage, newTitle);
    })
};

button.addEventListener('click', handleClickFunction);
