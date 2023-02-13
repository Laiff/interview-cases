(() => {
  console.log(1);

  setTimeout(() => {
    console.log(2);
  }, 1000);

  setTimeout(() => {
    console.log(3);
  });

  Promise.resolve(() => console.log(4)).then(() => console.log(5));

  console.log(6);
})();
