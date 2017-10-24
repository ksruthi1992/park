package com.nolanroe.parkapp;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

/**
 * Created by Danolanater on 10/23/2017.
 */

public class FrontPageActivity extends AppCompatActivity  {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.front_page_layout);
    }

    public void valet(View view) {
        Button valetButton = (Button) findViewById(R.id.valet_button);
        valetButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(getApplicationContext(), ValetActivity.class);
                startActivity(i);
            }
        });
    }

    public void near(View view) {
        Button nearButton = (Button) findViewById(R.id.near_button);
        nearButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(getApplicationContext(), NearActivity.class);
                startActivity(i);
            }
        });
    }

    public void viewMap(View view) {
        Button viewMapButton = (Button) findViewById(R.id.view_map_button);
        viewMapButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(getApplicationContext(), MapsActivity.class);
                startActivity(i);
            }
        });
    }

}
