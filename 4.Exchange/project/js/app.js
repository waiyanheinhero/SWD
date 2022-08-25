let inputs = document.getElementById("input")
let from = document.getElementById("from");             //from select ဖမ်းတာ
let to = document.getElementById("to");                 // to select
let result = document.querySelector(".result");
let calc = document.getElementById("calc");
let historyList = document.getElementById("history-list")


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

calc.addEventListener("submit",function(event){
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
    // console.log(second.toFixed(2));
    let fromText = x +" - "+ from.options[from.selectedIndex].innerText;
    let toText = to.options[to.selectedIndex].innerText;
    let results = second.toFixed(2)+" - "+to.options[to.selectedIndex].innerText;
    // console.log(fromText,toText);
    let d = new Date().toLocaleString();
    let arr = [d,fromText,toText,results];
    history(arr);
    store()
    


    //set state
    result.innerHTML = results;
    

    inputs.value = "";
    inputs.focus();
    from.value = "";
    to.value = "1";  
});


// function test(){
//     console.log(from.options[from.selectedIndex].innerText)    //option တွေထဲက arr number တစ်ခုချင်းစီကိုဖမ်းတာ
// }

function history(x){
    let rowSpace = document.getElementById("rowSpace");
    if(rowSpace){
        rowSpace.remove();
    }

    let tr = document.createElement("tr");

    x.map(function(el){
        let td = document.createElement("td");
        let tdText = document.createTextNode(el);
        td.appendChild(tdText)
        tr.appendChild(td);
        // console.log(tr);
    })

    historyList.append(tr)
}

(function(){
    if(localStorage.getItem("record")){
        historyList.innerHTML = localStorage.getItem("record");
    }else{
        historyList.innerHTML = `<tr id="rowSpace"><td colspan="4">There is no record</td></tr>`
    }
})()
   
function store(){
    localStorage.setItem("record",historyList.innerHTML)
}

function changeMood(){
    document.body.classList.toggle("night-mode")
}



