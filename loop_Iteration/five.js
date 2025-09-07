const coding = ["js", "c++", "py", "java"];

coding.forEach(function (item) {
  // console.log(item)
});

coding.forEach((item) => {
  //   console.log(item);
});

function printMe(item) {
  // console.log(item)
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  // console.log(item,index,arr)
});

const myCoding = [
  {
    languagename: "java",
    languagefilename: "java",
  },
  {
    languagename: "javaScript",
    languagefilename: "js",
  },
  {
    languagename: "C++",
    languagefilename: "cpp",
  }
];

myCoding.forEach((item)=>{
    console.log(`${item.languagename},${item.languagefilename}`)
})

