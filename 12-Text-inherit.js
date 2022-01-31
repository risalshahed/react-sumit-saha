// It's child component of Emoji.js component

// Text component emoji er functions USE krbe
// Text component emoji er class extend krbe

import Emoji from "./Emoji";

export default class Text extends Emoji {
  // *** constructor dei r na dei, akta constructor shob class a e INVISIBLY thake! r akta class a KOKHONOI 1 er beshi constructor newa jaay na
  constructor(props) {
    // super keyword is used to call the constructor of the parent class and to access parents' properties & methods
    super(props);
  }

  render() {

    // jehetu ei component diya amra Emoji component EXTEND krci, plus super(props) diye parent class i.e. Emoji er porops call koresi, so amra addEmoji soho any function & other props eikhane access krte parbo; **addEmoji er arguments text & emoji ase (see in Emoji.js file)
    const decoratedText = this.addEmoji('The five boxing wizards jump quickly', '❤️');

    // parent component i.e. Emoji.js er render metho call krbo
    // super i.e. parent er render function a kono parameter na dle, Emoji.js file er text change hbe na!
    return super.render(decoratedText);
  }

  // react er kisu good practices ..
  // react a amra sbkisu soto soto component a vaag kore nibo; r jtotuku possible components gulo independent rakhar try krbo

  // ei inheritance method er kisu problem ..\
  // ei text component jehetu depends on emoji; so emoji jodi ami delete kore dei, tahole text component kin2 kaj krbe na!
  // secondly, child a boshe akjn developer ashole bujhe na parent component ki kaj krbe, jtokkhn na she parent component a jasse!
  // App.js thk bujhar upay nai Text er adou kono parent ase ki na!
  // future a kono component add hoileo they'll be tightly coupled i.e. DEPENDENT
  // Emoji sarao Text er jodi aro parent component thake, tahole seta k extend krbo kivabe?! chain akare (NESTED WAY) te kra jaito extend, but that's ABSURD!

}

