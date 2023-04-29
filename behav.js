
     
        var list=0;
          function res(){
              document.getElementById("warning").innerHTML ="";
          }
            function add(){
            
            
            
            var name=document.getElementById("name").value;
   var author=document.getElementById("author").value;
       
    var table=document.getElementById("table");
   
   if(name.trim()=="")
   {
   
   document.getElementById("warning").innerHTML ="Enter book name..";
   }
   else if(author.trim()=="")
   {
      
   document.getElementById("warning").innerHTML ="Enter author name..";
   }
   
   else{
        list++;
        var row=document.createElement("tr"); 
        var cell1=document.createElement("td");
        var cell2=document.createElement("td");
        var cell3=document.createElement("td");
        var cell4=document.createElement("td");
      
        row.setAttribute("id",list);
        cell1.innerHTML=list;
        cell4.setAttribute("id","c"+list);
        cell1.setAttribute("name","sno");
       cell4.setAttribute("class","dele"); cell4.setAttribute("onclick","del(this.id)");
        cell2.innerHTML=name;
        cell3.innerHTML=author;
        table.appendChild(row);   
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        cell4.innerHTML="DELETE";
        
       document.getElementById("name").value='';
   document.getElementById("author").value='';
       
            }
            //document.getElementById("apple").reset();
        
            
            }
            
         function del(clicked){
            
        var cell=document.getElementById(clicked);
        var row=cell.parentNode;
        row.remove();
        list--;
       
       const cell2=document.getElementsByName("sno");
       
     
     for(var i=0;i<list;i++)
     {
       cell2[i].innerHTML =i+1;
      
        }
            }
        
