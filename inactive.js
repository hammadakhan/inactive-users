const user = {
  name: "Qasim Asad",
  age: "25",
  city: "san francisco",
  lastActivity: new Date().getTime(),
};

const inactiveFirstStage = () => {
  console.log("User has been inactive for the past 1-2 minutes");
};

const inactiveSecondStage = () => {
  console.log("User has been inactive for the past 3-4 minutes");
};

const inactiveThirdStage = () => {
  console.log("User has been inactive for the past 5-6 minutes");
};

// this is the main method that acts like a worker and runs every 1 minute
setInterval(function () {
  // please write your code here
  let firstInterval = new Date().getTime() - user.lastActivity;
  if (firstInterval <= 2000) {
    inactiveFirstStage();
  }
  if (firstInterval > 2000 && firstInterval < 4000) {
    inactiveSecondStage();
  }
  if (firstInterval > 4000 && firstInterval < 6000) {
    inactiveThirdStage();
  }
  console.log(firstInterval);
  if (firstInterval > 6000) {
    user.lastActivity = new Date().getTime();
    firstInterval = 0;
  }
}, 1000);
