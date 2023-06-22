function showNumbers(first, second) {
    let current = first;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == second) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  showNumbers(5, 15);