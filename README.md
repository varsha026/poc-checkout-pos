# Customer Checkout system POC
- Here I have used mockdata instead of DB:
    1. Customers: To store and fetch customer data
    2. Items: Items like small, medium, large pizza (Categories can be customized and added by customer). UI can be provided for customer to add these for ease.
    3. Pricing rules: Would be defined and customers could be assigned to rules who are applicable for those.
    4. Rule Categories: Categories of rules, to generalise and apply rules easily to calculate total price while checkout

For POC, as we dont have customer details in a token we hard code the customer. In general, customer details should be read via login details or auth token.

Unit tests not considered during POC.

We can provide UI for customers to enter their pricing rules and items or categories.
Also, based on what customer adds in cart we could call the checkout class method. For now, its hard coded.

* To run:

    Step 1: npm install

    Step 2: npm run start

    (This command runs 3 cases curently from index.ts file. We can add more cases and call them their for now for POC purpose I didnt add command line arguments or a basic UI to add items and calculate total.)
