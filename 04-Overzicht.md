# Overzicht

## Naam en Acroniemen

CIM-SWF: Conceptueel Informatiemodel Samenwerkfunctionaliteit.

## Informele beschrijving

De samenwerkfunctionaliteit (SWF) maakt samenwerking tussen bestuursorganen onderling en tussen
bestuursorganen en ketenpartners mogelijk, om zo de behandeling van een verzoek of het proces van
toezicht en handhaving te ondersteunen
en de doorlooptijd van deze twee typen van processen te verkorten.
Ondanks de focus op behandelen van een verzoek en toezicht en handhaving is de SWF generiek van
opzet, met als kernfunctionaliteit 
het uitwisselen van documenten
en het uitzetten van actieverzoeken tussen de deelnemers aan de samenwerking onderling.

Tijdens het starten van een samenwerking wordt een samenwerkingsdossier (in het CIM noemen we dit simpelweg: samenwerking) met bijbehorende 
identificatie gecreëerd (het samenwerkingID) en wordt (optioneel, en alleen als het om het behandelene van een verzoek gaat) een bijbehorend 'verzoek' 
(vergunningsaanvraag) opgehaald uit het DSO-LV en in het samenwerkdossier  geplaatst. 
Een samenwerking kan alleen door een overheidsorgaan worden gestart: de initiator van de samenwerking.
Gegevens die te maken hebben met de samenwerking (metadata) kunnen worden toegevoegd, gewijzigd en ingezien (toevoegen en wijzigen alleen door de initiator, inzien door alle deelnemers)

Na het starten van een samenwerking kunnen ketenpartners worden uitgenodigd om deel te nemen aan de betreffende samenwerking.
Bij de uitnodiging kan de ketenpartner een 'privilege' worden toegekend, te weten 'Volledige toegang' of 'Beperkte toegang'. Bij privilege 'Beperkte toegang' heeft de betreffende ketenpartner alleen toegang tot documenten die als 'Vertrouwelijk' zijn gemarkeerd. Alle documenten die onderdeel zijn van een samenwerking, zijn vertrouwelijk, maar deze documenten bevatten geen persoonsgegevens en ook geen bedrijfsgevoelige gegevens. Bij privilege 'Volledige toegang' heeft de betreffende ketenpartner daarnaast toegang tot documenten die als 'Strikt vertrouwelijk' zijn gemarkeerd. Dergelijke documenten bevatten mogelijk wél persoonsgegevens en/of bedrijfsgevoelige gegevens. Alleen de initiator kan ketenpartners uitnodigen.
Ketenpartners kunnen ook weer worden verwijderd uit een samenwerking. Ook kunnen de privileges van een samenwerking worden aangepast.

Aan een samenwerking kunnen (Omgevings)documenten worden toegevoegd, waarbij het vertrouwelijkheidskenmerk ('Strikt vertrouwelijk' of 'Vertrouwelijk') van het document moet worden aangegeven.
Deelnemers met privilege 'Volledige toegang' hebben toegang tot alle documenten  in het samenwerkdossier, andere deelnemers alleen tot documenten met vertrouwelijkheidskenmerk 'Vertrouwelijk'.
Documenten kunnen worden toegevoegd, gedownload, worden verwijderd, en de vertrouwelijkheidskenmerken kunnen worden aangepast.

Een samenwerking krijgt verder vorm doordat deelnemers elkaar actieverzoeken kunnen sturen, waarbij typisch om de levering van een product of dienst wordt gevraagd, bijvoorbeeld het uitbrengen van een advies.
Zo'n product of dienst is (optioneel) geformaliseerd in de vorm van een productspecificatie in de PDC (Producten Diensten Catalogus).
Elke deelnemer aan de samenwerking kan een actieverzoek uitzetten voor elke andere deelnemer. Een actieverzoek kan worden gereed gemeld (eventueel met toelichting) of weer worden ingetrokken (eventueel ook met toelichting).

Alle statuswijzigingen van entiteiten in het model, en alle andere events die tijdens een samenwerking optreden, worden via attenderingen (notificaties) gecommuniceerd aan de deelenemers.

## Uitganspunten van modellering

CIM-SWF is gemodelleerd conform het Metamodel Informatiemodellering [[!MIM]] en is gebaseerd op het GAS samenwerkfuctionaliteit [[!GASSW]]


## Symbolen en afkortingen

 - **API** Application Programming Interface
 - **DSO** Digitaal Stelsel Omgevingswet
 - **DSO-LV** Digitaal Stelsel Omgevingswet - Landelijke Voorziening
 - **MIM** Metamodel voor Informatiemodellen
 - **OGAS** Overall Globale Architectuur Schets
 - **UML** Universal Modeling Language
