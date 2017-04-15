#!/usr/bin/env node

function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}

var person = {

	firstName: "Chad",
	lastName: "Allred",
	fullName:function(){'use strict';
			return this.firstName + ' ' + this.lastName;
			}
};

divider('Person');

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());

var calculator = {
	
	operator01: -1,
	operator02: -1,
	add: function(){'use strict';
		return this.operator01 + this.operator02;
		},
	subtract: function(){'use strict';
		return this.operator01 - this.operator02;
		},
	multiply: function(){'use strict';
		return this.operator01 * this.operator02;
		}
};

divider('Calculator');

calculator.operator01 = person.firstName.length;
calculator.operator02 = person.lastName.length;

console.log('Length of firstName: ' + calculator.operator01);
console.log('Length of lastName: ' + calculator.operator02);
console.log('Add: ' + calculator.add());
console.log('Subtract: ' + calculator.subtract());
console.log('Multiply: ' + calculator.multiply());
