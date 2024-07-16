# Einleitung

Sehr geehrte Damen und Herren,

zuerst möchte ich mich bei Ihnen bedanken, dass Sie sich meine Arbeitsprobe anschauen, um mehr
über mich und meine Programmierkenntnisse in Erfahrung zu bringen. Dieses Projekt ist während des
Online-Kurses "Node.js, Express, MongoDB & More: The Complete Bootcamp 2023" auf Udemy entstanden.

Der Dozent Jonas Schmedtmann hat den Schülern seines Kurses beigebracht, mittels NodeJS, ExpressJS und
MongoDB eine Webseite für kostenpflichtige Wanderreisen zu entwickeln. Die Bezahlung der Touren erfolgt
hierbei mittels der API von Stripe, einem sehr bekannten Zahlungsanbieter.

Disclaimer: Der Dozent hat ausdrücklich erlaubt, dass dieses Projekt als Arbeitsprobe verwendet werden darf.
Weiterhin möchte ich an dieser Stelle nochmal erwähnen, dass der Code im Kurs nicht einfach nur abgetippt wurde.

Ich hoffe Sie können sich anhand des Projektes ein Bild zu meinen Programmierkenntnissen und meinem -stil machen.

Mit freundlichen Grüßen
Jason Bladt

## Voraussetzungen

1. NodeJS 14 or higher
2. MongoDB Cluster ([Kostenlos erstellen](https://account.mongodb.com/account/login))
3. Stripe API Key (optional)

## Getting Started

1. Öffnen Sie das Stammverzeichnis dieses Projektes im Terminal/CMD
2. Führen Sie `npm install` aus, um die notwendigen NodeJS-Pakete zu installieren
3. Konfigurieren Sie die Datei `config.env.example`, indem Sie die Datei in `config.env` umbenennen. Ersetzen Sie nun jeweils `HOST`, `USERNAME` und `PASSWORD` mit den Daten Ihres MongoDB-Clusters. Für den Host können Sie einfach die ConnectionURL einfügen.
4. Führen Sie `node ./demo/import-dev-data.js --import` im Stammverzeichnis des Projektes aus, um Demo-Daten für das Projekt im MongoDB Cluster zu generieren.
5. Starten Sie nun den lokalen NodeJS-Webserver auf Port 3000, indem Sie `npm run start` in Ihrem Terminal ausführen
6. Öffnen Sie mit Ihrem Browser die URL [http://localhost:3000](http://localhost:3000)
7. Viel Spaß :-)

## Anregungen und Feedback

> Ich kenne nichts Ermutigenderes als die unbestrittene Fähigkeit des Menschen,
> sein Leben durch bewusste Anstrengung weiterzuentwickeln -- Henry David Thoreu

Insbesondere im Bereich der Programmierung hat man nie ausgelernt. Wenn Sie Anregungen, Verbesserungsvorschläge oder Feedback haben, wenden Sie sich gerne per E-Mail an mich: [ja.bladt@gmail.com](mailto:ja.bladt@gmail.com?subject=Feedback%20Arbeitsprobe).

Vielen Dank!
