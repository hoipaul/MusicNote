# Aan de slag met de MusicNote App &#8482;

## Inhoudsopgave:
1. Inleiding
2. Installatiebenodigdheden
3. Installatie-instructies
4. Registreren
5. Inloggen
6. Overige commando's

## 1. Inleiding

De MusicNote App &#8482; is een applicatie waarmee je naar muziek kunt zoeken.

Je kunt meer informatie vinden over je favoriete artiest, album of track.

Om van deze functies gebruiken te  maken dien je je te registreren en in te loggen met een gebruikersnaam en wachtwoord.

Het project is opgezet met [Create React App](https://github.com/facebook/create-react-app).

![MusicNote](src/assets/screenshot.jpg)

## 2. Installatiebenodigdheden
- Een developer IDE (zoals WebStorm of Visual Studio)
- Een webbrowser (bijv. Google Chrome / Safari / Firefox etc.)
- Er is g&#233;&#233;n API key benodigd.

## 3. Installatieinstructies

Je kunt het project clonen naar jouw lokale machine vanaf het adres van de github repository:

https://github.com/hoipaul/MusicNote

### 1. `npm install`

Voer het bovenstaande commando in het terminalvenster van je IDE in.

Hiermee worden alle benodigde dependencies voor de app geinstalleerd.

### 2. `npm start`

Door dit commando in te voeren in het terminalvenster wordt de applicatie geopend in je browser.

(In de IDE WebStorm kun je hiervoor ook de knop (npm start) gebruiken.)


Vervolgens kun je de app in je browser bekijken en gebruiken via [http://localhost:3000](http://localhost:3000)

## 4. Registreren

Voordat je kunt inloggen dien je je eerst te registreren via het tabblad 'aanmelden' met je e-mailadres en een zelfgekozen gebruikersnaam en wachtwoord.

Voorwaarden:
- Je gebruikersnaam dient tussen 6 en 10 karakters lang te zijn.
- Je wachtwoord dient tevens tussen 6 en 10 karakters lang te zijn en tenminste
1 speciaal teken te bevatten (zoals bijv. @, # of %)
  
Na een succesvolle registratie word je doorgestuurd naar de inlogpagina van MusicNote &#8482;

## 5. Inloggen

Onder het tabblad 'inloggen' kun je daarna je zelfgekozen gebruikersnaam en wachtwoord invoeren.

Wanneer je inlogpoging succesvol is zie je hier een melding van en word je vanzelf doorgestuurd naar je eigen profielpagina.

## 6. Overige commando's

### `npm test`

Hiermee kunnen de helper-functies worden getest in het App.test.js bestand in de root-folder van het MusicNote &#8482; project.

Na het uitvoeren van het commando in het terminal-venster wordt daarin weergeven welke tests er zijn uitgevoerd en of deze geslaagd zijn.

Uitgebreidere infomratie over het uitvoeren van tests is te lezen in de documentatie van React.