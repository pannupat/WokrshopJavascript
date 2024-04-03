let x=11;
for (let i = 1; i < x; i++){
    let str = "* "
    let space = '  ';
    console.log(space.repeat((x - i)) + str.repeat(i * 2 - 1))
}