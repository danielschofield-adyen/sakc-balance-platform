// var totalCartCost = 16.89
function updateCost()
{
   // const mixedPlateCost = 16.89;
   // totalCartCost = (count * mixedPlateCost).toFixed(2)


   console.log("qtyInput = ", qtyInput.value)

   totalCartCost = (qtyInput.value * itemPrice).toFixed(2)
   console.log("totalCartCost = ", totalCartCost)

   document.getElementById("totalCartCost").innerHTML = totalCartCost;
}
