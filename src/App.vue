<script>
export default {
  name: 'App',
  data() {
    return {
      gameOn: true,
      statusMessage: 'Next player X',
      activePlayer: 'X',
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      wins: [
        //rows
        [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }],
        [{ row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }],
        [{ row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }],
        //collumns
        [{ row: 0, col: 0 }, { row: 1, col: 0 }, { row: 2, col: 0 }],
        [{ row: 0, col: 1 }, { row: 1, col: 1 }, { row: 2, col: 1 }],
        [{ row: 0, col: 2 }, { row: 1, col: 2 }, { row: 2, col: 2 }],
        //diagonals
        [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 }],
        [{ row: 0, col: 2 }, { row: 1, col: 1 }, { row: 2, col: 0 }],
      ]

    }
  },
  methods: {
    onClick(row, col, player) {
      if (this.gameOn && this.cellIsEmpty(row, col)) {
        
        this.board[row][col] = player;

        if (this.playerHasWon(player)) {
          this.statusMessage = player + ' has won!';
          this.gameOn = false;
        }
        else if (this.gameIsTie()) {
          this.statusMessage = 'Tie, end of game, clict reset'
          this.gameOn = false
        }
        else {
          this.togglePlayer()
        }
      }
    },

    togglePlayer() {
      this.activePlayer === 'X' ? this.activePlayer = 'O' : this.activePlayer = 'X'
      this.statusMessage = 'Next player ' + this.activePlayer
    },

    reset() {
      this.togglePlayer()
      this.initializeGameBoard()
      this.gameOn = true
    },

    initializeGameBoard() {
      this.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]
    },

    cellIsEmpty(row, coll){
      return this.board[row][coll] === ''
    },

    playerHasWon(player) {
      for (let win of this.wins) {
        if (this.detectWin(win, player)) {
          return true
        };
      }
      return false
    },

    detectWin(win, player) {
      for (let cell of win) {
        if (this.board[cell.row][cell.col] !== player) {
          return false
        }
      }
      return true
    },

    gameIsTie() {
      for (const row of this.board) {
        for (const cell of row) {
          if (cell === '') {
            return false
          }
        }
      }
      return true
    }

  }
}

</script>

<template>
  <div id="app">
    <div class="status">{{ statusMessage }}</div>
    <button v-on:click="reset">Reset</button>
    <template class="board" v-for="(row, rowIndex) in board" :key="row">
      <div class="row">
        <button v-for="(cell, cellIndex) in row" :key="cell" v-on:click="onClick(rowIndex, cellIndex, activePlayer)"
          class="square" style="width: 40px;height: 40px;">{{ cell }}</button>
      </div>
    </template>
  </div>
</template>



<style scoped>
#app {
  display: block;
}

.board {
  display: flex
}
</style>
