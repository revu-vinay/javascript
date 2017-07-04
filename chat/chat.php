<?php 
			$con = new mysqli("localhost", "root", "", "chat");
			$query = "SELECT * FROM chatt1 ORDER BY id"; 
			$run = $con->query($query); 
			while($row = $run->fetch_array()) : 
			?>


                <div id="chat_data">
                    <span style="color:green;"><?php echo $row['name']; ?> : </span>
                    <span style="color:brown;"><?php echo $row['msg']; ?></span>
                    <span style="color:grey; float:right"><?php echo date('H:i', strtotime($row['date'])); ?></span>
                </div>
			<?php endwhile ; ?>	