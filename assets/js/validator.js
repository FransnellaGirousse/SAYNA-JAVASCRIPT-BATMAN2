window.onload = () =>{
    let myForme = document.getElementById('myForme');
    myForme.addEventListener('submit',function(e){
        let email = document.getElementById('email');
            //champ vide
        if (email.value == ''){
            e.preventDefault();
            let invalid = document.getElementById('invalid');
            invalid.innerHTML = 'Le champ email ne peut etre vide';
            invalid.style.color = 'red';
        }
        else{
            e.preventDefault(); //pour ne pas faire bouger le submit
            document.getElementById("popupbox").style.display = "block";
        }

        
    });
}