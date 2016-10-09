'use strict';

/*  Author: Rakesh Sharma 
 *  Date: Date.now()
 */

angular.module('mainControllers', [
    'main-Module'
    ])

angular.module('main-Module', [])

.controller('mainController', function($scope) {
         
        this.title = 'Expense Claim Malaysia';
        
        this.rows = [
            {
                transactionDate: '',
                costCenter: '',
                glCode: '',
                desc: '',
                currency: '',
                amount: '',
                gst: '',
                exchangeRate: '',
                totalAmount: ''
            }
        ];

        this.addRow = function(){
            this.rows.push({
                transactionDate: '',
                costCenter: '',
                glCode: '',
                desc: '',
                currency: '',
                amount: '',
                gst: '',
                exchangeRate: '',
                totalAmount: ''
            });
            console.log(this.rows);
        };

        this.getTotalAmount = function () {
            var total = 0;
            angular.forEach(this.rows, function(item) {
                total += item.totalAmount;
            });
            return total;
        }

        this.submitForm = function() {
            this.form = {};
            for(var i = 0; i < this.rows.length; i++){
                this.rows[i] = [];
            };
            alert('Thanks for submitting!');
            $scope.expenseClaim.$setPristine();
        };
         
});
