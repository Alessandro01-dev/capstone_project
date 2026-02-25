const addressMap = {
  "9.21345,45.46512": { address: "Via Giovanni Celoria, 20, 20133 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "7.68231,45.07245": { address: "Via Pietro Micca, 15, 10121 Turin, Italy", city: "Turin", placeId: "ChIJp773_6uEiEcR8H6_mHsiAAQ" },
  "12.50321,41.89987": { address: "Via Marsala, 29, 00185 Rome, Italy", city: "Rome", placeId: "ChIJu46S-6hBCRMR9S9p7m7X32o" },
  "11.25874,43.77521": { address: "Via de' Servi, 15, 50122 Florence, Italy", city: "Florence", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "11.33987,44.49812": { address: "Via dell'Indipendenza, 44, 40121 Bologna, Italy", city: "Bologna", placeId: "ChIJv9_5_9uEiEcR8H6_mHsiAAQ" },
  "9.19632,45.45974": { address: "Corso di Porta Romana, 10, 20122 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "11.27218,43.76854": { address: "Piazza Santa Croce, 16, 50122 Florence, Italy", city: "Florence", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "14.27145,40.84792": { address: "Corso Umberto I, 154, 80138 Naples, Italy", city: "Naples", placeId: "ChIJ98S6_0pEiEcR8H6_mHsiAAQ" },
  "7.70123,45.06782": { address: "Via Po, 18, 10123 Turin, Italy", city: "Turin", placeId: "ChIJp773_6uEiEcR8H6_mHsiAAQ" },
  "9.18273,45.47241": { address: "Via Dante, 7, 20121 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "8.93842,44.41258": { address: "Via XX Settembre, 210, 16121 Genoa, Italy", city: "Genoa", placeId: "ChIJ78p9_9uEiEcR8H6_mHsiAAQ" },
  "11.35647,44.50192": { address: "Via Zamboni, 33, 40126 Bologna, Italy", city: "Bologna", placeId: "ChIJv9_5_9uEiEcR8H6_mHsiAAQ" },
  "12.50784,41.89563": { address: "Via Nazionale, 194, 00184 Rome, Italy", city: "Rome", placeId: "ChIJu46S-6hBCRMR9S9p7m7X32o" },
  "11.26937,43.76482": { address: "Via dei Benci, 2, 50122 Florence, Italy", city: "Florence", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "14.25538,40.84691": { address: "Via Toledo, 256, 80132 Naples, Italy", city: "Naples", placeId: "ChIJ98S6_0pEiEcR8H6_mHsiAAQ" },
  "9.20891,45.45736": { address: "Viale Bligny, 15, 20136 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "7.67152,45.08574": { address: "Via Cibrario, 26, 10144 Turin, Italy", city: "Turin", placeId: "ChIJp773_6uEiEcR8H6_mHsiAAQ" },
  "13.34729,38.12384": { address: "Via della Libertà, 42, 90143 Palermo, Italy", city: "Palermo", placeId: "ChIJL773_6uEiEcR8H6_mHsiAAQ" },
  "10.99831,45.44567": { address: "Corso Porta Nuova, 12, 37122 Verona, Italy", city: "Verona", placeId: "ChIJ3z7dW6jBhkcR8BqCH4HZBsM" },
  "11.35812,44.48973": { address: "Via Castiglione, 25, 40124 Bologna, Italy", city: "Bologna", placeId: "ChIJv9_5_9uEiEcR8H6_mHsiAAQ" },
  "9.20463,45.45287": { address: "Corso Italia, 1, 20122 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "12.51238,41.88974": { address: "Via Appia Nuova, 145, 00183 Rome, Italy", city: "Rome", placeId: "ChIJu46S-6hBCRMR9S9p7m7X32o" },
  "11.26892,43.75841": { address: "Viale Michelangelo, 61, 50125 Florence, Italy", city: "Florence", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "10.97864,45.45213": { address: "Corso Milano, 24, 37138 Verona, Italy", city: "Verona", placeId: "ChIJ3z7dW6jBhkcR8BqCH4HZBsM" },
  "7.70145,45.08392": { address: "Corso Giulio Cesare, 10, 10152 Turin, Italy", city: "Turin", placeId: "ChIJp773_6uEiEcR8H6_mHsiAAQ" },
  "9.17384,45.47816": { address: "Corso Sempione, 1, 20145 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "11.33074,44.50638": { address: "Via Guglielmo Marconi, 32, 40122 Bologna, Italy", city: "Bologna", placeId: "ChIJv9_5_9uEiEcR8H6_mHsiAAQ" },
  "13.34382,38.12947": { address: "Via Notarbartolo, 14, 90141 Palermo, Italy", city: "Palermo", placeId: "ChIJL773_6uEiEcR8H6_mHsiAAQ" },
  "12.50593,41.88742": { address: "Via Giovanni Giolitti, 34, 00185 Rome, Italy", city: "Rome", placeId: "ChIJu46S-6hBCRMR9S9p7m7X32o" },
  "9.16728,45.48173": { address: "Via Piero della Francesca, 5, 20154 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "11.27263,43.75684": { address: "Piazzale Galileo, 5, 50125 Florence, Italy", city: "Florence", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "11.32954,44.50317": { address: "Via Lame, 102, 40122 Bologna, Italy", city: "Bologna", placeId: "ChIJv9_5_9uEiEcR8H6_mHsiAAQ" },
  "7.66438,45.08921": { address: "Via Luigi Cibrario, 70, 10144 Turin, Italy", city: "Turin", placeId: "ChIJp773_6uEiEcR8H6_mHsiAAQ" },
  "14.28263,40.83974": { address: "Corso Novara, 10, 80143 Naples, Italy", city: "Naples", placeId: "ChIJ98S6_0pEiEcR8H6_mHsiAAQ" },
  "12.30374,45.43518": { address: "Fondamenta de la Preson, 30122 Venice, Italy", city: "Venice", placeId: "ChIJGz6uE9_SfkcR8Cl9UTh_090" },
  "9.21457,45.44892": { address: "Viale Isonzo, 25, 20135 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "12.47925,41.91376": { address: "Piazza del Popolo, 1, 00187 Rome, Italy", city: "Rome", placeId: "ChIJu46S-6hBCRMR9S9p7m7X32o" },
  "13.34987,38.13264": { address: "Via Francesco Paolo Di Blasi, 1, 90144 Palermo, Italy", city: "Palermo", placeId: "ChIJL773_6uEiEcR8H6_mHsiAAQ" },
  "7.68123,45.07891": { address: "Via Giuseppe Garibaldi, 20, 10122 Turin, Italy", city: "Turin", placeId: "ChIJp773_6uEiEcR8H6_mHsiAAQ" },
  "11.26218,43.77234": { address: "Via del Proconsolo, 4, 50122 Florence, Italy", city: "Florence", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "9.12567,45.47021": { address: "Via Don Carlo Gnocchi, 3, 20148 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "12.50347,41.89512": { address: "Via Cavour, 250, 00184 Rome, Italy", city: "Rome", placeId: "ChIJu46S-6hBCRMR9S9p7m7X32o" },
  "11.34879,44.50013": { address: "Via delle Belle Arti, 56, 40126 Bologna, Italy", city: "Bologna", placeId: "ChIJv9_5_9uEiEcR8H6_mHsiAAQ" },
  "10.98567,45.44122": { address: "Via Valverde, 1, 37122 Verona, Italy", city: "Verona", placeId: "ChIJ3z7dW6jBhkcR8BqCH4HZBsM" },
  "13.78211,45.65284": { address: "Via Carducci, 2, 34133 Trieste, Italy", city: "Trieste", placeId: "ChIJKz6uE9_SfkcR8Cl9UTh_090" },
  "14.27548,40.85812": { address: "Via Arenaccia, 15, 80141 Naples, Italy", city: "Naples", placeId: "ChIJ98S6_0pEiEcR8H6_mHsiAAQ" },
  "9.19574,45.46832": { address: "Piazza del Duomo, 1, 20122 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "11.33792,44.49857": { address: "Via Ugo Bassi, 1, 40121 Bologna, Italy", city: "Bologna", placeId: "ChIJv9_5_9uEiEcR8H6_mHsiAAQ" },
  "12.50112,41.90021": { address: "Via XX Settembre, 2, 00187 Rome, Italy", city: "Rome", placeId: "ChIJu46S-6hBCRMR9S9p7m7X32o" },
  "13.36422,38.11689": { address: "Via Maqueda, 1, 90133 Palermo, Italy", city: "Palermo", placeId: "ChIJL773_6uEiEcR8H6_mHsiAAQ" },
  "11.26097,43.77241": { address: "Piazza del Duomo, 1, 50122 Florence, Italy", city: "Florence", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "9.18245,45.46678": { address: "Via Orefici, 1, 20123 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "12.49078,41.90512": { address: "Via Veneto, 1, 00187 Rome, Italy", city: "Rome", placeId: "ChIJu46S-6hBCRMR9S9p7m7X32o" },
  "11.34789,44.49721": { address: "Via Rizzoli, 1, 40125 Bologna, Italy", city: "Bologna", placeId: "ChIJv9_5_9uEiEcR8H6_mHsiAAQ" },
  "10.98432,45.44099": { address: "Via degli Alpini, 1, 37122 Verona, Italy", city: "Verona", placeId: "ChIJ3z7dW6jBhkcR8BqCH4HZBsM" },
  "9.17891,45.46567": { address: "Via Torino, 1, 20123 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "11.25876,43.77321": { address: "Piazza della Signoria, 1, 50122 Florence, Italy", city: "Florence", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "7.69012,45.07189": { address: "Piazza Castello, 1, 10123 Turin, Italy", city: "Turin", placeId: "ChIJp773_6uEiEcR8H6_mHsiAAQ" },
  "12.31552,45.44075": { address: "Piazza San Marco, 1, 30124 Venice, Italy", city: "Venice", placeId: "ChIJGz6uE9_SfkcR8Cl9UTh_090" },
  "9.12902,45.46421": { address: "Piazzale Lorenzo Lotto, 1, 20148 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "7.68692,45.07031": { address: "Via Roma, 1, 10123 Turin, Italy", city: "Turin", placeId: "ChIJp773_6uEiEcR8H6_mHsiAAQ" },
  "12.49641,41.90281": { address: "Via Quattro Fontane, 1, 00184 Rome, Italy", city: "Rome", placeId: "ChIJu46S-6hBCRMR9S9p7m7X32o" },
  "12.31552,45.44082": { address: "Campo San Zulian, 30124 Venice, Italy", city: "Venice", placeId: "ChIJGz6uE9_SfkcR8Cl9UTh_090" },
  "13.362674,38.118441": { address: "Via Vittorio Emanuele, 1, 90133 Palermo, Italy", city: "Palermo", placeId: "ChIJL773_6uEiEcR8H6_mHsiAAQ" },
  "11.25582,43.76961": { address: "Borgo San Iacopo, 1, 50125 Florence, Italy", city: "Florence", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "11.34261,44.49491": { address: "Via San Vitale, 1, 40125 Bologna, Italy", city: "Bologna", placeId: "ChIJv9_5_9uEiEcR8H6_mHsiAAQ" },
  "12.31553,45.44081": { address: "Riva degli Schiavoni, 30122 Venice, Italy", city: "Venice", placeId: "ChIJGz6uE9_SfkcR8Cl9UTh_090" },
  "11.25583,43.76963": { address: "Lungarno Torrigiani, 1, 50125 Florence, Italy", city: "Florence", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "12.49643,41.90282": { address: "Via del Quirinale, 1, 00187 Rome, Italy", city: "Rome", placeId: "ChIJu46S-6hBCRMR9S9p7m7X32o" },
  "11.343,44.495": { address: "Piazza Santo Stefano, 1, 40125 Bologna, Italy", city: "Bologna", placeId: "ChIJv9_5_9uEiEcR8H6_mHsiAAQ" },
  "12.4966,41.903": { address: "Via Nazionale, 1, 00184 Rome, Italy", city: "Rome", placeId: "ChIJu46S-6hBCRMR9S9p7m7X32o" },
  "9.1934,45.4643": { address: "Via Larga, 1, 20122 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "14.2683,40.8523": { address: "Piazza Garibaldi, 1, 80142 Naples, Italy", city: "Naples", placeId: "ChIJ98S6_0pEiEcR8H6_mHsiAAQ" },
  "11.2559,43.7697": { address: "Ponte Vecchio, 1, 50125 Florence, Italy", city: "Florence", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "9.19335,45.46535": { address: "Piazza Fontana, 1, 20122 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "11.25585,43.76965": { address: "Lungarno degli Acciaiuoli, 1, 50123 Florence, Italy", city: "Florence", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "12.31555,45.44085": { address: "Molo San Marco, 30124 Venice, Italy", city: "Venice", placeId: "ChIJGz6uE9_SfkcR8Cl9UTh_090" },
  "12.49645,41.90295": { address: "Via delle Quattro Fontane, 15, 00184 Rome, Italy", city: "Rome", placeId: "ChIJu46S-6hBCRMR9S9p7m7X32o" },
  "7.68695,45.07035": { address: "Piazza Castello, 2, 10123 Turin, Italy", city: "Turin", placeId: "ChIJp773_6uEiEcR8H6_mHsiAAQ" },
  "9.19345,45.46725": { address: "Via Rastrelli, 1, 20122 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "11.25585,43.76965": { address: "Ponte Vecchio, 50125 Florence, Italy", city: "Florence", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "12.49645,41.90285": { address: "Via del Quirinale, 00187 Rome, Italy", city: "Rome", placeId: "ChIJu46S-6hBCRMR9S9p7m7X32o" },
  "11.3427,44.495": { address: "Piazza di Porta Ravegnana, 40126 Bologna, Italy", city: "Bologna", placeId: "ChIJv9_5_9uEiEcR8H6_mHsiAAQ" },
  "11.2559,43.7697": { address: "Piazza de' Pitti, 50125 Florence, Italy", city: "Florence", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "9.2001,45.4643": { address: "Via Larga, 12, 20122 Milan, Italy", city: "Milan", placeId: "ChIJ537dW6jBhkcR8BqCH4HZBsM" },
  "14.26815,40.85225": { address: "Via Giuseppe Garibaldi, 80142 Naples, Italy", city: "Naples", placeId: "ChIJ98S6_0pEiEcR8H6_mHsiAAQ" },
  "11.25595,43.76975": { address: "Lungarno degli Archibusieri, 50122 Florence, Italy", city: "Florence", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "12.31565,45.44085": { address: "Piazza San Marco, 30124 Venice, Italy", city: "Venice", placeId: "ChIJGz6uE9_SfkcR8Cl9UTh_090" },
  "11.1594,46.6701": { address: "Via dei Portici, 39012 Merano, Italy", city: "Merano", placeId: "ChIJJXF-p6mDdkcR2Y8vF9y73kE" },
  "16.6043,40.6664": { address: "Via del Corso, 75100 Matera, Italy", city: "Matera", placeId: "ChIJ3Y45_mR8ERMR9L_r-mHsiAA" },
  "10.4017,43.7228": { address: "Piazza del Duomo, 56126 Pisa, Italy", city: "Pisa", placeId: "ChIJ69-vM6hVKhMRX7S9p7m7X3o" },
  "12.6364,43.7262": { address: "Via Raffaello, 61029 Urbino, Italy", city: "Urbino", placeId: "ChIJN8S6_0pEiEcR8H6_mHsiAAQ" },
  "15.083,37.5079": { address: "Via Etnea, 95124 Catania, Italy", city: "Catania", placeId: "ChIJVf5_9uEiEcR8H6_mHsiAAQ" },
  "12.2035,44.4184": { address: "Via di Roma, 48121 Ravenna, Italy", city: "Ravenna", placeId: "ChIJV9_5_9uEiEcR8H6_mHsiAAQ" },
  "11.3305,43.3186": { address: "Piazza del Campo, 53100 Siena, Italy", city: "Siena", placeId: "ChIJ78p9_9uEiEcR8H6_mHsiAAQ" },
  "7.32,45.737": { address: "Piazza Emile Chanoux, 11100 Aosta, Italy", city: "Aosta", placeId: "ChIJL773_6uEiEcR8H6_mHsiAAQ" },
  "15.65,38.1144": { address: "Corso Giuseppe Garibaldi, 89125 Reggio Calabria, Italy", city: "Reggio Calabria", placeId: "ChIJ3z7dW6jBhkcR8BqCH4HZBsM" },
  "13.7768,45.6495": { address: "Piazza Unità d'Italia, 34121 Trieste, Italy", city: "Trieste", placeId: "ChIJKz6uE9_SfkcR8Cl9UTh_090" },
  "6.9725,45.7872": { address: "Via Roma, 11013 Courmayeur, Italy", city: "Courmayeur", placeId: "ChIJGz6uE9_SfkcR8Cl9UTh_090" },
  "15.2866,37.0755": { address: "Piazza Duomo, 96100 Syracuse, Italy", city: "Syracuse", placeId: "ChIJ-z6uE9_SfkcR8Cl9UTh_090" },
  "11.1211,46.0679": { address: "Via Belenzani, 38122 Trento, Italy", city: "Trento", placeId: "ChIJ_7uS1Yp_hkcR8M0L-V-kC6Q" },
  "10.7911,45.1564": { address: "Piazza Sordello, 46100 Mantua, Italy", city: "Mantua", placeId: "ChIJv9_5_9uEiEcR8H6_mHsiAAQ" },
  "12.1106,42.7196": { address: "Piazza del Duomo, 05018 Orvieto, Italy", city: "Orvieto", placeId: "ChIJ98S6_0pEiEcR8H6_mHsiAAQ" },
  "12.1047,42.4173": { address: "Via San Lorenzo, 01100 Viterbo, Italy", city: "Viterbo", placeId: "ChIJ78p9_9uEiEcR8H6_mHsiAAQ" },
  "13.5768,42.8533": { address: "Piazza del Popolo, 63100 Ascoli Piceno, Italy", city: "Ascoli Piceno", placeId: "ChIJL773_6uEiEcR8H6_mHsiAAQ" },
  "11.6198,44.8381": { address: "Via Mazzini, 44121 Ferrara, Italy", city: "Ferrara", placeId: "ChIJ3z7dW6jBhkcR8BqCH4HZBsM" },
  "11.0401,45.8906": { address: "Corso Rosmini, 38068 Rovereto, Italy", city: "Rovereto", placeId: "ChIJGz6uE9_SfkcR8Cl9UTh_090" },
  "13.5765,37.3111": { address: "Via Atenea, 92100 Agrigento, Italy", city: "Agrigento", placeId: "ChIJKz6uE9_SfkcR8Cl9UTh_090" }
};

const cityPlaceIdMapping = {
  "Milan": "ChIJ53USP0nBhkcRjQ50xhPN_zw",
  "Turin": "ChIJJb4YZBJtiEcRv3ec1gP4A4k",
  "Rome": "ChIJu46S-ZZhLxMROG5lkwZ3D7k",
  "Florence": "ChIJrdbSgKZWKhMRAyrH7xd51ZM",
  "Bologna": "ChIJC8RR6ZjUf0cRQZSkWwF84aI",
  "Naples": "ChIJ6_p622YIOxMRfriMZcxDOtI",
  "Genoa": "ChIJrZrU3FJB0xIRCmKBGPGEaiM",
  "Palermo": "ChIJmdBOgcnoGRMRgNg7IywECwo",
  "Verona": "ChIJ4-CbaWhff0cRW1mCaGNa-FM",
  "Venice": "ChIJiT3W8dqxfkcRLxCSvfDGo3s",
  "Trieste": "ChIJM_Xt5AZre0cRUCvd1IQkamY",
  "Merano": "ChIJ2xr5zwG8gkcRWaTQdcopgII",
  "Matera": "ChIJKxUrSOJ-RxMRYJPaEK6k9gg",
  "Pisa": "ChIJj1n28JqR1RIRyHiEp7UPuKo",
  "Urbino": "ChIJ49nU2S_4LBMRHCpL26R1Wts",
  "Catania": "ChIJtSUVdt3iExMR8DzIUWGH_lg",
  "Ravenna": "ChIJF9okWlD5fUcRdqdUnDyjdCo",
  "Siena": "ChIJE1O_NL8sKhMR40Mj8RISc10",
  "Aosta": "ChIJt6-2PrcgiUcRECbuQ-RJZwA",
  "Reggio Calabria": "ChIJlSDqSZdQFBMRIj6cHj0TXcc",
  "Courmayeur": "ChIJI2cvm3JHiUcR6o37HeaIaP8",
  "Syracuse": "ChIJed-Loo3OExMRh4vFsoNmc9E",
  "Trento": "ChIJ253Oycp2gkcRR_WfE5mixic",
  "Mantua": "ChIJ2S7lgg_UgUcRhXsOWQf9x8E",
  "Orvieto": "ChIJaxB2ugbNLhMRQKgP05MpElI",
  "Viterbo": "ChIJz98ipvksLxMRQ2tvPJVVArU",
  "Ascoli Piceno": "ChIJLzsqJe78MRMRfr808vzvTI8",
  "Ferrara": "ChIJ3REr3gtOfkcRLitxU655Ozw",
  "Rovereto": "ChIJQXASQ8EOgkcR3_rrOhJklmo",
  "Agrigento": "ChIJh4ezdlWCEBMRs0GTCBLA8To"
};

const generateRandomMeetings = () => {
  const titles = ["Language Exchange", "Coffee with Tutor", "Grammar Workshop", "Speaking Practice", "Exam Preparation"];
  const locations = ["Library", "Starbucks", "Piazza Centrale", "Campus Cafe", "Online - Zoom"];
  
  const numMeetings = Math.floor(Math.random() * 3) + 1;
  const meetings = [];

  for (let i = 0; i < numMeetings; i++) {
    const meetingDate = new Date();
    meetingDate.setDate(meetingDate.getDate() + Math.floor(Math.random() * 30));
    
    meetings.push({
      title: titles[Math.floor(Math.random() * titles.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      time: `${Math.floor(Math.random() * 12) + 9}:00`,
      fullDate: meetingDate
    });
  }
  return meetings;
};

const fs = require('fs');
const userData = require('./userData');

const utentiAggiornati = userData.map(user => {

  const coords = user.location?.geo?.coordinates || [];
  const key = coords.join(',');
  const data = addressMap[key];

  const cityName = data ? data.city : (user.location.city || "Unknown");

  return {
    ...user,
    password: "password123",
    avatar: "https://picsum.photos/200",
    meetings: generateRandomMeetings(),
    location: {
      city: cityName,
      country: "Italy",
      address: data ? data.address : "",
      placeId: cityPlaceIdMapping[cityName] || (data ? data.placeId : ""),
      geo: {
        type: "Point",
        coordinates: coords
      }
    }
  }
});

const contenutoFile = `const userData = ${JSON.stringify(utentiAggiornati, null, 2)};\n\nmodule.exports = userData;`;

fs.writeFileSync('./userData_NEW.js', contenutoFile);

console.log("✅ Password, Avatar, Location e Meetings aggiornati con successo!");
