/* It's New Year's Eve, so let's play some dicec games!  It'll be fun.  What could go wrong?

1. Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).

2. Second, create a function playFives(num), which should call rollOne() multiple times - 'num' times, in fact, where 'num' is input parameter to playFives(num).  Each time, it should print the value rollOne() returns, and if that roll value is 5, also print "That's good luck !".

3. Third, create a new function playStatistics(), which should call rollOne() eight times (but not print anything after each call).  After the last of these eight calls, it should print oput the lowest and highest value that it recieves from rollOne(), among those eight calls.

4. Fourth, make a copy of playStatistics() and add code to it to make playStatistics2(), that at the end (inaddition to printing high & low rolls), it also prints the total sum of eight rolls.

5. Fifth, copy playStatistics2() and add code to it to make playStatistics3(num), so that it will roll as many times as you want, instead of always doing this eight times.

6. Finally, make a copy of play playStatistics3 and change it to create playStatistics4(num), so that at the end instead of total sum, it prints the average roll.
