(
    function (window) {
        let App=window.App || {};
        function Truck(id, orders) {
            this.id = id;
            this.orders = orders;
        }
        Truck.prototype.createOrder = function(order){
            this.orders.add(order.emailAddress, order);
        }
        Truck.prototype.deliverOrder = function(emailAddress){
            console.log(" order "+emailAddress +" delivered");
            this.orders.remove(emailAddress);
        }
        Truck.prototype.printOrders = function (){
            console.log(" truck " +this.id +" has the following pending orders");
            this.orders.getAll().forEach(function (order) {
                console.log(order);
            })
        };
        App.Truck = Truck;
        window.App = App;
    }
) (window);