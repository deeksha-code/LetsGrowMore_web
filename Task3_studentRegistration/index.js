var rown = 1;
const pic = "avatar.png";

function add(){
	let fname = document.getElementById('fname').value;
	let lname = document.getElementById('lname').value;
    let phone = document.getElementById('phone').value;
	let email = document.getElementById('email').value;
	let dob = document.getElementById('dob').value;
    let img = document.getElementById('image').value;
    
    let gen = document.getElementById('list').value;

    if(fname == "" || phone == "" || gen == ""){
        alert("Name/Phone Number is not entered")
    }
    else{

	    let table = document.getElementById('display');
        var row = table.insertRow(rown);
        var col1 = row.insertCell(-1);
            var col2 = row.insertCell(0);
            col1.innerHTML = "<br><b>Student Name : </b>" + fname + " " + lname + 
                            "<br><br><b> Phone Number : </b>" + phone +
                            "<br><b> Email ID     : </b>" + email +
                            "<br><br><b> Gender       : </b>" + gen +
                        "<br><b> DOB          : </b>" + dob
        col2.innerHTML = "<img style='margin-left:15px;' src='" + img + "' onerror='error(this);' width='160px' height='140px' alt='profilepic'>"
        rown = rown + 1;
        del();
    }   
}

function del(){
    console.log("clear");
    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('email').value = "";
    document.getElementById('dob').value = "";
    document.getElementById('image').value = "";
}

function error(p){
    p.src = pic;
    p.onerror = null;
    return true;
}