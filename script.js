var div=document.createElement("div");
// var input=document.createElement("input");
div.innerHTML=`<input type="text" id="txt" placeholder="Enter your country">
<button type="button" onclick="foo()">Search</button>
<div id="active"></div>
<div id="recovered"></div>
<div id="deaths"></div>`;
div.style.textAlign="center";
div.style.margin="30px";
div.style.padding="20px";
document.body.append(div);

async function foo(){
    let cc= document.getElementById("txt").value
    let res=await fetch(`https://api.covid19api.com/total/dayone/country/${cc}`);
    let res1=await res.json();
    console.log(res1);

let index=res1.length-1;
var result=res1[index].Active;
console.log(result);
document.getElementById("active").innerText=`Total Active Case: ${result}`;

let recovered=res1.length-1;
var rec=res1[recovered].Recovered;
console.log(rec);
document.getElementById("recovered").innerText=`Total Recovered Case: ${rec}`;

let deaths=res1.length-1;
var dea=res1[deaths].Deaths;
console.log(dea);
document.getElementById("deaths").innerText=`Total Deaths Case: ${dea}`;

}

