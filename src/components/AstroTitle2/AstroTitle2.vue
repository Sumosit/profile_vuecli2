<template>
  <div class="app-field">
    <div class="app">
      <div v-for="(letter, index) in mainWord" :key="index" class="letter-field">
        <span>{{ getLetter(index) }}</span>
      </div>
      <div class="line-field">
        <div class="line-field-part line-field-part-left">
          <div ref="'leftLine'" :style="{
            'height': lineWidth + 'px',
            'transition': lineTransition + 's'
          }" id="leftLine" class="leftLine"></div>
        </div>
        <div class="line-field-part line-field-part-right">
          <div class="right-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "AstroTitle2",
  data() {
    return {
      alphabet: ['A', 'B', 'C', 'D', 'E',
        'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y',
        'Z'],
      mainWord: 'ASTRO TITLE 2',
      word: [],
      lineWidth: 0,
      lineTransition: 0
    }
  },
  mounted() {
    this.lineWidth = document.querySelector('.line-field').offsetWidth + 50;
    // невидимый пробел
    for (let i = 0; i < this.mainWord.length; i++) {
      this.word.push("⠀");
    }
    this.addLetter();
  },
  methods: {
    addLetter() {
      let count = 0;
      this.lineTransition = '1.7';
      this.lineWidth = document.querySelector('.line-field').offsetWidth + 50;
      setInterval(() => {
        if (count <= this.mainWord.length) {
          this.setLetter(count);
          count++;
        }
      }, 100);
      setTimeout(() => {
        this.lineTransition = '0';
        this.lineWidth = '0';
        this.word = [];
        setTimeout(() => {
          for (let i = 0; i < this.mainWord.length; i++) {
            this.word.push("⠀");
          }
          this.addLetter();
        }, 1000)
      }, 5000);
    },
    setLetter(value) {
      let tick = 0;
      setInterval(() => {
        if (this.word[value] !== " ") {
          if (tick <= 26) {
            // this.lineWidth+= 7;
            let index = Math.floor((Math.random() * (25 - 1) + 1));
            this.word[value] = this.alphabet[index];
            Vue.set(this.word, value, this.alphabet[index])
            tick++;
          } else if (tick === 27) {
            this.word[value] = this.mainWord[value];
            Vue.set(this.word, value, this.mainWord[value])
            tick++;
          }
        }
      }, 30)
    },
    getLetter(value) {
      return this.word[value];
    }
  }
}
</script>

<style scoped>
@import "astro-title-2.scss";

.app-field {
  user-select: none;
  z-index: 1111;
  position: absolute;
  width: 99%;
  height: 99%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  position: relative;
  display: flex;
  justify-content: flex-start;
}

.letter-field {
  z-index: 6666;
  white-space: break-spaces;
  width: 64px;
  height: 170px;
  font-size: 170px;
  display: flex;
  justify-content: center;
}

.line-field {
  z-index: 5555;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
}

.line-field-part {
  flex: 50%;
  display: flex;
}

.line-field-part-left {
  align-items: center;
  justify-content: flex-end;
}

.line-field-part-right {
  align-items: center;
  justify-content: flex-start;
}

.leftLine, .right-line {
  transition: 1.7s;
  background: #ebd834;
}

.leftLine {
  height: 0px;
  width: 4px;
  transform: rotateZ(90deg);
}

/*	.right-line {

		height: 100px;
		transform: rotateZ(90deg);
	}
*/
div {

}
</style>
