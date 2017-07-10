
package mainapp;
import AccessMethods.DataAccess;
import static AccessMethods.DataAccess.displayProduct;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;
import DBconnection.DBcon;
import productdata.Product;

public class Main {


static BufferedReader br = new BufferedReader(new  InputStreamReader(System.in));
static DataAccess dao = new DataAccess();
public static void main(String[] args) throws Exception{

String option = "";
do
{
System.out.println("A. View Products");
System.out.println("B. Add Product");
System.out.println("C. Update Product");
System.out.println("D. Delete Product");
System.out.println("E. Search Product");
System.out.println("F. Exit");
System.out.println("===========================================================");
System.out.println("Enter an option");
System.out.println("===========================================================");
option = br.readLine();
System.out.println("\n");
switch(option.toUpperCase())
{
case "A":
viewProducts();
break;
case "B": 
addProduct();
break;
case "C":
updateProduct();
break;
case "D":
deleteProduct();
break;
case "E":
searchProduct();
break;
case "F":
System.out.println("****************THANK YOU*********************");
System.exit(0);
break;
default:
System.out.println("Invalid Option!!.Please enter again");
break;
}
}while(option != "F");
}
public static void viewProducts()
{
System.out.println("------------------------------------");
List<Product> productList = dao.getAllProducts();
for(Product product:productList)               //untill productlist foreach
{
displayProduct(product);
}
System.out.println("---------------------------------");
System.out.println("\n");
}
public static void addProduct() throws Exception
{
System.out.println("---------------------------------");
System.out.println("Enter Product ID:");
System.out.println("---------------------------------");
String id = br.readLine();
System.out.println("--------------------------------");
System.out.println("Enter Product Name:");
System.out.println("--------------------------------");
String name = br.readLine();
System.out.println("------------------------------------");
System.out.println("Enter Product Price:");
System.out.println("------------------------------------");
int price = Integer.parseInt(br.readLine());
Product product = new Product(id,name,price);
int status = dao.addProduct(product);
if(status == 1)                                               // no of altered rows
{
System.out.println("Product added successfully");
}
else
{
System.out.println("ERROR in adding product");
}
System.out.println("\n");
}
public static void updateProduct() throws Exception
{
System.out.println("------------------------------------");
System.out.println("Enter Product ID:");
System.out.println("------------------------------------");
String id = br.readLine();
System.out.println("------------------------------------");
System.out.println("Enter New Product Name:");
System.out.println("------------------------------------");
String name = br.readLine();
System.out.println("------------------------------------");
System.out.println("Enter New Product Price:");
System.out.println("------------------------------------");
int price = Integer.parseInt(br.readLine());
Product product = new Product(id,name,price);
int status = dao.updateProduct(product);
if(status == 1)
{

        System.out.println("Product updated successfully");
}
else
{
System.out.println("ERROR while updating product");
}
System.out.println("\n");
}
public static void deleteProduct() throws Exception
{
System.out.println("------------------------------------");
System.out.println("Enter Product ID:");
System.out.println("------------------------------------");
String id = br.readLine();
int status = dao.deleteProduct(id);
if(status == 1)
{
System.out.println("Product deleted successfully ");
}
else
{
System.out.println("ERROR while deleting product");
}
System.out.println("\n");
}
public static void searchProduct() throws Exception
{
System.out.println("------------------------------------");
System.out.println("Enter Product ID:");
System.out.println("------------------------------------");
String id = br.readLine();
Product product = dao.getProductById(id);
displayProduct(product);
System.out.println("\n");
}

}

