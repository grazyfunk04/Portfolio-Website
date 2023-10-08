// you can use includes, for example:
#include <iostream>
using namespace std;
#include <algorithm>
#include<bits/stdc++.h>

// you can write to stdout for debugging purposes, e.g.
// cout << "this is a debug message" << endl;

 int consec_int(vector<int>& ans) {
        int n = ans.size();
        int ls = INT_MIN;
        vector<vector<int>> dp(n, vector<int>(2001, 0));
        for(int i=0; i<n; i++)
        {
            for(int j=i+1; j<n; j++)
            {
                int difference = ans[j] - ans[i]+1000;
                dp[j][difference] = max(2, dp[i][difference]+1);
                ls = max(ls, dp[j][difference]);
            }
        }
        return ls;
    }


int solution(vector<int> &A) {
    // Implement your solution here
    sort(A.begin(), A.end());
    return consec_int(A);
}
