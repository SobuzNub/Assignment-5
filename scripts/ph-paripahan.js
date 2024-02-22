





const allBtn = document.getElementsByClassName('btn');

for(const btn of allBtn){
    btn.addEventListener("click", function(event){
        const name = event.target.parentNode.childNodes[1].innerText;

        const p = document.createElement("p");
        const text = "Economy";
        p.innerText = text;
        const price = document.createElement("p");
        const priceText = "550";
        price.innerText = priceText;

        const selectedContainers = document.getElementById('selected-seat-buttons');

        const div = document.createElement("div");
        div.classList.add("selected-seat");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText = name;
        p2.innerText = text;
        p3.innerText = priceText;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedContainers.appendChild(div);

        
        updateTotalCost(priceText)
        updateGrandTotal()
    })
}



function updateGrandTotal(){
    const totalCost = getConvertedValue('total');

    document.getElementById('grand-total').innerText = totalCost;
} 




function updateTotalCost(value){
    
    const totalCost = getConvertedValue('total');
    const sum = totalCost + parseInt(value);
    document.getElementById('total').innerText = sum;
}






function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;

}



    

