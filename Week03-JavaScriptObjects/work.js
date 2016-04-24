#!/usr/bin/env node

var myObject01 = {
    firstName: 'Musi',
    lastName: 'Smoosh'
};

var myObject02 = {
    firstName: 'Susi',
    lastName: 'Smooth',
    fullName: function() {
        'use strict';
        return this.firstName + ' ' + this.lastName;
    }
};

var calculator = {
    addMe: function(operator01,operator02) {
        return operator01 + operator02;
    },
    subMe: function(operator01,operator02) {
        return operator01 - operator02;
    },
    mulMe: function(operator01,operator02) {
        return operator01 * operator02;
    },
    divMe: function(operator01,operator02) {
        return operator01 / operator02;
    }
};

function layout(title) {
    console.log('');
    console.log('====================================');
    console.log(title);
    console.log('====================================');
}

function sublayout(title) {
    console.log('................................');
    console.log(title);
}

layout('Names');
console.log(myObject01.firstName);
console.log(myObject01.lastName);
console.log(myObject02.fullName());

layout('Calculator');

sublayout('Adder 11 + 2');
console.log(calculator.addMe(11,2));
sublayout('Subtractor 13 - 4');
console.log(calculator.subMe(13,4));
sublayout('Multiplyier 0.5 * 6');
console.log(calculator.mulMe(0.5,6));
sublayout('Divider 70/8');
console.log(calculator.divMe(70,8));

layout('Thank You !');