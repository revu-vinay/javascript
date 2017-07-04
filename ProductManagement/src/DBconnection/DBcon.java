
package DBconnection;

import java.sql.*;
public class DBcon {
    
    public static Connection getConnection(){
    
    Connection con =null;
    try{
        
    Class.forName("com.mysql.jdbc.Driver");
    con=DriverManager.getConnection("jdbc:mysql://localhost:3306/javajdbc","root","");
        }
    
    catch(Exception e){e.printStackTrace();}
    
    return con;
    }
    
    
    public static void closeConnection(Connection con){
    try{
    con.close();
    }
    catch(SQLException e){e.printStackTrace();}
    }
    
    
   }
    
    

