(
    function (window) {
        let App = window.App || {};

        function Row(order) {
            let $div = $('<div></div>', {
                class: "form-check",
                'data-coffee-role': "checkbox"
            });
            let $label = $('<label></label>', {
                class: "form-check-label"
            });
            let $input = $('<input>', {
                type: "checkbox",
                class: "form-check-input",
                name: "emailAddress",
                value: order.emailAddress
            });

            let content = order.emailAddress + ', ' + order.coffee;
            if (order.flavor)
                content += ', ' + order.flavor;
            content += ', ' + order.size + ', [' + order.strength + 'X]';
            $label.append($input).append(content);
            $div.append($label);
            this.$checkBoxElement = $div;
        }

        function CheckList(selector) {
            if (!selector) {
                throw new Error("selector of checklist isn`t provided");

            }
            this.$checklistElement = $(selector);
            if (this.$checklistElement.length === 0) {
                throw new Error(selector + ' wrong selector of checklist');
            }
        }
        CheckList.prototype.removeRow=function(email){
          let row = this.$checklistElement.find('[value = "'+email+'"]');
          $row.closest('[data-coffee-role = "checkbox"]').remove();
        };
        CheckList.prototype.addCheckBoxHandler=function(fn){
            this.$checklistElement.on('input', function (event) {
                fn(event.target.value);
            });
        };

        CheckList.prototype.addRow = function (order) {
            let row = new Row(order);
            this.$checklistElement.append(row.$checkBoxElement);
        };
        App.CheckList = CheckList;

        window.App = App;
    }

)(window);

