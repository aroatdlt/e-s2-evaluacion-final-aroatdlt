//In this file we want to collect all the information about a show


function handleClickFunction() {
  let inputValue = inputEl.value;

  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
  .then (response => response.json())
  .then (dataTvserie => {
  })
};


button.addEventListener('click', handleClickFunction);
