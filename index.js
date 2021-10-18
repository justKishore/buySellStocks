/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

/**
 * Algorithm:
 * Step 1: Define a function maxProfit that takes array prices as input
 * Step 2: Assign a temp array say (testPrice) to prices array as value
 * Step 3: Sort and reverse the temp array
 * Step 4: Assign a variable profit to 0, start to first element of prices (price[0]) and length to length of prices
 * Step 5: If length is either 0 or 1 or prices and testPrice are equal (i.e, prices is in decending order) go to step 5.1 or step 6
 * Step 5.1: return 0
 * Step 6: Loop till length of prices staring with i value 1
 * Step 6.1: if start value less than prices[i], go to step 6.1.1 else to 6.2
 * Step 6.1.1: if profit is less than value of prices[i] - start then assign profit to prices[i] - start
 * Step 6.2: Assign start to prices[i]
 * Step 7: End For loop
 * Step 8: return profit
 */

// Code
var maxProfit = function (prices) {
  // For faster execution don't need checking reverse i.e from line 26 to line 41
  let testPrice = [...prices].sort(function (a, b) {
    return a - b;
  });
  testPrice.reverse();

  let profit = 0;
  let start = prices[0];
  let length = prices.length;

  if (
    length === 0 ||
    length === 1 ||
    JSON.stringify(testPrice) === JSON.stringify(prices)
  ) {
    return 0;
  }

  for (let i = 1; i < length; i++) {
    if (start < prices[i]) {
      if (profit < prices[i] - start) {
        profit = prices[i] - start;
      }
    } else {
      start = prices[i];
    }
  }

  return profit;
};
var prices = [7, 4, 2, 11, 1];
console.log(maxProfit(prices));
