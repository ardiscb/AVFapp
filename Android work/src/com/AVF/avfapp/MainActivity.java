package com.AVF.avfapp;

<<<<<<< HEAD
import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import org.apache.cordova.*;
=======
import android.os.Bundle;
import org.apache.cordova.*;
import android.app.Activity;
import android.view.Menu;
>>>>>>> origin/gh-pages

public class MainActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
<<<<<<< HEAD
=======

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_main, menu);
        return true;
    }
>>>>>>> origin/gh-pages
}
