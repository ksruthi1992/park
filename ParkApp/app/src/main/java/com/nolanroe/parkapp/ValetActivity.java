package com.nolanroe.parkapp;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.FragmentActivity;

import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;

import java.util.ArrayList;

/**
 * Created by Danolanater on 10/23/2017.
 */

public class ValetActivity extends FragmentActivity implements OnMapReadyCallback{



    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);
        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }


    @Override
    public void onMapReady(GoogleMap googleMap) {
        /* Edited by Hugo: Added a set of geoCoords that it will receive*/
        Intent intent = getIntent();
        ArrayList<String> dGeoCoords = intent.getStringArrayListExtra("geoCoords");
        String dLat = dGeoCoords.get(0);
        String dLong = dGeoCoords.get(1);
        Uri gmmIntentUri = Uri.parse("google.navigation:q=" + dLat+ "," + dLong);
        Intent mapIntent = new Intent(Intent.ACTION_VIEW, gmmIntentUri);
        mapIntent.setPackage("com.google.android.apps.maps");
        startActivity(mapIntent);
    }
}
