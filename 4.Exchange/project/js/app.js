let inputs = document.getElementById("input")
let from = document.getElementById("from"); //from select ဖမ်းတာ
let to = document.getElementById("to"); // to select
let result = document.querySelector(".result")

function createOption(x,y,z){                    // y = data.rate  ထဲက  အရှေ့ခြမ်းကိုယူထားတာ                         
    let o = document.createElement("option");
    let t = document.createTextNode(y);
    o.appendChild(t);
    o.setAttribute("value",toNum(z))
    x.appendChild(o)
};

function toNum(x){
    return Number(x.replace(",",""))
};

for (x in data.rates){
    createOption(from,x,data.rates[x]);
    createOption(to,x,data.rates[x]);
    // console.log(x+"--"+data.rates[x]);
}

document.getElementById("calc").addEventListener("submit",function (event){
    event.preventDefault();
    //get state
    let x = inputs.value;
    let y = from.value;
    let z = to.value;
    console.log(x,y,z);

    //process
    let first = x * y;
    console.log(first);
    let second = first/z;
    console.log(second.toFixed(2));

    //set state
    result.innerHTML = second.toFixed(2);

    inputs.value = "";
    inputs.focus();
    from.value = "";
    to.value = "1";
})




