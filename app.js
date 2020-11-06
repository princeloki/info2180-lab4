window.onload = function() {
  var button = document.querySelector("#sub");
  var input = document.querySelector("#in");
  var results = document.getElementById("results");
  const myForm = document.querySelector("#myform");
  var data;

  myForm.addEventListener("submit", function(e){
    e.preventDefault();

    results.innerHTML = "";
    if(input.value == ""){
      getData();
    } else{
      results.remove
      const formData = new FormData(this);

      fetch("superheroes.php",{
        method: "POST",
        body: formData
      }).then(function(response){
        return response.text();
      }).then(function(json){
        if(json == "No match"){
          var h4 = document.createElement("h4");
          h4.innerHTML = "SUPERHERO NOT FOUND";
          h4.classList.add("danger");
          results.appendChild(h4);
        } else {
          var jsonData = JSON.parse(json);
          var h3 = document.createElement("h3");
          h3.innerHTML = jsonData["name"];
          var h4 = document.createElement("h4");
          h4.innerHTML = "A.K.A "+jsonData["alias"];
          var p = document.createElement("p");
          p.innerHTML = jsonData["biography"];

          results.appendChild(h3);
          results.appendChild(h4);
          results.appendChild(p);
        }

      }).catch(function(error){
        console.error(error);
      })
    }

  });

  async function getData() {
    const heroData = await fetch("http://localhost:8080/superheroes.php");
    const heroes = await heroData.text();
    var ul = document.createElement("ul");
    ul.innerHTML = heroes;
    results.appendChild(ul);
      // else {
    //   try{
    //     const heroes = await heroData.json();
    //     console.log(heroes);
    //   } catch(err){
    //     console.error(err);
    //   }
    // }
    // const data = await heroData.text();
    // console.log(data);
  }
}
