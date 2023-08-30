#include<iostream>
#include<vector>
using namespace std;

class Solution {

public:
bool isSafe(vector<string> &board, int col, int row, int  n) {

    int x = row;
    int y = col;

    while(y >= 0) { // check from right to left since we're filling the queens from left to right

        if(board[x][y] == 'Q') {
            return false;
        }
        y--;
    }
// reset the values of x & y
    x = row;
    y = col;

    while(x >=0 && y >= 0) { // for left diagonal

        if(board[x][y] == 'Q')
         return false;
        
        x--;
        y--;
    }

    x = row;
    y = col;

    while(x < n && y >= 0) { // for right diagonal

        if(board[x][y] == 'Q') 
            return false;

        x++;
        y--;
    }

    return true;
}
public:
void solve(vector<string> &board, vector<vector<string>> &ans, int col, int n) {

    if(col == n) { // if the no of queens are equal to n, push it to ans vector
        ans.push_back(board);
        return;
    }

    for(int row=0; row<n; row++) { // traverse the rows in a single column
        if(isSafe(board, col, row, n)) {
            // push it to the board
            board[row][col] = 'Q'; // set the queen
            solve(board, ans, col+1, n); // recursively call for other columns
            board[row][col] = '.'; // backtracking 
        }
    }
}
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<string> board(n,string(n,'.')); //  board od n*n
        vector<vector<string>> ans;
        int col = 0;

        solve(board, ans, col, n);
        return ans;
    }
};