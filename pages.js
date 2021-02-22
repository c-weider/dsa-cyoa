window.path = {
    'start': {
        'text': 'Hallo Keks,<br>leider ist es noch immer nicht möglich zusammen zu spielen, deswegen haben wir ein weiteres Online-Abenteuer vorbereitet.<br>Hol Dir als Vorbereitung einen W20, im Laufe des Spiels musst du Würfelergebnisse eintragen.<br><br>Viel Spaß!',
        'code': function(){
            localStorage.dsa = '{}';
        },
        'success': 'dunkel'
    },
    'dunkel': {
        'text': '<span class="title">Mo - Das Haus der Kranken</span><br><br><br>Um dich herum ist es stockdunkel. Es riecht nach Bier und Schnaps und altem Holz. Ansonsten hörst du noch unheimliche Geräusche, fast wie das Knurren oder Grunzen von Tieren. Möchtest du <button class="intext-btn link-a-btn">um Hilfe rufen</button>? Dies könnte aber die Tiere aufwecken.<br><br> Ansonsten kannst du auch versuchen dich alleine <button class="intext-btn link-b-btn">aus dieser Höhle</button> zu bewegen.',
        'distraction': true,
        'link_a': 'kneipe_ruf',
        'link_b': 'kneipe_sinnes',
    },
    'kneipe_ruf': {
        'text': 'Du rufst nach Hilfe und lauscht danach, ob etwas passiert. Unglücklicherweise kommt dir niemand zu Hilfe, aber zu deinem Glück sind die Tiere auch noch nicht auf die aufmerksam geworden und grunzen vergnügt vor sich hin. Möchtest du <button class="intext-btn link-a-btn">nochmal rufen</button> oder lieber selbst den <button class="intext-btn link-b-btn">Weg nach draußen</button> finden?',
        'distraction': true,
        'link_a': 'kneipe_ruf2',
        'link_b': 'kneipe_sinnes',
    },
    'kneipe_ruf2': {
        'text': 'Du rufst erneut. Diesmal haben die Tiere dich gemerkt, zumindest hat das Grunzen aufgehört. Danach hörst du aber eine bekannte Stimme - Belegol: "Mo? Was isn loss? Kannamananichma in Ruhe hier schl - hicks - schla - hicks - pennen.<br>Danach geht dir ein Licht auf, in doppelten Sinne. Einerseits zündet Belegol eine kleine Kerze an, andererseits erinnerst du dich an den gestrigen Abend.',
        'success': 'kneipe_erklarung',
    },
    'kneipe_sinnes': {
        'text': 'Du versuchst dich möglichst lautlos aus dieser Gefahrensituation zu bringen. Du kannst zwar nichts erkennen, aber versuchst dich auf deine anderen Sinnen zu berufen.<br>Mach eine Probe auf Sinnesschärfe.',
        'success': 'vor_kneipe_sinnes',
        'checkSkill': 'Sinne',
        'fail': 'kneipe_sinnes_fail'
    },
    'kneipe_sinnes_fail': {
        'text': 'Du schaffst es problemlos dich ein paar Meter in eine Richtung zu bewegen ohne möglichst viel Lärm zu machen. Dann merkst du aber, dass du gar nicht weißt, wo du hin musst. Du drehst dich um und dabei stößt du etwas um. Ein lauter Knall von Metall auf Holz, gefolgt von Metall auf Stein ist im ganzen Raum zu hören. Danach wird es plötzlich hell in der Höhle, jemand hat ein Licht angezündet.',
        'success': 'kneipe_erklarung',
    },
    'kneipe_erklarung': {
        'text': 'Mit Hilfe des Lichts erkennst du, dass es sich bei der Höhle eigentlich um eine kleine Kaschemme handelt und die grunzenden Tiere sind deine schnarchenden Mitstreiter. Ihr habt gestern den Erfolg des letzten Abenteuers wohl etwas zu feuchtfröhlich gefeiert und seid hier versackt.<br>Deine Gefährten hat es wohl schlimmer als dich getroffen, so könnt ihr nicht weiterreisen.',
        'success': 'kneipe',
    },
    'vor_kneipe_sinnes': {
        'text': 'Du schaffst es problemlos zum anderen Ende der Höhle. Aber was ist das? Ist in dieser Höhle wirklich eine Holztür in der Wand. Du machst die Tür auf und trittst hinaus. Draußen erkennst du den Dorfplatz eines kleinen Ortes. Die vermeintliche Höhle ist eigentlich die Dorfkneipe. Durch die offene Tür fällt nun genug Licht, dass du drinnen mehr erkennen kannst.<br>Möchtest du dich <button class="intext-btn link-b-btn">im Dorf umsehen</button> oder willst du wieder <button class="intext-btn link-b-btn">zurück in die Kneipe</button> gehen?',
        'distraction': true,
        'link_a': 'markt',
        'link_b': 'kneipe_erklarung',
    },
    'markt_sinnes': {
        'text': 'Du siehst dich auf dem Markt um. Es gibt doch einige Stände, aber keiner spricht dich direkt an. Nachdem du etwas durch die Gassen geschlendert bist, kehrst du zurück zur Taverne. Du interessiert dich jetzt doch dafür, was diese Tiergeräusche waren.',
        'success': 'kneipe_erklarung',
    },
    'kneipe': {
        'text': 'Du machst dir ein Bild von dem Trauerspiel, was deine Kumpanen abgeben.<br><br>',
        'code': function(){
            if(!getLS('quest_alrik'))
            {
                obj.text += 'Am vordersten Tisch sitzt <button class="intext-btn link-a-btn">Alrik</button>. Er scheint etwas zu suchen.<br>';
            } else {
                obj.text += 'ALrik lässt seine Glaskugel über seine Hände tanzen und konzentriert sich wohl komplett auf den gewirkten Zauber.<br>';
            }
            if(!getLS('quest_belegol'))
            {
                obj.text += ' <button class="intext-btn link-b-btn">Belegol</button> liegt neben einem Tisch und wirkt sehr fertig.<br>';
            } else {
                obj.text += ' Belegol sitzt nun wieder am Tisch und ist mit seinem Brot beschäftigt.';
            }
            if(!getLS('quest_balduin'))
            {
                obj.text += ' Zuerst erkennst du ihn gar nicht, aber langgestreckt am Boden liegt <button class="intext-btn link-c-btn">Balduin</button>, sein Gesicht sieht schmerzverzerrt aus.<br>Neben ihm sitzt Bashar. Er wirkt von der ganzen Truppe am fittesten. Es sitzt aufrecht am Tisch - nein nicht davor, auf dem Tisch. Und Spielt mit seinem leeren Krug.';
            } else {
                obj.text += ' Balduin und Bashar sitzen zusammen am Tisch. Während ersterer sich ständig seinen Verband anschaut, konzentriert sich Bashar nur auf seinen Krug.';
            }
            if(getLS('quest_alrik') && getLS('quest_belegol') && getLS('quest_balduin'))
            {
                setLS('currentPage','quest_solved');
                window.obj = path['quest_solved'];
            } else {
                obj.text += '<br><br>Natürlich kannst du auch die <button class="intext-btn link-d-btn">Kneipe verlassen</button> und nach draußen treten.'
            }
        },
        'distraction': true,
        'link_a': 'quest_alrik',
        'link_b': 'quest_belegol',
        'link_c': 'quest_balduin',
        'link_d': 'vor_kneipe',
    },
    'quest_alrik': {
        'text': '"Ah! Mo! Vielleicht kannst du mir helfen, ich würde dir dann auch im Gegenzug eine kleine Freude machen. Ich suche meine Glaskugel. Hast du eine Ahnung, wo sie sein könnte?" Direkt vor Alriks Füßen liegt die Kugel. Du fragst dich kurz, ob dies ein blöder Witz von ihm sein soll, aber erkennst dann, dass der Alkohol wohl doch tiefer in seinen Knochen sitzt, als du eigentlich gedacht hast. Du reichst ihm die Kugel: "Alrik, hier ist deine Kugel." - "Vielen Dank. Findest du es nicht etwas trist hier? Ich mach es mal ein wenig lustiger für uns." Danach murmelt er irgendwelche Zaubersprüche. Plötzlich erscheinen überall wundersame Wesen.<br><br>',
        'code': function(){
            setLS('unicorn',true);
            setLS('quest_alrik',true);
        },
        'success': 'kneipe',
    },
    'quest_belegol': {
        'text': '"So hungrig. Mo, ich bin so hungrig. Kannst du mir nicht was zu essen holen?" jammert Belegol vor sich hin. Du siehst dich um, aber findest hier nichts mehr, was man noch als Essen bezeichnen könnte. Vielleicht gibt es am Markt ja einen Händler?<br><br>',
        'code': function(){
            if(!getLS('has_bread')) {
                setLS('wants_bread', true);
            } else {
                if(getLS('has_bread') === 2) {
                    obj.text = '"Oh, ist das das saftige Brot vom \'Saftigen Brot\'. Sehr gut! Vielen Dank, Mo." Mehr sagt Belegol nicht, bevor er sich dem saftigem Brot widmet. Ihm scheint es wohl schon besser zu gehen.';
                } else {
                    obj.text = '"Oh, ist das das saftige Brot vom \'Saftigen Brot\'? Nein, schade. Aber gut, trotzdem danke, Mo." Mehr sagt Belegol nicht, bevor er sich dem Brot widmet. Ihm scheint es wohl schon besser zu gehen.';
                }
                setLS('quest_belegol',true);
            }
        },
        'success': 'kneipe',
    },
    'quest_balduin': {
        'text': 'Balduin liegt auf dem Boden und bewegt sich nicht. Scheinbar hat es ihn heftig erwischt. "Er ist betrunken von einem Dach gefallen" sagt Bashar fast nebenbei. "Mir ist nur dieser Krug herunter gefallen, aber jetzt ist mein ganzes Met weg." Du hälst es für besser, kein neues Met für Bashar zu suchen, sondern kümmerst dich lieber um den verletzten Balduin.<br><br>Mach eine Probe auf Wundheilung',
        'success': 'balduin_success',
        'checkSkill': 'Heilung',
        'fail': 'balduin_fail'
    },
    'balduin_success': {
        'text': 'Du reinigst die Wunden und wickelst fachmännisch einige Bandagen um die offenen Stellen. Dies sollte zumindest das schlimmste verhindern. Alles weitere kann nur die Zeit heilen.',
        'code': function(){
            setLS('quest_balduin',true);
        },
        'success': 'kneipe',
    },
    'balduin_fail': {
        'text': 'Du reinigst die Wunden und wickelst einige Bandagen um die offenen Stellen. Dabei drückst du aus Versehen einen Finger in die offene Wunde und Balduin schreit los. Jedoch scheinst du keinen schlimmeren Schaden angerichtet zu haben. Mit der Zeit sollten die Wunden wieder heilen.',
        'code': function(){
            setLS('quest_balduin',true);
        },
        'success': 'kneipe',
    },
    'vor_kneipe': {
        'text': 'Du befindest dich wieder vor der Kneipe.<br>Möchtest du dich <button class="intext-btn link-a-btn">im Dorf umsehen</button> oder willst du wieder <button class="intext-btn link-b-btn">zurück in die Kneipe</button> gehen?',
        'distraction': true,
        'link_a': 'markt',
        'link_b': 'kneipe',
    },
    'markt': {
        'text': 'Du siehst dich auf dem Markt um. Es gibt doch einige Stände, aber keiner spricht dich direkt an. Nachdem du etwas durch die Gassen geschlendert bist, kehrst du zurück zur Taverne.',
        'success': 'vor_kneipe',
        code: function()
        {
            if(getLS('has_bread')) {
                obj.text = 'Du hast alles bekommen, was du am Markt gesucht hast. Vielleicht solltest du zu deinen Freunden zurück kehren.'
            } else if(getLS('wants_bread')) {
                setLS('currentPage','markt_bread');
                window.obj = path['markt_bread'];
            }
        }
    },
    'markt_bread': {
        'text': 'Du siehst dich auf dem Markt um.<br>Es gibt dort einige Stände, unter anderem auch zwei Lebensmittelhändler.<br><br>Sprichst du mit dem Händler <button class="intext-btn link-a-btn">"Zum saftigen Brot"</button> oder willst du doch lieber den etwas <button class="intext-btn link-b-btn">mürrisch dreinblickenden Händler</button> am Ende des Marktes ansprechen?',
        'distraction': true,
        'link_a': 'saftig',
        'link_b': 'fight',
    },
    'saftig': {
        'text': '"Ah, willkommen beim Saftigen Brot. Wir kaufen das saftige Brot und nur hier, sonst nirgends, bekommt man das saftige Brot." spricht dich der gutherzige Händler direkt an. "Ein Laib vom saftigen Brot? Das macht 3 Dukaten", dies kommt dir doch etwas sehr teuer vor, deswegen versuchst du den Preis etwas zu drücken.<br>Mach eine Probe auf Handeln',
        'success': 'saftig_success',
        'checkSkill': 'Handel',
        'fail': 'saftig_fail'
    },
    'saftig_success': {
        'text': '"Aber sicher doch! Wenn du Werbung für das Saftige Brot machst, dann gebe ich dir auch gerne eine Laib zum Probierpreis. Aber immer dran denken, nur das saftige Brot schmeckt saftig." Mit diesen Worten reicht er dir ein Laib. Du solltest es schnell zu Belegol bringen, solange es noch warm ist. Du verlässt den Markt und begibst dich wieder zur Taverne.',
        'success': 'vor_kneipe',
        code: function()
        {
            setLS('has_bread',2);
        }
    },
    'saftig_fail': {
        'text': '"Nein, so kommen wir nicht ins Geschäft. Für den Preis werde ich mein saftiges Brot nicht verkaufen." ist das einzige, was der Händler dir noch sagt, bevor er sich zum nächsten Kunden umdreht. Scheinbar musst du dein Glück doch bei dem anderen Händler versuchen.',
        'success': 'fight',
    },
    'fight': {
        'text': 'Dieser Händler scheint wohl nicht am Verkauf von Ware interessiert zu sein. "Was willst du hier? Verschwinde!" - "Travia zum Gruße, mein Herr. Ich suche ein Laib Brot, verkaufen Sie welches?" - "Nein, diese Ware hier ist reserviert". In diesem Moment kommt auch einer seiner Schläger an und will dir einen Knüppel über den Kopf ziehen.<br>Du versuchst du parieren.',
        'success': 'fight_success',
        'check': 'PA',
        'fail': 'fight_fail'
    },
    'fight_success': {
        'text': 'Du reagierst blitzschnell und kannst den Schlag abwehren.<br>Als nächstes holst du zum Gegenschlag aus.',
        'success': 'fight_attack_success',
        'check': 'AT',
        'fail': 'fight_attack_fail'
    },
    'fight_attack_fail': {
        'text': 'Dein Angriff geht daneben.<br>Der Bodyguard versucht dich erneut zu treffen.',
        'success': 'fight_success',
        'check': 'PA',
        'fail': 'fight_fail'
    },
    'fight_fail': {
        'text': 'Der Knüppel erwischt dich. Dir wird schwarz vor Augen.<br><br>Dein Abenteuer endet hier. Möchtest du es nochmal versuchen?',
    },
    'fight_attack_success': {
        'text': 'Dein Schlag ist besser als alles, was dein Gegenüber bisher geleistet hat und haut ihn direkt um. Sowohl der Bodyguard als auch der Ladenbesitzer fliehen. Dies ist nun deine Möglichkeit dir eins der Laibe zu sichern. Leider ist das Brot von eher schlechter Qualität. Aber es sollte genügen, um einen Hunger zu stillen. Du begibst dich zurück zur Kneipe.',
        'success': 'vor_kneipe',
        code: function()
        {
            setLS('has_bread',1);
        }
    },
    'quest_solved': {
        'text': 'Deine Truppe ist wieder fit. Ohne dich hätten sie dies nie geschafft. Ich packt eure Sachen zusammen und macht euch auf den Weg zur nächsten Stadt.<br><br>',
        'success': 'grats',
    },
    "grats": {
        "text": 'Hier endet dein Abenteuer.<br><br>Wir hoffen es hat dir Spaß gemacht.<br><br>Alles Gute zum Geburtstag wünschen Dir<br>Adrian, Löwe, Marco, Siedler & Woscht<br><br>Natürlich kannst du gerne dieses Abenteuer nochmal spielen, falls du auch die anderen Wege erkunden möchtest.',
    },
    "fail": {
        'text': 'Steine stürzen. Du bist tot.<br><br>Diese Seite hättest du nicht sehen sollen.<br><br>Woscht gibt dir aber gerne ein Apfelwein aus, da du so fleißig nach Bugs gesucht hast.',
    }

};