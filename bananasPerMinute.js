// # Monkey Eating Bananas

// In this classic problem, you are a hungry monkey that sneaked into a banana store. We are given a time in minutes, `m`, which is how long until you get discovered. The store bananas are stored in `n` boxes. We are also given an array of length `n`, `bananas`, where `bananas[i]` represents the number of bananas in a box.

// We want to calculate how many bananas per minute we need to eat to finish all the bananas within `m` minutes.

// However, there is a catch:

// - At any given minute, we can only eat from one box.

// Find the minimum number of bananas per minute, `k`, that allows you to eat all bananas within `m` minutes, without eating from different boxes in the same minute.

// Example 1:
// bananas = [5, 8, 12]
// m = 6

// Output: 5
// At 5 bananas per minute, you need:
// - 1 minute to eat 5 bananas
// - 2 minutes to eat 8 bananas
// - 3 minutes to eat 12 bananas
// Total time = 6 minutes
// At 4 bananas per minute, you'd need an extra minute for the first box, for a total of 7 minutes.

// Example 2:
// bananas = [15, 5, 10, 20]
// m = 7

// Output: 10
// At 10 bananas per minute, you need:
// - 2 minutes to eat 15 bananas
// - 1 minute to eat 5 bananas
// - 1 minute to eat 10 bananas
// - 2 minutes to eat 20 bananas
// Total time = 6 minutes
// At 9 bananas per minute, you'd need a couple of extra minutes, which would exceed m.

// Example 3:
// bananas = [8, 16, 24]
// m = 3

// Output: 24
// At 24 bananas per minute, you need:
// - 1 minute to eat 8 bananas
// - 1 minute to eat 16 bananas
// - 1 minute to eat 24 bananas
// Total time = 3 minutes

// Constraints:

// - `1 <= bananas.length <= 10^5`
// - `1 <= m <= 10^8`
// - `1 <= bananas[i] <= 10^8`

/*
Approach:
This is a binary search / transition problem. 
We're trying to find the transition point between the number of bananas per minute the monkey
will eat where the time taken to eat is greater than m minutes (i.e. they'll get caught), and
the number of bananas per minute the monkey will eat so that they'll eat all the bananas in less
than m minutes (and not get caught).  The lower bound of this is 1 banana per minute, in which case
they'll eat them in n minutes.  The upper bound is max(bananas[i]) per minute, since they have to
spend at least one minute on each box.
*/

