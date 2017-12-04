package com.nolanroe.parkapp;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;


/**
 * Created by Hugo on 10/31/2017.
 */

public class ValetActivity extends AppCompatActivity {

//    String dummyLat = "38.5564516";
//    String dummyLong = "-121.421872";
//    private List<String> dummyGeoCoords = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

//        /*Need to create a way to access users current location . From the current location find the best suitable parking lot
//        then find the best parking space.*/
//        dummyGeoCoords.add(dummyLat);
//        dummyGeoCoords.add(dummyLong);
//        Intent intent = new Intent(this, NavigatorActivity.class);
//        intent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
//        startActivity(intent);
        Toast.makeText(ValetActivity.this, "Found you the best parking spot.. Just drive!", Toast.LENGTH_SHORT).show(); //
        Intent intent = new Intent(this, NavigatorActivity.class);
        startActivity(intent);
    }
}
