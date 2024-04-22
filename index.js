const wraper = document.getElementById("contentWraper");

fetch("https://indonesia-public-static-api.vercel.app/api/heroes")
  .then((bjir) => bjir.json())
  .then((data) => {
    const content = data;
    content.forEach((data) => {
      wraper.innerHTML += `
    <div class="col-6">
                    <div class="card" style="font-family: initial;">
                      <div class="card-body">
                        <h4 class="card-title">${data.name}</h4>
                        <h6 class="card-subtitle text-muted">${data.ascension_year}</h6>
                      </div>
                      <img src="" alt="" />
                      <div class="card-body">
                        <p class="card-text">Lahir : ${data.birth_year}</p>
                        <p class="card-text">Wafat : ${data.death_year}</p>
                        <p class="card-text">${data.description}</p>
                        
                      </div>
                    </div>
                    
                  </div> <br>
    `;
    });
  })
  .catch((error) => {
    console.log(`ada eror pada bagian ${error}`);
  });
