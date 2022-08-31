let a: Array<number> = [1, 1, 1, 2];
let visited = [];

for (let indexLeftside: number = 0; indexLeftside < a.length; indexLeftside++) {
  let isUnique = false;
  if (indexLeftside === a.length - 1 && !visited.includes(a[indexLeftside])) console.log(`The unique number is ${a[indexLeftside]}`)
  for (
    let indexRightside = indexLeftside + 1; indexRightside < a.length; indexRightside++) {
        if (visited.includes(a[indexLeftside])) break;
    console.log(`comparison between ${a[indexLeftside]} and ${a[indexRightside]}`);
    if (a[indexLeftside] === a[indexRightside]) {
        visited.push(a[indexLeftside]);
          isUnique = false;
          break;
    } else { isUnique = true;}
  }
  if (isUnique) { console.log(`The unique number is ${a[indexLeftside]}`); break;}
}