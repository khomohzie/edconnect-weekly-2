var myArray = [
    {field: 'id', operator: 'eq', value: id}, 
    {field: 'cStatus', operator: 'eq', value: cStatus}, 
    {field: 'money', operator: 'eq', value: money}
];

/* How do I remove a specific one based on its property?

e.g. How would I remove the array object with 'money' as the field property? */

myArray = myArray.filter(function (obj) {
    return obj.field !== 'money';
});

/* Please note that filter creates a new array. Any other variables referring to the original array would not get the filtered data although you update your original variable myArray with the new reference. Use with caution. */

/* Iterate through the array, and splice out the ones you don't want. For easier use, iterate backwards so you don't have to take into account the live nature of the array: 
Live nature means that if you iterate forwards over an array by using its length as part of the iteration logic and its length changes because it has elements removed or added you can end up running off the end of the array or not doing the operation for every item in the array. Going backwards makes that much less likely as it works towards a static 0 index rather than a moving length. */

for (var i = myArray.length - 1; i >= 0; i--) {
    if (myArray.field == 'money') {
        myArray.splice(i, 1);
    }
}

// Say you want to remove the second object by it's field property.

// With ES6 it's as easy as this.

myArray.splice(myArray.findIndex(item => item.field === "cStatus"), 1)

// ES6's .findIndex()

myArray.splice(myArray.findIndex(myArray, function (item) {
    return item.value === 'money';
}), 1
);

const arr = arr.filter(item => item.key !== "some value");