// react er kisu good practices ..
// react a amra sbkisu soto soto component a vaag kore nibo; r jtotuku possible components gulo independent rakhar try krbo

// ei inheritance method er kisu problem ..
/*
1. ei text component jehetu depends on emoji; so emoji jodi ami delete kore dei, tahole text component kin2 kaj krbe na!
2. child a boshe akjn developer ashole bujhe na parent component ki kaj krbe, jtokkhn na she parent component a jasse!
3. App.js thk bujhar upay nai Text er adou kono parent ase ki na!
future a kono component add hoileo they'll be tightly coupled i.e. DEPENDENT
4. Emoji sarao Text er jodi aro parent component thake, tahole seta k extend krbo kivabe?! chain akare (NESTED WAY) te kra jaito extend, but that's ABSURD!
*/