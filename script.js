const anchor = document.querySelectorAll("a");

anchor.forEach(function (anchor) {
  anchor.addEventListener("focus", (e) => {
    console.log(`Anchor ${e.currentTarget} is focused`);
  });
});

//Output:
//Anchor http://localhost:5500/#tbr is focused
//Anchor http://localhost:5500/#fave-books is focused
