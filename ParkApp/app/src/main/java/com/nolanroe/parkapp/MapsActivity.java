package com.nolanroe.parkapp;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.maps.android.data.Feature;
import com.google.maps.android.data.kml.KmlLayer;

import org.xmlpull.v1.XmlPullParserException;

import java.io.IOException;

public class MapsActivity extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;
    private int percentLotFull = 50;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);
        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }


    /**
     * Manipulates the map once available.
     * This callback is triggered when the map is ready to be used.
     * This is where we can add markers or lines, add listeners or move the camera. In this case,
     * we just add a marker near Sydney, Australia.
     * If Google Play services is not installed on the device, the user will be prompted to install
     * it inside the SupportMapFragment. This method will only be triggered once the user has
     * installed Google Play services and returned to the app.
     */
    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;

        // Add a marker in Sydney and move the camera
        LatLng sacState = new LatLng(38.56, -121.421823);
        // mMap.addMarker(new MarkerOptions().position(sacState).title("Sac State"));
        mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(sacState, 15));

        try {
            KmlLayer lot7 = new KmlLayer(mMap, setLotColor(percentLotFull), getApplicationContext());
            lot7.addLayerToMap();
            lot7.setOnFeatureClickListener(new KmlLayer.OnFeatureClickListener() {
                @Override
                public void onFeatureClick(Feature feature) {
                    Intent i = new Intent(getApplicationContext(),Lot7Activity.class);
                    startActivity(i);
                }
            });
        }
        catch (IOException ex) {
            ex.printStackTrace();
        }
        catch (XmlPullParserException x) {
            x.printStackTrace();
        }
    }

    private int setLotColor(int percentFull) {
        if(100-percentFull< 20) {
            return R.raw.sac_state_parking_empty;
        } else if (100-percentFull < 40) {
            return R.raw.sac_state_parking_quarter;
        } else if (100-percentFull < 60) {
            return R.raw.sac_state_parking_half;
        } else if (100-percentFull < 80) {
            return R.raw.sac_state_parking_three_quarter;
        } else {
            return R.raw.sac_state_parking_full;
        }
    }
}