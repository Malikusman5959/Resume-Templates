<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Constructors</h2>

<p id="demo"></p>

<script>



// Constructor function for Vehicle objects
function Vehicle (name, manufacturer, model, color, year) {
  this.name = name;
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.year = year;
}


// Create a Vehicle object
var vehicle = new Vehicle ("Veron", "Rolls Royce", "RRV2", "gold","2017");

// Display Vehicle details

for (property in vehicle) {
   console.log(`key= ${property} value = ${vehicle[property]}`)
}


</script>

</body>
</html>
