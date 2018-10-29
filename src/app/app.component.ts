import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cusine = 'Ready?'
  init = true
  ingredient: String[] = []
  title = '九章全栈基础课!';


  add1() {
    this.cusine = 'onion'
    this.ingredient.push('onion')
  }

  add2() {
  this.cusine = 'chicken'
    this.ingredient.push('chicken')
  }

  add3() {
  this.cusine = 'garlic'
    this.ingredient.push('garlic')
  }

  add4() {
  this.cusine = 'curry'
    this.ingredient.push('curry')
  }

  add5() {
    this.cusine = 'egg'
    this.ingredient.push('egg')
  }

  add6() {
      this.cusine = 'orange'

    this.ingredient.push('orange')
  }

  add7() {
      this.cusine = 'carrot'
    this.ingredient.push('carrot')
  }

  add8() {
  this.cusine = 'potato'
    this.ingredient.push('potato')
  }

  add9() {
  this.cusine = 'lettuce'
    this.ingredient.push('lettuce')
  }

  add10() {
  this.cusine = 'magic seasoning'
    this.ingredient.push('magic')
  }

  cook() {

    if (this.ingredient.includes('chicken') && this.ingredient.includes('orange') && this.ingredient.includes('magic'))
      {this.cusine = 'Orange chicken';this.init = false;return;}
    if (this.ingredient.includes('chicken') && this.ingredient.includes('curry') && this.ingredient.igncludes('potato') && this.ingredient.includes('carrot') && this.ingredient.includes('onion'))
      {this.cusine = 'Chicken curry';this.init = false;return;}
    this.cusine = 'You got nothing';
    this.init = false;
  }

  restart() {
    this.ingredient = []
    this.cusine = 'Ready?'
    this.init = true;
  }
}
