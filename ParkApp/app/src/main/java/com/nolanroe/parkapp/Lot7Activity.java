package com.nolanroe.parkapp;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;

/**
 * Created by Danolanater on 10/2/2017.
 */

public class Lot7Activity extends AppCompatActivity implements OnMapReadyCallback {

    private GoogleMap mMap;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }

    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;

        // Add a marker in Sydney and move the camera
        LatLng sacState = new LatLng(38.5553711, -121.4209975);
        // mMap.addMarker(new MarkerOptions().position(sacState).title("Sac State"));
        mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(sacState, 18));

//        try {
//            KmlLayer lot7 = new KmlLayer(mMap, R.raw.0, getApplicationContext());
//            lot7.addLayerToMap();
//            lot7.setOnFeatureClickListener(new KmlLayer.OnFeatureClickListener() {
//                @Override
//                public void onFeatureClick(Feature feature) {
//                    Intent i = new Intent(getApplicationContext(),Lot7Activity.class);
//                    startActivity(i);
//                }
//            });
//        }
//        catch (IOException ex) {
//            ex.printStackTrace();
//        }
//        catch (XmlPullParserException x) {
//            x.printStackTrace();
//        }
    }
}
