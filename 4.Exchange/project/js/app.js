let from = document.getElementById("from"); //from select ဖမ်းတာ
let to = document.getElementById("to"); // to select


function createOption(x,y,z){                    // y = data.rate  ထဲက  အရှေ့ခြမ်းကိုယူထားတာ                         
    let o = document.createElement("option");
    let t = document.createTextNode(y);
    o.appendChild(t);
    o.setAttribute("value",toNum(z))
    x.appendChild(o)
}   

function toNum(x){
    return Number(x.replace(",",""))
}

for (x in data.rates){
    createOption(from,x,data.rates[x]);
    createOption(to,x,data.rates[x]);
    // console.log(x+"--"+data.rates[x]);
}






