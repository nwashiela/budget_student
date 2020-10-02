module.exports = function BudgetService() {

	const budget = {
		income : 0,
		available: 0,
		items: [],
		amountLeft: 0,
		total: 0
	}


	function addExpense(expense) {
		budget.total += expense.cost;
		budget.amountLeft -= expense.cost;
		budget.items.push(expense);
	}

	function getBudget(id) {
		return budget
	}

<<<<<<< HEAD
	function setIncome(income) {
        budget.income = Number(income);
        budget.amountLeft = budget.income;
    }

=======
    function setIncome(income) {
        budget.income = Number(income);
        budget.amountLeft = budget.income;

    }
>>>>>>> cdf1d40f3973ba11352daeb0e1e71e89376f1da6

	function getList() {
		var labels = []
		for (const item of budget.items) {
			labels.push(item.name)
		}
		return labels
	}

	function getData() {
		var datas = []
		for (const item of budget.items) {
			datas.push(item.cost);
		}
		return datas
	}

	return {
		setIncome,
		addExpense,
		getBudget,
		getList,
		getData
	}

}






