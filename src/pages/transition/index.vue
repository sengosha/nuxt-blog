<template>
 <div class="container">
   <div>
    <button @click="show = !show">お試し</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>

  <div id="example-2">
    <button @click="show = !show">Toggle show</button>
    <transition name="bounce">
      <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>
  </div>

  <div id="example-3">
    <button @click="show = !show">
      Toggle render
    </button>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated wobble"
      leave-active-class="animated heartBeat"
    >
      <p v-if="show">hello</p>
    </transition>
  </div>

  <div id="example-4">
    <button @click="show = !show">
      Toggle
    </button>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <p v-if="show">
        Demo
      </p>
    </transition>
  </div>

  <div id="list-complete-demo" class="demo">
    <button v-on:click="shuffleItems">Shuffle</button>
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="list-complete" tag="p">
      <span
        v-for="item in items"
        v-bind:key="item"
        class="list-complete-item"
      >
        {{ item }}
      </span>
    </transition-group>
  </div>

  <div id="sudoku-demo" class="demo">
    <h1>Lazy Sudoku</h1>
    <p>Keep hitting the shuffle button until you win.</p>

    <button @click="shuffleCells">
      Shuffle
    </button>
    <transition-group name="cell" tag="div" class="container">
      <div v-for="cell in cells" :key="cell.id" class="cell">
        {{ cell.number }}
      </div>
    </transition-group>
  </div>

 </div>
</template>

<script>

export default {
 data() {
   return {
     show: false,
     items: [1,2,3,4,5,6,7,8,9],
     nextNum: 10,
     cells: Array.apply(null, { length: 81 }).map(function(_, index) {
      return {
        id: index,
        number: (index % 9) + 1
      };
    })
   }
 },
 head() {
   return {
     script: [
       {
         src: 'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js'
       },
       {
         src: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js'
       }
     ],
     link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1'
      }
    ]
   }
 },
 methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 }, { complete: this.done() } )
      Velocity(el, { fontSize: '1em' })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: this.done() })
    },
    done: function() {
      console.log("animation done")
    },
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffleItems: function () {
      this.items = _.shuffle(this.items)
    },
    shuffleCells: function () {
      this.cells = _.shuffle(this.cells)
    }
  }
}
</script>

<style scoped>
p {
  transform: translateX(10px);
}

.fade-enter {
  opacity: 0;
  transform: translateX(0px);
 }
.fade-enter-active {
  transition: all 2s;
}

.fade-enter-to {
  opacity: 1;
  transform: translateX(10px);
 }

.fade-leave-active {
  transition: all 2s;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(0px);
}

.bounce-enter-active {
  animation: bounce-in 2.5s;
}
.bounce-leave-active {
  animation: bounce-in 2.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}

.container {
  display: flex;
  flex-wrap: wrap;
  width: 238px;
  margin-top: 10px;
}
.cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaa;
  margin-right: -1px;
  margin-bottom: -1px;
}
.cell:nth-child(3n) {
  margin-right: 0;
}
.cell:nth-child(27n) {
  margin-bottom: 0;
}
.cell-move {
  transition: transform 1s;
}
</style>
