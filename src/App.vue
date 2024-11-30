<script>
export default {
  name:'App',
  data() {
  return {
    status:'Next player X',
    activePlayer: 'X'
  }
},
methods:{
  onClick(id,player){
    this.togglePlayer()
    console.log(id,player);
  },

  togglePlayer(){
    this.activePlayer === 'X' ? this.activePlayer = 'O' : this.activePlayer = 'X'
    this.status = 'Next player ' + this.activePlayer
    console.log(this.status)
  }
  
}
}

</script>

<template>
  <div id="app">
    <div class="status">{{ status }}</div>
    <button>Reset</button>
      <template class="board" v-for="row in 3" :key="row">
        <div class="row">
          <button v-for="button in 3" :key="button" v-on:click="onClick([row,button],activePlayer)" class="square" style="width: 40px;height: 40px;"></button>
        </div>
      </template>
  </div>
</template>



<style scoped>
#app{
  display: block;
}
.board{
  display:flex
}
</style>
