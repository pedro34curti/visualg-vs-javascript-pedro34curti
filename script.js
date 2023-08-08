function vacina(){
    if(document.getElementById("nome").value==""){
        alert("Por favor, insira seu nome.");
    } 
    
    else if(document.getElementById("idade").value<=0 || document.getElementById("idade").value>130 || document.getElementById("idade").value==""){
        alert("Por favor, preencha sua idade corretamente.");
    }
    else if(document.getElementById("sim").checked == false && document.getElementById("nao").checked == false){
        alert("Por favor, informe se você tem alguma comorbidade.");
    }
    else if(document.getElementById("sim").checked == true || document.getElementById("idade").value>=60){
        alert("Pode se vacinar!");
    }
    else if(document.getElementById("nao").checked == true || document.getElementById("idade").value<60){
        alert("Não pode se vacinar!");
    }

    
}