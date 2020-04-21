import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

void main() => runApp(MyApp());

class RandomEnglishWords extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return new RandomEnglistWordsState();
  }
}

class RandomEnglistWordsState extends State<RandomEnglishWords> {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    final wordPair = new WordPair.random();
    return new Text(
        wordPair.asUpperCase,
        style: new TextStyle(fontSize: 22.0)
    );
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: "This is my first Flutter App",
        home: new Scaffold(
            appBar: new AppBar(
                title: new Text("This is Header ")
            ),
            body: new Center(
              child: new RandomEnglishWords()
            )
        )
    );
  }
}