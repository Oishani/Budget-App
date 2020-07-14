// BUDGET CONTROLLER
var budgetController = (function () {})();

// UI CONTROLLER
var UIController = (function () {})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
