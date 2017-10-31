package com.nolanroe.parkapp;

import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
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

    public void buttonPressed(View view)
    {
        if (view == findViewById(R.id.valet))
        {
            Intent i = new Intent(getApplicationContext(), ValetActivity.class);
            startActivity(i);
        }

        else if (view == findViewById(R.id.near))
        {
            Intent i = new Intent(getApplicationContext(), NearActivity.class);
            startActivity(i);

        }
        else if (view == findViewById(R.id.map))
        {
            Intent i = new Intent(getApplicationContext(), MapsActivity.class);
            startActivity(i);
        }
    }

}
