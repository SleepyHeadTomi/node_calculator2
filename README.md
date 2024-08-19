# Testverktyg inlämningsuppgift 3

# Projektbeskrivning

I denna uppgift har jag skapat två pipeline med hjälp av Jenkins och Github Actions. Till uppgiften ingick också att skapa några testfiler där vissa av projektets funktioner testades, plus att skript för dessa testfiler las till i package.json.

## Krav

- Konto och inloggningsuppgifter till Jenkins, Github-konto

## Installationsguide

1. Ladda ner zip-filen till valfri plats.
2. Extrahera alla filer.
3. Öppna terminalen.
4. Navigera till mappen "node_calculator2" via terminalen.
5. Logga in på Github och skapa ett tomt repo och följ insttruktionerna där för att länka ett lokalt repo till ditt nya Github-repo
6. Gå tillbaka till terminalen och starta servern genom att ange kommandot: `npm start`
7. Öppna en ny terminal och navigera till mappen där du har jenkins.war installerad
8. Starta Jenkins genom att i terminalen skriva: `java -jar jenkins.war`
9. Nu kan du öppna två fönster i din browser. Ange `localhost:3000` för att nå programmet och `localhos:8080` Jenkins
10. I Jenkins så väljer du "Skapa nytt Item", ange ett lämpligt namn, klicka i "Pipeline" och sist på "OK".
11. Nu är pipeline-jobbet skapat.
12. Klicka på "Konfigurera" och följ instruktionerna för att lägga till ett repo från Github som det är tänkt att göra en pipeline på.
13. Gör någon änding i din kod, add:a, commit:a och push:a upp till Github
14. Github Actions kommer att skapa en pipeline för projekt så fort någon ändra på main-branchen i repot och Jenkins kommer skapa en pipeline efter att den har skannat och hittat ny commits på repot på Github. 
  

## Skapad av

- Tomislav Vuckovic