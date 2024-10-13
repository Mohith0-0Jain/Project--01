let btn=document.querySelector("button");
let par=document.querySelector("p");
async function getdata(res){
    try{
    let apiRes= await axios.get("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");
    
    return apiRes.data
    }catch(e){
        return(e);
    } 
}

btn.addEventListener("click",async()=>{
try{
    let data=await getdata();
console.log(data);

if(data.type=="twopart"){
    par.innerHTML=`${data.setup}<br>${data.delivery}`;
    
}else{
    par.innerText=(data.joke);
}
}catch(e){
    console.log("error in the event block:"+e)
}
});


