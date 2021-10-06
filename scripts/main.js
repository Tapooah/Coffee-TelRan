(
    function (window){
        const FORM_SELECTOR = '[data-coffee-role="form"]';
        const CHECK_LIST_SELECTOR = '[data-coffee-role="checklist"]';
        let App = window.App;
        let FormHandler = App.FormHandler;
        let formHandler = new FormHandler(FORM_SELECTOR);
        let truck = new App.Truck("Truck 1", new App.Orders());
        let CheckList = new App.CheckList(CHECK_LIST_SELECTOR);
        formHandler.addSubmitHandler(function (order) {
            truck.createOrder(order);
            CheckList.addRow(order);
        });
        CheckList.addCheckBoxHandler(function (email) {
           truck.deliverOrder();
           CheckList.removeRow(email);
        });
        App.Truck = truck;
    }
)(window);