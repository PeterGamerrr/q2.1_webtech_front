# Samenwerking tussen front en backend.
De front en backend werken samen met een rest api de frontend verstuurt requests naar de backend. En dan stuurt de backend data weer terug naar de frontend.
Bijvoorbeeld om een lijst met alle auctions te krijgen stuurt de frontend een request naar '/api/auctions' daarmee haalt de backend die data op uit zijn geheugen en dan stuurt hij dat weer door naar de frontend. Als dat compleet is kan de frontend dat weergeven en dan kan de gebruiker het zien in de browser.

Om ze samen te laten werken is het belangrijk bij opstarten dat de backend op poort 3000 staat. Daarna kan je bij beide projecten de dependencies installeren met `npm i` en als dat klaar is opstarten met `npm start` nadat ze compleet zijn opgestart zou alles goed moeten samenwerken.