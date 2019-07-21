package com.syntax.cucumber.stepDif;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcConictivity {

	public static void main(String[] args) throws SQLException, ClassNotFoundException {
		
		Class.forName ("oracle.jdbc.driver.OracleDriver"); 
		
	

		String url = "jdbc:oracle:thin:@syntaxdatabase.cdjflmucstpo.us-east-1.rds.amazonaws.com:1521:orcl";

		Connection conn = DriverManager.getConnection(url, "syntax", "syntax123");

		System.out.println("Done");

		Statement statement = conn.createStatement();

		ResultSet rs = statement.executeQuery("select First_Name from Employees");

		System.out.println(rs);

		while (rs.next()) {

			System.out.println(rs.getString("first_name"));

		}

	}
		
		

}
