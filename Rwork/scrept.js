let state = [
    {
        stateId: 1,
        Name: "bihar",
    },
    {
        stateId: 2,
        Name: "UP",
    },
    {
        stateId: 3,
        Name: "mp",
    },
    {
        stateId: 4,
        Name: "rajasthan",
    },
];
let district = [
    // Bihar district
    {
        districId: 1,
        Name: "chapra",
        stateId: 1,
    },
    {
        districId: 2,
        Name: "Siwan",
        stateId: 1,
    },
    {
        districId: 3,
        Name: "Patna",
        stateId: 1,
    },
    // UP district
    {
        districId: 4,
        Name: "agra",
        stateId: 2,
    },
    {
        districId: 5,
        Name: "aligarh",
        stateId: 2,
    },
    {
        districId: 6,
        Name: "prayagraj",
        stateId: 2,
    },
    // mp district
    {
        districId: 7,
        Name: "alirajpur",
        stateId: 3,
    },
    {
        districId: 8,
        Name: "anuppura",
        stateId: 3,
    },
    {
        districId: 9,
        Name: "bhind",
        stateId: 3,
    },
    // rajasthan district
    {
        districId: 10,
        Name: "ajmer",
        stateId: 4,
    },
    {
        districId: 11,
        Name: "alwar",
        stateId: 4,
    },
    {
        districId: 12,
        Name: "banswara",
        stateId: 4,
    },
];

function getDistrict(){
    let     `` = [];  
    var seloctorD = `
<label for="slide">Choose a district:</label>
<select id="district" form="carform">
`;
for (let i = 0; i < dist.length; i++) {
    seloctorD = seloctorD + `
        <option value="seloctorD">${dist[i]}</option>
    `
};
seloctorD = seloctorD + `    </select>`
document.getElementById("seloctorD").innerHTML = seloctorD;
};
getDistrict()


// state input secoctor
function getstateValue(){
    let stateId = document.getElementById('slide').value;
    dist =[]
   for(let i=0; i < district.length; i++){
        // console.log(district[i].stateId)
        if(district[i].stateId== stateId){
        dist.push(district[i].Name)
        }
   };
   console.log(dist)
 


}

let seloctor = `
    <label for="slide">Choose a district:</label>
    <select id="slide"   onClick ="getstateValue()" form="carform">
    <option value='0'>Select</option>`
for (let i = 0; i < state.length; i++) {
    seloctor = seloctor + `
        <option value=${state[i].stateId}>${state[i].Name}</option>
    `
}
seloctor = seloctor + `    </select>`
document.getElementById("seloctor").innerHTML = seloctor;
// district input secoctor



// filter methoed

/*const districResult = state.filter(Result);

function Result(state) {

}*/