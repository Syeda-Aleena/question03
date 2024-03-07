var personName = "Syeda Aleena";
// In lowercase
console.log("lowercase:", personName.toLowerCase());
// In Uppercase
console.log("uppercase:", personName.toUpperCase());
// In Titlecase
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
