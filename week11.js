var lisaLab = {
    name: "bar",
    func: function() {
        var self = this;
        // this outputs bar because this.name is refering to object lisalab with the property  'name' which has the value bar
        // so it acceses the property name and outputs its value which is bar
        console.log("outer func:  this.name = " + this.name);
        // this outputs bar because because we are consoling self.name and we have variable self which has been assigned the value this
        // self in this case refers to this which then acceses object lisalab that we are reffering to in this moment
        // here self.name is the same as this.name because self is a variable that hold the this identifier
        console.log("outer func:  self.name = " + self.name);
        (function() {
            // This outputs undefined because it is like we are trying to access  property name that is outside the scope of our function(method)
            // this here is like setting another object which is empty therefore it outputs undefined.
            console.log("inner func:  this.name = " + this.name);
            // this outputs bar because we are using self which is a variable that holds our this identifier
            // we are able to access the variable self because it has been declared within function (method) func which is the outer function and therefore it is accesible from this inner anonymous function 
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};

lisaLab.func();



//this identifier has been used to refer to our object lisalab
// anywhere there is this.name automatically our program knows it is refering to object lisalab and property name
console.log("outer func:  this.name = " + this.name);
// this identifier has also been allocated to variable self
// it is a value that has been held by variable self
var self = this;
// this identifier has also been used as a dot notation.
// Instead of
lisaLab.name;
// this identifier is used in place of object lisalab.





//callback functions
function presentation(groupName){
console.log(`Hello everyone this is ${groupName} we are all about javascript?`);
}
// audience is accepting a callback as a paremeter
function audience(className,callback){
var className=`${className}`
callback(className)
}
audience("Beaming with the techies",presentation);

setTimeout(function(){
    console.log("this is a callback function");
},2000);

