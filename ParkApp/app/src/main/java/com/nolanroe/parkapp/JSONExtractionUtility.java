package com.nolanroe.parkapp;

import android.text.TextUtils;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.Charset;

/**
 * Created by Danolanater on 11/2/2017.
 */

public final class JSONExtractionUtility {

    public ParkingSpot fetchParkingSpotCoordinates(String requestURL) {
        //dummy object to be deleted once implementation for extractFeatureFromJSON is done
        //ParkingSpot spot = new ParkingSpot("38.5564516", "-121.421872");

        // Create URL object
        URL url = createUrl(requestURL);

        // Perform HTTP request to the URL and get JSON response back
        String jsonResponse = null;
        try {
            jsonResponse = makeHttpRequest(url);
        } catch (IOException e) {
            Log.e("you dun fk'd up", "Error closing input stream", e);
        }

        // Extract whatever fields needed from the JSON and create an object with those properties
         ParkingSpot spot = extractFeatureFromJSON(jsonResponse);

        // Return the parking spot
        return spot;
    }

    private static URL createUrl(String stringURL) {
        URL url = null;
        try {
            url = new URL(stringURL);
        } catch (MalformedURLException e) {
            Log.e("you dun fk'd up", "error creating URL", e);
        }

        return url;
    }

    private static String makeHttpRequest(URL url) throws IOException {
        String jsonResponse = "";

        //If URL is null, then just return
        if(url == null)
            return jsonResponse;

        HttpURLConnection urlConnection = null;
        InputStream inputStream = null;
        try {
            urlConnection = (HttpURLConnection) url.openConnection();
            urlConnection.setReadTimeout(10000); // milliseconds
            urlConnection.setConnectTimeout(10000); // ""
            urlConnection.setRequestMethod("GET");
            urlConnection.connect();

            //If the request is successful we should get "200" as the response code
            if(urlConnection.getResponseCode() == 200) {
                inputStream = urlConnection.getInputStream();
                jsonResponse = readFromStream(inputStream);
            } else {
                Log.e("you dun fk'd up", "problem with urlConnection..." + urlConnection.getResponseCode());
            }
        } catch (IOException e){
            Log.e("you dun fk'd up", "Problem retrieving the earthquake JSON results.", e);
        } finally {
            if (urlConnection != null)
                urlConnection.disconnect();
            if (inputStream != null)
                inputStream.close();
        }
        return jsonResponse;
    }

    private static String readFromStream(InputStream inputStream) throws IOException {
        StringBuilder output = new StringBuilder();
        if (inputStream != null) {
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream, Charset.forName("UTF-8"));
            BufferedReader reader = new BufferedReader(inputStreamReader);
            String line = reader.readLine();
            while (line != null) {
                output.append(line);
                line = reader.readLine();
            }
        }
        return output.toString();
    }

    private ParkingSpot extractFeatureFromJSON(String parkingSpotJson) {
        if(TextUtils.isEmpty(parkingSpotJson))
            return null;

        try {
            JSONObject baseJsonResponse = new JSONObject(parkingSpotJson);
            JSONArray spotArray = baseJsonResponse.getJSONArray("spots");

            if(spotArray.length() > 0) {
                JSONObject firstSpot = spotArray.getJSONObject(0);
                JSONObject coordinates = firstSpot.getJSONObject("coordinates");

                String latitude = coordinates.getString("latitude");
                String longitude = coordinates.getString("longitude");

                return new ParkingSpot(latitude,longitude);
            }
        } catch (JSONException e){
            Log.e("You dun fk'd up", "Problem parsing the JSON results", e);
        }
        return null;
    }
}
