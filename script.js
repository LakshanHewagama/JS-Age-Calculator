function ageCalculate(){
    const birthDate = document.getElementById("date").value;
    const birthYear =  new Date(birthDate).getFullYear();
    const cYear = new Date().getFullYear();

    if(birthDate === "" || birthYear > cYear){
        document.getElementById("output").innerHTML = "Please select valid Birth date";
        document.querySelector(".output-box").style.display = "block";
    }else{
        const age = cYear - birthYear;
        document.getElementById("output").innerHTML = "Your Age is "+ age;
        document.querySelector(".output-box").style.display = "block";
        
    }


}