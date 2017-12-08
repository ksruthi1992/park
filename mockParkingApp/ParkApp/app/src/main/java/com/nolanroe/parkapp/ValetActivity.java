package com.nolanroe.parkapp;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;
import java.util.Date;
import java.util.Random;


/**
 * Created by Hugo on 10/31/2017.
 */

public class ValetActivity extends AppCompatActivity {

    private int stuctureOrLot;
    Random random = new Random();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        stuctureOrLot = randomize(); // 0 if is a lot, and 1 if it is a structure
        isItALotOrStructure(stuctureOrLot);
        finish();
    }


    public void isItALotOrStructure(int random) {
        if (random == 1) {
            Toast.makeText(ValetActivity.this, "Found a parking space inside a lot using google maps to show where the parking space is....", Toast.LENGTH_SHORT).show();
            Intent lotIntent = new Intent(this, NavigatorActivity.class);
            startActivity(lotIntent);
        }
        if (random == 2) {
            Toast.makeText(ValetActivity.this, "Found a parking space inside a parking Structure displaying floor and isle on screen....", Toast.LENGTH_SHORT).show();
            Intent structureIntent = new Intent(this, displayParkingStructureSpot.class);
            startActivity(structureIntent);
        }
    }

    public int randomize() {
        int rand = random.nextInt(2) + 1;
        random.setSeed(System.currentTimeMillis());
        return rand;
    }


}
