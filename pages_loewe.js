window.path = {
    'start': {
        'text': 'Hallo Löwe,<br>da es gerade nicht möglich ist, gemeinsam am Tisch zu sitzen, haben wir ein kleines Online-Abenteuer für dich vorbereitet.<br>Hol Dir als Vorbereitung einen W20, im Laufe des Spiels musst du Würfelergebnisse eintragen.<br><br>Viel Spaß!',
        'success': 'ort',
    },
    'ort': {
        'text': '<span class="title">Bashar - Der Letzte von uns</span><br><br><br>Du wachst mitten auf dem Dorfplatz von einem kleinen, unbekannten Ort auf. Die meisten Häuser sind verbarrikadiert, nur die <button class="intext-btn link-a-btn">Taverne</button> sieht halbwegs einladend aus.<br><br>Auf der anderen Seite des Dorfes siehst du einen kleinen Weg, dieser scheint in den nahegelegenen <button class="intext-btn link-b-btn">Wald</button> zu führen.',
        'distraction': true,
        'link_b': 'wald',
        'link_a': 'kneipe',
    },
    'kneipe': {
        'text': 'Du begibst dich in die Taverne. Sie ist nicht gut beleuchtet und noch schlechter besucht. Aber ein stämmiger Wirt steht hinter dem Tresen und putzt einen Krug.<br>"Hallo Fremder, was kann ich gutes für dich tun?"<br>"Rastullah zum Gruße, ich suche meine Gefährten. Hat eine Gruppe von Fremde vor Kurzem dieses wunderbare Etablissement besucht?"<br>"Hmm, ja schon, aber..." <br>Er beäugt dich eindringlich.',
        'success': 'kneipe2',
    },
    'kneipe2': {
        'text': '"Aber die Fremden waren ein Adliger aus dem Bornland und sein Gefolge. Ich glaube nicht, dass dies die Freunde waren, die du suchst ..." fährt er fort, "... Ohne Dir zu nahe zu treten. Aber weißt du was: Sie haben ein gutes Trinkgeld gegeben, hier ... ein Met aufs Haus."<br>Du bedankst dich für den Met und trinkst ihn hastig aus. Danach begibst du dich wieder nach draußen. Das Sonnenlicht blendet dich zuerst, aber du gewöhnst dich schnell dran.',
        'success': 'ort_copy',
    },
    'ort_copy': {
        'text': 'Du befindest dich wieder auf dem Dorfplatz.<br><br>Dein einziger Ausweg scheint der <button class="intext-btn link-a-btn">Wald</button> zu sein.<br><br>Oder solltest du doch nochmal in der <button class="intext-btn link-b-btn">Taverne</button> nachschauen?',
        'distraction': true,
        'link_a': 'wald',
        'link_b': 'kneipe_retry',
    },
    'kneipe_retry': {
        'text': '"Ah, mein südländischer Freund. Hast du was vergessen? Den nächsten Met musst du leider zahlen."<br>Du würdest gerne noch einen trinken, aber scheinbar ist dein Geldbeutel weg. Traurig verlässt du die Kneipe.',
        'success': 'ort_copy',
    },
    "wald": {
        'text': 'Du begibst dich in den Wald. Zuerst befindest du dich noch auf einem gut befestigten Weg, aber je tiefer du in den Wald kommst, desto schlechter lässt sich der Pfad erkennen.<br><br>Mach eine Probe auf Wildnisleben.',
        'success': 'wald_success',
        'checkSkill': 'Wildnis',
        'fail': 'wald_fail'
    },
    "wald_success": {
        'text': '"Ja, hier entlang." sagst du zu dir selbst.<br>Du begibst dich weiter und weiter in den Wald. Am Wegesrand findest du einige Pilze. Dies wäre ein Paradies für einen Sammler, aber du hast kein Interesse daran. Der Weg ist erstaunlich gut erkennbar, obwohl es nur ein kleiner Trampelpfad ist. Du kannst sogar recht weit schauen und bist ein wenig stolz auf dich selbst. Nach einiger Zeit macht der Weg macht eine scharfe Kurve nach rechts und dahinter siehst du eine dir bekannte Gestalt - ein Zwerg.',
        'success': 'zwerg'
    },
    "wald_fail": {
        'text': '"Ah, da ist ja der Weg" sagst du zu dir selbst.<br>Du begibst dich weiter und weiter in den Wald, in der absoluten Sicherheit auf dem richtigen Weg zu sein.<br>Irgendwann musst du dir aber selbst eingestehen, dass du dich verlaufen hast und planlos durchs Unterholz schlägst. Die Schnitte und Abschürfungen an deinem Körper treiben dich fast zur Kapitulation.<br>Aber genau in dem Moment riechst du einen dir bekannten Geruch - ein Zwergen.',
        'success': 'zwerg'
    },
    "zwerg": {
        'text': 'Es ist tatsächlich Belegol. Er steht mit dem Rücken zu dir und ist voll auf seine Aufgabe konzentriert - er angelt!<br>"Belegol, was machst du da? Fische wird es hier keine geben. Oder versuchst du wieder ein Eichhörnchen zu fangen?" - Du lachst laut los, er reagiert nicht. Möchtest du ihn gewaltsam zu dir <button class="intext-btn link-a-btn">herum drehen</button> oder findest du dies alles sehr merkwürdig und <button class="intext-btn link-b-btn">gehst weiter</button>, ohne ihn zu beachten?',
        'distraction': true,
        'link_a': 'zwerg_touch',
        'link_b': 'zwerg_confirm'
    },
    "zwerg_confirm": {
        'text': 'Willst du wirklich Belegol alleine hier im Wald lassen? Er steht dort zwar still und stumm, aber war sicherlich nur in seine Aufgabe vertieft.<br><button class="intext-btn link-a-btn">Drehst du um</button> oder gehst du <button class="intext-btn link-b-btn">alleine weiter</button>? Vor dir wird der Wald immer dichter und strahlt eine unheimliche Atmosphäre aus.',
        'distraction': true,
        'link_a': 'zwerg2',
        'link_b': 'tiefer_wald_ohne'
    },
    "zwerg2": {
        'text': 'Du bist wieder zurück beim Zwerg. Gehst du <button class="intext-btn link-a-btn">auf ihn zu</button> oder bist du dir jetzt doch sicher <button class="intext-btn link-b-btn">alleine weiter</button> zu gehen?',
        'distraction': true,
        'link_a': 'zwerg_touch',
        'link_b': 'zwerg_confirm'
    },
    "zwerg_touch": {
        'text': 'Gerade als du Belegol berühren willst, dreht er sich von alleine um. In dem Moment merkst du, dass er gar nicht angelt. Die Angelleine ist ein Auswuchs aus einem Pilz am Wegesrand, der sich scheinbar am Kopf des Zwergen festgesetzt hat. Und auch Belegol scheint nicht er selbst zu sein, seine Augen sind komplett weiß und er greift nach seiner Axt.<br>Du kannst dem ersten Schlag durch eine Ausweichrolle entgehen und zückst nun selbst dein Streithammer.',
        'success': 'wald_kampf'
    },
    "wald_kampf": {
        'text': 'Kampf gegen Ophiocordyceps<br><br>Du holst zum Schlag aus.',
        'success': 'wald_kampf_win',
        'check': 'AT',
        'fail': 'wald_kampf_fail'
    },
    "wald_kampf_fail": {
        'text': 'Kampf gegen Ophiocordyceps<br><br>Du verfehlst sowohl den Pilz als auch deinen Freund.<br>Der Pilz schlägt mit einem weiteren Auswuchs nach dir.<br>Du versuchst du parieren.',
        'success': 'wald_kampf',
        'check': 'PA',
        'fail': 'wald_kampf_end'
    },
    "wald_kampf_end": {
        'text': 'Kampf gegen Ophiocordyceps<br><br>Der Pilz trifft dich.<br>Du schreist laut auf, aber innerhalb von Sekunden klingen deine eigenen Schreie nur entfernt in deinen Ohren wieder. Es wird schwarz vor deinen Augen.<br><br>Dein Abenteuer endet hier. Möchtest du es nochmal versuchen?'
    },
    "wald_kampf_win": {
        'text': 'Kampf gegen Ophiocordyceps<br><br>Du triffst den Pilz genau an der Stelle, wo die "Angelleine" am dünnsten ist. Unter einem unnatürlichen Schreien verschrumpelt der Pilz.<br>Aber auch dein Freund wird kleiner und kleiner. War dies alles nur eine Illusion?<br>In diesem Moment merkst du die Sporen in der Luft. Ohne lange Nachzudenken rennst du weiter in den Wald hinein.',
        'success': 'tiefer_wald'
    },
    "tiefer_wald_ohne": {
        'text': 'Der Wald wird immer dunkler. Aber du willst auch nicht umdrehen, irgendetwas an Belegol hat einfach nicht gestimmt.<br><br>Irgendwann scheint es aber wieder heller zu werden oder bildest du das dir nur ein?<br>Nein, dort scheint eine Lichtung zu sein. Und mitten auf der Lichtung kannst du eine kleine Hütte erkennen. Du kannst keinen Eingang erkennen, aber vor der Hütte steht Alrik und murmelt etwas vor sich hin.',
        'success': 'vor_huette_kampf',
    },
    "vor_huette_kampf": {
        'text': 'Kampf gegen Alrik?<br><br>Alrik sagt kein Wort zu dir, aber macht sich bereit mit seinem Kampfstab auf dich einzudreschen. Du bist jedoch schneller und holst zum Schlag aus.',
        'success': 'vor_huette_kampf_win',
        'check': 'AT',
        'fail': 'vor_huette_kampf_fail'
    },
    "vor_huette_kampf_fail": {
        'text': 'Kampf gegen Alrik?<br><br>Du schlägst ins Leere. Alrik nutzt diesen Fehler aus und trifft dich mit seinem Stab. Jedoch mit so wenig Kraft, dass du es gar nicht richtig spürst. Du bist bereit für einen weiteren Angriff.',
        'success': 'vor_huette_kampf_win',
        'check': 'AT',
        'fail': 'vor_huette_kampf_fail2'
    },
    "vor_huette_kampf_fail2": {
        'text': 'Kampf gegen Alrik?<br><br>Und erneut geht der Schlag daneben. Alrik trifft dich, aber macht keinen Schaden. Du bist bereit für einen weiteren Angriff.',
        'success': 'vor_huette_kampf_win',
        'check': 'AT',
        'fail': 'vor_huette_kampf_fail'
    },
    "vor_huette_kampf_win": {
        'text': 'Du triffst.<br>Aber im gleichen Moment erschrickst du , denn plötzlich kommt ein Geräusch von Alrik - ein unmenschliches Schreien. Dabei schrumpft er zusammen und wird immer kleiner. War dies eine von seinen bekannten Illusionen? Nein, als Alrik verschwunden ist, kannst du die Überreste von einem Ophiocordyceps erkennnen - einem Pilz, der andere Wesen kontrollieren kann.<br>Du atmest kurz durch und merkst dann, dass sich auf der Rückseite der Hütte doch eine Tür befindet - du trittst ein.',
        'success': 'huette',
    },
    "tiefer_wald": {
        'text': 'Der Wald wird immer dunkler. Aber du willst auch nicht umdrehen, diese Pilze möchtest du nie wieder sehen.<br><br>Irgendwann scheint es aber wieder heller zu werden oder bildest du das dir nur ein?<br>Nein, dort scheint eine Lichtung zu sein. Und mitten auf der Lichtung kannst du eine kleine Hütte erkennen. Die Hütte scheint verschlossen zu sein, denn vor der Hütte findest du Balduin, der am Türschloss herumwerkelt.',
        'success': 'vor_huette_decision',
    },
    "vor_huette_decision": {
        'text': '"Bashar! Gut dich zu sehen. Ich bin es wirklich, steck deine Waffe weg." Die letzten Pilze haben nicht geredet, ist dies wirklich Balduin? Als du dein Streithammer einsteckst, fährt er fort, "Alrik und Belegol haben es nicht geschafft, die Pilze haben sie geholt. Ich weiß nicht, wo Mo ist, aber ich habe gehofft, dass sie hier in der Hütte ist, leider ist diese verschlossen."<br><button class="intext-btn link-a-btn">Hilfst</button> du Balduin die Tür zu öffnen oder suchst du einen <button class="intext-btn link-b-btn">anderen Weg</button> in die Hütte zu gelangengehen?',
        'distraction': true,
        'link_a': 'vor_huette_marco',
        'link_b': 'vor_huette_akro'
    },
    "vor_huette_marco": {
        'text': 'Du schaust Balduin gespannt zu, wie er versucht die Tür zu öffnen.<br><br>Es vergehen Stunden.<br><br>Irgendwann wird dir langweilig und du gehst du einmal um die Hütte herum. Von der anderen Seite hörst du weiter Balduin fluchen.',
        'success': 'vor_huette_akro',
    },
    "vor_huette_akro": {
        'text': 'Auf der gegenüberliegenden Seite findest du ein kleines Fenster. Es ist nicht sehr groß, aber ein geübter Gaukler wie du sollte das im Handumdrehen schaffen.<br><br>Mach eine Probe auf Athletik.',
        'success': 'vor_huette_akro_win',
        'checkSkill': 'Athletik',
        'fail': 'vor_huette_akro_fail'
    },
    "vor_huette_akro_win": {
        'text': 'Du nimmst Anlauf und springst mit dem Kopf voraus durch das kleine Fenster. Drinnen machst du eine kleine Rolle und springst auf - ein wahrer Künstler.',
        'success': 'huette_marco',
    },
    "vor_huette_akro_fail": {
        'text': 'Du nimmst Anlauf und springst los. Leider ist das Fenster doch etwas höher als du gedacht hast. Dein Kopf ist schon durch die Öffnung, aber deine Beine knallen hart gegen die Fensterbank. Du überschlägst dich und purzelst durch die Hütte.',
        'success': 'huette_marco'
    },
    "huette": {
        'text': '"Mo!" ist das erste, was du hörst. "Mo!" erwiderst du. "Mo!" - "Mo! Es reicht. Schön dich zu sehen." "Bashar, ich freue mich auch dich zu sehen. Hier spielt alles verrückt. Draußen sind überall diese Pilze und irgendwie können die in deinen Körper gelangen. Selbst meine exzellenten Medizinkenntnisse können da nicht mehr helfen. Ich glaube die einzige Möglichkeit dies zu überleben, ist sich hier zu verstecken und zu hoffen, dass dieser Albtraum bald zu Ende ist."',
        'success': 'huette2'
    },
    "huette_marco": {
        'text': '"Mo!" ist das erste, was du hörst. "Mo!" erwiderst du. "Mo!" - "Mo! Es reicht. Schön dich zu sehen." "Bashar, ich freue mich auch dich zu sehen. Hier spielt alles verrückt. Draußen sind überall diese Pilze und irgendwie können die in deinen Körper gelangen. Selbst meine exzellenten Medizinkenntnisse können da nicht mehr helfen. Ich glaube die einzige Möglichkeit dies zu überleben, ist sich hier zu verstecken und zu hoffen, dass dieser Albtraum bald zu Ende ist."<br>Während der Unterhaltung lässt du auch Balduin in die Hütte.',
        'success': 'huette2'
    },
    "huette2": {
        'text': 'Nachdem ihr euch gegenseitig von euren Erlebnissen berichtet habt, schaut ihr euch in der Hütte um. Du findest eine kleine Schachtel. Du versuchst sie zu öffnen.<br>Mach eine Probe auf Körperkraft.',
        'success': 'huette2_win',
        'check': 'KK',
        'fail': 'huette2_fail'
    },
    "huette2_fail": {
        'text': '"Komm lass mich das machen." ruft Mo dir zu, als sie merkt, wie sehr dich das Öffnen anstrengt. Du gibst Mo die Schachtel und sie öffnet diese problemlos für dich.',
        'success': 'huette2_finale'
    },
    "huette2_win": {
        'text': 'Problemlos öfffnest du die Schachtel und schaust hinein.',
        'success': 'huette2_finale'
    },
    "huette2_finale": {
        'text': 'Während du in die Schachtel schaust, verschwimmt deine Umgebung und du befindest dich wieder an einem bekannten Ort. In der Ferne hörst du deine Freunde sagen:<br><br>Alles Gute zum Geburtstag wünschen Dir<br>Adrian, Keks, Marco, Siedler & Woscht',
        'success': 'grats'
    },
    "grats": {
        "text": 'Hier endet dein Abenteuer.<br><br>Wir hoffen es hat dir Spaß gemacht.<br><br>Auch in der Realität solltest du nun eine kleine Schachtel finden. Wir wünschen dir spaßige und gruselige Stunden damit.<br><br>Natürlich kannst du gerne dieses Abenteuer nochmal spielen, falls du auch die anderen Wege erkunden möchtest.',
    },
    "fail": {
        'text': 'Steine stürzen. Du bist tot.<br><br>Diese Seite hättest du nicht sehen sollen.<br><br>Woscht gibt dir aber gerne ein Bier aus, da du so fleißig nach Bugs gesucht hast.',
    }

};