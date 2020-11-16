
function add(n1:number,n2:number) {
  return n1+n2
}
let combineValues:(a:number, b:number) => number;


function addAndHandle(n1:number,n2:number,cb:(num:number)=>void) {
  const result = n1+n1
  cb(result)
}

addAndHandle(10,20,(result) => {
  console.log(result);
})