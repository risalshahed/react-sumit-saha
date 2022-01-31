/* export default function User() {
  return 'Risal';
} */

// Similar Output (props is string)
/* export default function User({ name }) {  // receive 'name' props passed/sent from App.js
  return name;
} */

// Similar Output (props is function)
/* export default function User({ name }) {
  return name();
} */

// Receive function with parameter
export default function User({render}) { // User.js akta dumb component; j janei na se ki
  return render(true);  // retur krbe; app.js a function a ja dewa ase ta e call kore dey!
  // render prop amn akta prop ja akta component er RENDER LOGIC define kre
}