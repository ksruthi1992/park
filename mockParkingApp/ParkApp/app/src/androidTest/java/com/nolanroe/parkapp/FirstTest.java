package com.nolanroe.parkapp;

import android.support.test.InstrumentationRegistry;
import android.support.test.filters.LargeTest;
import android.support.test.runner.AndroidJUnit4;
import android.test.ActivityInstrumentationTestCase2;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import static android.support.test.espresso.Espresso.onView;
import static android.support.test.espresso.action.ViewActions.click;
import static android.support.test.espresso.assertion.ViewAssertions.matches;
import static android.support.test.espresso.matcher.ViewMatchers.isDisplayed;
import static android.support.test.espresso.matcher.ViewMatchers.withId;
import static android.support.test.espresso.matcher.ViewMatchers.withText;

/**
 * Created by Cecilia Dominguez on 12/3/2017.
 */



    @RunWith(AndroidJUnit4.class)
    @LargeTest
    public class FirstTest extends ActivityInstrumentationTestCase2<MainActivity> {

        public FirstTest() {
            super(MainActivity.class);
        }

        @Before
        public void setUp() throws Exception {
            super.setUp();
            injectInstrumentation(InstrumentationRegistry.getInstrumentation());
        }

        @Test
        public void test1ChatId() {
            getActivity();
            onView(withText("ParkMe")).check(matches(isDisplayed()));
        }

        @Test
        public void testValet() {
            getActivity();
            onView(withText("Valet")).check(matches(isDisplayed()));
            onView(withText("Valet")).perform(click());

        }

        @Test
        public void testNear(){
            getActivity();
            onView(withText("Near")).check(matches(isDisplayed()));
            onView(withText("Near")).perform(click());
        }

        @Test
        public void testLotList(){
            testNear();
            onView(withText("AIRC")).check(matches(isDisplayed()));
        }

        @After
        public void tearDown() throws Exception {
            super.tearDown();
        }
    }

