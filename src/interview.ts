interface A {
  name: string;
}

interface B {
  date: Date;
}

function foo(arg: A | B) {
  if () {
    console.log(arg.name);
  } else {
    console.log(arg.date);
  }
}
