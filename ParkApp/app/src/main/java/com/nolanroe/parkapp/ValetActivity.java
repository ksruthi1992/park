package com.nolanroe.parkapp;

import android.Manifest;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationManager;
import android.os.Bundle;
import android.provider.Settings;
import android.support.v4.app.ActivityCompat;
import android.support.v4.app.FragmentActivity;
import android.util.Log;
import android.widget.Toast;


/**
 * Created by Hugo on 10/31/2017.
 */

public class ValetActivity extends FragmentActivity {

//    String dummyLat = "38.5564516";
//    String dummyLong = "-121.421872";
//    private List<String> dummyGeoCoords = new ArrayList<>();

    private static final int REQUEST_LOCATION = 1;
    private LocationManager locationManager;
    private Location location = null;
    private String latLocation;
    private String lonLocation;
    private String url = "https://parkmecsus.wordpress.com/rest/";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        ActivityCompat.requestPermissions(this, new String[]
                {Manifest.permission.ACCESS_FINE_LOCATION}, REQUEST_LOCATION);

        locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
        if(!locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER)) {
            buildAlertMessageNoGPS();
        }
        else if (locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER)) {
            getLocation();
        }

        // Note, emulator will likely return a null value
        // Use an actual phone when running to return a location
        Log.e("xyz", "" + latLocation);
        Log.e("xyz", "" + lonLocation);

        url = url + "?method=valet&latitdue=" + latLocation + "&longitude" + lonLocation;

        Toast.makeText(ValetActivity.this, "Found you the best parking spot.. Just drive!", Toast.LENGTH_SHORT).show(); //
        Intent intent = new Intent(this, NavigatorActivity.class);
        intent.putExtra("url", url);
        startActivity(intent);
        finish();
    }

    private void getLocation() {
        if(ActivityCompat.checkSelfPermission(ValetActivity.this,Manifest.permission.ACCESS_FINE_LOCATION)
                != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission
                (ValetActivity.this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {

            ActivityCompat.requestPermissions(ValetActivity.this, new String[]{Manifest.permission.ACCESS_FINE_LOCATION},
                    REQUEST_LOCATION);

        } else {
            Location location = locationManager.getLastKnownLocation(LocationManager.NETWORK_PROVIDER);

            if(location != null) {
                double lat = location.getLatitude();
                double lon = location.getLongitude();
                latLocation = String.valueOf(lat);
                lonLocation = String.valueOf(lon);
            }
            else {
                Toast.makeText(this, "Unable to trace your location", Toast.LENGTH_SHORT).show();
            }
        }
    }

    private void buildAlertMessageNoGPS() {

        final AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setMessage("Please enable GPS on your device").setCancelable(false).setPositiveButton("Yes",
                new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        startActivity(new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS));
                    }
                })
                .setNegativeButton("No", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.cancel();
                    }
                });

        final AlertDialog alert = builder.create();
        alert.show();
    }
}