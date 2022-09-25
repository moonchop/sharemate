package com.shareMate.shareMate;

import java.sql.Connection;
import java.sql.DriverManager;

import org.junit.jupiter.api.Test;

public class DB_test {
    @Test
    public void test() throws Exception {
        Class.forName("org.mariadb.jdbc.Driver"); // 마리아DB
        // Class.forName("com.mysql.jdbc.Driver")

        Connection con = DriverManager.getConnection("jdbc:mariadb://127.0.0.1:3306/testdb", "root", "zxcc"); // 마리아 DB

        System.out.println(con);
    }
}