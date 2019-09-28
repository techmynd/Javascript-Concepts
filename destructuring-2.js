let uniStudent = student => {
  let {name, university} = student;
  console.log(`${name} from ${university}`);
}

uniStudent({
  name: "Javed",
  university: "VU"
});


////////////////// OR ////////////

// destructure while taking argument
let uniStudent = ({name, university}) => {
  console.log(`${name} from ${university}`);
}

uniStudent({
  name: "Javed",
  university: "VU"
});