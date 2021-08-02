var SERVER_URL="https://dev.cs.smu.ca:9898"
function empty_value(){
    var name = $("name").val();
    var address = $("address").val();
    var phone=$("phone").val();
    if(name=='' || address=='' || phone==''){
        alert("Input field is empty");
        return false;
    }
    var details={
        "name":document.getElementById("name").value,
        "address":document.getElementById("address").value,
        "phone":document.getElementById("phone").value,
    }
    
    $.post(SERVER_URL+"/adduniversitydetails", details,function(data){
    alert(data);
    });
    
    
}