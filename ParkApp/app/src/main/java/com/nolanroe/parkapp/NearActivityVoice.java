package com.nolanroe.parkapp;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.speech.RecognizerIntent;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.SearchView;
import android.widget.Toast;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;



public class NearActivityVoice extends Activity implements View.OnClickListener {


    private List<String> dummyGeoCoords = new ArrayList<>();
    public ListView mList;
    public Button micButton;
    public static final int VOICE_RECOGNITION_REQUEST_CODE = 1234;


    @Nullable
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.building_list);
        micButton = (Button) findViewById(R.id.speakButton);
        micButton.setOnClickListener(this);
        voiceinputbuttons();
        startVoiceRecognitionActivity();



        /*Added by Hugo: Created a list of buildings with search functionality*/
        SearchView searchview = (SearchView) findViewById(R.id.searchBuildings);
        final ListView listBuildings = (ListView) findViewById(R.id.buildingsList);
        final String[] listOfBuildings = {"Draper Hall", "Dining Commons", "Sierra Hall", "Sutter Hall", "Jenkins Hall", "Desmond Hall", "Shasta Hall" ,
                "River Front Center", "Sacramento Hall", "Lassen Hall", "Yosemite Hall", "Solano Hall", "Kadema Hall", "Douglass Hall", "Mendocino Hall",
                "Sequoia Hall", "Placer Hall", "Alpine Hall", "Mariposa Hall", "Eureka Hall", "Brighton Hall", "Humboldt Hall", "Riverside Hall", "Santa Clara Hall",
                "Union", "Hornet Bookstore", "AIRC", "Child Development Center", "El Dorado Hall", "Art Sculpture Lab", "Library",
                "Capistrano Hall", "Amador Hall", "Tahoe Hall", "Benecia Hall", "The Well", "Hornet Stadium"};
        Arrays.sort(listOfBuildings);
        final ArrayAdapter<String> adapter = new ArrayAdapter<String>(listBuildings.getContext(), android.R.layout.simple_list_item_1, listOfBuildings);
        listBuildings.setAdapter(adapter);

        searchview.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
            @Override
            public boolean onQueryTextSubmit(String query) {
                return false;
            }

            @Override
            public boolean onQueryTextChange(String newText) {
                adapter.getFilter().filter(newText);
                return false;
            }

        });

        /*Added by Hugo: Test of what will happen when selecting selecting building from list
        */
        listBuildings.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                String text = listBuildings.getItemAtPosition(position).toString();//first method
                //Lot 2
                if (text.equals("Draper Hall") || text.equals("Sierra Hall") || text.equals("Jenkins Hall") || text.equals("Desmond Hall") || text.equals("Dining Commons")){
                    Toast.makeText(NearActivityVoice.this, "Best Lot Found: LOT 2\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                    dummyGeoCoords.add("38.565985");
                    dummyGeoCoords.add("-121.424618");
                    Intent myIntent = new Intent(view.getContext(), NavigatorActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);
                }

                //Student Lot 2
                if (text.equals("Shasta Hall") || text.equals("River Front Center") ){
                    Toast.makeText(NearActivityVoice.this, "Best Lot Found: STUDENT LOT 2\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                    dummyGeoCoords.add("38.564094");
                    dummyGeoCoords.add("-121.253284");
                    Intent myIntent = new Intent(view.getContext(), NavigatorActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);
                }

                //Lot 1
                if (text.equals("Sacramento Hall") || text.equals("Lassen Hall") || text.equals("Yosemite Hall") || text.equals("Solano Hall")
                    || text.equals("Douglass Hall") || text.equals("Kadema Hall") || text.equals("Alpine Hall")){
                    Toast.makeText(NearActivityVoice.this, "Best Lot Found: LOT 1\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                    dummyGeoCoords.add("38.563318");
                    dummyGeoCoords.add("-121.428851");
                    Intent myIntent = new Intent(view.getContext(), NavigatorActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);
                }

                //Lot 7
                if (text.equals("El Dorado Hall") || text.equals("Art Sculpture Lab") || text.equals("Child Development Center")){
                    Toast.makeText(NearActivityVoice.this, "Best Lot Found: LOT 7\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                    dummyGeoCoords.add("38.556179");
                    dummyGeoCoords.add("-121.419705");
                    Intent myIntent = new Intent(view.getContext(), NavigatorActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);
                }

                //Lot 8
                if (text.equals("Union") || text.equals("Hornet Stadium") || text.equals("Tahoe Hall") || text.equals("Benecia Hall")) {
                    Toast.makeText(NearActivityVoice.this, "Best Lot Found: LOT 8\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                    dummyGeoCoords.add("38.556152");
                    dummyGeoCoords.add("-121.420716");
                    Intent myIntent = new Intent(view.getContext(), NavigatorActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);
                }

                //Parking Struct 1
                if (text.equals("Capistrano Hall") || text.equals("Brighton Hall") || text.equals("Eureka Hall") || text.equals("Mariposa Hall") || text.equals("Amador Hall")) {
                    Toast.makeText(NearActivityVoice.this, "Found: PARKING STRUCTURE 1\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                    dummyGeoCoords.add("38.559441");
                    dummyGeoCoords.add("-121.426895");
                    Intent myIntent = new Intent(view.getContext(), NavigatorActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);
                }

                //Parking Struct 3
                if (text.equals("The Well") || text.equals("AIRC") || text.equals("Library") || text.equals("Placer Hall") || text.equals("Homboldt Hall")
                        || text.equals("Santa Clara Hall")) {
                    Toast.makeText(NearActivityVoice.this, "Found: PARKING STRUCTURE 3\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                    dummyGeoCoords.add("38.556882");
                    dummyGeoCoords.add("-121.420941");
                    Intent myIntent = new Intent(view.getContext(), NavigatorActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);
                }

                //Parking Struct 2
                if (text.equals("Hornet Bookstore") || text.equals("AIRC") || text.equals("Library") || text.equals("Mendocino Hall") || text.equals("Sequioa Hall")
                        || text.equals("Riverside Hall")) {
                    Toast.makeText(NearActivityVoice.this, "Found: PARKING STRUCTURE 2\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                    dummyGeoCoords.add("38.559037");
                    dummyGeoCoords.add("-121.420265");
                    Intent myIntent = new Intent(view.getContext(), NavigatorActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);
                }
                //Lot 10

                //Lot 9
            }
        });
    }

    public void voiceinputbuttons() {
        micButton = (Button) findViewById(R.id.speakButton);
        mList = (ListView) findViewById(R.id.buildingsList);
    }

    public void startVoiceRecognitionActivity() {
        Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL,
                RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        intent.putExtra(RecognizerIntent.EXTRA_PROMPT,
                "Say The Name of The Building You Wish to Park Near");
        startActivityForResult(intent, VOICE_RECOGNITION_REQUEST_CODE);
    }

    //Voice feature... will add more word variations later...
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == VOICE_RECOGNITION_REQUEST_CODE && resultCode == RESULT_OK) {
            ArrayList<String> text = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
            mList.setAdapter(new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, text));

            if (text.contains("Draper Hall") || text.contains("Draper haul") || text.contains("Draper halt") || text.contains("Draper") ||text.contains("traper") || text.contains("trapper")
                    || text.contains("Sierra") || text.contains("Ciara") || text.contains("Ciera") || text.contains("Cierra") || text.contains("ceara") || text.contains("Sierra Hall") || text.contains("Sierra halt")
                    || text.contains("Jenkins") || text.contains("Jenkin") || text.contains("Jenkins Hall") || text.contains("Jenkin Hall") || text.contains("Jankins") || text.contains("Jankins Hall")
                    || text.contains("Desmond Hall") || text.contains("Desmund Hall") || text.contains("Desmond Hall") || text.contains("Desmund") || text.contains("Dezmond Hall") || text.contains("Dezmond")
                    || text.contains("Dining") || text.contains("dining") || text.contains("dine in") || text.contains("Tainan")) {
                Toast.makeText(NearActivityVoice.this, "Best Lot Found: LOT 2\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                dummyGeoCoords.add("38.565985");
                dummyGeoCoords.add("-121.424618");
                Intent myIntent = new Intent(this, NavigatorActivity.class);
                myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                startActivity(myIntent);
            }

            //Student Lot 2
            if (text.contains("Shasta Hall")  || text.contains("Shasta") || text.contains("Shazta") || text.contains("Shazta Hall")
                    || text.contains("River Front Center") || text.contains("River") || text.contains("Front") || text.contains("Center") || text.contains("Riverfront Center") || text.contains("Riverfront Centre") ){
                Toast.makeText(NearActivityVoice.this, "Best Lot Found: STUDENT LOT 2\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                dummyGeoCoords.add("38.564094");
                dummyGeoCoords.add("-121.253284");
                Intent myIntent = new Intent(this, NavigatorActivity.class);
                myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                startActivity(myIntent);
            }

            //Lot 1
            if (text.contains("Sacramento Hall") || text.contains("Sacramento")
                    || text.contains("Lassen Hall") || text.contains("Lassen")
                    || text.contains("Yosemite Hall") || text.contains("Yosemite")
                    || text.contains("Solano Hall") || text.contains("Solano")
                    || text.contains("Douglass Hall") || text.contains("Douglass")
                    || text.contains("Kadema Hall")  || text.contains("Kadema")
                    || text.contains("Alpine Hall") || text.contains("Alpine")){
                Toast.makeText(NearActivityVoice.this, "Best Lot Found: LOT 1\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                dummyGeoCoords.add("38.563318");
                dummyGeoCoords.add("-121.428851");
                Intent myIntent = new Intent(this, NavigatorActivity.class);
                myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                startActivity(myIntent);
            }

            //Lot 7
            if (text.contains("El Dorado Hall") || text.contains("Dorado") || text.contains("Dorado Hall")
                    || text.contains("Art Sculpture Lab") || text.contains("Artsculpture Lab") || text.contains("Artsculpturelab") || text.contains("Art Lab") || text.contains("Artlab") || text.contains("Sculpture lab")
                    || text.contains("Child Development Center") || text.contains("Child Development") || text.contains("Development Center") || text.contains("Development")){
                Toast.makeText(NearActivityVoice.this, "Best Lot Found: LOT 7\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                dummyGeoCoords.add("38.556179");
                dummyGeoCoords.add("-121.419705");
                Intent myIntent = new Intent(this, NavigatorActivity.class);
                myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                startActivity(myIntent);
            }

            //Lot 8
            if (text.contains("Union")
                    || text.contains("Hornet Stadium")  || text.contains("Stadium") || text.contains("Hornetstadium")
                    || text.contains("Tahoe Hall") || text.contains("Tahoe")
                    || text.contains("Benecia Hall") || text.contains("Benecia Hall") || text.contains("Bencia Hall") || text.contains("Bencia")) {
                Toast.makeText(NearActivityVoice.this, "Best Lot Found: LOT 8\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                dummyGeoCoords.add("38.556152");
                dummyGeoCoords.add("-121.420716");
                Intent myIntent = new Intent(this, NavigatorActivity.class);
                myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                startActivity(myIntent);
            }

            //Parking Struct 1
            if (text.contains("Capistrano Hall") || text.contains("Capistrano")
                    || text.contains("Brighton Hall") || text.contains("Brighton")
                    || text.contains("Eureka Hall")  || text.contains("Eureka") || text.contains("Yoreka") || text.contains("Yoreka Hall")
                    || text.contains("Mariposa Hall") || text.contains("Mariposa")
                    || text.contains("Amador Hall") || text.contains("Amador")) {
                Toast.makeText(NearActivityVoice.this, "Found: PARKING STRUCTURE 1\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                dummyGeoCoords.add("38.559441");
                dummyGeoCoords.add("-121.426895");
                Intent myIntent = new Intent(this, NavigatorActivity.class);
                myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                startActivity(myIntent);
            }

            //Parking Struct 3
            if (text.contains("The Well")
                    || text.contains("AIRC") || text.contains("Ark")
                    || text.contains("Library") || text.contains("Libry")
                    || text.contains("Placer") || text.contains("Place") || text.contains("Place Hall") || text.contains("Placer Hall")
                    || text.contains("Homboldt") || text.contains("Hombolt") || text.contains("Homboldt Hall") || text.contains("Hombolt Hall")
                    || text.contains("Santa Clara Hall") || text.contains("Santaclara Hall") || text.contains("Santa Clara") || text.contains("Santaclara")) {
                Toast.makeText(NearActivityVoice.this, "Found: PARKING STRUCTURE 3\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                dummyGeoCoords.add("38.556882");
                dummyGeoCoords.add("-121.420941");
                Intent myIntent = new Intent(this, NavigatorActivity.class);
                myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                startActivity(myIntent);
            }

            //Parking Struct 2
            if (text.contains("Bookstore")
                    || text.contains("Mendocino") || text.contains("Mendcino") || text.contains("Mendocino Hall") || text.contains("Mendcino Hall")
                    || text.contains("Sequioa") || text.contains("Zequioa") || text.contains("Seqoya") || text.contains("Sequioa Hall") || text.contains("Zequioa Hall") || text.contains("Seqoya Hall")
                    || text.contains("Riverside Hall") || text.contains("Riverside") || text.contains("River Side") || text.contains("River Side Hall")) {
                Toast.makeText(NearActivityVoice.this, "Found: PARKING STRUCTURE 2\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                dummyGeoCoords.add("38.559037");
                dummyGeoCoords.add("-121.420265");
                Intent myIntent = new Intent(this, NavigatorActivity.class);
                myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                startActivity(myIntent);
            }
        }
    }

    public void onClick(View v) {
        startVoiceRecognitionActivity();
    }

}

