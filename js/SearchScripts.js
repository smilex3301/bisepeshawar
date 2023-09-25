function SearchResultbyRoll(RollNo)
{document.getElementById('ShowResult').style='visibility:visible';if(RollNo=="")
{document.getElementById("ShowResult").innerHTML="<div align='center' style='color:red;'>Please type valid Roll No</div>";document.getElementById('RollNo').style='border-color:red';document.getElementById('RollNo').focus();return;}
document.getElementById("ShowResult").innerHTML="<div align='center' style='color:#000;'>Please wait...</div>";if(window.XMLHttpRequest)
{xmlhttp1=new XMLHttpRequest();}
else
{xmlhttp1=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp1.onreadystatechange=function()
{if(xmlhttp1.readyState==4&&xmlhttp1.status==200)
{document.getElementById("ShowResult").innerHTML=xmlhttp1.responseText;}}
xmlhttp1.open("GET","ShowResult.php?Search=RollNo&RollNo="+RollNo,true);xmlhttp1.send();}
function SearchResultbyName(Name,FName)
{document.getElementById('ShowResult').style='visibility:visible';if(Name=="")
{document.getElementById("ShowResult").innerHTML="<div align='center' style='color:red;'>Please type Student's Name</div>";document.getElementById('Name').style='border-color:red';document.getElementById('Name').focus();return;}
if(FName=="")
{document.getElementById("ShowResult").innerHTML="<div align='center' style='color:red;'>Please type Student's Father Name</div>";document.getElementById('FatherName').style='border-color:red';document.getElementById('FatherName').focus();return;}
document.getElementById("ShowResult").innerHTML="<div align='center' style='color:#000;'>Please wait...</div>";if(window.XMLHttpRequest)
{xmlhttp1=new XMLHttpRequest();}
else
{xmlhttp1=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp1.onreadystatechange=function()
{if(xmlhttp1.readyState==4&&xmlhttp1.status==200)
{document.getElementById("ShowResult").innerHTML=xmlhttp1.responseText;}}
xmlhttp1.open("GET","ShowResultbyName.php?Search=Names&Name="+Name+"&FName="+FName,true);xmlhttp1.send();}
function SearchResultbyInstitute(SchoolCode)
{document.getElementById('ShowResult').style='visibility:visible';if(SchoolCode=="")
{document.getElementById("ShowResult").innerHTML="<div align='center' style='color:red;'>Please select an institution from the list</div>";document.getElementById('SchoolCode').style='border-color:red';document.getElementById('SchoolCode').focus();return;}
document.getElementById("ShowResult").innerHTML="<div align='center' style='color:#000;'>Please wait...</div>";if(window.XMLHttpRequest)
{xmlhttp1=new XMLHttpRequest();}
else
{xmlhttp1=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp1.onreadystatechange=function()
{if(xmlhttp1.readyState==4&&xmlhttp1.status==200)
{document.getElementById("ShowResult").innerHTML=xmlhttp1.responseText;}}
xmlhttp1.open("GET","ShowResultsbyInstitute.php?Search=School&SchoolCode="+SchoolCode,true);xmlhttp1.send();}
function SearchResultbyInstitutehssc(SchoolCode)
{document.getElementById('ShowResult').style='visibility:visible';if(SchoolCode=="")
{document.getElementById("ShowResult").innerHTML="<div align='center' style='color:red;'>Please select an institution from the list</div>";document.getElementById('SchoolCode').style='border-color:red';document.getElementById('SchoolCode').focus();return;}
document.getElementById("ShowResult").innerHTML="<div align='center' style='color:#000;'>Please wait...</div>";if(window.XMLHttpRequest)
{xmlhttp1=new XMLHttpRequest();}
else
{xmlhttp1=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp1.onreadystatechange=function()
{if(xmlhttp1.readyState==4&&xmlhttp1.status==200)
{document.getElementById("ShowResult").innerHTML=xmlhttp1.responseText;}}
xmlhttp1.open("GET","ShowResultsbyInstitutehssc.php?Search=College&CollegeCode="+SchoolCode,true);xmlhttp1.send();}