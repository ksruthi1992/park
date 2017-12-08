package com.nolanroe.parkapp;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;

/**
 * Created by Danolanater on 10/23/2017.
 */

public class NavigatorActivity extends FragmentActivity {



    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

//        /* Edited by Hugo: Added a set of geoCoords that it will receive from another activity*/
//        Intent intent = getIntent();
//        ArrayList<String> dGeoCoords = intent.getStringArrayListExtra("geoCoords");
//        String dLat = dGeoCoords.get(0);
//        String dLong = dGeoCoords.get(1);
//        Uri gmmIntentUri = Uri.parse("google.navigation:q=" + dLat+ "," + dLong);
//        Intent mapIntent = new Intent(Intent.ACTION_VIEW, gmmIntentUri);
//        mapIntent.setPackage("com.google.android.apps.maps");
//        startActivity(mapIntent);

        Bundle extras = getIntent().getExtras();


        String apiRequestURL = extras.getString("url");

        //Log.e("site", apiRequestURL);
        JSONExtractionUtility extractor = new JSONExtractionUtility();
        ParkingSpot spot = extractor.fetchParkingSpotCoordinates("maps.google.com");
        Uri gmmIntentUri = Uri.parse("google.navigation:q=" + spot.latitude + "," + spot.longitude);
        Intent mapIntent = new Intent(Intent.ACTION_VIEW, gmmIntentUri);
        mapIntent.setPackage("com.google.android.apps.maps");
        startActivity(mapIntent);
        finish();
    }

}
