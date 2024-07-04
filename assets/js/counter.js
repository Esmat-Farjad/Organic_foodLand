
const element = document.querySelector('#scroll-box');
const counterObserver = new IntersectionObserver((entries, observer) =>{
const [entry] = entries;
if(!entry.isIntersecting) return;
// counting the reports 
let get_reports = document.getElementById("get-report").innerHTML;
let reports = Number(get_reports);
let r_speed = 1;
if(reports > 0){
// speed calculation
for(let i=2; i<=20; i++){
if(reports % i == 0){
r_speed = i;
} 
}
let reportCounts = setInterval(counter);
let report = 0;
function counter(){
let count = document.getElementById("total-report");
count.innerHTML = new Intl.NumberFormat().format(report += r_speed);
if (report >= reports) {
clearInterval(reportCounts);
}
}
}
// location count
let get_location = document.getElementById("get-location").innerHTML;
let locations = Number(get_location);
let l_speed = 1;
if(locations > 0){
// speed calculation
for(let i=2; i<=100; i++){
if(locations % i == 0){
x_speed = i;
} 
}
let locationCount = setInterval(counter);
let location = 0;
function counter(){
let count = document.getElementById("total-location");
count.innerHTML = new Intl.NumberFormat().format(location += l_speed);
if (location >= locations) {
clearInterval(locationCount);
}
}
}
// user counter
// location count
let get_user = document.getElementById("get-user").innerHTML;
let users = Number(get_user);
let u_speed = 1;
if(users > 0){
console.log(100 % 10);
// speed calculation
for(let i=2; i<=100; i++){
if(users % i == 0){
u_speed = i;
} 
}
let userCount = setInterval(counter);
let user = 0;
function counter(){
let count = document.getElementById("total-user");
count.innerHTML = new Intl.NumberFormat().format(user += u_speed);
if (user >= users) {
clearInterval(userCount);
}
}
}

observer.unobserve(element);
},{
root:null,
threshold:0,
});
counterObserver.observe(element);

