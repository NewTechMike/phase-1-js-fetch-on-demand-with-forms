const init = () => {
  const inputForm = document.querySelector('form');
  
  inputForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    //console.log(event)
    const input = document.querySelector('input#searchByID');
    //console.log(input.value);
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => { 
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        console.log(data);

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
    //event.target
  });
}

document.addEventListener('DOMContentLoaded', init);

