/**
 * TODO: Assign your own values to meet the conditions below:
 *
 * 1. Declare an object, `customer`. Initialize it with the following properties:
 *  - `firstName`
 *  - `lastName`
 *  - `id`
 *  - `phoneNumber`
 * - `email`
 *
 * All should be strings except for `id`, which should be a number.
 *
 * 2. Mutate `customer` to add another property. Name it `address`. The value should be another object (nested objects) with the following properties:
 *  - `street`
 * - `city`
 * - `state`
 * - `zipCode`
 *
 * Use strings for all of these values.
 *
 * 3. Use a template literal to `console.log` a message, "Welcome, <firstName> <lastName>!". Use the `customer` object, interpolation and dot notation to access the appropriate properties.
 *
 * 4. Create a new object, `product` (or give it a better name). Initialize it with the following properties:
 * - `name`
 * - `price`
 * - `description`
 * - `quantity`
 *
 * name and description are strings. Others are numbers.
 *
 * 5. Pretend that the customer has added 7 of the product to their cart (Insure that the value you used for 'quantity' above is over 7.).
 * You need to `log` a message to the screen that says, "Total: $<total>". Calculate the appropriate total by multiplying the price of the product by the quantity. Once again, use interpolation in your template literal.
 *
 * 6. Log a new message that prints either 'true' or 'false' to the screen depending on whether or not the customer spent over $100. Use conditional operators to accomplish this. Don't worry about the '$' symbol. Just use the number 100.
 *
 * 7. Update `product` to reflect the new quantity. In other words, the new quantity value should be 7 less than whatever you initialized it with.
 */

const customer = {
  firstName: "Roxana",
  lastName: "Vatamanu",
  id: 1,
  phoneNumber: "0711111111",
  email: "roxana.vatamanu@yahoo.com",
};
customer.address = {
  street: "Olympic Way",
  city: "New York",
  state: "New York",
  zipCode: "183646",
};
console.log(`Welcome, ${customer.firstName} ${customer.lastName}!`);
const product = {
  name: "notebook",
  price: 10,
  description: "60 pages, A4 format",
  quantity: 15,
};
console.log(`Total: ${7 * product.price}`);
const total = product.quantity * product.price;
if (total > 100) {
  console.log("True");
} else {
  console.log("False");
}

// I got up to step 7, this part I added it after you explained in class.
// product.quantity=product.quantity-7; that's what the line below does, eslint edited it
product.quantity -= 7;
