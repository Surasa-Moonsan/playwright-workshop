Feature: Checkout

Background:
  Given the user in on the login page
  When the user submit credentials "demo@demo.com" and "Welcome1"
  Then the user should be redirect to dashboard

@CHECK01
Scenario: User able to add product to cart
  Given the user adds product name "Travel Bag"
  Given the user adds product name "Apple Watch"
  Given the user adds product name "Hand Bag"
  When the user process to checkout
  And the user submits payment with credit card details
    | cardholderName | Surasa Moonsan   |
    | cardNumber     | 5555555555554444 |
    | expiryDate     | 12/2026          |
    | cvv            | 123              |
  