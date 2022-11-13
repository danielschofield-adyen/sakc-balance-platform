var totalCartCost = $_GET['price'];
function updateCost(count)
{
   // const mixedPlateCost = 16.89;
   totalCartCost = (count * totalCartCost).toFixed(2)
   document.getElementById("totalCartCost").innerHTML = totalCartCost;
}
