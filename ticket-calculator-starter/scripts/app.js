/* ============================================================
   Chinook Theatre — Ticket Cost Calculator  |  STARTER
   CPRG 213 — Web Development 1

   YOUR NAME: Shawn Ahmad

   The HTML and CSS are already built for you. Your job is to write
   the JavaScript that makes the "Calculate Total" button work.

   This uses the same skills as the Week 7 Tip Calculator:
   variables, a function, if/else, template literals, getElementById,
   .value, .innerHTML, and addEventListener.

   Follow the numbered steps below. Replace each TODO with your code.
   ============================================================ */

/* ---------- 1. Get references to the HTML elements ----------
   TODO: Use document.getElementById() to create a variable for each of:
     - the ticket-type <select>   → id="ticket-type"
     - the quantity <input>        → id="quantity"
     - the calculate <button>      → id="calculate-button"
     - the result <div>            → id="result"
*/

// INSERT YOUR CODE HERE

const ticket_type = document.getElementById("ticket-type");
const quant = document.getElementById("quantity");
const calc_button = document.getElementById("calculate-button");
const result = document.getElementById("result");


/* ---------- Pricing rules (provided for you) ---------- */
const GROUP_SIZE     = 10;    // 10+ tickets qualifies for the group discount
const GROUP_DISCOUNT = 0.10;  // 10% off the subtotal
const BOOKING_FEE    = 2.50;  // flat fee, once per order


/* ---------- 2. Write the calculation function ----------
   TODO: Create a function called calculateTotal() that:
     a. Reads the selected ticket price as a number
        (the <select> value is already the price — use Number()).
     b. Reads the quantity as a whole number (use parseInt).
     c. Validates the quantity: if it is not a number or is less than 1,
        call showError("...") with a helpful message and stop (return).
     d. Calculates:
          subtotal = price * quantity
          discount = 10% of the subtotal IF quantity is 10 or more, otherwise 0
          total    = subtotal - discount + BOOKING_FEE
     e. Displays the result inside the result <div> using .innerHTML.
        Show the subtotal, the discount (only when there is one),
        the booking fee, and the total. Use .toFixed(2) for money.
*/

// INSERT YOUR CODE HERE

const calculateTotal = () => {

   const ticket_price = Number(ticket_type.value);
   const quantity = parseInt(quant.value);
 
   if (isNaN(ticket_price) || ticket_price <= 0) {
    showError("Please enter an amount greater than 0");
    return;
   }

   // Calculations

   const subtotal = ticket_price * quantity;
   const discount = (ticket_price * quantity) * GROUP_DISCOUNT;
   const total = subtotal + BOOKING_FEE;

  if (quantity >= GROUP_SIZE) {
      

      result.innerHTML = `

      <div class='result'>
      <span>Subtotal $${subtotal.toFixed(2)}</span>
      <span>Discount $${discount.toFixed(2)}</span>
      </div>

      <div class = 'result-row'>
      <span>$${total}</span>
      </div>`;
      
      return;
  }

   result.className = "";
   result.style.display = "block";
   result.innerHTML = 
   `<div class='result'>
   <span>Subtotal $${subtotal.toFixed(2)}</span>
   
   <div class='result-row'>
   <span>Total $${total.toFixed(2)}</span>
   </div>`;

 
/* ---------- 3. Helper: show an error message (provided for you) ----------
   Uncomment this once you have created your result variable above.
*/
function showError(message) {
  result.className = "error";
  result.style.display = "block";
result.textContent = message;
}
};

/* ---------- 4. Connect the button ----------
   TODO: Add a "click" event listener to the calculate button
   that runs your calculateTotal function.
*/

// INSERT YOUR CODE HERE}

calc_button.addEventListener("click", calculateTotal);


