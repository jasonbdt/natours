# Natours:<br/>NodeJS, ExpressJS & MongoDB
## Inhaltsverzeichnis

* [Einleitung](#einleitung)
* [Einrichtung](#einrichtung)
  - [Docker Setup (empfohlen)](#docker-setup-empfohlen)
  - [Manuelles Setup (veraltet)](#manuelles-setup-veraltet)
* [Verbesserungen](#verbesserungen)
* [Demo-Zugang](#demo-zugang)
* [Anregungen und Feedback](#anregungen-und-feedback)

## Einleitung

Sehr geehrte Damen und Herren,

zuerst möchte ich mich bei Ihnen bedanken, dass Sie sich meine Arbeitsprobe anschauen, um mehr
über mich und meine Programmierkenntnisse in Erfahrung zu bringen. Dieses Projekt ist während des
Online-Kurses [Node.js, Express, MongoDB & More: The Complete Bootcamp 2023](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/) auf Udemy entstanden.

Der Dozent Jonas Schmedtmann hat den Schülern seines Kurses beigebracht, mittels NodeJS, ExpressJS und
MongoDB eine Webseite für kostenpflichtige Wanderreisen zu entwickeln. Die Bezahlung der Touren erfolgt
hierbei mittels der API von Stripe, einem weltweit sehr bekannten Zahlungsanbieter.

Ich hoffe Sie können sich anhand des Projektes ein Bild zu meinen Programmierkenntnissen und meinem -stil machen.

Mit freundlichen Grüßen<br/>
Jason Bladt

**Disclaimer:** Der Dozent hat ausdrücklich erlaubt, dass dieses Projekt als Arbeitsprobe verwendet werden darf.
Der Code des Kurses wurde <ins>nicht</ins> sturr nach Anleitung abgetippt (s. Abschnitt [Verbesserungen](#verbesserungen)).

## Einrichtung

Klonen Sie die Dateien dieser Repository an einen beliebigen Ort auf ihrem PC:

```bash
git clone https://github.com/jasonbdt/natours
```

---

### Docker Setup (empfohlen)
Das Setup geht davon aus, dass die benötigten Software-Komponenten auf dem Host-PC <ins>nicht installiert</ins> und die benötigten Ports demnach <ins>unbelegt</ins> sind.

**Troubleshooting:** Sollte ein benötigter Port bereits belegt sein, nehmen Sie Anpassungen in der `compose.yaml`-Datei vor. 

#### Voraussetzungen

1. Aktuelle Docker Version
2. Stipe API Key (optional)
3. Mailtrap.io Account (optional)

#### Vorgehensweise

1. Erstellen Sie die Dateien `/jwt_secret.txt` und `/mongodb_password.txt` im Projektverzeichnis und befüllen Sie diese mit Inhalt ([Password Generator Plus](https://passwordsgenerator.net/))

2. Führen Sie die nachfolgenden Befehle in Ihrem Terminal aus:
   ```bash
   cd natours
   docker compose up -d
   ```
3. Fertig!

---

### Manuelles Setup (veraltet)

#### Voraussetzungen
1. NodeJS 14
2. MongoDB Cluster ([Kostenlos erstellen](https://account.mongodb.com/account/login))
3. Stripe API Key (optional)
4. Mailtrap.io Account (optional)

#### Vorgehensweise

1. Nach dem Klonen der Repository öffnen Sie das Projekt im Terminal<br/>
   ```bash
   cd natours
   ```

2. Installieren Sie die benötigten NodeJS-Pakete<br/>
   ```bash
   npm install
   ```

3. Ersetzen Sie in der `config.env`-Datei `DB_HOST`, `DB_USERNAME` und `DB_PASSWORD` mit den Daten Ihres MongoDB-Clusters. Für `DB_HOST` ist die Connection-URL anzugeben. Der `DB_HOST` ist im folgenden Format anzugeben:<br/>

   mongodb+srv://<span style="color:rgb(56, 135, 255)">&lt;username&gt;</span>:<span style="color:rgb(211, 82, 59)">&lt;password&gt;</span>@<span style="color:rgb(56, 135, 255)">&lt;project&gt;</span>.<span style="color:rgb(56, 135, 255)">&lt;cluster&gt;</span>.mongodb.net/

   Ändern Sie die Angaben <span style="color:rgb(56, 135, 255)">in blau</span>, die <span style="color:rgb(211, 82, 59)">in rot</span> müssen für die spätere Verarbeitung so bleiben, wie sie sind.
   
   
4. Importieren Sie nun die Demo-Daten in Ihre soeben erstellte Mongo-Datenbank, indem Sie folgenden Befehl ausführen<br/>
   ```bash
   npm run import-demo
   ```

5. **Optional:** Fügen Sie in der `config.env`-Datei ebenfalls auch Ihre Daten für MailTrap.io und den Zahlungsanbieter Stripe ein

6. Starten Sie nun die NodeJS-Applikation<br/>
   ```bash
   npm start
   ```

6. Öffnen Sie mit Ihrem Browser die URL [http://localhost:3000](http://localhost:3000)

7. Fertig!

## Verbesserungen

Nachfolgend möchte ich kurz zusammenfassen, welche Änderungen vorgenommen wurden, die vom ursprünglichen Kursprojekt abweichen:

1. **Mapbox Integration**<br/>
   In Lektion 186-187 geht Jonas darauf ein, wie man eine Map von Mapbox im Frontend integriert. Die Standardkonfiguration des NPM-Moduls `helmetjs` verhindert jedoch, dass die Map geladen werden kann.<br/><br/>
   Meine Lösung war, die HelmetJS-Konfiguration dahingehend anzupassen, sodass Mapbox und später auch Stripe geladen werden können.

2. **Vorschau für User-Uploads**<br/>
   In Lektion 203 erklärt Jonas, wie man Nutzern der App erlaubt, Ihr eigenes Profilfoto über die Profileinstellungen hochzuladen. Der Nutzer bekommt beim Upload seines Bildes allerdings keine Vorschau seines Bildes angezeigt, erst beim Neuladen der Seite. Dadurch könnte bei Nutzern der Eindruck entstehen, dass beim Upload etwas fehlgeschlagen ist.<br/><br/>
   Meine Lösung implementiert die Bildvorschau, ohne dass der Nutzer die Seite neuladen muss oder ein zusätzlicher Klick auf `Save Settings` nötig ist.

3. **Docker Integration**<br/>
   Anders als im Kursprojekt vorgesehen, habe ich zusätzlich dafür gesorgt, dass das Projekt mittels Docker aufgesetzt werden kann. Da es sich hierbei um kein reales Projekt handelt, habe ich den bisherigen Ablauf zum Einrichten der Entwicklungsumgebung als Flaschenhals empfunden.<br/><br/>
   Mit der Docker-Integration ist das Aufsetzen der Entwicklungsumgebung in sekundenschnelle erledigt.

## Demo-Zugang

```text
Username: admin@bladt.de
Password: testtest
```

## Anregungen und Feedback

> Ich kenne nichts Ermutigenderes als die unbestrittene Fähigkeit des Menschen,
> sein Leben durch bewusste Anstrengung weiterzuentwickeln -- Henry David Thoreu

Insbesondere im Bereich der Programmierung hat man nie ausgelernt. Wenn Sie Anregungen, Verbesserungsvorschläge oder Feedback haben, wenden Sie sich gerne per E-Mail an mich: [ja.bladt@gmail.com](mailto:ja.bladt@gmail.com?subject=Feedback%20Arbeitsprobe).

Vielen Dank!
