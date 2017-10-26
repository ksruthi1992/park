package com.nolanroe.parkapp;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import java.util.ArrayList;

/**
 * Created by Danolanater on 10/23/2017.
 */

public class NearActivity extends Fragment{

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.building_list, container, false);

        final ArrayList<String> buildings = new ArrayList<>();
        buildings.add(new String("Alpine Hall"));
        buildings.add(new String("Amador Hall"));
        buildings.add(new String("Your Mom's House"));

        return rootView;
    }
}
