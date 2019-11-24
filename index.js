
const teacher = {
    "1001" : {
        "name" : "Deepthi",
        "subject" : "Operating System",
        "credit" : 3
    },
    "1002" : {
        "name" : "Sumesh",
        "subject" : "Theory of Computation",
        "credit" : 4
    },
    "1003" : {
        "name" : "Vineetha",
        "subject" : "System Software",
        "credit" : 3
    }
}

function register(){
    var x = document.getElementById("data")
    if(x.style.display !== "none"){
        x.style.display = "none";
    }

    var x = document.getElementById("back")
    var p = document.getElementById("root1")
    var q = document.getElementById("root2")
    var r = document.getElementById("root3")
    if(x.style.display === "none"){
        x.style.display = "block";
        q.style.display = "block";
        p.style.display = "block";
        r.style.display = "block";
    }
    const id = document.getElementById("teacherId").value
    var name = teacher[id]['name']
    var sub = teacher[id]['subject']
    var cred = teacher[id]['credit']
    document.getElementById("root1").innerHTML = "Teacher : " + name ;
    document.getElementById("root2").innerHTML = "Current hour : " + sub ;
    document.getElementById("root3").innerHTML = "Number of Credits : " + cred ;
    
}



function deregister(){
    var x = document.getElementById("data")
    if(x.style.display === "none"){
        x.style.display = "block";
    }

    var x = document.getElementById("back")
    var p = document.getElementById("root1")
    var q = document.getElementById("root2")
    var r = document.getElementById("root3")
    if(x.style.display !== "none"){
        x.style.display = "none";
        q.style.display = "none";
        p.style.display = "none";
        r.style.display = "none";
    }
    
        

}