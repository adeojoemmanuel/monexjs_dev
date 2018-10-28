const find = require('find-process');
find('port', 9090).then(function (list) {
    if (!list.length) {
      console.log('port 90 is free now');
    } else {
      console.log(list[0].pid);
    }
})

// console.log(a);

//   list[0].name

find('port', 9090, function(list){
    console.log(list[0].name);
});
