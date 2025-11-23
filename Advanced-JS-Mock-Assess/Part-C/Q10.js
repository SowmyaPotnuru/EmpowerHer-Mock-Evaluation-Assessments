let count = 0
function counter(){
  function innerCounter(){
    count += 1;
    console.log(count)
  }
  return innerCounter();
}

// const c = counter();
counter(); // 1
counter(); // 2
counter(); // 3
