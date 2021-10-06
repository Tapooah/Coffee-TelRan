(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;
        function FormHandler(selector){
            if (!selector){
                throw new Error("Selector isn`t provided");
            }
           this.$formElement=$(selector);
            if (this.$formElement.length===0){
                throw new Error(selector +" doesn`t exist in HTML");
            }
        }
        FormHandler.prototype.addSubmitHandler=function(fn){
            this.$formElement.on('submit', function (event) {
               event.preventDefault();
                let order ={};
                    $(this).serializeArray().forEach(
                        function (item) {
                            order[item.name] = item.value;
                        }
                    );
                fn(order);
                    this.reset();
                    this.elements[0].focus();
            });
        };
        FormHandler.prototype.addMailHandler=function(validMail){
            this.$formElement.on('input', '[data-coffee-role="email"]'), function(event){
                let email = event.target.value;
                event.target.setCustomValidity(validMail(email));
            }
        };
        App.FormHandler = FormHandler;
        window.App = App;
    }
)(window);