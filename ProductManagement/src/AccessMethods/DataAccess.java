
package AccessMethods;
import java.sql.*;
import java.util.*;
import productdata.Product;
import DBconnection.DBcon;
import static com.sun.corba.se.impl.util.Utility.printStackTrace;
import static jdk.nashorn.internal.runtime.Debug.id;

public class DataAccess {
    
    public List<Product> getAllProducts(){
        
        List<Product> productList=new ArrayList<Product>(); 
        try{
            Connection con=DBcon.getConnection();
            Statement st=con.createStatement();
            ResultSet rs=st.executeQuery("SELECT * from product");
            while(rs.next())
            {
             Product product=new Product(rs.getString("id"),rs.getString("name"),rs.getInt("price"));
             productList.add(product);
            
            
            }
            DBcon.closeConnection(con);
        }
        catch(SQLException e){ printStackTrace();}
        
        return productList;
        
        }

    public Product getProductById(String id){
        Product product = null;
    try{
            Connection con=DBcon.getConnection();
            Statement st=con.createStatement();
            PreparedStatement ps=con.prepareStatement("SELECT * FROM product WHERE id=?");
            ps.setString(1,id);
            ResultSet rs = ps.executeQuery();
            while(rs.next())
            {
              product=new Product(rs.getString("id"),rs.getString("name"),rs.getInt("price"));
             
            
            
            }
            DBcon.closeConnection(con);
        }
        catch(SQLException e){ printStackTrace();}
        
        return product;}
    
    public int addProduct(Product product){
    
       int status =0;
       try{
        Connection con=DBcon.getConnection();
       PreparedStatement ps=con.prepareStatement("INSERT INTO  product values(?,?,?)");
        ps.setString(1,product.getId());
        ps.setString(2,product.getName());
        ps.setInt(3,product.getPrice());
        status=ps.executeUpdate();
       }
    catch(SQLException e){ printStackTrace();}
    
    return status;
    
    }
   public int updateProduct(Product product){
    
       int status =0;
       try{
        Connection con=DBcon.getConnection();
       PreparedStatement ps=con.prepareStatement("UPDATE product SET name=?,price=? WHERE id=?");
        ps.setString(1,product.getId());
        ps.setString(2,product.getName());
        ps.setInt(3,product.getPrice());
        status=ps.executeUpdate();
       }
    catch(SQLException e){ printStackTrace();}
    
    return status;
    
    }
   
   public int deleteProduct(String id){
    
       int status =0;
       try{
        Connection con=DBcon.getConnection();
       PreparedStatement ps=con.prepareStatement("DELETE FROM product where id=?");
        ps.setString(1,id);
        status=ps.executeUpdate();
       }
    catch(SQLException e){ printStackTrace();}
    
    return status;
    
   }


public static void displayProduct(Product product)
{
System.out.println("Product ID: "+product.getId());
System.out.println("Product Name: "+product.getName());
System.out.println("Product Price: "+product.getPrice());
System.out.println("\n");
}



}
    
