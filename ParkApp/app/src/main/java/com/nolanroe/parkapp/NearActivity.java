package com.nolanroe.parkapp;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;

import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.SearchView;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by Danolanater on 10/23/2017.
 */

public class NearActivity extends AppCompatActivity {


    private List<String> dummyGeoCoords = new ArrayList<>();


    @Nullable
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.building_list);



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
        *Made the WHOLE list clickable and added closest Parking lots to each building for now
        */
        listBuildings.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                String text = listBuildings.getItemAtPosition(position).toString();//first method
                //Lot 2 //2/37
                if (text.equals("Draper Hall") || text.equals("Sierra Hall") || text.equals("Jenkins Hall") || text.equals("Desmond Hall") || text.equals("Dining Commons")){
                    Toast.makeText(NearActivity.this, "Best Lot Found: LOT 2\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                    dummyGeoCoords.add("38.565985");
                    dummyGeoCoords.add("-121.424618");
                    Intent myIntent = new Intent(view.getContext(), NavigatorActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);
                }

                //Student Lot 2  //7/37
                if (text.equals("Shasta Hall") || text.equals("River Front Center") ){
                    Toast.makeText(NearActivity.this, "Best Lot Found: STUDENT LOT 2\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                    dummyGeoCoords.add("38.564094");
                    dummyGeoCoords.add("-121.253284");
                    Intent myIntent = new Intent(view.getContext(), NavigatorActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);
                }

                //Lot 1  //15/37
                if (text.equals("Sacramento Hall") || text.equals("Lassen Hall") || text.equals("Yosemite Hall") || text.equals("Solano Hall")
                    || text.equals("Douglass Hall") || text.equals("Kadema Hall") || text.equals("Alpine Hall")){
                    Toast.makeText(NearActivity.this, "Best Lot Found: LOT 1\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                    dummyGeoCoords.add("38.563318");
                    dummyGeoCoords.add("-121.428851");
                    Intent myIntent = new Intent(view.getContext(), NavigatorActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);
                }

                //Lot 7  //18/37
                if (text.equals("El Dorado Hall") || text.equals("Art Sculpture Lab") || text.equals("Child Development Center")){
                    Toast.makeText(NearActivity.this, "Best Lot Found: LOT 7\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                    dummyGeoCoords.add("38.556179");
                    dummyGeoCoords.add("-121.419705");
                    Intent myIntent = new Intent(view.getContext(), NavigatorActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);
                }

                //Lot 8  //22/37
                if (text.equals("Union") || text.equals("Hornet Stadium") || text.equals("Tahoe Hall") || text.equals("Benicia Hall")) {
                    Toast.makeText(NearActivity.this, "Best Lot Found: LOT 8\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                    dummyGeoCoords.add("38.556152");
                    dummyGeoCoords.add("-121.420716");
                    Intent myIntent = new Intent(view.getContext(), NavigatorActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);
                }

                //Parking Struct 1 //26/37
                if (text.equals("Capistrano Hall") || text.equals("Brighton Hall") || text.equals("Eureka Hall") || text.equals("Mariposa Hall")) {
                    Toast.makeText(NearActivity.this, "Found: PARKING STRUCTURE 1\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                    dummyGeoCoords.add("38.559441");
                    dummyGeoCoords.add("-121.426895");
                    Intent myIntent = new Intent(view.getContext(), NavigatorActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);
                }

                //Parking Struct 3 //33/37
                if (text.equals("The Well") || text.equals("AIRC") || text.equals("Library") || text.equals("Mariposa Hall")
                        || text.equals("Placer Hall") || text.equals("Homboldt Hall") || text.equals("Santa Clara Hall")) {
                    Toast.makeText(NearActivity.this, "Found: PARKING STRUCTURE 3\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
                    dummyGeoCoords.add("38.556882");
                    dummyGeoCoords.add("-121.420941");
                    Intent myIntent = new Intent(view.getContext(), NavigatorActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);
                }

                //Parking Struct 2 //27/37
                if (text.equals("Hornet Bookstore") || text.equals("AIRC") || text.equals("Library") || text.equals("Mariposa Hall")
                        || text.equals("Mendocino Hall") || text.equals("Sequioa Hall") || text.equals("Riverside Hall")) {
                    Toast.makeText(NearActivity.this, "Found: PARKING STRUCTURE 2\nSearching for best parking space...", Toast.LENGTH_SHORT).show(); //
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

}
