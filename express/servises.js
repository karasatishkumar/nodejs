var express = require("express");

console.log(express);

var app = express();
 
app.configure(function(){
    app.use(express.bodyParser());    
});
 
app.get('/employees/:id', function(req, res) {
  res.type('application/json');
  var id = req.params.id;
  console.log("Parameter: " + id);
 
	employee = new Object();
    employee.id = 1;
	employee.name = "Satish";
	employee.age = 29;
	employee.deparment = "Engineer";
	employee.wage = 1.00;	
	
	address = new Object();
	address.city = "Bangalore";
	address.state = "Karnataka";
	address.street = "Old Airport Road";
	address.zip = 560017;
	
	employee.address = address;
	
	res.json(employee);
});
 
app.post('/employees', function(req, res) {
	var employee = req.body;
	console.log("Got request: " + JSON.stringify(employee));
	res.send(employee);		
});	

app.listen(4242);