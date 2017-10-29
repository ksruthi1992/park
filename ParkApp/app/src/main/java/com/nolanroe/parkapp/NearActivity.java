package com.nolanroe.parkapp;

import android.app.Activity;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.Window;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.SearchView;

import java.util.ArrayList;
import java.util.Arrays;

/**
 * Created by Danolanater on 10/23/2017.
 */

public class NearActivity extends Activity {

    @Nullable
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.building_list);


//Edited by Hugo
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
    }
}
