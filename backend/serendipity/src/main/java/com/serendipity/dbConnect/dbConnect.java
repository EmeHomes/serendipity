package com.serendipity.dbConnect;
import java.sql.*;
import javax.swing.JOptionPane;

public class dbConnect {
    public String db = "serendipity";
    public String url = "jdbc:mysql://localhost/"+db; /* http://localhost/phpmyadmin/db_structure.php?db=serendipity ????*/
    public String user = "root";
    public String pass = "";

    public Connection connecting(){
        Connection link = null;
        try{
            Class.forName("org.gjt.mm.mysql.Driver");
            link = DriverManager.getConnection(this.url, this.user, this.pass);

        }catch(Exception ex){
            JOptionPane.showMessageDialog(null, ex);
        }
        return link;
    }

}
