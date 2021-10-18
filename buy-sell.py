class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        testPrice = prices[:]
        testPrice.sort(reverse=True)
        profit = 0
        # max_profit = 0
        start = prices[0]
        length = len(prices)

        if(length == 0 or length == 1 or prices == testPrice):
            return 0
        for i in range(1, len(prices)):
            if start < prices[i]:
                if profit < prices[i] - start:
                    profit = prices[i] - start
                # if max_profit<profit:
                #     max_profit = profit
            else:
                start = prices[i]
        return profit
