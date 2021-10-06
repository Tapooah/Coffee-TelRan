(
    function (window) {
        let App = window.App || {};

        function Orders() {
            this.data = {};
        }

        Orders.prototype.add = function (key, order) {
            this.data[key] = order;
        }
        Orders.prototype.get = function (key) {
            return this.data[key];
        }
        Orders.prototype.getAll = function () {
            return Object.values(this.data);
        }
        Orders.prototype.remove = function (key) {
            delete this.data[key];
        }
        App.Orders = Orders;
        window.App = App;
    }
)(window);