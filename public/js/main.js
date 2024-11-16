/*  const submitBtn=document.getElementById("submitBtn");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const temp=document.getElementById("temp");

const  hidedata=document.querySelector(".middle_layer");




const getinfo = async(event)=>{
  event.preventDefault();
  const cityval=cityName.value;
  
if(cityval==""){
    city_name.innerHTML=`please enter you city name before enter name`;
   hidedata.classList.add("data_hide")
}  else{
try{
 const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=8c61ada714f00b608a0247fcbcbd4085`;
 const response=await fetch(url);
 const objdata= await  response.json();
 const arraydata= await [objdata]; 
 console.log(arraydata);

 city_name.innerText=`${arraydata[0].name} ${arraydata[0].sys.country}`
 const tempVal=arraydata[0].main.temp;
 temp.innerText=tempVal;

 hidedata.classList.remove("data_hide")

}catch{

    city_name.innerHTML=`please write correct city name`;
    hidedata.classList.add();
}
}   


}

submitBtn.addEventListener("click",getinfo);


 */


 






const submitBtn=document.getElementById("submitBtn");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name"); 
const temp =document.getElementById("temp");

const getinfo= async (event)=>{

  event.preventDefault();
  const cityval=cityName.value;

  if(cityval==""){

    city_name.innerText=`please enter city name beffore search ` ;
    
  }else{
    try{

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=8c61ada714f00b608a0247fcbcbd4085`;
    const response= await fetch(url);
    const objdata= await response.json();
    const arraydata=await [objdata];
    

  
    city_name.innerText=`${arraydata[0].name} ${arraydata[0].sys.country}`
   

    const tempVal=arraydata[0].main.temp;
 temp.innerText=tempVal;




    }catch{

      city_name.innerText=`please enterv correct  city name ` ;
    }

  }


}


submitBtn.addEventListener("click",getinfo);














