var totalCartCost = 16.89
function updateCost(count)
{
   const mixedPlateCost = 16.89;
   totalCartCost = (count * mixedPlateCost).toFixed(2)
   document.getElementById("totalCartCost").innerHTML = totalCartCost;
}
