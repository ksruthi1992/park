package com.nolanroe.parkapp;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.speech.tts.TextToSpeech;
import android.support.annotation.Nullable;
import android.view.View;
import android.view.Window;
import android.widget.ImageButton;

import java.util.Locale;
import java.util.Random;

/**
 * Created by Danolanater on 10/23/2017.
 */

public class MainActivity extends Activity implements TextToSpeech.OnInitListener {

    private TextToSpeech tts;
    final Handler handler = new Handler();



    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.front_page_layout);
        tts = new TextToSpeech(this,this);
        ImageButton theMicButton = (ImageButton) findViewById(R.id.micButton);
        theMicButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                speakNearVoice();
                handler.postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        Intent i = new Intent(getApplicationContext(), NearActivityVoice.class);
                        startActivity(i);
                    }
                }, 2300);
            }
        });
    }

    public void buttonPressed(View view) {
        switch (view.getId()) {

            case R.id.valet:
                speakValet();
                Intent i = new Intent(getApplicationContext(), ValetActivity.class);
                startActivity(i);
                break;

            case R.id.near:
                speakNear();
                Intent x = new Intent(getApplicationContext(), NearActivity.class);
                startActivity(x);
                break;
        }
    }
    public void onInit(int theText) {
        if (theText == TextToSpeech.SUCCESS) {
            int language = tts.setLanguage(Locale.ENGLISH);
            if (language == TextToSpeech.LANG_MISSING_DATA) {
            } else {
            }
        } else {
        }
    }


    private void speakValet() {
        String text = "Found You A Parking Spot";
        tts.speak(text, TextToSpeech.QUEUE_FLUSH, null);
    }


    private void speakNear() {
        String text = "Select the Building You Wish to Park Near";
        tts.speak(text, TextToSpeech.QUEUE_FLUSH, null);
    }

    private void speakNearVoice() {
        String text = "Say the name of the Building You Wish to Park Near";
        tts.speak(text, TextToSpeech.QUEUE_FLUSH, null);
    }
}