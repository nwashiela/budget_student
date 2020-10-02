const express = require('express');

const exphbs = require('express-handlebars');

const app = express();

const bodyParser = require('body-parser');

const BudgetService = require('./budget');
<<<<<<< HEAD
const budget = require('./budget');
const budgetService = BudgetService(3000);

=======
const budgetService = BudgetService(3000);
>>>>>>> cdf1d40f3973ba11352daeb0e1e71e89376f1da6

app.engine('handlebars', exphbs({
	layoutsDir: './views/layouts'
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false })); // add this line
app.use(bodyParser.json()); // add  this line


<<<<<<< HEAD
app.post("/income", function(req, res){

	const income = req.body.income;

	budgetService.setIncome(income);
	
	res.redirect("/budget")

})

app.get('/budget', function (req, res) {

	let budget = budgetService.getBudget()
	console.log(budget);
=======
app.get('/budget', function (req, res) {

	const budget = budgetService.getBudget();
	// console.log(budget);
>>>>>>> cdf1d40f3973ba11352daeb0e1e71e89376f1da6
	let data = budgetService.getData()
	let labels = budgetService.getList()
	
	let dataStr = JSON.stringify(data)
	let labelStr = JSON.stringify(labels) 
	
<<<<<<< HEAD
	console.log(budget)
	res.render('index', {
		budget,
		// budget: budgetService.getBudget(3000),
=======
	// const budgetService = budgetService.getBudget(3000);

	console.log(budget);

	res.render('index', {
		budget,
>>>>>>> cdf1d40f3973ba11352daeb0e1e71e89376f1da6
		data : dataStr,
		labels : labelStr
	});
	

});

app.post('/budget', function (req, res) {


	console.log(req.body);

	const budgetItem = {
		name : req.body.expenseName,
		cost : Number(req.body.cost)
	};

	budgetService.addExpense(budgetItem);


<<<<<<< HEAD
	res.redirect('budget')
=======
	res.redirect("/budget")
>>>>>>> cdf1d40f3973ba11352daeb0e1e71e89376f1da6

});
app.get('/', function(req, res){
	res.render("expense")
})




const PORT = process.env.PORT || 3025;
app.listen(PORT, function () {
	console.log('App started at port:', PORT);
})