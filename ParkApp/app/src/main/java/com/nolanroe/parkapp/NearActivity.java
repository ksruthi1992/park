package com.nolanroe.parkapp;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;

import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.SearchView;
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
        ListView listBuildings = (ListView) findViewById(R.id.buildingsList);
        final String[] listOfBuildings = {"Draper Hall", "Dining Commons", "Sierra Hall", "Sutter Hall", "American River Yard",
                "Jenkins Hall", "Desmond Hall", "Shasta Hall", "River Front Center", "Sacramento Hall",
                "Lassen Hall", "Yosemite Hall", "Solano Hall", "Kadema Hall", "Douglass Hall", "Mendocino Hall", "Sequoia Hall", "Placer Hall",
                "Alpine Hall", "Mariposa Hall", "Eureka Hall", "Brighton Hall", "Humboldt Hall", "Riverside Hall", "Santa Clara Hall",
                "Union", "Hornet Bookstore", "AIRC", "Child Development Center", "El Dorado Hall", "Art Sculpture Lab", "Library", "Studio Theatre",
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

        /*Added by Hugo: Test of what will happen when selecting selecting building from list*/
        listBuildings.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                if (position == 0 || position == 1 || position == 2 || position == 3){

                    //Would actually access database to find available spaces and create a set of geo-coords but this is just a test
                    Toast.makeText(NearActivity.this, "Best Lot Found: Lot 2\nSearching for best parking space..." , Toast.LENGTH_SHORT).show(); //
                    //String lat = getCoordAfterFindingSpaceFroDatabase;
                    //String long = getLatAfterFindingSpaceFromDatabase
                    //dummyGeoCoords.add(lat);
                    //dummyGeoCoords.add(long);
                    dummyGeoCoords.add("38.335751");
                    dummyGeoCoords.add("-121.252725");
                    Intent myIntent = new Intent(view.getContext(), ValetActivity.class);
                    myIntent.putStringArrayListExtra("geoCoords", (ArrayList<String>) dummyGeoCoords);
                    startActivity(myIntent);

                }
            }
        });
    }

}
