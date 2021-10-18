# buySellStocks
LeetCode challenge [best time to buy and sell stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## Algorithm
```
Step 1: Define a function maxProfit that takes array prices as input

Step 2: Assign a temp array say (testPrice) to prices array as value

Step 3: Sort and reverse the temp array

Step 4: Assign a variable profit to 0, start to first element of prices (price[0]) and length to length of prices

Step 5: If length is either 0 or 1 or prices and testPrice are equal (i.e, prices is in decendingorder) go to step 5.1 or step 6

Step 5.1: return 0

Step 6: Loop till length of prices staring with i value 1

Step 6.1: if start value less than prices[i], go to step 6.1.1 else to 6.2

Step 6.1.1: if profit is less than value of prices[i] - start then assign profit to prices[i] - start

Step 6.2: Assign start to prices[i]

Step 7: End For loop

Step 8: return profit
```


