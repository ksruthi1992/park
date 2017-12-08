package com.nolanroe.parkapp;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.speech.tts.TextToSpeech;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import org.w3c.dom.Text;

import java.util.Locale;
import java.util.Random;

public class displayParkingStructureSpot extends Activity implements TextToSpeech.OnInitListener {


    Random random = new Random();
    private TextToSpeech tts;
    final Handler handler = new Handler();
    Button spot;
    TextView pStructure;
    TextView pFloor;
    TextView pIsle;
    String a,b,c;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_display_parking_structure_spot);
        tts = new TextToSpeech(this, this);
        pStructure = (TextView) findViewById(R.id.structNum);
        pFloor = (TextView) findViewById(R.id.floorNum);
        pIsle = (TextView) findViewById(R.id.isleNum);
        spot = (Button) findViewById(R.id.newSpot);
        spot.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                a = demoStructure();
                b = demoFloor();
                c = demoIsle();
                pStructure.setText(a);
                pFloor.setText(b);
                pIsle.setText(c);
                speakSpot(a, b, c);
            }
        });

        random.setSeed(System.currentTimeMillis());

        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                spot.performClick();
            }

        }, 100);
    }

    public String demoStructure() {
        String structure;
        int randomStructure = random.nextInt(3) + 1;
        if (randomStructure == 1)
            structure = "PARKING STRUCTURE 1";
        else if (randomStructure == 2)
            structure = "PARKING STRUCTURE 2";
        else if (randomStructure == 3)
            structure = "PARKING STRUCTURE 3";
        else
            structure = "full";
        return structure;
    }

    public String demoFloor() {
        String floor;
        int randomFloor = random.nextInt(6) + 1;
        if (randomFloor == 1)
            floor = "FLOOR 1";
        else if (randomFloor == 2)
            floor =  "FLOOR 2";
        else if (randomFloor == 3)
            floor = "FLOOR 3";
        else if (randomFloor == 4)
            floor ="FLOOR 4";
        else if (randomFloor == 5)
            floor = "FLOOR 5";
        else if (randomFloor == 6)
            floor = "FLOOR 6";

        else
            floor = "full";
        return floor;

    }

    public String demoIsle() {
        int randomIsle = random.nextInt(5) + 1;
        switch (randomIsle) {
            case 1:
                return "ISLE 1";
            case 2:
                return "ISLE 2";
            case 3:
                return "ISLE 3";
            case 4:
                return"ISLE 4";
            case 5:
                return "ISLE 5";
            case 6:

        }
        return null;
    }



    public void onInit(int theText) {
        if (theText == TextToSpeech.SUCCESS) {
            int language = tts.setLanguage(Locale.ENGLISH);
            if (language == TextToSpeech.LANG_MISSING_DATA) {
                //speakValet();
            } else {
            }
        } else {
        }
    }


    private void speakSpot(String A, String B, String C) {
        String text = A + "" + ""  + B + "" + "" + C;
        tts.speak(text, TextToSpeech.QUEUE_FLUSH, null);
    }

}

