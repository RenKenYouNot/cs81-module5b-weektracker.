// Airen Alires – Activity Tracker
// Week of: 07/07–07/13

const myWeek = [
  { day: "Monday", activity: "reading", category: "creative", hoursSpent: 1.5, enjoyment: 8, timeOfDay: "evening" },
  { day: "Tuesday", activity: "watching YouTube", category: "entertainment", hoursSpent: 2, enjoyment: 7, timeOfDay: "evening" },
  { day: "Wednesday", activity: "hiking", category: "physical", hoursSpent: 2.5, enjoyment: 9, timeOfDay: "afternoon" },
  { day: "Thursday", activity: "drawing", category: "creative", hoursSpent: 1.5, enjoyment: 8, timeOfDay: "morning" },
  { day: "Friday", activity: "swimming", category: "physical", hoursSpent: 2, enjoyment: 9, timeOfDay: "afternoon" },
  { day: "Saturday", activity: "baking", category: "creative", hoursSpent: 1.5, enjoyment: 9, timeOfDay: "afternoon" },
  { day: "Sunday", activity: "watching YouTube", category: "entertainment", hoursSpent: 2, enjoyment: 6, timeOfDay: "evening" }
];

// Predictions:
/* 
- I think reading will have the highest enjoyment because it's over 100º where i live right now
so going outside and exerting myself in anyway sounds unpleasant.
- The creative category (reading, drawing, baking) will probably be the most frequent.
- I expect higher enjoyment in the afternoon or evening compared to morning.
*/

function totalPhysicalHours(log) {
  return log
    .filter(entry => entry.category === "physical") // get only physical activities
    .reduce((sum, entry) => sum + entry.hoursSpent, 0); // total the hours
}

function averageEveningEnjoyment(log) {
  const eveningActivities = log.filter(entry => entry.timeOfDay === "evening");
  const totalEnjoyment = eveningActivities.reduce((sum, entry) => sum + entry.enjoyment, 0);
  return (eveningActivities.length > 0) ? (totalEnjoyment / eveningActivities.length).toFixed(1) : 0;
}

function lowEffortHighEnjoyment(log) {
  return log
    .filter(entry => entry.hoursSpent <= 1.5 && entry.enjoyment >= 8)
    .map(entry => entry.activity);
}

console.log("Total hours on physical activities:", totalPhysicalHours(myWeek));
console.log("Average evening enjoyment:", averageEveningEnjoyment(myWeek));
console.log("Low-effort, high-enjoyment activities:", lowEffortHighEnjoyment(myWeek));
