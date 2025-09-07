//create(Way =1)
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, crytography, network
  setTimeout(function () {
    // console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  //    console.log("Promise consumed");
});

//second promise(Way=2)
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task is complete 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promised consumed 2");
});

//three(way=3)

const promisethree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Subhas", Password: "Subhas@2003" });
  }, 1000);
});

promisethree.then(function (user) {
  console.log(user);
});

//Fourth(Way=4)

const promiseForth = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Munain", Vill: "Kharika" });
    } else {
      reject("ERROR:Somthing went wrong");
    }
  }, 1000);
});
promiseForth
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolve or rejected");
  });

//Promise five(Way=5)

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScripr", Vill: "Kharika" });
    } else {
      reject("ERROR:JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch {
    console.log("Error was handeled..");
  }
}
consumePromiseFive();

// async function getAlldata() {
//   try {
//     const getData = await fetch("https://randomuser.me/api/");
//     const data = await getData.json();
//     console.log(data);
//   } catch {
//     console.log("ERROR", error);
//   }
// }
// getAlldata();

fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
