javascript:(function()%7B%2F%2F main func%0Afunction main() %7B%0A  %2F%2F get local storage%0A  var y %3D window.localStorage.getItem("gameState")%3B%0A  const obj %3D JSON.parse(y)%3B%0A%0A  %2F%2F print out solution%0A  alert(obj.solution)%3B%0A%7D%0A%0A%0A%2F%2F if true%0Aif (true) %7B%0A  %2F%2F try and catch for errors%0A  try %7B%0A    %2F%2F run main func%0A    main()%3B%0A  %7D%0A%0A  catch %7B%0A    %2F%2F print error%0A    alert("sorry there was an error")%3B%0A  %7D%0A%7D%7D)()%3B
