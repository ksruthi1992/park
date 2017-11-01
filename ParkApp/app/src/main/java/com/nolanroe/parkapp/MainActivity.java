package com.nolanroe.parkapp;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //create an intent to get over to FrontPageActivity class
        Intent i = new Intent(this, FrontPageActivity.class);
        startActivity(i);
    }
}