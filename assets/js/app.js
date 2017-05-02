window.addEventListener("load",function(){
  var regiones=["Amazonas", "Áncash","Apurímac", "Arequipa","Ayacucho","Cajamarca","Callao","Cuzco", "Huancavelica","Huánuco","Ica",
                "Junín","La Libertad","Lambayeque","Lima","Loreto","Madre de Dios","Moquegua","Pasco","Piura","Puno","San Martín","Tacna","Tumbes","Ucayali"];
  var entidades=["ONG","Fundaciones","Asociación","Civil","Empresa","Persona","Natural","Otros"];
  var selector1=document.getElementsByClassName("regionNac")[0];
  var selector2=document.getElementsByClassName("regionRes")[0];
  var selector3=document.getElementsByClassName("tipoOrg")[0];
  var checkbox1=document.getElementsByClassName("regiones")[0];
  function creandolista(selector,elementos,tipo){
    for(var i=0;i<elementos.length;i++){

      var option=document.createElement(tipo);
      option.setAttribute("class",elementos);
      option.innerHTML=elementos[i];
      option.value=elementos[i];
      selector.appendChild(option);
    }
  }
  creandolista(selector1,regiones,"option");
  creandolista(selector2,regiones,"option");
  creandolista(selector3,entidades,"checkbox");

  creandolista(selector3,entidades);




})
