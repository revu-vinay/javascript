
<html>
   <head>
        <title>Chat Page</title>
        <link rel="stylesheet" href="chat_style.css"/>   
    
        <script> 
	          function refresh()
			           {
		      var req = new XMLHttpRequest(); 
		      req.onreadystatechange = function() 
			           {
			        if(req.readyState == 4 && req.status == 200)
					   {
				            document.getElementById('chat').innerHTML = req.responseText;
				       } 
					   } 
				     req.open('GET', 'chat.php', true); 
				    req.send(); 
				}
			setInterval(function(){refresh()}, 1000) 	
	    </script>
    </head>

    <body onload="refresh();">
        <div id="main">
          <div id="chat"></div>
            <form method="post" action="index.php" >
                <input type="text" name="name" placeholder="Name: " /><br>
                <textarea name="enter message" placeholder="Message"></textarea>
               <input type="image" name="submit" src="BUTTON1.png" value="Send!" width="28" height="28" />
			</form>
			<?php
            $con = new mysqli("localhost", "root", "", "chat");
            if(isset($_POST['submit']))
			    { 
			$name = $_POST['name']; 
			$msg = $_POST['enter_message']; 
			$query = "INSERT INTO chatt1 (name,msg) VALUES ('$name','$msg')"; 
			$run = $con->query($query); 
                }
			 ?>
	
        </div>
    </body>
</html>


