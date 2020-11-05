window.onload = function(){
  button = document.querySelector("#sub");
  button.addEventListener("click", getData);
  async function getData(){
    const heroData = await fetch("http://localhost:8080/superheroes.php");
    const heroTxt = await heroData.text();
    alert(heroTxt);
  }
}
