const confi= [{title:'fruits', A:'Apple', B:'Banana'},
  {title:'Animals', A:'Ant', B:'Bat'},
{title:'Country', A:'Angola', B:'Burundi'}];

confi.forEach(confidence);

function confidence(confi, index, array){
  console.log(`${confi.title} : ${confi.A} , ${confi.B}`);
}