// composition method a, amra extend rakhbo e NAA, so we don't need class component; rather we can utilize functional component
// eikhane, inhertiance a Emoji.js a jei addEmoji function silo, seita ami amdr ei function a e props akare akbare niye nibo!
export default function Text( {addEmoji, addBracket} ) {
  // ei functional component jno aka e kaj kre, shei jnno text newa!
  let text = 'A quick brown fox jumps over the lazy dog';
    if (addEmoji) {
      text = addEmoji(text, '❤️');
    }

    if(addBracket) text = addBracket(text);
    {/* parentComponent thk addEmoji na pathaile, default text pathiye dewa hbe, so now, text component is NOT_DEPENDENT on another component */}

  // return <div>{addEmoji ? addEmoji(text, '❤️') : text}</div>;

  return <div>{text}</div>

}