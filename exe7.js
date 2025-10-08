

function whatMajor(){
let estanti=[5,2,8,3,9];
let major=estanti[0];
for(let i =0; i < estanti.length;i++){

    if (estanti[i] > major) {
      major = estanti[i]; 


}
}
return major;

}console.log(whatMajor());