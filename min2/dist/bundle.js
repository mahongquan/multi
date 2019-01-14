(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var languages = {"bn":{"name":"বাংলা","identifier":"bn","translations":{"openInNewTab":"নতুন ট্যাবে খুলুন","openInNewPrivateTab":"নতুন ব্যক্তিগত ট্যাবে খুলুন","viewImage":"ভিউ ইমেজ","openImageInNewTab":"চিত্রটি নতুন ট্যাবে খুলুন","openImageInNewPrivateTab":"নতুন ব্যক্তিগত ট্যাবে চিত্র খুলুন","saveImageAs":"ইমেজ সেভ করুন এভাবে","searchWith":"%s এর সাথে অনুসন্ধান করুন","copyLink":"লিংক কপি করুন","copy":"কপি","paste":"প্রতিলেপন","goBack":"ফিরে যাও","goForward":"সামনে আগান","inspectElement":"এলিমেন্ট পরিদর্শন করুন","DDGAnswerSubtitle":"উত্তর","suggestedSite":"প্রস্তাবিত সাইট","resultsFromDDG":"ডকডকলহ থেকে ফলাফল","taskN":"টাস্ক%n","hostsFileEntry":"হোস্ট ফাইল এন্ট্রি","viewSettings":"সেটিংস দেখুন","viewReadingList":"পঠন তালিকা দেখুন","takeScreenshot":"একটি স্ক্রিনশট নিন","clearHistory":"সমস্ত ইতিহাস সাফ করুন","switchToTask":"টাস্কে স্যুইচ করুন","createTask":"একটি টাস্ক তৈরি করুন","moveToTask":"একটি টাস্ক এই ট্যাব সরান","searchBookmarks":"বুকমার্কগুলি অনুসন্ধান করুন","searchHistory":"অনুসন্ধানের ইতিহাস","openMenu":"খুলুন মেনু","enterReaderView":"রিডার ভিউ লিখুন","exitReaderView":"রিডার ভিউ প্রস্থান করুন","emptyReadingListTitle":"আপনার পড়া তালিকা খালি","emptyReadingListSubtitle":"রিডার ভিউতে আপনার খোলা নিবন্ধগুলি এখানে তালিকাভুক্ত করা হয়েছে এবং 30 দিনের জন্য অফলাইনে সংরক্ষণ করা হয়েছে।","newTabLabel":"নতুন ট্যাব","connectionNotSecure":"এই ওয়েবসাইটে আপনার সংযোগ নিরাপদ নয়।","searchbarPlaceholder":"অনুসন্ধান করুন বা ঠিকানা লিখুন","privateTab":"ব্যক্তিগত ট্যাব","newTabAction":"নতুন ট্যাব","viewTasks":"কাজগুলি দেখুন","newTask":"ত্যে","defaultTaskName":"টাস্ক%n","searchInPage":"পৃষ্ঠা অনুসন্ধান করুন","findMatchesSingular":"%i এর %t টি মিল","findMatchesPlural":"%i এর %t মিলগুলি","isFocusMode":"আপনি ফোকাস মোডে আছেন","closeDialog":"ঠিক আছে","focusModeExplanation1":"ফোকাস মোডে, বর্তমান ট্যাব ছাড়া সব ট্যাব লুকানো আছে এবং আপনি নতুন ট্যাব তৈরি করতে পারবেন না","focusModeExplanation2":"আপনি ভিউ মেনুতে \"ফোকাস মোড\" অনির্ধারণ করে ফোকাস মোডটি ত্যাগ করতে পারেন।","timeRangeJustNow":"এক্ষুনি","timeRangeMinutes":"কিছু মিনিট আগে","timeRangeHour":"অতীত ঘন্টার মধ্যে","timeRangeDay":"গত দিনে","timeRangeWeek":"গত সপ্তাহে","timeRangeMonth":"গত মাসে","timeRangeYear":"গত বছর","timeRangeLongerAgo":"দীর্ঘ আগে","crashErrorTitle":"কিছু ভুল হয়েছে.","crashErrorSubtitle":"এই পৃষ্ঠাটি প্রদর্শন করার সময় একটি সমস্যা ঘটেছে।","errorPagePrimaryAction":"আবার চেষ্টা কর","serverNotFoundTitle":"সার্ভার পাচ্ছে না","serverNotFoundSubtitle":"Min এই ওয়েবসাইটটি খুঁজে পাওয়া যায়নি।","archiveSearchAction":"Archive.org এ অনুসন্ধান করুন","sslErrorTitle":"এই ওয়েবসাইটটি উপলব্ধ নয়","sslErrorMessage":"Min এই ওয়েবসাইট থেকে নিরাপদে সংযোগ করতে পারে নি।","dnsErrorTitle":"ওয়েবসাইট খুঁজে পাওয়া যায় নি","dnsErrorMessage":"একটি DNS ত্রুটি ঘটেছে","offlineErrorTitle":"আপনি অফলাইনে","offlineErrorMessage":"ইন্টারনেট থেকে পুনরায় সংযোগ করুন এবং আবার চেষ্টা করুন।","genericConnectionFail":"Min ওয়েবসাইট সংযোগ করতে পারে না।","sslTimeErrorMessage":"Min এই ওয়েবসাইট থেকে নিরাপদে সংযোগ করতে পারে নি। দয়া করে নিশ্চিত করুন যে আপনার কম্পিউটারের ঘড়ি সঠিকভাবে সেট করা আছে।","addressInvalidTitle":"এই ঠিকানাটি অবৈধ।","genericError":"একটি ত্রুটি ঘটেছে","phishingErrorTitle":"এই সাইটটি আপনাকে ক্ষতি করতে পারে।","phishingErrorMessage":"এই ওয়েবসাইট আপনার ব্যক্তিগত তথ্য, যেমন পাসওয়ার্ড বা ব্যাংকিং তথ্য চুরি করার চেষ্টা করা হতে পারে।","phishingErrorVisitAnyway":"যাইহোক সাইট পরিদর্শন করুন","phishingErrorLeave":"এই সাইটটি ছেড়ে দিন","multipleInstancesErrorMessage":"একটি ত্রুটি ঘটেছে. অন্য কোনও খোলা দৃষ্টান্ত বন্ধ করুন এবং Min পুনরায় আরম্ভ করুন।","sessionRestoreErrorTitle":"একটি ত্রুটি ঘটেছে","sessionRestoreErrorExplanation":"আপনার সংরক্ষিত ট্যাবগুলি সঠিকভাবে পুনরুদ্ধার করা যাবে না।","sessionRestoreErrorBackupInfo":"আমরা এই অবস্থানে আপনার ডেটা ব্যাকআপ সংরক্ষণ করেছি:%l","sessionRestoreErrorLinkInfo":{"unsafeHTML":"যদি এই ত্রুটিটি ঘটতে থাকে তবে দয়া করে একটি নতুন সমস্যা <a href=\"https://github.com/minbrowser/min\" target=\"_blank\"> এখানে </a> খুলুন।"},"settingsPreferencesHeading":"পছন্দসমূহ","settingsRestartRequired":"আপনি এই পরিবর্তনগুলি প্রয়োগ করতে পুনরায় শুরু করতে হবে।","settingsPrivacyHeading":"সামগ্রী ব্লকিং","settingsContentBlockingToggle":"ব্লক trackers এবং বিজ্ঞাপন ব্লক","settingsBlockScriptsToggle":"স্ক্রিপ্ট ব্লক করুন","settingsBlockImagesToggle":"ইমেজ ব্লক করুন","settingsEasyListCredit":{"unsafeHTML":"সহজলভ্য এবং সহজপ্রীতি উপর ভিত্তি করে, উপাদান গোপন নিয়ম ছাড়া। <a target=\"_blank\" href=\"https://easylist.to/\"> EasyList লেখকগণ দ্বারা তৈরি </a> - <a target=\"_blank\" href=\"https://easylist.to/\"> লাইসেন্স দেখুন </a>"},"settingsAppearanceHeading":"চেহারা","settingsDarkModeToggle":"অন্ধকার মোড সক্রিয় করুন","settingsHistoryButtonToggle":"ফিরে বোতাম সক্ষম করুন","settingsAdditionalFeaturesHeading":"অতিরিক্ত বৈশিষ্ট্য","settingsSwipeNavigationToggle":"পৃষ্ঠার মধ্যে পিছনে এবং পিছনে নেভিগেট করার জন্য সোয়াইপ সক্ষম করুন","settingsUserscriptsToggle":"ব্যবহারকারী স্ক্রিপ্ট সক্রিয় করুন","settingsUserscriptsExplanation":{"unsafeHTML":"ব্যবহারকারীর স্ক্রিপ্ট আপনাকে ওয়েবসাইটের আচরণ পরিবর্তন করার অনুমতি দেয় - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\"> আরও শিখুন </a>"},"settingsSearchEngineHeading":"খোঁজ যন্ত্র","settingsDefaultSearchEngine":"একটি ডিফল্ট অনুসন্ধান ইঞ্জিন চয়ন করুন:","settingsDDGExplanation":"Searchbar এ তাত্ক্ষণিক উত্তর দেখতে ডিফল্ট অনুসন্ধান ইঞ্জিন হিসাবে DuckDuckGo সেট করুন।","customSearchEngineDescription":"অনুসন্ধানটি%s এর সাথে প্রতিস্থাপন করুন","settingsKeyboardShortcutsHeading":"কীবোর্ড শর্টকাটগুলি","settingsKeyboardShortcutsHelp":"একাধিক শর্টকাট পৃথক করার জন্য কমা ব্যবহার করুন।","appMenuFile":"ফাইল","appMenuNewTab":"নতুন ট্যাব","appMenuDuplicateTab":null,"appMenuNewPrivateTab":"নতুন ব্যক্তিগত ট্যাব","appMenuNewTask":"ত্যে","appMenuSavePageAs":"যেমন পৃষ্ঠা সংরক্ষণ","appMenuPrint":"ছাপা","appMenuEdit":"সম্পাদন করা","appMenuUndo":"বাতিল করা","appMenuRedo":"পুনরায় করা","appMenuCut":"কাটা","appMenuCopy":"কপি","appMenuPaste":"প্রতিলেপন","appMenuSelectAll":"সব নির্বাচন করুন","appMenuFind":"আবিষ্কার","appMenuView":"দৃশ্য","appMenuZoomIn":"প্রসারিত করো","appMenuZoomOut":"ছোট করা","appMenuActualSize":"সঠিক আকার","appMenuFullScreen":"পূর্ণ পর্দা","appMenuFocusMode":"ফোকাস মোড","appMenuReadingList":"পড়ার তালিকা","appMenuBookmarks":"বুকমার্ক","appMenuHistory":"ইতিহাস","appMenuDeveloper":"বিকাশকারী","appMenuReloadBrowser":"ব্রাউজার পুনরায় লোড করুন","appMenuInspectBrowser":"ব্রাউজার পরিদর্শন করুন","appMenuInspectPage":"পৃষ্ঠা পরিদর্শন করুন","appMenuWindow":"জানলা","appMenuMinimize":"কমান","appMenuClose":"ঘনিষ্ঠ","appMenuHelp":"সাহায্য করুন","appMenuKeyboardShortcuts":"কীবোর্ড শর্টকাটগুলি","appMenuReportBug":"একটি বাগ রিপোর্ট করুন","appMenuTakeTour":"ঘুরে আসা","appMenuViewGithub":"GitHub এ দেখুন","appMenuAbout":"প্রায়%n","appMenuPreferences":"পছন্দসমূহ","appMenuServices":"সার্ভিস","appMenuHide":"%n লুকান","appMenuHideOthers":"অন্যদের লুকান","appMenuShowAll":"সব দেখাও","appMenuQuit":"%n ছাড়ুন","appMenuBringToFront":"সব থেকে সামনে আনুন","PDFPageCounter":{"unsafeHTML":"<span id = 'total'> </ span> এর <input type = 'text' /> পৃষ্ঠা"},"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}},"cs":{"name":"Česky","identifier":"cs","translations":{"openInNewTab":"Otevřít v nové kartě","openInNewPrivateTab":"Otevřít v nové soukromé kartě","viewImage":"Zobrazit obrázek","openImageInNewTab":"Otevřít obrázek v nové kartě","openImageInNewPrivateTab":"Otevřít obrázek v nové soukromé kartě","saveImageAs":"Uložit obrázek jako","searchWith":"Vyhledávat pomocí %s","copyLink":"Kopírovat odkaz","copy":"Kopírovat","paste":"Vložit","goBack":"Jít zpět","goForward":"Jít dopředu","inspectElement":"Prozkoumat prvek","DDGAnswerSubtitle":"Odpověď","suggestedSite":"Doporučené stránky","resultsFromDDG":"Výsledky z DuckDuckGo","taskN":"Dimenze %n","hostsFileEntry":"Lokální soubor","viewSettings":"Zobrazit nastavení","viewReadingList":"Zobrazit seznam čtení","takeScreenshot":"Pořídit snímek obrazovky","clearHistory":"Vymazat celou historii","switchToTask":"Skočit do dimenze","createTask":"Vytvořit dimenzi","moveToTask":"Přesunout tuto kartu do dimenze","searchBookmarks":"Vyhledávat záložky","searchHistory":null,"openMenu":null,"enterReaderView":"Otevřít režim čtení","exitReaderView":"Zavřít režim čtení","emptyReadingListTitle":"Váš seznam čtení je prázdný.","emptyReadingListSubtitle":"Stránky, otevřené v režimu čtení, zde budou uloženy pro offline zobrazení po dobu 30 dnů.","newTabLabel":"Nová karta","connectionNotSecure":"Vaše připojení k této stránce není zabezpečené.","searchbarPlaceholder":"Vyhledávejte nebo zadejte adresu","privateTab":"Soukromá karta","newTabAction":"Nová karta","viewTasks":"Zobrazit dimenze","newTask":"Nová dimenze","defaultTaskName":"Dimenze %n","searchInPage":"Vyhledávat na stránce","findMatchesSingular":"%i z %t výsledku","findMatchesPlural":"%i z %t výsledků","isFocusMode":"Jste v režimu zaměření.","closeDialog":"OK","focusModeExplanation1":"V režimu zaměření jsou všechny karty kromě aktuální skryté a nelze vytvářet nové karty.","focusModeExplanation2":"Můžete opustit režim zaměření odškrtnutím \"Režim zaměření\" v nabídce zobrazení.","timeRangeJustNow":null,"timeRangeMinutes":null,"timeRangeHour":null,"timeRangeDay":null,"timeRangeWeek":null,"timeRangeMonth":null,"timeRangeYear":null,"timeRangeLongerAgo":null,"crashErrorTitle":"Něco se pokazilo.","crashErrorSubtitle":"Během zobrazování této stránky došlo k potížím.","errorPagePrimaryAction":"Zkusit znovu","serverNotFoundTitle":"Server nenalezen","serverNotFoundSubtitle":"Prohlížeč Min nemůže najít tuto webovou stránku.","archiveSearchAction":"Vyhledávat na archive.org","sslErrorTitle":"Tato webová stránka není dostupná","sslErrorMessage":"Prohlížeč Min nemůže s touto stránkou navázat zabezpečené spojení.","dnsErrorTitle":"Webová stránka nenalezena","dnsErrorMessage":"Došlo k chybě DNS.","offlineErrorTitle":"Jste offline","offlineErrorMessage":"Připojte se k internetu a zkuste to znovu.","genericConnectionFail":"Prohlížeč Min se nemůže připojit k této webové adrese.","sslTimeErrorMessage":"Prohlížeč Min nemůže s touto stránkou navázat zabezpečené spojení. Prosím zkontrolujte, zda máte v počítači správně nastavený čas.","addressInvalidTitle":"Tato adresa je neplatná.","genericError":"Vyskytla se chyba","phishingErrorTitle":"Tyto stránky by vám mohly ublížit.","phishingErrorMessage":"Tyto webové stránky se mohou pokusit ukrást vaše osobní údaje, například hesla nebo bankovní informace.","phishingErrorVisitAnyway":"Přesto stránky navštívit","phishingErrorLeave":"Opustit tyto stránky","multipleInstancesErrorMessage":"Vyskytla se chyba. Prosím zavřete všechny ostatní spuštěné instance a restartujte Min.","sessionRestoreErrorTitle":"Vyskytla se chyba","sessionRestoreErrorExplanation":"Vaše uložené karty nelze správně obnovit.","sessionRestoreErrorBackupInfo":"Zálohu vašich dat jsme uložili na tomto místě: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Pokud se tato chyba opakuje, založte prosím nový problém <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">zde</a>."},"settingsPreferencesHeading":"Nastavení","settingsRestartRequired":"Pro použití změn musíte restartovat aplikaci.","settingsPrivacyHeading":"Blokování obsahu","settingsContentBlockingToggle":"Blokovat trackery a reklamy","settingsBlockScriptsToggle":"Blokovat skripty","settingsBlockImagesToggle":"Blokovat obrázky","settingsEasyListCredit":{"unsafeHTML":"Na základě EasyList a EasyPrivacy bez pravidel skrývání prvků. Vytvořili <a target=\"_blank\" href=\"https://easylist.to/\">The EasyList authors</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">s licencí</a>."},"settingsAppearanceHeading":"Vzhled","settingsDarkModeToggle":"Použít tmavý režim","settingsHistoryButtonToggle":"Zobrazit tlačítko zpět","settingsAdditionalFeaturesHeading":null,"settingsSwipeNavigationToggle":"Povolit touchpad swipe gesto pro navigaci zpět a vpřed mezi stránkami.","settingsUserscriptsToggle":null,"settingsUserscriptsExplanation":null,"settingsSearchEngineHeading":"Vyhledávač","settingsDefaultSearchEngine":"Zvolte si výchozí vyhledávač:","settingsDDGExplanation":"Nastavte DuckDuckGo jako výchozí vyhledávač pro zobrazování okamžitých odpovědí ve vyhledávacím panelu.","customSearchEngineDescription":null,"settingsKeyboardShortcutsHeading":"Klávesové zkratky","settingsKeyboardShortcutsHelp":"Používejte čárky pro oddělení klávesových zkratek.","appMenuFile":"Soubor","appMenuNewTab":"Nová karta","appMenuDuplicateTab":null,"appMenuNewPrivateTab":"Nová soukromá karta","appMenuNewTask":"Nová dimenze","appMenuSavePageAs":"Uložit stránku jako","appMenuPrint":"Tisk","appMenuEdit":"Úpravy","appMenuUndo":"Krok zpět","appMenuRedo":"Krok vpřed","appMenuCut":"Vyjmout","appMenuCopy":"Kopírovat","appMenuPaste":"Vložit","appMenuSelectAll":"Označit vše","appMenuFind":"Najít","appMenuView":"Zobrazení","appMenuZoomIn":"Přiblížit","appMenuZoomOut":"Oddálit","appMenuActualSize":"Skutečná velikost","appMenuFullScreen":"Celá obrazovka","appMenuFocusMode":"Režim zaměření","appMenuReadingList":"Seznam čtení","appMenuBookmarks":null,"appMenuHistory":null,"appMenuDeveloper":"Vývojář","appMenuReloadBrowser":"Znovu načíst prohlížeč","appMenuInspectBrowser":"Prozkoumat prohlížeč","appMenuInspectPage":"Prozkoumat stránku","appMenuWindow":"Okno","appMenuMinimize":"Minimalizovat","appMenuClose":"Zavřít","appMenuHelp":"Nápověda","appMenuKeyboardShortcuts":"Klávesové zkratky","appMenuReportBug":"Nahlásit chybu","appMenuTakeTour":"Otevřít průvodce","appMenuViewGithub":"Zobrazit na GitHubu","appMenuAbout":"O aplikaci %n","appMenuPreferences":"Nastavení","appMenuServices":"Služby","appMenuHide":"Skrýt %n","appMenuHideOthers":"Skrýt ostatní","appMenuShowAll":"Zobrazit vše","appMenuQuit":"Ukončit %n","appMenuBringToFront":"Přenést vše do popředí","PDFPageCounter":{"unsafeHTML":"Strana <input type='text'/> z <span id='total'></span>"},"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}},"de":{"name":"Deutsch","identifier":"de","translations":{"openInNewTab":"Link in neuem Tab öffnen","openInNewPrivateTab":"Link in neuem Inkognito-Tab öffnen","viewImage":"Bild anzeigen","openImageInNewTab":"Bild in neuem Tab öffnen","openImageInNewPrivateTab":"Bild in neuem Inkognito-Tab öffnen","saveImageAs":"Bild speichern als","searchWith":"Suche mit %s","copyLink":"Link kopieren","copy":"Kopieren","paste":"Einfügen","goBack":"Gehe zurück","goForward":"Gehe vorwärts","inspectElement":"Element untersuchen","DDGAnswerSubtitle":"Antwort","suggestedSite":"Vorgeschlagene Seite","resultsFromDDG":"Ergebnisse von DuckDuckGo","taskN":"Aufgabe %n","hostsFileEntry":"Eintrag aus der Datei Hosts","viewSettings":"Einstellungen anzeigen","viewReadingList":null,"takeScreenshot":"Screenshot erstellen","clearHistory":"Verlauf komplett löschen","switchToTask":"zu Aufgabe wechseln","createTask":"Aufgabe erstellen","moveToTask":"Verschiebe diesen Tab zu Aufgabe","searchBookmarks":"Bookmarks durchsuchen","searchHistory":null,"openMenu":null,"enterReaderView":"Leseansicht öffnen","exitReaderView":"Leseansicht verlassen","emptyReadingListTitle":"Die Leseansicht ist leer","emptyReadingListSubtitle":"Artikel, die in der Leseansicht geöffnet sind, werden hier aufgelistet und für 30 Tage gespeichert.","newTabLabel":"Neuer Tab","connectionNotSecure":"Die Verbindung zu dieser Webseite ist nicht sicher.","searchbarPlaceholder":"Suche oder Adresse eingeben","privateTab":"Inkognito-Tab","newTabAction":"Neuer Tab","viewTasks":"Aufgaben anzeigen","newTask":"Neue Aufgabe","defaultTaskName":"Aufgabe %n","searchInPage":"Suche auf der Seite","findMatchesSingular":"%i von %t Übereinstimmung","findMatchesPlural":"%i von %t Übereinstimmungen","isFocusMode":"Fokus-Mode eingeschaltet.","closeDialog":"OK","focusModeExplanation1":"Im Fokus-Mode sind alle außer dem aktuellen Tab versteckt und es können keine neuen Tabs geöffnet werden.","focusModeExplanation2":"Der Fokus-Mode kann im Menü 'Anzeige' durch Klick auf \"fokus-mode\" verlassen werden.","timeRangeJustNow":null,"timeRangeMinutes":null,"timeRangeHour":null,"timeRangeDay":null,"timeRangeWeek":null,"timeRangeMonth":null,"timeRangeYear":null,"timeRangeLongerAgo":null,"crashErrorTitle":"Etwas ging schief.","crashErrorSubtitle":"Bei der Anzeige der Seite trat ein Problem auf.","errorPagePrimaryAction":"Erneut versuchen","serverNotFoundTitle":"Server nicht gefunden","serverNotFoundSubtitle":"Min konnte diese Webseite nicht finden.","archiveSearchAction":"Suche auf archive.org","sslErrorTitle":"Diese Webseite ist nicht verfügbar","sslErrorMessage":"Min konnte keine sichere Verbindung mit dieser Webseite aufbauen.","dnsErrorTitle":"Webseite nicht gefunden","dnsErrorMessage":"Es trat ein DNS-Fehler auf.","offlineErrorTitle":"Sie sind offline","offlineErrorMessage":"Wieder mit dem Internet verbinden und erneut versuchen.","genericConnectionFail":"Min konnte sich nicht mit dieser Webseite verbinden.","sslTimeErrorMessage":"Min konnte keine sichere Verbindung mit dieser Webseite aufbauen. Bitte stellen Sie sicher, dass Ihre Computeruhr korrekt eingestellt ist.","addressInvalidTitle":"Diese Adresse ist ungültig.","genericError":"Es trat ein Fehler auf","phishingErrorTitle":"Diese Seite könnte Schaden anrichten.","phishingErrorMessage":"Diese Webseite könnte versuchen, persönliche Informationen wie Passwörter und Bankdaten zu stehlen.","phishingErrorVisitAnyway":"Seite trotzdem besuchen","phishingErrorLeave":"Seite verlassen","multipleInstancesErrorMessage":null,"sessionRestoreErrorTitle":"Es trat ein Fehler auf","sessionRestoreErrorExplanation":"Die gespeicherten Tabs konnten nicht wiederhergestellt werden.","sessionRestoreErrorBackupInfo":"Wir haben ein Backup Ihrer Daten hier gespeichert: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Falls dieser Fehler wiederholt auftritt, bitte <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">hier</a> eine neue Fehlermeldung eröffnen."},"settingsPreferencesHeading":"Einstellungen","settingsRestartRequired":"Ein Neustart ist erforderlich um die Änderungen zu übernehmen.","settingsPrivacyHeading":"Inhalte blockieren","settingsContentBlockingToggle":"Tracker und Werbung blockieren","settingsBlockScriptsToggle":"Scripte blockieren","settingsBlockImagesToggle":"Bilder blockieren","settingsEasyListCredit":{"unsafeHTML":"Basiert auf EasyList und EasyPrivacy, ohne Regeln zum Verstecken von Elementen. Erstellt von <a target=\"_blank\" href=\"https://easylist.to/\">den Easylist-Autoren</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">Lizenz anzeigen</a>."},"settingsAppearanceHeading":"Aussehen","settingsDarkModeToggle":"Dark-Mode einschalten","settingsHistoryButtonToggle":null,"settingsAdditionalFeaturesHeading":null,"settingsSwipeNavigationToggle":"Wischgesten zur Navigation zwischen Webseiten einschalten.","settingsUserscriptsToggle":null,"settingsUserscriptsExplanation":null,"settingsSearchEngineHeading":"Suchmaschine","settingsDefaultSearchEngine":"Suchmaschine auswählen:","settingsDDGExplanation":"DuckDuckGo als Standard-Suchmaschine einstellen, um sofort Vorschläge in der Suchleiste zu erhalten.","customSearchEngineDescription":null,"settingsKeyboardShortcutsHeading":"Tastaturkürzel","settingsKeyboardShortcutsHelp":null,"appMenuFile":"Datei","appMenuNewTab":"Neuer Tab","appMenuDuplicateTab":null,"appMenuNewPrivateTab":"Neuer Inkognito-Tab","appMenuNewTask":"Neue Aufgabe","appMenuSavePageAs":"Seite sichern als","appMenuPrint":"Drucken","appMenuEdit":"Ändern","appMenuUndo":"Rückgängig","appMenuRedo":"Wiederherstellen","appMenuCut":"Ausschneiden","appMenuCopy":"Kopieren","appMenuPaste":"Einfügen","appMenuSelectAll":"Alles auswählen","appMenuFind":"Finden","appMenuView":"Ansicht","appMenuZoomIn":"Hinein zoomen","appMenuZoomOut":"Heraus zoomen","appMenuActualSize":"Tatsächliche Größe","appMenuFullScreen":"Ganzer Bildschirm","appMenuFocusMode":"Fokus-Mode","appMenuReadingList":"Leseansicht","appMenuBookmarks":null,"appMenuHistory":null,"appMenuDeveloper":"Entwickler","appMenuReloadBrowser":"Browser neu laden","appMenuInspectBrowser":"Browser überprüfen","appMenuInspectPage":"Seite überprüfen","appMenuWindow":"Fenster","appMenuMinimize":"Minimieren","appMenuClose":"Schließen","appMenuHelp":"Hilfe","appMenuKeyboardShortcuts":"Tastaturkürzel","appMenuReportBug":"Fehler melden","appMenuTakeTour":"Eine Tour starten","appMenuViewGithub":"Auf GitHub ansehen","appMenuAbout":"Über %n","appMenuPreferences":"Einstellungen","appMenuServices":"Dienste","appMenuHide":"Verstecke %n","appMenuHideOthers":"Andere verstecken","appMenuShowAll":"Zeige alle","appMenuQuit":"Beende %n","appMenuBringToFront":"Alle nach vorne bringen","PDFPageCounter":null,"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}},"en-US":{"name":"English (United States)","identifier":"en-US","translations":{"openInNewTab":"Open in New Tab","openInNewPrivateTab":"Open in New Private Tab","viewImage":"View Image","openImageInNewTab":"Open Image in New Tab","openImageInNewPrivateTab":"Open Image in New Private Tab","saveImageAs":"Save Image As","searchWith":"Search with %s","copyLink":"Copy Link","copy":"Copy","paste":"Paste","goBack":"Go Back","goForward":"Go Forward","inspectElement":"Inspect Element","DDGAnswerSubtitle":"Answer","suggestedSite":"Suggested site","resultsFromDDG":"Results from DuckDuckGo","taskN":"Task %n","hostsFileEntry":"Hosts file entry","viewSettings":"View Settings","viewReadingList":"View Reading List","takeScreenshot":"Take a Screenshot","clearHistory":"Clear All History","switchToTask":"Switch to Task","createTask":"Create a Task","moveToTask":"Move this tab to a task","searchBookmarks":"Search bookmarks","searchHistory":"Search history","openMenu":"Open menu","enterReaderView":"Enter reader view","exitReaderView":"Exit reader view","emptyReadingListTitle":"Your reading list is empty","emptyReadingListSubtitle":"Articles you open in reader view are listed here, and are saved offline for 30 days.","newTabLabel":"New Tab","connectionNotSecure":"Your connection to this website is not secure.","searchbarPlaceholder":"Search or enter address","privateTab":"Private tab","newTabAction":"New Tab","viewTasks":"View Tasks","newTask":"New Task","defaultTaskName":"Task %n","searchInPage":"Search in Page","findMatchesSingular":"%i of %t match","findMatchesPlural":"%i of %t matches","isFocusMode":"You're in Focus Mode.","closeDialog":"OK","focusModeExplanation1":"In focus mode, all tabs except the current one are hidden, and you can't create new tabs.","focusModeExplanation2":"You can leave focus mode by unchecking \"focus mode\" in the view menu.","timeRangeJustNow":"Just now","timeRangeMinutes":"A few minutes ago","timeRangeHour":"In the past hour","timeRangeDay":"In the past day","timeRangeWeek":"In the past week","timeRangeMonth":"In the past month","timeRangeYear":"In the past year","timeRangeLongerAgo":"Longer ago","crashErrorTitle":"Something went wrong.","crashErrorSubtitle":"A problem has occurred while displaying this page.","errorPagePrimaryAction":"Try again","serverNotFoundTitle":"Server not found","serverNotFoundSubtitle":"Min couldn't find this website.","archiveSearchAction":"Search on archive.org","sslErrorTitle":"This website is not available","sslErrorMessage":"Min couldn't connect securely to this website.","dnsErrorTitle":"Website not found","dnsErrorMessage":"A DNS error occurred.","offlineErrorTitle":"You are offline","offlineErrorMessage":"Reconnect to the internet and try again.","genericConnectionFail":"Min couldn't connect to the website.","sslTimeErrorMessage":"Min couldn't connect securely to this website. Please make sure your computer's clock is set correctly.","addressInvalidTitle":"This address is invalid.","genericError":"An error occurred","phishingErrorTitle":"This site could harm you.","phishingErrorMessage":"This website could be trying to steal your personal information, such as passwords or banking information.","phishingErrorVisitAnyway":"Visit site anyway","phishingErrorLeave":"Leave this site","multipleInstancesErrorMessage":"An error occurred. Please close any other open instances and restart Min.","sessionRestoreErrorTitle":"An error occurred","sessionRestoreErrorExplanation":"Your saved tabs couldn't be restored correctly.","sessionRestoreErrorBackupInfo":"We've saved a backup of your data at this location: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"If this error continues to occur, please open a new issue <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">here</a>."},"settingsPreferencesHeading":"Preferences","settingsRestartRequired":"You need to restart to apply these changes.","settingsPrivacyHeading":"Content Blocking","settingsContentBlockingToggle":"Block trackers and ads","settingsBlockScriptsToggle":"Block scripts","settingsBlockImagesToggle":"Block images","settingsEasyListCredit":{"unsafeHTML":"Based on EasyList and EasyPrivacy, without element hiding rules. Created by <a target=\"_blank\" href=\"https://easylist.to/\">The EasyList authors</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">view license</a>."},"settingsAppearanceHeading":"Appearance","settingsDarkModeToggle":"Enable dark mode","settingsHistoryButtonToggle":"Enable back button","settingsAdditionalFeaturesHeading":"Additional Features","settingsSwipeNavigationToggle":"Enable swipe for navigating back and forth between pages.","settingsUserscriptsToggle":"Enable user scripts","settingsUserscriptsExplanation":{"unsafeHTML":"User scripts allow you to modify the behavior of websites - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">learn more</a>."},"settingsSearchEngineHeading":"Search Engine","settingsDefaultSearchEngine":"Choose a default search engine:","settingsDDGExplanation":"Set DuckDuckGo as the default search engine to see instant answers in the searchbar.","customSearchEngineDescription":"Replace the search term with %s","settingsKeyboardShortcutsHeading":"Keyboard Shortcuts","settingsKeyboardShortcutsHelp":"Use commas to separate multiple shortcuts.","appMenuFile":"File","appMenuNewTab":"New Tab","appMenuDuplicateTab":"Duplicate Tab","appMenuNewPrivateTab":"New Private Tab","appMenuNewTask":"New Task","appMenuSavePageAs":"Save Page As","appMenuPrint":"Print","appMenuEdit":"Edit","appMenuUndo":"Undo","appMenuRedo":"Redo","appMenuCut":"Cut","appMenuCopy":"Copy","appMenuPaste":"Paste","appMenuSelectAll":"Select All","appMenuFind":"Find","appMenuView":"View","appMenuZoomIn":"Zoom In","appMenuZoomOut":"Zoom Out","appMenuActualSize":"Actual Size","appMenuFullScreen":"Full Screen","appMenuFocusMode":"Focus Mode","appMenuReadingList":"Reading List","appMenuBookmarks":"Bookmarks","appMenuHistory":"History","appMenuDeveloper":"Developer","appMenuReloadBrowser":"Reload Browser","appMenuInspectBrowser":"Inspect Browser","appMenuInspectPage":"Inspect Page","appMenuWindow":"Window","appMenuMinimize":"Minimize","appMenuClose":"Close","appMenuHelp":"Help","appMenuKeyboardShortcuts":"Keyboard Shortcuts","appMenuReportBug":"Report a Bug","appMenuTakeTour":"Take a Tour","appMenuViewGithub":"View on GitHub","appMenuAbout":"About %n","appMenuPreferences":"Preferences","appMenuServices":"Services","appMenuHide":"Hide %n","appMenuHideOthers":"Hide Others","appMenuShowAll":"Show All","appMenuQuit":"Quit %n","appMenuBringToFront":"Bring All to Front","PDFPageCounter":{"unsafeHTML":"page <input type='text'/> of <span id='total'></span>"},"downloadCancel":"Cancel","downloadStateCompleted":"Completed","downloadStateFailed":"Failed"}},"es":{"name":"Spanish","identifier":"es","translations":{"openInNewTab":"Abrir en una nueva pestaña","openInNewPrivateTab":"Abrir en una nueva pestaña privada","viewImage":"Ver imagen","openImageInNewTab":"Abrir imagen en una nueva pestaña","openImageInNewPrivateTab":"Abrir imagen en una nueva pestaña privada","saveImageAs":"Guardar imagen como","searchWith":"Buscar con %s","copyLink":"Copiar enlace","copy":"Copiar","paste":"Pegar","goBack":"Ir atrás","goForward":"Ir adelante","inspectElement":"Inspeccionar elemento","DDGAnswerSubtitle":"Respuesta","suggestedSite":"Sitio sugerido","resultsFromDDG":"Resultados de DuckDuckGo","taskN":"Tarea %n","hostsFileEntry":"Entrada del fichero hosts","viewSettings":"Ver ajustes","viewReadingList":null,"takeScreenshot":"Hacer una captura de pantalla","clearHistory":"Limpiar todo el historial","switchToTask":"Cambiar a la tarea","createTask":"Crear una tarea","moveToTask":"Mover esta pestaña a una tarea","searchBookmarks":"Buscar marcadores","searchHistory":null,"openMenu":null,"enterReaderView":"Entrar en la vista de lectura","exitReaderView":"Salir de la vista de lectura","emptyReadingListTitle":"Tu lista de lectura está vacía","emptyReadingListSubtitle":"Los artículos que se abren en la vista de lectura se listan aquí y se guardan sin conexión durante 30 días.","newTabLabel":"Nueva pestaña","connectionNotSecure":"Tu conexión con este sitio web no es segura.","searchbarPlaceholder":"Buscar o introducir dirección","privateTab":"Pestaña privada","newTabAction":"Nueva pestaña","viewTasks":"Ver tareas","newTask":"Nueva tarea","defaultTaskName":"Tarea %n","searchInPage":"Buscar en la página","findMatchesSingular":"%i de %t coincidencia","findMatchesPlural":"%i de %t coinicidencias","isFocusMode":"Estás en el modo de enfoque.","closeDialog":"Aceptar","focusModeExplanation1":"En el modo de enfoque, todas las pestañas excepto la actual están ocultas, y no puedes crear nuevas pestañas.","focusModeExplanation2":"Pues salir del modo de enfoque desmarcando \"Modo de enfoque\" en el menú Ver.","timeRangeJustNow":null,"timeRangeMinutes":null,"timeRangeHour":null,"timeRangeDay":null,"timeRangeWeek":null,"timeRangeMonth":null,"timeRangeYear":null,"timeRangeLongerAgo":null,"crashErrorTitle":"Algo salió mal.","crashErrorSubtitle":"Se ha producido un problema al mostrar este sitio web.","errorPagePrimaryAction":"Inténtalo de nuevo","serverNotFoundTitle":"Servidor no encontrado","serverNotFoundSubtitle":"Min no puede encontrar esta sitio web.","archiveSearchAction":"Buscar en archive.org","sslErrorTitle":"Esta página web no está disponible","sslErrorMessage":"Min no pudo conectarse de forma segura a este sitio web.","dnsErrorTitle":"Sitio web no encontrado","dnsErrorMessage":"Se ha producido un error de DNS.","offlineErrorTitle":"Estás desconectado","offlineErrorMessage":"Vuelva a conectarse a Internet e inténtelo de nuevo.","genericConnectionFail":"Min no pudo conectarse al sitio web.","sslTimeErrorMessage":"Min no pudo conectarse de forma segura a este sitio web. Por favor asegúrese de que el reloj de su ordenador está configurado correctamente.","addressInvalidTitle":"Esta dirección no es válida.","genericError":"Ha ocurrido un error","phishingErrorTitle":"Este sitio podría dañarte.","phishingErrorMessage":"Este sitio web podría estar tratando de robar su información personal, como contraseñas o información bancaria.","phishingErrorVisitAnyway":"Visitar este sitio de todos modos","phishingErrorLeave":"Salir de este sitio","multipleInstancesErrorMessage":null,"sessionRestoreErrorTitle":"Ha ocurrido un error","sessionRestoreErrorExplanation":"Tus pestañas guardadas no se pudieron restaurar correctamente.","sessionRestoreErrorBackupInfo":"Hemos guardado una copia de seguridad de sus datos en esta ubicación: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Si este error continúa, abra un nuevo reporte <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">aquí</a>."},"settingsPreferencesHeading":"Preferencias","settingsRestartRequired":"Debe reiniciar para aplicar estos cambios.","settingsPrivacyHeading":"Bloqueo de contenido","settingsContentBlockingToggle":"Bloquear rastreadores y anuncios","settingsBlockScriptsToggle":"Bloquear scripts","settingsBlockImagesToggle":"Bloquear imágenes","settingsEasyListCredit":{"unsafeHTML":"Basado en EasyList y EasyPrivacy, sin reglas de ocultación de elementos. Creado por <a target=\"_blank\" href=\"https://easylist.to/\">The EasyList authors</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">ver licencia</a>."},"settingsAppearanceHeading":"Apariencia","settingsDarkModeToggle":"Habilitar modo oscuro","settingsHistoryButtonToggle":"Habilitar botón Atrás","settingsAdditionalFeaturesHeading":null,"settingsSwipeNavigationToggle":"Habilitar gestos para navegar hacia atrás y adelante entre las páginas.","settingsUserscriptsToggle":null,"settingsUserscriptsExplanation":null,"settingsSearchEngineHeading":"Motor de búsqueda","settingsDefaultSearchEngine":"Elija un motor de búsqueda predeterminado:","settingsDDGExplanation":"Establezca DuckDuckGo como motor de búsqueda predeterminado para ver respuestas instantáneas en la barra de búsqueda.","customSearchEngineDescription":null,"settingsKeyboardShortcutsHeading":"Atajos de teclado","settingsKeyboardShortcutsHelp":null,"appMenuFile":"Archivo","appMenuNewTab":"Nueva pestaña","appMenuDuplicateTab":null,"appMenuNewPrivateTab":"Nueva pestaña privada","appMenuNewTask":"Nueva tarea","appMenuSavePageAs":"Guardar página como","appMenuPrint":"Imprimir","appMenuEdit":"Editar","appMenuUndo":"Deshacer","appMenuRedo":"Rehacer","appMenuCut":"Cortar","appMenuCopy":"Copiar","appMenuPaste":"Pegar","appMenuSelectAll":"Seleccionar todo","appMenuFind":"Buscar","appMenuView":"Ver","appMenuZoomIn":"Ampliar","appMenuZoomOut":"Reducir","appMenuActualSize":"Tamaño real","appMenuFullScreen":"Pantalla completa","appMenuFocusMode":"Modo de enfoque","appMenuReadingList":"Lista de lectura","appMenuBookmarks":null,"appMenuHistory":null,"appMenuDeveloper":"Desarrollador","appMenuReloadBrowser":"Recargar navegador","appMenuInspectBrowser":"Inspeccionar navegador","appMenuInspectPage":"Inspeccionar página","appMenuWindow":"Ventana","appMenuMinimize":"Minimizar","appMenuClose":"Cerrar","appMenuHelp":"Ayuda","appMenuKeyboardShortcuts":"Atajos de teclado","appMenuReportBug":"Reportar un error","appMenuTakeTour":"Hacer una visita guiada","appMenuViewGithub":"Ver en GitHub","appMenuAbout":"Sobre %n","appMenuPreferences":"Preferencias","appMenuServices":"Servicios","appMenuHide":"Ocultar %n","appMenuHideOthers":"Ocultar otros","appMenuShowAll":"Mostrar todos","appMenuQuit":"Salir de %n","appMenuBringToFront":"Traer todo al frente","PDFPageCounter":null,"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}},"fa":{"name":"Persian","identifier":"fa","translations":{"openInNewTab":"باز کردن در برگه جدید","openInNewPrivateTab":"باز کردن در برگه خصوصی جدید","viewImage":"نمایش تصویر","openImageInNewTab":"باز کردن تصویر در برگه جدید","openImageInNewPrivateTab":"باز کردن تصویر در برگه خصوصی جدید","saveImageAs":"ذخیره تصویر","searchWith":"جستجو با %s","copyLink":"کپی لینک","copy":"کپی","paste":"چسباندن","goBack":"عقب","goForward":"جلو","inspectElement":"وارسی","DDGAnswerSubtitle":"پاسخ","suggestedSite":"سایت پیشنهادی","resultsFromDDG":"نتایج از DuckDuckGo","taskN":"وظیفه %n","hostsFileEntry":"نتایج از فایل Hosts","viewSettings":"نمایش تنظیمات","viewReadingList":"نمایش لیست خواندن","takeScreenshot":"عکس گرفتن از صفحه","clearHistory":"حذف تاریخچه مرورگر","switchToTask":"تغییر به وظیفه","createTask":"ایجاد وظیفه جدید","moveToTask":"انتقال این برگه به یک وظیفه","searchBookmarks":"جستجوی نشانک ها","searchHistory":"جستجوی تاریخچه","openMenu":"باز کردن منو","enterReaderView":"ورود به حالت خواندن","exitReaderView":"خروج از حالت خواندن","emptyReadingListTitle":"لیست خواندن شما خالی است","emptyReadingListSubtitle":"مقالاتی که شما در حالت خواندن باز می کنید در اینجا لیست می شوند و به مدت سی روز به آنها دسترسی آفلاین دارید.","newTabLabel":"برگه جدید","connectionNotSecure":"ارتباط شما با این سایت امن نیست.","searchbarPlaceholder":"جستجو کنید یا آدرس سایت را وارد کنید","privateTab":"برگه خصوصی","newTabAction":"برگه جدید","viewTasks":"نمایش وظایف","newTask":"وظیفه جدید","defaultTaskName":"وظیفه %n","searchInPage":"جستجو در صفحه","findMatchesSingular":"%i از %t نتیجه","findMatchesPlural":"%i از %t نتیجه","isFocusMode":"شما در حالت تمرکز هستید","closeDialog":"تایید","focusModeExplanation1":"در حالت تمرکز تمام برگه ها به جز برگه فعلی مخفی شده و شما قادر به ایجاد برگه جدید نیستید.","focusModeExplanation2":"شما می توانید با غیرفعال کردن گزینه \"حالت تمرکز\" در منوی نمایش از حالت تمرکز خارج شوید.","timeRangeJustNow":"همین الان","timeRangeMinutes":"دقایقی پیش","timeRangeHour":"ساعتی پیش","timeRangeDay":"روز پیش","timeRangeWeek":"هفته پیش","timeRangeMonth":"ماه پیش","timeRangeYear":"سال پیش","timeRangeLongerAgo":"خیلی وقت پیش","crashErrorTitle":"مشکلی پیش آمد.","crashErrorSubtitle":"مشکلی هنگام نمایش این صفحه پیش آمد.","errorPagePrimaryAction":"تلاش دوباره","serverNotFoundTitle":"سرور یافت نشد","serverNotFoundSubtitle":"مرورگر قادر به پیدا کردن این سایت نیست.","archiveSearchAction":"جستجو در archive.org","sslErrorTitle":"این سایت در دسترس نیست","sslErrorMessage":"مرورگر قادر به ایجاد ارتباط امن با سایت نیست.","dnsErrorTitle":"سایتی یافت نشد","dnsErrorMessage":"خطای DNS.","offlineErrorTitle":"شما آفلاین هستید","offlineErrorMessage":"لطفا به اینترت متصل شده و دوباره تلاش کنید.","genericConnectionFail":"مرورگر قادر به اتصال به این سایت نیست.","sslTimeErrorMessage":"مرورگر قادر به ایجاد ارتباط امن با سایت نیست. لطفا مطمئن شوید که ساعت رایانه شما به درستی تنظیم شده است.","addressInvalidTitle":"آدرس اشتباه است.","genericError":"خطایی رخ داد","phishingErrorTitle":"این سایت خطرناک است.","phishingErrorMessage":"این سایت ممکن است اطلاعات شخصی شما از جمله رمز عبور و اطلاعات بانکی شما را به سرقت ببرد.","phishingErrorVisitAnyway":"نمایش سایت","phishingErrorLeave":"خروج از سایت","multipleInstancesErrorMessage":"خطایی رخ داد. لطفا مرورگر را به صورت کامل بسته و دوباره باز کنید.","sessionRestoreErrorTitle":"خطایی رخ داد","sessionRestoreErrorExplanation":"برگه های ذخیره شده شما به درستی بازیابی نشدند.","sessionRestoreErrorBackupInfo":"ما یک کپی از داده های شما را در این آدرس ذخیره کرده ایم: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"اگر این خطا همواره رخ می دهد لطفا یک تیکت جدید در <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">اینجا</a> باز کنید."},"settingsPreferencesHeading":"تنظیمات","settingsRestartRequired":"جهت اعمال تغییرات شما می بایست مرورگر را دوباره باز کنید.","settingsPrivacyHeading":"مسدود سازی","settingsContentBlockingToggle":"مسدود کردن تبلیغات و دنبال کنندگان","settingsBlockScriptsToggle":"مسدود کردن اسکریپت ها","settingsBlockImagesToggle":"مسدود کردن تصاویر","settingsEasyListCredit":{"unsafeHTML":"بر مبنای EasyList و EasyPrivacy بدون قوانین مخفی سازی. ساخته شده توسط <a target=\"_blank\" href=\"https://easylist.to/\">توسعه دهندگان EasyList</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">نمایش گواهینامه</a>."},"settingsAppearanceHeading":"ظاهر","settingsDarkModeToggle":"فعال کردن حالت تاریک","settingsHistoryButtonToggle":"فعال کردن دکمه بازگشت","settingsAdditionalFeaturesHeading":"امکانات اضافه","settingsSwipeNavigationToggle":"فعال سازی قابلیت کشیدن برای مرور به عقب و جلو بین صفحات.","settingsUserscriptsToggle":"فعال کردن اسکریپت های کاربر","settingsUserscriptsExplanation":{"unsafeHTML":"اسکریپت های کاربر این اجازه را به شما می دهند تا رفتار سایت ها را تغییر دهید - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">اطلاعات بیشتر</a>."},"settingsSearchEngineHeading":"موتور جستجو","settingsDefaultSearchEngine":"انتخاب موتور جستجوی پیش فرض:","settingsDDGExplanation":"DuckDuckGo را به عنوان موتور جستجوی پیش فرض تنظیم کنید تا در نوار جستجو نتایج آنی ببینید.","customSearchEngineDescription":"تعویض عبارت جستجو شده با %s","settingsKeyboardShortcutsHeading":"میانبرهای صفحه کلید","settingsKeyboardShortcutsHelp":"از ویرگول جهت جدا کردن میانبرها استفاده کنید.","appMenuFile":"پرونده","appMenuNewTab":"برگه جدید","appMenuDuplicateTab":"برگه تکراری","appMenuNewPrivateTab":"برگه خصوصی جدید","appMenuNewTask":"وظیفه جدید","appMenuSavePageAs":"ذخیره صفحه","appMenuPrint":"جاپ","appMenuEdit":"ویرایش","appMenuUndo":"لغو آخرین دستور","appMenuRedo":"تکرار آخرین دستور","appMenuCut":"برش","appMenuCopy":"کپی","appMenuPaste":"چسباندن","appMenuSelectAll":"انتخاب همه","appMenuFind":"جستجو","appMenuView":"نمایش","appMenuZoomIn":"بزرگ نمایی","appMenuZoomOut":"کوچک نمایی","appMenuActualSize":"اندازه واقعی","appMenuFullScreen":"تمام صفحه","appMenuFocusMode":"حالت تمرکز","appMenuReadingList":"فهرست خواندن","appMenuBookmarks":"نشانک ها","appMenuHistory":"تاریخچه","appMenuDeveloper":"توسعه دهنده","appMenuReloadBrowser":"بازنگری مرورگر","appMenuInspectBrowser":"وارسی مرورگر","appMenuInspectPage":"وارسی صفحه","appMenuWindow":"پنجره","appMenuMinimize":"کوچک نمایی","appMenuClose":"بستن","appMenuHelp":"راهنما","appMenuKeyboardShortcuts":"میانبرهای صفحه کلید","appMenuReportBug":"گزارش اشکالات نرم افزاری","appMenuTakeTour":"تور آموزشی","appMenuViewGithub":"نمایش در گیت هاب","appMenuAbout":"درباره %n","appMenuPreferences":"تنظیمات","appMenuServices":"سرویس ها","appMenuHide":"مخفی کردن %n","appMenuHideOthers":"مخفی کردن بقیه","appMenuShowAll":"نمایش همه","appMenuQuit":"خروج از %n","appMenuBringToFront":"نمایش همه","PDFPageCounter":{"unsafeHTML":"صفحه <input type='text'/> از <span id='total'></span>"},"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}},"fr-FR":{"name":"French (France)","identifier":"fr-FR","translations":{"openInNewTab":"Ouvrir un nouvel onglet","openInNewPrivateTab":"Ouvrir un onglet de navigation privée","viewImage":"Voir l'image","openImageInNewTab":"Ouvrir l'image dans un nouvel onglet","openImageInNewPrivateTab":"Ouvrir l'image dans un onglet de navigation privée","saveImageAs":"Enregistrer l'image sous","searchWith":"Rechercher avec %s","copyLink":"Copier le lien","copy":"Copier","paste":"Coller","goBack":"Retour","goForward":"Avancer","inspectElement":"Inspecter l'élément","DDGAnswerSubtitle":"Réponse","suggestedSite":"Site suggéré","resultsFromDDG":"Résultats de DuckDuckGo","taskN":"Tâche %n","hostsFileEntry":"Fichier local","viewSettings":"Voir les réglages","viewReadingList":"Voir la liste de lecture","takeScreenshot":"Prendre une capture d'écran","clearHistory":"Vider l'historique","switchToTask":"Changer de tâche","createTask":"Créer une tâche","moveToTask":"Déplacer cette tâche à cet onglet","searchBookmarks":"Rechercher des signets","searchHistory":"Rechercher dans l'historique","openMenu":"Ouvrir le menu","enterReaderView":"Entrer en mode lecteur","exitReaderView":"Sortir du mode lecteur","emptyReadingListTitle":"Votre liste de lecture est vide","emptyReadingListSubtitle":"Les articles que vous ouvrez en mode lecteur sont sauvegardés ici pendant 30 jours.","newTabLabel":"Nouvel onglet","connectionNotSecure":"Votre connexion n'est pas sécurisée.","searchbarPlaceholder":"Recherchez et entrez une adresse","privateTab":"Onglet privé","newTabAction":"Ajouter un onglet","viewTasks":"Voir les tâches","newTask":"Nouvelle tâche","defaultTaskName":"Tâche %n","searchInPage":"Rechercher dans la page","findMatchesSingular":"%i de %t match","findMatchesPlural":"%i de %t matches","isFocusMode":"Vous êtes en mode Focus.","closeDialog":"OK","focusModeExplanation1":"En mode focus, tous les onglets à l'exeption de celui actif sont cachés, et vous pouvez créer de nouveaux onglets.","focusModeExplanation2":"Vous pouvez quitter le mode focus en désactivantla fonction \"focus mode\" dans le menu vue.","timeRangeJustNow":"À l'instant","timeRangeMinutes":"Il y a quelques minutes","timeRangeHour":"Il y a quelques heures","timeRangeDay":"Il y a quelques jours","timeRangeWeek":"Cette semaine","timeRangeMonth":"Ce mois-ci","timeRangeYear":"Cette année","timeRangeLongerAgo":"Il y a plus longtemps","crashErrorTitle":"Il y a eu un problème.","crashErrorSubtitle":"Il y a eu un problème en affichant cette page.","errorPagePrimaryAction":"Essayer encore","serverNotFoundTitle":"Serveur non trouvé","serverNotFoundSubtitle":"Min ne peut pas trouver ce site internet.","archiveSearchAction":"Rechercher sur archive.org","sslErrorTitle":"Ce site n'est pas disponible","sslErrorMessage":"Min ne peut pas établir une connexion sécurisée avec ce site.","dnsErrorTitle":"Site non trouvé","dnsErrorMessage":"Il y a eu un problème DNS avec ce site.","offlineErrorTitle":"Vous êtes hors-ligne","offlineErrorMessage":"Reconnectez vous à internet et réessayez.","genericConnectionFail":"Min ne peut pas se connecter à ce site internet.","sslTimeErrorMessage":"Min ne peux pas établir une connexion sécurisée avec ce site. Merci de vérifier que votre horloge est bien réglée.","addressInvalidTitle":"Cette adresse est invalide.","genericError":"Il y a une erreur","phishingErrorTitle":"Ce site peut vous nuire.","phishingErrorMessage":"Ce site peux essayer de vous dérober vos informations personnelles, comme un mot de passe ou des informations bancaires","phishingErrorVisitAnyway":"Visiter quand même","phishingErrorLeave":"Quitter ce site","multipleInstancesErrorMessage":"Une erreur a été rencontrée. Veuillez fermer les autres fenêtres et relancer Min.","sessionRestoreErrorTitle":"Il y a eu une erreur","sessionRestoreErrorExplanation":"Vos onglets sauvegardés n'ont pas pu être restaurés correctement.","sessionRestoreErrorBackupInfo":"Nous avons enregistrés une sauvegarde de vos données à cette localisation : %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Si cette erreur continue à se produire, merci d'ouvrir un ticket : <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">ici</a>."},"settingsPreferencesHeading":"Préférences","settingsRestartRequired":"Vous devez redémarrer pour appliquer les changements.","settingsPrivacyHeading":"Contenu bloqué","settingsContentBlockingToggle":"Traceurs et publicités","settingsBlockScriptsToggle":"Scripts bloqués","settingsBlockImagesToggle":"Images bloquées","settingsEasyListCredit":{"unsafeHTML":"Basé sur EasyList et EasyPrivacy, sans élément caché. Créé par <a target=\"_blank\" href=\"https://easylist.to/\">Les auteurs de EasyList</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">voir la licence</a>."},"settingsAppearanceHeading":"Apparence","settingsDarkModeToggle":"Activer le mode nuit","settingsHistoryButtonToggle":"Activer le boutton navigation","settingsAdditionalFeaturesHeading":"Fonctionnalités supplémentaires","settingsSwipeNavigationToggle":"Activer le glissement pour changer de page.","settingsUserscriptsToggle":"Activer les scripts personnalisés","settingsUserscriptsExplanation":{"unsafeHTML":"Les scripts personnalisés vous permettent de modifier le comportement des pages web - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">en savoir plus (en anglais)</a>."},"settingsSearchEngineHeading":"Moteur de recherche","settingsDefaultSearchEngine":"Choisir un moteur de recherche par défaut :","settingsDDGExplanation":"Définir DuckDuckGo comme moteur de recherche par défaut pour voir instantanément des résulats dans la barre de recherche.","customSearchEngineDescription":"Remplacer la recherche par %s","settingsKeyboardShortcutsHeading":"Raccourcis clavier","settingsKeyboardShortcutsHelp":"Séparer les raccourcis clavier multiples par une virgule.","appMenuFile":"Fichier","appMenuNewTab":"Nouvel onglet","appMenuDuplicateTab":"Dupliquer l'onglet","appMenuNewPrivateTab":"Nouvel onglet de navigation privée","appMenuNewTask":"Nouvelle tâche","appMenuSavePageAs":"Enregistrer la page sous","appMenuPrint":"Imprimer","appMenuEdit":"Editer","appMenuUndo":"Retour","appMenuRedo":"Avancer","appMenuCut":"Couper","appMenuCopy":"Copier","appMenuPaste":"Coller","appMenuSelectAll":"Tout sélectionner","appMenuFind":"Trouver","appMenuView":"Voir","appMenuZoomIn":"Zoom avant","appMenuZoomOut":"Zoom arrière","appMenuActualSize":"Taille actuelle","appMenuFullScreen":"Plein écran","appMenuFocusMode":"Mode focus","appMenuReadingList":"Liste de lecture","appMenuBookmarks":"Signets","appMenuHistory":"Historique","appMenuDeveloper":"Développeur","appMenuReloadBrowser":"Recharger le navigateur","appMenuInspectBrowser":"Inspecter le contenu","appMenuInspectPage":"Inspecter la page","appMenuWindow":"Fenêtre","appMenuMinimize":"Réduire","appMenuClose":"Fermer","appMenuHelp":"Aide","appMenuKeyboardShortcuts":"Raccourcis claviers","appMenuReportBug":"Reporter un problème","appMenuTakeTour":"Faire un tour","appMenuViewGithub":"Voir sur GitHub","appMenuAbout":"À propos de %n","appMenuPreferences":"Préférences","appMenuServices":"Services","appMenuHide":"Cacher %n","appMenuHideOthers":"Cacher les autres","appMenuShowAll":"Montrer tout","appMenuQuit":"Quitter %n","appMenuBringToFront":"Tout mettre à l'avant","PDFPageCounter":{"unsafeHTML":"page <input type='text'/> sur <span id='total'></span>"},"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}},"hu":{"name":"Hungarian (Hungary)","identifier":"hu","translations":{"openInNewTab":"Megnyit Új Fülbe","openInNewPrivateTab":"Megnyit új Privát fülbe","viewImage":"Kép Megtekintése","openImageInNewTab":"Kép Megnyitása Új Fülbe","openImageInNewPrivateTab":"Kép Megnyitása Új Privát Fülbe","saveImageAs":"Kép Mentése Másként","searchWith":"Keresés %s keresővel","copyLink":"Hivatkozás Másolás","copy":"Másol","paste":"Illeszt","goBack":"Visza lép","goForward":"Előre lép","inspectElement":"Részletek megtekintése","DDGAnswerSubtitle":"Válasz","suggestedSite":"Ajánlott oldal","resultsFromDDG":"Válaszok a DuckDuckGo-rol","taskN":"Feladat %n","hostsFileEntry":"Host Fajl tartalma","viewSettings":"Beálitások Megtekintése","viewReadingList":"Olvasási lista Megtekintése","takeScreenshot":"Képernyő kép készités","clearHistory":"Összes Történet törlés","switchToTask":"Váltsz Feladatot","createTask":"Feladat létrehozás","moveToTask":"Tedd a fül-t feladatba","searchBookmarks":"Könyvjelző keresés","searchHistory":"Keresés Történet","openMenu":"Menu Megnyitása","enterReaderView":"Lépj olvasó nézetbe","exitReaderView":"Kilép olvasó nézetböl","emptyReadingListTitle":"Olvasó Listája üres","emptyReadingListSubtitle":"Cikkek amiket az Olvaső Nézetbe Megnyit, 30 napig helyileg tároljuk","newTabLabel":"Új Fül","connectionNotSecure":"Kapcsoalta ezzel az oldalal nem biztonságos.","searchbarPlaceholder":"Keress, vagy irja be a cimet","privateTab":"Privát Fül","newTabAction":"Új Fül","viewTasks":"Feladat megtekintése","newTask":"Új Feladat","defaultTaskName":"Feladat %n","searchInPage":"Keress az oldalon","findMatchesSingular":"%i a %t találat","findMatchesPlural":"%i a %t találatok","isFocusMode":"Most Fókusz módban van.","closeDialog":"OK","focusModeExplanation1":"Fókusz módba, csak a jelenlegi Fül jelenik meg, nem tud új Fült nyitni vagy másik Fülre lépni.","focusModeExplanation2":"Elhagyhatod a \"focus mode\" a megtekintés menu kipipálásával.","timeRangeJustNow":"Idő intervalum, éppen most","timeRangeMinutes":"Idő intervalum, Perc","timeRangeHour":"Idő intervalum, Óra","timeRangeDay":"Idő intervalum, Nap","timeRangeWeek":"Idő intervalum, Hét","timeRangeMonth":"Idő intervalum, Hónap","timeRangeYear":"Idő intervalum, Év","timeRangeLongerAgo":"Idő intervalum, még régebi","crashErrorTitle":"Valami hiba történt.","crashErrorSubtitle":"Egy hiba lépet fel az oldal menyitásákor.","errorPagePrimaryAction":"Probálja Újra","serverNotFoundTitle":"Szerver nem található","serverNotFoundSubtitle":"Min Nem találja a kért oldalt.","archiveSearchAction":"Keress a archive.org-on","sslErrorTitle":"Ez az oldal nem elérhető","sslErrorMessage":"Min nem tudott biztonságosan kapcsolódni az oldalhoz.","dnsErrorTitle":"Az oldal nem található","dnsErrorMessage":"DNS hiba történt.","offlineErrorTitle":"Nincs Hálozati kapcsolant","offlineErrorMessage":"Kapcsolódjon az internethez és probálja újra.","genericConnectionFail":"Min nem tudta betölteni az oldalt.","sslTimeErrorMessage":"Min nem tudott kapcsolódni biztonságosan az oldalhos. Kérem elenőrize a számitógép óra beálitásait.","addressInvalidTitle":"A cím hibás.","genericError":"Hiba lépet fel","phishingErrorTitle":"Ez az óldal ártalmas lehet.","phishingErrorMessage":"Ez az oldal probálkozik a személjes adatait lopni, mint. pl. a jelszavakat, vagy bankolási információkat.","phishingErrorVisitAnyway":"Eltekint és oldal betöltése","phishingErrorLeave":"Hagya el az oldalt","multipleInstancesErrorMessage":"Hiba lépett fel, kérlek zárd be az összes böngészőt ablakot, és initsd újra a Min böngészőt","sessionRestoreErrorTitle":"Egy hiba lépet fel","sessionRestoreErrorExplanation":"A mentet fült nem sikerült helyre álitani.","sessionRestoreErrorBackupInfo":"Egy biztonsági mentést készitettünk itt: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Ha a probléme nem múlik él, itt nyisson egy hibajelentést <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">here</a>."},"settingsPreferencesHeading":"Beálitások","settingsRestartRequired":"Újra kell inditani hogy a változások életbe lépjenek.","settingsPrivacyHeading":"Tartalom Tiltás","settingsContentBlockingToggle":"Tiltsa le a Reklámokat, és a követést","settingsBlockScriptsToggle":"Szkriptek Tiltása","settingsBlockImagesToggle":"Képek Tiltása","settingsEasyListCredit":{"unsafeHTML":"Az EasyList és EasyPrivacy, Elemek rejtése nélkul. Készitette <a target=\"_blank\" href=\"https://easylist.to/\">The EasyList authors</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">view license</a>."},"settingsAppearanceHeading":"Megjelenés","settingsDarkModeToggle":"Kapcsolja be a sotét nézetett","settingsHistoryButtonToggle":"Vissza gomb bekapcsolása","settingsAdditionalFeaturesHeading":"További beálitások","settingsSwipeNavigationToggle":"Kapcsolja be a swipe Navigációt előre és hátra az oldalakal.","settingsUserscriptsToggle":"Felhasználói Szkriptek","settingsUserscriptsExplanation":"Felhasználói Szkriptek magyarázat","settingsSearchEngineHeading":"Kereső Motor","settingsDefaultSearchEngine":"Válasza ki az Alap kereső Motorját:","settingsDDGExplanation":"Állitsa be a DuckDuckGo kereső motort hogy lássa a válaszokat a kereső sorba.","customSearchEngineDescription":null,"settingsKeyboardShortcutsHeading":"Billentjüzet kombinációk","settingsKeyboardShortcutsHelp":"Használj , tobb kombináció megadásához.","appMenuFile":"Fajl","appMenuNewTab":"Új Fül","appMenuDuplicateTab":null,"appMenuNewPrivateTab":"Új Privát Fül","appMenuNewTask":"Új Feladat","appMenuSavePageAs":"Oldal Mentése Másként","appMenuPrint":"Nyomtat","appMenuEdit":"Szerkeszt","appMenuUndo":"Viszaálit","appMenuRedo":"Újra","appMenuCut":"Kivág","appMenuCopy":"Másol","appMenuPaste":"Illeszt","appMenuSelectAll":"Mindent kiválaszt","appMenuFind":"Keress","appMenuView":"Nézet","appMenuZoomIn":"Nagyitás","appMenuZoomOut":"Kicsinyit","appMenuActualSize":"Eredeti méret","appMenuFullScreen":"Teljes képernyő","appMenuFocusMode":"Fókusz Mode","appMenuReadingList":"Olvasó lista","appMenuBookmarks":"Könyvjelzők","appMenuHistory":"Régeben látogatott oldalak","appMenuDeveloper":"Fejlesző","appMenuReloadBrowser":"Böngésző újra töltése","appMenuInspectBrowser":"Böngésző elenőrzés","appMenuInspectPage":"Oldal Elenőrzés","appMenuWindow":"Ablak","appMenuMinimize":"Minimalizál","appMenuClose":"Bezár","appMenuHelp":"Segitség","appMenuKeyboardShortcuts":"Billenytüzet kombinációk","appMenuReportBug":"Bug Jelentés","appMenuTakeTour":"Túra megtekintése","appMenuViewGithub":"Megtekint GitHubon","appMenuAbout":"A termékröl %n","appMenuPreferences":"Beálitások","appMenuServices":"Szolgáltatások","appMenuHide":"Elrejt %n","appMenuHideOthers":"Többi Elrejtése","appMenuShowAll":"Mindnet Mutat","appMenuQuit":"Kilép %n","appMenuBringToFront":"Mindnet előtérbe hoz","PDFPageCounter":{"unsafeHTML":"oldal <input type='text'/> bol <span id='total'></span>"},"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}},"it":{"name":"Italiano","identifier":"it","translations":{"openInNewTab":"Apri in nuova scheda","openInNewPrivateTab":"Apri in nuova scheda privata","viewImage":"Visualizza immagine","openImageInNewTab":"Apri immagine in nuova scheda","openImageInNewPrivateTab":"Apri immagine in nuova scheda privata","saveImageAs":"Salva immagine con nome","searchWith":"Cerca con %s","copyLink":"Copia Link","copy":"Copia","paste":"Incolla","goBack":"Indietro","goForward":"Avanti","inspectElement":"Ispeziona elemento","DDGAnswerSubtitle":"Risposta","suggestedSite":"Sito suggerito","resultsFromDDG":"Risultati di DuckDuckGo","taskN":"Task %n","hostsFileEntry":"Elemento file hosts","viewSettings":"Vedi Impostazioni","viewReadingList":"Vedi Lista di Lettura","takeScreenshot":"Cattura Screenshot","clearHistory":"Svuota la cronologia","switchToTask":"Passa a Task","createTask":"Crea un Task","moveToTask":"Sposta questa scheda in un task","searchBookmarks":"Cerca nei preferiti","searchHistory":"Cerca nella cronologia","openMenu":"Apri menu","enterReaderView":"Entra in Modalità Lettura","exitReaderView":"Esci dalla Modalità Lettura","emptyReadingListTitle":"La tua Lista di Lettura è vuota","emptyReadingListSubtitle":"Gli articoli che apri in Modalità Lettura sono elencati qui. Rimangono salvati online per 30 giorni.","newTabLabel":"Nuova scheda","connectionNotSecure":"La tua connessione a questo sito non è sicura..","searchbarPlaceholder":"Cerca o inserisci indirizzo","privateTab":"Scheda privata","newTabAction":"Nuova scheda","viewTasks":"Mostra Task","newTask":"Nuovo Task","defaultTaskName":"Task %n","searchInPage":"Cerca nella pagina","findMatchesSingular":"%i su %t risultato","findMatchesPlural":"%i su %t risultati","isFocusMode":"Sei in Modalità Focus.","closeDialog":"OK","focusModeExplanation1":"In Modalità Focus, tutte le schede eccetto quella corrente vengono nascoste, e non puoi crearne di nuove.","focusModeExplanation2":"Puoi uscire dalla Modalità Focus deselezionando \"Modalità Focus\" nel menù Vista.","timeRangeJustNow":"Proprio ora","timeRangeMinutes":"Pochi minuti fa","timeRangeHour":"Quest'ora","timeRangeDay":"Oggi","timeRangeWeek":"Questa settimana","timeRangeMonth":"Questo mese","timeRangeYear":"Quest'anno","timeRangeLongerAgo":"Longer ago","crashErrorTitle":"Qualcosa non ha funzionato.","crashErrorSubtitle":"Si è verificato un errore nella visualizzazione di questa pagina.","errorPagePrimaryAction":"Riprova","serverNotFoundTitle":"Server non trovato","serverNotFoundSubtitle":"Min non è riuscito a trovare il server.","archiveSearchAction":"Cerca su archive.org","sslErrorTitle":"Questo sito non è disponibile","sslErrorMessage":"Min non ha potuto stabilire una connessione sicura con questo sito.","dnsErrorTitle":"Sito non trovato","dnsErrorMessage":"Si è verificato un errore DNS.","offlineErrorTitle":"Sei offline","offlineErrorMessage":"Riconnettiti ad Internet e riprova.","genericConnectionFail":"Min non ha potuto connettersi a questo sito.","sslTimeErrorMessage":"Min non ha potuto stabilire una connessione sicura con questo sito. Assicurati che l'orologio di questo computer sia impostato correttamente.","addressInvalidTitle":"Questo indirizzo non è valido.","genericError":"Si è verificato un errore","phishingErrorTitle":"Questo sito è pericoloso.","phishingErrorMessage":"Questo sito potrebbe cercare di rubare i tuoi dati sensibili, come password o credenziali bancarie.","phishingErrorVisitAnyway":"Visita sito comunque","phishingErrorLeave":"Portami via da questo sito","multipleInstancesErrorMessage":"Si è verificato un errore. Chiudi ogni altra instanza e riavvia Min.","sessionRestoreErrorTitle":"Si è verificato un errore","sessionRestoreErrorExplanation":"Impossibile recuperare le tue schede precedentemente aperte.","sessionRestoreErrorBackupInfo":"Min ha salvato un backup dei tuoi dati in: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Se questo errore persiste, apri un nuovo issue <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">qui</a>."},"settingsPreferencesHeading":"Impostazioni","settingsRestartRequired":"Devi riavviare Min per applicare queste modifiche.","settingsPrivacyHeading":"Blocco contenuti","settingsContentBlockingToggle":"Blocca tracker e pubblicità","settingsBlockScriptsToggle":"Blocca script","settingsBlockImagesToggle":"Blocca immagini","settingsEasyListCredit":{"unsafeHTML":"Utilizza EasyList ed EasyPrivacy, senza regole che nascondono elementi. Creato da <a target=\"_blank\" href=\"https://easylist.to/\">gli autori di EasyList</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">vedi licenza</a>."},"settingsAppearanceHeading":"Aspetto","settingsDarkModeToggle":"Abilita dark mode","settingsHistoryButtonToggle":"Abilita pulsante Indietro","settingsAdditionalFeaturesHeading":"Funzionalità aggiuntive","settingsSwipeNavigationToggle":"Abilita swipe per andare avanti ed indietro tra le pagine.","settingsUserscriptsToggle":"Abilita script definiti dall'utente","settingsUserscriptsExplanation":{"unsafeHTML":"Gli script definiti dall'utente ti permettono di modificare il comportamento dei siti - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">scopri di più</a>."},"settingsSearchEngineHeading":"Motore di ricerca","settingsDefaultSearchEngine":"Scegli un motore di ricerac predefinito:","settingsDDGExplanation":"Imposta DuckDuckGo come motore di ricerca predefinito per vedere risposte istantanee nella barra di ricerca.","customSearchEngineDescription":"Sostituisci il termine di ricerca con %s","settingsKeyboardShortcutsHeading":"Scorciatoie da tastiera","settingsKeyboardShortcutsHelp":"Utilizza una virgola per separare scorciatoie multiple.","appMenuFile":"File","appMenuNewTab":"Nuova scheda","appMenuDuplicateTab":"Duplica scheda","appMenuNewPrivateTab":"Nuova scheda privata","appMenuNewTask":"Nuovo task","appMenuSavePageAs":"Salva pagina con nome","appMenuPrint":"Stampa","appMenuEdit":"Modifica","appMenuUndo":"Annulla","appMenuRedo":"Ripeti","appMenuCut":"Taglia","appMenuCopy":"Copia","appMenuPaste":"Incolla","appMenuSelectAll":"Seleziona tutto","appMenuFind":"Trova","appMenuView":"Vista","appMenuZoomIn":"Aumenta zoom","appMenuZoomOut":"Riduci zoom","appMenuActualSize":"Dimensioni reali","appMenuFullScreen":"Schermo pieno","appMenuFocusMode":"Modalità focus","appMenuReadingList":"Lista di Lettura","appMenuBookmarks":"Preferiti","appMenuHistory":"Cronologia","appMenuDeveloper":"Sviluppo","appMenuReloadBrowser":"Ricarica browser","appMenuInspectBrowser":"Ispeziona browser","appMenuInspectPage":"Ispeziona pagina","appMenuWindow":"Finestra","appMenuMinimize":"Minimizza","appMenuClose":"Chiudi","appMenuHelp":"Aiuto","appMenuKeyboardShortcuts":"Scorciatoie da tastiera","appMenuReportBug":"Segnala un bug","appMenuTakeTour":"Fai un tour","appMenuViewGithub":"Vedi su GitHub","appMenuAbout":"A proposito di %n","appMenuPreferences":"Preferenze","appMenuServices":"Servizi","appMenuHide":"Nascondi %n","appMenuHideOthers":"Nascondi altre","appMenuShowAll":"Mostra tutte","appMenuQuit":"Esci da %n","appMenuBringToFront":"Porta avanti","PDFPageCounter":{"unsafeHTML":"pagina <input type='text'/> su <span id='total'></span>"}}},"ja":{"name":"日本語","identifier":"ja","translations":{"openInNewTab":"新規タブで開く","openInNewPrivateTab":"新規プライベートタブで開く","viewImage":"画像を表示","openImageInNewTab":"画像を新規タブで開く","openImageInNewPrivateTab":"画像を新規プライベートタブで開く","saveImageAs":"画像を別名で保存","searchWith":"%s で検索","copyLink":"リンクをコピー","copy":"コピー","paste":"ペースト","goBack":"戻る","goForward":"進む","inspectElement":"要素を検証","DDGAnswerSubtitle":"インスタントアンサー","suggestedSite":"おすすめサイト","resultsFromDDG":"DuckDuckGoからの結果","taskN":"タスク %n","hostsFileEntry":"ホストファイルエントリー","viewSettings":"設定を表示","viewReadingList":null,"takeScreenshot":"スクリーンショットを撮る","clearHistory":"すべての履歴をクリア","switchToTask":"タスクに切り替える","createTask":"タスクを作成","moveToTask":"このタブをタスクに移動","searchBookmarks":"ブックマークを検索","searchHistory":null,"openMenu":null,"enterReaderView":"リーダービューを開始","exitReaderView":"リーダービューを終了","emptyReadingListTitle":"リーディングリストは空です","emptyReadingListSubtitle":"リーダービューで表示した記事がここに30日間オフラインで保存されます。","newTabLabel":"新しいタブ","connectionNotSecure":"このウェブサイトへの接続は保護されていません。","searchbarPlaceholder":"検索ワードまたはアドレスを入力","privateTab":"プライベートタブ","newTabAction":"新規タブを開く","viewTasks":"タスクを表示","newTask":"新規タスク","defaultTaskName":"タスク %n","searchInPage":"ページ内を検索","findMatchesSingular":"%t 件中 %i 件目","findMatchesPlural":"%t 件中 %i 件目","isFocusMode":"フォーカスモード中です","closeDialog":"OK","focusModeExplanation1":"フォーカスモード中は、現在選択中のタブを除くすべてのタブが非表示になり、新規タブの作成もできなくなります。","focusModeExplanation2":"\"表示\"メニューから\"フォーカスモード\"のチェックを外すことで、フォーカスモードを終了できます。","timeRangeJustNow":null,"timeRangeMinutes":null,"timeRangeHour":null,"timeRangeDay":null,"timeRangeWeek":null,"timeRangeMonth":null,"timeRangeYear":null,"timeRangeLongerAgo":null,"crashErrorTitle":"予期しない問題が発生しました","crashErrorSubtitle":"ページの表示中に問題が発生しました。","errorPagePrimaryAction":"再試行する","serverNotFoundTitle":"サーバーが見つかりません","serverNotFoundSubtitle":"Minはこのウェブサイトを見つけることができませんでした。","archiveSearchAction":"archive.orgで検索する","sslErrorTitle":"このウェブサイトは利用できません","sslErrorMessage":"Minはこのウェブサイトとの安全な接続を行えませんでした。","dnsErrorTitle":"ウェブサイトが見つかりません","dnsErrorMessage":"DNSエラーが発生しました。","offlineErrorTitle":"オフラインです","offlineErrorMessage":"インターネットに再接続してからもう一度お試しください。","genericConnectionFail":"Minはウェブサイトに接続できませんでした。","sslTimeErrorMessage":"Minはこのウェブサイトとの安全な接続を行えませんでした。お使いのコンピューターの時刻が正しく設定されているか確認してください。","addressInvalidTitle":"このアドレスは無効です。","genericError":"エラーが発生しました","phishingErrorTitle":"このサイトは安全ではない可能性があります。","phishingErrorMessage":"このウェブサイトは、あなたのパスワードや口座情報などの個人情報を盗もうとしている可能性があります。","phishingErrorVisitAnyway":"それでもこのサイトを訪問する","phishingErrorLeave":"このサイトから離れる","multipleInstancesErrorMessage":null,"sessionRestoreErrorTitle":"エラーが発生しました","sessionRestoreErrorExplanation":"保存したタブを正しく復元できませんでした。","sessionRestoreErrorBackupInfo":"次の場所にデータのバックアップを保存しました: %l","sessionRestoreErrorLinkInfo":{"unsafeHTML":"もしこのエラーが立て続けに発生する場合は、<a href=\"https://github.com/minbrowser/min\" target=\"_blank\">こちら</a>から新しいissueを開いてください。"},"settingsPreferencesHeading":"環境設定","settingsRestartRequired":"これらの変更を適用するには再起動が必要です。","settingsPrivacyHeading":"コンテンツブロッカー","settingsContentBlockingToggle":"トラッカーと広告をブロックする","settingsBlockScriptsToggle":"スクリプトをブロック","settingsBlockImagesToggle":"画像をブロック","settingsEasyListCredit":{"unsafeHTML":"フィルターはEasyListとEasyPrivacyから要素隠蔽ルールを省いたものに基づいています。<a target=\"_blank\" href=\"https://easylist.to/\">EasyListの作者</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">ライセンスを表示</a>"},"settingsAppearanceHeading":"外観","settingsDarkModeToggle":"ダークモードを使用","settingsHistoryButtonToggle":"戻るボタンを使用","settingsAdditionalFeaturesHeading":null,"settingsSwipeNavigationToggle":"スワイプしてページを行き来できるようにする","settingsUserscriptsToggle":null,"settingsUserscriptsExplanation":null,"settingsSearchEngineHeading":"検索エンジン","settingsDefaultSearchEngine":"デフォルトの検索エンジン:","settingsDDGExplanation":"検索バーにインスタントアンサーを表示するには、DuckDuckGoをデフォルトの検索エンジンに設定してください。","customSearchEngineDescription":null,"settingsKeyboardShortcutsHeading":"キーボードショートカット","settingsKeyboardShortcutsHelp":"カンマ区切りで複数のショートカットを登録できます。","appMenuFile":"ファイル","appMenuNewTab":"新規タブ","appMenuDuplicateTab":null,"appMenuNewPrivateTab":"新規プライベートタブ","appMenuNewTask":"新規タスク","appMenuSavePageAs":"ページを別名で保存","appMenuPrint":"プリント","appMenuEdit":"編集","appMenuUndo":"取り消す","appMenuRedo":"やり直す","appMenuCut":"カット","appMenuCopy":"コピー","appMenuPaste":"ペースト","appMenuSelectAll":"すべて選択","appMenuFind":"検索","appMenuView":"表示","appMenuZoomIn":"拡大","appMenuZoomOut":"縮小","appMenuActualSize":"実際のサイズ","appMenuFullScreen":"フルスクリーン","appMenuFocusMode":"フォーカスモード","appMenuReadingList":"リーディングリスト","appMenuBookmarks":null,"appMenuHistory":null,"appMenuDeveloper":"開発","appMenuReloadBrowser":"ブラウザを再読み込み","appMenuInspectBrowser":"ブラウザを検証","appMenuInspectPage":"ページを検証","appMenuWindow":"ウインドウ","appMenuMinimize":"最小化","appMenuClose":"閉じる","appMenuHelp":"ヘルプ","appMenuKeyboardShortcuts":"キーボードショートカット","appMenuReportBug":"バグを報告","appMenuTakeTour":"ツアーを見る","appMenuViewGithub":"GitHubで表示","appMenuAbout":"%nについて","appMenuPreferences":"環境設定","appMenuServices":"サービス","appMenuHide":"%nを隠す","appMenuHideOthers":"ほかを隠す","appMenuShowAll":"すべてを表示","appMenuQuit":"%nを終了","appMenuBringToFront":"すべてを最前面に移動","PDFPageCounter":{"unsafeHTML":"<span id='total'></span> ページ中 <input type='text'/> ページ目"},"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}},"ko":{"name":"한국어","identifier":"ko","translations":{"openInNewTab":"새 탭","openInNewPrivateTab":"새 개인탭","viewImage":"이미지 보기","openImageInNewTab":"새 탭에서 이미지 열기","openImageInNewPrivateTab":"새 개인탭에서 이미지 열기","saveImageAs":"이미지를 다른 이름으로 저장","searchWith":"%s에서 검색","copyLink":"주소 복사","copy":"복사","paste":"붙여넣기","goBack":"뒤로","goForward":"앞으로","inspectElement":"요소 검사","DDGAnswerSubtitle":"응답","suggestedSite":"제안 사이트","resultsFromDDG":"DuckDuckGo 에서의 결과","taskN":"태스크 %n","hostsFileEntry":"호스트 파일 항목","viewSettings":"설정","viewReadingList":"읽기 항목","takeScreenshot":"스크린샷","clearHistory":"기록 삭제","switchToTask":"태스크 변경","createTask":"태스크 생성","moveToTask":"태스트로 탭 이동","searchBookmarks":"북마크 검색","searchHistory":"기록 검색","openMenu":"메뉴","enterReaderView":"읽기 모드","exitReaderView":"읽기 모드 종료","emptyReadingListTitle":"읽기 항목이 없습니다","emptyReadingListSubtitle":"열어본 기사가 나열되며, 오프라인에 30일간 저장됩니다.","newTabLabel":"새 탭","connectionNotSecure":"이 웹 사이트에 대한 연결이 안전하지 않습니다.","searchbarPlaceholder":"주소 검색 또는 입력","privateTab":"개인탭","newTabAction":"새 탭","viewTasks":"태스크 보기","newTask":"새 태스크","defaultTaskName":"태스크 %n","searchInPage":"페이지 검색","findMatchesSingular":"%t 의 %i 일치","findMatchesPlural":"%t 의 %i 일치","isFocusMode":"포커스 모드입니다.","closeDialog":"완료","focusModeExplanation1":"포커스 모드에서는 현재 탭을 제외한 모든 탭이 숨겨지고, 새 탭을 만들 수 없습니다.","focusModeExplanation2":"보기 메뉴에서 \"포커스 모드\"의 선택을 해제하여 종료 할 수 있습니다.","timeRangeJustNow":"방금","timeRangeMinutes":"몇분 전","timeRangeHour":"몇시간 전","timeRangeDay":"어제","timeRangeWeek":"지난 주","timeRangeMonth":"지난 달","timeRangeYear":"작년","timeRangeLongerAgo":"오래전","crashErrorTitle":"문제가 발생했습니다.","crashErrorSubtitle":"이 페이지를 표시하는 동안 문제가 발생했습니다.","errorPagePrimaryAction":"다시 시도","serverNotFoundTitle":"서버를 찾을 수 없습니다","serverNotFoundSubtitle":"웹 사이트를 찾을 수 없습니다.","archiveSearchAction":"archive.org 에서 검색","sslErrorTitle":"웹 사이트를 사용할 수 없습니다.","sslErrorMessage":"안전한 연결을 할 수 없습니다.","dnsErrorTitle":"웹 사이트를 찾을 수 없습니다.","dnsErrorMessage":"DNS 에러가 발생했습니다.","offlineErrorTitle":"오프라인 상태입니다.","offlineErrorMessage":"인터넷을 재연결후에, 다시 시도해주세요.","genericConnectionFail":"웹 사이트에 연결할 수 없습니다.","sslTimeErrorMessage":"안전한 연결을 할 수 없습니다. 시계 설정을 확인해주세요.","addressInvalidTitle":"유효하지 않은 주소입니다.","genericError":"에러 발생","phishingErrorTitle":"유해한 사이트입니다.","phishingErrorMessage":"이 웹 사이트에서는 암호 또는 은행 정보와 같은 개인 정보가 도용될 수 있습니다.","phishingErrorVisitAnyway":"(그럼에도 불구하고) 들어가기","phishingErrorLeave":"나가기","multipleInstancesErrorMessage":"에러가 발생했습니다. 다른 창을 종료 후 재실행 해 주세요.","sessionRestoreErrorTitle":"에러 발생","sessionRestoreErrorExplanation":"저장된 탭을 정상적으로 복원 할 수 없습니다.","sessionRestoreErrorBackupInfo":"데이터 백업 저장위치: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"오류가 계속 발생하면 <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">문의</a> 바랍니다."},"settingsPreferencesHeading":"환경설정","settingsRestartRequired":"변경 사항을 적용하려면 다시 시작해야합니다.","settingsPrivacyHeading":"콘텐츠 차단","settingsContentBlockingToggle":"추적기 및 광고 차단","settingsBlockScriptsToggle":"스크립트 차단","settingsBlockImagesToggle":"이미지 차단","settingsEasyListCredit":{"unsafeHTML":"요소 숨기 규칙없이 EasyList 및 EasyPrivacy를 기반으로합니다. 작성자: <a target=\"_blank\" href=\"https://easylist.to/\">The EasyList authors</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">라이선스</a>"},"settingsAppearanceHeading":"외모","settingsDarkModeToggle":"어두운 모드 사용","settingsHistoryButtonToggle":"뒤로 버튼 사용","settingsAdditionalFeaturesHeading":"추가 기능","settingsSwipeNavigationToggle":"페이지간 이동을 위한 스와이프 모드 사용","settingsUserscriptsToggle":"사용자 스크립트 사용","settingsUserscriptsExplanation":{"unsafeHTML":"사용자 스크립트를 사용하면 웹 사이트의 행동을 수정할 수 있습니다. - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">더보기</a>."},"settingsSearchEngineHeading":"검색 엔진","settingsDefaultSearchEngine":"기본 검색 엔진:","settingsDDGExplanation":"SDuckDuckGo를 기본 검색 엔진으로 설정하여 검색 창에서 바로 검색 해 보세요.","customSearchEngineDescription":"검색어 변경: %s","settingsKeyboardShortcutsHeading":"단축키","settingsKeyboardShortcutsHelp":"여러개의 단축키는 쉼표로 구분됩니다.","appMenuFile":"파일","appMenuNewTab":"새 탭","appMenuDuplicateTab":"탭 복제","appMenuNewPrivateTab":"새 개인탭","appMenuNewTask":"새 태스크","appMenuSavePageAs":"페이지를 다른 이름으로 저장","appMenuPrint":"인쇄","appMenuEdit":"수정","appMenuUndo":"취소","appMenuRedo":"되돌리기","appMenuCut":"오려두기","appMenuCopy":"복사하기","appMenuPaste":"붙여넣기","appMenuSelectAll":"전체선택","appMenuFind":"찾기","appMenuView":"보기","appMenuZoomIn":"확대","appMenuZoomOut":"축소","appMenuActualSize":"실제 크기","appMenuFullScreen":"전체 크기","appMenuFocusMode":"포커스 모드","appMenuReadingList":"읽기 목록","appMenuBookmarks":"북마크","appMenuHistory":"기록","appMenuDeveloper":"개발자","appMenuReloadBrowser":"새로고침","appMenuInspectBrowser":"검사","appMenuInspectPage":"페이지 검사","appMenuWindow":"창","appMenuMinimize":"최소화","appMenuClose":"닫기","appMenuHelp":"도움말","appMenuKeyboardShortcuts":"단축키","appMenuReportBug":"버그 전송","appMenuTakeTour":"둘러보기","appMenuViewGithub":"GitHub","appMenuAbout":"%n 정보","appMenuPreferences":"환경설정","appMenuServices":"서비스","appMenuHide":"%n 숨기기","appMenuHideOthers":"다른것 숨기기","appMenuShowAll":"모두 보기","appMenuQuit":"%n 종료","appMenuBringToFront":"맨 앞으로","PDFPageCounter":{"unsafeHTML":"<span id='total'></span> 의 <input type='text'/> 페이지"},"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}},"lt":{"name":"Lietuvių","identifier":"lt","translations":{"openInNewTab":"Atverti naujoje kortelėje","openInNewPrivateTab":"Atverti naujoje privačioje kortelėje","viewImage":"Rodyti paveikslą","openImageInNewTab":"Atverti paveikslą naujoje kortelėje","openImageInNewPrivateTab":"Atverti paveikslą naujoje privačioje kortelėje","saveImageAs":"Įrašyti paveikslą kaip","searchWith":"Ieškoti naudojant %s","copyLink":"Kopijuoti nuorodą","copy":"Kopijuoti","paste":"Įdėti","goBack":"Grįžti","goForward":"Pirmyn","inspectElement":"Ištirti elementą","DDGAnswerSubtitle":"Atsakymas","suggestedSite":"Siūloma svetainė","resultsFromDDG":"Rezultatai iš DuckDuckGo","taskN":"Užduotis %n","hostsFileEntry":"Serverių failo įrašas","viewSettings":"Rodyti nustatymus","viewReadingList":"Rodyti skaitymo sąrašą","takeScreenshot":"Padaryti ekrano kopiją","clearHistory":"Išvalyti visą istoriją","switchToTask":"Perjungti į užduotį","createTask":"Sukurti užduotį","moveToTask":"Perkelti šią kortelę į užduotį","searchBookmarks":"Ieškoti adresyno įrašų","searchHistory":"Ieškoti istorijos","openMenu":"Atverti meniu","enterReaderView":"Įeiti į skaitymo rodinį","exitReaderView":"Išeiti iš skaitymo rodinio","emptyReadingListTitle":"Jūsų skaitymo sąrašas tuščias","emptyReadingListSubtitle":"Čia yra išvardijami skaitymo rodinyje atverti straipsniai, kurie saugomi autonominiam naudojimui 30 dienų.","newTabLabel":"Nauja kortelė","connectionNotSecure":"Jūsų ryšys su šia svetaine nėra saugus.","searchbarPlaceholder":"Atlikite paiešką arba įveskite adresą","privateTab":"Privatii kortelė","newTabAction":"Nauja kortelė","viewTasks":"Rodyti užduotis","newTask":"Nauja užduotis","defaultTaskName":"Užduotis %n","searchInPage":"Ieškoti puslapyje","findMatchesSingular":"%i iš %t atitikmens","findMatchesPlural":"%i iš %t atitikmenų","isFocusMode":"Jūs esate susitelkimo veiksenoje.","closeDialog":"Gerai","focusModeExplanation1":"Susitelkimo veiksenoje, visos kortelės išskyrus esamą yra paslepiamos ir jūs negalite sukurti naujų kortelių.","focusModeExplanation2":"Galite išeiti iš susitelkimo veiksenos rodinio meniu nuimdami žymėjimą nuo \"Susitelkimo veiksena\".","timeRangeJustNow":"Ką tik","timeRangeMinutes":"Prieš kelias minutes","timeRangeHour":"Per pastarąją valandą","timeRangeDay":"Per pastarąją dieną","timeRangeWeek":"Per pastarąją savaitę","timeRangeMonth":"Per pastarąjį mėnesį","timeRangeYear":"Per pastaruosius metus","timeRangeLongerAgo":"Dar seniau","crashErrorTitle":"Kažkas nutiko.","crashErrorSubtitle":"Atsirado problemų, atvaizduojant šį puslapį.","errorPagePrimaryAction":"Bandyti dar kartą","serverNotFoundTitle":"Serveris nerastas","serverNotFoundSubtitle":"Min nepavyko rasti šios internetinės svetainės.","archiveSearchAction":"Ieškoti ties archive.org","sslErrorTitle":"Ši internetinė svetainė yra neprieinama","sslErrorMessage":"Min nepavyko saugiai prisijungti prie šios internetinės svetainės.","dnsErrorTitle":"Internetinė svetainė nerasta","dnsErrorMessage":"Įvyko DNS klaida.","offlineErrorTitle":"Jūs esate atsijungę","offlineErrorMessage":"Iš naujo prisijunkite prie interneto ir bandykite dar kartą.","genericConnectionFail":"Min nepavyko prisijungti prie internetinės svetainės.","sslTimeErrorMessage":"Min nepavyko saugiai prisijungti prie šios internetinės svetainės. Įsitikinkite, kad jūsų kompiuterio laikrodis yra nustatytas teisingai.","addressInvalidTitle":"Šis adresas yra neteisingas.","genericError":"Įvyko klaida","phishingErrorTitle":"Ši svetainė gali jums pakenkti.","phishingErrorMessage":"Gali būti, kad ši svetainė bando pavogti jūsų asmeninę informaciją, tokią kaip slaptažodžiai ar banko informacija.","phishingErrorVisitAnyway":"Vis tiek apsilankyti svetainėje","phishingErrorLeave":"Išeiti iš šios svetainės","multipleInstancesErrorMessage":"Įvyko klaida. Užverkite bet kokius kitus atvertus egzempliorius ir paleiskite Min iš naujo.","sessionRestoreErrorTitle":"Įvyko klaida","sessionRestoreErrorExplanation":"Nepavyko teisingai atkurti jūsų įrašytų kortelių.","sessionRestoreErrorBackupInfo":"Įrašėme atsarginę jūsų duomenų kopiją šioje vietoje: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Jei ši klaida atsiranda ir toliau, tuomet praneškite apie problemą <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">čia</a>."},"settingsPreferencesHeading":"Nuostatos","settingsRestartRequired":"Norėdami taikyti šiuos pakeitimus, turite paleisti programą iš naujo.","settingsPrivacyHeading":"Turinio blokavimas","settingsContentBlockingToggle":"Blokuoti seklius ir reklamas","settingsBlockScriptsToggle":"Blokuoti scenarijus","settingsBlockImagesToggle":"Blokuoti paveikslus","settingsEasyListCredit":{"unsafeHTML":"Remiantis EasyList ir EasyPrivacy, be elementų slėpimo taisyklių. Sukurta <a target=\"_blank\" href=\"https://easylist.to/\">The EasyList autorių</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">rodyti licenciją</a>."},"settingsAppearanceHeading":"Išvaizda","settingsDarkModeToggle":"Įjungti tamsią veikseną","settingsHistoryButtonToggle":"Įjungti grįžties mygtuką","settingsAdditionalFeaturesHeading":"Papildomos ypatybės","settingsSwipeNavigationToggle":"Įjungti perbraukimus, skirtus naršyti tarp puslapių pirmyn ir atgal.","settingsUserscriptsToggle":"Įjungti naudotojo scenarijus","settingsUserscriptsExplanation":{"unsafeHTML":"Naudotojo scenarijai leidžia jums modifikuoti internetinių svetainių elgseną - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">sužinokite daugiau</a>."},"settingsSearchEngineHeading":"Paieškos sistema","settingsDefaultSearchEngine":"Pasirinkite numatytąją paieškos sistemą:","settingsDDGExplanation":"Nustatykite DuckDuckGo kaip numatytąją paieškos sistemą, norėdami paieškos juostoje matyti greitus atsakymus.","customSearchEngineDescription":"Pakeiskite paieškos žodį į %s","settingsKeyboardShortcutsHeading":"Spartieji klavišai","settingsKeyboardShortcutsHelp":"Naudokite kablelius, norėdami atskirti kelis sparčiuosius klavišus.","appMenuFile":"Failas","appMenuNewTab":"Nauja kortelė","appMenuDuplicateTab":null,"appMenuNewPrivateTab":"Nauja privati kortelė","appMenuNewTask":"Nauja užduotis","appMenuSavePageAs":"Įrašyti puslapį kaip","appMenuPrint":"Spausdinti","appMenuEdit":"Taisa","appMenuUndo":"Atšaukti","appMenuRedo":"Grąžinti","appMenuCut":"Iškirpti","appMenuCopy":"Kopijuoti","appMenuPaste":"Įdėti","appMenuSelectAll":"Žymėti viską","appMenuFind":"Rasti","appMenuView":"Rodinys","appMenuZoomIn":"Didinti","appMenuZoomOut":"Mažinti","appMenuActualSize":"Faktinis dydis","appMenuFullScreen":"Visas ekranas","appMenuFocusMode":"Susitelkimo veiksena","appMenuReadingList":"Skaitymo sąrašas","appMenuBookmarks":"Adresynas","appMenuHistory":"Istorija","appMenuDeveloper":"Kūrėjas","appMenuReloadBrowser":"Įkelti naršyklę iš naujo","appMenuInspectBrowser":"Ištirti naršyklę","appMenuInspectPage":"Ištirti puslapį","appMenuWindow":"Langas","appMenuMinimize":"Suskleisti","appMenuClose":"Užverti","appMenuHelp":"Žinynas","appMenuKeyboardShortcuts":"Spartieji klavišai","appMenuReportBug":"Pranešti apie klaidą","appMenuTakeTour":"Susipažinti su programa","appMenuViewGithub":"Rodyti GitHub svetainėje","appMenuAbout":"Apie %n","appMenuPreferences":"Nuostatos","appMenuServices":"Tarnybos","appMenuHide":"Slėpti %n","appMenuHideOthers":"Slėpti kitus","appMenuShowAll":"Rodyti visus","appMenuQuit":"Išeiti iš %n","appMenuBringToFront":"Perkelti visus į priekį","PDFPageCounter":{"unsafeHTML":"puslapis <input type='text'/> iš <span id='total'></span>"},"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}},"pl":{"name":"Polski","identifier":"pl","translations":{"openInNewTab":"Otwórz w nowej karcie","openInNewPrivateTab":"Otwórz w nowej karcie prywatnej","viewImage":"Zobacz grafikę","openImageInNewTab":"Otwórz grafikę w nowej karcie","openImageInNewPrivateTab":"Otwórz grafikę w nowej karcie prywatnej","saveImageAs":"Zapisz grafikę jako","searchWith":"Szukaj %s","copyLink":"Kopiuj link","copy":"Kopiuj","paste":"Wklej","goBack":"Cofnij","goForward":"Dalej","inspectElement":"Sprawdź element","DDGAnswerSubtitle":"Odpowiedź","suggestedSite":"Sugerowana strona","resultsFromDDG":"Wyniki z DuckDuckGo","taskN":"Zadanie %n","hostsFileEntry":"Wpis pliku hosta","viewSettings":"Wyświetl Ustawienia","viewReadingList":"Wyświetl listę czytelnia","takeScreenshot":"Zrób zrzut ekranu","clearHistory":"Wyczyść całą historię","switchToTask":"Przełącz na zadanie","createTask":"Utwórz zadanie","moveToTask":"Przenieś tę kartę do zadania","searchBookmarks":"Zakładki wyszukiwania","searchHistory":"Historia wyszukiwania","openMenu":"Otwórz menu","enterReaderView":"Otwórz widok czytnika","exitReaderView":"Zamknij widok czytnika","emptyReadingListTitle":"Twoja lista czytelnicza jest pusta","emptyReadingListSubtitle":"Artykuły otwierane w widoku czytnika są wymienione tutaj i są zapisywane w trybie offline przez 30 dni.","newTabLabel":"Nowa karta","connectionNotSecure":"Twoje połączenie z tą witryną nie jest bezpieczne.","searchbarPlaceholder":"Wyszukaj lub wprowadź adres","privateTab":"Nowa karta prywatna","newTabAction":"Nowa karta","viewTasks":"Wyświetl zadania","newTask":"Nowe zadanie","defaultTaskName":"Zadanie %n","searchInPage":"Wyszukaj na stronie","findMatchesSingular":"%i z %t dopasowania","findMatchesPlural":"%i z %t dopasowań","isFocusMode":"Jesteś w trybie ostrości.","closeDialog":"OK","focusModeExplanation1":"W trybie ustawiania ostrości wszystkie karty oprócz bieżącego są ukryte i nie można tworzyć nowych kart.","focusModeExplanation2":"Możesz wyłączyć tryb ostrości, odznaczając \"tryb ostrości\" w menu widoku.","timeRangeJustNow":"Przed chwilą","timeRangeMinutes":"Kilka minut temu","timeRangeHour":"W ciągu ostatniej godziny","timeRangeDay":"W poprzednim dniu","timeRangeWeek":"W poprzednim tygodniu","timeRangeMonth":"W poprzednim miesiącu","timeRangeYear":"W poprzednim roku","timeRangeLongerAgo":"Wcześniej","crashErrorTitle":"Coś poszło nie tak.","crashErrorSubtitle":"Wystąpił problem podczas wyświetlania tej strony.","errorPagePrimaryAction":"Spróbuj ponownie","serverNotFoundTitle":"Nie znaleziono serwera","serverNotFoundSubtitle":"Min nie może znaleźć tej witryny.","archiveSearchAction":"Wyszukaj na archive.org","sslErrorTitle":"Ta strona internetowa jest niedostępna","sslErrorMessage":"Min nie można bezpiecznie połączyć się z tą witryną.","dnsErrorTitle":"Nie znaleziono strony","dnsErrorMessage":"Wystąpił błąd DNS.","offlineErrorTitle":"Jesteś poza siecią","offlineErrorMessage":"Połącz się z Internetem i spróbuj ponownie.","genericConnectionFail":"Min nie może połączyć się z witryną.","sslTimeErrorMessage":"Min nie może bezpiecznie połączyć się z tą witryną. Upewnij się, że zegar komputera jest ustawiony prawidłowo.","addressInvalidTitle":"Ten adres jest nieprawidłowy.","genericError":"Wystąpił błąd","phishingErrorTitle":"Ta strona nie jest bezpieczna.","phishingErrorMessage":"Ta strona może próbować wykraść twoje dane osobowe, takie jak hasła lub informacje bankowe.","phishingErrorVisitAnyway":"Odwiedź stronę mimo to","phishingErrorLeave":"Opuść tę stronę","multipleInstancesErrorMessage":"Wystąpił błąd. Zamknij wszystkie inne otwarte wystąpienia i uruchom ponownie Min.","sessionRestoreErrorTitle":"Wystąpił błąd","sessionRestoreErrorExplanation":"Nie można przywrócić poprawnie zapisanych kart.","sessionRestoreErrorBackupInfo":"W tej lokalizacji zapisaliśmy kopię zapasową danych: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Jeśli błąd nadal występuje, otwórz nowy problem <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">tutaj</a>."},"settingsPreferencesHeading":"Preferencje","settingsRestartRequired":"Musisz ponownie uruchomić, aby zastosować te zmiany.","settingsPrivacyHeading":"Blokowanie treści","settingsContentBlockingToggle":"Zablokuj śledzenie i reklamy","settingsBlockScriptsToggle":"Zablokuj skrypty","settingsBlockImagesToggle":"Zablokuj obrazy","settingsEasyListCredit":{"unsafeHTML":"Oparty na EasyList i EasyPrivacy, bez ukrywania elementów. Stworzone przez <a target=\"_blank\" href=\"https://easylist.to/\">Autorzy EasyList</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">zobacz licencję</a>."},"settingsAppearanceHeading":"Wygląd","settingsDarkModeToggle":"Włącz tryb ciemny","settingsHistoryButtonToggle":"Włącz przycisk Wstecz","settingsSwipeNavigationToggle":"Włącz przewijanie, aby nawigować między stronami.","settingsAdditionalFeaturesHeading":"Dodatkowe funkcje","settingsUserscriptsToggle":"Włącz skrypty użytkownika","settingsUserscriptsExplanation":{"unsafeHTML":"Skrypty użytkownika pozwalają modyfikować zachowanie stron internetowych - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">learn more</a>."},"settingsSearchEngineHeading":"Wyszukiwarka","settingsDefaultSearchEngine":"Wybierz domyślną wyszukiwarkę:","settingsDDGExplanation":"Ustaw DuckDuckGo jako domyślną wyszukiwarkę, aby zobaczyć błyskawiczne odpowiedzi na pasku wyszukiwania.","customSearchEngineDescription":"Zamień wyszukiwane hasło na %s","settingsKeyboardShortcutsHeading":"Skróty klawiszowe","settingsKeyboardShortcutsHelp":"Użyj przecinków, aby oddzielić wiele skrótów.","appMenuFile":"Plik","appMenuNewTab":"Nowa karta","appMenuDuplicateTab":null,"appMenuNewPrivateTab":"Nowa karta prywatna","appMenuNewTask":"Nowe zadanie","appMenuSavePageAs":"Zapisz stronę jako","appMenuPrint":"Drukuj","appMenuEdit":"Edytuj","appMenuUndo":"Cofnij","appMenuRedo":"Ponów","appMenuCut":"Wytnij","appMenuCopy":"Kopiuj","appMenuPaste":"Wklej","appMenuSelectAll":"Zaznacz wszystko","appMenuFind":"Znajdź","appMenuView":"Widok","appMenuZoomIn":"Powiększ","appMenuZoomOut":"Pomniejsz","appMenuActualSize":"Rzeczywisty rozmiar","appMenuFullScreen":"Pełen ekran","appMenuFocusMode":"Tryb ostrości","appMenuReadingList":"Lista czytelnia","appMenuBookmarks":"Zakładki","appMenuHistory":"Historia","appMenuDeveloper":"Programista","appMenuReloadBrowser":"Załaduj ponownie","appMenuInspectBrowser":"Zbadaj przegldarkę","appMenuInspectPage":"Zbadaj stronę","appMenuWindow":"Okno","appMenuMinimize":"Minimalizuj","appMenuClose":"Zamknij","appMenuHelp":"Pomoc","appMenuKeyboardShortcuts":"Skróty klawiszowe","appMenuReportBug":"Zgłoś błąd","appMenuTakeTour":"Otwórz przewodnik","appMenuViewGithub":"Zobacz na GitHub","appMenuAbout":"O %n","appMenuPreferences":"Preferencje","appMenuServices":"Usługi","appMenuHide":"Ukryj %n","appMenuHideOthers":"Ukryj pozostałe","appMenuShowAll":"Pokaż wszystko","appMenuQuit":"Zamknij %n","appMenuBringToFront":"Umieść wszystko na wierzchu","PDFPageCounter":{"unsafeHTML":"strona <input type='text'/> z <span id='total'></span>"},"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}},"pt-BR":{"name":"Português (Brasil)","identifier":"pt-BR","translations":{"openInNewTab":"Abrir em uma nova aba","openInNewPrivateTab":"Abrir em uma nova aba privada","viewImage":"Ver imagem","openImageInNewTab":"Abrir imagem em uma nova aba","openImageInNewPrivateTab":"Abrir imagem em uma nova aba privada","saveImageAs":"Salvar imagem como","searchWith":"Pesquisar com %s","copyLink":"Copiar link","copy":"Copiar","paste":"Colar","goBack":"Voltar","goForward":"Avançar","inspectElement":"Inspecionar elemento","DDGAnswerSubtitle":"Resposta","suggestedSite":"Site sugerido","resultsFromDDG":"Resultados do DuckDuckGo","taskN":"Tarefa %n","hostsFileEntry":"Arquivos no computador","viewSettings":"Ver configurações","viewReadingList":"Ver listas de leitura","takeScreenshot":"Capturar tela","clearHistory":"Limpar todo o histórico","switchToTask":"Trocar para a tarefa","createTask":"Criar uma tarefa","moveToTask":"Mover esta aba para uma tarefa","searchBookmarks":"Buscar nos favoritos","searchHistory":null,"openMenu":null,"enterReaderView":"Entrar no modo leitura","exitReaderView":"Sair do modo leitura","emptyReadingListTitle":"Sua lista de leitura está vazia","emptyReadingListSubtitle":"Artigos abertos no modo de leitura são listados aqui, e salvos offline por 30 dias.","newTabLabel":"Nova aba","connectionNotSecure":"Sua conexão com este site não é segura.","searchbarPlaceholder":"Busque ou digite um endereço","privateTab":"Aba privada","newTabAction":"Nova aba","viewTasks":"Ver tarefas","newTask":"Nova tarefa","defaultTaskName":"Tarefa %n","searchInPage":"Buscar na página","findMatchesSingular":"Ocorrência %i de %t","findMatchesPlural":"Ocorrência %i de %t","isFocusMode":"Você está no modo concentração.","closeDialog":"OK","focusModeExplanation1":"No modo concentração, todas as abas com exceção da atual ficam escondidas e você não pode criar novas abas.","focusModeExplanation2":"Você pode desativar o modo concentração desmarcando a caixa \"modo concentração\" no menu visualizar.","timeRangeJustNow":null,"timeRangeMinutes":null,"timeRangeHour":null,"timeRangeDay":null,"timeRangeWeek":null,"timeRangeMonth":null,"timeRangeYear":null,"timeRangeLongerAgo":null,"crashErrorTitle":"Ocorreu algo de errado.","crashErrorSubtitle":"Ocorreu um problema ao tentar mostrar esta página.","errorPagePrimaryAction":"Tentar novamente","serverNotFoundTitle":"Servidor não encontrado","serverNotFoundSubtitle":"Min não conseguiu achar este site.","archiveSearchAction":"Buscar em archive.org","sslErrorTitle":"Este site não está disponível","sslErrorMessage":"Min não conseguiu conectar-se de uma maneira segura a este site.","dnsErrorTitle":"Site não encontrado","dnsErrorMessage":"Ocorreu um erro de DNS.","offlineErrorTitle":"Você está offline","offlineErrorMessage":"Reconecte-se à Internet e tente novamente.","genericConnectionFail":"Min não conseguiu conectar-se ao site.","sslTimeErrorMessage":"Min não conseguiu conectar-se de uma maneira segura a este site. Por favor, verifique se o relógio do computador está correto.","addressInvalidTitle":"Este endereço é inválido.","genericError":"Ocorreu um erro","phishingErrorTitle":"Este site é perigoso.","phishingErrorMessage":"Este website pode estar tentando roubar suas informações pessoais, como senhas ou detalhes bancários.","phishingErrorVisitAnyway":"Visitar o site mesmo assim","phishingErrorLeave":"Sair deste site","multipleInstancesErrorMessage":null,"sessionRestoreErrorTitle":"Ocorreu um erro","sessionRestoreErrorExplanation":"Suas abas salvas não puderam ser restauradas corretamente.","sessionRestoreErrorBackupInfo":"Nós salvamos um backup dos seus dados em: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Se este erro continuar ocorrendo, por favor, abra um novo chamado <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">aqui</a>."},"settingsPreferencesHeading":"Preferências","settingsRestartRequired":"Você precisa reiniciar o navegador para aplicar estas mudanças.","settingsPrivacyHeading":"Bloqueio de Conteúdo","settingsContentBlockingToggle":"Bloquear rastreadores e propagandas","settingsBlockScriptsToggle":"Bloquear scripts","settingsBlockImagesToggle":"Bloquear imagens","settingsEasyListCredit":{"unsafeHTML":"Baseado em EasyList e EasyPrivacy, sem regras para ocultar elementos. Criado pelos <a target=\"_blank\" href=\"https://easylist.to/\">autores EasyList</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">ver licença</a>."},"settingsAppearanceHeading":"Aparência","settingsDarkModeToggle":"Habilitar modo noturno","settingsHistoryButtonToggle":"Habilitar botão voltar","settingsAdditionalFeaturesHeading":null,"settingsSwipeNavigationToggle":"Habilitar navegação por gestos para voltar e avançar entre páginas.","settingsUserscriptsToggle":null,"settingsUserscriptsExplanation":null,"settingsSearchEngineHeading":"Serviço de busca","settingsDefaultSearchEngine":"Escolha o serviço de busca padrão:","settingsDDGExplanation":"Defina DuckDuckGo como o serviço padrão de buscas para ver respostas instantâneas na barra de busca.","customSearchEngineDescription":null,"settingsKeyboardShortcutsHeading":"Teclas de atalho","settingsKeyboardShortcutsHelp":null,"appMenuFile":"Arquivo","appMenuNewTab":"Nova aba","appMenuDuplicateTab":null,"appMenuNewPrivateTab":"Nova aba privada","appMenuNewTask":"Nova tarefa","appMenuSavePageAs":"Salvar página como","appMenuPrint":"Imprimir","appMenuEdit":"Editar","appMenuUndo":"Desfazer","appMenuRedo":"Refazer","appMenuCut":"Cortar","appMenuCopy":"Copiar","appMenuPaste":"Colar","appMenuSelectAll":"Selecionar Tudo","appMenuFind":"Buscar","appMenuView":"Visualizar","appMenuZoomIn":"Ampliar","appMenuZoomOut":"Reduzir","appMenuActualSize":"Tamanho real","appMenuFullScreen":"Tela cheia","appMenuFocusMode":"Modo concentração","appMenuReadingList":"Lista de leitura","appMenuBookmarks":null,"appMenuHistory":null,"appMenuDeveloper":"Desenvolvedor","appMenuReloadBrowser":"Recarregar navegador","appMenuInspectBrowser":"Inspecionar navegador","appMenuInspectPage":"Inspecionar página","appMenuWindow":"Janela","appMenuMinimize":"Minimizar","appMenuClose":"Fechar","appMenuHelp":"Ajuda","appMenuKeyboardShortcuts":"Teclas de atalho","appMenuReportBug":"Reportar um Bug","appMenuTakeTour":"Fazer um Tour","appMenuViewGithub":"Ver no GitHub","appMenuAbout":"Sobre %n","appMenuPreferences":"Preferências","appMenuServices":"Serviços","appMenuHide":"Esconder %n","appMenuHideOthers":"Esconder o resto","appMenuShowAll":"Mostrar tudo","appMenuQuit":"Sair de %n","appMenuBringToFront":"Trazer tudo para a frente","PDFPageCounter":{"unsafeHTML":"página <input type='text'/> de <span id='total'></span>"},"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}},"pt-PT":{"name":"Portuguese (Portugal)","identifier":"pt-PT","translations":{"openInNewTab":"Abrir em novo separador","openInNewPrivateTab":"Abrir em novo separador privado","viewImage":"Ver imagem","openImageInNewTab":"Abrir imagem em novo separador","openImageInNewPrivateTab":"Abrir imagem em novo separador privado","saveImageAs":"Guardar imagem como","searchWith":"Pesquisar com %s","copyLink":"Copiar ligação","copy":"Copiar","paste":"Colar","goBack":"Recuar","goForward":"Avançar","inspectElement":"Inspecionar elemento","DDGAnswerSubtitle":"Resposta","suggestedSite":"Site sugerido","resultsFromDDG":"Resultados em DuckDuckGo","taskN":"Tarefa %n","hostsFileEntry":"Entrada do ficheiro 'hosts'","viewSettings":"Ver definições","viewReadingList":"Ver lista de leitura","takeScreenshot":"Obter captura de ecrã","clearHistory":"Limpar todo o histórico","switchToTask":"Trocar para a tarefa","createTask":"Criar tarefa","moveToTask":"Mover este separador para uma tarefa","searchBookmarks":"Pesquisar nos marcadores","searchHistory":"Pesquisar no histórico","openMenu":"Abrir menu","enterReaderView":"Ativar modo de leitura","exitReaderView":"Desativar modo de leitura","emptyReadingListTitle":"A lista de leitura está vazia","emptyReadingListSubtitle":"Os artigos abertos no modo de leitura serão listados e mantidos aqui durante 30 dias.","newTabLabel":"Novo separador","connectionNotSecure":"A ligação a este site não é segura.","searchbarPlaceholder":"Pesquisar ou digitar endereço","privateTab":"Separador privado","newTabAction":"Novo separador","viewTasks":"Ver tarefas","newTask":"Nova tarefa","defaultTaskName":"Tarefa %n","searchInPage":"Pesquisar na página","findMatchesSingular":"%i de %t ocorrência","findMatchesPlural":"%i de %t ocorrências","isFocusMode":"Está no modo de foco.","closeDialog":"OK","focusModeExplanation1":"Neste modo, todos os separadores estão ocultos à exceção do atual e não será possível criar novos separadores.","focusModeExplanation2":"Pode desativar este modo desmarcando a caixa \"Modo de foco\" no menu Ver.","timeRangeJustNow":"Agora mesmo","timeRangeMinutes":"Há alguns minutos","timeRangeHour":"Na última hora","timeRangeDay":"No último dia","timeRangeWeek":"Na última semana","timeRangeMonth":"No último mês","timeRangeYear":"No último ano","timeRangeLongerAgo":"Mais antigo","crashErrorTitle":"Algo errado aconteceu.","crashErrorSubtitle":"Ocorreu um erro ao tentar mostrar esta página.","errorPagePrimaryAction":"Tentar novamente","serverNotFoundTitle":"Servidor não encontrado","serverNotFoundSubtitle":"O Min não conseguiu encontrar este site.","archiveSearchAction":"Pesquisar em archive.org","sslErrorTitle":"Este site não está disponível","sslErrorMessage":"O Min não conseguiu estabelecer uma ligação segura a este site.","dnsErrorTitle":"Site não encontrado","dnsErrorMessage":"Ocorreu um erro de DNS.","offlineErrorTitle":"Está no modo off-line","offlineErrorMessage":"Ative o modo on-line e tente novamente.","genericConnectionFail":"O Min não conseguiu estabelecer a ligação ao site.","sslTimeErrorMessage":"O Min não conseguiu estabelecer uma ligação segura a este site. Verifique se a hora do computador está correta.","addressInvalidTitle":"Este endereço não é válido.","genericError":"Ocorreu um erro","phishingErrorTitle":"Este site pode ser perigoso.","phishingErrorMessage":"Este site pode estar a tentar obter informações pessoais, tais como palavras-passe ou informações bancárias.","phishingErrorVisitAnyway":"Aceder na mesma","phishingErrorLeave":"Sair do site","multipleInstancesErrorMessage":"Ocorreu um erro. Feche todas as instâncias abertas e reinicie o navegador.","sessionRestoreErrorTitle":"Ocorreu um erro","sessionRestoreErrorExplanation":"Não foi possível restaurar os separadores guardados.","sessionRestoreErrorBackupInfo":"Criámos um backup dos seus dados em: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Se este erro persistir, crie um relatório de erros <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">aqui</a>."},"settingsPreferencesHeading":"Preferências","settingsRestartRequired":"Tem que reiniciar o navegador para aplicar as alterações.","settingsPrivacyHeading":"Bloqueio de conteúdo","settingsContentBlockingToggle":"Bloquear rastreadores e anúncios","settingsBlockScriptsToggle":"Bloquear scripts","settingsBlockImagesToggle":"Bloquear imagens","settingsEasyListCredit":{"unsafeHTML":"Baseado em EasyList e EasyPrivacy, sem regras de ocultação de elementos. Criado por <a target=\"_blank\" href=\"https://easylist.to/\">The EasyList authors</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">ver licença</a>."},"settingsAppearanceHeading":"Aparência","settingsDarkModeToggle":"Ativar modo escuro","settingsHistoryButtonToggle":"Ativar botão para recuar","settingsAdditionalFeaturesHeading":"Outras funcionalidades","settingsSwipeNavigationToggle":"Ativar gestos para navegar entre as páginas visitadas.","settingsUserscriptsToggle":"Ativar scripts de utilizador","settingsUserscriptsExplanation":{"unsafeHTML":"Os scripts permitem-lhe alterar o comportamento dos sites - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">Saber mais</a>."},"settingsSearchEngineHeading":"Motor de pesquisa","settingsDefaultSearchEngine":"Escolha o motor de pesquisa padrão:","settingsDDGExplanation":"Defina DuckDuckGo como motor de pesquisa padrão para poder obter sugestões instantâneas na barra de pesquisa.","customSearchEngineDescription":"Substituir termo de pesquisa por %s","settingsKeyboardShortcutsHeading":"Teclas de atalho","settingsKeyboardShortcutsHelp":"Utilize vírgulas para separar os diversos atalhos","appMenuFile":"Ficheiro","appMenuNewTab":"Novo separador","appMenuDuplicateTab":"Duplicar separador","appMenuNewPrivateTab":"Novo separador privado","appMenuNewTask":"Nova tarefa","appMenuSavePageAs":"Guardar página como","appMenuPrint":"Imprimir","appMenuEdit":"Editar","appMenuUndo":"Desfazer","appMenuRedo":"Refazer","appMenuCut":"Cortar","appMenuCopy":"Copiar","appMenuPaste":"Colar","appMenuSelectAll":"Selecionar tudo","appMenuFind":"Localizar","appMenuView":"Ver","appMenuZoomIn":"Ampliar","appMenuZoomOut":"Reduzir","appMenuActualSize":"Tamanho real","appMenuFullScreen":"Ecrã completo","appMenuFocusMode":"Modo de foco","appMenuReadingList":"Lista de leitura","appMenuBookmarks":"Marcadores","appMenuHistory":"Histórico","appMenuDeveloper":"Programador","appMenuReloadBrowser":"Recarregar navegador","appMenuInspectBrowser":"Inspecionar navegador","appMenuInspectPage":"Inspecionar página","appMenuWindow":"Janela","appMenuMinimize":"Minimizar","appMenuClose":"Fechar","appMenuHelp":"Ajuda","appMenuKeyboardShortcuts":"Teclas de atalho","appMenuReportBug":"Reporte de erros","appMenuTakeTour":"Visão geral","appMenuViewGithub":"Ver em GitHub","appMenuAbout":"Acerca de %n","appMenuPreferences":"Preferências","appMenuServices":"Serviços","appMenuHide":"Ocultar %n","appMenuHideOthers":"Ocultar outras","appMenuShowAll":"Mostrar tudo","appMenuQuit":"Sair de %n","appMenuBringToFront":"Trazer tudo para a frente","PDFPageCounter":{"unsafeHTML":"página <input type='text'/> de <span id='total'></span>"},"downloadCancel":"Cancelar","downloadStateCompleted":"Terminada","downloadStateFailed":"Falhada"}},"ru":{"name":"Русский","identifier":"ru","translations":{"openInNewTab":"Открыть в новой вкладке","openInNewPrivateTab":"Открыть в приватной вкладке","viewImage":"Показать изображение","openImageInNewTab":"Открыть изображение в новой вкладке","openImageInNewPrivateTab":"Открыть изображение в приватной вкладке","saveImageAs":"Сохранить изображение как...","searchWith":"Искать в %s","copyLink":"Копировать ссылку","copy":"Копировать","paste":"Вставить","goBack":"Назад","goForward":"Вперёд","inspectElement":"Инспектировать элемент","DDGAnswerSubtitle":"Ответ","suggestedSite":"Предложенный сайт","resultsFromDDG":"Результаты из DuckDuckGo","taskN":"Задача %n","hostsFileEntry":"Запись из файла hosts","viewSettings":"Открыть настройки","viewReadingList":null,"takeScreenshot":"Сделать скриншот","clearHistory":"Очистить историю","switchToTask":"Переключиться на задачу","createTask":"Создать задачу","moveToTask":"Переместить эту вкладку в задачу","searchBookmarks":"Искать в закладках","searchHistory":null,"openMenu":null,"enterReaderView":"Включить режим чтения","exitReaderView":"Выключить режим чтения","emptyReadingListTitle":"Ваш список для чтения пуст","emptyReadingListSubtitle":"Статьи, которые вы открываете в режиме чтения, попадают в этот список и остаются доступными офлайн еще 30 дней.","newTabLabel":"Новая вкладка","connectionNotSecure":"Соединение с этим сайтом небезопасно.","searchbarPlaceholder":"Использовать поиск или ввести адрес","privateTab":"Приватная вкладка","newTabAction":"Новая вкладка","viewTasks":"Показать задачи","newTask":"Новая задача","defaultTaskName":"Задача %n","searchInPage":"Найти на странице","findMatchesSingular":"%i из %t","findMatchesPlural":"%i из %t","isFocusMode":"Вы в изолированном режиме","closeDialog":"OK","focusModeExplanation1":"В изолированном режиме все вкладки, кроме текущей, спрятаны, а создание новой — невозможно.","focusModeExplanation2":"Чтобы вернуться в нормальный режим, снимите флажок с пункта \"Изолированный режим\" в меню \"Вид\".","timeRangeJustNow":null,"timeRangeMinutes":null,"timeRangeHour":null,"timeRangeDay":null,"timeRangeWeek":null,"timeRangeMonth":null,"timeRangeYear":null,"timeRangeLongerAgo":null,"crashErrorTitle":"Что-то пошло не так.","crashErrorSubtitle":"При попытке отобразить эту страницу возникла ошибка.","errorPagePrimaryAction":"Попробовать снова","serverNotFoundTitle":"Сервер не найден","serverNotFoundSubtitle":"Min не смог найти этот сайт.","archiveSearchAction":"Искать в archive.org","sslErrorTitle":"Сайт недоступен","sslErrorMessage":"Min не смог безопасно соединиться с этим сайтом.","dnsErrorTitle":"Сайт не найден","dnsErrorMessage":"Произошла ошибка DNS.","offlineErrorTitle":"Отсутствует соединение с Интернетом","offlineErrorMessage":"Восстановите соединение и попробуйте снова.","genericConnectionFail":"Min не смог соединиться с сайтом.","sslTimeErrorMessage":"Min не смог безопасно соединиться с этим сайтом. Убедитесь, что ваши системные часы настроены правильно.","addressInvalidTitle":"Некорректный адрес.","genericError":"Произошла ошибка","phishingErrorTitle":"Этот сайт может вам навредить.","phishingErrorMessage":"Этот сайт может попытаться украсть ваши личные данные, такие как пароли и банковские данные.","phishingErrorVisitAnyway":"Все равно посетить сайт","phishingErrorLeave":"Уйти с сайта","multipleInstancesErrorMessage":null,"sessionRestoreErrorTitle":"Произошла ошибка","sessionRestoreErrorExplanation":"Ваши сохранённые вкладки не могут быть корректно восстановлены.","sessionRestoreErrorBackupInfo":"Мы сохранили резервную копию ваших данных по этому адресу: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Если эта ошибка продолжает появляться, пожалуйста, сообщите о ней <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">сюда</a>."},"settingsPreferencesHeading":"Настройки","settingsRestartRequired":"Для применения этих изменений необходимо перезапустить браузер.","settingsPrivacyHeading":"Блокирование содержимого","settingsContentBlockingToggle":"Блокировать программы слежения и рекламу","settingsBlockScriptsToggle":"Блокировать скрипты","settingsBlockImagesToggle":"Блокировать изображения","settingsEasyListCredit":{"unsafeHTML":"Основано на списках \"EasyList\" и \"EasyPrivacy\" (без правил для скрытия элементов). Создано <a target=\"_blank\" href=\"https://easylist.to/\">авторами \"EasyList\"</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">посмотреть лицензионное соглашение</a>."},"settingsAppearanceHeading":"Внешний вид","settingsDarkModeToggle":"Использовать тёмную тему","settingsHistoryButtonToggle":null,"settingsAdditionalFeaturesHeading":null,"settingsSwipeNavigationToggle":"Включить навигацию свайпом для перехода вперёд и назад по страницам.","settingsUserscriptsToggle":null,"settingsUserscriptsExplanation":null,"settingsSearchEngineHeading":"Поиск","settingsDefaultSearchEngine":"Выберите поиск по умолчанию:","settingsDDGExplanation":"Чтобы видеть мгновенные ответы в строке поиска, установите DuckDuckGo поисковиком по умолчанию.","customSearchEngineDescription":null,"settingsKeyboardShortcutsHeading":"Горячие клавиши","settingsKeyboardShortcutsHelp":null,"appMenuFile":"Файл","appMenuNewTab":"Новая вкладка","appMenuDuplicateTab":null,"appMenuNewPrivateTab":"Новая приватная вкладка","appMenuNewTask":"Новая задача","appMenuSavePageAs":"Сохранить страницу как...","appMenuPrint":"Печать","appMenuEdit":"Правка","appMenuUndo":"Отменить","appMenuRedo":"Повторить","appMenuCut":"Вырезать","appMenuCopy":"Копировать","appMenuPaste":"Вставить","appMenuSelectAll":"Выделить всё","appMenuFind":"Найти","appMenuView":"Вид","appMenuZoomIn":"Увеличить масштаб","appMenuZoomOut":"Уменьшить масштаб","appMenuActualSize":"Масштаб 100%","appMenuFullScreen":"Полноэкранный режим","appMenuFocusMode":"Изолированный режим","appMenuReadingList":"Список для чтения","appMenuBookmarks":null,"appMenuHistory":null,"appMenuDeveloper":"Разработка","appMenuReloadBrowser":"Перезагрузить браузер","appMenuInspectBrowser":"Инспектировать браузер","appMenuInspectPage":"Инспектировать страницу","appMenuWindow":"Окно","appMenuMinimize":"Свернуть","appMenuClose":"Закрыть","appMenuHelp":"Помощь","appMenuKeyboardShortcuts":"Горячие клавиши","appMenuReportBug":"Сообщить об ошибке","appMenuTakeTour":"Экскурсия по браузеру","appMenuViewGithub":"Мы на GitHub","appMenuAbout":"О %n","appMenuPreferences":"Настройки","appMenuServices":"Услуги","appMenuHide":"Скрыть %n","appMenuHideOthers":"Скрыть остальное","appMenuShowAll":"Показать всё","appMenuQuit":"Выйти из %n","appMenuBringToFront":"Переместить всё на передний план","PDFPageCounter":null,"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}},"tr-TR":{"name":"Turkish (Turkey)","identifier":"tr-TR","translations":{"openInNewTab":"Yeni Pencerede Aç","openInNewPrivateTab":"Yeni Özel Sekmede Aç","viewImage":"Resim Göster","openImageInNewTab":"Resmi Yeni Sekmede Aç","openImageInNewPrivateTab":"Resmi Yeni Özel Sekmede Aç","saveImageAs":"Resmi Farklı Kaydet","searchWith":"%s ile ara","copyLink":"Linki Kopyala","copy":"Kopyala","paste":"Yapıştır","goBack":"Geri Git","goForward":"İleri Git","inspectElement":"Öğeyi İncele","DDGAnswerSubtitle":"Cevap","suggestedSite":"Önerilen site","resultsFromDDG":"DuckDuckGo'dan sonuçlar","taskN":"Task %n","hostsFileEntry":"Hosts dosya girişi","viewSettings":"Görünüm Ayarları","viewReadingList":"Okuma Listesini Görüntüle","takeScreenshot":"Ekran görüntüsü al","clearHistory":"Tüm Geçmişi Temizle","switchToTask":"Göreve geç","createTask":"Görev oluştur","moveToTask":"Bu sekmeyi bir göreve taşı","searchBookmarks":"Yer işaretlerini ara","searchHistory":null,"openMenu":null,"enterReaderView":"Okuyucu görünümüne girin","exitReaderView":"Okuyucu görünümünden çıkın","emptyReadingListTitle":"Okuma listeniz boş","emptyReadingListSubtitle":"Okuyucu görünümünde açtığınız makaleler burada listelenir ve 30 gün boyunca çevrimdışına kaydedilir.","newTabLabel":"New Tab","connectionNotSecure":"Bu web sitesine bağlantınız güvenli değil.","searchbarPlaceholder":"Arayın veya adres girin","privateTab":"Özel Sekme","newTabAction":"Yeni Sekme","viewTasks":"Görevleri Görüntüle","newTask":"Yeni Görev","defaultTaskName":"%n Görev","searchInPage":"Sayfada Ara","findMatchesSingular":"%i of %t match","findMatchesPlural":"%i of %t matches","isFocusMode":"Odak Modundasınız.","closeDialog":"Tamam","focusModeExplanation1":"Odaklama modunda, geçerli olanın dışındaki tüm sekmeler gizlenir ve yeni sekmeler oluşturamazsınız.","focusModeExplanation2":"Görüntüleme modunda \"Odak Modu\" nun işaretini kaldırarak netleme modundan çıkabilirsiniz.","timeRangeJustNow":null,"timeRangeMinutes":null,"timeRangeHour":null,"timeRangeDay":null,"timeRangeWeek":null,"timeRangeMonth":null,"timeRangeYear":null,"timeRangeLongerAgo":null,"crashErrorTitle":"Bir şeyler yanlış gitti.","crashErrorSubtitle":"Bu sayfayı görüntülerken bir sorun oluştu.","errorPagePrimaryAction":"Tekrar deneyin","serverNotFoundTitle":"Sunucu bulunamadı","serverNotFoundSubtitle":"Min bu web sitesini bulamadı.","archiveSearchAction":"archive.org'da ara","sslErrorTitle":"Bu web sitesi mevcut değildir","sslErrorMessage":"Min bu siteye güvenli bir şekilde bağlanamadı.","dnsErrorTitle":"Web sitesi bulunamadı","dnsErrorMessage":"Bir DNS hatası oluştu.","offlineErrorTitle":"Çevrimdışısınız","offlineErrorMessage":"İnternete yeniden bağlanın ve tekrar deneyin.","genericConnectionFail":"Min web sitesine bağlanılamadı.","sslTimeErrorMessage":"Min bu siteye güvenli bir şekilde bağlanamadı. Lütfen bilgisayarınızın saatinin doğru ayarlandığından emin olun.","addressInvalidTitle":"Bu adres geçersiz.","genericError":"Bir hata oluştu","phishingErrorTitle":"Bu site size zarar verebilir.","phishingErrorMessage":"Bu web sitesi, parola veya banka bilgileri gibi kişisel bilgilerinizi çalmaya çalışıyor olabilir.","phishingErrorVisitAnyway":"Siteyi yine de ziyaret et","phishingErrorLeave":"Bu siteden ayrıl","multipleInstancesErrorMessage":null,"sessionRestoreErrorTitle":"Bir hata oluştu","sessionRestoreErrorExplanation":"Kaydedilen sekmeleriniz doğru bir şekilde geri yüklenemedi.","sessionRestoreErrorBackupInfo":"Verilerinizin bir yedeğini bu konumda kaydettik: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Bu hata oluşmaya devam ederse, lütfen yeni bir sorun açın <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">buradan</a>."},"settingsPreferencesHeading":"Tercihler","settingsRestartRequired":"Bu değişiklikleri uygulamak için yeniden başlatmanız gerekiyor.","settingsPrivacyHeading":"İçerik Engelleme","settingsContentBlockingToggle":"İzleyicileri ve reklamları engelle","settingsBlockScriptsToggle":"Scriptleri engelle","settingsBlockImagesToggle":"Resimleri engelle","settingsEasyListCredit":{"unsafeHTML":"Unsuru gizleme kuralları olmadan, EasyList ve EasyPrivacy'e dayanarak. Created by <a target=\"_blank\" href=\"https://easylist.to/\">The EasyList authors</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">view license</a>."},"settingsAppearanceHeading":"Görünüm","settingsDarkModeToggle":"Koyu modu etkinleştir","settingsHistoryButtonToggle":"Geri al düğmesini etkinleştir","settingsAdditionalFeaturesHeading":null,"settingsSwipeNavigationToggle":"Sayfalar arasında ileri ve geri gitmek için kaydırmayı etkinleştirin.","settingsUserscriptsToggle":null,"settingsUserscriptsExplanation":null,"settingsSearchEngineHeading":"Arama Motoru","settingsDefaultSearchEngine":"Bir varsayılan arama motoru seçi:","settingsDDGExplanation":"Arama çubuğundaki anlık yanıtları görmek için DuckDuckGo’yu varsayılan arama motoru olarak ayarlayın.","customSearchEngineDescription":null,"settingsKeyboardShortcutsHeading":"Klavye Kısayolları","settingsKeyboardShortcutsHelp":"Birden çok kısayolu ayırmak için virgül kullanın.","appMenuFile":"Dosya","appMenuNewTab":"Yeni Sekme","appMenuDuplicateTab":null,"appMenuNewPrivateTab":"Yeni Özel Sekme","appMenuNewTask":"Yeni Görev","appMenuSavePageAs":"Sayfayı Farklı Kaydet","appMenuPrint":"Yazdır","appMenuEdit":"Düzen","appMenuUndo":"Geri","appMenuRedo":"İleri","appMenuCut":"Kes","appMenuCopy":"Kopyala","appMenuPaste":"Yapıştır","appMenuSelectAll":"Tümünü Seç","appMenuFind":"Bul","appMenuView":"Görünüm","appMenuZoomIn":"Yakınlaştır","appMenuZoomOut":"Uzaklaştır","appMenuActualSize":"Gerçek Boyut","appMenuFullScreen":"Tam Ekran","appMenuFocusMode":"Odak Modu","appMenuReadingList":"Okuma Listesi","appMenuBookmarks":null,"appMenuHistory":null,"appMenuDeveloper":"Geliştirici","appMenuReloadBrowser":"Tarayıcıyı Yeniden Yükle","appMenuInspectBrowser":"Tarayıcıyı İncele","appMenuInspectPage":"Sayfayı İncele","appMenuWindow":"Pencere","appMenuMinimize":"Küçült","appMenuClose":"Kapat","appMenuHelp":"Yardım","appMenuKeyboardShortcuts":"Klavye Kısayolları","appMenuReportBug":"Hata Bildir","appMenuTakeTour":"Tur atın","appMenuViewGithub":"GitHub'da Göster","appMenuAbout":"%n Hakkında","appMenuPreferences":"Seçenekler","appMenuServices":"Servisler","appMenuHide":"Hide %n","appMenuHideOthers":"Hide Others","appMenuShowAll":"Tümünü Göster","appMenuQuit":"%n Çıkış","appMenuBringToFront":"Tümünü Öne Getir","PDFPageCounter":{"unsafeHTML":"sayfa <input type='text'/> of <span id='total'></span>"},"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}},"zh-CN":{"name":"中文 (简体中文)","identifier":"zh-CN","translations":{"openInNewTab":"在新标签页打开","openInNewPrivateTab":"在新隐私标签页中打开","viewImage":"查看图片","openImageInNewTab":"在新标签页中打开图片","openImageInNewPrivateTab":"在新的隐私标签页中打开图片","saveImageAs":"图片另存为","searchWith":"在 %s 中搜索","copyLink":"复制链接","copy":"复制","paste":"粘贴","goBack":"后退","goForward":"前进","inspectElement":"查看元素","DDGAnswerSubtitle":"搜索结果","suggestedSite":"建议站点","resultsFromDDG":"DuckDuckGo 返回的结果","taskN":"标签组 %n","hostsFileEntry":"宿主机文件","viewSettings":"查看设置界面","viewReadingList":"显示阅读列表","takeScreenshot":"截图","clearHistory":"清除所有历史记录","switchToTask":"切换到标签组列表","createTask":"新建标签组","moveToTask":"以当前标签页创建一个新的标签组","searchBookmarks":"搜索书签内容","searchHistory":null,"openMenu":null,"enterReaderView":"进入阅读模式","exitReaderView":"退出阅读模式","emptyReadingListTitle":"您的阅读列表为空","emptyReadingListSubtitle":"您在阅读器模式下打开过的文章，将显示在此处，并离线保存 30 天。","newTabLabel":"新标签页","connectionNotSecure":"你与此站点建立的连接并不安全。","searchbarPlaceholder":"输入搜索内容或网站地址","privateTab":"隐私标签页","newTabAction":"新建标签页","viewTasks":"查看标签组","newTask":"新建标签组","defaultTaskName":"标签组 %n","searchInPage":"搜索当前页","findMatchesSingular":"%i/%t","findMatchesPlural":"%i/%t","isFocusMode":"当前处于焦点模式","closeDialog":"确定","focusModeExplanation1":"在焦点模式中，隐藏除当前标签页之外的其它所有标签页，且不能新建标签页。","focusModeExplanation2":"您可以通过菜单\"视图->焦点模式\"退出焦点模式。","timeRangeJustNow":"几秒前","timeRangeMinutes":"几分钟前","timeRangeHour":"几小时前","timeRangeDay":"几天前","timeRangeWeek":"几星期前","timeRangeMonth":"几个月前","timeRangeYear":"几年前","timeRangeLongerAgo":"很久以前","crashErrorTitle":"发生故障。","crashErrorSubtitle":"渲染页面时，发生错误。","errorPagePrimaryAction":"重试","serverNotFoundTitle":"未找到服务器","serverNotFoundSubtitle":"Min 无法找到当前地址的服务器。","archiveSearchAction":"从 archive.org 搜索内容","sslErrorTitle":"当前站点是无效的","sslErrorMessage":"Min 不能与当前站点建立安全连接。","dnsErrorTitle":"站点未找到","dnsErrorMessage":"发生 DNS 错误。","offlineErrorTitle":"您处于离线状态","offlineErrorMessage":"重新连接网络并重试。","genericConnectionFail":"Min 无法连接到站点。","sslTimeErrorMessage":"Min 无法安全地连接到当前站点。请确保您的电脑时钟是否正确。","addressInvalidTitle":"无效的地址。","genericError":"发生错误","phishingErrorTitle":"这是一个危险网站。","phishingErrorMessage":"这个站点可能会窃取您的个人信息，如密码或银行信息。","phishingErrorVisitAnyway":"继续访问","phishingErrorLeave":"离开","multipleInstancesErrorMessage":"发生错误。请关闭其他视窗并重启 Min 浏览器","sessionRestoreErrorTitle":"发生错误","sessionRestoreErrorExplanation":"您保存的标签页未能正确恢复。","sessionRestoreErrorBackupInfo":"我们将您的数据备份保存在：%l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"如果持续发生此错误，请在<a href=\"https://github.com/minbrowser/min\" target=\"_blank\">此处</a>报告错误信息。"},"settingsPreferencesHeading":"设置","settingsRestartRequired":"您需要重启以应用这些修改","settingsPrivacyHeading":"隐私设置","settingsContentBlockingToggle":"禁用跟踪和广告","settingsBlockScriptsToggle":"阻止脚本运行","settingsBlockImagesToggle":"阻止加载图片","settingsEasyListCredit":{"unsafeHTML":"基于 EasyList 和 EasyPrivacy. <a target=\"_blank\" href=\"https://easylist.to/\">The EasyList authors</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">view license</a>."},"settingsAppearanceHeading":"外观","settingsDarkModeToggle":"启用夜间模式","settingsHistoryButtonToggle":"启用返回键","settingsAdditionalFeaturesHeading":"其他功能","settingsSwipeNavigationToggle":"允许通过手势在页面上进行前进和后退操作。","settingsUserscriptsToggle":"允许使用者指令","settingsUserscriptsExplanation":{"unsafeHTML":"使用者指令允许您改变网站行为 - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">查看更多</a>."},"settingsSearchEngineHeading":"搜索引擎","settingsDefaultSearchEngine":"选择默认的搜索引擎:","settingsDDGExplanation":"将 DuckDuckGo 设为默认的搜索引擎可以直接在搜索栏查看搜索结果。","customSearchEngineDescription":null,"settingsKeyboardShortcutsHeading":"快捷键","settingsKeyboardShortcutsHelp":null,"appMenuFile":"文件","appMenuNewTab":"新标签页","appMenuDuplicateTab":null,"appMenuNewPrivateTab":"新的隐私标签页","appMenuNewTask":"新标签组","appMenuSavePageAs":"页面另存为","appMenuPrint":"打印","appMenuEdit":"编辑","appMenuUndo":"复原","appMenuRedo":"重做","appMenuCut":"剪切","appMenuCopy":"复制","appMenuPaste":"粘贴","appMenuSelectAll":"全选","appMenuFind":"查找","appMenuView":"查看","appMenuZoomIn":"放大","appMenuZoomOut":"缩小","appMenuActualSize":"实际大小","appMenuFullScreen":"全屏","appMenuFocusMode":"焦点模式","appMenuReadingList":"阅读列表","appMenuBookmarks":"书签","appMenuHistory":"历史","appMenuDeveloper":"开发","appMenuReloadBrowser":"重新加载浏览器","appMenuInspectBrowser":"切换开发人员工具","appMenuInspectPage":"查看页面元素","appMenuWindow":"窗口","appMenuMinimize":"最小化","appMenuClose":"关闭","appMenuHelp":"帮助","appMenuKeyboardShortcuts":"快捷键","appMenuReportBug":"报告 Bug","appMenuTakeTour":"使用手册","appMenuViewGithub":"GitHub","appMenuAbout":"关于 %n","appMenuPreferences":"设置","appMenuServices":"服务","appMenuHide":"隐藏 %n","appMenuHideOthers":"隐藏其它","appMenuShowAll":"全部显示","appMenuQuit":"退出 %n","appMenuBringToFront":"前置所有窗口","PDFPageCounter":{"unsafeHTML":"<input type='text'/> / <span id='total'></span> 页"},"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}},"zh-TW":{"name":"中文 (繁體中文)","identifier":"zh-TW","translations":{"openInNewTab":"在新分頁中開啟","openInNewPrivateTab":"在新無痕頁面中開啟","viewImage":"查看圖片","openImageInNewTab":"在新分頁中開啟圖片","openImageInNewPrivateTab":"在新無痕頁面中開啟圖片","saveImageAs":"儲存圖片","searchWith":"以 %s 搜尋","copyLink":"複製連結","copy":"複製","paste":"貼上","goBack":"上一頁","goForward":"下一頁","inspectElement":"檢查元素","DDGAnswerSubtitle":"搜尋結果","suggestedSite":"建議網站","resultsFromDDG":"來自 DuckDuckGo 的結果","taskN":"任務 %n","hostsFileEntry":"Host 文件","viewSettings":"查看設定","viewReadingList":"查看閱讀清單","takeScreenshot":"螢幕截圖","clearHistory":"清除所有歷史","switchToTask":"切換至任務","createTask":"新增任務","moveToTask":"移動至任務","searchBookmarks":"搜尋書籤","searchHistory":"搜尋歷史","openMenu":"打開選單","enterReaderView":"進入閱讀模式","exitReaderView":"退出閱讀模式","emptyReadingListTitle":"您的閱讀列表是空的","emptyReadingListSubtitle":"您的閱讀清單會顯示於此，並保留30天","newTabLabel":"新分頁","connectionNotSecure":"此網頁不安全","searchbarPlaceholder":"搜尋或輸入網址","privateTab":"無痕分頁","newTabAction":"新增分頁","viewTasks":"查看任務","newTask":"新增任務","defaultTaskName":"任務 %n","searchInPage":"在頁面中尋找","findMatchesSingular":"%i / %t","findMatchesPlural":"%i / %t","isFocusMode":"已進入專心模式","closeDialog":"確定","focusModeExplanation1":"在專心模式，只會顯示正在瀏覽的分頁，且不能新增分頁。","focusModeExplanation2":"您可以取消勾選 \"選單 > 檢視 > 專心模式\" 退出專心模式。","timeRangeJustNow":"剛剛","timeRangeMinutes":"幾分鐘前","timeRangeHour":"幾小時前","timeRangeDay":"幾天前","timeRangeWeek":"幾星期前","timeRangeMonth":"幾個月前","timeRangeYear":"幾年前","timeRangeLongerAgo":"很久以前","crashErrorTitle":"出了一些問題","crashErrorSubtitle":"顯示此頁面時發生了一些問題","errorPagePrimaryAction":"重試","serverNotFoundTitle":"找不到伺服器","serverNotFoundSubtitle":"Min 找不到這個網站","archiveSearchAction":"在 archive.org 上搜尋","sslErrorTitle":"這個網站不存在","sslErrorMessage":"Min 無法與此網站建立安全連線","dnsErrorTitle":"找不到這個網站","dnsErrorMessage":"發生 DNS 錯誤","offlineErrorTitle":"沒有網際網路連線","offlineErrorMessage":"重新連線至網路再試一次","genericConnectionFail":"Min 無法連線至這個網站","sslTimeErrorMessage":"Min 無法安全地連線到此網站，請確認時間是否設定正確","addressInvalidTitle":"網址錯誤","genericError":"發生了一些問題","phishingErrorTitle":"這個網站可能有危險","phishingErrorMessage":"這個網站可能會駭取你的個人資料，像是密碼和銀行資訊","phishingErrorVisitAnyway":"還是繼續","phishingErrorLeave":"離開","multipleInstancesErrorMessage":"發生了一些問題，請關閉其他分頁然後重新啟動 Min","sessionRestoreErrorTitle":"發生錯誤","sessionRestoreErrorExplanation":"上次瀏覽的分頁無法回復","sessionRestoreErrorBackupInfo":"我們將您的資料備份儲存在：%l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"如果持續發生此錯誤，請至<a href=\"https://github.com/minbrowser/min\" target=\"_blank\">此頁面</a>報告錯誤"},"settingsPreferencesHeading":"設定","settingsRestartRequired":"重新啟動以套用變更","settingsPrivacyHeading":"隱私設定","settingsContentBlockingToggle":"封鎖跟蹤與廣告","settingsBlockScriptsToggle":"封鎖 javascript 腳本運行","settingsBlockImagesToggle":"封鎖圖片","settingsEasyListCredit":{"unsafeHTML":"基於 EasyList 和 EasyPrivacy. <a target=\"_blank\" href=\"https://easylist.to/\">The EasyList authors</a> - <a target=\"_blank\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\">view license</a>."},"settingsAppearanceHeading":"外觀","settingsDarkModeToggle":"啟用夜間模式","settingsHistoryButtonToggle":"啟用返回鍵","settingsAdditionalFeaturesHeading":"其他功能","settingsSwipeNavigationToggle":"允許通過手勢在頁面上進行上一頁和下一頁的操作","settingsUserscriptsToggle":"允許使用者指令","settingsUserscriptsExplanation":{"unsafeHTML":"使用者指令允許您改變網站的行為 - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">查看更多</a>."},"settingsSearchEngineHeading":"搜索引擎","settingsDefaultSearchEngine":"選擇預設的搜索引擎：","settingsDDGExplanation":"將 DuckDuckGo 設為預設的搜索引擎可以直接在網址欄查看搜尋結果","customSearchEngineDescription":"將搜尋字串以 %s 取代","settingsKeyboardShortcutsHeading":"快速鍵","settingsKeyboardShortcutsHelp":"以逗號分割多個快速鍵","appMenuFile":"檔案","appMenuNewTab":"新分頁","appMenuDuplicateTab":null,"appMenuNewPrivateTab":"新無痕分頁","appMenuNewTask":"新任務","appMenuSavePageAs":"另存網頁","appMenuPrint":"列印","appMenuEdit":"編輯","appMenuUndo":"復原","appMenuRedo":"重做","appMenuCut":"剪下","appMenuCopy":"複製","appMenuPaste":"貼上","appMenuSelectAll":"全選","appMenuFind":"尋找","appMenuView":"檢視","appMenuZoomIn":"放大","appMenuZoomOut":"縮小","appMenuActualSize":"原始大小","appMenuFullScreen":"全螢幕","appMenuFocusMode":"專心模式","appMenuReadingList":"閱讀清單","appMenuBookmarks":"書籤","appMenuHistory":"歷史","appMenuDeveloper":"偵錯","appMenuReloadBrowser":"重新載入瀏覽器","appMenuInspectBrowser":"切換開發人員工具","appMenuInspectPage":"檢查網頁元素","appMenuWindow":"視窗","appMenuMinimize":"最小化","appMenuClose":"關閉","appMenuHelp":"幫助","appMenuKeyboardShortcuts":"快速鍵","appMenuReportBug":"提交 Bug","appMenuTakeTour":"導覽","appMenuViewGithub":"在 GitHub 上查看","appMenuAbout":"關於 %n","appMenuPreferences":"設定","appMenuServices":"服務","appMenuHide":"隱藏 %n","appMenuHideOthers":"隱藏其他","appMenuShowAll":"顯示全部","appMenuQuit":"結束 %n","appMenuBringToFront":"顯示所有窗口","PDFPageCounter":{"unsafeHTML":"<input type='text'/> / <span id='total'></span> 頁"},"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null}}};
/* provides helper functions for using localized strings */

/*
translations are compiled into here by running "npm run build" in this format

var languages = {
    en-US: {name: "English (United States), identifier: "en-US", translations: {...}}
}

*/

function getCurrentLanguage () {
  // TODO add a setting to change the language to something other than the default

  var language = 'en-US' // default

  if (typeof navigator !== 'undefined') { // renderer process
    language = navigator.language
  } else if (typeof app !== 'undefined') { // main process
    language = app.getLocale()
  } else {
    // nothing worked, fall back to default
  }

  return language
}

var userLanguage = null

function l (stringId) {
  if (!userLanguage) {
    userLanguage = getCurrentLanguage()
  }

  // get the translated string for the given ID

  // try to use the string for the user's language
  if (languages[userLanguage] && languages[userLanguage].translations[stringId]) {
    return languages[userLanguage].translations[stringId]
  } else {
    // fallback to en-US
    return languages['en-US'].translations[stringId]
  }
}

/* for static HTML pages
insert a localized string into all elements with a [data-string] attribute
set the correct attributes for all elements with a [data-label] attribute
 */

if (typeof document !== 'undefined') {
  document.querySelectorAll('[data-string]').forEach(function (el) {
    var str = l(el.getAttribute('data-string'))
    if (typeof str === 'string') {
      el.textContent = str
    } else if (str && str.unsafeHTML && el.hasAttribute('data-allowHTML')) {
      el.innerHTML = str.unsafeHTML
    }
  })
  document.querySelectorAll('[data-label]').forEach(function (el) {
    var str = l(el.getAttribute('data-label'))
    if (typeof str === 'string') {
      el.setAttribute('title', str)
      el.setAttribute('aria-label', str)
    } else {
      throw new Error('invalid data-label value: ' + str)
    }
  })
}
if (typeof window !== 'undefined') {
  window.l = l
  window.userLanguage = userLanguage
  window.getCurrentLanguage = getCurrentLanguage
}
;
window.electron = window.require('electron')
window.fs = window.require('fs')
window.ipc = electron.ipcRenderer
window.remote = electron.remote
window.Dexie = require('dexie')

window.webFrame = window.electron.webFrame
window.webFrame.setVisualZoomLevelLimits(1, 1)
window.webFrame.setLayoutZoomLevelLimits(0, 0)

require('menuBarVisibility.js').initialize()
require('navbar/tabActivity.js').init()
require('downloadManager.js').initialize()

// add a class to the body for fullscreen status

ipc.on('enter-full-screen', function () {
  document.body.classList.add('fullscreen')
})

ipc.on('leave-full-screen', function () {
  document.body.classList.remove('fullscreen')
})

if (navigator.platform === 'MacIntel') {
  document.body.classList.add('mac')
  window.platformType = 'mac'
} else if (navigator.platform === 'Win32') {
  document.body.classList.add('windows')
  window.platformType = 'windows'
} else {
  document.body.classList.add('linux')
  window.platformType = 'linux'
}

if (window.platformType === 'windows') {
  ipc.on('maximize', function () {
    document.body.classList.add('maximized')
  })

  ipc.on('unmaximize', function () {
    document.body.classList.remove('maximized')
  })
}

// https://remysharp.com/2010/07/21/throttling-function-calls

function throttle (fn, threshhold, scope) {
  threshhold || (threshhold = 250)
  var last,
    deferTimer
  return function () {
    var context = scope || this

    var now = +new Date
    var args = arguments
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshhold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}

// https://remysharp.com/2010/07/21/throttling-function-calls

function debounce (fn, delay) {
  var timer = null
  return function () {
    var context = this
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

window.empty = function (node) {
  var n
  while (n = node.firstElementChild) {
    node.removeChild(n)
  }
}

/* prevent a click event from firing after dragging the window */

window.addEventListener('load', function () {
  var isMouseDown = false
  var isDragging = false
  var distance = 0

  document.body.addEventListener('mousedown', function () {
    isMouseDown = true
    isDragging = false
    distance = 0
  })

  document.body.addEventListener('mouseup', function () {
    isMouseDown = false
  })

  var dragHandles = document.getElementsByClassName('windowDragHandle')

  for (var i = 0; i < dragHandles.length; i++) {
    dragHandles[i].addEventListener('mousemove', function (e) {
      if (isMouseDown) {
        isDragging = true
        distance += Math.abs(e.movementX) + Math.abs(e.movementY)
      }
    })
  }

  document.body.addEventListener('click', function (e) {
    if (isDragging && distance >= 10.0) {
      e.stopImmediatePropagation()
      isDragging = false
    }
  }, true)
})
;
var captionMinimise =
document.querySelector('.windows-caption-buttons .caption-minimise, body.linux .titlebar-linux .caption-minimise')

var captionMaximise =
document.querySelector('.windows-caption-buttons .caption-maximise, body.linux .titlebar-linux .caption-maximise')

var captionRestore =
document.querySelector('.windows-caption-buttons .caption-restore, body.linux .titlebar-linux .caption-restore')

var captionClose =
document.querySelector('.windows-caption-buttons .caption-close, body.linux .titlebar-linux .caption-close')

var windowIsMaximised = false
var windowIsFullscreen = false

function updateCaptionButtons () {
  if (windowIsMaximised || windowIsFullscreen) {
    captionMaximise.hidden = true
    captionRestore.hidden = false
  } else {
    captionMaximise.hidden = false
    captionRestore.hidden = true
  }
}

if (navigator.platform === 'Win32') {
  updateCaptionButtons()

  captionMinimise.addEventListener('click', function (e) {
    remote.getCurrentWindow().minimize()
  })

  captionMaximise.addEventListener('click', function (e) {
    remote.getCurrentWindow().maximize()
  })

  captionRestore.addEventListener('click', function (e) {
    if (windowIsFullscreen) {
      remote.getCurrentWindow().setFullScreen(false)
    } else {
      remote.getCurrentWindow().restore()
    }
  })

  captionClose.addEventListener('click', function (e) {
    remote.getCurrentWindow().close()
  })

  ipc.on('maximize', function (e) {
    windowIsMaximised = true
    updateCaptionButtons()
  })
  ipc.on('unmaximize', function (e) {
    windowIsMaximised = false
    updateCaptionButtons()
  })
  ipc.on('enter-full-screen', function (e) {
    windowIsFullscreen = true
    updateCaptionButtons()
  })
  ipc.on('leave-full-screen', function (e) {
    windowIsFullscreen = false
    updateCaptionButtons()
  })
}
;
// defines schema for the browsingData database
// requires Dexie.min.js

if (typeof Dexie === 'undefined' && typeof require !== 'undefined') {
  var Dexie = require('dexie')
}

var db = new Dexie('browsingData')

var dbErrorMessage = 'Internal error opening backing store for indexedDB.open'
var dbErrorAlertShown = false

// Min 1.1.0-1.3.1
db.version(3).stores({
  bookmarks: 'url, title, text, extraData', // url must come first so it is the primary key
  history: 'url, title, color, visitCount, lastVisit, extraData', // same thing
  readingList: 'url, time, visitCount, pageHTML, article, extraData', // article is the object from readability
  settings: 'key, value' // key is the name of the setting, value is an object
})

// Min >= 1.4.0
db.version(4).stores({
  /*
  color - the main color of the page, extracted from the page icon
  pageHTML - a saved copy of the page's HTML, when it was last visited. Removed in 1.6.0, so all pages visited after then will have an empty string in this field.
  extractedText - the text content of the page, extracted from pageHTML. Unused as of 1.7.0, should be removed completely in a future version.
  searchIndex - an array of words on the page (created from extractedText), used for full-text searchIndex
  isBookmarked - whether the page is a bookmark
  extraData - other metadata about the page
  */
  places: 'url, title, color, visitCount, lastVisit, pageHTML, extractedText, *searchIndex, isBookmarked, metadata',
  readingList: 'url, time, visitCount, pageHTML, article, extraData', // article is the object from readability
  settings: 'key, value', // key is the name of the setting, value is an object
})
  // upgrade from v3 to v4
  .upgrade(function (t) {
    // upgrade history items

    t.history.each(function (historyItem) {
      t.places.put({
        url: historyItem.url,
        title: historyItem.title,
        color: historyItem.color,
        visitCount: historyItem.visitCount,
        lastVisit: historyItem.lastVisit,
        // data not stored in the old database schema
        pageHTML: '',
        extractedText: '',
        searchIndex: [],
        // the old history table did not contain bookmarks
        isBookmarked: false,
        metadata: (historyItem.extraData || {}).metadata || {}
      })
    }).then(function () {

      // upgrade bookmarks

      t.bookmarks.each(function (bookmark) {
        // t.places.add cannot be used, since an item with the bookmark's url might already exist as a history item
        t.places.put({
          url: bookmark.url,
          title: bookmark.title,
          color: '',
          visitCount: 1,
          lastVisit: 1,
          pageHTML: '',
          extractedText: bookmark.text,
          searchIndex: bookmark.text.trim().toLowerCase().replace(/[^\w\s]/g, ' ').split(/\s+/g),
          isBookmarked: true,
          metadata: (bookmark.extraData || {}).metadata || {}
        })
      })
    })

    // remove the old history and bookmarks tables

  // t.bookmarks.toCollection().delete()
  // t.history.toCollection().delete()
  })

// TODO set the value of the bookmarks and history tables to null in a future version to delete them - see https://github.com/dfahlander/Dexie.js/issues/276

db.open().then(function () {
  console.log('database opened ', performance.now())
})

Dexie.Promise.on('error', function (error) {
  console.warn('database error occured', error)

  if (error.message.indexOf(dbErrorMessage) !== -1 && !dbErrorAlertShown) {
    window && window.alert && window.alert(l('multipleInstancesErrorMessage'))
    remote.app.quit()

    dbErrorAlertShown = true
  }
})

if (typeof module !== 'undefined') {
  module.exports = db
}
;
var defaultKeyMap = {
  'addPrivateTab': 'shift+mod+p',
  'toggleTasks': 'shift+mod+e',
  'goBack': 'mod+left',
  'goForward': 'mod+right',
  'enterEditMode': ['mod+l', 'mod+k'],
  'completeSearchbar': 'mod+enter',
  'closeTab': 'mod+w',
  'restoreTab': 'shift+mod+t',
  'gotoFirstTab': 'shift+mod+9',
  'gotoLastTab': 'mod+9',
  'addToFavorites': 'mod+d',
  'toggleReaderView': 'shift+mod+r',
  'switchToNextTab': ['option+mod+right', 'ctrl+tab', 'shift+mod+pagedown'],
  'switchToPreviousTab': ['option+mod+left', 'shift+ctrl+tab', 'shift+mod+pageup'],
  'switchToNextTask': 'mod+]',
  'switchToPreviousTask': 'mod+[',
  'closeAllTabs': 'shift+mod+n',
  'reload': 'mod+r',
  'showAndHideMenuBar': 'alt',
  'followLink': 'mod+enter'
}
/* Utility function to override default mapping with user settings */
function userKeyMap (settings) {
  var keyMapCopy = Object.assign({}, defaultKeyMap)
  if (settings) {
    // override the default keymap by the user defined ones
    Object.keys(keyMapCopy).forEach(function (key) {
      if (settings[key]) {
        keyMapCopy[key] = settings[key]
      }
    })
  }
  return keyMapCopy
}
;
/*
gets and sets settings
requires Dexie and util/database.js
*/

if (typeof db === 'undefined' && typeof require !== 'undefined') {
  var db = require('util/database.js')
}

var settings = {
  loaded: false,
  list: {},
  onLoadCallbacks: [],
  get: function (key, cb, options) {
    var isCacheable = !options || options.fromCache !== false

    // get the setting from the cache if possible
    if (settings.loaded && isCacheable) {
      cb(settings.list[key])

    // if the settings haven't loaded, wait until they have
    } else if (isCacheable) {
      settings.onLoadCallbacks.push({
        key: key,
        cb: cb
      })

    // the setting can't be cached, get it from the database
    } else {
      db.settings.where('key').equals(key).first(function (item) {
        if (item) {
          cb(item.value)
        } else {
          cb(null)
        }
      })
    }
  },
  set: function (key, value, cb) {
    db.settings.put({
      key: key,
      value: value
    }).then(function () {
      settings.list[key] = value
      if (cb) {
        cb()
      }
    })
  },
  delete: function (key, cb) {
    db.settings.where('key').equals(key).delete()
      .then(function () {
        delete settings.list[key]
        if (cb) {
          cb()
        }
      })
  },
  load: function () {
    db.settings.each(function (setting) {
      settings.list[setting.key] = setting.value
    }).then(function () {
      settings.loaded = true

      settings.onLoadCallbacks.forEach(function (item) {
        item.cb(settings.list[item.key])
      })

      settings.onLoadCallbacks = []
    })
  },
  onLoad: function (cb) {
    if (settings.loaded) {
      cb()
    } else {
      settings.onLoadCallbacks.push({
        key: '',
        cb: cb
      })
    }
  }
}

settings.load()

if (typeof module !== 'undefined') {
  module.exports = settings
}
;
const TaskList  = require("tabState/task.js")

function initializeTabState () {
  window.tasks = new TaskList()
  window.currentTask = undefined
  window.tabs = undefined
}

initializeTabState()
;
// gets the tracking settings and sends them to the main process

settings.get('filtering', function (settings) {
  ipc.send('setFilteringSettings', settings)
})

function registerFiltering (ses) {
  ipc.send('registerFiltering', ses)
}
;
var browserUI = require('browserUI.js')
const previewCache = require('previewCache.js')
var getView = remote.getGlobal('getView')
var urlParser = require('util/urlParser.js')

/* implements selecting webviews, switching between them, and creating new ones. */

var placeholderImg = document.getElementById('webview-placeholder')

var windowIsMaximized = false // affects navbar height on Windows
var windowIsFullscreen = false // TODO track this for each individual webContents

function lazyRemoteObject (getObject) {
  var cachedItem = null
  return new Proxy({}, {
    get: function (obj, prop) {
      if (!cachedItem) {
        cachedItem = getObject()
      }
      return cachedItem[prop]
    }
  })
}

function forceUpdateDragRegions () {
  setTimeout(function () {
    // manually force the drag regions to update to work around https://github.com/electron/electron/issues/14038
    var d = document.createElement('div')
    d.setAttribute('style', '-webkit-app-region:drag; width: 1px; height: 1px;')
    document.body.appendChild(d)
    setTimeout(function () {
      document.body.removeChild(d)
    }, 100)
  }, 100)
}

// the permissionRequestHandler used for webviews
function pagePermissionRequestHandler (webContents, permission, callback) {
  if (permission === 'notifications' || permission === 'fullscreen') {
    callback(true)
  } else {
    callback(false)
  }
}

function captureCurrentTab (options) {
  if (webviews.placeholderRequests.length > 0 && !(options && options.forceCapture === true)) {
    // capturePage doesn't work while the view is hidden
    return
  }

  ipc.send('getCapture', {
    id: webviews.selectedId,
    width: Math.round(window.innerWidth / 10),
    height: Math.round(window.innerHeight / 10)
  })
}

function updateBackButton () {
  if (!tabs.get(tabs.getSelected()).url) {
    goBackButton.disabled = true
    return
  }
  webviews.callAsync(tabs.getSelected(), 'canGoBack', null, function (canGoBack) {
    goBackButton.disabled = !canGoBack
  })
}

// set the permissionRequestHandler for non-private tabs

remote.session.defaultSession.setPermissionRequestHandler(pagePermissionRequestHandler)

// called whenever a new page starts loading, or an in-page navigation occurs
function onPageURLChange (tab, url) {
  // if the page is an error page, the URL is really the value of the "url" query parameter
  if (url.startsWith(webviews.internalPages.error)) {
    url = new URLSearchParams(new URL(url).search).get('url')
  }

  if (url.indexOf('https://') === 0 || url.indexOf('about:') === 0 || url.indexOf('chrome:') === 0 || url.indexOf('file://') === 0) {
    tabs.update(tab, {
      secure: true,
      url: url
    })
  } else {
    tabs.update(tab, {
      secure: false,
      url: url
    })
  }
}

// called whenever the page finishes loading
function onPageLoad (e) {
  var tab = webviews.getTabFromContents(this)

  webviews.callAsync(tab, 'getURL', null, function (url) {
    // capture a preview image if a new page has been loaded
    if (tab === tabs.getSelected() && tabs.get(tab).url !== url) {
      setTimeout(function () {
        // sometimes the page isn't visible until a short time after the did-finish-load event occurs
        captureCurrentTab()
      }, 100)
    }

    onPageURLChange(tab, url)

    tabBar.rerenderTab(tab)

    updateBackButton()
  })
}

// called whenever a navigation finishes
function onNavigate (e, url, httpResponseCode, httpStatusText) {
  var tab = webviews.getTabFromContents(this)
  onPageURLChange(tab, url)
  updateBackButton()
}

window.webviews = {
  tabViewMap: {}, // tabId: browserView
  tabContentsMap: {}, // tabId: webContents
  selectedId: null,
  placeholderRequests: [],
  asyncCallbacks: {},
  internalPages: {
    error: urlParser.getFileURL(__dirname + '/pages/error/index.html')
  },
  events: [],
  eventCount: 0,
  IPCEvents: [],
  bindEvent: function (event, fn, options) {
    webviews.eventCount++
    webviews.events.push({
      event: event,
      fn: fn,
      options: options,
      id: webviews.eventCount
    })
  },
  bindIPC: function (name, fn) {
    webviews.IPCEvents.push({
      name: name,
      fn: fn
    })
  },
  viewMargins: [0, 0, 0, 0], // top, right, bottom, left
  adjustMargin: function (margins) {
    for (var i = 0; i < margins.length; i++) {
      webviews.viewMargins[i] += margins[i]
    }
    webviews.resize()
  },
  getViewBounds: function () {
    if (windowIsFullscreen) {
      return {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
    } else {
      if (window.platformType === 'windows' && !windowIsMaximised) {
        var navbarHeight = 46
      } else {
        var navbarHeight = 36
      }

      const viewMargins = webviews.viewMargins
      return {
        x: 0 + viewMargins[3],
        y: 0 + viewMargins[0] + navbarHeight,
        width: window.innerWidth - (viewMargins[1] + viewMargins[3]),
        height: window.innerHeight - (viewMargins[0] + viewMargins[2]) - navbarHeight
      }
    }
  },
  add: function (tabId) {
    var tabData = tabs.get(tabId)

    // if the tab is private, we want to partition it. See http://electron.atom.io/docs/v0.34.0/api/web-view-tag/#partition
    // since tab IDs are unique, we can use them as partition names
    if (tabs.get(tabId).private === true) {
      var partition = tabId.toString() // options.tabId is a number, which remote.session.fromPartition won't accept. It must be converted to a string first

      // register permissionRequestHandler for this tab
      // private tabs use a different session, so the default permissionRequestHandler won't apply

      remote.session.fromPartition(partition).setPermissionRequestHandler(pagePermissionRequestHandler)

      // enable ad/tracker/contentType blocking in this tab if needed

      registerFiltering(partition)
    }

    ipc.send('createView', {
      id: tabId,
      webPreferencesString: JSON.stringify({
        webPreferences: {
          nodeIntegration: false,
          scrollBounce: true,
          preload: __dirname + '/dist/preload.js',
          allowPopups: false,
          partition: partition
        }
      }),
      boundsString: JSON.stringify(webviews.getViewBounds()),
      events: webviews.events
    })

    let view = lazyRemoteObject(function () {
      return getView(tabId)
    })

    let contents = lazyRemoteObject(function () {
      return getView(tabId).webContents
    })

    if (tabData.url) {
      webviews.callAsync(tabData.id, 'loadURL', tabData.url)
    }

    webviews.tabViewMap[tabId] = view
    webviews.tabContentsMap[tabId] = contents
    return view
  },
  setSelected: function (id, options) { // options.focus - whether to focus the view. Defaults to true.
    webviews.selectedId = id

    // create the view if it doesn't already exist
    if (!webviews.getView(id)) {
      webviews.add(id)
    }

    updateBackButton()

    if (webviews.placeholderRequests.length > 0) {
      return
    }

    ipc.send('setView', {
      id: id,
      bounds: webviews.getViewBounds(),
      focus: !options || options.focus !== false
    })

    forceUpdateDragRegions()
  },
  update: function (id, url) {
    webviews.callAsync(id, 'loadURL', urlParser.parse(url))
  },
  destroy: function (id) {
    var w = webviews.tabViewMap[id]
    if (w) {
      ipc.send('destroyView', id)
    }
    delete webviews.tabViewMap[id]
    delete webviews.tabContentsMap[id]
    if (webviews.selectedId === id) {
      webviews.selectedId = null
    }
  },
  getView: function (id) {
    return webviews.tabViewMap[id]
  },
  get: function (id) {
    return webviews.tabContentsMap[id]
  },
  requestPlaceholder: function (reason) {
    if (!webviews.placeholderRequests.includes(reason)) {
      webviews.placeholderRequests.push(reason)
    }
    if (webviews.placeholderRequests.length === 1) {
      // create a new placeholder

      var img = previewCache.get(webviews.selectedId)
      var associatedTab = tabs.get(webviews.selectedId)
      if (img) {
        placeholderImg.src = img
        placeholderImg.hidden = false
      } else if (associatedTab && associatedTab.url && associatedTab.url !== 'about:blank') {
        captureCurrentTab({forceCapture: true})
      } else {
        placeholderImg.hidden = true
      }
    }
    setTimeout(function () {
      ipc.send('hideCurrentView')
    }, 0)
  },
  hidePlaceholder: function (reason) {
    webviews.placeholderRequests.splice(webviews.placeholderRequests.indexOf(reason), 1)

    if (webviews.placeholderRequests.length === 0) {
      // multiple things can request a placeholder at the same time, but we should only show the view again if nothing requires a placeholder anymore
      if (webviews.tabViewMap[webviews.selectedId]) {
        ipc.send('setView', {
          id: webviews.selectedId,
          bounds: webviews.getViewBounds(),
          focus: true
        })
        forceUpdateDragRegions()
      }
      // wait for the view to be visible before removing the placeholder
      setTimeout(function () {
        if (webviews.placeholderRequests.length === 0) { // make sure the placeholder hasn't been re-enabled
          placeholderImg.hidden = true
        }
      }, 400)
    }
  },
  getTabFromContents: function (contents) {
    for (let tabId in webviews.tabContentsMap) {
      if (webviews.tabContentsMap[tabId] === contents) {
        return tabId
      }
    }
    return null
  },
  releaseFocus: function () {
    ipc.send('focusMainWebContents')
  },
  focus: function () {
    if (webviews.selectedId) {
      ipc.send('focusView', webviews.selectedId)
    }
  },
  resize: function () {
    ipc.send('setBounds', {id: webviews.selectedId, bounds: webviews.getViewBounds()})
  },
  callAsync: function (id, method, args, callback) {
    if (!(args instanceof Array)) {
      args = [args]
    }
    if (callback) {
      var callId = Math.random()
      webviews.asyncCallbacks[callId] = callback
    }
    ipc.send('callViewMethod', {id: id, callId: callId, method: method, args: args})
  }
}

webviews.bindEvent('new-window', function (e, url, frameName, disposition) {
  var tab = webviews.getTabFromContents(this)
  var currentIndex = tabs.getIndex(tabs.getSelected())

  var newTab = tabs.add({
    url: url,
    private: tabs.get(tab).private // inherit private status from the current tab
  }, currentIndex + 1)
  browserUI.addTab(newTab, {
    enterEditMode: false,
    openInBackground: disposition === 'background-tab' // possibly open in background based on disposition
  })
}, {preventDefault: true})

window.addEventListener('resize', throttle(function () {
  if (webviews.placeholderRequests.length > 0) {
    // can't set view bounds if the view is hidden
    return
  }
  webviews.resize()
}, 75))

ipc.on('enter-html-full-screen', function () {
  windowIsFullscreen = true
  webviews.resize()
})

ipc.on('leave-html-full-screen', function () {
  windowIsFullscreen = false
  webviews.resize()
})

ipc.on('maximize', function () {
  windowIsMaximised = true
  webviews.resize()
})

ipc.on('unmaximize', function () {
  windowIsMaximised = false
  webviews.resize()
})

webviews.bindEvent('did-finish-load', onPageLoad)
webviews.bindEvent('did-navigate-in-page', onPageLoad)
webviews.bindEvent('did-navigate', onNavigate)

webviews.bindEvent('page-title-updated', function (e, title, explicitSet) {
  var tab = webviews.getTabFromContents(this)
  tabs.update(tab, {
    title: title
  })
  tabBar.rerenderTab(tab)
})

webviews.bindEvent('did-fail-load', function (e, errorCode, errorDesc, validatedURL, isMainFrame) {
  if (errorCode && errorCode !== -3 && isMainFrame && validatedURL) {
    browserUI.navigate(webviews.getTabFromContents(this), webviews.internalPages.error + '?ec=' + encodeURIComponent(errorCode) + '&url=' + encodeURIComponent(validatedURL))
  }
})

webviews.bindEvent('crashed', function (e, isKilled) {
  var tabId = webviews.getTabFromContents(this)
  var url = tabs.get(tabId).url

  tabs.update(tabId, {
    url: webviews.internalPages.error + '?ec=crash&url=' + encodeURIComponent(url)
  })

  // the existing process has crashed, so we can't reuse it
  webviews.destroy(tabId)
  webviews.add(tabId)

  if (tabId === tabs.getSelected()) {
    webviews.setSelected(tabId)
  }
})

webviews.bindIPC('close-window', function (webview, tabId, args) {
  browserUI.closeTab(tabId)
})

ipc.on('view-event', function (e, args) {
  if (!webviews.tabViewMap[args.viewId]) {
    // the view could have been destroyed between when the event was occured and when it was recieved in the UI process, see https://github.com/minbrowser/min/issues/604#issuecomment-419653437
    return
  }
  webviews.events.forEach(function (ev) {
    if (ev.id === args.eventId) {
      ev.fn.apply(webviews.tabContentsMap[args.viewId], [e].concat(args.args))
    }
  })
})

ipc.on('async-call-result', function (e, args) {
  webviews.asyncCallbacks[args.callId](args.data)
  delete webviews.asyncCallbacks[args.callId]
})

ipc.on('view-ipc', function (e, args) {
  if (!webviews.tabViewMap[args.id]) {
    // the view could have been destroyed between when the event was occured and when it was recieved in the UI process, see https://github.com/minbrowser/min/issues/604#issuecomment-419653437
    return
  }
  webviews.IPCEvents.forEach(function (item) {
    if (item.name === args.name) {
      item.fn(webviews.tabContentsMap[args.id], args.id, [args.data])
    }
  })
})

setInterval(function () {
  captureCurrentTab()
}, 30000)

ipc.on('captureData', function (e, data) {
  previewCache.set(data.id, data.url)
  if (data.id === webviews.selectedId && webviews.placeholderRequests.length > 0) {
    placeholderImg.src = data.url
    placeholderImg.hidden = false
  }
})

/* focus the view when the window is focused */

ipc.on('windowFocus', function () {
  if (document.activeElement === document.body) {
    webviews.focus()
  }
})
;
/* redirects to the phishing warning page when a message is recieved from the webview */

var browserUI = require('browserUI.js')

var phishingWarningPage = 'file://' + __dirname + '/pages/phishing/index.html'

webviews.bindIPC('phishingDetected', function (webview, tabId, args) {
  var url = webview.getURL()

  try {
    var hostname = new URL(url).hostname
    var redirectURL = phishingWarningPage + '?url=' + encodeURIComponent(url) + '&info=' + encodeURIComponent(args[0].join('\n'))
  } catch (e) {
    var hostname = ''
    var redirectURL = phishingWarningPage
  }

  settings.get('phishingWhitelist', function (value) {
    if (!value || !hostname || value.indexOf(hostname) === -1) {
      // show the warning page
      browserUI.navigate(tabId, redirectURL)
    }
  }, {
    fromCache: false
  })
})
;
var browserUI = require('browserUI.js')
var searchEngine = require('util/searchEngine.js')

var Menu, MenuItem, clipboard // these are only loaded when the menu is shown

var webviewMenu = {
  showMenu: function (data) { // data comes from a context-menu event
    if (!Menu || !MenuItem || !clipboard) {
      Menu = remote.Menu
      MenuItem = remote.MenuItem
      clipboard = remote.clipboard
    }

    var menu = new Menu()
    var currentTab = tabs.get(tabs.getSelected())

    var menuSections = []

    /* links */

    var link = data.linkURL || data.frameURL

    var image = data.srcURL

    if (link) {
      var linkActions = [
        new MenuItem({
          label: (link.length > 60) ? link.substring(0, 60) + '...' : link,
          enabled: false
        })
      ]

      if (!currentTab.private) {
        linkActions.push(new MenuItem({
          label: l('openInNewTab'),
          click: function () {
            browserUI.addTab(tabs.add({ url: link }, tabs.getIndex(tabs.getSelected()) + 1), { enterEditMode: false })
          }
        }))
      }

      linkActions.push(new MenuItem({
        label: l('openInNewPrivateTab'),
        click: function () {
          browserUI.addTab(tabs.add({ url: link, private: true }, tabs.getIndex(tabs.getSelected()) + 1), { enterEditMode: false })
        }
      }))

      menuSections.push(linkActions)
    } else if (image) {
      /* images */
      /* we don't show the image actions if there are already link actions, because it makes the menu too long and because the image actions typically aren't very useful if the image is a link */

      var imageActions = [
        new MenuItem({
          label: (image.length > 60) ? image.substring(0, 60) + '...' : image,
          enabled: false
        })
      ]

      imageActions.push(new MenuItem({
        label: l('viewImage'),
        click: function () {
          browserUI.navigate(tabs.getSelected(), image)
        }
      }))

      if (!currentTab.private) {
        imageActions.push(new MenuItem({
          label: l('openImageInNewTab'),
          click: function () {
            browserUI.addTab(tabs.add({ url: image }, tabs.getIndex(tabs.getSelected()) + 1), { enterEditMode: false })
          }
        }))
      }

      imageActions.push(new MenuItem({
        label: l('openImageInNewPrivateTab'),
        click: function () {
          browserUI.addTab(tabs.add({ url: image, private: true }, tabs.getIndex(tabs.getSelected()) + 1), { enterEditMode: false })
        }
      }))

      menuSections.push(imageActions)

      menuSections.push([
        new MenuItem({
          label: l('saveImageAs'),
          click: function () {
            remote.getCurrentWebContents().downloadURL(image)
          }
        })
      ])
    }

    /* selected text */

    var selection = data.selectionText

    if (selection) {
      var textActions = [
        new MenuItem({
          label: l('searchWith').replace('%s', searchEngine.getCurrent().name),
          click: function () {
            var newTab = tabs.add({
              url: searchEngine.getCurrent().searchURL.replace('%s', encodeURIComponent(selection)),
              private: currentTab.private
            }, tabs.getIndex(tabs.getSelected()) + 1)
            browserUI.addTab(newTab, {
              enterEditMode: false
            })

            webviews.get(newTab).focus()
          }
        })
      ]
      menuSections.push(textActions)
    }

    var clipboardActions = []

    if (link || image) {
      clipboardActions.push(new MenuItem({
        label: l('copyLink'),
        click: function () {
          clipboard.writeText(link || image)
        }
      }))
    }

    if (selection) {
      clipboardActions.push(new MenuItem({
        label: l('copy'),
        click: function () {
          clipboard.writeText(selection)
        }
      }))
    }

    if (data.editFlags && data.editFlags.canPaste) {
      clipboardActions.push(new MenuItem({
        label: l('paste'),
        click: function () {
          webviews.get(tabs.getSelected()).paste()
        }
      }))
    }

    if (clipboardActions.length !== 0) {
      menuSections.push(clipboardActions)
    }

    var navigationActions = [
      new MenuItem({
        label: l('goBack'),
        click: function () {
          try {
            webviews.get(tabs.getSelected()).goBack()
          } catch (e) {}
        }
      }),
      new MenuItem({
        label: l('goForward'),
        click: function () {
          try {
            webviews.get(tabs.getSelected()).goForward()
          } catch (e) {}
        }
      })
    ]

    menuSections.push(navigationActions)

    /* inspect element */
    menuSections.push([
      new MenuItem({
        label: l('inspectElement'),
        click: function () {
          webviews.get(tabs.getSelected()).inspectElement(data.x || 0, data.y || 0)
        }
      })
    ])

    menuSections.forEach(function (section) {
      section.forEach(function (item) {
        menu.append(item)
      })
      menu.append(new MenuItem({ type: 'separator' }))
    })

    menu.popup(remote.getCurrentWindow())
  }
}

webviews.bindEvent('context-menu', function (e, data) {
  webviewMenu.showMenu(data)
})
;
var searchbar = require('searchbar/searchbar.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')
var searchbarAutocomplete = require('searchbar/searchbarAutocomplete.js')
var urlParser = require('util/urlParser.js')

var places = require('places/places.js')

var currentResponseSent = 0

var previousPlacesResults = {} // used to avoid duplicating results between places and fullTextPlaces

function showSearchbarPlaceResults (text, input, event, container, pluginName = 'places') {
  var responseSent = Date.now()

  if (pluginName === 'fullTextPlaces') {
    var searchFn = places.searchPlacesFullText
    var resultCount = 4 - searchbarPlugins.getResultCount('places')
  } else {
    var searchFn = places.searchPlaces
    var resultCount = 4
  }

  var hasAutocompleted = false

  searchFn(text, function (results) {

    // prevent responses from returning out of order
    if (responseSent < currentResponseSent) {
      return
    }

    currentResponseSent = responseSent

    // remove a previous top answer

    var placesTopAnswer = searchbarPlugins.getTopAnswer(pluginName)

    if (placesTopAnswer && !hasAutocompleted) {
      placesTopAnswer.remove()
    }

    // clear previous results
    empty(container)

    if (pluginName === 'fullTextPlaces') {
      // avoid showing results that are already being shown by the regular places plugin
      // this assumes that places runs before fullTextPlaces
      if (previousPlacesResults.text === text) {
        results = results.filter(r => previousPlacesResults.results.indexOf(r.url) === -1)
      }
    }

    results = results.slice(0, resultCount)

    results.forEach(function (result) {
      // only autocomplete an item if the delete key wasn't pressed, and nothing has been autocompleted already
      if (event && event.keyCode !== 8 && !hasAutocompleted) {
        var autocompletionType = searchbarAutocomplete.autocompleteURL(result, input)

        if (autocompletionType !== -1) {
          hasAutocompleted = true
        }

        if (autocompletionType === 0) { // the domain was autocompleted, show a domain result item
          var domain = new URL(result.url).hostname

          searchbarPlugins.setTopAnswer(pluginName, searchbarUtils.createItem({
            title: domain,
            url: domain,
            classList: ['fakefocus']
          }))
        }
      }

      var data = {
        title: urlParser.prettyURL(result.url),
        secondaryText: searchbarUtils.getRealTitle(result.title),
        url: result.url,
        delete: function () {
          places.deleteHistory(result.url)
        }
      }

      // show a star for bookmarked items
      if (result.isBookmarked) {
        data.icon = 'fa-star'
      }

      // show the metadata for the item

      if (result.metadata) {
        data.metadata = []

        for (var md in result.metadata) {
          data.metadata.push(result.metadata[md])
        }
      }

      // create the item

      var item = searchbarUtils.createItem(data)

      if (autocompletionType === 1) { // if this exact URL was autocompleted, show the item as the top answer
        item.classList.add('fakefocus')
        searchbarPlugins.setTopAnswer(pluginName, item)
      } else {
        container.appendChild(item)
      }
    })

    searchbarPlugins.addResults(pluginName, results.length)
    if (pluginName === 'places') {
      previousPlacesResults = {text, results: results.map(r => r.url)}
    }
  })
}

searchbarPlugins.register('places', {
  index: 1,
  trigger: function (text) {
    return !!text && text.indexOf('!') !== 0
  },
  showResults: showSearchbarPlaceResults
})

searchbarPlugins.register('fullTextPlaces', {
  index: 2,
  trigger: function (text) {
    return !!text && text.indexOf('!') !== 0
  },
  showResults: debounce(function () {
    if (searchbarPlugins.getResultCount('places') < 4 && searchbar.associatedInput) {
      showSearchbarPlaceResults.apply(this, Array.from(arguments).concat('fullTextPlaces'))
    } else {
      // can't show results, clear any previous ones
      empty(arguments[3])
    }
  }, 200)
})
;
var searchbar = require('searchbar/searchbar.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')

var urlParser = require('util/urlParser.js')
var searchEngine = require('util/searchEngine.js')

function removeTags (text) {
  return text.replace(/<.*?>/g, '')
}

function showSearchbarInstantAnswers (text, input, event, container) {
  // only make requests to the DDG api if DDG is set as the search engine
  if (searchEngine.getCurrent().name !== 'DuckDuckGo') {
    return
  }

  // don't make a request if the searchbar has already closed

  if (!searchbar.associatedInput) {
    return
  }

  fetch('https://api.duckduckgo.com/?t=min&skip_disambig=1&no_redirect=1&format=json&q=' + encodeURIComponent(text)).then(function (data) {
    return data.json()
  }).then(function (res) {
    empty(container)

    // if there is a custom format for the answer, use that
    if (instantAnswers[res.AnswerType]) {
      var item = instantAnswers[res.AnswerType](text, res.Answer)

    // use the default format
    } else if (res.Abstract || (res.Answer && typeof res.Answer === 'string')) {
      var data = {
        title: (typeof res.Answer === 'string' && removeTags(res.Answer)) || removeTags(res.Heading),
        descriptionBlock: res.Abstract || l('DDGAnswerSubtitle'),
        attribution: ddgAttribution,
        url: res.AbstractURL || text
      }

      if (res.Image && !res.ImageIsLogo) {
        data.image = res.Image
      }

      var item = searchbarUtils.createItem(data)

    // show a disambiguation
    } else if (res.RelatedTopics) {
      res.RelatedTopics.slice(0, 3).forEach(function (item) {
        // the DDG api returns the entity name inside an <a> tag
        var entityName = item.Result.replace(/.*>(.+?)<.*/g, '$1')

        // the text starts with the entity name, remove it
        var desc = item.Text.replace(entityName, '')

        // try to convert the given url to a wikipedia link
        var entityNameRegex = /https:\/\/duckduckgo.com\/([a-zA-Z0-9\)\(_%]+)$/

        if (entityNameRegex.test(item.FirstURL)) {
          var url = 'https://wikipedia.org/wiki/' + entityNameRegex.exec(item.FirstURL)[1]
        } else {
          var url = item.FirstURL
        }

        var item = searchbarUtils.createItem({
          title: entityName,
          descriptionBlock: desc,
          url: url
        })

        container.appendChild(item)
      })

      searchbarPlugins.addResults('instantAnswers', Math.min(res.RelatedTopics.length, 3))
    }

    if (item) {
      // answers are more relevant, they should be displayed at the top
      if (res.Answer) {
        searchbarPlugins.setTopAnswer('instantAnswers', item)
      } else {
        container.appendChild(item)
      }
      searchbarPlugins.addResults('instantAnswers', 1)
    }

    // suggested site links
    if (searchbarPlugins.getResultCount() < 4 && res.Results && res.Results[0] && res.Results[0].FirstURL) {
      var url = res.Results[0].FirstURL

      var data = {
        icon: 'fa-globe',
        title: urlParser.basicURL(url),
        secondaryText: l('suggestedSite'),
        url: url,
        classList: ['ddg-answer']
      }

      var item = searchbarUtils.createItem(data)

      container.appendChild(item)
      searchbarPlugins.addResults('instantAnswers', 1)
    }

    // if we're showing a location, show a "Search on OpenStreetMap" link

    var entitiesWithLocations = ['location', 'country', 'u.s. state', 'protected area']

    if (entitiesWithLocations.indexOf(res.Entity) !== -1) {
      var item = searchbarUtils.createItem({
        icon: 'fa-search',
        title: res.Heading,
        secondaryText: l('searchWith').replace('%s', 'OpenStreetMap'),
        classList: ['ddg-answer'],
        url: 'https://www.openstreetmap.org/search?query=' + encodeURIComponent(res.Heading)
      })

      container.insertBefore(item, container.firstChild)
      searchbarPlugins.addResults('instantAnswers', 1)
    }
  }).catch(function (e) {
    console.error(e)
  })
}

searchbarPlugins.register('instantAnswers', {
  index: 3,
  trigger: function (text) {
    return text.length > 3 && !urlParser.isURLMissingProtocol(text) && !tabs.get(tabs.getSelected()).private
  },
  showResults: debounce(showSearchbarInstantAnswers, 300)
})

// custom instant answers

var instantAnswers = {
  color_code: function (searchText, answer) {
    var item = searchbarUtils.createItem({
      title: searchText,
      descriptionBlock: answer.replace(/\n/g, ' · ').replace(/\s~\s/g, ' · '),
      attribution: ddgAttribution
    })

    var rgb = answer.split(' ~ ').filter(function (format) {
      return format.startsWith('RGBA')
    })

    if (rgb[0]) {
      var colorCircle = document.createElement('div')
      colorCircle.className = 'image color-circle'
      colorCircle.style.backgroundColor = rgb[0]

      item.insertBefore(colorCircle, item.firstChild)
    }

    return item
  },
  figlet: function (searchText, answer) {
    var formattedAnswer = removeTags(answer).replace('Font: standard', '')

    var item = searchbarUtils.createItem({
      descriptionBlock: formattedAnswer,
      attribution: ddgAttribution
    })

    var block = item.querySelector('.description-block')

    // display the data correctly
    block.style.whiteSpace = 'pre-wrap'
    block.style.fontFamily = 'monospace'
    block.style.maxHeight = '10em'
    block.style.webkitUserSelect = 'auto'

    return item
  },
  currency_in: function (searchText, answer) {
    var title = ''
    if (typeof answer === 'string') { // there is only one currency
      title = answer
    } else { // multiple currencies
      var currencyArr = []
      for (var countryCode in answer) {
        currencyArr.push(answer[countryCode] + ' (' + countryCode + ')')
      }

      title = currencyArr.join(', ')
    }

    if (answer.data) {
      var descriptionBlock = answer.data.title
    } else {
      var descriptionBlock = l('DDGAnswerSubtitle')
    }

    var item = searchbarUtils.createItem({
      title: title,
      descriptionBlock: descriptionBlock,
      attribution: ddgAttribution
    })

    return item
  }
}
;
var browserUI = require('browserUI.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')
var urlParser = require('util/urlParser.js')

var stringScore = require('string_score')

var searchOpenTabs = function (text, input, event, container) {
  empty(container)

  var matches = []
  var searchText = text.toLowerCase()
  var currentTab = currentTask.tabs.getSelected()

  tasks.forEach(function (task) {
    task.tabs.get().forEach(function (tab) {
      if (tab.id === currentTab || !tab.title || tab.url === 'about:blank') {
        return
      }

      var tabUrl = urlParser.basicURL(tab.url) // don't search protocols

      var exactMatch = tab.title.toLowerCase().indexOf(searchText) !== -1 || tabUrl.toLowerCase().indexOf(searchText) !== -1
      var fuzzyTitleScore = tab.title.substring(0, 50).score(text, 0.5)
      var fuzzyUrlScore = tabUrl.score(text, 0.5)

      if (exactMatch || fuzzyTitleScore > 0.4 || fuzzyUrlScore > 0.4) {
        matches.push({
          task: task,
          tab: tab,
          score: fuzzyTitleScore + fuzzyUrlScore
        })
      }
    })
  })

  if (matches.length === 0) {
    return
  }

  var finalMatches = matches.sort(function (a, b) {
    if (a.task.id === currentTask.id) {
      a.score += 0.2
    }
    if (b.task.id === currentTask.id) {
      b.score += 0.2
    }
    return b.score - a.score
  }).slice(0, 2)

  finalMatches.forEach(function (match) {
    var data = {
      icon: 'fa-external-link-square',
      title: match.tab.title,
      secondaryText: urlParser.basicURL(match.tab.url)
    }

    if (match.task.id !== currentTask.id) {
      var taskName = match.task.name || l('taskN').replace('%n', (tasks.getIndex(match.task.id) + 1))
      data.metadata = [taskName]
    }

    var item = searchbarUtils.createItem(data)

    item.addEventListener('click', function () {
      // if we created a new tab but are switching away from it, destroy the current (empty) tab
      var currentTabUrl = tabs.get(tabs.getSelected()).url
      if (!currentTabUrl || currentTabUrl === 'about:blank') {
        browserUI.closeTab(tabs.getSelected())
      }

      if (match.task.id !== currentTask.id) {
        browserUI.switchToTask(match.task.id)
      }

      browserUI.switchToTab(match.tab.id)
    })

    container.appendChild(item)
  })

  searchbarPlugins.addResults('openTabs', finalMatches.length)
}

searchbarPlugins.register('openTabs', {
  index: 4,
  trigger: function (text) {
    return text.length > 2
  },
  showResults: searchOpenTabs
})
;
var searchbar = require('searchbar/searchbar.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')

var searchEngine = require('util/searchEngine.js')

// format is {phrase, snippet, score, icon, fn, isCustom, isAction} to match https://ac.duckduckgo.com/ac?q=!

// isAction describes whether the !bang is an action (like "open preferences"), or a place to search (like "search reading list items")

var customBangs = []

function registerCustomBang (data) {
  customBangs.push({
    phrase: data.phrase,
    snippet: data.snippet,
    score: data.score || 500000, // half of the default score
    icon: data.icon || 'fa-terminal',
    showSuggestions: data.showSuggestions,
    fn: data.fn,
    isCustom: true,
    isAction: data.isAction || false
  })
}

function searchCustomBangs (text) {
  return customBangs.filter(function (item) {
    return item.phrase.indexOf(text) === 0
  })
}

function getCustomBang (text) {
  var bang = text.split(' ')[0]
  return customBangs.filter(function (item) {
    return item.phrase === bang
  })[0]
}

// format is {bang: count}
var bangUseCounts = JSON.parse(localStorage.getItem('bangUseCounts') || '{}')

function incrementBangCount (bang) {
  // increment bangUseCounts

  if (bangUseCounts[bang]) {
    bangUseCounts[bang]++
  } else {
    bangUseCounts[bang] = 1
  }

  // prevent the data from getting too big

  if (bangUseCounts[bang] > 1000) {
    for (var bang in bangUseCounts) {
      bangUseCounts[bang] = Math.floor(bangUseCounts[bang] * 0.9)

      if (bangUseCounts[bang] < 2) {
        delete bangUseCounts[bang]
      }
    }
  }
}

var saveBangUseCounts = debounce(function () {
  localStorage.setItem('bangUseCounts', JSON.stringify(bangUseCounts))
}, 10000)

// results is an array of {phrase, snippet, image}
function showBangSearchResults (results, input, event, container) {
  empty(container)

  results.sort(function (a, b) {
    var aScore = a.score || 1
    var bScore = b.score || 1
    if (bangUseCounts[a.phrase]) {
      aScore *= bangUseCounts[a.phrase]
    }
    if (bangUseCounts[b.phrase]) {
      bScore *= bangUseCounts[b.phrase]
    }

    return bScore - aScore
  })

  results.slice(0, 5).forEach(function (result) {

    // autocomplete the bang, but allow the user to keep typing

    var data = {
      icon: result.icon,
      iconImage: result.image,
      title: result.snippet,
      secondaryText: result.phrase
    }

    var item = searchbarUtils.createItem(data)

    item.addEventListener('click', function (e) {

      // if the item is an action, clicking on it should immediately trigger it instead of prompting for additional text
      if (result.isAction && result.fn) {
        searchbar.openURL(result.phrase, e)
        return
      }

      setTimeout(function () {
        incrementBangCount(result.phrase)
        saveBangUseCounts()

        input.value = result.phrase + ' '
        input.focus()

        // show search suggestions for custom bangs
        if (result.showSuggestions) {
          result.showSuggestions('', input, event, container)
        }
      }, 66)
    })

    container.appendChild(item)
  })
}

function getBangSearchResults (text, input, event, container) {

  // if there is a space in the text, show bang search suggestions (only supported for custom bangs)

  if (text.indexOf(' ') !== -1) {
    var bang = getCustomBang(text)

    if (bang && bang.showSuggestions) {
      bang.showSuggestions(text.replace(bang.phrase, '').trimLeft(), input, event, container)
      return
    } else if (text.trim().indexOf(' ') !== -1) {
      empty(container)
      return
    }
  }

  // otherwise search for bangs

  // get results from DuckDuckGo if it is a search engine, and the current tab is not a private tab
  if (searchEngine.getCurrent().name === 'DuckDuckGo' && !tabs.get(tabs.getSelected()).private) {
    fetch('https://ac.duckduckgo.com/ac/?t=min&q=' + encodeURIComponent(text), {
      cache: 'force-cache'
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (results) {
        // show the DuckDuckGo results, combined with the custom !bangs
        showBangSearchResults(results.concat(searchCustomBangs(text)), input, event, container)
      })
  } else {
    // otherwise, only show custom !bangs
    showBangSearchResults(searchCustomBangs(text), input, event, container)
  }
}

searchbarPlugins.register('bangs', {
  index: 1,
  trigger: function (text) {
    return !!text && text.indexOf('!') === 0
  },
  showResults: debounce(getBangSearchResults, 100)
})

searchbarPlugins.registerURLHandler({
  trigger: function (url) {
    return url.indexOf('!') === 0 && getCustomBang(url)
  },
  action: function (url) {
    var bang = getCustomBang(url)

    if (bang) {
      tabBar.leaveEditMode()
      bang.fn(url.replace(bang.phrase, '').trimLeft())
    }
  }
})
;
/* list of the available custom !bangs */
var browserUI = require('browserUI.js')
var focusMode = require('focusMode.js')
var searchbar = require('searchbar/searchbar.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')
var places = require('places/places.js')
const formatRelativeDate = require('util/relativeDate.js')

registerCustomBang({
  phrase: '!settings',
  snippet: l('viewSettings'),
  isAction: true,
  fn: function (text) {
    browserUI.navigate(tabs.getSelected(), 'file://' + __dirname + '/pages/settings/index.html')
  }
})

registerCustomBang({
  phrase: '!back',
  snippet: l('goBack'),
  isAction: true,
  fn: function (text) {
    try {
      webviews.get(tabs.getSelected()).goBack()
    } catch (e) {}
  }
})

registerCustomBang({
  phrase: '!forward',
  snippet: l('goForward'),
  isAction: true,
  fn: function (text) {
    try {
      webviews.get(tabs.getSelected()).goForward()
    } catch (e) {}
  }
})

registerCustomBang({
  phrase: '!screenshot',
  snippet: l('takeScreenshot'),
  isAction: true,
  fn: function (text) {
    setTimeout(function () { // wait so that the view placeholder is hidden
      webviews.get(tabs.getSelected()).capturePage(function (image) {
        remote.getCurrentWebContents().downloadURL(image.toDataURL())
      })
    }, 400)
  }
})

registerCustomBang({
  phrase: '!clearhistory',
  snippet: l('clearHistory'),
  isAction: true,
  fn: function (text) {
    places.deleteAllHistory()
  }
})

// returns a task with the same name or index ("1" returns the first task, etc.)
function getTaskByNameOrNumber (text) {
  const textAsNumber = parseInt(text)

  return tasks.find((task, index) =>
    (task.name && task.name.toLowerCase() === text) || index + 1 === textAsNumber
  )
}

registerCustomBang({
  phrase: '!task',
  snippet: l('switchToTask'),
  isAction: false,
  fn: function (text) {
    /* disabled in focus mode */
    if (focusMode.enabled()) {
      focusMode.warn()
      return
    }

    text = text.toLowerCase()

    // no task was specified, show all of the tasks
    if (!text) {
      taskOverlay.show()
      return
    }

    var task = getTaskByNameOrNumber(text)

    if (task) {
      browserUI.switchToTask(task.id)
    }
  }
})

registerCustomBang({
  phrase: '!newtask',
  snippet: l('createTask'),
  isAction: true,
  fn: function (text) {
    /* disabled in focus mode */
    if (focusMode.enabled()) {
      focusMode.warn()
      return
    }

    taskOverlay.show()

    setTimeout(function () {
      browserUI.addTask()
      if (text) {
        currentTask.name = text
      }
    }, 600)
  }
})

registerCustomBang({
  phrase: '!movetotask',
  snippet: l('moveToTask'),
  isAction: false,
  fn: function (text) {
    /* disabled in focus mode */
    if (focusMode.enabled()) {
      focusMode.warn()
      return
    }

    // remove the tab from the current task

    var currentTab = tabs.get(tabs.getSelected())
    tabs.destroy(currentTab.id)

    // make sure the task has at least one tab in it
    if (tabs.get().length === 0) {
      tabs.add()
    }

    var newTask = getTaskByNameOrNumber(text)

    if (newTask) {
      newTask.tabs.add(currentTab)
    } else {
      // create a new task with the given name
      var newTask = tasks.get(tasks.add())
      newTask.name = text

      newTask.tabs.add(currentTab)
    }

    taskOverlay.show()
    browserUI.switchToTask(newTask.id)
    browserUI.switchToTab(currentTab.id)

    setTimeout(function () {
      taskOverlay.hide()
    }, 600)
  }
})

registerCustomBang({
  phrase: '!bookmarks',
  snippet: l('searchBookmarks'),
  isAction: false,
  showSuggestions: function (text, input, event, container) {
    places.searchPlaces(text, function (results) {
      empty(container)

      var lastRelativeDate = '' // used to generate headings

      results.sort(function (a, b) {
        // order by last visit
        return b.lastVisit - a.lastVisit
      }).forEach(function (result) {
        var thisRelativeDate = formatRelativeDate(result.lastVisit)
        if (thisRelativeDate !== lastRelativeDate) {
          var heading = searchbarUtils.createHeading({text: thisRelativeDate})
          container.appendChild(heading)
          lastRelativeDate = thisRelativeDate
        }
        container.appendChild(searchbarUtils.createItem({
          title: result.title,
          icon: 'fa-star',
          secondaryText: result.url,
          url: result.url,
          delete: function () {
            places.deleteHistory(result.url)
          }
        }))
      })
    }, {searchBookmarks: true})
  },
  fn: function (text) {
    if (!text) {
      return
    }
    places.searchPlaces(text, function (results) {
      if (results.length !== 0) {
        results = results.sort(function (a, b) {
          return b.lastVisit - a.lastVisit
        })
        searchbar.openURL(results[0].url, null)
      }
    }, {searchBookmarks: true})
  }
})

registerCustomBang({
  phrase: '!history',
  snippet: l('searchHistory'),
  isAction: false,
  showSuggestions: function (text, input, event, container) {
    places.searchPlaces(text, function (results) {
      empty(container)

      var lastRelativeDate = '' // used to generate headings

      results.sort(function (a, b) {
        // order by last visit
        return b.lastVisit - a.lastVisit
      }).slice(0, 250).forEach(function (result) {
        var thisRelativeDate = formatRelativeDate(result.lastVisit)
        if (thisRelativeDate !== lastRelativeDate) {
          var heading = searchbarUtils.createHeading({text: thisRelativeDate})
          container.appendChild(heading)
          lastRelativeDate = thisRelativeDate
        }
        container.appendChild(searchbarUtils.createItem({
          title: result.title,
          secondaryText: result.url,
          url: result.url,
          delete: function () {
            places.deleteHistory(result.url)
          }
        }))
      })
    }, {limit: Infinity})
  },
  fn: function (text) {
    if (!text) {
      return
    }
    places.searchPlaces(text, function (results) {
      if (results.length !== 0) {
        results = results.sort(function (a, b) {
          return b.lastVisit - a.lastVisit
        })
        searchbar.openURL(results[0].url, null)
      }
    }, {limit: Infinity})
  }
})
;
var searchbar = require('searchbar/searchbar.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')

var urlParser = require('util/urlParser.js')
var searchEngine = require('util/searchEngine.js')

var ddgAttribution = l('resultsFromDDG')

function showSearchSuggestions (text, input, event, container) {
  // TODO support search suggestions for other search engines
  if (searchEngine.getCurrent().name !== 'DuckDuckGo') {
    return
  }

  // if the search text is a custom bang, we should never show suggestions
  if (getCustomBang(text)) {
    empty(container)
    return
  }

  if (searchbarPlugins.getResultCount() > 3) {
    empty(container)
    return
  }

  fetch('https://ac.duckduckgo.com/ac/?t=min&q=' + encodeURIComponent(text), {
    cache: 'force-cache'
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (results) {
      empty(container)

      if (results) {
        results = results.slice(0, 3)
        results.forEach(function (result) {
          var data = {
            title: result.phrase
          }

          if (urlParser.isURL(result.phrase) || urlParser.isURLMissingProtocol(result.phrase)) { // website suggestions
            data.icon = 'fa-globe'
          } else { // regular search results
            data.icon = 'fa-search'
          }

          var item = searchbarUtils.createItem(data)

          item.addEventListener('click', function (e) {
            searchbar.openURL(result.phrase, e)
          })

          container.appendChild(item)
        })
        searchbarPlugins.addResults('searchSuggestions', results.length)
      }
    })
}

searchbarPlugins.register('searchSuggestions', {
  index: 4,
  trigger: function (text) {
    return !!text && (text.indexOf('!') !== 0 || text.trim().indexOf(' ') !== -1) && !tabs.get(tabs.getSelected()).private
  },
  showResults: debounce(showSearchSuggestions, 150)
})
;
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')
var urlParser = require('util/urlParser.js')

var places = require('places/places.js')

function showPlaceSuggestions (text, input, event, container) {
  // use the current tab's url for history suggestions, or the previous tab if the current tab is empty
  var url = tabs.get(tabs.getSelected()).url

  if (!url || url === 'about:blank') {
    var previousTab = tabs.getAtIndex(tabs.getIndex(tabs.getSelected()) - 1)
    if (previousTab) {
      url = previousTab.url
    }
  }

  places.getPlaceSuggestions(url, function (results) {
    empty(container)

    var tabList = tabs.get().map(function (tab) {
      return tab.url
    })

    results = results.filter(function (item) {
      return tabList.indexOf(item.url) === -1
    })

    results.slice(0, 4).forEach(function (result) {
      var item = searchbarUtils.createItem({
        title: urlParser.prettyURL(result.url),
        secondaryText: searchbarUtils.getRealTitle(result.title),
        url: result.url,
        delete: function () {
          places.deleteHistory(result.url)
        }
      })

      container.appendChild(item)
    })
  })
}

searchbarPlugins.register('placeSuggestions', {
  index: 1,
  trigger: function (text) {
    return !text
  },
  showResults: showPlaceSuggestions
})
;
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')
var urlParser = require('util/urlParser.js')
const hosts = require('util/hosts.js')

function showHostsSuggestions (text, input, event, container) {
  empty(container)

  var results = hosts.filter(function (host) {
    // only match start of host string
    return host.indexOf(text) === 0
  })

  results.slice(0, 4).forEach(function (result) {
    var item = searchbarUtils.createItem({
      title: result,
      secondaryText: l('hostsFileEntry'),
      url: 'http://' + result
    })

    container.appendChild(item)
  })
}

searchbarPlugins.register('hostsSuggestions', {
  index: 1,
  trigger: function (text) {
    return (hosts.length && typeof text === 'string' && text.length > 2)
  },
  showResults: showHostsSuggestions
})
;
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')

// when we get keywords data from the page, show those results in the searchbar

webviews.bindIPC('keywordsData', function (webview, tabId, args) {
  var container = searchbarPlugins.getContainer('keywordSuggestions')

  empty(container)

  args[0].entities.slice(0, 5).forEach(function (item) {
    var div = searchbarUtils.createItem({
      icon: 'fa-search',
      title: item,
      url: item
    })

    container.appendChild(div)
  })
})

searchbarPlugins.register('keywordSuggestions', {
  index: 10,
  trigger: function (text) {
    return !text
  },
  showResults: function () {
    // request keyword suggestions, which will be displayed later
    webviews.callAsync(tabs.getSelected(), 'send', 'getKeywordsData')
  }
})
;
var browserUI = require('browserUI.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')
var urlParser = require('util/urlParser.js')

var readerView = {
  readerURL: urlParser.getFileURL(__dirname + '/reader/index.html'),
  getReaderURL: function (url) {
    return readerView.readerURL + '?url=' + url
  },
  isReader: function (tabId) {
    return tabs.get(tabId).url.indexOf(readerView.readerURL) === 0
  },
  getButton: function (tabId) {
    // TODO better icon
    var item = document.createElement('i')
    item.className = 'fa fa-align-left reader-button'

    item.setAttribute('data-tab', tabId)
    item.setAttribute('title', l('enterReaderView'))

    item.addEventListener('click', function (e) {
      var tabId = this.getAttribute('data-tab')

      e.stopPropagation()

      if (readerView.isReader(tabId)) {
        readerView.exit(tabId)
      } else {
        readerView.enter(tabId)
      }
    })

    return item
  },
  updateButton: function (tabId) {
    var button = document.querySelector('.reader-button[data-tab="{id}"]'.replace('{id}', tabId))
    var tab = tabs.get(tabId)

    if (readerView.isReader(tabId)) {
      button.classList.add('is-reader')
      button.setAttribute('title', l('exitReaderView'))
      return
    } else {
      button.classList.remove('is-reader')
      button.setAttribute('title', l('enterReaderView'))
    }

    if (tab.readerable) {
      button.classList.add('can-reader')
    } else {
      button.classList.remove('can-reader')
    }
  },
  enter: function (tabId) {
    browserUI.navigate(tabId, readerView.readerURL + '?url=' + encodeURIComponent(tabs.get(tabId).url))
  },
  exit: function (tabId) {
    browserUI.navigate(tabId, decodeURIComponent(tabs.get(tabId).url.split('?url=')[1]))
  },
  printArticle: function (tabId) {
    if (!readerView.isReader(tabId)) {
      throw new Error("attempting to print in a tab that isn't a reader page")
    }

    webviews.get(tabId).executeJavaScript('parentProcessActions.printArticle()', false)
  },
  showReadingList: function (container, filterText) {
    db.readingList.orderBy('time').reverse().toArray().then(function (articles) {
      empty(container)

      if (articles.length === 0) {
        var item = searchbarUtils.createItem({
          title: l('emptyReadingListTitle'),
          descriptionBlock: l('emptyReadingListSubtitle')
        })

        container.appendChild(item)
        return
      }

      articles.forEach(function (article) {
        if (!article.article) {
          return
        }

        // TODO integrate this with the regular history search system

        if (filterText) {
          var normalizedFilterText = filterText.trim().toLowerCase().replace(/\s+/g, ' ').replace(/\W+/g, '')
          var normalizedArticleText = (article.url + article.article.title + article.article.excerpt).trim().toLowerCase().replace(/\s+/g, ' ').replace(/\W+/g, '')
          if (normalizedArticleText.indexOf(normalizedFilterText) === -1) {
            return
          }
        }

        var item = searchbarUtils.createItem({
          title: article.article.title,
          descriptionBlock: article.article.excerpt,
          url: readerView.getReaderURL(article.url),
          delete: function (el) {
            db.readingList.where('url').equals(el.getAttribute('data-url')).delete()
          }
        })

        if (article.visitCount > 5 || (article.extraData.scrollPosition > 0 && article.extraData.articleScrollLength - article.extraData.scrollPosition < 1000)) { // the article has been visited frequently, or the scroll position is at the bottom
          item.style.opacity = 0.65
        }

        container.appendChild(item)
      })
    })
  }
}

window.readerView = readerView

/* typing !readinglist in the searchbar shows the list */

registerCustomBang({
  phrase: '!readinglist',
  snippet: l('viewReadingList'),
  isAction: false,
  showSuggestions: function (text, input, event, container) {
    readerView.showReadingList(container, text)
  }
})

// update the reader button on page load

webviews.bindEvent('did-start-navigation', function (e, url, isInPlace, isMainFrame, frameProcessId, frameRoutingId) {
  if (isMainFrame && !isInPlace) {
    var tab = webviews.getTabFromContents(this)
    tabs.update(tab, {
      readerable: false // assume the new page can't be readered, we'll get another message if it can
    })

    readerView.updateButton(tab)
  }
})

webviews.bindIPC('canReader', function (webview, tab) {
  tabs.update(tab, {
    readerable: true
  })
  readerView.updateButton(tab)
})
;
var browserUI = require('browserUI.js')
var focusMode = require('focusMode.js')
var searchbar = require('searchbar/searchbar.js')
var urlParser = require('util/urlParser.js')

var progressBar = require('navbar/progressBar.js')
var bookmarkStar = require('navbar/bookmarkStar.js')

var lastTabDeletion = 0 // TODO get rid of this

window.tabBar = {
  container: document.getElementById('tabs'),
  tabElementMap: {}, // tabId: tab element
  editingTab: null, // the ID of the tab that is being edited
  getTab: function (tabId) {
    return tabBar.tabElementMap[tabId]
  },
  getTabInput: function (tabId) {
    return tabBar.getTab(tabId).querySelector('.tab-input')
  },
  setActiveTab: function (tabId) {
    var activeTab = document.querySelector('.tab-item.active')

    if (activeTab) {
      activeTab.classList.remove('active')
    }

    var el = tabBar.getTab(tabId)
    el.classList.add('active')

    requestIdleCallback(function () {
      requestAnimationFrame(function () {
        el.scrollIntoView()
      })
    }, {
      timeout: 1500
    })
  },
  enterEditMode: function (tabId, editingValue) {
    // editingValue: an optional string to show in the searchbar instead of the current URL

    webviews.requestPlaceholder('editMode')
    taskOverlay.hide()

    var tabEl = tabBar.getTab(tabId)
    var webview = webviews.get(tabId)

    var currentURL = urlParser.getDisplayURL(tabs.get(tabId).url)
    if (currentURL === 'about:blank') {
      currentURL = ''
    }

    document.body.classList.add('is-edit-mode')
    tabEl.classList.add('selected')

    var input = tabBar.getTabInput(tabId)
    input.value = editingValue || currentURL
    input.focus()
    if (!editingValue) {
      input.select()
    }

    searchbar.show(input)

    if (editingValue) {
      searchbar.showResults(editingValue, null)
    } else {
      searchbar.showResults('', null)
    }

    tabBar.editingTab = tabId
  },
  leaveEditMode: function () {
    if (!tabBar.editingTab) {
      return
    }
    var selTab = document.querySelector('.tab-item.selected')
    if (selTab) {
      selTab.classList.remove('selected')
    }

    var input = document.querySelector('.tab-item .tab-input:focus')
    if (input) {
      input.blur()
    }

    document.body.classList.remove('is-edit-mode')
    searchbar.hide()

    webviews.hidePlaceholder('editMode')

    tabBar.editingTab = null
  },
  rerenderTab: function (tabId) {
    var tabEl = tabBar.getTab(tabId)
    var tabData = tabs.get(tabId)

    var tabTitle = tabData.title || l('newTabLabel')

    tabEl.title = tabTitle
    var titleEl = tabEl.querySelector('.tab-view-contents .title')
    titleEl.textContent = tabTitle

    var secIcon = tabEl.getElementsByClassName('icon-tab-not-secure')[0]
    if (tabData.secure === false) {
      secIcon.hidden = false
    } else {
      secIcon.hidden = true
    }

    // update the star to reflect whether the page is bookmarked or not
    bookmarkStar.update(tabId, tabBar.getTab(tabId).querySelector('.bookmarks-button'))
  },
  rerenderAll: function () {
    empty(tabBar.container)
    tabBar.tabElementMap = {}
    for (var i = 0; i < tabs.length; i++) {
      var el = tabBar.createElement(tabs[i])
      tabBar.container.appendChild(el)
      tabBar.tabElementMap[tabs[i].id] = el
    }
    if (tabs.getSelected()) {
      tabBar.setActiveTab(tabs.getSelected())
    }
  },
  createElement: function (data) {
    var url = urlParser.parse(data.url)
    var tabTitle = data.title || l('newTabLabel')

    var tabEl = document.createElement('div')
    tabEl.className = 'tab-item'
    tabEl.setAttribute('data-tab', data.id)
    tabEl.title = tabTitle

    var ec = document.createElement('div')
    ec.className = 'tab-edit-contents'

    var input = document.createElement('input')
    input.className = 'tab-input mousetrap'
    input.setAttribute('placeholder', l('searchbarPlaceholder'))
    input.value = url

    ec.appendChild(input)
    ec.appendChild(bookmarkStar.create(data.id))

    tabEl.appendChild(ec)

    var vc = document.createElement('div')
    vc.className = 'tab-view-contents'

    vc.appendChild(readerView.getButton(data.id))
    vc.appendChild(progressBar.create())

    // icons

    var iconArea = document.createElement('span')
    iconArea.className = 'tab-icon-area'

    var closeTabButton = document.createElement('i')
    closeTabButton.classList.add('tab-close-button')
    closeTabButton.classList.add('fa')
    closeTabButton.classList.add('fa-times-circle')

    closeTabButton.addEventListener('click', function (e) {
      browserUI.closeTab(data.id)
      // prevent the searchbar from being opened
      e.stopPropagation()
    })

    iconArea.appendChild(closeTabButton)

    if (data.private) {
      var pbIcon = document.createElement('i')
      pbIcon.className = 'fa fa-eye-slash icon-tab-is-private tab-info-icon'
      iconArea.appendChild(pbIcon)

      vc.setAttribute('title', l('privateTab'))
    }

    var secIcon = document.createElement('i')
    secIcon.className = 'fa fa-unlock icon-tab-not-secure tab-info-icon'
    secIcon.title = l('connectionNotSecure')

    secIcon.hidden = data.secure !== false
    iconArea.appendChild(secIcon)

    vc.appendChild(iconArea)

    // title

    var title = document.createElement('span')
    title.className = 'title'
    title.textContent = tabTitle

    vc.appendChild(title)

    tabEl.appendChild(vc)

    input.addEventListener('keydown', function (e) {
      if (e.keyCode === 9 || e.keyCode === 40) { // if the tab or arrow down key was pressed
        searchbar.focusItem()
        e.preventDefault()
      }
    })

    // keypress doesn't fire on delete key - use keyup instead
    input.addEventListener('keyup', function (e) {
      if (e.keyCode === 8) {
        searchbar.showResults(this.value, e)
      }
    })

    input.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) { // return key pressed; update the url
        searchbar.openURL(this.value, e)
      } else if (e.keyCode === 9) {
        return
      // tab key, do nothing - in keydown listener
      } else if (e.keyCode === 16) {
        return
      // shift key, do nothing
      } else if (e.keyCode === 8) {
        return
      // delete key is handled in keyUp
      } else { // show the searchbar
        searchbar.showResults(this.value, e)
      }

      // on keydown, if the autocomplete result doesn't change, we move the selection instead of regenerating it to avoid race conditions with typing. Adapted from https://github.com/patrickburke/jquery.inlineComplete

      var v = String.fromCharCode(e.keyCode).toLowerCase()
      var sel = this.value.substring(this.selectionStart, this.selectionEnd).indexOf(v)

      if (v && sel === 0) {
        this.selectionStart += 1
        e.preventDefault()
      }
    })

    // prevent clicking in the input from re-entering edit-tab mode

    input.addEventListener('click', function (e) {
      e.stopPropagation()
    })

    // click to enter edit mode or switch to a tab
    tabEl.addEventListener('click', function (e) {
      if (tabs.getSelected() !== data.id) { // else switch to tab if it isn't focused
        browserUI.switchToTab(data.id)
      } else { // the tab is focused, edit tab instead
        tabBar.enterEditMode(data.id)
      }
    })

    tabEl.addEventListener('auxclick', function (e) {
      if (e.which === 2) { // if mouse middle click -> close tab
        browserUI.closeTab(data.id)
      }
    })

    tabEl.addEventListener('mousewheel', function (e) {
      if (e.deltaY > 65 && e.deltaX < 10 && Date.now() - lastTabDeletion > 650) { // swipe up to delete tabs
        lastTabDeletion = Date.now()

        /* tab deletion is disabled in focus mode */
        if (focusMode.enabled()) {
          focusMode.warn()
          return
        }

        var tab = this.getAttribute('data-tab')
        this.style.transform = 'translateY(-100%)'

        setTimeout(function () {
          browserUI.closeTab(tab)
        }, 150) // wait until the animation has completed
      }
    })

    return tabEl
  },
  addTab: function (tabId) {
    var tab = tabs.get(tabId)
    var index = tabs.getIndex(tabId)

    var tabEl = tabBar.createElement(tab)
    tabBar.container.insertBefore(tabEl, tabBar.container.childNodes[index])
    tabBar.tabElementMap[tabId] = tabEl
  },
  removeTab: function (tabId) {
    var tabEl = tabBar.getTab(tabId)
    if (tabEl) {
      // The tab does not have a coresponding .tab-item element.
      // This happens when destroying tabs from other task where this .tab-item is not present
      tabBar.container.removeChild(tabEl)
      delete tabBar.tabElementMap[tabId]
    }
  }
}

// when we click outside the navbar, we leave editing mode

document.getElementById('webviews').addEventListener('click', function () {
  tabBar.leaveEditMode()
})

/* progress bar events */

webviews.bindEvent('did-start-loading', function () {
  var tabId = webviews.getTabFromContents(this)
  progressBar.update(tabBar.getTab(tabId).querySelector('.progress-bar'), 'start')
})

webviews.bindEvent('did-stop-loading', function () {
  var tabId = webviews.getTabFromContents(this)
  progressBar.update(tabBar.getTab(tabId).querySelector('.progress-bar'), 'finish')
})
;
var browserUI = require('browserUI.js')
var focusMode = require('focusMode.js')

const createTaskContainer = require('taskOverlay/taskOverlayBuilder.js')

var taskContainer = document.getElementById('task-area')
var taskSwitcherButton = document.getElementById('switch-task-button')
var addTaskButton = document.getElementById('add-task')
var addTaskLabel = addTaskButton.querySelector('span')
var taskOverlayNavbar = document.getElementById('task-overlay-navbar')

taskSwitcherButton.title = l('viewTasks')
addTaskLabel.textContent = l('newTask')

taskSwitcherButton.addEventListener('click', function () {
  taskOverlay.toggle()
})

addTaskButton.addEventListener('click', function (e) {
  browserUI.switchToTask(tasks.add())
  taskOverlay.hide()
})

taskOverlayNavbar.addEventListener('click', function () {
  taskOverlay.hide()
})

var dragula = require('dragula')

window.taskOverlay = {
  overlayElement: document.getElementById('task-overlay'),
  isShown: false,
  tabDragula: dragula({
    direction: 'vertical'
  }),
  taskDragula: dragula({
    direction: 'vertical',
    containers: [taskContainer],
    moves: function (el, source, handle, sibling) {
      // ignore drag events that come from a tab element, since they will be handled by the other dragula instance
      // also ignore inputs, since using them as drag handles breaks text selection
      var n = handle
      while (n) {
        if (n.classList.contains('task-tab-item') || n.tagName === 'INPUT') {
          return false
        }
        n = n.parentElement
      }
      return true
    }
  }),
  show: function () {
    /* disabled in focus mode */
    if (focusMode.enabled()) {
      focusMode.warn()
      return
    }

    webviews.requestPlaceholder('taskOverlay')

    document.body.classList.add('task-overlay-is-shown')

    tabBar.leaveEditMode()

    this.isShown = true
    taskSwitcherButton.classList.add('active')

    this.tabDragula.containers = []
    empty(taskContainer)

    // show the task elements
    tasks.forEach(function (task, index) {
      const el = createTaskContainer(task, index)

      taskContainer.appendChild(el)
      taskOverlay.tabDragula.containers.push(el.getElementsByClassName('task-tabs-container')[0])
    })

    // scroll to the selected element and focus it

    var currentTabElement = document.querySelector('.task-tab-item[data-tab="{id}"]'.replace('{id}', currentTask.tabs.getSelected()))

    if (currentTabElement) {
      currentTabElement.scrollIntoViewIfNeeded()
      currentTabElement.classList.add('fakefocus')
    }

    // un-hide the overlay
    this.overlayElement.hidden = false
  },

  hide: function () {
    if (this.isShown) {
      this.isShown = false
      this.overlayElement.hidden = true

      // wait until the animation is complete to remove the tab elements
      setTimeout(function () {
        if (!taskOverlay.isShown) {
          empty(taskContainer)
          webviews.hidePlaceholder('taskOverlay')
        }
      }, 250)

      this.tabDragula.containers = []

      document.body.classList.remove('task-overlay-is-shown')

      // if the current tab has been deleted, switch to the most recent one

      if (!tabs.getSelected()) {
        var mostRecentTab = tabs.get().sort(function (a, b) {
          return b.lastActivity - a.lastActivity
        })[0]

        if (mostRecentTab) {
          browserUI.switchToTab(mostRecentTab.id)
        }
      }

      taskSwitcherButton.classList.remove('active')
    }
  },

  toggle: function () {
    if (this.isShown) {
      this.hide()
    } else {
      this.show()
    }
  }
}

// swipe down on the tabstrip to show the task overlay
// this was the old expanded mode gesture, so it's remapped to the overlay
document.getElementById('navbar').addEventListener('mousewheel', function (e) {
  if (e.deltaY < -30 && e.deltaX < 10) {
    taskOverlay.show()
    e.stopImmediatePropagation()
  }
})

function getTaskContainer (id) {
  return document.querySelector('.task-container[data-task="{id}"]'.replace('{id}', id))
}

/* rearrange tabs when they are dropped */

taskOverlay.tabDragula.on('drop', function (el, target, source, sibling) { // see https://github.com/bevacqua/dragula#drakeon-events
  var tabId = el.getAttribute('data-tab')
  if (sibling) {
    var adjacentTadId = sibling.getAttribute('data-tab')
  }

  var previousTask = tasks.get(source.getAttribute('data-task'))
  var newTask = tasks.get(target.getAttribute('data-task'))

  // remove tab from old task
  var oldTab = previousTask.tabs.splice(previousTask.tabs.getIndex(tabId), 1)[0]

  // if the old task has no tabs left in it, destroy it

  if (previousTask.tabs.length === 0) {
    browserUI.closeTask(previousTask.id)
    getTaskContainer(previousTask.id).remove()
  }

  // find where in the new task the tab should be inserted
  if (adjacentTadId) {
    var newIdx = newTask.tabs.getIndex(adjacentTadId)
  } else {
    // tab was inserted at end
    var newIdx = newTask.tabs.length
  }

  // insert the tab at the correct spot
  newTask.tabs.splice(newIdx, 0, oldTab)

  // update the visible tabs
  tabBar.rerenderAll()
})

/* rearrange tasks when they are dropped */

taskOverlay.taskDragula.on('drop', function (el, target, source, sibling) {
  var droppedTaskId = el.getAttribute('data-task')
  if (sibling) {
    var adjacentTaskId = sibling.getAttribute('data-task')
  }

  // remove the task from the tasks list
  var droppedTask = tasks.splice(tasks.getIndex(droppedTaskId), 1)[0]

  // find where it should be inserted
  if (adjacentTaskId) {
    var newIdx = tasks.getIndex(adjacentTaskId)
  } else {
    var newIdx = tasks.getLength()
  }

  // reinsert the task
  tasks.splice(newIdx, 0, droppedTask)
})
;
var browserUI = require('browserUI.js')

var addTabButton = document.getElementById('add-tab-button')

addTabButton.addEventListener('click', function (e) {
  var newTab = tabs.add({}, tabs.getIndex(tabs.getSelected()) + 1)
  browserUI.addTab(newTab)
})
;
var goBackButton = document.getElementById('back-button')

goBackButton.addEventListener('click', function (e) {
  webviews.get(tabs.getSelected()).goBack()
})

settings.get('historyButton', function (value) {
  if (value === true || value === undefined) {
    goBackButton.hidden = false
  } else {
    goBackButton.hidden = true
  }
})
;
var menuButton = document.getElementById('menu-button')

menuButton.addEventListener('click', function (e) {
  showSecondaryMenu()
})

window.showSecondaryMenu = function () {
  var navbar = document.getElementById('navbar')
  var rect = menuButton.getBoundingClientRect()
  var navbarRect = navbar.getBoundingClientRect()

  ipc.send('showSecondaryMenu', {
    x: Math.round(rect.left),
    y: Math.round(navbarRect.bottom),
    async: true
  })
}
;
/* defines keybindings that aren't in the menu (so they aren't defined by menu.js). For items in the menu, also handles ipc messages */

/*
There are three possible ways that keybindings can be handled.
 Shortcuts that appear in the menubar are registered in main.js, and send IPC messages to the window (which are handled by this file)
Shortcuts that don't appear in the menubar are registered in this file, using defineShortcut(). 
 - If the browser UI is focused, these are handled by Mousetrap.
  - If a BrowserView is focused, these are handled by the before-input-event listener.
  */

const menuBarVisibility = require('menuBarVisibility.js')
var searchbar = require('searchbar/searchbar.js')
var browserUI = require('browserUI.js')
var focusMode = require('focusMode.js')
var urlParser = require('util/urlParser.js')

ipc.on('zoomIn', function () {
  webviewGestures.zoomWebviewIn(tabs.getSelected())
})

ipc.on('zoomOut', function () {
  webviewGestures.zoomWebviewOut(tabs.getSelected())
})

ipc.on('zoomReset', function () {
  webviewGestures.resetWebviewZoom(tabs.getSelected())
})

ipc.on('print', function () {
  if (PDFViewer.isPDFViewer(tabs.getSelected())) {
    PDFViewer.printPDF(tabs.getSelected())
  } else if (readerView.isReader(tabs.getSelected())) {
    readerView.printArticle(tabs.getSelected())
  } else {
    webviews.get(tabs.getSelected()).print()
  }
})

ipc.on('findInPage', function () {
  findinpage.start()
})

ipc.on('inspectPage', function () {
  webviews.get(tabs.getSelected()).openDevTools()
})

ipc.on('showReadingList', function () {
  // open the searchbar with "!readinglist " as the input
  tabBar.enterEditMode(tabs.getSelected(), '!readinglist ')
})

ipc.on('showBookmarks', function () {
  tabBar.enterEditMode(tabs.getSelected(), '!bookmarks ')
})

ipc.on('showHistory', function () {
  tabBar.enterEditMode(tabs.getSelected(), '!history ')
})

ipc.on('duplicateTab', function (e) {
  /* new tabs can't be created in focus mode */
  if (focusMode.enabled()) {
    focusMode.warn()
    return
  }

  // can't duplicate if tabs is empty 
  if (tabs.isEmpty()) {
    return
  }

  const newIndex = tabs.getIndex(tabs.getSelected()) + 1

  const sourceTab = tabs.get(tabs.getSelected())
  // strip tab id so that a new one is generated
  const newTab = tabs.add({...sourceTab, id: undefined}, newIndex)

  browserUI.addTab(newTab, { enterEditMode: false })
})

ipc.on('addTab', function (e, data) {
  /* new tabs can't be created in focus mode */
  if (focusMode.enabled()) {
    focusMode.warn()
    return
  }

  // if opening a URL (instead of adding an empty tab), and only an empty tab is open, navigate the current tab rather than creating another one
  if (tabs.isEmpty() && data.url) {
    browserUI.navigate(tabs.getSelected(), data.url)
  } else {
    var newIndex = tabs.getIndex(tabs.getSelected()) + 1
    var newTab = tabs.add({
      url: data.url || ''
    }, newIndex)

    browserUI.addTab(newTab, {
      enterEditMode: !data.url // only enter edit mode if the new tab is about:blank
    })
  }
})

ipc.on('saveCurrentPage', function () {
  var currentTab = tabs.get(tabs.getSelected())

  // new tabs cannot be saved
  if (!currentTab.url) {
    return
  }

  // if the current tab is a PDF, let the PDF viewer handle saving the document
  if (PDFViewer.isPDFViewer(tabs.getSelected())) {
    PDFViewer.savePDF(tabs.getSelected())
    return
  }

  var savePath = remote.dialog.showSaveDialog(remote.getCurrentWindow(), {})

  // savePath will be undefined if the save dialog is canceled
  if (savePath) {
    if (!savePath.endsWith('.html')) {
      savePath = savePath + '.html'
    }
    webviews.get(currentTab.id).getWebContents().savePage(savePath, 'HTMLComplete', function () {})
  }
})

function addPrivateTab () {
  /* new tabs can't be created in focus mode */
  if (focusMode.enabled()) {
    focusMode.warn()
    return
  }

  if (tabs.isEmpty()) {
    browserUI.destroyTab(tabs.getAtIndex(0).id)
  }

  var newIndex = tabs.getIndex(tabs.getSelected()) + 1

  var privateTab = tabs.add({
    private: true
  }, newIndex)
  browserUI.addTab(privateTab)
}

ipc.on('addPrivateTab', addPrivateTab)

ipc.on('addTask', function () {
  /* new tasks can't be created in focus mode */
  if (focusMode.enabled()) {
    focusMode.warn()
    return
  }

  browserUI.addTask()
  taskOverlay.show()
  setTimeout(function () {
    taskOverlay.hide()
    tabBar.enterEditMode(tabs.getSelected())
  }, 600)
})

ipc.on('goBack', function () {
  try {
    webviews.get(tabs.getSelected()).goBack()
  } catch (e) {}
})

ipc.on('goForward', function () {
  try {
    webviews.get(tabs.getSelected()).goForward()
  } catch (e) {}
})

var menuBarShortcuts = ['mod+t', 'shift+mod+p', 'mod+n'] // shortcuts that are already used for menu bar items

var shortcutsList = []

function defineShortcut (keysOrKeyMapName, fn, options = {}) {
  if (keysOrKeyMapName.keys) {
    var binding = keysOrKeyMapName.keys
  } else {
    var binding = keyMap[keysOrKeyMapName]
  }

  if (typeof binding === 'string') {
    binding = [binding]
  }

  var shortcutCallback = function (e, combo) {
    // these shortcuts are already used by menu bar items, so also using them here would result in actions happening twice
    if (menuBarShortcuts.indexOf(combo) !== -1) {
      return
    }
    // mod+left and mod+right are also text editing shortcuts, so they should not run when an input field is focused
    // also block single-letter shortcuts when an input field is focused, so that it's still possible to type in an input
    if (!combo.includes('+') || combo === 'mod+left' || combo === 'mod+right') {
      var webview = webviews.get(tabs.getSelected())
      if (!tabs.get(tabs.getSelected()).url || !webview.isFocused()) {
        fn(e, combo)
      } else {
        webview.executeJavaScript('document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA"', function (isInputFocused) {
          if (isInputFocused === false) {
            fn(e, combo)
          }
        })
      }
    } else {
      // other shortcuts can run immediately
      fn(e, combo)
    }
  }

  binding.forEach(function (keys) {
    shortcutsList.push({
      combo: keys,
      keys: keys.split('+'),
      fn: shortcutCallback,
      keyUp: options.keyUp
    })
  })

  Mousetrap.bind(binding, shortcutCallback, (options.keyUp ? "keyup" : null))
}

settings.get('keyMap', function (keyMapSettings) {
  keyMap = userKeyMap(keyMapSettings)

  var Mousetrap = require('mousetrap')

  window.Mousetrap = Mousetrap
  defineShortcut('addPrivateTab', addPrivateTab)

  defineShortcut('enterEditMode', function (e) {
    tabBar.enterEditMode(tabs.getSelected())
    return false
  })

  defineShortcut('closeTab', function (e) {
    browserUI.closeTab(tabs.getSelected())
  })

  defineShortcut('restoreTab', function (e) {
    if (focusMode.enabled()) {
      focusMode.warn()
      return
    }

    var restoredTab = window.currentTask.tabHistory.pop()

    // The tab history stack is empty
    if (!restoredTab) {
      return
    }

    if (tabs.isEmpty()) {
      browserUI.destroyTab(tabs.getAtIndex(0).id)
    }

    browserUI.addTab(tabs.add(restoredTab, tabs.getIndex(tabs.getSelected()) + 1), {
      enterEditMode: false
    })
  })

  defineShortcut('addToFavorites', function (e) {
    tabBar.getTab(tabs.getSelected()).querySelector('.bookmarks-button').click()
    tabBar.enterEditMode(tabs.getSelected()) // we need to show the bookmarks button, which is only visible in edit mode
  })

  // cmd+x should switch to tab x. Cmd+9 should switch to the last tab

  for (var i = 1; i < 9; i++) {
    (function (i) {
      defineShortcut({keys: 'mod+' + i}, function (e) {
        var currentIndex = tabs.getIndex(tabs.getSelected())
        var newTab = tabs.getAtIndex(currentIndex + i) || tabs.getAtIndex(currentIndex - i)
        if (newTab) {
          browserUI.switchToTab(newTab.id)
        }
      })

      defineShortcut({keys: 'shift+mod+' + i}, function (e) {
        var currentIndex = tabs.getIndex(tabs.getSelected())
        var newTab = tabs.getAtIndex(currentIndex - i) || tabs.getAtIndex(currentIndex + i)
        if (newTab) {
          browserUI.switchToTab(newTab.id)
        }
      })
    })(i)
  }

  defineShortcut('gotoLastTab', function (e) {
    browserUI.switchToTab(tabs.getAtIndex(tabs.count() - 1).id)
  })

  defineShortcut('gotoFirstTab', function (e) {
    browserUI.switchToTab(tabs.getAtIndex(0).id)
  })

  defineShortcut({keys: 'esc'}, function (e) {
    taskOverlay.hide()
    tabBar.leaveEditMode()

    // exit full screen mode
    webviews.callAsync(tabs.getSelected(), 'executeJavaScript', 'if(document.webkitIsFullScreen){document.webkitExitFullscreen()}')

    webviews.callAsync(tabs.getSelected(), 'focus')
  })

  defineShortcut('toggleReaderView', function () {
    if (readerView.isReader(tabs.getSelected())) {
      readerView.exit(tabs.getSelected())
    } else {
      readerView.enter(tabs.getSelected())
    }
  })

  // TODO add help docs for this

  defineShortcut('goBack', function (d) {
    webviews.get(tabs.getSelected()).goBack()
  })

  defineShortcut('goForward', function (d) {
    webviews.get(tabs.getSelected()).goForward()
  })

  defineShortcut('switchToPreviousTab', function (d) {
    var currentIndex = tabs.getIndex(tabs.getSelected())
    var previousTab = tabs.getAtIndex(currentIndex - 1)

    if (previousTab) {
      browserUI.switchToTab(previousTab.id)
    } else {
      browserUI.switchToTab(tabs.getAtIndex(tabs.count() - 1).id)
    }
  })

  defineShortcut('switchToNextTab', function (d) {
    var currentIndex = tabs.getIndex(tabs.getSelected())
    var nextTab = tabs.getAtIndex(currentIndex + 1)

    if (nextTab) {
      browserUI.switchToTab(nextTab.id)
    } else {
      browserUI.switchToTab(tabs.getAtIndex(0).id)
    }
  })

  var taskSwitchTimeout = null

  defineShortcut('switchToNextTask', function (d) {
    taskOverlay.show()

    const currentTaskIdx = tasks.indexOf(currentTask)

    const nextTask = tasks.byIndex(currentTaskIdx + 1) || tasks.byIndex(0)
    browserUI.switchToTask(nextTask.id)

    taskOverlay.show()

    clearInterval(taskSwitchTimeout)
    taskSwitchTimeout = setTimeout(function () {
      taskOverlay.hide()
    }, 500)
  })

  defineShortcut('switchToPreviousTask', function (d) {
    taskOverlay.show()

    const currentTaskIdx = tasks.indexOf(currentTask),
          taskCount = tasks.getLength()

    const previousTask = tasks.byIndex(currentTaskIdx - 1) || tasks.byIndex(tasks.getLength() - 1)
    browserUI.switchToTask(previousTask.id)

    taskOverlay.show()

    clearInterval(taskSwitchTimeout)
    taskSwitchTimeout = setTimeout(function () {
      taskOverlay.hide()
    }, 500)
  })

  defineShortcut('closeAllTabs', function (d) { // destroys all current tabs, and creates a new, empty tab. Kind of like creating a new window, except the old window disappears.
    var tset = tabs.get()
    for (var i = 0; i < tset.length; i++) {
      browserUI.destroyTab(tset[i].id)
    }

    browserUI.addTab() // create a new, blank tab
  })

  defineShortcut('toggleTasks', function () {
    if (taskOverlay.isShown) {
      taskOverlay.hide()
    } else {
      taskOverlay.show()
    }
  })

  var lastReload = 0

  defineShortcut('reload', function () {
    var time = Date.now()

    // pressing mod+r twice in a row reloads the whole browser
    if (time - lastReload < 500) {
      ipc.send('destroyAllViews')
      remote.getCurrentWindow().webContents.reload()
    } else if (webviews.get(tabs.getSelected()).getURL().startsWith('file://')) {
      // the webview.reload() method can't be used because if the webview is displaying an error page, we want to reload the original page rather than show the error page again
      browserUI.navigate(tabs.getSelected(), tabs.get(tabs.getSelected()).url)
    } else {
      // this can't be an error page, use the normal reload method
      webviews.callAsync(tabs.getSelected(), 'reload')
    }

    lastReload = time
  })

  // mod+enter navigates to searchbar URL + ".com"
  defineShortcut('completeSearchbar', function () {
    if (searchbar.associatedInput) { // if the searchbar is open
      var value = searchbar.associatedInput.value

      tabBar.leaveEditMode()

      // if the text is already a URL, navigate to that page
      if (urlParser.isURLMissingProtocol(value)) {
        browserUI.navigate(tabs.getSelected(), value)
      } else {
        browserUI.navigate(tabs.getSelected(), urlParser.parse(value + '.com'))
      }
    }
  })

  defineShortcut('showAndHideMenuBar', function () {
    menuBarVisibility.toggleMenuBar()
  }, {keyUp: true}) //run on keyUp to avoid interfering with alt+f4 shortcut, see https://github.com/minbrowser/min/issues/631

  defineShortcut('followLink', function () {
    findinpage.end({ action: 'activateSelection' })
  })
}) // end settings.get

// reload the webview when the F5 key is pressed
document.body.addEventListener('keydown', function (e) {
  if (e.keyCode === 116) {
    try {
      webviews.get(tabs.getSelected()).reloadIgnoringCache()
    } catch (e) {}
  }
})

webviews.bindEvent('before-input-event', function (e, input) {
  var expectedKeys = 1
  //account for additional keys that aren't in the input.key property
  if (input.alt && input.key !== "Alt") {
    expectedKeys++
  }
  if (input.shift && input.key !== "Shift") {
    expectedKeys++
  }
  if (input.control && input.key !== "Control") {
    expectedKeys++
  }
  if (input.meta && input.key !== "Meta") {
    expectedKeys++
  }

  shortcutsList.forEach(function (shortcut) {
    if ((shortcut.keyUp && input.type !== "keyUp") || (!shortcut.keyUp && input.type !== "keyDown")) {
      return
    }
    var matches = true
    var matchedKeys = 0
    shortcut.keys.forEach(function (key) {
      if (! (
        key === input.key.toLowerCase() ||
        key === input.code.replace('Digit', '') ||
        (key === 'left' && input.key === 'ArrowLeft') ||
        (key === 'right' && input.key === 'ArrowRight') ||
        (key === 'up' && input.key === 'ArrowUp') ||
        (key === 'down' && input.key === 'ArrowDown') ||
        (key === 'alt' && (input.alt || input.key === "Alt")) ||
        (key === 'shift' && (input.shift || input.key === "Shift")) ||
        (key === 'ctrl' && (input.control || input.key === "Control")) ||
        (key === 'mod' && window.platformType === 'mac' && (input.meta || input.key === "Meta")) ||
        (key === 'mod' && window.platformType !== 'mac' && (input.control || input.key === "Control"))
        )
      ) {
        matches = false
      } else {
        matchedKeys++
      }
    })

    if (matches && matchedKeys === expectedKeys) {
      shortcut.fn(null, shortcut.combo)
    }
  })
})
;
/* handles viewing pdf files using pdf.js. Recieves events from main.js will-download */

var browserUI = require('browserUI.js')
var urlParser = require('util/urlParser.js')

var PDFViewer = {
  url: {
    base: urlParser.getFileURL(__dirname + '/pages/pdfViewer/index.html'),
    queryString: '?url=%l'
  },
  isPDFViewer: function (tabId) {
    return tabs.get(tabId).url.startsWith(PDFViewer.url.base)
  },
  printPDF: function (viewerTabId) {
    if (!PDFViewer.isPDFViewer(viewerTabId)) {
      throw new Error("attempting to print in a tab that isn't a PDF viewer")
    }

    webviews.get(viewerTabId).executeJavaScript('parentProcessActions.printPDF()', false)
  },
  savePDF: function (viewerTabId) {
    if (!PDFViewer.isPDFViewer(viewerTabId)) {
      throw new Error("attempting to save in a tab that isn't a PDF viewer")
    }

    webviews.get(viewerTabId).executeJavaScript('parentProcessActions.downloadPDF()', false)
  },
  startFindInPage: function (viewerTabId) {
    if (!PDFViewer.isPDFViewer(viewerTabId)) {
      throw new Error("attempting to call startFindInPage in a tab that isn't a PDF viewer")
    }

    webviews.get(viewerTabId).executeJavaScript('parentProcessActions.startFindInPage()', false)
  },
  endFindInPage: function (viewerTabId) {
    if (!PDFViewer.isPDFViewer(viewerTabId)) {
      throw new Error("attempting to call endFindInPage in a tab that isn't a PDF viewer")
    }

    webviews.get(viewerTabId).executeJavaScript('parentProcessActions.endFindInPage()', false)
  },
  handlePDFOpenEvent: function (event, data) {
    var PDFurl = PDFViewer.url.base + PDFViewer.url.queryString.replace('%l', encodeURIComponent(data.url))

    // we don't know which tab the event came from, so we loop through each tab to find out.

    tabs.get().forEach(function (tab) {
      var webview = webviews.get(tab.id)
      if (webview && webview.id === data.webContentsId) {
        browserUI.navigate(tab.id, PDFurl)
      }
    })
  }
}

ipc.on('openPDF', PDFViewer.handlePDFOpenEvent)

/*
migrate legacy bookmarked PDFs to the new viewer URL
TODO remove this in a future version
*/

var legacyPDFViewerURL = 'file://' + __dirname + '/pdfjs/web/viewer.html?url='

db.transaction('rw', db.places, function () {
  db.places.where('url').startsWith(legacyPDFViewerURL).each(function (item) {
    var oldItemURL = item.url

    var pdfBaseURL = oldItemURL.replace(legacyPDFViewerURL, '')
    var newViewerURL = PDFViewer.url.base + PDFViewer.url.queryString.replace('%l', encodeURIComponent(pdfBaseURL))

    item.url = newViewerURL

    db.places.put(item).then(function () {
      db.places.where('url').equals(oldItemURL).delete()
    })
  })
})
;
var findinpage = {
  container: document.getElementById('findinpage-bar'),
  input: document.getElementById('findinpage-input'),
  counter: document.getElementById('findinpage-count'),
  previous: document.getElementById('findinpage-previous-match'),
  next: document.getElementById('findinpage-next-match'),
  endButton: document.getElementById('findinpage-end'),
  activeWebview: null,
  start: function (options) {
    webviews.releaseFocus()

    findinpage.input.placeholder = l('searchInPage')

    findinpage.activeWebview = webviews.get(tabs.getSelected())

    /* special case for PDF viewer */

    if (PDFViewer.isPDFViewer(tabs.getSelected())) {
      PDFViewer.startFindInPage(tabs.getSelected())
    }

    findinpage.counter.textContent = ''
    findinpage.container.hidden = false
    findinpage.input.focus()
    findinpage.input.select()

    if (findinpage.input.value) {
      findinpage.activeWebview.findInPage(findinpage.input.value)
    }
  },
  end: function (options) {
    options = options || {}
    var action = options.action || 'keepSelection'

    findinpage.container.hidden = true

    if (findinpage.activeWebview) {
      findinpage.activeWebview.stopFindInPage(action)

      /* special case for PDF viewer */
      if (PDFViewer.isPDFViewer(tabs.getSelected())) {
        PDFViewer.endFindInPage(tabs.getSelected())
      }

      if (findinpage.input === document.activeElement) {
        findinpage.activeWebview.focus()
      }
    }

    findinpage.activeWebview = null
  }
}

findinpage.input.addEventListener('blur', function (e) {
  if (!e.relatedTarget || !e.relatedTarget.classList.contains('findinpage-control')) {
    findinpage.end()
  }
})

findinpage.endButton.addEventListener('click', function () {
  findinpage.end()
})

findinpage.input.addEventListener('input', function (e) {
  if (this.value) {
    findinpage.activeWebview.findInPage(this.value)
  }
})

findinpage.input.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) { // Return/Enter key
    findinpage.activeWebview.findInPage(findinpage.input.value, {
      forward: !e.shiftKey, // find previous if Shift is pressed
      findNext: true
    })
  }
})

findinpage.previous.addEventListener('click', function (e) {
  findinpage.activeWebview.findInPage(findinpage.input.value, {
    forward: false,
    findNext: true
  })
  findinpage.input.focus()
})

findinpage.next.addEventListener('click', function (e) {
  findinpage.activeWebview.findInPage(findinpage.input.value, {
    forward: true,
    findNext: true
  })
  findinpage.input.focus()
})

webviews.bindEvent('found-in-page', function (e, data) {
  if (data.matches !== undefined) {
    var text
    if (data.matches === 1) {
      text = l('findMatchesSingular')
    } else {
      text = l('findMatchesPlural')
    }

    findinpage.counter.textContent = text.replace('%i', data.activeMatchOrdinal).replace('%t', data.matches)
  }
})
;
/* implements userscript support */

var userScriptsEnabled = false
var domainScriptMap = {}

settings.get('userscriptsEnabled', function (value) {
  if (value === true) {
    userScriptsEnabled = true

    /* get a list of all the files */

    var path = window.require('path')
    var scriptDir = path.join(remote.app.getPath('userData'), 'userscripts')

    fs.readdir(scriptDir, function (err, files) {
      if (err || files.length === 0) {
        return
      }

      // store the scripts in memory
      files.forEach(function (filename) {
        if (filename.endsWith('.js')) {
          fs.readFile(path.join(scriptDir, filename), 'utf-8', function (err, file) {
            if (err || !file) {
              return
            }

            var domain = filename.slice(0, -3)
            if (domain.startsWith('www.')) {
              domain = domain.slice(4)
            }
            if (!domain) {
              return
            }
            domainScriptMap[domain] = file
          })
        }
      })
    })
  }
})

/* listen for load events and execute the scripts 
this listener has to be attached immediately so that we can capture events for
webviews that are created at startup
*/

webviews.bindEvent('dom-ready', function (e) {
  if (!userScriptsEnabled) {
    return
  }
  var tab = webviews.getTabFromContents(this)

  webviews.callAsync(tab, 'getURL', null, src => {
    try {
      var domain = new URL(src).hostname
      if (domain.startsWith('www.')) {
        domain = domain.slice(4)
      }
      // global script
      if (domainScriptMap.global) {
        this.executeJavaScript(domainScriptMap.global, false, null)
      }
      // domain-specific scripts
      if (domainScriptMap[domain]) {
        this.executeJavaScript(domainScriptMap[domain], false, null)
      }
    } catch(e) {
      console.warn(e)
    }
  })
})
;
require('navbar/tabColor.js').initialize()
require('places/places.js').initialize()
;
var browserUI = require('browserUI.js')

window.sessionRestore = {
  save: function () {
    var data = {
      version: 2,
      state: JSON.parse(JSON.stringify(tasks.getStringifyableState()))
    }

    // save all tabs that aren't private

    for (var i = 0; i < data.state.tasks.length; i++) {
      data.state.tasks[i].tabs = data.state.tasks[i].tabs.filter(function (tab) {
        return !tab.private
      })
    }

    localStorage.setItem('sessionrestoredata', JSON.stringify(data))
  },
  restore: function () {
    var savedStringData = localStorage.getItem('sessionrestoredata')

    /* the survey should only be shown after an upgrade from an earlier version */
    var shouldShowSurvey = false
    if (savedStringData && !localStorage.getItem('1.8survey')) {
      shouldShowSurvey = true
    }
    localStorage.setItem('1.8survey', 'true')

    try {
      // first run, show the tour
      if (!savedStringData) {
        tasks.setSelected(tasks.add()) // create a new task

        var newTab = currentTask.tabs.add({
          url: 'https://minbrowser.github.io/min/tour'
        })
        browserUI.addTab(newTab, {
          enterEditMode: false
        })
        return
      }

      console.log(savedStringData)

      var data = JSON.parse(savedStringData)

      // the data isn't restorable
      if ((data.version && data.version !== 2) || (data.state && data.state.tasks && data.state.tasks.length === 0)) {
        tasks.setSelected(tasks.add())

        browserUI.addTab(currentTask.tabs.add())
        return
      }

      // add the saved tasks

      data.state.tasks.forEach(function (task) {
        // restore the task item
        tasks.add(task)
      })

      // switch to the previously selected tasks

      browserUI.switchToTask(data.state.selectedTask)

      if (currentTask.tabs.isEmpty()) {
        tabBar.enterEditMode(currentTask.tabs.getSelected())
      }

      // if this isn't the first run, and the survey popup hasn't been shown yet, show it

      if (shouldShowSurvey) {
        fetch('https://minbrowser.github.io/min/survey/survey.json').then(function (response) {
          return response.json()
        }).then(function (data) {
          setTimeout(function () {
            if (data.available && data.url) {
              if (currentTask.tabs.isEmpty()) {
                navigate(currentTask.tabs.getSelected(), data.url)
              } else {
                var surveyTab = currentTask.tabs.add({
                  url: data.url
                })
                browserUI.addTab(surveyTab, {
                  enterEditMode: false
                })
              }
            }}, 200)
        })
      }
    } catch (e) {
      // an error occured while restoring the session data

      console.error('restoring session failed: ', e)

      var backupSavePath = window.require('path').join(remote.app.getPath('userData'), 'sessionRestoreBackup-' + Date.now() + '.json')

      window.require('fs').writeFileSync(backupSavePath, savedStringData)

      // destroy any tabs that were created during the restore attempt
      initializeTabState()

      // create a new tab with an explanation of what happened
      var newTask = tasks.add()
      var newSessionErrorTab = tasks.get(newTask).tabs.add({
        url: 'file://' + __dirname + '/pages/sessionRestoreError/index.html?backupLoc=' + encodeURIComponent(backupSavePath)
      })

      browserUI.switchToTask(newTask)
      browserUI.switchToTab(newSessionErrorTab)
    }
  }
}

// TODO make this a preference

sessionRestore.restore()

setInterval(sessionRestore.save, 12500)
;
function shouldEnableDarkMode () {
  var hours = new Date().getHours()
  return hours > 21 || hours < 6
}

function enableDarkMode () {
  document.body.classList.add('dark-mode')
  window.isDarkMode = true
  window.dispatchEvent(new CustomEvent('themechange'))
}

function disableDarkMode () {
  document.body.classList.remove('dark-mode')
  window.isDarkMode = false
  window.dispatchEvent(new CustomEvent('themechange'))
}

settings.get('darkMode', function (value) {
  if (value === true) {
    enableDarkMode()
    return
  }

  if (shouldEnableDarkMode()) {
    enableDarkMode()
  }

  setInterval(function () {
    if (shouldEnableDarkMode()) {
      if (!window.isDarkMode) {
        enableDarkMode()
      }
    } else if (window.isDarkMode) {
      disableDarkMode()
    }
  }, 10000)
})
;
var webviewGestures = {
  showBackArrow: function () {
    // this is temporarily disabled until we find a way to make it work with BrowserViews
    return
    var backArrow = document.getElementById('leftArrowContainer')
    backArrow.classList.toggle('shown')
    backArrow.classList.toggle('animating')
    setTimeout(function () {
      backArrow.classList.toggle('shown')
    }, 600)
    setTimeout(function () {
      backArrow.classList.toggle('animating')
    }, 900)
  },
  showForwardArrow: function () {
    // this is temporarily disabled until we find a way to make it work with BrowserViews
    return
    var forwardArrow = document.getElementById('rightArrowContainer')
    forwardArrow.classList.toggle('shown')
    forwardArrow.classList.toggle('animating')
    setTimeout(function () {
      forwardArrow.classList.toggle('shown')
    }, 600)
    setTimeout(function () {
      forwardArrow.classList.toggle('animating')
    }, 900)
  },
  zoomWebviewBy: function (tabId, amt) {
    var w = webviews.get(tabId)
    w.getZoomFactor(function (existingZoom) {
      var newZoom = Math.min(webviewMaxZoom, Math.max(webviewMinZoom, existingZoom + amt))
      w.setZoomFactor(newZoom)
    })
  },
  zoomWebviewIn: function (tabId) {
    return this.zoomWebviewBy(tabId, 0.2)
  },
  zoomWebviewOut: function (tabId) {
    return this.zoomWebviewBy(tabId, -0.2)
  },
  resetWebviewZoom: function (tabId) {
    webviews.get(tabId).setZoomFactor(1.0)
  }
}

var swipeGestureTimeout = -1
var swipeGestureLowVelocityTimeout = -1
var swipeGestureDelay = 100 // delay before gesture is complete
var swipeGestureVelocityDelay = 70 // the time (in ms) that can elapse without a minimum amount of movement before the gesture is considered almost completed

var horizontalMouseMove = 0
var verticalMouseMove = 0

var beginningScrollLeft = null
var beginningScrollRight = null

var hasShownSwipeArrow = false

var initialZoomKeyState = null
var initialSecondaryKeyState = null

var webviewMinZoom = 0.5
var webviewMaxZoom = 3.0

function resetCounters () {
  horizontalMouseMove = 0

  verticalMouseMove = 0

  beginningScrollLeft = null
  beginningScrollRight = null

  hasShownSwipeArrow = false

  initialZoomKeyState = null
  initialSecondaryKeyState = null
}

function onSwipeGestureLowVelocity () {
  // swipe to the left to go forward
  if (horizontalMouseMove - beginningScrollRight > 150 && Math.abs(horizontalMouseMove / verticalMouseMove) > 2.5) {
    if (beginningScrollRight < 10) {
      resetCounters()
      settings.get('swipeNavigationEnabled', function (value) {
        if (value === true || value === undefined) {
          webviews.get(tabs.getSelected()).goForward()
        }
      })
    }
  }

  // swipe to the right to go backwards
  if (horizontalMouseMove + beginningScrollLeft < -150 && Math.abs(horizontalMouseMove / verticalMouseMove) > 2.5) {
    if (beginningScrollLeft < 10) {
      resetCounters()
      settings.get('swipeNavigationEnabled', function (value) {
        if (value === true || value === undefined) {
          webviews.get(tabs.getSelected()).goBack()
        }
      })
    }
  }
}

function onSwipeGestureFinish () {
  resetCounters()
}

webviews.bindIPC('wheel-event', function (webview, tabId, e) {
  e = JSON.parse(e)

  verticalMouseMove += e.deltaY
  horizontalMouseMove += e.deltaX

  var platformZoomKey = ((navigator.platform === 'MacIntel') ? e.metaKey : e.ctrlKey)
  var platformSecondaryKey = ((navigator.platform === 'MacIntel') ? e.ctrlKey : false)

  if (beginningScrollLeft === null || beginningScrollRight === null) {
    webviews.get(tabs.getSelected()).executeJavaScript(`
    (function () {
      var left = 0
      var right = 0
      
      var n = document.elementFromPoint(${e.clientX}, ${e.clientY})
      while (n) {
        if (n.scrollLeft !== undefined) {
            left = Math.max(left, n.scrollLeft)
            right = Math.max(right, n.scrollWidth - n.clientWidth - n.scrollLeft)
        }
        n = n.parentElement
      }  
      return {left, right}
    })()
    `, false, function (result) {
      if (beginningScrollLeft === null || beginningScrollRight === null) {
        beginningScrollLeft = result.left
        beginningScrollRight = result.right
      }
    })
  }

  if (initialZoomKeyState === null) {
    initialZoomKeyState = platformZoomKey
  }

  if (initialSecondaryKeyState === null) {
    initialSecondaryKeyState = platformSecondaryKey
  }

  if (Math.abs(e.deltaX) >= 20 || Math.abs(e.deltaY) >= 20) {
    clearTimeout(swipeGestureLowVelocityTimeout)
    swipeGestureLowVelocityTimeout = setTimeout(onSwipeGestureLowVelocity, swipeGestureVelocityDelay)

    if (horizontalMouseMove < -150 && Math.abs(horizontalMouseMove / verticalMouseMove) > 2.5 && !hasShownSwipeArrow) {
      hasShownSwipeArrow = true
      webviewGestures.showBackArrow()
    } else if (horizontalMouseMove > 150 && Math.abs(horizontalMouseMove / verticalMouseMove) > 2.5 && !hasShownSwipeArrow) {
      hasShownSwipeArrow = true
      webviewGestures.showForwardArrow()
    }
  }

  clearTimeout(swipeGestureTimeout)
  swipeGestureTimeout = setTimeout(onSwipeGestureFinish, swipeGestureDelay)

  /* cmd-key while scrolling should zoom in and out */

  if (platformZoomKey && initialZoomKeyState) {
    if (verticalMouseMove > 55) {
      verticalMouseMove = -10
      webviewGestures.zoomWebviewOut(tabs.getSelected())
    }

    if (verticalMouseMove < -55) {
      verticalMouseMove = -10
      webviewGestures.zoomWebviewIn(tabs.getSelected())
    }
  }
})
;

},{"browserUI.js":3,"dexie":33,"downloadManager.js":4,"dragula":35,"focusMode.js":5,"menuBarVisibility.js":6,"mousetrap":36,"navbar/bookmarkStar.js":7,"navbar/progressBar.js":8,"navbar/tabActivity.js":9,"navbar/tabColor.js":10,"places/places.js":11,"previewCache.js":12,"searchbar/searchbar.js":13,"searchbar/searchbarAutocomplete.js":14,"searchbar/searchbarPlugins.js":15,"searchbar/searchbarUtils.js":16,"string_score":37,"tabState/task.js":19,"taskOverlay/taskOverlayBuilder.js":20,"util/database.js":21,"util/hosts.js":22,"util/relativeDate.js":23,"util/searchEngine.js":24,"util/urlParser.js":26}],2:[function(require,module,exports){
// a neural network for determing which text color to use, generated using http://harthur.github.io/brain/
var runNetwork = function anonymous (input) {
  var net = {
    'layers': [{
      'r': {},
      'g': {},
      'b': {}
    }, {
      '0': {
        'bias': 14.176907520571566,
        'weights': {
          'r': -3.2764240497480652,
          'g': -16.90247884718719,
          'b': -2.9976364179397814
        }
      },
      '1': {
        'bias': 9.086071102351246,
        'weights': {
          'r': -4.327474143397604,
          'g': -15.780660155750773,
          'b': 2.879230202567851
        }
      },
      '2': {
        'bias': 22.274487339773476,
        'weights': {
          'r': -3.5830205067960965,
          'g': -25.498384261673618,
          'b': -6.998329189107962
        }
      }
    }, {
      'black': {
        'bias': 17.873962570788997,
        'weights': {
          '0': -15.542217788633987,
          '1': -13.377152708685674,
          '2': -24.52215186113144
        }
      }
    }],
    'outputLookup': true,
    'inputLookup': true
  }

  for (var i = 1; i < net.layers.length; i++) {
    var layer = net.layers[i]
    var output = {}

    for (var id in layer) {
      var node = layer[id]
      var sum = node.bias

      for (var iid in node.weights) {
        sum += node.weights[iid] * input[iid]
      }
      output[id] = (1 / (1 + Math.exp(-sum)))
    }
    input = output
  }
  return output
}

module.exports = runNetwork

},{}],3:[function(require,module,exports){
/* common actions that affect different parts of the UI (webviews, tabstrip, etc) */

var urlParser = require('util/urlParser.js')
var focusMode = require('focusMode.js')
var tabActivity = require('navbar/tabActivity.js')
var tabColor = require('navbar/tabColor.js')

/* loads a page in a webview */

window.navigate = function (tabId, newURL) {
  newURL = urlParser.parse(newURL)

  tabs.update(tabId, {
    url: newURL
  })

  webviews.update(tabId, newURL)

  tabBar.leaveEditMode()
}

/* creates a new task */

function addTask () {
  tasks.setSelected(tasks.add())
  taskOverlay.hide()

  tabBar.rerenderAll()
  addTab()
}

/* creates a new tab */

/*
options
  options.enterEditMode - whether to enter editing mode when the tab is created. Defaults to true.
  options.openInBackground - whether to open the tab without switching to it. Defaults to false.
*/
function addTab (tabId = tabs.add(), options = {}) {
  tabBar.addTab(tabId)
  webviews.add(tabId)

  if (!options.openInBackground) {
    switchToTab(tabId, {
      focusWebview: options.enterEditMode === false
    })
    if (options.enterEditMode !== false) {
      tabBar.enterEditMode(tabId)
    }
  } else {
    tabBar.getTab(tabId).scrollIntoView()
  }
}

/* destroys a task object and the associated webviews */

function destroyTask (id) {
  var task = tasks.get(id)

  task.tabs.forEach(function (tab) {
    webviews.destroy(tab.id)
  })

  tasks.destroy(id)
}

/* destroys the webview and tab element for a tab */
function destroyTab (id) {
  tabBar.removeTab(id)
  tabs.destroy(id) // remove from state - returns the index of the destroyed tab
  webviews.destroy(id) // remove the webview
}

/* destroys a task, and either switches to the next most-recent task or creates a new one */

function closeTask (taskId) {
  destroyTask(taskId)

  if (taskId === currentTask.id) {
    // the current task was destroyed, find another task to switch to

    if (tasks.getLength() === 0) {
      // there are no tasks left, create a new one
      return addTask()
    } else {
      // switch to the most-recent task

      var recentTaskList = tasks.map(function (task) {
        return { id: task.id, lastActivity: tasks.getLastActivity(task.id) }
      })

      const mostRecent = recentTaskList.reduce(
        (latest, current) =>
          current.lastActivity > latest.lastActivity ? current : latest
      )

      return switchToTask(mostRecent.id)
    }
  }
}

/* destroys a tab, and either switches to the next tab or creates a new one */
function closeTab (tabId) {
  /* disabled in focus mode */
  if (focusMode.enabled()) {
    focusMode.warn()
    return
  }

  if (tabId === tabs.getSelected()) {
    var currentIndex = tabs.getIndex(tabs.getSelected())
    var nextTab =
      tabs.getAtIndex(currentIndex - 1) || tabs.getAtIndex(currentIndex + 1)

    destroyTab(tabId)

    if (nextTab) {
      switchToTab(nextTab.id)
    } else {
      addTab()
    }
  } else {
    destroyTab(tabId)
  }
}

/* changes the currently-selected task and updates the UI */

function switchToTask (id) {
  tasks.setSelected(id)

  tabBar.rerenderAll()

  var taskData = tasks.get(id)

  if (taskData.tabs.length > 0) {
    var selectedTab = taskData.tabs.getSelected()

    // if the task has no tab that is selected, switch to the most recent one

    if (!selectedTab) {
      selectedTab = taskData.tabs.get().sort(function (a, b) {
        return b.lastActivity - a.lastActivity
      })[0].id
    }

    switchToTab(selectedTab)
  } else {
    addTab()
  }
}

/* switches to a tab - update the webview, state, tabstrip, etc. */

function switchToTab (id, options) {
  options = options || {}

  /* tab switching disabled in focus mode */
  if (focusMode.enabled()) {
    focusMode.warn()
    return
  }

  tabBar.leaveEditMode()

  // set the tab's lastActivity to the current time

  if (tabs.getSelected()) {
    tabs.update(tabs.getSelected(), {
      lastActivity: Date.now()
    })
  }

  tabs.setSelected(id)
  tabBar.setActiveTab(id)
  webviews.setSelected(id, {
    focus: options.focusWebview !== false
  })

  tabColor.refresh()

  sessionRestore.save()

  tabActivity.refresh()
}

module.exports = {
  navigate,
  addTask,
  addTab,
  destroyTask,
  destroyTab,
  closeTask,
  closeTab,
  switchToTask,
  switchToTab
}

},{"focusMode.js":5,"navbar/tabActivity.js":9,"navbar/tabColor.js":10,"util/urlParser.js":26}],4:[function(require,module,exports){
function getFileSizeString (bytes) {
  let prefixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

  let size = bytes
  let prefixIndex = 0

  while (size > 900) { // prefer "0.9 KB" to "949 bytes"
    size /= 1000
    prefixIndex++
  }

  return (Math.round(size * 10) / 10) + ' ' + prefixes[prefixIndex]
}

const downloadManager = {
  isShown: false,
  bar: document.getElementById('download-bar'),
  container: document.getElementById('download-container'),
  closeButton: document.getElementById('download-close-button'),
  height: 40,
  lastDownloadCompleted: null,
  downloadItems: {},
  downloadBarElements: {},
  show: function () {
    if (!downloadManager.isShown) {
      downloadManager.isShown = true
      downloadManager.bar.hidden = false
      webviews.adjustMargin([0, 0, downloadManager.height, 0])
    }
  },
  hide: function () {
    if (downloadManager.isShown) {
      downloadManager.isShown = false
      downloadManager.bar.hidden = true
      webviews.adjustMargin([0, 0, downloadManager.height * -1, 0])

      // remove all completed items
      for (let item in downloadManager.downloadItems) {
        if (downloadManager.downloadItems[item].status === 'completed') {
          downloadManager.removeItem(item)
        }
      }
    }
  },
  removeItem: function (path) {
    if (downloadManager.downloadBarElements[path]) {
      downloadManager.downloadBarElements[path].container.remove()
    }

    delete downloadManager.downloadBarElements[path]
    delete downloadManager.downloadItems[path]

    if (Object.keys(downloadManager.downloadItems).length === 0) {
      downloadManager.hide()
    }
  },
  onItemClicked: function (path) {
    if (downloadManager.downloadItems[path].status === 'completed') {
      electron.shell.openItem(path)
      // provide a bit of time for the file to open before the download bar disappears
      setTimeout(function () {
        downloadManager.removeItem(path)
      }, 100)
    }
  },
  onItemDragged: function (path) {
    remote.app.getFileIcon(path, {}, function (err, icon) {
      if (err) {
        console.warn(err)
        return
      }
      remote.getCurrentWebContents().startDrag({
        file: path,
        icon: icon
      })
    })
  },
  onDownloadCompleted: function () {
    downloadManager.lastDownloadCompleted = Date.now()
    setTimeout(function () {
      if (Date.now() - downloadManager.lastDownloadCompleted >= 120000 && Object.values(downloadManager.downloadItems).filter(i => i.status === 'progressing').length === 0) {
        downloadManager.hide()
      }
    }, 120 * 1000)
  },
  createItem: function (downloadItem) {
    let container = document.createElement('div')
    container.className = 'download-item'
    container.setAttribute('role', 'listitem')
    container.setAttribute('draggable', 'true')

    let title = document.createElement('div')
    title.className = 'download-title'
    title.textContent = downloadItem.name
    container.appendChild(title)

    let infoBox = document.createElement('div')
    infoBox.className = 'download-info'
    container.appendChild(infoBox)

    let progress = document.createElement('div')
    progress.className = 'download-progress'
    container.appendChild(progress)

    let dropdown = document.createElement('i')
    dropdown.className = 'download-cancel-button fa fa-angle-down'
    container.appendChild(dropdown)

    container.addEventListener('click', function () {
      downloadManager.onItemClicked(downloadItem.path)
    })
    container.addEventListener('dragstart', function (e) {
      e.preventDefault()
      downloadManager.onItemDragged(downloadItem.path)
    })

    dropdown.addEventListener('click', function () {
      let menu = new remote.Menu()
      menu.append(new remote.MenuItem({
        label: l('downloadCancel'),
        click: function () {
          ipc.send('cancelDownload', downloadItem.path)
          downloadManager.removeItem(downloadItem.path)
        }
      }))
      menu.popup({
        x: Math.round(dropdown.getBoundingClientRect().left),
        y: Math.round(dropdown.getBoundingClientRect().top - 15)
      })
    })

    downloadManager.container.appendChild(container)
    downloadManager.downloadBarElements[downloadItem.path] = {
    container, title, infoBox, progress, dropdown}
  },
  updateItem: function (downloadItem) {
    let elements = downloadManager.downloadBarElements[downloadItem.path]

    if (downloadItem.status === 'completed') {
      elements.container.classList.remove('loading')
      elements.progress.hidden = true
      elements.dropdown.hidden = true
      elements.infoBox.textContent = l('downloadStateCompleted')
    } else if (downloadItem.status === 'interrupted') {
      elements.container.classList.remove('loading')
      elements.progress.hidden = true
      elements.dropdown.hidden = true
      elements.infoBox.textContent = l('downloadStateFailed')
    } else {
      elements.container.classList.add('loading')
      elements.progress.hidden = false
      elements.dropdown.hidden = false
      elements.infoBox.textContent = getFileSizeString(downloadItem.size.total)
      elements.progress.style.transform = 'scaleX(' + (downloadItem.size.received / downloadItem.size.total) + ')'
    }
  },
  initialize: function () {
    this.closeButton.addEventListener('click', function () {
      downloadManager.hide()
    })

    ipc.on('download-info', function (e, info) {
      if (!info.path) {
        // download save location hasn't been chosen yet
        return
      }

      if (info.status === 'cancelled') {
        downloadManager.removeItem(info.path)
        return
      }

      if (info.status === 'completed') {
        downloadManager.onDownloadCompleted()
      }

      if (!downloadManager.downloadItems[info.path]) {
        downloadManager.show()
        downloadManager.createItem(info)
      }
      downloadManager.updateItem(info)

      downloadManager.downloadItems[info.path] = info
    })
  }
}

module.exports = downloadManager

},{}],5:[function(require,module,exports){
var isFocusMode = false

ipc.on('enterFocusMode', function () {
  isFocusMode = true
  document.body.classList.add('is-focus-mode')

  setTimeout(function () { // wait to show the message until the tabs have been hidden, to make the message less confusing
    electron.remote.dialog.showMessageBox({
      type: 'info',
      buttons: [l('closeDialog')],
      message: l('isFocusMode'),
      detail: l('focusModeExplanation1') + ' ' + l('focusModeExplanation2')
    })
  }, 16)
})

ipc.on('exitFocusMode', function () {
  isFocusMode = false
  document.body.classList.remove('is-focus-mode')
})

module.exports = {
  enabled: function () {
    return isFocusMode
  },
  warn: function () {
    electron.remote.dialog.showMessageBox({
      type: 'info',
      buttons: [l('closeDialog')],
      message: l('isFocusMode'),
      detail: l('focusModeExplanation2')
    })
  }
}

},{}],6:[function(require,module,exports){
const settings = require('util/settings.js')

function initialize () {
  settings.get('menuBarVisible', function (value) {
    if (value === false) {
      remote.getCurrentWindow().setMenuBarVisibility(false)
    } else {
      // menu bar should be visible, do nothing
    }
  })
}

function showMenuBar () {
  remote.getCurrentWindow().setMenuBarVisibility(true)
  settings.set('menuBarVisible', true)
}

function hideMenuBar () {
  remote.getCurrentWindow().setMenuBarVisibility(false)
  settings.set('menuBarVisible', false)
}

function toggleMenuBar () {
  if (navigator.platform === 'Win32') {
    // use secondary menu instead of application menu on Windows
    return showSecondaryMenu()
  }
  settings.get('menuBarVisible', function (value) {
    if (value === false) {
      showMenuBar()
    } else {
      hideMenuBar()
    }
  })
}

module.exports = {initialize, toggleMenuBar}

},{"util/settings.js":25}],7:[function(require,module,exports){
const db = require('util/database.js')
const places = require('places/places.js')

const bookmarkStar = {
  create: function (tabId) {
    const star = document.createElement('i')
    star.className = 'fa fa-star-o bookmarks-button' // alternative icon is fa-bookmark

    star.addEventListener('click', function (e) {
      bookmarkStar.onClick(tabId, star)
    })

    bookmarkStar.update(tabId, star)

    return star
  },
  onClick: function (tabId, star) {
    star.classList.toggle('fa-star')
    star.classList.toggle('fa-star-o')

    places.toggleBookmarked(tabId)
  },
  update: function (tabId, star) {
    const currentURL = tabs.get(tabId).url

    if (!currentURL || currentURL === 'about:blank') { // no url, can't be bookmarked
      star.hidden = true
    } else {
      star.hidden = false
    }

    // check if the page is bookmarked or not, and update the star to match

    db.places.where('url').equals(currentURL).first(function (item) {
      if (item && item.isBookmarked) {
        star.classList.remove('fa-star-o')
        star.classList.add('fa-star')
      } else {
        star.classList.remove('fa-star')
        star.classList.add('fa-star-o')
      }
    })
  }
}

module.exports = bookmarkStar

},{"places/places.js":11,"util/database.js":21}],8:[function(require,module,exports){
const progressBar = {
  create: function () {
    var pbContainer = document.createElement('div')
    pbContainer.className = 'progress-bar-container'

    var pb = document.createElement('div')
    pb.className = 'progress-bar p0'
    pb.hidden = true
    pbContainer.appendChild(pb)

    return pbContainer
  },
  update: function (bar, status) {
    if (status === 'start') {
      var loadID = Date.now().toString()
      bar.setAttribute('loading', loadID) // we need to use unique ID's to ensure that the same page that was loading initialy is the same page that is loading 4 seconds later
      setTimeout(function () {
        if (bar.getAttribute('loading') === loadID) {
          bar.hidden = false
          requestAnimationFrame(function () {
            bar.className = 'progress-bar p25'
          })
        }
      }, 4000)
    } else {
      bar.setAttribute('loading', 'false')
      if (bar.classList.contains('p25')) {
        bar.className = 'progress-bar p100'
        setTimeout(function () {
          bar.className = 'progress-bar p0'
          bar.hidden = true
        }, 500)
      }
    }
  }
}

module.exports = progressBar

},{}],9:[function(require,module,exports){
/* fades out tabs that are inactive */

var tabActivity = {
  minFadeAge: 330000,
  refresh: function () {
    requestAnimationFrame(function () {
      var tabSet = tabs.get()
      var selected = tabs.getSelected()
      var time = Date.now()

      tabSet.forEach(function (tab) {
        if (selected === tab.id) { // never fade the current tab
          tabBar.getTab(tab.id).classList.remove('fade')
          return
        }
        if (time - tab.lastActivity > tabActivity.minFadeAge) { // the tab has been inactive for greater than minActivity, and it is not currently selected
          tabBar.getTab(tab.id).classList.add('fade')
        } else {
          tabBar.getTab(tab.id).classList.remove('fade')
        }
      })
    })
  },
  init: function () {
    setInterval(tabActivity.refresh, 7500)
  }
}

module.exports = tabActivity

},{}],10:[function(require,module,exports){
const colorExtractorImage = document.createElement('img')
const colorExtractorCanvas = document.createElement('canvas')
const colorExtractorContext = colorExtractorCanvas.getContext('2d')

const textColorNN = require('ext/textColor/textColor.js')

const defaultColors = {
  private: ['rgb(58, 44, 99)', 'white'],
  lightMode: ['rgb(255, 255, 255)', 'black'],
  darkMode: ['rgb(40, 44, 52)', 'white']
}

function getColorFromImage (image) {
  const w = colorExtractorImage.width
  const h = colorExtractorImage.height
  colorExtractorCanvas.width = w
  colorExtractorCanvas.height = h

  const offset = Math.max(1, Math.round(0.00032 * w * h))

  colorExtractorContext.drawImage(colorExtractorImage, 0, 0, w, h)

  const data = colorExtractorContext.getImageData(0, 0, w, h).data

  let pixels = {}

  let d, add, sum

  for (let i = 0; i < data.length; i += 4 * offset) {
    d = Math.round(data[i] / 5) * 5 + ',' + Math.round(data[i + 1] / 5) * 5 + ',' + Math.round(data[i + 2] / 5) * 5

    add = 1
    sum = data[i] + data[i + 1] + data[i + 2]

    // very dark or light pixels shouldn't be counted as heavily
    if (sum < 310) {
      add = 0.35
    }

    if (sum < 50) {
      add = 0.01
    }

    if (data[i] > 210 || data[i + 1] > 210 || data[i + 2] > 210) {
      add = 0.5 - (0.0001 * sum)
    }

    if (pixels[d]) {
      pixels[d] = pixels[d] + add
    } else {
      pixels[d] = add
    }
  }

  // find the largest pixel set
  let largestPixelSet = null
  let ct = 0

  for (let k in pixels) {
    if (k === '255,255,255' || k === '0,0,0') {
      pixels[k] *= 0.05
    }
    if (pixels[k] > ct) {
      largestPixelSet = k
      ct = pixels[k]
    }
  }

  let res = largestPixelSet.split(',')

  for (let i = 0; i < res.length; i++) {
    res[i] = parseInt(res[i])
  }

  // dim the colors late at night or early in the morning, or when dark mode is enabled
  let colorChange = 1
  if (hours > 20) {
    colorChange -= 0.015 * Math.pow(2.75, hours - 20)
  } else if (hours < 6.5) {
    colorChange -= -0.15 * Math.pow(1.36, hours) + 1.15
  }

  if (window.isDarkMode) {
    colorChange = Math.min(colorChange, 0.58)
  }

  res[0] = Math.round(res[0] * colorChange)
  res[1] = Math.round(res[1] * colorChange)
  res[2] = Math.round(res[2] * colorChange)

  let isLowContrast = false
  // is this a color that won't change very much when lightened or darkened?
  // TODO is lowContrast the best name for this?
  if (res.filter(i => (i > 235 || i < 15)).length === 3) {
    isLowContrast = true
  }

  return {color: res, isLowContrast}
}

function getHours () {
  const date = new Date()
  return date.getHours() + (date.getMinutes() / 60)
}

let hours = getHours()

// we cache the hours so we don't have to query every time we change the color
setInterval(function () {
  hours = getHours()
}, 5 * 60 * 1000)

function getRGBString (c) {
  return 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')'
}

function getTextColor (bgColor) {
  const obj = {
    r: bgColor[0] / 255,
    g: bgColor[1] / 255,
    b: bgColor[2] / 255
  }
  const output = textColorNN(obj)
  if (output.black > 0.5) {
    return 'black'
  }
  return 'white'
}

function setColor (bg, fg, isLowContrast) {
  const backgroundElements = document.getElementsByClassName('theme-background-color')
  const textElements = document.getElementsByClassName('theme-text-color')

  for (let i = 0; i < backgroundElements.length; i++) {
    backgroundElements[i].style.backgroundColor = bg
  }

  for (let i = 0; i < textElements.length; i++) {
    textElements[i].style.color = fg
  }

  if (fg === 'white') {
    document.body.classList.add('dark-theme')
  } else {
    document.body.classList.remove('dark-theme')
  }
  if (isLowContrast) {
    document.body.classList.add('theme-background-low-contrast')
  } else {
    document.body.classList.remove('theme-background-low-contrast')
  }
}

const tabColor = {
  initialize: function () {
    webviews.bindEvent('page-favicon-updated', function (e, favicons) {
      const id = webviews.getTabFromContents(this)
      tabColor.updateFromImage(favicons, id)
    })

    // theme changes can affect the tab colors
    window.addEventListener('themechange', function (e) {
      tabColor.refresh()
    })
  },
  updateFromImage: function (favicons, tabId) {
    // private tabs always use a special color, we don't need to get the icon
    if (tabs.get(tabId).private === true) {
      return
    }

    requestIdleCallback(function () {
      colorExtractorImage.onload = function (e) {
        const backgroundColor = getColorFromImage(colorExtractorImage)
        const textColor = getTextColor(backgroundColor.color)

        const backgroundString = getRGBString(backgroundColor.color)

        tabs.update(tabId, {
          backgroundColor: backgroundString,
          lowContrastBackground: backgroundColor.isLowContrast,
          foregroundColor: textColor
        })

        if (tabId === tabs.getSelected()) {
          tabColor.refresh()
        }
      }
      colorExtractorImage.src = favicons[0]
    }, {
      timeout: 1000
    })
  },
  refresh: function () {
    const tab = tabs.get(tabs.getSelected())

    // private tabs have their own color scheme
    if (tab.private) {
      return setColor(defaultColors.private[0], defaultColors.private[1])
    }

    // use the colors extracted from the page icon
    if (tab.backgroundColor || tab.foregroundColor) {
      return setColor(tab.backgroundColor, tab.foregroundColor, tab.lowContrastBackground)
    }

    // otherwise use the default colors
    if (window.isDarkMode) {
      return setColor(defaultColors.darkMode[0], defaultColors.darkMode[1])
    }
    return setColor(defaultColors.lightMode[0], defaultColors.lightMode[1])
  }
}

module.exports = tabColor

},{"ext/textColor/textColor.js":2}],11:[function(require,module,exports){
/* global Worker tabs */

const db = require('util/database.js')
const searchEngine = require('util/searchEngine.js')

const places = {
  updateHistory: function (tabId, extractedText, metadata) {
    /* this prevents pages that are immediately left from being saved to history, and also gives the page-favicon-updated event time to fire (so the colors saved to history are correct). */
    setTimeout(function () {
      const tab = tabs.get(tabId)
      if (tab) {
        const data = {
          url: tab.url,
          title: tab.title,
          color: tab.backgroundColor,
          extractedText: extractedText,
          metadata: metadata
        }

        places.worker.postMessage({
          action: 'updateHistory',
          pageData: data
        })
      }
    }, 500)
  },
  receiveHistoryData: function (webview, tabId, args) {
    // called when js/preload/textExtractor.js returns the page's text content

    var tab = tabs.get(tabId),
      data = args[0]

    var isInternalPage = tab.url.indexOf(__dirname) !== -1 && tab.url.indexOf(readerView.readerURL) === -1
    var isSearchPage = searchEngine.isSearchURL(tab.url)

    // full-text data from search results isn't useful
    if (isSearchPage) {
      data.extractedText = ''
    }

    // don't save to history if in private mode, or the page is a browser page
    if (tab.private === false && !isInternalPage) {
      places.updateHistory(tabId, data.extractedText, data.metadata)
    }
  },
  callbacks: [],
  addWorkerCallback: function (callback) {
    const callbackId = Date.now()
    places.callbacks.push({id: callbackId, fn: callback})
    return callbackId
  },
  runWorkerCallback: function (id, data) {
    for (var i = 0; i < places.callbacks.length; i++) {
      if (places.callbacks[i].id === id) {
        places.callbacks[i].fn(data)
        places.callbacks.splice(i, 1)
      }
    }
  },
  deleteHistory: function (url) {
    places.worker.postMessage({
      action: 'deleteHistory',
      pageData: {
        url: url
      }
    })
  },
  deleteAllHistory: function () {
    places.worker.postMessage({
      action: 'deleteAllHistory'
    })
  },
  searchPlaces: function (text, callback, options) {
    const callbackId = places.addWorkerCallback(callback)
    places.worker.postMessage({
      action: 'searchPlaces',
      text: text,
      callbackId: callbackId,
      options: options
    })
  },
  searchPlacesFullText: function (text, callback) {
    const callbackId = places.addWorkerCallback(callback)
    places.worker.postMessage({
      action: 'searchPlacesFullText',
      text: text,
      callbackId: callbackId
    })
  },
  getPlaceSuggestions: function (url, callback) {
    const callbackId = places.addWorkerCallback(callback)
    places.worker.postMessage({
      action: 'getPlaceSuggestions',
      text: url,
      callbackId: callbackId
    })
  },
  onMessage: function (e) { // assumes this is from a search operation
    places.runWorkerCallback(e.data.callbackId, e.data.result)
  },
  updateBookmarkState: function (url, shouldBeBookmarked) {
    places.worker.postMessage({
      action: 'updateBookmarkState',
      pageData: {
        url: url,
        shouldBeBookmarked: shouldBeBookmarked
      }
    })
  },
  toggleBookmarked: function (tabId) { // Toggles whether a URL is bookmarked or not
    const url = tabs.get(tabId).url

    db.places.where('url').equals(url).first(function (item) {
      if (item && item.isBookmarked) {
        places.updateBookmarkState(url, false)
      } else {
        places.updateBookmarkState(url, true)
      }
    })
  },
  initialize: function () {
    places.worker = new Worker('js/places/placesWorker.js')
    places.worker.onmessage = places.onMessage

    webviews.bindIPC('pageData', places.receiveHistoryData)
  }
}

module.exports = places

},{"util/database.js":21,"util/searchEngine.js":24}],12:[function(require,module,exports){
/* saves preview images for each tab */

var previewCache = {
  images: {}, // tabId: image
  get: function (tabId) {
    return previewCache.images[tabId]
  },
  set: function (tabId, image) {
    previewCache.images[tabId] = image
  }
}

var savedData = localStorage.getItem('previewCache')

if (savedData) {
  try {
    previewCache.images = JSON.parse(savedData)
  } catch (e) {
    console.warn('discarding preview cache', e)
    previewCache.images = {}
  }
}

setInterval(function () {
  // discard any images for tabs that don't exist any more
  // TODO replace this with an event listener
  for (var tab in previewCache.images) {
    if (!tasks.getTaskContainingTab(tab)) {
      delete previewCache.images[tab]
    }
  }

  localStorage.setItem('previewCache', JSON.stringify(previewCache.images))
}, 60000)

module.exports = previewCache

},{}],13:[function(require,module,exports){
var browserUI = require('browserUI.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')

function openURLInBackground (url) { // used to open a url in the background, without leaving the searchbar
  var newTab = tabs.add({
    url: url,
    private: tabs.get(tabs.getSelected()).private
  }, tabs.getIndex(tabs.getSelected()) + 1)
  browserUI.addTab(newTab, {
    enterEditMode: false,
    openInBackground: true
  })

  var i = searchbar.el.querySelector('.searchbar-item:focus')
  if (i) { // remove the highlight from an awesomebar result item, if there is one
    i.blur()
  }
}

var searchbar = {
  el: document.getElementById('searchbar'),
  associatedInput: null,
  show: function (associatedInput) {
    searchbar.el.hidden = false
    searchbar.associatedInput = associatedInput
  },
  hide: function () {
    searchbar.associatedInput = null
    searchbar.el.hidden = true

    searchbarPlugins.clearAll()
  },
  getValue: function () {
    var text = searchbar.associatedInput.value
    return text.replace(text.substring(searchbar.associatedInput.selectionStart, searchbar.associatedInput.selectionEnd), '')
  },
  showResults: function (text, event) {
    // find the real input value, accounting for highlighted suggestions and the key that was just pressed
    // delete key doesn't behave like the others, String.fromCharCode returns an unprintable character (which has a length of one)

    if (event && event.keyCode !== 8) {
      var realText = text.substring(0, searchbar.associatedInput.selectionStart) + String.fromCharCode(event.keyCode) + text.substring(searchbar.associatedInput.selectionEnd, text.length)
    } else {
      var realText = text
    }

    searchbarPlugins.run(realText, searchbar.associatedInput, event)
  },
  focusItem: function (options) {
    options = options || {} // fallback if options is null
    var previous = options.focusPrevious

    var allItems = [].slice.call(searchbar.el.querySelectorAll('.searchbar-item:not(.unfocusable)'))
    var currentItem = searchbar.el.querySelector('.searchbar-item:focus, .searchbar-item.fakefocus')

    var index = allItems.indexOf(currentItem)
    var logicalNextItem = allItems[(previous) ? index - 1 : index + 1]

    // clear previously focused items
    var fakefocus = searchbar.el.querySelector('.fakefocus')
    if (fakefocus) {
      fakefocus.classList.remove('fakefocus')
    }

    if (currentItem && logicalNextItem) { // an item is focused and there is another item after it, move onto the next one
      logicalNextItem.focus()
    } else if (currentItem) { // the last item is focused, focus the searchbar again
      searchbar.associatedInput.focus()
      return
    } else if (allItems[0]) { // no item is focused.
      allItems[0].focus()
    }
  },
  openURL: function (url, event) {
    var hasURLHandler = searchbarPlugins.runURLHandlers(url)
    if (hasURLHandler) {
      return
    }

    if (event && event.metaKey) {
      openURLInBackground(url)
      return true
    } else {
      browserUI.navigate(tabs.getSelected(), url)
      // focus the webview, so that autofocus inputs on the page work
      webviews.focus()
      return false
    }
  }
}

// return key on result items should trigger click
// tab key or arrowdown key should focus next item
// arrowup key should focus previous item

searchbar.el.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    e.target.click()
  } else if (e.keyCode === 9 || e.keyCode === 40) { // tab or arrowdown key
    e.preventDefault()
    searchbar.focusItem()
  } else if (e.keyCode === 38) {
    e.preventDefault()
    searchbar.focusItem({
      focusPrevious: true
    })
  }
})

module.exports = searchbar

},{"browserUI.js":3,"searchbar/searchbarPlugins.js":15}],14:[function(require,module,exports){
var urlParser = require('util/urlParser.js')

function autocomplete (input, strings) {
  // if there is text after the selection, we can never autocomplete
  if (input.selectionEnd !== input.value.length) {
    return {
      valid: false
    }
  }

  var text = input.value.substring(0, input.selectionStart)

  for (var i = 0; i < strings.length; i++) {
    // check if the item can be autocompleted
    if (strings[i].toLowerCase().indexOf(text.toLowerCase()) === 0) {
      input.value = strings[i]
      input.setSelectionRange(text.length, strings[i].length)

      return {
        valid: true,
        matchIndex: i
      }
    }
  }
  return {
    valid: false
  }
}

// autocompletes based on a result item
// returns: 1 - the exact URL was autocompleted, 0 - the domain was autocompleted, -1: nothing was autocompleted
function autocompleteURL (item, input) {
  var url = new URL(item.url)
  var hostname = url.hostname

  // the different variations of the URL we can autocomplete
  var possibleAutocompletions = [
    // we start with the domain
    hostname,
    // if that doesn't match, try the hostname without the www instead. The regex requires a slash at the end, so we add one, run the regex, and then remove it
    (hostname + '/').replace(urlParser.startingWWWRegex, '$1').replace('/', ''),
    // then try the whole URL
    urlParser.prettyURL(item.url),
    // then try the URL with querystring
    urlParser.basicURL(item.url),
    // then just try the URL with protocol
    item.url
  ]

  var autocompleteResult = autocomplete(input, possibleAutocompletions)

  if (!autocompleteResult.valid) {
    return -1
  } else if (autocompleteResult.matchIndex < 2 && url.pathname !== '/') {
    return 0
  } else {
    return 1
  }
}

module.exports = {autocomplete, autocompleteURL}

},{"util/urlParser.js":26}],15:[function(require,module,exports){
var searchbar = document.getElementById('searchbar')

var searchbarPlugins = [] // format is {name, container, trigger, showResults}
var URLHandlers = [] // format is {trigger, action}
var resultCounts = {}; // format is {pluginName: count}
var topAnswerArea = searchbar.querySelector('.top-answer-area')

// empties all containers in the searchbar
function clearAll () {
  empty(topAnswerArea)
  for (var i = 0; i < searchbarPlugins.length; i++) {
    empty(searchbarPlugins[i].container)
  }
}

function getTopAnswer (pluginName) {
  if (pluginName) {
    // TODO a template string would be useful here, but UglifyJS doesn't support them yet
    return topAnswerArea.querySelector('[data-plugin={plugin}]'.replace('{plugin}', pluginName))
  } else {
    return topAnswerArea.firstChild
  }
}

function setTopAnswer (pluginName, item) {
  empty(topAnswerArea)
  if (item) {
    item.setAttribute('data-plugin', pluginName)
    topAnswerArea.appendChild(item)
  }
}

function getContainer (pluginName) {
  for (var i = 0; i < searchbarPlugins.length; i++) {
    if (searchbarPlugins[i].name === pluginName) {
      return searchbarPlugins[i].container
    }
  }
  return null
}

function register (name, object) {
  // add the container
  var container = document.createElement('div')
  container.classList.add('searchbar-plugin-container')
  container.setAttribute('data-plugin', name)
  searchbar.insertBefore(container, searchbar.childNodes[object.index + 1])

  searchbarPlugins.push({
    name: name,
    container: container,
    trigger: object.trigger,
    showResults: object.showResults
  })
}

function run (text, input, event) {
  resultCounts = {}

  for (var i = 0; i < searchbarPlugins.length; i++) {
    if ( (!searchbarPlugins[i].trigger || searchbarPlugins[i].trigger(text))) {
      searchbarPlugins[i].showResults(text, input, event, searchbarPlugins[i].container)
    } else {
      empty(searchbarPlugins[i].container)

      // if the plugin is not triggered, remove a previously created top answer
      var associatedTopAnswer = getTopAnswer(searchbarPlugins[i].name)

      if (associatedTopAnswer) {
        associatedTopAnswer.remove()
      }
    }
  }
}

function registerURLHandler (object) {
  URLHandlers.push({
    trigger: object.trigger,
    action: object.action
  })
}

function runURLHandlers (text) {
  for (var i = 0; i < URLHandlers.length; i++) {
    if (URLHandlers[i].trigger(text)) {
      URLHandlers[i].action(text)
      return true
    }
  }
  return false
}

function getResultCount (pluginName) {
  if (pluginName) {
    return resultCounts[pluginName] || 0
  } else {
    var resultCount = 0
    for (var plugin in resultCounts) {
      resultCount += resultCounts[plugin]
    }
    return resultCount
  }
}

function addResults (pluginName, ct) {
  if (resultCounts[pluginName]) {
    resultCounts[pluginName] += ct
  } else {
    resultCounts[pluginName] = ct
  }
}

module.exports = {clearAll, getTopAnswer, setTopAnswer, getContainer, register, run, registerURLHandler, runURLHandlers, getResultCount, addResults}

},{}],16:[function(require,module,exports){
var urlParser = require('util/urlParser.js')

var searchbar = require('searchbar/searchbar.js')

var lastItemDeletion = Date.now() // TODO get rid of this

// creates a result item

/*
data:

title: string - the title of the item
metadata: array - a list of strings to include (separated by hyphens) in front of the secondary text
secondaryText: string - the item's secondary text
url: string - the item's url (if there is one).
icon: string - the name of a font awesome icon.
image: string - the URL of an image to show
iconImage: string - the URL of an image to show as an icon
descriptionBlock: string - the text in the description block,
attribution: string - attribution text to display when the item is focused
delete: function - a function to call to delete the result item when a left swipe is detected
classList: array - a list of classes to add to the item
*/

function createItem (data) {
  var item = document.createElement('div')
  item.classList.add('searchbar-item')

  item.setAttribute('tabindex', '-1')

  if (data.classList) {
    for (var i = 0; i < data.classList.length; i++) {
      item.classList.add(data.classList[i])
    }
  }

  if (data.icon) {
    var i = document.createElement('i')
    i.className = 'fa' + ' ' + data.icon

    item.appendChild(i)
  }

  if (data.title) {
    var title = document.createElement('span')
    title.classList.add('title')

    if (!data.secondaryText) {
      title.classList.add('wide')
    }

    title.textContent = data.title

    item.appendChild(title)
  }

  if (data.url) {
    item.setAttribute('data-url', data.url)

    item.addEventListener('click', function (e) {
      searchbar.openURL(data.url, e)
    })
  }

  if (data.secondaryText) {
    var secondaryText = document.createElement('span')
    secondaryText.classList.add('secondary-text')

    secondaryText.textContent = data.secondaryText

    item.appendChild(secondaryText)

    if (data.metadata) {
      data.metadata.forEach(function (str) {
        var metadataElement = document.createElement('span')
        metadataElement.className = 'md-info'

        metadataElement.textContent = str

        secondaryText.insertBefore(metadataElement, secondaryText.firstChild)
      })
    }
  }

  if (data.image) {
    var image = document.createElement('img')
    image.className = 'image'
    image.src = data.image

    item.insertBefore(image, item.childNodes[0])
  }

  if (data.iconImage) {
    var iconImage = document.createElement('img')
    iconImage.className = 'icon-image'
    iconImage.src = data.iconImage

    item.insertBefore(iconImage, item.childNodes[0])
  }

  if (data.descriptionBlock) {
    var dBlock = document.createElement('span')
    dBlock.classList.add('description-block')

    dBlock.textContent = data.descriptionBlock
    item.appendChild(dBlock)
  }

  if (data.attribution) {
    var attrBlock = document.createElement('span')
    attrBlock.classList.add('attribution')

    attrBlock.textContent = data.attribution
    item.appendChild(attrBlock)
  }

  if (data.delete) {
    item.addEventListener('mousewheel', function (e) {
      var self = this
      if (e.deltaX > 50 && e.deltaY < 3 && Date.now() - lastItemDeletion > 700) {
        lastItemDeletion = Date.now()

        self.style.opacity = '0'
        self.style.transform = 'translateX(-100%)'

        setTimeout(function () {
          data.delete(self)
          self.parentNode.removeChild(self)
          lastItemDeletion = Date.now()
        }, 200)
      }
    })
  }

  if (data.click) {
    item.addEventListener('click', data.click)
  }

  return item
}

function createHeading (data) {
  var heading = document.createElement('h2')
  heading.className = 'searchbar-heading'
  heading.textContent = data.text || ''
  return heading
}

// attempts to shorten a page title, removing unimportant text like the site name
function getRealTitle (text) {
  // don't try to parse URL's
  if (urlParser.isURL(text)) {
    return text
  }

  var possibleCharacters = ['|', ':', ' - ', ' — ']

  for (var i = 0; i < possibleCharacters.length; i++) {
    var char = possibleCharacters[i]
    // match url's of pattern: title | website name
    var titleChunks = text.split(char)

    if (titleChunks.length >= 2) {
      titleChunks[0] = titleChunks[0].trim()
      titleChunks[1] = titleChunks[1].trim()

      if (titleChunks[1].length < 5 || titleChunks[1].length / titleChunks[0].length <= 0.5) {
        return titleChunks[0]
      }
    }
  }

  // fallback to the regular title

  return text
}

module.exports = {createItem, createHeading, getRealTitle}

},{"searchbar/searchbar.js":13,"util/urlParser.js":26}],17:[function(require,module,exports){
function TabStack (tabStack) {
  this.depth = 15

  if (tabStack) {
    this.stack = tabStack.stack
  } else {
    this.stack = []
  }
}

TabStack.prototype.push = function (closedTab) {
  // Do not store private tabs or blank tabs
  if (closedTab.private
    || closedTab.url === 'about:blank'
    || closedTab.url === '') {
    return
  }

  if (this.stack.length >= this.depth) {
    this.stack.shift()
  }

  this.stack.push(closedTab)
}

TabStack.prototype.pop = function () {
  return this.stack.pop()
}

module.exports = TabStack

},{}],18:[function(require,module,exports){
var tabPrototype = {
  add: function (tab = {}, index) {
    var tabId = String(tab.id || Math.round(Math.random() * 100000000000000000)) // you can pass an id that will be used, or a random one will be generated.

    var newTab = {
      url: tab.url || '',
      title: tab.title || '',
      id: tabId,
      lastActivity: tab.lastActivity || Date.now(),
      secure: tab.secure,
      private: tab.private || false,
      readerable: tab.readerable || false,
      backgroundColor: tab.backgroundColor,
      foregroundColor: tab.foregroundColor,
      selected: tab.selected || false
    }

    if (index) {
      this.splice(index, 0, newTab)
    } else {
      this.push(newTab)
    }

    return tabId
  },
  update: function (id, data) {
    if (!this.has(id)) {
      throw new ReferenceError('Attempted to update a tab that does not exist.')
    }
    const index = this.getIndex(id)
    
    for (var key in data) {
      if (data[key] === undefined) {
        throw new ReferenceError('Key ' + key + ' is undefined.')
      }
      this[index][key] = data[key]
    }
  },
  destroy: function (id) {
    const index = this.getIndex(id)
    if(index < 0) return false

    tasks.getTaskContainingTab(id).tabHistory.push(this[index])
    this.splice(index, 1)

    return index
  },
  destroyAll: function () {
    // this = [] doesn't work, so set the length of the array to 0 to remove all of the itemss
    this.length = 0
  },
  get: function (id) {
    if (!id) { // no id provided, return an array of all tabs
      // it is important to deep-copy the tab objects when returning them. Otherwise, the original tab objects get modified when the returned tabs are modified (such as when processing a url).
      var tabsToReturn = []
      for (var i = 0; i < this.length; i++) {
        tabsToReturn.push(JSON.parse(JSON.stringify(this[i])))
      }
      return tabsToReturn
    }
    for (var i = 0; i < this.length; i++) {
      if (this[i].id === id) {
        return JSON.parse(JSON.stringify(this[i]))
      }
    }
    return undefined
  },
  has: function (id) {
    return this.getIndex(id) > -1
  },
  getIndex: function (id) {
    for (var i = 0; i < this.length; i++) {
      if (this[i].id === id) {
        return i
      }
    }
    return -1
  },
  getSelected: function () {
    for (var i = 0; i < this.length; i++) {
      if (this[i].selected) {
        return this[i].id
      }
    }
    return null
  },
  getAtIndex: function (index) {
    return this[index] || undefined
  },
  setSelected: function (id) {
    if (!this.has(id)) {
      throw new ReferenceError('Attempted to select a tab that does not exist.')
    }
    for (var i = 0; i < this.length; i++) {
      if (this[i].id === id) {
        this[i].selected = true
      } else {
        this[i].selected = false
      }
    }
  },
  count: function () {
    return this.length
  },
  isEmpty: function () {
    if (!this || this.length === 0) {
      return true
    }

    if (this.length === 1 && (!this[0].url || this[0].url === 'about:blank')) {
      return true
    }

    return false
  }
}

module.exports = tabPrototype

},{}],19:[function(require,module,exports){
const tabPrototype = require('tabState/tab.js')
const TabStack = require('tabRestore.js')

class TaskList {
  constructor () {
    this.selected = null
    this.tasks = [] // each task is {id, name, tabs: [], tabHistory: TabStack}
  }

  add (task = {} , index) {
    const newTask = {
      name: task.name || null,
      tabs: task.tabs || [],
      tabHistory: new TabStack(task.tabHistory),
      id: task.id || String(TaskList.getRandomId())
    }

    for (var key in tabPrototype) {
      newTask.tabs[key] = tabPrototype[key]
    }

    if (index) {
      this.tasks.splice(index, 0, newTask)
    } else {
      this.tasks.push(newTask)
    }

    return newTask.id
  }

  getStringifyableState () {
    return {
      tasks: this.tasks,
      selectedTask: this.selected
    }
  }

  get (id) {
    return this.find(task => task.id == id) || null
  }

  byIndex (index) {
    return this.tasks[index]
  }

  getTaskContainingTab (tabId) {
    return this.find(task => task.tabs.has(tabId)) || null
  }

  getIndex (id) {
    return this.tasks.findIndex(task => task.id == id)
  }

  setSelected (id) {
    this.selected = id
    window.currentTask = this.get(id)
    window.tabs = currentTask.tabs
  }

  destroy (id) {
    const index = this.getIndex(id)

    if (index < 0) return false

    this.tasks.splice(index, 1)
    return index
  }

  destroyAll () {
    this.tasks = []
    this.selected = null
    currentTask = null
  }

  getLastActivity (id) {
    var tabs = this.get(id).tabs
    var lastActivity = 0

    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].lastActivity > lastActivity) {
        lastActivity = tabs[i].lastActivity
      }
    }

    return lastActivity
  }

  getLength () {
    return this.tasks.length
  }

  map (fun) { return this.tasks.map(fun) }

  forEach (fun) { return this.tasks.forEach(fun) }

  indexOf (task) { return this.tasks.indexOf(task) }

  splice (...args) { return this.tasks.splice.apply(this.tasks, args) }

  find (filter) {
    for (var i = 0, len = this.tasks.length; i < len; i++) {
      if (filter(this.tasks[i], i, this.tasks)) {
        return this.tasks[i]
      }
    }
  }

  static getRandomId () {
    return Math.round(Math.random() * 100000000000000000)
  }
}

module.exports = TaskList

},{"tabRestore.js":17,"tabState/tab.js":18}],20:[function(require,module,exports){
var browserUI = require('browserUI.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')
var urlParser = require('util/urlParser.js')

function getTaskContainer (id) {
  return document.querySelector('.task-container[data-task="{id}"]'.replace('{id}', id))
}

function removeTabFromOverlay (tabId, task) {
  task.tabs.destroy(tabId)
  webviews.destroy(tabId)

  tabBar.rerenderAll()

  // if there are no tabs left, remove the task
  if (task.tabs.count() === 0) {
    // remove the task element from the overlay
    getTaskContainer(task.id).remove()
    // close the task
    browserUI.closeTask(task.id)
  }
}

var TaskOverlayBuilder = {
  create: {
    task: {
      dragHandle: function () {
        var dragHandle = document.createElement('i')
        dragHandle.className = 'fa fa-arrows task-drag-handle'
        return dragHandle
      },
      nameInputField: function (task, taskIndex) {
        var input = document.createElement('input')
        input.classList.add('task-name')

        var taskName = l('defaultTaskName').replace('%n', taskIndex + 1)

        input.placeholder = taskName
        input.value = task.name || taskName

        input.addEventListener('keyup', function (e) {
          if (e.keyCode === 13) {
            this.blur()
          }

          task.name = this.value
        })

        input.addEventListener('focus', function () {
          this.select()
        })
        return input
      },
      deleteButton: function (container, task) {
        var deleteButton = document.createElement('i')
        deleteButton.className = 'fa fa-trash-o'

        deleteButton.addEventListener('click', function (e) {
          container.remove()
          browserUI.closeTask(task.id)
        })
        return deleteButton
      },

      actionContainer: function (taskContainer, task, taskIndex) {
        var taskActionContainer = document.createElement('div')
        taskActionContainer.className = 'task-action-container'

        // add the drag handle
        var dragHandle = this.dragHandle()
        taskActionContainer.appendChild(dragHandle)

        // add the input for the task name
        var input = this.nameInputField(task, taskIndex)
        taskActionContainer.appendChild(input)

        // add the delete button
        var deleteButton = this.deleteButton(taskContainer, task)
        taskActionContainer.appendChild(deleteButton)

        return taskActionContainer
      },
      container: function (task, taskIndex) {
        var container = document.createElement('div')
        container.className = 'task-container'
        container.setAttribute('data-task', task.id)

        var taskActionContainer = this.actionContainer(
          container,
          task,
          taskIndex
        )
        container.appendChild(taskActionContainer)

        var tabContainer = TaskOverlayBuilder.create.tab.container(task)
        container.appendChild(tabContainer)

        return container
      }
    },

    tab: {
      element: function (tabContainer, task, tab) {
        var el = searchbarUtils.createItem({
          title: tab.title || l('newTabLabel'),
          secondaryText: urlParser.basicURL(tab.url),
          classList: ['task-tab-item'],
          delete: function () {
            removeTabFromOverlay(tab.id, task)
          }
        })

        el.setAttribute('data-tab', tab.id)

        el.addEventListener('click', function (e) {
          browserUI.switchToTask(this.parentNode.getAttribute('data-task'))
          browserUI.switchToTab(this.getAttribute('data-tab'))

          taskOverlay.hide()
        })

        var closeTabButton = this.closeButton(el)
        el.querySelector('.title').appendChild(closeTabButton)
        return el
      },

      container: function (task) {
        var tabContainer = document.createElement('div')
        tabContainer.className = 'task-tabs-container'
        tabContainer.setAttribute('data-task', task.id)

        if (task.tabs) {
          for (var i = 0; i < task.tabs.length; i++) {
            var el = this.element(tabContainer, task, task.tabs[i])
            tabContainer.appendChild(el)
          }
        }

        return tabContainer
      },

      closeButton: function (taskTabElement) {
        var closeTabButton = document.createElement('button')
        closeTabButton.className = 'closeTab fa fa-close'

        closeTabButton.addEventListener('click', function (e) {
          var tabId = taskTabElement.getAttribute('data-tab')
          var taskId = taskTabElement.parentNode.getAttribute('data-task')

          removeTabFromOverlay(tabId, tasks.get(taskId))
          taskTabElement.parentNode.removeChild(taskTabElement)

          // do not close taskOverlay
          // (the close button is part of the tab-element, so a click on it
          // would otherwise trigger opening this tab, and it was just closed)
          e.stopImmediatePropagation()
        })

        return closeTabButton
      }
    }
  }
  // extend with other helper functions?
}

module.exports = function createTaskContainer (task, index) {
  return TaskOverlayBuilder.create.task.container(task, index)
}

},{"browserUI.js":3,"searchbar/searchbarUtils.js":16,"util/urlParser.js":26}],21:[function(require,module,exports){
// defines schema for the browsingData database
// requires Dexie.min.js

if (typeof Dexie === 'undefined' && typeof require !== 'undefined') {
  var Dexie = require('dexie')
}

var db = new Dexie('browsingData')

var dbErrorMessage = 'Internal error opening backing store for indexedDB.open'
var dbErrorAlertShown = false

// Min 1.1.0-1.3.1
db.version(3).stores({
  bookmarks: 'url, title, text, extraData', // url must come first so it is the primary key
  history: 'url, title, color, visitCount, lastVisit, extraData', // same thing
  readingList: 'url, time, visitCount, pageHTML, article, extraData', // article is the object from readability
  settings: 'key, value' // key is the name of the setting, value is an object
})

// Min >= 1.4.0
db.version(4).stores({
  /*
  color - the main color of the page, extracted from the page icon
  pageHTML - a saved copy of the page's HTML, when it was last visited. Removed in 1.6.0, so all pages visited after then will have an empty string in this field.
  extractedText - the text content of the page, extracted from pageHTML. Unused as of 1.7.0, should be removed completely in a future version.
  searchIndex - an array of words on the page (created from extractedText), used for full-text searchIndex
  isBookmarked - whether the page is a bookmark
  extraData - other metadata about the page
  */
  places: 'url, title, color, visitCount, lastVisit, pageHTML, extractedText, *searchIndex, isBookmarked, metadata',
  readingList: 'url, time, visitCount, pageHTML, article, extraData', // article is the object from readability
  settings: 'key, value', // key is the name of the setting, value is an object
})
  // upgrade from v3 to v4
  .upgrade(function (t) {
    // upgrade history items

    t.history.each(function (historyItem) {
      t.places.put({
        url: historyItem.url,
        title: historyItem.title,
        color: historyItem.color,
        visitCount: historyItem.visitCount,
        lastVisit: historyItem.lastVisit,
        // data not stored in the old database schema
        pageHTML: '',
        extractedText: '',
        searchIndex: [],
        // the old history table did not contain bookmarks
        isBookmarked: false,
        metadata: (historyItem.extraData || {}).metadata || {}
      })
    }).then(function () {

      // upgrade bookmarks

      t.bookmarks.each(function (bookmark) {
        // t.places.add cannot be used, since an item with the bookmark's url might already exist as a history item
        t.places.put({
          url: bookmark.url,
          title: bookmark.title,
          color: '',
          visitCount: 1,
          lastVisit: 1,
          pageHTML: '',
          extractedText: bookmark.text,
          searchIndex: bookmark.text.trim().toLowerCase().replace(/[^\w\s]/g, ' ').split(/\s+/g),
          isBookmarked: true,
          metadata: (bookmark.extraData || {}).metadata || {}
        })
      })
    })

    // remove the old history and bookmarks tables

  // t.bookmarks.toCollection().delete()
  // t.history.toCollection().delete()
  })

// TODO set the value of the bookmarks and history tables to null in a future version to delete them - see https://github.com/dfahlander/Dexie.js/issues/276

db.open().then(function () {
  console.log('database opened ', performance.now())
})

Dexie.Promise.on('error', function (error) {
  console.warn('database error occured', error)

  if (error.message.indexOf(dbErrorMessage) !== -1 && !dbErrorAlertShown) {
    window && window.alert && window.alert(l('multipleInstancesErrorMessage'))
    remote.app.quit()

    dbErrorAlertShown = true
  }
})

if (typeof module !== 'undefined') {
  module.exports = db
}

},{"dexie":33}],22:[function(require,module,exports){
var hosts = []

var HOSTS_FILE = process.platform === 'win32'
  ? 'C:/Windows/System32/drivers/etc/hosts'
  : '/etc/hosts'

function truncatedHostsFileLines (data, limit) {
  return data.length > limit
    ? data.substring(0, limit).split('\n').slice(0, -1)
    : data.split('\n')
}

fs.readFile(HOSTS_FILE, 'utf8', function (err, data) {
  if (err) {
    console.warn('error retrieving hosts file', err)
    return
  }

  var hostsMap = {} // this is used to deduplicate the list

  const lines = truncatedHostsFileLines(data, Math.pow(1024, 2))

  lines.forEach(function (line) {
    if (line.startsWith('#')) {
      return
    }
    line.split(/\s/g).forEach(function (host) {
      if (host.length > 0 && host !== '255.255.255.255' && host !== 'broadcasthost' && !hostsMap[host]) {
        hosts.push(host)
        hostsMap[host] = true
      }
    })
  })
})

module.exports = hosts

},{}],23:[function(require,module,exports){
var relativeDateRanges = [
  [0, 15000, l('timeRangeJustNow')],
  [15000, 300000, l('timeRangeMinutes')],
  [300000, 3600000, l('timeRangeHour')],
  [3600000, 86400000, l('timeRangeDay')],
  [86400000, 604800000, l('timeRangeWeek')],
  [604800000, 2592000000, l('timeRangeMonth')],
  [2592000000, 31104000000, l('timeRangeYear')],
  [31104000000, Infinity, l('timeRangeLongerAgo')]
]

function formatRelativeDate (date) {
  var diff = Date.now() - date
  for (var i = 0; i < relativeDateRanges.length; i++) {
    if (relativeDateRanges[i][0] <= diff && relativeDateRanges[i][1] >= diff) {
      return relativeDateRanges[i][2]
    }
  }
  return null
}

module.exports = formatRelativeDate

},{}],24:[function(require,module,exports){
if (typeof require !== 'undefined') {
  var settings = require('util/settings.js')
}
// otherwise, assume window.settings exists already

var currentSearchEngine = {
  name: '',
  searchURL: '%s'
}

var defaultSearchEngine = 'DuckDuckGo'

var searchEngines = {
  DuckDuckGo: {
    name: 'DuckDuckGo',
    searchURL: 'https://duckduckgo.com/?q=%s&t=min'
  },
  Google: {
    name: 'Google',
    searchURL: 'https://www.google.com/search?q=%s'
  },
  Bing: {
    name: 'Bing',
    searchURL: 'https://www.bing.com/search?q=%s'
  },
  Yahoo: {
    name: 'Yahoo',
    searchURL: 'https://search.yahoo.com/yhs/search?p=%s'
  },
  Baidu: {
    name: 'Baidu',
    searchURL: 'https://www.baidu.com/s?wd=%s'
  },
  StartPage: {
    name: 'StartPage',
    searchURL: 'https://startpage.com/do/search?q=%s'
  },
  Wikipedia: {
    name: 'Wikipedia',
    searchURL: 'https://wikipedia.org/w/index.php?search=%s'
  },
  Yandex: {
    name: 'Yandex',
    searchURL: 'https://yandex.com/search/?text=%s'
  },
  none: {
    name: 'none',
    searchURL: 'http://%s'
  }
}

settings.get('searchEngine', function (value) {
  if (typeof value === 'string') {
    // migrate from legacy format
    value = {name: value}
    settings.set('searchEngine', value)
  }

  if (value && value.name) {
    currentSearchEngine = searchEngines[value.name]
  } else if (value && value.url) {
    currentSearchEngine = {
      name: 'custom',
      searchURL: value.url,
      custom: true
    }
  } else {
    currentSearchEngine = searchEngines[defaultSearchEngine]
  }
})

var searchEngine = {
  getCurrent: function () {
    return currentSearchEngine
  },
  isSearchURL: function (url) {
    if (!currentSearchEngine.name || currentSearchEngine.name === 'none') {
      return false
    } else {
      let searchFragment = currentSearchEngine.searchURL.split('%s')[0]
      return url.startsWith(searchFragment)
    }
  }
}

if (typeof module === 'undefined') {
  window.currentSearchEngine = currentSearchEngine
} else {
  module.exports = searchEngine
}

},{"util/settings.js":25}],25:[function(require,module,exports){
/*
gets and sets settings
requires Dexie and util/database.js
*/

if (typeof db === 'undefined' && typeof require !== 'undefined') {
  var db = require('util/database.js')
}

var settings = {
  loaded: false,
  list: {},
  onLoadCallbacks: [],
  get: function (key, cb, options) {
    var isCacheable = !options || options.fromCache !== false

    // get the setting from the cache if possible
    if (settings.loaded && isCacheable) {
      cb(settings.list[key])

    // if the settings haven't loaded, wait until they have
    } else if (isCacheable) {
      settings.onLoadCallbacks.push({
        key: key,
        cb: cb
      })

    // the setting can't be cached, get it from the database
    } else {
      db.settings.where('key').equals(key).first(function (item) {
        if (item) {
          cb(item.value)
        } else {
          cb(null)
        }
      })
    }
  },
  set: function (key, value, cb) {
    db.settings.put({
      key: key,
      value: value
    }).then(function () {
      settings.list[key] = value
      if (cb) {
        cb()
      }
    })
  },
  delete: function (key, cb) {
    db.settings.where('key').equals(key).delete()
      .then(function () {
        delete settings.list[key]
        if (cb) {
          cb()
        }
      })
  },
  load: function () {
    db.settings.each(function (setting) {
      settings.list[setting.key] = setting.value
    }).then(function () {
      settings.loaded = true

      settings.onLoadCallbacks.forEach(function (item) {
        item.cb(settings.list[item.key])
      })

      settings.onLoadCallbacks = []
    })
  },
  onLoad: function (cb) {
    if (settings.loaded) {
      cb()
    } else {
      settings.onLoadCallbacks.push({
        key: '',
        cb: cb
      })
    }
  }
}

settings.load()

if (typeof module !== 'undefined') {
  module.exports = settings
}

},{"util/database.js":21}],26:[function(require,module,exports){
const searchEngine = require('util/searchEngine.js')

const hosts = require('./hosts.js')

var urlParser = {
  startingWWWRegex: /www\.(.+\..+\/)/g,
  trailingSlashRegex: /\/$/g,
  isURL: function (url) {
    return url.indexOf('http://') === 0 || url.indexOf('https://') === 0 || url.indexOf('file://') === 0 || url.indexOf('about:') === 0 || url.indexOf('chrome:') === 0 || url.indexOf('data:') === 0
  },
  removeProtocol: function (url) {
    if (!urlParser.isURL(url)) {
      return url
    }

    var withoutProtocol = url.replace('http://', '').replace('https://', '').replace('file://', '') // chrome:, about:, data: protocols intentionally not removed

    if (withoutProtocol.indexOf('www.') === 0) {
      return withoutProtocol.replace('www.', '')
    } else {
      return withoutProtocol
    }
  },
  isURLMissingProtocol: function (url) {
    if (url.indexOf(' ') === -1 && url.indexOf('.') > 0) {
      return true
    }
    var hostPart = url.replace(/(:|\/).+/, '')
    return hosts.indexOf(hostPart) > -1
  },
  parse: function (url) {
    url = url.trim() // remove whitespace common on copy-pasted url's

    if (!url) {
      return 'about:blank'
    }
    // if the url starts with a (supported) protocol, do nothing
    if (urlParser.isURL(url)) {
      return url
    }

    if (url.indexOf('view-source:') === 0) {
      var realURL = url.replace('view-source:', '')

      return 'view-source:' + urlParser.parse(realURL)
    }

    // if the url doesn't have a space and has a ., or is a host from hosts file, assume it is a url without a protocol
    if (urlParser.isURLMissingProtocol(url)) {
      return 'http://' + url
    }
    // else, do a search
    return searchEngine.getCurrent().searchURL.replace('%s', encodeURIComponent(url))
  },
  basicURL: function (url) {
    return urlParser.removeProtocol(url).replace(urlParser.trailingSlashRegex, '')
  },
  prettyURL: function (url) {
    try {
      var urlOBJ = new URL(url)
      return (urlOBJ.hostname + urlOBJ.pathname).replace(urlParser.startingWWWRegex, '$1').replace(urlParser.trailingSlashRegex, '')
    } catch (e) { // URL constructor will throw an error on malformed URLs
      return url
    }
  },
  getDisplayURL: function (url) {
    // converts internal URLs (like the PDF viewer or the reader view) to the URL of the page they are displaying
    if (url.startsWith(urlParser.getFileURL(__dirname))) {
      try {
        var realURL = new URLSearchParams(new URL(url).search).get('url')
        if (realURL) {
          return realURL
        }
      } catch(e) {}
    }
    return url
  },
  getFileURL: function (path) {
    if (window.platformType === 'windows') {
      // convert backslash to forward slash
      path = path.replace(/\\/g, '/')
      // https://blogs.msdn.microsoft.com/ie/2006/12/06/file-uris-in-windows/

      // UNC path?
      if (path.startsWith('//')) {
        return 'file:' + path
      } else {
        return 'file:///' + path
      }
    } else {
      return 'file://' + path
    }
  }
}

module.exports = urlParser

},{"./hosts.js":22,"util/searchEngine.js":24}],27:[function(require,module,exports){
module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }

},{}],28:[function(require,module,exports){
'use strict';

var ticky = require('ticky');

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};

},{"ticky":38}],29:[function(require,module,exports){
'use strict';

var atoa = require('atoa');
var debounce = require('./debounce');

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};

},{"./debounce":28,"atoa":27}],30:[function(require,module,exports){
'use strict';

var customEvent = require('custom-event');
var eventmap = require('./eventmap');
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

},{"./eventmap":31,"custom-event":32}],31:[function(require,module,exports){
'use strict';

var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;

},{}],32:[function(require,module,exports){

var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

},{}],33:[function(require,module,exports){
(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
   typeof define === 'function' && define.amd ? define(factory) :
   (global.Dexie = factory());
}(this, (function () { 'use strict';

/*
* Dexie.js - a minimalistic wrapper for IndexedDB
* ===============================================
*
* By David Fahlander, david.fahlander@gmail.com
*
* Version 1.5.1, Tue Nov 01 2016
* www.dexie.com
* Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
*/
var keys = Object.keys;
var isArray = Array.isArray;
var _global = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : global;

function extend(obj, extension) {
    if (typeof extension !== 'object') return obj;
    keys(extension).forEach(function (key) {
        obj[key] = extension[key];
    });
    return obj;
}

var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
    return _hasOwn.call(obj, prop);
}

function props(proto, extension) {
    if (typeof extension === 'function') extension = extension(getProto(proto));
    keys(extension).forEach(function (key) {
        setProp(proto, key, extension[key]);
    });
}

function setProp(obj, prop, functionOrGetSet, options) {
    Object.defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === 'function' ? { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } : { value: functionOrGetSet, configurable: true, writable: true }, options));
}

function derive(Child) {
    return {
        from: function (Parent) {
            Child.prototype = Object.create(Parent.prototype);
            setProp(Child.prototype, "constructor", Child);
            return {
                extend: props.bind(null, Child.prototype)
            };
        }
    };
}

var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

function getPropertyDescriptor(obj, prop) {
    var pd = getOwnPropertyDescriptor(obj, prop),
        proto;
    return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}

var _slice = [].slice;
function slice(args, start, end) {
    return _slice.call(args, start, end);
}

function override(origFunc, overridedFactory) {
    return overridedFactory(origFunc);
}

function doFakeAutoComplete(fn) {
    var to = setTimeout(fn, 1000);
    clearTimeout(to);
}

function assert(b) {
    if (!b) throw new Error("Assertion Failed");
}

function asap(fn) {
    if (_global.setImmediate) setImmediate(fn);else setTimeout(fn, 0);
}



/** Generate an object (hash map) based on given array.
 * @param extractor Function taking an array item and its index and returning an array of 2 items ([key, value]) to
 *        instert on the resulting object for each item in the array. If this function returns a falsy value, the
 *        current item wont affect the resulting object.
 */
function arrayToObject(array, extractor) {
    return array.reduce(function (result, item, i) {
        var nameAndValue = extractor(item, i);
        if (nameAndValue) result[nameAndValue[0]] = nameAndValue[1];
        return result;
    }, {});
}

function trycatcher(fn, reject) {
    return function () {
        try {
            fn.apply(this, arguments);
        } catch (e) {
            reject(e);
        }
    };
}

function tryCatch(fn, onerror, args) {
    try {
        fn.apply(null, args);
    } catch (ex) {
        onerror && onerror(ex);
    }
}

function getByKeyPath(obj, keyPath) {
    // http://www.w3.org/TR/IndexedDB/#steps-for-extracting-a-key-from-a-value-using-a-key-path
    if (hasOwn(obj, keyPath)) return obj[keyPath]; // This line is moved from last to first for optimization purpose.
    if (!keyPath) return obj;
    if (typeof keyPath !== 'string') {
        var rv = [];
        for (var i = 0, l = keyPath.length; i < l; ++i) {
            var val = getByKeyPath(obj, keyPath[i]);
            rv.push(val);
        }
        return rv;
    }
    var period = keyPath.indexOf('.');
    if (period !== -1) {
        var innerObj = obj[keyPath.substr(0, period)];
        return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.substr(period + 1));
    }
    return undefined;
}

function setByKeyPath(obj, keyPath, value) {
    if (!obj || keyPath === undefined) return;
    if ('isFrozen' in Object && Object.isFrozen(obj)) return;
    if (typeof keyPath !== 'string' && 'length' in keyPath) {
        assert(typeof value !== 'string' && 'length' in value);
        for (var i = 0, l = keyPath.length; i < l; ++i) {
            setByKeyPath(obj, keyPath[i], value[i]);
        }
    } else {
        var period = keyPath.indexOf('.');
        if (period !== -1) {
            var currentKeyPath = keyPath.substr(0, period);
            var remainingKeyPath = keyPath.substr(period + 1);
            if (remainingKeyPath === "") {
                if (value === undefined) delete obj[currentKeyPath];else obj[currentKeyPath] = value;
            } else {
                var innerObj = obj[currentKeyPath];
                if (!innerObj) innerObj = obj[currentKeyPath] = {};
                setByKeyPath(innerObj, remainingKeyPath, value);
            }
        } else {
            if (value === undefined) delete obj[keyPath];else obj[keyPath] = value;
        }
    }
}

function delByKeyPath(obj, keyPath) {
    if (typeof keyPath === 'string') setByKeyPath(obj, keyPath, undefined);else if ('length' in keyPath) [].map.call(keyPath, function (kp) {
        setByKeyPath(obj, kp, undefined);
    });
}

function shallowClone(obj) {
    var rv = {};
    for (var m in obj) {
        if (hasOwn(obj, m)) rv[m] = obj[m];
    }
    return rv;
}

function deepClone(any) {
    if (!any || typeof any !== 'object') return any;
    var rv;
    if (isArray(any)) {
        rv = [];
        for (var i = 0, l = any.length; i < l; ++i) {
            rv.push(deepClone(any[i]));
        }
    } else if (any instanceof Date) {
        rv = new Date();
        rv.setTime(any.getTime());
    } else {
        rv = any.constructor ? Object.create(any.constructor.prototype) : {};
        for (var prop in any) {
            if (hasOwn(any, prop)) {
                rv[prop] = deepClone(any[prop]);
            }
        }
    }
    return rv;
}

function getObjectDiff(a, b, rv, prfx) {
    // Compares objects a and b and produces a diff object.
    rv = rv || {};
    prfx = prfx || '';
    keys(a).forEach(function (prop) {
        if (!hasOwn(b, prop)) rv[prfx + prop] = undefined; // Property removed
        else {
                var ap = a[prop],
                    bp = b[prop];
                if (typeof ap === 'object' && typeof bp === 'object' && ap && bp && ap.constructor === bp.constructor)
                    // Same type of object but its properties may have changed
                    getObjectDiff(ap, bp, rv, prfx + prop + ".");else if (ap !== bp) rv[prfx + prop] = b[prop]; // Primitive value changed
            }
    });
    keys(b).forEach(function (prop) {
        if (!hasOwn(a, prop)) {
            rv[prfx + prop] = b[prop]; // Property added
        }
    });
    return rv;
}

// If first argument is iterable or array-like, return it as an array
var iteratorSymbol = typeof Symbol !== 'undefined' && Symbol.iterator;
var getIteratorOf = iteratorSymbol ? function (x) {
    var i;
    return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function () {
    return null;
};

var NO_CHAR_ARRAY = {};
// Takes one or several arguments and returns an array based on the following criteras:
// * If several arguments provided, return arguments converted to an array in a way that
//   still allows javascript engine to optimize the code.
// * If single argument is an array, return a clone of it.
// * If this-pointer equals NO_CHAR_ARRAY, don't accept strings as valid iterables as a special
//   case to the two bullets below.
// * If single argument is an iterable, convert it to an array and return the resulting array.
// * If single argument is array-like (has length of type number), convert it to an array.
function getArrayOf(arrayLike) {
    var i, a, x, it;
    if (arguments.length === 1) {
        if (isArray(arrayLike)) return arrayLike.slice();
        if (this === NO_CHAR_ARRAY && typeof arrayLike === 'string') return [arrayLike];
        if (it = getIteratorOf(arrayLike)) {
            a = [];
            while (x = it.next(), !x.done) {
                a.push(x.value);
            }return a;
        }
        if (arrayLike == null) return [arrayLike];
        i = arrayLike.length;
        if (typeof i === 'number') {
            a = new Array(i);
            while (i--) {
                a[i] = arrayLike[i];
            }return a;
        }
        return [arrayLike];
    }
    i = arguments.length;
    a = new Array(i);
    while (i--) {
        a[i] = arguments[i];
    }return a;
}

var concat = [].concat;
function flatten(a) {
    return concat.apply([], a);
}

function nop() {}
function mirror(val) {
    return val;
}
function pureFunctionChain(f1, f2) {
    // Enables chained events that takes ONE argument and returns it to the next function in chain.
    // This pattern is used in the hook("reading") event.
    if (f1 == null || f1 === mirror) return f2;
    return function (val) {
        return f2(f1(val));
    };
}

function callBoth(on1, on2) {
    return function () {
        on1.apply(this, arguments);
        on2.apply(this, arguments);
    };
}

function hookCreatingChain(f1, f2) {
    // Enables chained events that takes several arguments and may modify first argument by making a modification and then returning the same instance.
    // This pattern is used in the hook("creating") event.
    if (f1 === nop) return f2;
    return function () {
        var res = f1.apply(this, arguments);
        if (res !== undefined) arguments[0] = res;
        var onsuccess = this.onsuccess,
            // In case event listener has set this.onsuccess
        onerror = this.onerror; // In case event listener has set this.onerror
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res2 !== undefined ? res2 : res;
    };
}

function hookDeletingChain(f1, f2) {
    if (f1 === nop) return f2;
    return function () {
        f1.apply(this, arguments);
        var onsuccess = this.onsuccess,
            // In case event listener has set this.onsuccess
        onerror = this.onerror; // In case event listener has set this.onerror
        this.onsuccess = this.onerror = null;
        f2.apply(this, arguments);
        if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    };
}

function hookUpdatingChain(f1, f2) {
    if (f1 === nop) return f2;
    return function (modifications) {
        var res = f1.apply(this, arguments);
        extend(modifications, res); // If f1 returns new modifications, extend caller's modifications with the result before calling next in chain.
        var onsuccess = this.onsuccess,
            // In case event listener has set this.onsuccess
        onerror = this.onerror; // In case event listener has set this.onerror
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res === undefined ? res2 === undefined ? undefined : res2 : extend(res, res2);
    };
}

function reverseStoppableEventChain(f1, f2) {
    if (f1 === nop) return f2;
    return function () {
        if (f2.apply(this, arguments) === false) return false;
        return f1.apply(this, arguments);
    };
}



function promisableChain(f1, f2) {
    if (f1 === nop) return f2;
    return function () {
        var res = f1.apply(this, arguments);
        if (res && typeof res.then === 'function') {
            var thiz = this,
                i = arguments.length,
                args = new Array(i);
            while (i--) {
                args[i] = arguments[i];
            }return res.then(function () {
                return f2.apply(thiz, args);
            });
        }
        return f2.apply(this, arguments);
    };
}

// By default, debug will be true only if platform is a web platform and its page is served from localhost.
// When debug = true, error's stacks will contain asyncronic long stacks.
var debug = typeof location !== 'undefined' &&
// By default, use debug mode if served from localhost.
/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);

function setDebug(value, filter) {
    debug = value;
    libraryFilter = filter;
}

var libraryFilter = function () {
    return true;
};

var NEEDS_THROW_FOR_STACK = !new Error("").stack;

function getErrorWithStack() {
    "use strict";

    if (NEEDS_THROW_FOR_STACK) try {
        // Doing something naughty in strict mode here to trigger a specific error
        // that can be explicitely ignored in debugger's exception settings.
        // If we'd just throw new Error() here, IE's debugger's exception settings
        // will just consider it as "exception thrown by javascript code" which is
        // something you wouldn't want it to ignore.
        getErrorWithStack.arguments;
        throw new Error(); // Fallback if above line don't throw.
    } catch (e) {
        return e;
    }
    return new Error();
}

function prettyStack(exception, numIgnoredFrames) {
    var stack = exception.stack;
    if (!stack) return "";
    numIgnoredFrames = numIgnoredFrames || 0;
    if (stack.indexOf(exception.name) === 0) numIgnoredFrames += (exception.name + exception.message).split('\n').length;
    return stack.split('\n').slice(numIgnoredFrames).filter(libraryFilter).map(function (frame) {
        return "\n" + frame;
    }).join('');
}

function deprecated(what, fn) {
    return function () {
        console.warn(what + " is deprecated. See https://github.com/dfahlander/Dexie.js/wiki/Deprecations. " + prettyStack(getErrorWithStack(), 1));
        return fn.apply(this, arguments);
    };
}

var dexieErrorNames = ['Modify', 'Bulk', 'OpenFailed', 'VersionChange', 'Schema', 'Upgrade', 'InvalidTable', 'MissingAPI', 'NoSuchDatabase', 'InvalidArgument', 'SubTransaction', 'Unsupported', 'Internal', 'DatabaseClosed', 'IncompatiblePromise'];

var idbDomErrorNames = ['Unknown', 'Constraint', 'Data', 'TransactionInactive', 'ReadOnly', 'Version', 'NotFound', 'InvalidState', 'InvalidAccess', 'Abort', 'Timeout', 'QuotaExceeded', 'Syntax', 'DataClone'];

var errorList = dexieErrorNames.concat(idbDomErrorNames);

var defaultTexts = {
    VersionChanged: "Database version changed by other database connection",
    DatabaseClosed: "Database has been closed",
    Abort: "Transaction aborted",
    TransactionInactive: "Transaction has already completed or failed"
};

//
// DexieError - base class of all out exceptions.
//
function DexieError(name, msg) {
    // Reason we don't use ES6 classes is because:
    // 1. It bloats transpiled code and increases size of minified code.
    // 2. It doesn't give us much in this case.
    // 3. It would require sub classes to call super(), which
    //    is not needed when deriving from Error.
    this._e = getErrorWithStack();
    this.name = name;
    this.message = msg;
}

derive(DexieError).from(Error).extend({
    stack: {
        get: function () {
            return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
        }
    },
    toString: function () {
        return this.name + ": " + this.message;
    }
});

function getMultiErrorMessage(msg, failures) {
    return msg + ". Errors: " + failures.map(function (f) {
        return f.toString();
    }).filter(function (v, i, s) {
        return s.indexOf(v) === i;
    }) // Only unique error strings
    .join('\n');
}

//
// ModifyError - thrown in WriteableCollection.modify()
// Specific constructor because it contains members failures and failedKeys.
//
function ModifyError(msg, failures, successCount, failedKeys) {
    this._e = getErrorWithStack();
    this.failures = failures;
    this.failedKeys = failedKeys;
    this.successCount = successCount;
}
derive(ModifyError).from(DexieError);

function BulkError(msg, failures) {
    this._e = getErrorWithStack();
    this.name = "BulkError";
    this.failures = failures;
    this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);

//
//
// Dynamically generate error names and exception classes based
// on the names in errorList.
//
//

// Map of {ErrorName -> ErrorName + "Error"}
var errnames = errorList.reduce(function (obj, name) {
    return obj[name] = name + "Error", obj;
}, {});

// Need an alias for DexieError because we're gonna create subclasses with the same name.
var BaseException = DexieError;
// Map of {ErrorName -> exception constructor}
var exceptions = errorList.reduce(function (obj, name) {
    // Let the name be "DexieError" because this name may
    // be shown in call stack and when debugging. DexieError is
    // the most true name because it derives from DexieError,
    // and we cannot change Function.name programatically without
    // dynamically create a Function object, which would be considered
    // 'eval-evil'.
    var fullName = name + "Error";
    function DexieError(msgOrInner, inner) {
        this._e = getErrorWithStack();
        this.name = fullName;
        if (!msgOrInner) {
            this.message = defaultTexts[name] || fullName;
            this.inner = null;
        } else if (typeof msgOrInner === 'string') {
            this.message = msgOrInner;
            this.inner = inner || null;
        } else if (typeof msgOrInner === 'object') {
            this.message = msgOrInner.name + ' ' + msgOrInner.message;
            this.inner = msgOrInner;
        }
    }
    derive(DexieError).from(BaseException);
    obj[name] = DexieError;
    return obj;
}, {});

// Use ECMASCRIPT standard exceptions where applicable:
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;

var exceptionMap = idbDomErrorNames.reduce(function (obj, name) {
    obj[name + "Error"] = exceptions[name];
    return obj;
}, {});

function mapError(domError, message) {
    if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name]) return domError;
    var rv = new exceptionMap[domError.name](message || domError.message, domError);
    if ("stack" in domError) {
        // Derive stack from inner exception if it has a stack
        setProp(rv, "stack", { get: function () {
                return this.inner.stack;
            } });
    }
    return rv;
}

var fullNameExceptions = errorList.reduce(function (obj, name) {
    if (["Syntax", "Type", "Range"].indexOf(name) === -1) obj[name + "Error"] = exceptions[name];
    return obj;
}, {});

fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;

function Events(ctx) {
    var evs = {};
    var rv = function (eventName, subscriber) {
        if (subscriber) {
            // Subscribe. If additional arguments than just the subscriber was provided, forward them as well.
            var i = arguments.length,
                args = new Array(i - 1);
            while (--i) {
                args[i - 1] = arguments[i];
            }evs[eventName].subscribe.apply(null, args);
            return ctx;
        } else if (typeof eventName === 'string') {
            // Return interface allowing to fire or unsubscribe from event
            return evs[eventName];
        }
    };
    rv.addEventType = add;

    for (var i = 1, l = arguments.length; i < l; ++i) {
        add(arguments[i]);
    }

    return rv;

    function add(eventName, chainFunction, defaultFunction) {
        if (typeof eventName === 'object') return addConfiguredEvents(eventName);
        if (!chainFunction) chainFunction = reverseStoppableEventChain;
        if (!defaultFunction) defaultFunction = nop;

        var context = {
            subscribers: [],
            fire: defaultFunction,
            subscribe: function (cb) {
                if (context.subscribers.indexOf(cb) === -1) {
                    context.subscribers.push(cb);
                    context.fire = chainFunction(context.fire, cb);
                }
            },
            unsubscribe: function (cb) {
                context.subscribers = context.subscribers.filter(function (fn) {
                    return fn !== cb;
                });
                context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
            }
        };
        evs[eventName] = rv[eventName] = context;
        return context;
    }

    function addConfiguredEvents(cfg) {
        // events(this, {reading: [functionChain, nop]});
        keys(cfg).forEach(function (eventName) {
            var args = cfg[eventName];
            if (isArray(args)) {
                add(eventName, cfg[eventName][0], cfg[eventName][1]);
            } else if (args === 'asap') {
                // Rather than approaching event subscription using a functional approach, we here do it in a for-loop where subscriber is executed in its own stack
                // enabling that any exception that occur wont disturb the initiator and also not nescessary be catched and forgotten.
                var context = add(eventName, mirror, function fire() {
                    // Optimazation-safe cloning of arguments into args.
                    var i = arguments.length,
                        args = new Array(i);
                    while (i--) {
                        args[i] = arguments[i];
                    } // All each subscriber:
                    context.subscribers.forEach(function (fn) {
                        asap(function fireEvent() {
                            fn.apply(null, args);
                        });
                    });
                });
            } else throw new exceptions.InvalidArgument("Invalid event config");
        });
    }
}

//
// Promise Class for Dexie library
//
// I started out writing this Promise class by copying promise-light (https://github.com/taylorhakes/promise-light) by
// https://github.com/taylorhakes - an A+ and ECMASCRIPT 6 compliant Promise implementation.
//
// Modifications needed to be done to support indexedDB because it wont accept setTimeout()
// (See discussion: https://github.com/promises-aplus/promises-spec/issues/45) .
// This topic was also discussed in the following thread: https://github.com/promises-aplus/promises-spec/issues/45
//
// This implementation will not use setTimeout or setImmediate when it's not needed. The behavior is 100% Promise/A+ compliant since
// the caller of new Promise() can be certain that the promise wont be triggered the lines after constructing the promise.
//
// In previous versions this was fixed by not calling setTimeout when knowing that the resolve() or reject() came from another
// tick. In Dexie v1.4.0, I've rewritten the Promise class entirely. Just some fragments of promise-light is left. I use
// another strategy now that simplifies everything a lot: to always execute callbacks in a new tick, but have an own microTick
// engine that is used instead of setImmediate() or setTimeout().
// Promise class has also been optimized a lot with inspiration from bluebird - to avoid closures as much as possible.
// Also with inspiration from bluebird, asyncronic stacks in debug mode.
//
// Specific non-standard features of this Promise class:
// * Async static context support (Promise.PSD)
// * Promise.follow() method built upon PSD, that allows user to track all promises created from current stack frame
//   and below + all promises that those promises creates or awaits.
// * Detect any unhandled promise in a PSD-scope (PSD.onunhandled). 
//
// David Fahlander, https://github.com/dfahlander
//

// Just a pointer that only this module knows about.
// Used in Promise constructor to emulate a private constructor.
var INTERNAL = {};

// Async stacks (long stacks) must not grow infinitely.
var LONG_STACKS_CLIP_LIMIT = 100;
var MAX_LONG_STACKS = 20;
var stack_being_generated = false;

/* The default "nextTick" function used only for the very first promise in a promise chain.
   As soon as then promise is resolved or rejected, all next tasks will be executed in micro ticks
   emulated in this module. For indexedDB compatibility, this means that every method needs to 
   execute at least one promise before doing an indexedDB operation. Dexie will always call 
   db.ready().then() for every operation to make sure the indexedDB event is started in an
   emulated micro tick.
*/
var schedulePhysicalTick = _global.setImmediate ?
// setImmediate supported. Those modern platforms also supports Function.bind().
setImmediate.bind(null, physicalTick) : _global.MutationObserver ?
// MutationObserver supported
function () {
    var hiddenDiv = document.createElement("div");
    new MutationObserver(function () {
        physicalTick();
        hiddenDiv = null;
    }).observe(hiddenDiv, { attributes: true });
    hiddenDiv.setAttribute('i', '1');
} :
// No support for setImmediate or MutationObserver. No worry, setTimeout is only called
// once time. Every tick that follows will be our emulated micro tick.
// Could have uses setTimeout.bind(null, 0, physicalTick) if it wasnt for that FF13 and below has a bug 
function () {
    setTimeout(physicalTick, 0);
};

// Confifurable through Promise.scheduler.
// Don't export because it would be unsafe to let unknown
// code call it unless they do try..catch within their callback.
// This function can be retrieved through getter of Promise.scheduler though,
// but users must not do Promise.scheduler (myFuncThatThrows exception)!
var asap$1 = function (callback, args) {
    microtickQueue.push([callback, args]);
    if (needsNewPhysicalTick) {
        schedulePhysicalTick();
        needsNewPhysicalTick = false;
    }
};

var isOutsideMicroTick = true;
var needsNewPhysicalTick = true;
var unhandledErrors = [];
var rejectingErrors = [];
var currentFulfiller = null;
var rejectionMapper = mirror; // Remove in next major when removing error mapping of DOMErrors and DOMExceptions

var globalPSD = {
    global: true,
    ref: 0,
    unhandleds: [],
    onunhandled: globalError,
    //env: null, // Will be set whenever leaving a scope using wrappers.snapshot()
    finalize: function () {
        this.unhandleds.forEach(function (uh) {
            try {
                globalError(uh[0], uh[1]);
            } catch (e) {}
        });
    }
};

var PSD = globalPSD;

var microtickQueue = []; // Callbacks to call in this or next physical tick.
var numScheduledCalls = 0; // Number of listener-calls left to do in this physical tick.
var tickFinalizers = []; // Finalizers to call when there are no more async calls scheduled within current physical tick.

// Wrappers are not being used yet. Their framework is functioning and can be used
// to replace environment during a PSD scope (a.k.a. 'zone').
/* **KEEP** export var wrappers = (() => {
    var wrappers = [];

    return {
        snapshot: () => {
            var i = wrappers.length,
                result = new Array(i);
            while (i--) result[i] = wrappers[i].snapshot();
            return result;
        },
        restore: values => {
            var i = wrappers.length;
            while (i--) wrappers[i].restore(values[i]);
        },
        wrap: () => wrappers.map(w => w.wrap()),
        add: wrapper => {
            wrappers.push(wrapper);
        }
    };
})();
*/

function Promise(fn) {
    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
    this._listeners = [];
    this.onuncatched = nop; // Deprecate in next major. Not needed. Better to use global error handler.

    // A library may set `promise._lib = true;` after promise is created to make resolve() or reject()
    // execute the microtask engine implicitely within the call to resolve() or reject().
    // To remain A+ compliant, a library must only set `_lib=true` if it can guarantee that the stack
    // only contains library code when calling resolve() or reject().
    // RULE OF THUMB: ONLY set _lib = true for promises explicitely resolving/rejecting directly from
    // global scope (event handler, timer etc)!
    this._lib = false;
    // Current async scope
    var psd = this._PSD = PSD;

    if (debug) {
        this._stackHolder = getErrorWithStack();
        this._prev = null;
        this._numPrev = 0; // Number of previous promises (for long stacks)
        linkToPreviousPromise(this, currentFulfiller);
    }

    if (typeof fn !== 'function') {
        if (fn !== INTERNAL) throw new TypeError('Not a function');
        // Private constructor (INTERNAL, state, value).
        // Used internally by Promise.resolve() and Promise.reject().
        this._state = arguments[1];
        this._value = arguments[2];
        if (this._state === false) handleRejection(this, this._value); // Map error, set stack and addPossiblyUnhandledError().
        return;
    }

    this._state = null; // null (=pending), false (=rejected) or true (=resolved)
    this._value = null; // error or result
    ++psd.ref; // Refcounting current scope
    executePromiseTask(this, fn);
}

props(Promise.prototype, {

    then: function (onFulfilled, onRejected) {
        var _this = this;

        var rv = new Promise(function (resolve, reject) {
            propagateToListener(_this, new Listener(onFulfilled, onRejected, resolve, reject));
        });
        debug && (!this._prev || this._state === null) && linkToPreviousPromise(rv, this);
        return rv;
    },

    _then: function (onFulfilled, onRejected) {
        // A little tinier version of then() that don't have to create a resulting promise.
        propagateToListener(this, new Listener(null, null, onFulfilled, onRejected));
    },

    catch: function (onRejected) {
        if (arguments.length === 1) return this.then(null, onRejected);
        // First argument is the Error type to catch
        var type = arguments[0],
            handler = arguments[1];
        return typeof type === 'function' ? this.then(null, function (err) {
            return (
                // Catching errors by its constructor type (similar to java / c++ / c#)
                // Sample: promise.catch(TypeError, function (e) { ... });
                err instanceof type ? handler(err) : PromiseReject(err)
            );
        }) : this.then(null, function (err) {
            return (
                // Catching errors by the error.name property. Makes sense for indexedDB where error type
                // is always DOMError but where e.name tells the actual error type.
                // Sample: promise.catch('ConstraintError', function (e) { ... });
                err && err.name === type ? handler(err) : PromiseReject(err)
            );
        });
    },

    finally: function (onFinally) {
        return this.then(function (value) {
            onFinally();
            return value;
        }, function (err) {
            onFinally();
            return PromiseReject(err);
        });
    },

    // Deprecate in next major. Needed only for db.on.error.
    uncaught: function (uncaughtHandler) {
        var _this2 = this;

        // Be backward compatible and use "onuncatched" as the event name on this.
        // Handle multiple subscribers through reverseStoppableEventChain(). If a handler returns `false`, bubbling stops.
        this.onuncatched = reverseStoppableEventChain(this.onuncatched, uncaughtHandler);
        // In case caller does this on an already rejected promise, assume caller wants to point out the error to this promise and not
        // a previous promise. Reason: the prevous promise may lack onuncatched handler. 
        if (this._state === false && unhandledErrors.indexOf(this) === -1) {
            // Replace unhandled error's destinaion promise with this one!
            unhandledErrors.some(function (p, i, l) {
                return p._value === _this2._value && (l[i] = _this2);
            });
            // Actually we do this shit because we need to support db.on.error() correctly during db.open(). If we deprecate db.on.error, we could
            // take away this piece of code as well as the onuncatched and uncaught() method.
        }
        return this;
    },

    stack: {
        get: function () {
            if (this._stack) return this._stack;
            try {
                stack_being_generated = true;
                var stacks = getStack(this, [], MAX_LONG_STACKS);
                var stack = stacks.join("\nFrom previous: ");
                if (this._state !== null) this._stack = stack; // Stack may be updated on reject.
                return stack;
            } finally {
                stack_being_generated = false;
            }
        }
    }
});

function Listener(onFulfilled, onRejected, resolve, reject) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.resolve = resolve;
    this.reject = reject;
    this.psd = PSD;
}

// Promise Static Properties
props(Promise, {
    all: function () {
        var values = getArrayOf.apply(null, arguments); // Supports iterables, implicit arguments and array-like.
        return new Promise(function (resolve, reject) {
            if (values.length === 0) resolve([]);
            var remaining = values.length;
            values.forEach(function (a, i) {
                return Promise.resolve(a).then(function (x) {
                    values[i] = x;
                    if (! --remaining) resolve(values);
                }, reject);
            });
        });
    },

    resolve: function (value) {
        if (value instanceof Promise) return value;
        if (value && typeof value.then === 'function') return new Promise(function (resolve, reject) {
            value.then(resolve, reject);
        });
        return new Promise(INTERNAL, true, value);
    },

    reject: PromiseReject,

    race: function () {
        var values = getArrayOf.apply(null, arguments);
        return new Promise(function (resolve, reject) {
            values.map(function (value) {
                return Promise.resolve(value).then(resolve, reject);
            });
        });
    },

    PSD: {
        get: function () {
            return PSD;
        },
        set: function (value) {
            return PSD = value;
        }
    },

    newPSD: newScope,

    usePSD: usePSD,

    scheduler: {
        get: function () {
            return asap$1;
        },
        set: function (value) {
            asap$1 = value;
        }
    },

    rejectionMapper: {
        get: function () {
            return rejectionMapper;
        },
        set: function (value) {
            rejectionMapper = value;
        } // Map reject failures
    },

    follow: function (fn) {
        return new Promise(function (resolve, reject) {
            return newScope(function (resolve, reject) {
                var psd = PSD;
                psd.unhandleds = []; // For unhandled standard- or 3rd party Promises. Checked at psd.finalize()
                psd.onunhandled = reject; // Triggered directly on unhandled promises of this library.
                psd.finalize = callBoth(function () {
                    var _this3 = this;

                    // Unhandled standard or 3rd part promises are put in PSD.unhandleds and
                    // examined upon scope completion while unhandled rejections in this Promise
                    // will trigger directly through psd.onunhandled
                    run_at_end_of_this_or_next_physical_tick(function () {
                        _this3.unhandleds.length === 0 ? resolve() : reject(_this3.unhandleds[0]);
                    });
                }, psd.finalize);
                fn();
            }, resolve, reject);
        });
    },

    on: Events(null, { "error": [reverseStoppableEventChain, defaultErrorHandler] // Default to defaultErrorHandler
    })

});

var PromiseOnError = Promise.on.error;
PromiseOnError.subscribe = deprecated("Promise.on('error')", PromiseOnError.subscribe);
PromiseOnError.unsubscribe = deprecated("Promise.on('error').unsubscribe", PromiseOnError.unsubscribe);

/**
* Take a potentially misbehaving resolver function and make sure
* onFulfilled and onRejected are only called once.
*
* Makes no guarantees about asynchrony.
*/
function executePromiseTask(promise, fn) {
    // Promise Resolution Procedure:
    // https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    try {
        fn(function (value) {
            if (promise._state !== null) return;
            if (value === promise) throw new TypeError('A promise cannot be resolved with itself.');
            var shouldExecuteTick = promise._lib && beginMicroTickScope();
            if (value && typeof value.then === 'function') {
                executePromiseTask(promise, function (resolve, reject) {
                    value instanceof Promise ? value._then(resolve, reject) : value.then(resolve, reject);
                });
            } else {
                promise._state = true;
                promise._value = value;
                propagateAllListeners(promise);
            }
            if (shouldExecuteTick) endMicroTickScope();
        }, handleRejection.bind(null, promise)); // If Function.bind is not supported. Exception is handled in catch below
    } catch (ex) {
        handleRejection(promise, ex);
    }
}

function handleRejection(promise, reason) {
    rejectingErrors.push(reason);
    if (promise._state !== null) return;
    var shouldExecuteTick = promise._lib && beginMicroTickScope();
    reason = rejectionMapper(reason);
    promise._state = false;
    promise._value = reason;
    debug && reason !== null && typeof reason === 'object' && !reason._promise && tryCatch(function () {
        var origProp = getPropertyDescriptor(reason, "stack");
        reason._promise = promise;
        setProp(reason, "stack", {
            get: function () {
                return stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack;
            }
        });
    });
    // Add the failure to a list of possibly uncaught errors
    addPossiblyUnhandledError(promise);
    propagateAllListeners(promise);
    if (shouldExecuteTick) endMicroTickScope();
}

function propagateAllListeners(promise) {
    //debug && linkToPreviousPromise(promise);
    var listeners = promise._listeners;
    promise._listeners = [];
    for (var i = 0, len = listeners.length; i < len; ++i) {
        propagateToListener(promise, listeners[i]);
    }
    var psd = promise._PSD;
    --psd.ref || psd.finalize(); // if psd.ref reaches zero, call psd.finalize();
    if (numScheduledCalls === 0) {
        // If numScheduledCalls is 0, it means that our stack is not in a callback of a scheduled call,
        // and that no deferreds where listening to this rejection or success.
        // Since there is a risk that our stack can contain application code that may
        // do stuff after this code is finished that may generate new calls, we cannot
        // call finalizers here.
        ++numScheduledCalls;
        asap$1(function () {
            if (--numScheduledCalls === 0) finalizePhysicalTick(); // Will detect unhandled errors
        }, []);
    }
}

function propagateToListener(promise, listener) {
    if (promise._state === null) {
        promise._listeners.push(listener);
        return;
    }

    var cb = promise._state ? listener.onFulfilled : listener.onRejected;
    if (cb === null) {
        // This Listener doesnt have a listener for the event being triggered (onFulfilled or onReject) so lets forward the event to any eventual listeners on the Promise instance returned by then() or catch()
        return (promise._state ? listener.resolve : listener.reject)(promise._value);
    }
    var psd = listener.psd;
    ++psd.ref;
    ++numScheduledCalls;
    asap$1(callListener, [cb, promise, listener]);
}

function callListener(cb, promise, listener) {
    var outerScope = PSD;
    var psd = listener.psd;
    try {
        if (psd !== outerScope) {
            // **KEEP** outerScope.env = wrappers.snapshot(); // Snapshot outerScope's environment.
            PSD = psd;
            // **KEEP** wrappers.restore(psd.env); // Restore PSD's environment.
        }

        // Set static variable currentFulfiller to the promise that is being fullfilled,
        // so that we connect the chain of promises (for long stacks support)
        currentFulfiller = promise;

        // Call callback and resolve our listener with it's return value.
        var value = promise._value,
            ret;
        if (promise._state) {
            ret = cb(value);
        } else {
            if (rejectingErrors.length) rejectingErrors = [];
            ret = cb(value);
            if (rejectingErrors.indexOf(value) === -1) markErrorAsHandled(promise); // Callback didnt do Promise.reject(err) nor reject(err) onto another promise.
        }
        listener.resolve(ret);
    } catch (e) {
        // Exception thrown in callback. Reject our listener.
        listener.reject(e);
    } finally {
        // Restore PSD, env and currentFulfiller.
        if (psd !== outerScope) {
            PSD = outerScope;
            // **KEEP** wrappers.restore(outerScope.env); // Restore outerScope's environment
        }
        currentFulfiller = null;
        if (--numScheduledCalls === 0) finalizePhysicalTick();
        --psd.ref || psd.finalize();
    }
}

function getStack(promise, stacks, limit) {
    if (stacks.length === limit) return stacks;
    var stack = "";
    if (promise._state === false) {
        var failure = promise._value,
            errorName,
            message;

        if (failure != null) {
            errorName = failure.name || "Error";
            message = failure.message || failure;
            stack = prettyStack(failure, 0);
        } else {
            errorName = failure; // If error is undefined or null, show that.
            message = "";
        }
        stacks.push(errorName + (message ? ": " + message : "") + stack);
    }
    if (debug) {
        stack = prettyStack(promise._stackHolder, 2);
        if (stack && stacks.indexOf(stack) === -1) stacks.push(stack);
        if (promise._prev) getStack(promise._prev, stacks, limit);
    }
    return stacks;
}

function linkToPreviousPromise(promise, prev) {
    // Support long stacks by linking to previous completed promise.
    var numPrev = prev ? prev._numPrev + 1 : 0;
    if (numPrev < LONG_STACKS_CLIP_LIMIT) {
        // Prohibit infinite Promise loops to get an infinite long memory consuming "tail".
        promise._prev = prev;
        promise._numPrev = numPrev;
    }
}

/* The callback to schedule with setImmediate() or setTimeout().
   It runs a virtual microtick and executes any callback registered in microtickQueue.
 */
function physicalTick() {
    beginMicroTickScope() && endMicroTickScope();
}

function beginMicroTickScope() {
    var wasRootExec = isOutsideMicroTick;
    isOutsideMicroTick = false;
    needsNewPhysicalTick = false;
    return wasRootExec;
}

/* Executes micro-ticks without doing try..catch.
   This can be possible because we only use this internally and
   the registered functions are exception-safe (they do try..catch
   internally before calling any external method). If registering
   functions in the microtickQueue that are not exception-safe, this
   would destroy the framework and make it instable. So we don't export
   our asap method.
*/
function endMicroTickScope() {
    var callbacks, i, l;
    do {
        while (microtickQueue.length > 0) {
            callbacks = microtickQueue;
            microtickQueue = [];
            l = callbacks.length;
            for (i = 0; i < l; ++i) {
                var item = callbacks[i];
                item[0].apply(null, item[1]);
            }
        }
    } while (microtickQueue.length > 0);
    isOutsideMicroTick = true;
    needsNewPhysicalTick = true;
}

function finalizePhysicalTick() {
    var unhandledErrs = unhandledErrors;
    unhandledErrors = [];
    unhandledErrs.forEach(function (p) {
        p._PSD.onunhandled.call(null, p._value, p);
    });
    var finalizers = tickFinalizers.slice(0); // Clone first because finalizer may remove itself from list.
    var i = finalizers.length;
    while (i) {
        finalizers[--i]();
    }
}

function run_at_end_of_this_or_next_physical_tick(fn) {
    function finalizer() {
        fn();
        tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
    }
    tickFinalizers.push(finalizer);
    ++numScheduledCalls;
    asap$1(function () {
        if (--numScheduledCalls === 0) finalizePhysicalTick();
    }, []);
}

function addPossiblyUnhandledError(promise) {
    // Only add to unhandledErrors if not already there. The first one to add to this list
    // will be upon the first rejection so that the root cause (first promise in the
    // rejection chain) is the one listed.
    if (!unhandledErrors.some(function (p) {
        return p._value === promise._value;
    })) unhandledErrors.push(promise);
}

function markErrorAsHandled(promise) {
    // Called when a reject handled is actually being called.
    // Search in unhandledErrors for any promise whos _value is this promise_value (list
    // contains only rejected promises, and only one item per error)
    var i = unhandledErrors.length;
    while (i) {
        if (unhandledErrors[--i]._value === promise._value) {
            // Found a promise that failed with this same error object pointer,
            // Remove that since there is a listener that actually takes care of it.
            unhandledErrors.splice(i, 1);
            return;
        }
    }
}

// By default, log uncaught errors to the console
function defaultErrorHandler(e) {
    console.warn('Unhandled rejection: ' + (e.stack || e));
}

function PromiseReject(reason) {
    return new Promise(INTERNAL, false, reason);
}

function wrap(fn, errorCatcher) {
    var psd = PSD;
    return function () {
        var wasRootExec = beginMicroTickScope(),
            outerScope = PSD;

        try {
            if (outerScope !== psd) {
                // **KEEP** outerScope.env = wrappers.snapshot(); // Snapshot outerScope's environment
                PSD = psd;
                // **KEEP** wrappers.restore(psd.env); // Restore PSD's environment.
            }
            return fn.apply(this, arguments);
        } catch (e) {
            errorCatcher && errorCatcher(e);
        } finally {
            if (outerScope !== psd) {
                PSD = outerScope;
                // **KEEP** wrappers.restore(outerScope.env); // Restore outerScope's environment
            }
            if (wasRootExec) endMicroTickScope();
        }
    };
}

function newScope(fn, a1, a2, a3) {
    var parent = PSD,
        psd = Object.create(parent);
    psd.parent = parent;
    psd.ref = 0;
    psd.global = false;
    // **KEEP** psd.env = wrappers.wrap(psd);

    // unhandleds and onunhandled should not be specifically set here.
    // Leave them on parent prototype.
    // unhandleds.push(err) will push to parent's prototype
    // onunhandled() will call parents onunhandled (with this scope's this-pointer though!)
    ++parent.ref;
    psd.finalize = function () {
        --this.parent.ref || this.parent.finalize();
    };
    var rv = usePSD(psd, fn, a1, a2, a3);
    if (psd.ref === 0) psd.finalize();
    return rv;
}

function usePSD(psd, fn, a1, a2, a3) {
    var outerScope = PSD;
    try {
        if (psd !== outerScope) {
            // **KEEP** outerScope.env = wrappers.snapshot(); // snapshot outerScope's environment.
            PSD = psd;
            // **KEEP** wrappers.restore(psd.env); // Restore PSD's environment.
        }
        return fn(a1, a2, a3);
    } finally {
        if (psd !== outerScope) {
            PSD = outerScope;
            // **KEEP** wrappers.restore(outerScope.env); // Restore outerScope's environment.
        }
    }
}

var UNHANDLEDREJECTION = "unhandledrejection";

function globalError(err, promise) {
    var rv;
    try {
        rv = promise.onuncatched(err);
    } catch (e) {}
    if (rv !== false) try {
        var event,
            eventData = { promise: promise, reason: err };
        if (_global.document && document.createEvent) {
            event = document.createEvent('Event');
            event.initEvent(UNHANDLEDREJECTION, true, true);
            extend(event, eventData);
        } else if (_global.CustomEvent) {
            event = new CustomEvent(UNHANDLEDREJECTION, { detail: eventData });
            extend(event, eventData);
        }
        if (event && _global.dispatchEvent) {
            dispatchEvent(event);
            if (!_global.PromiseRejectionEvent && _global.onunhandledrejection)
                // No native support for PromiseRejectionEvent but user has set window.onunhandledrejection. Manually call it.
                try {
                    _global.onunhandledrejection(event);
                } catch (_) {}
        }
        if (!event.defaultPrevented) {
            // Backward compatibility: fire to events registered at Promise.on.error
            Promise.on.error.fire(err, promise);
        }
    } catch (e) {}
}

/* **KEEP** 

export function wrapPromise(PromiseClass) {
    var proto = PromiseClass.prototype;
    var origThen = proto.then;
    
    wrappers.add({
        snapshot: () => proto.then,
        restore: value => {proto.then = value;},
        wrap: () => patchedThen
    });

    function patchedThen (onFulfilled, onRejected) {
        var promise = this;
        var onFulfilledProxy = wrap(function(value){
            var rv = value;
            if (onFulfilled) {
                rv = onFulfilled(rv);
                if (rv && typeof rv.then === 'function') rv.then(); // Intercept that promise as well.
            }
            --PSD.ref || PSD.finalize();
            return rv;
        });
        var onRejectedProxy = wrap(function(err){
            promise._$err = err;
            var unhandleds = PSD.unhandleds;
            var idx = unhandleds.length,
                rv;
            while (idx--) if (unhandleds[idx]._$err === err) break;
            if (onRejected) {
                if (idx !== -1) unhandleds.splice(idx, 1); // Mark as handled.
                rv = onRejected(err);
                if (rv && typeof rv.then === 'function') rv.then(); // Intercept that promise as well.
            } else {
                if (idx === -1) unhandleds.push(promise);
                rv = PromiseClass.reject(err);
                rv._$nointercept = true; // Prohibit eternal loop.
            }
            --PSD.ref || PSD.finalize();
            return rv;
        });
        
        if (this._$nointercept) return origThen.apply(this, arguments);
        ++PSD.ref;
        return origThen.call(this, onFulfilledProxy, onRejectedProxy);
    }
}

// Global Promise wrapper
if (_global.Promise) wrapPromise(_global.Promise);

*/

doFakeAutoComplete(function () {
    // Simplify the job for VS Intellisense. This piece of code is one of the keys to the new marvellous intellisense support in Dexie.
    asap$1 = function (fn, args) {
        setTimeout(function () {
            fn.apply(null, args);
        }, 0);
    };
});

function rejection(err, uncaughtHandler) {
    // Get the call stack and return a rejected promise.
    var rv = Promise.reject(err);
    return uncaughtHandler ? rv.uncaught(uncaughtHandler) : rv;
}

/*
 * Dexie.js - a minimalistic wrapper for IndexedDB
 * ===============================================
 *
 * By David Fahlander, david.fahlander@gmail.com
 *
 * Version 1.5.1, Tue Nov 01 2016
 *
 * http://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
 */

var DEXIE_VERSION = '1.5.1';
var maxString = String.fromCharCode(65535);
var maxKey = function () {
    try {
        IDBKeyRange.only([[]]);return [[]];
    } catch (e) {
        return maxString;
    }
}();
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== 'undefined' && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = function (frame) {
    return !/(dexie\.js|dexie\.min\.js)/.test(frame);
};

setDebug(debug, dexieStackFrameFilter);

function Dexie(dbName, options) {
    /// <param name="options" type="Object" optional="true">Specify only if you wich to control which addons that should run on this instance</param>
    var deps = Dexie.dependencies;
    var opts = extend({
        // Default Options
        addons: Dexie.addons, // Pick statically registered addons by default
        autoOpen: true, // Don't require db.open() explicitely.
        indexedDB: deps.indexedDB, // Backend IndexedDB api. Default to IDBShim or browser env.
        IDBKeyRange: deps.IDBKeyRange // Backend IDBKeyRange api. Default to IDBShim or browser env.
    }, options);
    var addons = opts.addons,
        autoOpen = opts.autoOpen,
        indexedDB = opts.indexedDB,
        IDBKeyRange = opts.IDBKeyRange;

    var globalSchema = this._dbSchema = {};
    var versions = [];
    var dbStoreNames = [];
    var allTables = {};
    ///<var type="IDBDatabase" />
    var idbdb = null; // Instance of IDBDatabase
    var dbOpenError = null;
    var isBeingOpened = false;
    var openComplete = false;
    var READONLY = "readonly",
        READWRITE = "readwrite";
    var db = this;
    var dbReadyResolve,
        dbReadyPromise = new Promise(function (resolve) {
        dbReadyResolve = resolve;
    }),
        cancelOpen,
        openCanceller = new Promise(function (_, reject) {
        cancelOpen = reject;
    });
    var autoSchema = true;
    var hasNativeGetDatabaseNames = !!getNativeGetDatabaseNamesFn(indexedDB),
        hasGetAll;

    function init() {
        // Default subscribers to "versionchange" and "blocked".
        // Can be overridden by custom handlers. If custom handlers return false, these default
        // behaviours will be prevented.
        db.on("versionchange", function (ev) {
            // Default behavior for versionchange event is to close database connection.
            // Caller can override this behavior by doing db.on("versionchange", function(){ return false; });
            // Let's not block the other window from making it's delete() or open() call.
            // NOTE! This event is never fired in IE,Edge or Safari.
            if (ev.newVersion > 0) console.warn('Another connection wants to upgrade database \'' + db.name + '\'. Closing db now to resume the upgrade.');else console.warn('Another connection wants to delete database \'' + db.name + '\'. Closing db now to resume the delete request.');
            db.close();
            // In many web applications, it would be recommended to force window.reload()
            // when this event occurs. To do that, subscribe to the versionchange event
            // and call window.location.reload(true) if ev.newVersion > 0 (not a deletion)
            // The reason for this is that your current web app obviously has old schema code that needs
            // to be updated. Another window got a newer version of the app and needs to upgrade DB but
            // your window is blocking it unless we close it here.
        });
        db.on("blocked", function (ev) {
            if (!ev.newVersion || ev.newVersion < ev.oldVersion) console.warn('Dexie.delete(\'' + db.name + '\') was blocked');else console.warn('Upgrade \'' + db.name + '\' blocked by other connection holding version ' + ev.oldVersion / 10);
        });
    }

    //
    //
    //
    // ------------------------- Versioning Framework---------------------------
    //
    //
    //

    this.version = function (versionNumber) {
        /// <param name="versionNumber" type="Number"></param>
        /// <returns type="Version"></returns>
        if (idbdb || isBeingOpened) throw new exceptions.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, versionNumber);
        var versionInstance = versions.filter(function (v) {
            return v._cfg.version === versionNumber;
        })[0];
        if (versionInstance) return versionInstance;
        versionInstance = new Version(versionNumber);
        versions.push(versionInstance);
        versions.sort(lowerVersionFirst);
        return versionInstance;
    };

    function Version(versionNumber) {
        this._cfg = {
            version: versionNumber,
            storesSource: null,
            dbschema: {},
            tables: {},
            contentUpgrade: null
        };
        this.stores({}); // Derive earlier schemas by default.
    }

    extend(Version.prototype, {
        stores: function (stores) {
            /// <summary>
            ///   Defines the schema for a particular version
            /// </summary>
            /// <param name="stores" type="Object">
            /// Example: <br/>
            ///   {users: "id++,first,last,&amp;username,*email", <br/>
            ///   passwords: "id++,&amp;username"}<br/>
            /// <br/>
            /// Syntax: {Table: "[primaryKey][++],[&amp;][*]index1,[&amp;][*]index2,..."}<br/><br/>
            /// Special characters:<br/>
            ///  "&amp;"  means unique key, <br/>
            ///  "*"  means value is multiEntry, <br/>
            ///  "++" means auto-increment and only applicable for primary key <br/>
            /// </param>
            this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;

            // Derive stores from earlier versions if they are not explicitely specified as null or a new syntax.
            var storesSpec = {};
            versions.forEach(function (version) {
                // 'versions' is always sorted by lowest version first.
                extend(storesSpec, version._cfg.storesSource);
            });

            var dbschema = this._cfg.dbschema = {};
            this._parseStoresSpec(storesSpec, dbschema);
            // Update the latest schema to this version
            // Update API
            globalSchema = db._dbSchema = dbschema;
            removeTablesApi([allTables, db, Transaction.prototype]);
            setApiOnPlace([allTables, db, Transaction.prototype, this._cfg.tables], keys(dbschema), READWRITE, dbschema);
            dbStoreNames = keys(dbschema);
            return this;
        },
        upgrade: function (upgradeFunction) {
            /// <param name="upgradeFunction" optional="true">Function that performs upgrading actions.</param>
            var self = this;
            fakeAutoComplete(function () {
                upgradeFunction(db._createTransaction(READWRITE, keys(self._cfg.dbschema), self._cfg.dbschema)); // BUGBUG: No code completion for prev version's tables wont appear.
            });
            this._cfg.contentUpgrade = upgradeFunction;
            return this;
        },
        _parseStoresSpec: function (stores, outSchema) {
            keys(stores).forEach(function (tableName) {
                if (stores[tableName] !== null) {
                    var instanceTemplate = {};
                    var indexes = parseIndexSyntax(stores[tableName]);
                    var primKey = indexes.shift();
                    if (primKey.multi) throw new exceptions.Schema("Primary key cannot be multi-valued");
                    if (primKey.keyPath) setByKeyPath(instanceTemplate, primKey.keyPath, primKey.auto ? 0 : primKey.keyPath);
                    indexes.forEach(function (idx) {
                        if (idx.auto) throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
                        if (!idx.keyPath) throw new exceptions.Schema("Index must have a name and cannot be an empty string");
                        setByKeyPath(instanceTemplate, idx.keyPath, idx.compound ? idx.keyPath.map(function () {
                            return "";
                        }) : "");
                    });
                    outSchema[tableName] = new TableSchema(tableName, primKey, indexes, instanceTemplate);
                }
            });
        }
    });

    function runUpgraders(oldVersion, idbtrans, reject) {
        var trans = db._createTransaction(READWRITE, dbStoreNames, globalSchema);
        trans.create(idbtrans);
        trans._completion.catch(reject);
        var rejectTransaction = trans._reject.bind(trans);
        newScope(function () {
            PSD.trans = trans;
            if (oldVersion === 0) {
                // Create tables:
                keys(globalSchema).forEach(function (tableName) {
                    createTable(idbtrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
                });
                Promise.follow(function () {
                    return db.on.populate.fire(trans);
                }).catch(rejectTransaction);
            } else updateTablesAndIndexes(oldVersion, trans, idbtrans).catch(rejectTransaction);
        });
    }

    function updateTablesAndIndexes(oldVersion, trans, idbtrans) {
        // Upgrade version to version, step-by-step from oldest to newest version.
        // Each transaction object will contain the table set that was current in that version (but also not-yet-deleted tables from its previous version)
        var queue = [];
        var oldVersionStruct = versions.filter(function (version) {
            return version._cfg.version === oldVersion;
        })[0];
        if (!oldVersionStruct) throw new exceptions.Upgrade("Dexie specification of currently installed DB version is missing");
        globalSchema = db._dbSchema = oldVersionStruct._cfg.dbschema;
        var anyContentUpgraderHasRun = false;

        var versToRun = versions.filter(function (v) {
            return v._cfg.version > oldVersion;
        });
        versToRun.forEach(function (version) {
            /// <param name="version" type="Version"></param>
            queue.push(function () {
                var oldSchema = globalSchema;
                var newSchema = version._cfg.dbschema;
                adjustToExistingIndexNames(oldSchema, idbtrans);
                adjustToExistingIndexNames(newSchema, idbtrans);
                globalSchema = db._dbSchema = newSchema;
                var diff = getSchemaDiff(oldSchema, newSchema);
                // Add tables           
                diff.add.forEach(function (tuple) {
                    createTable(idbtrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
                });
                // Change tables
                diff.change.forEach(function (change) {
                    if (change.recreate) {
                        throw new exceptions.Upgrade("Not yet support for changing primary key");
                    } else {
                        var store = idbtrans.objectStore(change.name);
                        // Add indexes
                        change.add.forEach(function (idx) {
                            addIndex(store, idx);
                        });
                        // Update indexes
                        change.change.forEach(function (idx) {
                            store.deleteIndex(idx.name);
                            addIndex(store, idx);
                        });
                        // Delete indexes
                        change.del.forEach(function (idxName) {
                            store.deleteIndex(idxName);
                        });
                    }
                });
                if (version._cfg.contentUpgrade) {
                    anyContentUpgraderHasRun = true;
                    return Promise.follow(function () {
                        version._cfg.contentUpgrade(trans);
                    });
                }
            });
            queue.push(function (idbtrans) {
                if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
                    // Dont delete old tables if ieBug is present and a content upgrader has run. Let tables be left in DB so far. This needs to be taken care of.
                    var newSchema = version._cfg.dbschema;
                    // Delete old tables
                    deleteRemovedTables(newSchema, idbtrans);
                }
            });
        });

        // Now, create a queue execution engine
        function runQueue() {
            return queue.length ? Promise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : Promise.resolve();
        }

        return runQueue().then(function () {
            createMissingTables(globalSchema, idbtrans); // At last, make sure to create any missing tables. (Needed by addons that add stores to DB without specifying version)
        });
    }

    function getSchemaDiff(oldSchema, newSchema) {
        var diff = {
            del: [], // Array of table names
            add: [], // Array of [tableName, newDefinition]
            change: [] // Array of {name: tableName, recreate: newDefinition, del: delIndexNames, add: newIndexDefs, change: changedIndexDefs}
        };
        for (var table in oldSchema) {
            if (!newSchema[table]) diff.del.push(table);
        }
        for (table in newSchema) {
            var oldDef = oldSchema[table],
                newDef = newSchema[table];
            if (!oldDef) {
                diff.add.push([table, newDef]);
            } else {
                var change = {
                    name: table,
                    def: newDef,
                    recreate: false,
                    del: [],
                    add: [],
                    change: []
                };
                if (oldDef.primKey.src !== newDef.primKey.src) {
                    // Primary key has changed. Remove and re-add table.
                    change.recreate = true;
                    diff.change.push(change);
                } else {
                    // Same primary key. Just find out what differs:
                    var oldIndexes = oldDef.idxByName;
                    var newIndexes = newDef.idxByName;
                    for (var idxName in oldIndexes) {
                        if (!newIndexes[idxName]) change.del.push(idxName);
                    }
                    for (idxName in newIndexes) {
                        var oldIdx = oldIndexes[idxName],
                            newIdx = newIndexes[idxName];
                        if (!oldIdx) change.add.push(newIdx);else if (oldIdx.src !== newIdx.src) change.change.push(newIdx);
                    }
                    if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
                        diff.change.push(change);
                    }
                }
            }
        }
        return diff;
    }

    function createTable(idbtrans, tableName, primKey, indexes) {
        /// <param name="idbtrans" type="IDBTransaction"></param>
        var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? { keyPath: primKey.keyPath, autoIncrement: primKey.auto } : { autoIncrement: primKey.auto });
        indexes.forEach(function (idx) {
            addIndex(store, idx);
        });
        return store;
    }

    function createMissingTables(newSchema, idbtrans) {
        keys(newSchema).forEach(function (tableName) {
            if (!idbtrans.db.objectStoreNames.contains(tableName)) {
                createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
            }
        });
    }

    function deleteRemovedTables(newSchema, idbtrans) {
        for (var i = 0; i < idbtrans.db.objectStoreNames.length; ++i) {
            var storeName = idbtrans.db.objectStoreNames[i];
            if (newSchema[storeName] == null) {
                idbtrans.db.deleteObjectStore(storeName);
            }
        }
    }

    function addIndex(store, idx) {
        store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
    }

    function dbUncaught(err) {
        return db.on.error.fire(err);
    }

    //
    //
    //      Dexie Protected API
    //
    //

    this._allTables = allTables;

    this._tableFactory = function createTable(mode, tableSchema) {
        /// <param name="tableSchema" type="TableSchema"></param>
        if (mode === READONLY) return new Table(tableSchema.name, tableSchema, Collection);else return new WriteableTable(tableSchema.name, tableSchema);
    };

    this._createTransaction = function (mode, storeNames, dbschema, parentTransaction) {
        return new Transaction(mode, storeNames, dbschema, parentTransaction);
    };

    /* Generate a temporary transaction when db operations are done outside a transactino scope.
    */
    function tempTransaction(mode, storeNames, fn) {
        // Last argument is "writeLocked". But this doesnt apply to oneshot direct db operations, so we ignore it.
        if (!openComplete && !PSD.letThrough) {
            if (!isBeingOpened) {
                if (!autoOpen) return rejection(new exceptions.DatabaseClosed(), dbUncaught);
                db.open().catch(nop); // Open in background. If if fails, it will be catched by the final promise anyway.
            }
            return dbReadyPromise.then(function () {
                return tempTransaction(mode, storeNames, fn);
            });
        } else {
            var trans = db._createTransaction(mode, storeNames, globalSchema);
            return trans._promise(mode, function (resolve, reject) {
                newScope(function () {
                    // OPTIMIZATION POSSIBLE? newScope() not needed because it's already done in _promise.
                    PSD.trans = trans;
                    fn(resolve, reject, trans);
                });
            }).then(function (result) {
                // Instead of resolving value directly, wait with resolving it until transaction has completed.
                // Otherwise the data would not be in the DB if requesting it in the then() operation.
                // Specifically, to ensure that the following expression will work:
                //
                //   db.friends.put({name: "Arne"}).then(function () {
                //       db.friends.where("name").equals("Arne").count(function(count) {
                //           assert (count === 1);
                //       });
                //   });
                //
                return trans._completion.then(function () {
                    return result;
                });
            }); /*.catch(err => { // Don't do this as of now. If would affect bulk- and modify methods in a way that could be more intuitive. But wait! Maybe change in next major.
                 trans._reject(err);
                 return rejection(err);
                });*/
        }
    }

    this._whenReady = function (fn) {
        return new Promise(fake || openComplete || PSD.letThrough ? fn : function (resolve, reject) {
            if (!isBeingOpened) {
                if (!autoOpen) {
                    reject(new exceptions.DatabaseClosed());
                    return;
                }
                db.open().catch(nop); // Open in background. If if fails, it will be catched by the final promise anyway.
            }
            dbReadyPromise.then(function () {
                fn(resolve, reject);
            });
        }).uncaught(dbUncaught);
    };

    //
    //
    //
    //
    //      Dexie API
    //
    //
    //

    this.verno = 0;

    this.open = function () {
        if (isBeingOpened || idbdb) return dbReadyPromise.then(function () {
            return dbOpenError ? rejection(dbOpenError, dbUncaught) : db;
        });
        debug && (openCanceller._stackHolder = getErrorWithStack()); // Let stacks point to when open() was called rather than where new Dexie() was called.
        isBeingOpened = true;
        dbOpenError = null;
        openComplete = false;

        // Function pointers to call when the core opening process completes.
        var resolveDbReady = dbReadyResolve,

        // upgradeTransaction to abort on failure.
        upgradeTransaction = null;

        return Promise.race([openCanceller, new Promise(function (resolve, reject) {
            doFakeAutoComplete(function () {
                return resolve();
            });

            // Make sure caller has specified at least one version
            if (versions.length > 0) autoSchema = false;

            // Multiply db.verno with 10 will be needed to workaround upgrading bug in IE:
            // IE fails when deleting objectStore after reading from it.
            // A future version of Dexie.js will stopover an intermediate version to workaround this.
            // At that point, we want to be backward compatible. Could have been multiplied with 2, but by using 10, it is easier to map the number to the real version number.

            // If no API, throw!
            if (!indexedDB) throw new exceptions.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL " + "(not locally). If using old Safari versions, make sure to include indexedDB polyfill.");

            var req = autoSchema ? indexedDB.open(dbName) : indexedDB.open(dbName, Math.round(db.verno * 10));
            if (!req) throw new exceptions.MissingAPI("IndexedDB API not available"); // May happen in Safari private mode, see https://github.com/dfahlander/Dexie.js/issues/134
            req.onerror = wrap(eventRejectHandler(reject));
            req.onblocked = wrap(fireOnBlocked);
            req.onupgradeneeded = wrap(function (e) {
                upgradeTransaction = req.transaction;
                if (autoSchema && !db._allowEmptyDB) {
                    // Unless an addon has specified db._allowEmptyDB, lets make the call fail.
                    // Caller did not specify a version or schema. Doing that is only acceptable for opening alread existing databases.
                    // If onupgradeneeded is called it means database did not exist. Reject the open() promise and make sure that we
                    // do not create a new database by accident here.
                    req.onerror = preventDefault; // Prohibit onabort error from firing before we're done!
                    upgradeTransaction.abort(); // Abort transaction (would hope that this would make DB disappear but it doesnt.)
                    // Close database and delete it.
                    req.result.close();
                    var delreq = indexedDB.deleteDatabase(dbName); // The upgrade transaction is atomic, and javascript is single threaded - meaning that there is no risk that we delete someone elses database here!
                    delreq.onsuccess = delreq.onerror = wrap(function () {
                        reject(new exceptions.NoSuchDatabase('Database ' + dbName + ' doesnt exist'));
                    });
                } else {
                    upgradeTransaction.onerror = wrap(eventRejectHandler(reject));
                    var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion; // Safari 8 fix.
                    runUpgraders(oldVer / 10, upgradeTransaction, reject, req);
                }
            }, reject);

            req.onsuccess = wrap(function () {
                // Core opening procedure complete. Now let's just record some stuff.
                upgradeTransaction = null;
                idbdb = req.result;
                connections.push(db); // Used for emulating versionchange event on IE/Edge/Safari.

                if (autoSchema) readGlobalSchema();else if (idbdb.objectStoreNames.length > 0) {
                    try {
                        adjustToExistingIndexNames(globalSchema, idbdb.transaction(safariMultiStoreFix(idbdb.objectStoreNames), READONLY));
                    } catch (e) {
                        // Safari may bail out if > 1 store names. However, this shouldnt be a showstopper. Issue #120.
                    }
                }

                idbdb.onversionchange = wrap(function (ev) {
                    db._vcFired = true; // detect implementations that not support versionchange (IE/Edge/Safari)
                    db.on("versionchange").fire(ev);
                });

                if (!hasNativeGetDatabaseNames) {
                    // Update localStorage with list of database names
                    globalDatabaseList(function (databaseNames) {
                        if (databaseNames.indexOf(dbName) === -1) return databaseNames.push(dbName);
                    });
                }

                resolve();
            }, reject);
        })]).then(function () {
            // Before finally resolving the dbReadyPromise and this promise,
            // call and await all on('ready') subscribers:
            // Dexie.vip() makes subscribers able to use the database while being opened.
            // This is a must since these subscribers take part of the opening procedure.
            return Dexie.vip(db.on.ready.fire);
        }).then(function () {
            // Resolve the db.open() with the db instance.
            isBeingOpened = false;
            return db;
        }).catch(function (err) {
            try {
                // Did we fail within onupgradeneeded? Make sure to abort the upgrade transaction so it doesnt commit.
                upgradeTransaction && upgradeTransaction.abort();
            } catch (e) {}
            isBeingOpened = false; // Set before calling db.close() so that it doesnt reject openCanceller again (leads to unhandled rejection event).
            db.close(); // Closes and resets idbdb, removes connections, resets dbReadyPromise and openCanceller so that a later db.open() is fresh.
            // A call to db.close() may have made on-ready subscribers fail. Use dbOpenError if set, since err could be a follow-up error on that.
            dbOpenError = err; // Record the error. It will be used to reject further promises of db operations.
            return rejection(dbOpenError, dbUncaught); // dbUncaught will make sure any error that happened in any operation before will now bubble to db.on.error() thanks to the special handling in Promise.uncaught().
        }).finally(function () {
            openComplete = true;
            resolveDbReady(); // dbReadyPromise is resolved no matter if open() rejects or resolved. It's just to wake up waiters.
        });
    };

    this.close = function () {
        var idx = connections.indexOf(db);
        if (idx >= 0) connections.splice(idx, 1);
        if (idbdb) {
            try {
                idbdb.close();
            } catch (e) {}
            idbdb = null;
        }
        autoOpen = false;
        dbOpenError = new exceptions.DatabaseClosed();
        if (isBeingOpened) cancelOpen(dbOpenError);
        // Reset dbReadyPromise promise:
        dbReadyPromise = new Promise(function (resolve) {
            dbReadyResolve = resolve;
        });
        openCanceller = new Promise(function (_, reject) {
            cancelOpen = reject;
        });
    };

    this.delete = function () {
        var hasArguments = arguments.length > 0;
        return new Promise(function (resolve, reject) {
            if (hasArguments) throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
            if (isBeingOpened) {
                dbReadyPromise.then(doDelete);
            } else {
                doDelete();
            }
            function doDelete() {
                db.close();
                var req = indexedDB.deleteDatabase(dbName);
                req.onsuccess = wrap(function () {
                    if (!hasNativeGetDatabaseNames) {
                        globalDatabaseList(function (databaseNames) {
                            var pos = databaseNames.indexOf(dbName);
                            if (pos >= 0) return databaseNames.splice(pos, 1);
                        });
                    }
                    resolve();
                });
                req.onerror = wrap(eventRejectHandler(reject));
                req.onblocked = fireOnBlocked;
            }
        }).uncaught(dbUncaught);
    };

    this.backendDB = function () {
        return idbdb;
    };

    this.isOpen = function () {
        return idbdb !== null;
    };
    this.hasFailed = function () {
        return dbOpenError !== null;
    };
    this.dynamicallyOpened = function () {
        return autoSchema;
    };

    //
    // Properties
    //
    this.name = dbName;

    // db.tables - an array of all Table instances.
    setProp(this, "tables", {
        get: function () {
            /// <returns type="Array" elementType="WriteableTable" />
            return keys(allTables).map(function (name) {
                return allTables[name];
            });
        }
    });

    //
    // Events
    //
    this.on = Events(this, "error", "populate", "blocked", "versionchange", { ready: [promisableChain, nop] });
    this.on.error.subscribe = deprecated("Dexie.on.error", this.on.error.subscribe);
    this.on.error.unsubscribe = deprecated("Dexie.on.error.unsubscribe", this.on.error.unsubscribe);

    this.on.ready.subscribe = override(this.on.ready.subscribe, function (subscribe) {
        return function (subscriber, bSticky) {
            Dexie.vip(function () {
                if (openComplete) {
                    // Database already open. Call subscriber asap.
                    if (!dbOpenError) Promise.resolve().then(subscriber);
                    // bSticky: Also subscribe to future open sucesses (after close / reopen) 
                    if (bSticky) subscribe(subscriber);
                } else {
                    // Database not yet open. Subscribe to it.
                    subscribe(subscriber);
                    // If bSticky is falsy, make sure to unsubscribe subscriber when fired once.
                    if (!bSticky) subscribe(function unsubscribe() {
                        db.on.ready.unsubscribe(subscriber);
                        db.on.ready.unsubscribe(unsubscribe);
                    });
                }
            });
        };
    });

    fakeAutoComplete(function () {
        db.on("populate").fire(db._createTransaction(READWRITE, dbStoreNames, globalSchema));
        db.on("error").fire(new Error());
    });

    this.transaction = function (mode, tableInstances, scopeFunc) {
        /// <summary>
        ///
        /// </summary>
        /// <param name="mode" type="String">"r" for readonly, or "rw" for readwrite</param>
        /// <param name="tableInstances">Table instance, Array of Table instances, String or String Array of object stores to include in the transaction</param>
        /// <param name="scopeFunc" type="Function">Function to execute with transaction</param>

        // Let table arguments be all arguments between mode and last argument.
        var i = arguments.length;
        if (i < 2) throw new exceptions.InvalidArgument("Too few arguments");
        // Prevent optimzation killer (https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments)
        // and clone arguments except the first one into local var 'args'.
        var args = new Array(i - 1);
        while (--i) {
            args[i - 1] = arguments[i];
        } // Let scopeFunc be the last argument and pop it so that args now only contain the table arguments.
        scopeFunc = args.pop();
        var tables = flatten(args); // Support using array as middle argument, or a mix of arrays and non-arrays.
        var parentTransaction = PSD.trans;
        // Check if parent transactions is bound to this db instance, and if caller wants to reuse it
        if (!parentTransaction || parentTransaction.db !== db || mode.indexOf('!') !== -1) parentTransaction = null;
        var onlyIfCompatible = mode.indexOf('?') !== -1;
        mode = mode.replace('!', '').replace('?', ''); // Ok. Will change arguments[0] as well but we wont touch arguments henceforth.

        try {
            //
            // Get storeNames from arguments. Either through given table instances, or through given table names.
            //
            var storeNames = tables.map(function (table) {
                var storeName = table instanceof Table ? table.name : table;
                if (typeof storeName !== 'string') throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                return storeName;
            });

            //
            // Resolve mode. Allow shortcuts "r" and "rw".
            //
            if (mode == "r" || mode == READONLY) mode = READONLY;else if (mode == "rw" || mode == READWRITE) mode = READWRITE;else throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);

            if (parentTransaction) {
                // Basic checks
                if (parentTransaction.mode === READONLY && mode === READWRITE) {
                    if (onlyIfCompatible) {
                        // Spawn new transaction instead.
                        parentTransaction = null;
                    } else throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                }
                if (parentTransaction) {
                    storeNames.forEach(function (storeName) {
                        if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                            if (onlyIfCompatible) {
                                // Spawn new transaction instead.
                                parentTransaction = null;
                            } else throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
                        }
                    });
                }
            }
        } catch (e) {
            return parentTransaction ? parentTransaction._promise(null, function (_, reject) {
                reject(e);
            }) : rejection(e, dbUncaught);
        }
        // If this is a sub-transaction, lock the parent and then launch the sub-transaction.
        return parentTransaction ? parentTransaction._promise(mode, enterTransactionScope, "lock") : db._whenReady(enterTransactionScope);

        function enterTransactionScope(resolve) {
            var parentPSD = PSD;
            resolve(Promise.resolve().then(function () {
                return newScope(function () {
                    // Keep a pointer to last non-transactional PSD to use if someone calls Dexie.ignoreTransaction().
                    PSD.transless = PSD.transless || parentPSD;
                    // Our transaction.
                    //return new Promise((resolve, reject) => {
                    var trans = db._createTransaction(mode, storeNames, globalSchema, parentTransaction);
                    // Let the transaction instance be part of a Promise-specific data (PSD) value.
                    PSD.trans = trans;

                    if (parentTransaction) {
                        // Emulate transaction commit awareness for inner transaction (must 'commit' when the inner transaction has no more operations ongoing)
                        trans.idbtrans = parentTransaction.idbtrans;
                    } else {
                        trans.create(); // Create the backend transaction so that complete() or error() will trigger even if no operation is made upon it.
                    }

                    // Provide arguments to the scope function (for backward compatibility)
                    var tableArgs = storeNames.map(function (name) {
                        return allTables[name];
                    });
                    tableArgs.push(trans);

                    var returnValue;
                    return Promise.follow(function () {
                        // Finally, call the scope function with our table and transaction arguments.
                        returnValue = scopeFunc.apply(trans, tableArgs); // NOTE: returnValue is used in trans.on.complete() not as a returnValue to this func.
                        if (returnValue) {
                            if (typeof returnValue.next === 'function' && typeof returnValue.throw === 'function') {
                                // scopeFunc returned an iterator with throw-support. Handle yield as await.
                                returnValue = awaitIterator(returnValue);
                            } else if (typeof returnValue.then === 'function' && !hasOwn(returnValue, '_PSD')) {
                                throw new exceptions.IncompatiblePromise("Incompatible Promise returned from transaction scope (read more at http://tinyurl.com/znyqjqc). Transaction scope: " + scopeFunc.toString());
                            }
                        }
                    }).uncaught(dbUncaught).then(function () {
                        if (parentTransaction) trans._resolve(); // sub transactions don't react to idbtrans.oncomplete. We must trigger a acompletion.
                        return trans._completion; // Even if WE believe everything is fine. Await IDBTransaction's oncomplete or onerror as well.
                    }).then(function () {
                        return returnValue;
                    }).catch(function (e) {
                        //reject(e);
                        trans._reject(e); // Yes, above then-handler were maybe not called because of an unhandled rejection in scopeFunc!
                        return rejection(e);
                    });
                    //});
                });
            }));
        }
    };

    this.table = function (tableName) {
        /// <returns type="WriteableTable"></returns>
        if (fake && autoSchema) return new WriteableTable(tableName);
        if (!hasOwn(allTables, tableName)) {
            throw new exceptions.InvalidTable('Table ' + tableName + ' does not exist');
        }
        return allTables[tableName];
    };

    //
    //
    //
    // Table Class
    //
    //
    //
    function Table(name, tableSchema, collClass) {
        /// <param name="name" type="String"></param>
        this.name = name;
        this.schema = tableSchema;
        this.hook = allTables[name] ? allTables[name].hook : Events(null, {
            "creating": [hookCreatingChain, nop],
            "reading": [pureFunctionChain, mirror],
            "updating": [hookUpdatingChain, nop],
            "deleting": [hookDeletingChain, nop]
        });
        this._collClass = collClass || Collection;
    }

    props(Table.prototype, {

        //
        // Table Protected Methods
        //

        _trans: function getTransaction(mode, fn, writeLocked) {
            var trans = PSD.trans;
            return trans && trans.db === db ? trans._promise(mode, fn, writeLocked) : tempTransaction(mode, [this.name], fn);
        },
        _idbstore: function getIDBObjectStore(mode, fn, writeLocked) {
            if (fake) return new Promise(fn); // Simplify the work for Intellisense/Code completion.
            var trans = PSD.trans,
                tableName = this.name;
            function supplyIdbStore(resolve, reject, trans) {
                fn(resolve, reject, trans.idbtrans.objectStore(tableName), trans);
            }
            return trans && trans.db === db ? trans._promise(mode, supplyIdbStore, writeLocked) : tempTransaction(mode, [this.name], supplyIdbStore);
        },

        //
        // Table Public Methods
        //
        get: function (key, cb) {
            var self = this;
            return this._idbstore(READONLY, function (resolve, reject, idbstore) {
                fake && resolve(self.schema.instanceTemplate);
                var req = idbstore.get(key);
                req.onerror = eventRejectHandler(reject);
                req.onsuccess = wrap(function () {
                    resolve(self.hook.reading.fire(req.result));
                }, reject);
            }).then(cb);
        },
        where: function (indexName) {
            return new WhereClause(this, indexName);
        },
        count: function (cb) {
            return this.toCollection().count(cb);
        },
        offset: function (offset) {
            return this.toCollection().offset(offset);
        },
        limit: function (numRows) {
            return this.toCollection().limit(numRows);
        },
        reverse: function () {
            return this.toCollection().reverse();
        },
        filter: function (filterFunction) {
            return this.toCollection().and(filterFunction);
        },
        each: function (fn) {
            return this.toCollection().each(fn);
        },
        toArray: function (cb) {
            return this.toCollection().toArray(cb);
        },
        orderBy: function (index) {
            return new this._collClass(new WhereClause(this, index));
        },

        toCollection: function () {
            return new this._collClass(new WhereClause(this));
        },

        mapToClass: function (constructor, structure) {
            /// <summary>
            ///     Map table to a javascript constructor function. Objects returned from the database will be instances of this class, making
            ///     it possible to the instanceOf operator as well as extending the class using constructor.prototype.method = function(){...}.
            /// </summary>
            /// <param name="constructor">Constructor function representing the class.</param>
            /// <param name="structure" optional="true">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
            /// know what type each member has. Example: {name: String, emailAddresses: [String], password}</param>
            this.schema.mappedClass = constructor;
            var instanceTemplate = Object.create(constructor.prototype);
            if (structure) {
                // structure and instanceTemplate is for IDE code competion only while constructor.prototype is for actual inheritance.
                applyStructure(instanceTemplate, structure);
            }
            this.schema.instanceTemplate = instanceTemplate;

            // Now, subscribe to the when("reading") event to make all objects that come out from this table inherit from given class
            // no matter which method to use for reading (Table.get() or Table.where(...)... )
            var readHook = function (obj) {
                if (!obj) return obj; // No valid object. (Value is null). Return as is.
                // Create a new object that derives from constructor:
                var res = Object.create(constructor.prototype);
                // Clone members:
                for (var m in obj) {
                    if (hasOwn(obj, m)) try {
                        res[m] = obj[m];
                    } catch (_) {}
                }return res;
            };

            if (this.schema.readHook) {
                this.hook.reading.unsubscribe(this.schema.readHook);
            }
            this.schema.readHook = readHook;
            this.hook("reading", readHook);
            return constructor;
        },
        defineClass: function (structure) {
            /// <summary>
            ///     Define all members of the class that represents the table. This will help code completion of when objects are read from the database
            ///     as well as making it possible to extend the prototype of the returned constructor function.
            /// </summary>
            /// <param name="structure">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
            /// know what type each member has. Example: {name: String, emailAddresses: [String], properties: {shoeSize: Number}}</param>
            return this.mapToClass(Dexie.defineClass(structure), structure);
        }
    });

    //
    //
    //
    // WriteableTable Class (extends Table)
    //
    //
    //
    function WriteableTable(name, tableSchema, collClass) {
        Table.call(this, name, tableSchema, collClass || WriteableCollection);
    }

    function BulkErrorHandlerCatchAll(errorList, done, supportHooks) {
        return (supportHooks ? hookedEventRejectHandler : eventRejectHandler)(function (e) {
            errorList.push(e);
            done && done();
        });
    }

    function bulkDelete(idbstore, trans, keysOrTuples, hasDeleteHook, deletingHook) {
        // If hasDeleteHook, keysOrTuples must be an array of tuples: [[key1, value2],[key2,value2],...],
        // else keysOrTuples must be just an array of keys: [key1, key2, ...].
        return new Promise(function (resolve, reject) {
            var len = keysOrTuples.length,
                lastItem = len - 1;
            if (len === 0) return resolve();
            if (!hasDeleteHook) {
                for (var i = 0; i < len; ++i) {
                    var req = idbstore.delete(keysOrTuples[i]);
                    req.onerror = wrap(eventRejectHandler(reject));
                    if (i === lastItem) req.onsuccess = wrap(function () {
                        return resolve();
                    });
                }
            } else {
                var hookCtx,
                    errorHandler = hookedEventRejectHandler(reject),
                    successHandler = hookedEventSuccessHandler(null);
                tryCatch(function () {
                    for (var i = 0; i < len; ++i) {
                        hookCtx = { onsuccess: null, onerror: null };
                        var tuple = keysOrTuples[i];
                        deletingHook.call(hookCtx, tuple[0], tuple[1], trans);
                        var req = idbstore.delete(tuple[0]);
                        req._hookCtx = hookCtx;
                        req.onerror = errorHandler;
                        if (i === lastItem) req.onsuccess = hookedEventSuccessHandler(resolve);else req.onsuccess = successHandler;
                    }
                }, function (err) {
                    hookCtx.onerror && hookCtx.onerror(err);
                    throw err;
                });
            }
        }).uncaught(dbUncaught);
    }

    derive(WriteableTable).from(Table).extend({
        bulkDelete: function (keys$$1) {
            if (this.hook.deleting.fire === nop) {
                return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
                    resolve(bulkDelete(idbstore, trans, keys$$1, false, nop));
                });
            } else {
                return this.where(':id').anyOf(keys$$1).delete().then(function () {}); // Resolve with undefined.
            }
        },
        bulkPut: function (objects, keys$$1) {
            var _this = this;

            return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                if (!idbstore.keyPath && !_this.schema.primKey.auto && !keys$$1) throw new exceptions.InvalidArgument("bulkPut() with non-inbound keys requires keys array in second argument");
                if (idbstore.keyPath && keys$$1) throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
                if (keys$$1 && keys$$1.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
                if (objects.length === 0) return resolve(); // Caller provided empty list.
                var done = function (result) {
                    if (errorList.length === 0) resolve(result);else reject(new BulkError(_this.name + '.bulkPut(): ' + errorList.length + ' of ' + numObjs + ' operations failed', errorList));
                };
                var req,
                    errorList = [],
                    errorHandler,
                    numObjs = objects.length,
                    table = _this;
                if (_this.hook.creating.fire === nop && _this.hook.updating.fire === nop) {
                    //
                    // Standard Bulk (no 'creating' or 'updating' hooks to care about)
                    //
                    errorHandler = BulkErrorHandlerCatchAll(errorList);
                    for (var i = 0, l = objects.length; i < l; ++i) {
                        req = keys$$1 ? idbstore.put(objects[i], keys$$1[i]) : idbstore.put(objects[i]);
                        req.onerror = errorHandler;
                    }
                    // Only need to catch success or error on the last operation
                    // according to the IDB spec.
                    req.onerror = BulkErrorHandlerCatchAll(errorList, done);
                    req.onsuccess = eventSuccessHandler(done);
                } else {
                    var effectiveKeys = keys$$1 || idbstore.keyPath && objects.map(function (o) {
                        return getByKeyPath(o, idbstore.keyPath);
                    });
                    // Generate map of {[key]: object}
                    var objectLookup = effectiveKeys && arrayToObject(effectiveKeys, function (key, i) {
                        return key != null && [key, objects[i]];
                    });
                    var promise = !effectiveKeys ?

                    // Auto-incremented key-less objects only without any keys argument.
                    table.bulkAdd(objects) :

                    // Keys provided. Either as inbound in provided objects, or as a keys argument.
                    // Begin with updating those that exists in DB:
                    table.where(':id').anyOf(effectiveKeys.filter(function (key) {
                        return key != null;
                    })).modify(function () {
                        this.value = objectLookup[this.primKey];
                        objectLookup[this.primKey] = null; // Mark as "don't add this"
                    }).catch(ModifyError, function (e) {
                        errorList = e.failures; // No need to concat here. These are the first errors added.
                    }).then(function () {
                        // Now, let's examine which items didnt exist so we can add them:
                        var objsToAdd = [],
                            keysToAdd = keys$$1 && [];
                        // Iterate backwards. Why? Because if same key was used twice, just add the last one.
                        for (var i = effectiveKeys.length - 1; i >= 0; --i) {
                            var key = effectiveKeys[i];
                            if (key == null || objectLookup[key]) {
                                objsToAdd.push(objects[i]);
                                keys$$1 && keysToAdd.push(key);
                                if (key != null) objectLookup[key] = null; // Mark as "dont add again"
                            }
                        }
                        // The items are in reverse order so reverse them before adding.
                        // Could be important in order to get auto-incremented keys the way the caller
                        // would expect. Could have used unshift instead of push()/reverse(),
                        // but: http://jsperf.com/unshift-vs-reverse
                        objsToAdd.reverse();
                        keys$$1 && keysToAdd.reverse();
                        return table.bulkAdd(objsToAdd, keysToAdd);
                    }).then(function (lastAddedKey) {
                        // Resolve with key of the last object in given arguments to bulkPut():
                        var lastEffectiveKey = effectiveKeys[effectiveKeys.length - 1]; // Key was provided.
                        return lastEffectiveKey != null ? lastEffectiveKey : lastAddedKey;
                    });

                    promise.then(done).catch(BulkError, function (e) {
                        // Concat failure from ModifyError and reject using our 'done' method.
                        errorList = errorList.concat(e.failures);
                        done();
                    }).catch(reject);
                }
            }, "locked"); // If called from transaction scope, lock transaction til all steps are done.
        },
        bulkAdd: function (objects, keys$$1) {
            var self = this,
                creatingHook = this.hook.creating.fire;
            return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
                if (!idbstore.keyPath && !self.schema.primKey.auto && !keys$$1) throw new exceptions.InvalidArgument("bulkAdd() with non-inbound keys requires keys array in second argument");
                if (idbstore.keyPath && keys$$1) throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
                if (keys$$1 && keys$$1.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
                if (objects.length === 0) return resolve(); // Caller provided empty list.
                function done(result) {
                    if (errorList.length === 0) resolve(result);else reject(new BulkError(self.name + '.bulkAdd(): ' + errorList.length + ' of ' + numObjs + ' operations failed', errorList));
                }
                var req,
                    errorList = [],
                    errorHandler,
                    successHandler,
                    numObjs = objects.length;
                if (creatingHook !== nop) {
                    //
                    // There are subscribers to hook('creating')
                    // Must behave as documented.
                    //
                    var keyPath = idbstore.keyPath,
                        hookCtx;
                    errorHandler = BulkErrorHandlerCatchAll(errorList, null, true);
                    successHandler = hookedEventSuccessHandler(null);

                    tryCatch(function () {
                        for (var i = 0, l = objects.length; i < l; ++i) {
                            hookCtx = { onerror: null, onsuccess: null };
                            var key = keys$$1 && keys$$1[i];
                            var obj = objects[i],
                                effectiveKey = keys$$1 ? key : keyPath ? getByKeyPath(obj, keyPath) : undefined,
                                keyToUse = creatingHook.call(hookCtx, effectiveKey, obj, trans);
                            if (effectiveKey == null && keyToUse != null) {
                                if (keyPath) {
                                    obj = deepClone(obj);
                                    setByKeyPath(obj, keyPath, keyToUse);
                                } else {
                                    key = keyToUse;
                                }
                            }
                            req = key != null ? idbstore.add(obj, key) : idbstore.add(obj);
                            req._hookCtx = hookCtx;
                            if (i < l - 1) {
                                req.onerror = errorHandler;
                                if (hookCtx.onsuccess) req.onsuccess = successHandler;
                            }
                        }
                    }, function (err) {
                        hookCtx.onerror && hookCtx.onerror(err);
                        throw err;
                    });

                    req.onerror = BulkErrorHandlerCatchAll(errorList, done, true);
                    req.onsuccess = hookedEventSuccessHandler(done);
                } else {
                    //
                    // Standard Bulk (no 'creating' hook to care about)
                    //
                    errorHandler = BulkErrorHandlerCatchAll(errorList);
                    for (var i = 0, l = objects.length; i < l; ++i) {
                        req = keys$$1 ? idbstore.add(objects[i], keys$$1[i]) : idbstore.add(objects[i]);
                        req.onerror = errorHandler;
                    }
                    // Only need to catch success or error on the last operation
                    // according to the IDB spec.
                    req.onerror = BulkErrorHandlerCatchAll(errorList, done);
                    req.onsuccess = eventSuccessHandler(done);
                }
            });
        },
        add: function (obj, key) {
            /// <summary>
            ///   Add an object to the database. In case an object with same primary key already exists, the object will not be added.
            /// </summary>
            /// <param name="obj" type="Object">A javascript object to insert</param>
            /// <param name="key" optional="true">Primary key</param>
            var creatingHook = this.hook.creating.fire;
            return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
                var hookCtx = { onsuccess: null, onerror: null };
                if (creatingHook !== nop) {
                    var effectiveKey = key != null ? key : idbstore.keyPath ? getByKeyPath(obj, idbstore.keyPath) : undefined;
                    var keyToUse = creatingHook.call(hookCtx, effectiveKey, obj, trans); // Allow subscribers to when("creating") to generate the key.
                    if (effectiveKey == null && keyToUse != null) {
                        // Using "==" and "!=" to check for either null or undefined!
                        if (idbstore.keyPath) setByKeyPath(obj, idbstore.keyPath, keyToUse);else key = keyToUse;
                    }
                }
                try {
                    var req = key != null ? idbstore.add(obj, key) : idbstore.add(obj);
                    req._hookCtx = hookCtx;
                    req.onerror = hookedEventRejectHandler(reject);
                    req.onsuccess = hookedEventSuccessHandler(function (result) {
                        // TODO: Remove these two lines in next major release (2.0?)
                        // It's no good practice to have side effects on provided parameters
                        var keyPath = idbstore.keyPath;
                        if (keyPath) setByKeyPath(obj, keyPath, result);
                        resolve(result);
                    });
                } catch (e) {
                    if (hookCtx.onerror) hookCtx.onerror(e);
                    throw e;
                }
            });
        },

        put: function (obj, key) {
            /// <summary>
            ///   Add an object to the database but in case an object with same primary key alread exists, the existing one will get updated.
            /// </summary>
            /// <param name="obj" type="Object">A javascript object to insert or update</param>
            /// <param name="key" optional="true">Primary key</param>
            var self = this,
                creatingHook = this.hook.creating.fire,
                updatingHook = this.hook.updating.fire;
            if (creatingHook !== nop || updatingHook !== nop) {
                //
                // People listens to when("creating") or when("updating") events!
                // We must know whether the put operation results in an CREATE or UPDATE.
                //
                return this._trans(READWRITE, function (resolve, reject, trans) {
                    // Since key is optional, make sure we get it from obj if not provided
                    var effectiveKey = key !== undefined ? key : self.schema.primKey.keyPath && getByKeyPath(obj, self.schema.primKey.keyPath);
                    if (effectiveKey == null) {
                        // "== null" means checking for either null or undefined.
                        // No primary key. Must use add().
                        self.add(obj).then(resolve, reject);
                    } else {
                        // Primary key exist. Lock transaction and try modifying existing. If nothing modified, call add().
                        trans._lock(); // Needed because operation is splitted into modify() and add().
                        // clone obj before this async call. If caller modifies obj the line after put(), the IDB spec requires that it should not affect operation.
                        obj = deepClone(obj);
                        self.where(":id").equals(effectiveKey).modify(function () {
                            // Replace extisting value with our object
                            // CRUD event firing handled in WriteableCollection.modify()
                            this.value = obj;
                        }).then(function (count) {
                            if (count === 0) {
                                // Object's key was not found. Add the object instead.
                                // CRUD event firing will be done in add()
                                return self.add(obj, key); // Resolving with another Promise. Returned Promise will then resolve with the new key.
                            } else {
                                return effectiveKey; // Resolve with the provided key.
                            }
                        }).finally(function () {
                            trans._unlock();
                        }).then(resolve, reject);
                    }
                });
            } else {
                // Use the standard IDB put() method.
                return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                    var req = key !== undefined ? idbstore.put(obj, key) : idbstore.put(obj);
                    req.onerror = eventRejectHandler(reject);
                    req.onsuccess = function (ev) {
                        var keyPath = idbstore.keyPath;
                        if (keyPath) setByKeyPath(obj, keyPath, ev.target.result);
                        resolve(req.result);
                    };
                });
            }
        },

        'delete': function (key) {
            /// <param name="key">Primary key of the object to delete</param>
            if (this.hook.deleting.subscribers.length) {
                // People listens to when("deleting") event. Must implement delete using WriteableCollection.delete() that will
                // call the CRUD event. Only WriteableCollection.delete() will know whether an object was actually deleted.
                return this.where(":id").equals(key).delete();
            } else {
                // No one listens. Use standard IDB delete() method.
                return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                    var req = idbstore.delete(key);
                    req.onerror = eventRejectHandler(reject);
                    req.onsuccess = function () {
                        resolve(req.result);
                    };
                });
            }
        },

        clear: function () {
            if (this.hook.deleting.subscribers.length) {
                // People listens to when("deleting") event. Must implement delete using WriteableCollection.delete() that will
                // call the CRUD event. Only WriteableCollection.delete() will knows which objects that are actually deleted.
                return this.toCollection().delete();
            } else {
                return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                    var req = idbstore.clear();
                    req.onerror = eventRejectHandler(reject);
                    req.onsuccess = function () {
                        resolve(req.result);
                    };
                });
            }
        },

        update: function (keyOrObject, modifications) {
            if (typeof modifications !== 'object' || isArray(modifications)) throw new exceptions.InvalidArgument("Modifications must be an object.");
            if (typeof keyOrObject === 'object' && !isArray(keyOrObject)) {
                // object to modify. Also modify given object with the modifications:
                keys(modifications).forEach(function (keyPath) {
                    setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
                });
                var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
                if (key === undefined) return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"), dbUncaught);
                return this.where(":id").equals(key).modify(modifications);
            } else {
                // key to modify
                return this.where(":id").equals(keyOrObject).modify(modifications);
            }
        }
    });

    //
    //
    //
    // Transaction Class
    //
    //
    //
    function Transaction(mode, storeNames, dbschema, parent) {
        var _this2 = this;

        /// <summary>
        ///    Transaction class. Represents a database transaction. All operations on db goes through a Transaction.
        /// </summary>
        /// <param name="mode" type="String">Any of "readwrite" or "readonly"</param>
        /// <param name="storeNames" type="Array">Array of table names to operate on</param>
        this.db = db;
        this.mode = mode;
        this.storeNames = storeNames;
        this.idbtrans = null;
        this.on = Events(this, "complete", "error", "abort");
        this.parent = parent || null;
        this.active = true;
        this._tables = null;
        this._reculock = 0;
        this._blockedFuncs = [];
        this._psd = null;
        this._dbschema = dbschema;
        this._resolve = null;
        this._reject = null;
        this._completion = new Promise(function (resolve, reject) {
            _this2._resolve = resolve;
            _this2._reject = reject;
        }).uncaught(dbUncaught);

        this._completion.then(function () {
            _this2.on.complete.fire();
        }, function (e) {
            _this2.on.error.fire(e);
            _this2.parent ? _this2.parent._reject(e) : _this2.active && _this2.idbtrans && _this2.idbtrans.abort();
            _this2.active = false;
            return rejection(e); // Indicate we actually DO NOT catch this error.
        });
    }

    props(Transaction.prototype, {
        //
        // Transaction Protected Methods (not required by API users, but needed internally and eventually by dexie extensions)
        //
        _lock: function () {
            assert(!PSD.global); // Locking and unlocking reuires to be within a PSD scope.
            // Temporary set all requests into a pending queue if they are called before database is ready.
            ++this._reculock; // Recursive read/write lock pattern using PSD (Promise Specific Data) instead of TLS (Thread Local Storage)
            if (this._reculock === 1 && !PSD.global) PSD.lockOwnerFor = this;
            return this;
        },
        _unlock: function () {
            assert(!PSD.global); // Locking and unlocking reuires to be within a PSD scope.
            if (--this._reculock === 0) {
                if (!PSD.global) PSD.lockOwnerFor = null;
                while (this._blockedFuncs.length > 0 && !this._locked()) {
                    var fnAndPSD = this._blockedFuncs.shift();
                    try {
                        usePSD(fnAndPSD[1], fnAndPSD[0]);
                    } catch (e) {}
                }
            }
            return this;
        },
        _locked: function () {
            // Checks if any write-lock is applied on this transaction.
            // To simplify the Dexie API for extension implementations, we support recursive locks.
            // This is accomplished by using "Promise Specific Data" (PSD).
            // PSD data is bound to a Promise and any child Promise emitted through then() or resolve( new Promise() ).
            // PSD is local to code executing on top of the call stacks of any of any code executed by Promise():
            //         * callback given to the Promise() constructor  (function (resolve, reject){...})
            //         * callbacks given to then()/catch()/finally() methods (function (value){...})
            // If creating a new independant Promise instance from within a Promise call stack, the new Promise will derive the PSD from the call stack of the parent Promise.
            // Derivation is done so that the inner PSD __proto__ points to the outer PSD.
            // PSD.lockOwnerFor will point to current transaction object if the currently executing PSD scope owns the lock.
            return this._reculock && PSD.lockOwnerFor !== this;
        },
        create: function (idbtrans) {
            var _this3 = this;

            assert(!this.idbtrans);
            if (!idbtrans && !idbdb) {
                switch (dbOpenError && dbOpenError.name) {
                    case "DatabaseClosedError":
                        // Errors where it is no difference whether it was caused by the user operation or an earlier call to db.open()
                        throw new exceptions.DatabaseClosed(dbOpenError);
                    case "MissingAPIError":
                        // Errors where it is no difference whether it was caused by the user operation or an earlier call to db.open()
                        throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
                    default:
                        // Make it clear that the user operation was not what caused the error - the error had occurred earlier on db.open()!
                        throw new exceptions.OpenFailed(dbOpenError);
                }
            }
            if (!this.active) throw new exceptions.TransactionInactive();
            assert(this._completion._state === null);

            idbtrans = this.idbtrans = idbtrans || idbdb.transaction(safariMultiStoreFix(this.storeNames), this.mode);
            idbtrans.onerror = wrap(function (ev) {
                preventDefault(ev); // Prohibit default bubbling to window.error
                _this3._reject(idbtrans.error);
            });
            idbtrans.onabort = wrap(function (ev) {
                preventDefault(ev);
                _this3.active && _this3._reject(new exceptions.Abort());
                _this3.active = false;
                _this3.on("abort").fire(ev);
            });
            idbtrans.oncomplete = wrap(function () {
                _this3.active = false;
                _this3._resolve();
            });
            return this;
        },
        _promise: function (mode, fn, bWriteLock) {
            var self = this;
            var p = self._locked() ?
            // Read lock always. Transaction is write-locked. Wait for mutex.
            new Promise(function (resolve, reject) {
                self._blockedFuncs.push([function () {
                    self._promise(mode, fn, bWriteLock).then(resolve, reject);
                }, PSD]);
            }) : newScope(function () {
                var p_ = self.active ? new Promise(function (resolve, reject) {
                    if (mode === READWRITE && self.mode !== READWRITE) throw new exceptions.ReadOnly("Transaction is readonly");
                    if (!self.idbtrans && mode) self.create();
                    if (bWriteLock) self._lock(); // Write lock if write operation is requested
                    fn(resolve, reject, self);
                }) : rejection(new exceptions.TransactionInactive());
                if (self.active && bWriteLock) p_.finally(function () {
                    self._unlock();
                });
                return p_;
            });

            p._lib = true;
            return p.uncaught(dbUncaught);
        },

        //
        // Transaction Public Properties and Methods
        //
        abort: function () {
            this.active && this._reject(new exceptions.Abort());
            this.active = false;
        },

        tables: {
            get: deprecated("Transaction.tables", function () {
                return arrayToObject(this.storeNames, function (name) {
                    return [name, allTables[name]];
                });
            }, "Use db.tables()")
        },

        complete: deprecated("Transaction.complete()", function (cb) {
            return this.on("complete", cb);
        }),

        error: deprecated("Transaction.error()", function (cb) {
            return this.on("error", cb);
        }),

        table: deprecated("Transaction.table()", function (name) {
            if (this.storeNames.indexOf(name) === -1) throw new exceptions.InvalidTable("Table " + name + " not in transaction");
            return allTables[name];
        })

    });

    //
    //
    //
    // WhereClause
    //
    //
    //
    function WhereClause(table, index, orCollection) {
        /// <param name="table" type="Table"></param>
        /// <param name="index" type="String" optional="true"></param>
        /// <param name="orCollection" type="Collection" optional="true"></param>
        this._ctx = {
            table: table,
            index: index === ":id" ? null : index,
            collClass: table._collClass,
            or: orCollection
        };
    }

    props(WhereClause.prototype, function () {

        // WhereClause private methods

        function fail(collectionOrWhereClause, err, T) {
            var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause._ctx.collClass(collectionOrWhereClause) : collectionOrWhereClause;

            collection._ctx.error = T ? new T(err) : new TypeError(err);
            return collection;
        }

        function emptyCollection(whereClause) {
            return new whereClause._ctx.collClass(whereClause, function () {
                return IDBKeyRange.only("");
            }).limit(0);
        }

        function upperFactory(dir) {
            return dir === "next" ? function (s) {
                return s.toUpperCase();
            } : function (s) {
                return s.toLowerCase();
            };
        }
        function lowerFactory(dir) {
            return dir === "next" ? function (s) {
                return s.toLowerCase();
            } : function (s) {
                return s.toUpperCase();
            };
        }
        function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
            var length = Math.min(key.length, lowerNeedle.length);
            var llp = -1;
            for (var i = 0; i < length; ++i) {
                var lwrKeyChar = lowerKey[i];
                if (lwrKeyChar !== lowerNeedle[i]) {
                    if (cmp(key[i], upperNeedle[i]) < 0) return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
                    if (cmp(key[i], lowerNeedle[i]) < 0) return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
                    if (llp >= 0) return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
                    return null;
                }
                if (cmp(key[i], lwrKeyChar) < 0) llp = i;
            }
            if (length < lowerNeedle.length && dir === "next") return key + upperNeedle.substr(key.length);
            if (length < key.length && dir === "prev") return key.substr(0, upperNeedle.length);
            return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
        }

        function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
            /// <param name="needles" type="Array" elementType="String"></param>
            var upper,
                lower,
                compare,
                upperNeedles,
                lowerNeedles,
                direction,
                nextKeySuffix,
                needlesLen = needles.length;
            if (!needles.every(function (s) {
                return typeof s === 'string';
            })) {
                return fail(whereClause, STRING_EXPECTED);
            }
            function initDirection(dir) {
                upper = upperFactory(dir);
                lower = lowerFactory(dir);
                compare = dir === "next" ? simpleCompare : simpleCompareReverse;
                var needleBounds = needles.map(function (needle) {
                    return { lower: lower(needle), upper: upper(needle) };
                }).sort(function (a, b) {
                    return compare(a.lower, b.lower);
                });
                upperNeedles = needleBounds.map(function (nb) {
                    return nb.upper;
                });
                lowerNeedles = needleBounds.map(function (nb) {
                    return nb.lower;
                });
                direction = dir;
                nextKeySuffix = dir === "next" ? "" : suffix;
            }
            initDirection("next");

            var c = new whereClause._ctx.collClass(whereClause, function () {
                return IDBKeyRange.bound(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
            });

            c._ondirectionchange = function (direction) {
                // This event onlys occur before filter is called the first time.
                initDirection(direction);
            };

            var firstPossibleNeedle = 0;

            c._addAlgorithm(function (cursor, advance, resolve) {
                /// <param name="cursor" type="IDBCursor"></param>
                /// <param name="advance" type="Function"></param>
                /// <param name="resolve" type="Function"></param>
                var key = cursor.key;
                if (typeof key !== 'string') return false;
                var lowerKey = lower(key);
                if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
                    return true;
                } else {
                    var lowestPossibleCasing = null;
                    for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
                        var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
                        if (casing === null && lowestPossibleCasing === null) firstPossibleNeedle = i + 1;else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
                            lowestPossibleCasing = casing;
                        }
                    }
                    if (lowestPossibleCasing !== null) {
                        advance(function () {
                            cursor.continue(lowestPossibleCasing + nextKeySuffix);
                        });
                    } else {
                        advance(resolve);
                    }
                    return false;
                }
            });
            return c;
        }

        //
        // WhereClause public methods
        //
        return {
            between: function (lower, upper, includeLower, includeUpper) {
                /// <summary>
                ///     Filter out records whose where-field lays between given lower and upper values. Applies to Strings, Numbers and Dates.
                /// </summary>
                /// <param name="lower"></param>
                /// <param name="upper"></param>
                /// <param name="includeLower" optional="true">Whether items that equals lower should be included. Default true.</param>
                /// <param name="includeUpper" optional="true">Whether items that equals upper should be included. Default false.</param>
                /// <returns type="Collection"></returns>
                includeLower = includeLower !== false; // Default to true
                includeUpper = includeUpper === true; // Default to false
                try {
                    if (cmp(lower, upper) > 0 || cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)) return emptyCollection(this); // Workaround for idiotic W3C Specification that DataError must be thrown if lower > upper. The natural result would be to return an empty collection.
                    return new this._ctx.collClass(this, function () {
                        return IDBKeyRange.bound(lower, upper, !includeLower, !includeUpper);
                    });
                } catch (e) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }
            },
            equals: function (value) {
                return new this._ctx.collClass(this, function () {
                    return IDBKeyRange.only(value);
                });
            },
            above: function (value) {
                return new this._ctx.collClass(this, function () {
                    return IDBKeyRange.lowerBound(value, true);
                });
            },
            aboveOrEqual: function (value) {
                return new this._ctx.collClass(this, function () {
                    return IDBKeyRange.lowerBound(value);
                });
            },
            below: function (value) {
                return new this._ctx.collClass(this, function () {
                    return IDBKeyRange.upperBound(value, true);
                });
            },
            belowOrEqual: function (value) {
                return new this._ctx.collClass(this, function () {
                    return IDBKeyRange.upperBound(value);
                });
            },
            startsWith: function (str) {
                /// <param name="str" type="String"></param>
                if (typeof str !== 'string') return fail(this, STRING_EXPECTED);
                return this.between(str, str + maxString, true, true);
            },
            startsWithIgnoreCase: function (str) {
                /// <param name="str" type="String"></param>
                if (str === "") return this.startsWith(str);
                return addIgnoreCaseAlgorithm(this, function (x, a) {
                    return x.indexOf(a[0]) === 0;
                }, [str], maxString);
            },
            equalsIgnoreCase: function (str) {
                /// <param name="str" type="String"></param>
                return addIgnoreCaseAlgorithm(this, function (x, a) {
                    return x === a[0];
                }, [str], "");
            },
            anyOfIgnoreCase: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                if (set.length === 0) return emptyCollection(this);
                return addIgnoreCaseAlgorithm(this, function (x, a) {
                    return a.indexOf(x) !== -1;
                }, set, "");
            },
            startsWithAnyOfIgnoreCase: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                if (set.length === 0) return emptyCollection(this);
                return addIgnoreCaseAlgorithm(this, function (x, a) {
                    return a.some(function (n) {
                        return x.indexOf(n) === 0;
                    });
                }, set, maxString);
            },
            anyOf: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                var compare = ascending;
                try {
                    set.sort(compare);
                } catch (e) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }
                if (set.length === 0) return emptyCollection(this);
                var c = new this._ctx.collClass(this, function () {
                    return IDBKeyRange.bound(set[0], set[set.length - 1]);
                });

                c._ondirectionchange = function (direction) {
                    compare = direction === "next" ? ascending : descending;
                    set.sort(compare);
                };
                var i = 0;
                c._addAlgorithm(function (cursor, advance, resolve) {
                    var key = cursor.key;
                    while (compare(key, set[i]) > 0) {
                        // The cursor has passed beyond this key. Check next.
                        ++i;
                        if (i === set.length) {
                            // There is no next. Stop searching.
                            advance(resolve);
                            return false;
                        }
                    }
                    if (compare(key, set[i]) === 0) {
                        // The current cursor value should be included and we should continue a single step in case next item has the same key or possibly our next key in set.
                        return true;
                    } else {
                        // cursor.key not yet at set[i]. Forward cursor to the next key to hunt for.
                        advance(function () {
                            cursor.continue(set[i]);
                        });
                        return false;
                    }
                });
                return c;
            },

            notEqual: function (value) {
                return this.inAnyRange([[-Infinity, value], [value, maxKey]], { includeLowers: false, includeUppers: false });
            },

            noneOf: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                if (set.length === 0) return new this._ctx.collClass(this); // Return entire collection.
                try {
                    set.sort(ascending);
                } catch (e) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }
                // Transform ["a","b","c"] to a set of ranges for between/above/below: [[-Infinity,"a"], ["a","b"], ["b","c"], ["c",maxKey]]
                var ranges = set.reduce(function (res, val) {
                    return res ? res.concat([[res[res.length - 1][1], val]]) : [[-Infinity, val]];
                }, null);
                ranges.push([set[set.length - 1], maxKey]);
                return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
            },

            /** Filter out values withing given set of ranges.
            * Example, give children and elders a rebate of 50%:
            *
            *   db.friends.where('age').inAnyRange([[0,18],[65,Infinity]]).modify({Rebate: 1/2});
            *
            * @param {(string|number|Date|Array)[][]} ranges
            * @param {{includeLowers: boolean, includeUppers: boolean}} options
            */
            inAnyRange: function (ranges, options) {
                var ctx = this._ctx;
                if (ranges.length === 0) return emptyCollection(this);
                if (!ranges.every(function (range) {
                    return range[0] !== undefined && range[1] !== undefined && ascending(range[0], range[1]) <= 0;
                })) {
                    return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
                }
                var includeLowers = !options || options.includeLowers !== false; // Default to true
                var includeUppers = options && options.includeUppers === true; // Default to false

                function addRange(ranges, newRange) {
                    for (var i = 0, l = ranges.length; i < l; ++i) {
                        var range = ranges[i];
                        if (cmp(newRange[0], range[1]) < 0 && cmp(newRange[1], range[0]) > 0) {
                            range[0] = min(range[0], newRange[0]);
                            range[1] = max(range[1], newRange[1]);
                            break;
                        }
                    }
                    if (i === l) ranges.push(newRange);
                    return ranges;
                }

                var sortDirection = ascending;
                function rangeSorter(a, b) {
                    return sortDirection(a[0], b[0]);
                }

                // Join overlapping ranges
                var set;
                try {
                    set = ranges.reduce(addRange, []);
                    set.sort(rangeSorter);
                } catch (ex) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }

                var i = 0;
                var keyIsBeyondCurrentEntry = includeUppers ? function (key) {
                    return ascending(key, set[i][1]) > 0;
                } : function (key) {
                    return ascending(key, set[i][1]) >= 0;
                };

                var keyIsBeforeCurrentEntry = includeLowers ? function (key) {
                    return descending(key, set[i][0]) > 0;
                } : function (key) {
                    return descending(key, set[i][0]) >= 0;
                };

                function keyWithinCurrentRange(key) {
                    return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
                }

                var checkKey = keyIsBeyondCurrentEntry;

                var c = new ctx.collClass(this, function () {
                    return IDBKeyRange.bound(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers);
                });

                c._ondirectionchange = function (direction) {
                    if (direction === "next") {
                        checkKey = keyIsBeyondCurrentEntry;
                        sortDirection = ascending;
                    } else {
                        checkKey = keyIsBeforeCurrentEntry;
                        sortDirection = descending;
                    }
                    set.sort(rangeSorter);
                };

                c._addAlgorithm(function (cursor, advance, resolve) {
                    var key = cursor.key;
                    while (checkKey(key)) {
                        // The cursor has passed beyond this key. Check next.
                        ++i;
                        if (i === set.length) {
                            // There is no next. Stop searching.
                            advance(resolve);
                            return false;
                        }
                    }
                    if (keyWithinCurrentRange(key)) {
                        // The current cursor value should be included and we should continue a single step in case next item has the same key or possibly our next key in set.
                        return true;
                    } else if (cmp(key, set[i][1]) === 0 || cmp(key, set[i][0]) === 0) {
                        // includeUpper or includeLower is false so keyWithinCurrentRange() returns false even though we are at range border.
                        // Continue to next key but don't include this one.
                        return false;
                    } else {
                        // cursor.key not yet at set[i]. Forward cursor to the next key to hunt for.
                        advance(function () {
                            if (sortDirection === ascending) cursor.continue(set[i][0]);else cursor.continue(set[i][1]);
                        });
                        return false;
                    }
                });
                return c;
            },
            startsWithAnyOf: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);

                if (!set.every(function (s) {
                    return typeof s === 'string';
                })) {
                    return fail(this, "startsWithAnyOf() only works with strings");
                }
                if (set.length === 0) return emptyCollection(this);

                return this.inAnyRange(set.map(function (str) {
                    return [str, str + maxString];
                }));
            }
        };
    });

    //
    //
    //
    // Collection Class
    //
    //
    //
    function Collection(whereClause, keyRangeGenerator) {
        /// <summary>
        ///
        /// </summary>
        /// <param name="whereClause" type="WhereClause">Where clause instance</param>
        /// <param name="keyRangeGenerator" value="function(){ return IDBKeyRange.bound(0,1);}" optional="true"></param>
        var keyRange = null,
            error = null;
        if (keyRangeGenerator) try {
            keyRange = keyRangeGenerator();
        } catch (ex) {
            error = ex;
        }

        var whereCtx = whereClause._ctx,
            table = whereCtx.table;
        this._ctx = {
            table: table,
            index: whereCtx.index,
            isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
            range: keyRange,
            keysOnly: false,
            dir: "next",
            unique: "",
            algorithm: null,
            filter: null,
            replayFilter: null,
            justLimit: true, // True if a replayFilter is just a filter that performs a "limit" operation (or none at all)
            isMatch: null,
            offset: 0,
            limit: Infinity,
            error: error, // If set, any promise must be rejected with this error
            or: whereCtx.or,
            valueMapper: table.hook.reading.fire
        };
    }

    function isPlainKeyRange(ctx, ignoreLimitFilter) {
        return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
    }

    props(Collection.prototype, function () {

        //
        // Collection Private Functions
        //

        function addFilter(ctx, fn) {
            ctx.filter = combine(ctx.filter, fn);
        }

        function addReplayFilter(ctx, factory, isLimitFilter) {
            var curr = ctx.replayFilter;
            ctx.replayFilter = curr ? function () {
                return combine(curr(), factory());
            } : factory;
            ctx.justLimit = isLimitFilter && !curr;
        }

        function addMatchFilter(ctx, fn) {
            ctx.isMatch = combine(ctx.isMatch, fn);
        }

        /** @param ctx {
         *      isPrimKey: boolean,
         *      table: Table,
         *      index: string
         * }
         * @param store IDBObjectStore
         **/
        function getIndexOrStore(ctx, store) {
            if (ctx.isPrimKey) return store;
            var indexSpec = ctx.table.schema.idxByName[ctx.index];
            if (!indexSpec) throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + store.name + " is not indexed");
            return store.index(indexSpec.name);
        }

        /** @param ctx {
         *      isPrimKey: boolean,
         *      table: Table,
         *      index: string,
         *      keysOnly: boolean,
         *      range?: IDBKeyRange,
         *      dir: "next" | "prev"
         * }
         */
        function openCursor(ctx, store) {
            var idxOrStore = getIndexOrStore(ctx, store);
            return ctx.keysOnly && 'openKeyCursor' in idxOrStore ? idxOrStore.openKeyCursor(ctx.range || null, ctx.dir + ctx.unique) : idxOrStore.openCursor(ctx.range || null, ctx.dir + ctx.unique);
        }

        function iter(ctx, fn, resolve, reject, idbstore) {
            var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
            if (!ctx.or) {
                iterate(openCursor(ctx, idbstore), combine(ctx.algorithm, filter), fn, resolve, reject, !ctx.keysOnly && ctx.valueMapper);
            } else (function () {
                var set = {};
                var resolved = 0;

                function resolveboth() {
                    if (++resolved === 2) resolve(); // Seems like we just support or btwn max 2 expressions, but there are no limit because we do recursion.
                }

                function union(item, cursor, advance) {
                    if (!filter || filter(cursor, advance, resolveboth, reject)) {
                        var key = cursor.primaryKey.toString(); // Converts any Date to String, String to String, Number to String and Array to comma-separated string
                        if (!hasOwn(set, key)) {
                            set[key] = true;
                            fn(item, cursor, advance);
                        }
                    }
                }

                ctx.or._iterate(union, resolveboth, reject, idbstore);
                iterate(openCursor(ctx, idbstore), ctx.algorithm, union, resolveboth, reject, !ctx.keysOnly && ctx.valueMapper);
            })();
        }
        function getInstanceTemplate(ctx) {
            return ctx.table.schema.instanceTemplate;
        }

        return {

            //
            // Collection Protected Functions
            //

            _read: function (fn, cb) {
                var ctx = this._ctx;
                if (ctx.error) return ctx.table._trans(null, function rejector(resolve, reject) {
                    reject(ctx.error);
                });else return ctx.table._idbstore(READONLY, fn).then(cb);
            },
            _write: function (fn) {
                var ctx = this._ctx;
                if (ctx.error) return ctx.table._trans(null, function rejector(resolve, reject) {
                    reject(ctx.error);
                });else return ctx.table._idbstore(READWRITE, fn, "locked"); // When doing write operations on collections, always lock the operation so that upcoming operations gets queued.
            },
            _addAlgorithm: function (fn) {
                var ctx = this._ctx;
                ctx.algorithm = combine(ctx.algorithm, fn);
            },

            _iterate: function (fn, resolve, reject, idbstore) {
                return iter(this._ctx, fn, resolve, reject, idbstore);
            },

            clone: function (props$$1) {
                var rv = Object.create(this.constructor.prototype),
                    ctx = Object.create(this._ctx);
                if (props$$1) extend(ctx, props$$1);
                rv._ctx = ctx;
                return rv;
            },

            raw: function () {
                this._ctx.valueMapper = null;
                return this;
            },

            //
            // Collection Public methods
            //

            each: function (fn) {
                var ctx = this._ctx;

                if (fake) {
                    var item = getInstanceTemplate(ctx),
                        primKeyPath = ctx.table.schema.primKey.keyPath,
                        key = getByKeyPath(item, ctx.index ? ctx.table.schema.idxByName[ctx.index].keyPath : primKeyPath),
                        primaryKey = getByKeyPath(item, primKeyPath);
                    fn(item, { key: key, primaryKey: primaryKey });
                }

                return this._read(function (resolve, reject, idbstore) {
                    iter(ctx, fn, resolve, reject, idbstore);
                });
            },

            count: function (cb) {
                if (fake) return Promise.resolve(0).then(cb);
                var ctx = this._ctx;

                if (isPlainKeyRange(ctx, true)) {
                    // This is a plain key range. We can use the count() method if the index.
                    return this._read(function (resolve, reject, idbstore) {
                        var idx = getIndexOrStore(ctx, idbstore);
                        var req = ctx.range ? idx.count(ctx.range) : idx.count();
                        req.onerror = eventRejectHandler(reject);
                        req.onsuccess = function (e) {
                            resolve(Math.min(e.target.result, ctx.limit));
                        };
                    }, cb);
                } else {
                    // Algorithms, filters or expressions are applied. Need to count manually.
                    var count = 0;
                    return this._read(function (resolve, reject, idbstore) {
                        iter(ctx, function () {
                            ++count;return false;
                        }, function () {
                            resolve(count);
                        }, reject, idbstore);
                    }, cb);
                }
            },

            sortBy: function (keyPath, cb) {
                /// <param name="keyPath" type="String"></param>
                var parts = keyPath.split('.').reverse(),
                    lastPart = parts[0],
                    lastIndex = parts.length - 1;
                function getval(obj, i) {
                    if (i) return getval(obj[parts[i]], i - 1);
                    return obj[lastPart];
                }
                var order = this._ctx.dir === "next" ? 1 : -1;

                function sorter(a, b) {
                    var aVal = getval(a, lastIndex),
                        bVal = getval(b, lastIndex);
                    return aVal < bVal ? -order : aVal > bVal ? order : 0;
                }
                return this.toArray(function (a) {
                    return a.sort(sorter);
                }).then(cb);
            },

            toArray: function (cb) {
                var ctx = this._ctx;
                return this._read(function (resolve, reject, idbstore) {
                    fake && resolve([getInstanceTemplate(ctx)]);
                    if (hasGetAll && ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                        // Special optimation if we could use IDBObjectStore.getAll() or
                        // IDBKeyRange.getAll():
                        var readingHook = ctx.table.hook.reading.fire;
                        var idxOrStore = getIndexOrStore(ctx, idbstore);
                        var req = ctx.limit < Infinity ? idxOrStore.getAll(ctx.range, ctx.limit) : idxOrStore.getAll(ctx.range);
                        req.onerror = eventRejectHandler(reject);
                        req.onsuccess = readingHook === mirror ? eventSuccessHandler(resolve) : wrap(eventSuccessHandler(function (res) {
                            try {
                                resolve(res.map(readingHook));
                            } catch (e) {
                                reject(e);
                            }
                        }));
                    } else {
                        // Getting array through a cursor.
                        var a = [];
                        iter(ctx, function (item) {
                            a.push(item);
                        }, function arrayComplete() {
                            resolve(a);
                        }, reject, idbstore);
                    }
                }, cb);
            },

            offset: function (offset) {
                var ctx = this._ctx;
                if (offset <= 0) return this;
                ctx.offset += offset; // For count()
                if (isPlainKeyRange(ctx)) {
                    addReplayFilter(ctx, function () {
                        var offsetLeft = offset;
                        return function (cursor, advance) {
                            if (offsetLeft === 0) return true;
                            if (offsetLeft === 1) {
                                --offsetLeft;return false;
                            }
                            advance(function () {
                                cursor.advance(offsetLeft);
                                offsetLeft = 0;
                            });
                            return false;
                        };
                    });
                } else {
                    addReplayFilter(ctx, function () {
                        var offsetLeft = offset;
                        return function () {
                            return --offsetLeft < 0;
                        };
                    });
                }
                return this;
            },

            limit: function (numRows) {
                this._ctx.limit = Math.min(this._ctx.limit, numRows); // For count()
                addReplayFilter(this._ctx, function () {
                    var rowsLeft = numRows;
                    return function (cursor, advance, resolve) {
                        if (--rowsLeft <= 0) advance(resolve); // Stop after this item has been included
                        return rowsLeft >= 0; // If numRows is already below 0, return false because then 0 was passed to numRows initially. Otherwise we wouldnt come here.
                    };
                }, true);
                return this;
            },

            until: function (filterFunction, bIncludeStopEntry) {
                var ctx = this._ctx;
                fake && filterFunction(getInstanceTemplate(ctx));
                addFilter(this._ctx, function (cursor, advance, resolve) {
                    if (filterFunction(cursor.value)) {
                        advance(resolve);
                        return bIncludeStopEntry;
                    } else {
                        return true;
                    }
                });
                return this;
            },

            first: function (cb) {
                return this.limit(1).toArray(function (a) {
                    return a[0];
                }).then(cb);
            },

            last: function (cb) {
                return this.reverse().first(cb);
            },

            filter: function (filterFunction) {
                /// <param name="jsFunctionFilter" type="Function">function(val){return true/false}</param>
                fake && filterFunction(getInstanceTemplate(this._ctx));
                addFilter(this._ctx, function (cursor) {
                    return filterFunction(cursor.value);
                });
                // match filters not used in Dexie.js but can be used by 3rd part libraries to test a
                // collection for a match without querying DB. Used by Dexie.Observable.
                addMatchFilter(this._ctx, filterFunction);
                return this;
            },

            and: function (filterFunction) {
                return this.filter(filterFunction);
            },

            or: function (indexName) {
                return new WhereClause(this._ctx.table, indexName, this);
            },

            reverse: function () {
                this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
                if (this._ondirectionchange) this._ondirectionchange(this._ctx.dir);
                return this;
            },

            desc: function () {
                return this.reverse();
            },

            eachKey: function (cb) {
                var ctx = this._ctx;
                ctx.keysOnly = !ctx.isMatch;
                return this.each(function (val, cursor) {
                    cb(cursor.key, cursor);
                });
            },

            eachUniqueKey: function (cb) {
                this._ctx.unique = "unique";
                return this.eachKey(cb);
            },

            eachPrimaryKey: function (cb) {
                var ctx = this._ctx;
                ctx.keysOnly = !ctx.isMatch;
                return this.each(function (val, cursor) {
                    cb(cursor.primaryKey, cursor);
                });
            },

            keys: function (cb) {
                var ctx = this._ctx;
                ctx.keysOnly = !ctx.isMatch;
                var a = [];
                return this.each(function (item, cursor) {
                    a.push(cursor.key);
                }).then(function () {
                    return a;
                }).then(cb);
            },

            primaryKeys: function (cb) {
                var ctx = this._ctx;
                if (hasGetAll && ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                    // Special optimation if we could use IDBObjectStore.getAllKeys() or
                    // IDBKeyRange.getAllKeys():
                    return this._read(function (resolve, reject, idbstore) {
                        var idxOrStore = getIndexOrStore(ctx, idbstore);
                        var req = ctx.limit < Infinity ? idxOrStore.getAllKeys(ctx.range, ctx.limit) : idxOrStore.getAllKeys(ctx.range);
                        req.onerror = eventRejectHandler(reject);
                        req.onsuccess = eventSuccessHandler(resolve);
                    }).then(cb);
                }
                ctx.keysOnly = !ctx.isMatch;
                var a = [];
                return this.each(function (item, cursor) {
                    a.push(cursor.primaryKey);
                }).then(function () {
                    return a;
                }).then(cb);
            },

            uniqueKeys: function (cb) {
                this._ctx.unique = "unique";
                return this.keys(cb);
            },

            firstKey: function (cb) {
                return this.limit(1).keys(function (a) {
                    return a[0];
                }).then(cb);
            },

            lastKey: function (cb) {
                return this.reverse().firstKey(cb);
            },

            distinct: function () {
                var ctx = this._ctx,
                    idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
                if (!idx || !idx.multi) return this; // distinct() only makes differencies on multiEntry indexes.
                var set = {};
                addFilter(this._ctx, function (cursor) {
                    var strKey = cursor.primaryKey.toString(); // Converts any Date to String, String to String, Number to String and Array to comma-separated string
                    var found = hasOwn(set, strKey);
                    set[strKey] = true;
                    return !found;
                });
                return this;
            }
        };
    });

    //
    //
    // WriteableCollection Class
    //
    //
    function WriteableCollection() {
        Collection.apply(this, arguments);
    }

    derive(WriteableCollection).from(Collection).extend({

        //
        // WriteableCollection Public Methods
        //

        modify: function (changes) {
            var self = this,
                ctx = this._ctx,
                hook = ctx.table.hook,
                updatingHook = hook.updating.fire,
                deletingHook = hook.deleting.fire;

            fake && typeof changes === 'function' && changes.call({ value: ctx.table.schema.instanceTemplate }, ctx.table.schema.instanceTemplate);

            return this._write(function (resolve, reject, idbstore, trans) {
                var modifyer;
                if (typeof changes === 'function') {
                    // Changes is a function that may update, add or delete propterties or even require a deletion the object itself (delete this.item)
                    if (updatingHook === nop && deletingHook === nop) {
                        // Noone cares about what is being changed. Just let the modifier function be the given argument as is.
                        modifyer = changes;
                    } else {
                        // People want to know exactly what is being modified or deleted.
                        // Let modifyer be a proxy function that finds out what changes the caller is actually doing
                        // and call the hooks accordingly!
                        modifyer = function (item) {
                            var origItem = deepClone(item); // Clone the item first so we can compare laters.
                            if (changes.call(this, item, this) === false) return false; // Call the real modifyer function (If it returns false explicitely, it means it dont want to modify anyting on this object)
                            if (!hasOwn(this, "value")) {
                                // The real modifyer function requests a deletion of the object. Inform the deletingHook that a deletion is taking place.
                                deletingHook.call(this, this.primKey, item, trans);
                            } else {
                                // No deletion. Check what was changed
                                var objectDiff = getObjectDiff(origItem, this.value);
                                var additionalChanges = updatingHook.call(this, objectDiff, this.primKey, origItem, trans);
                                if (additionalChanges) {
                                    // Hook want to apply additional modifications. Make sure to fullfill the will of the hook.
                                    item = this.value;
                                    keys(additionalChanges).forEach(function (keyPath) {
                                        setByKeyPath(item, keyPath, additionalChanges[keyPath]); // Adding {keyPath: undefined} means that the keyPath should be deleted. Handled by setByKeyPath
                                    });
                                }
                            }
                        };
                    }
                } else if (updatingHook === nop) {
                    // changes is a set of {keyPath: value} and no one is listening to the updating hook.
                    var keyPaths = keys(changes);
                    var numKeys = keyPaths.length;
                    modifyer = function (item) {
                        var anythingModified = false;
                        for (var i = 0; i < numKeys; ++i) {
                            var keyPath = keyPaths[i],
                                val = changes[keyPath];
                            if (getByKeyPath(item, keyPath) !== val) {
                                setByKeyPath(item, keyPath, val); // Adding {keyPath: undefined} means that the keyPath should be deleted. Handled by setByKeyPath
                                anythingModified = true;
                            }
                        }
                        return anythingModified;
                    };
                } else {
                    // changes is a set of {keyPath: value} and people are listening to the updating hook so we need to call it and
                    // allow it to add additional modifications to make.
                    var origChanges = changes;
                    changes = shallowClone(origChanges); // Let's work with a clone of the changes keyPath/value set so that we can restore it in case a hook extends it.
                    modifyer = function (item) {
                        var anythingModified = false;
                        var additionalChanges = updatingHook.call(this, changes, this.primKey, deepClone(item), trans);
                        if (additionalChanges) extend(changes, additionalChanges);
                        keys(changes).forEach(function (keyPath) {
                            var val = changes[keyPath];
                            if (getByKeyPath(item, keyPath) !== val) {
                                setByKeyPath(item, keyPath, val);
                                anythingModified = true;
                            }
                        });
                        if (additionalChanges) changes = shallowClone(origChanges); // Restore original changes for next iteration
                        return anythingModified;
                    };
                }

                var count = 0;
                var successCount = 0;
                var iterationComplete = false;
                var failures = [];
                var failKeys = [];
                var currentKey = null;

                function modifyItem(item, cursor) {
                    currentKey = cursor.primaryKey;
                    var thisContext = {
                        primKey: cursor.primaryKey,
                        value: item,
                        onsuccess: null,
                        onerror: null
                    };

                    function onerror(e) {
                        failures.push(e);
                        failKeys.push(thisContext.primKey);
                        checkFinished();
                        return true; // Catch these errors and let a final rejection decide whether or not to abort entire transaction
                    }

                    if (modifyer.call(thisContext, item, thisContext) !== false) {
                        // If a callback explicitely returns false, do not perform the update!
                        var bDelete = !hasOwn(thisContext, "value");
                        ++count;
                        tryCatch(function () {
                            var req = bDelete ? cursor.delete() : cursor.update(thisContext.value);
                            req._hookCtx = thisContext;
                            req.onerror = hookedEventRejectHandler(onerror);
                            req.onsuccess = hookedEventSuccessHandler(function () {
                                ++successCount;
                                checkFinished();
                            });
                        }, onerror);
                    } else if (thisContext.onsuccess) {
                        // Hook will expect either onerror or onsuccess to always be called!
                        thisContext.onsuccess(thisContext.value);
                    }
                }

                function doReject(e) {
                    if (e) {
                        failures.push(e);
                        failKeys.push(currentKey);
                    }
                    return reject(new ModifyError("Error modifying one or more objects", failures, successCount, failKeys));
                }

                function checkFinished() {
                    if (iterationComplete && successCount + failures.length === count) {
                        if (failures.length > 0) doReject();else resolve(successCount);
                    }
                }
                self.clone().raw()._iterate(modifyItem, function () {
                    iterationComplete = true;
                    checkFinished();
                }, doReject, idbstore);
            });
        },

        'delete': function () {
            var _this4 = this;

            var ctx = this._ctx,
                range = ctx.range,
                deletingHook = ctx.table.hook.deleting.fire,
                hasDeleteHook = deletingHook !== nop;
            if (!hasDeleteHook && isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || !range)) // if no range, we'll use clear().
                {
                    // May use IDBObjectStore.delete(IDBKeyRange) in this case (Issue #208)
                    // For chromium, this is the way most optimized version.
                    // For IE/Edge, this could hang the indexedDB engine and make operating system instable
                    // (https://gist.github.com/dfahlander/5a39328f029de18222cf2125d56c38f7)
                    return this._write(function (resolve, reject, idbstore) {
                        // Our API contract is to return a count of deleted items, so we have to count() before delete().
                        var onerror = eventRejectHandler(reject),
                            countReq = range ? idbstore.count(range) : idbstore.count();
                        countReq.onerror = onerror;
                        countReq.onsuccess = function () {
                            var count = countReq.result;
                            tryCatch(function () {
                                var delReq = range ? idbstore.delete(range) : idbstore.clear();
                                delReq.onerror = onerror;
                                delReq.onsuccess = function () {
                                    return resolve(count);
                                };
                            }, function (err) {
                                return reject(err);
                            });
                        };
                    });
                }

            // Default version to use when collection is not a vanilla IDBKeyRange on the primary key.
            // Divide into chunks to not starve RAM.
            // If has delete hook, we will have to collect not just keys but also objects, so it will use
            // more memory and need lower chunk size.
            var CHUNKSIZE = hasDeleteHook ? 2000 : 10000;

            return this._write(function (resolve, reject, idbstore, trans) {
                var totalCount = 0;
                // Clone collection and change its table and set a limit of CHUNKSIZE on the cloned Collection instance.
                var collection = _this4.clone({
                    keysOnly: !ctx.isMatch && !hasDeleteHook }) // load just keys (unless filter() or and() or deleteHook has subscribers)
                .distinct() // In case multiEntry is used, never delete same key twice because resulting count
                // would become larger than actual delete count.
                .limit(CHUNKSIZE).raw(); // Don't filter through reading-hooks (like mapped classes etc)

                var keysOrTuples = [];

                // We're gonna do things on as many chunks that are needed.
                // Use recursion of nextChunk function:
                var nextChunk = function () {
                    return collection.each(hasDeleteHook ? function (val, cursor) {
                        // Somebody subscribes to hook('deleting'). Collect all primary keys and their values,
                        // so that the hook can be called with its values in bulkDelete().
                        keysOrTuples.push([cursor.primaryKey, cursor.value]);
                    } : function (val, cursor) {
                        // No one subscribes to hook('deleting'). Collect only primary keys:
                        keysOrTuples.push(cursor.primaryKey);
                    }).then(function () {
                        // Chromium deletes faster when doing it in sort order.
                        hasDeleteHook ? keysOrTuples.sort(function (a, b) {
                            return ascending(a[0], b[0]);
                        }) : keysOrTuples.sort(ascending);
                        return bulkDelete(idbstore, trans, keysOrTuples, hasDeleteHook, deletingHook);
                    }).then(function () {
                        var count = keysOrTuples.length;
                        totalCount += count;
                        keysOrTuples = [];
                        return count < CHUNKSIZE ? totalCount : nextChunk();
                    });
                };

                resolve(nextChunk());
            });
        }
    });

    //
    //
    //
    // ------------------------- Help functions ---------------------------
    //
    //
    //

    function lowerVersionFirst(a, b) {
        return a._cfg.version - b._cfg.version;
    }

    function setApiOnPlace(objs, tableNames, mode, dbschema) {
        tableNames.forEach(function (tableName) {
            var tableInstance = db._tableFactory(mode, dbschema[tableName]);
            objs.forEach(function (obj) {
                tableName in obj || (obj[tableName] = tableInstance);
            });
        });
    }

    function removeTablesApi(objs) {
        objs.forEach(function (obj) {
            for (var key in obj) {
                if (obj[key] instanceof Table) delete obj[key];
            }
        });
    }

    function iterate(req, filter, fn, resolve, reject, valueMapper) {

        // Apply valueMapper (hook('reading') or mappped class)
        var mappedFn = valueMapper ? function (x, c, a) {
            return fn(valueMapper(x), c, a);
        } : fn;
        // Wrap fn with PSD and microtick stuff from Promise.
        var wrappedFn = wrap(mappedFn, reject);

        if (!req.onerror) req.onerror = eventRejectHandler(reject);
        if (filter) {
            req.onsuccess = trycatcher(function filter_record() {
                var cursor = req.result;
                if (cursor) {
                    var c = function () {
                        cursor.continue();
                    };
                    if (filter(cursor, function (advancer) {
                        c = advancer;
                    }, resolve, reject)) wrappedFn(cursor.value, cursor, function (advancer) {
                        c = advancer;
                    });
                    c();
                } else {
                    resolve();
                }
            }, reject);
        } else {
            req.onsuccess = trycatcher(function filter_record() {
                var cursor = req.result;
                if (cursor) {
                    var c = function () {
                        cursor.continue();
                    };
                    wrappedFn(cursor.value, cursor, function (advancer) {
                        c = advancer;
                    });
                    c();
                } else {
                    resolve();
                }
            }, reject);
        }
    }

    function parseIndexSyntax(indexes) {
        /// <param name="indexes" type="String"></param>
        /// <returns type="Array" elementType="IndexSpec"></returns>
        var rv = [];
        indexes.split(',').forEach(function (index) {
            index = index.trim();
            var name = index.replace(/([&*]|\+\+)/g, ""); // Remove "&", "++" and "*"
            // Let keyPath of "[a+b]" be ["a","b"]:
            var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split('+') : name;

            rv.push(new IndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), /\./.test(index)));
        });
        return rv;
    }

    function cmp(key1, key2) {
        return indexedDB.cmp(key1, key2);
    }

    function min(a, b) {
        return cmp(a, b) < 0 ? a : b;
    }

    function max(a, b) {
        return cmp(a, b) > 0 ? a : b;
    }

    function ascending(a, b) {
        return indexedDB.cmp(a, b);
    }

    function descending(a, b) {
        return indexedDB.cmp(b, a);
    }

    function simpleCompare(a, b) {
        return a < b ? -1 : a === b ? 0 : 1;
    }

    function simpleCompareReverse(a, b) {
        return a > b ? -1 : a === b ? 0 : 1;
    }

    function combine(filter1, filter2) {
        return filter1 ? filter2 ? function () {
            return filter1.apply(this, arguments) && filter2.apply(this, arguments);
        } : filter1 : filter2;
    }

    function readGlobalSchema() {
        db.verno = idbdb.version / 10;
        db._dbSchema = globalSchema = {};
        dbStoreNames = slice(idbdb.objectStoreNames, 0);
        if (dbStoreNames.length === 0) return; // Database contains no stores.
        var trans = idbdb.transaction(safariMultiStoreFix(dbStoreNames), 'readonly');
        dbStoreNames.forEach(function (storeName) {
            var store = trans.objectStore(storeName),
                keyPath = store.keyPath,
                dotted = keyPath && typeof keyPath === 'string' && keyPath.indexOf('.') !== -1;
            var primKey = new IndexSpec(keyPath, keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== 'string', dotted);
            var indexes = [];
            for (var j = 0; j < store.indexNames.length; ++j) {
                var idbindex = store.index(store.indexNames[j]);
                keyPath = idbindex.keyPath;
                dotted = keyPath && typeof keyPath === 'string' && keyPath.indexOf('.') !== -1;
                var index = new IndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== 'string', dotted);
                indexes.push(index);
            }
            globalSchema[storeName] = new TableSchema(storeName, primKey, indexes, {});
        });
        setApiOnPlace([allTables, Transaction.prototype], keys(globalSchema), READWRITE, globalSchema);
    }

    function adjustToExistingIndexNames(schema, idbtrans) {
        /// <summary>
        /// Issue #30 Problem with existing db - adjust to existing index names when migrating from non-dexie db
        /// </summary>
        /// <param name="schema" type="Object">Map between name and TableSchema</param>
        /// <param name="idbtrans" type="IDBTransaction"></param>
        var storeNames = idbtrans.db.objectStoreNames;
        for (var i = 0; i < storeNames.length; ++i) {
            var storeName = storeNames[i];
            var store = idbtrans.objectStore(storeName);
            hasGetAll = 'getAll' in store;
            for (var j = 0; j < store.indexNames.length; ++j) {
                var indexName = store.indexNames[j];
                var keyPath = store.index(indexName).keyPath;
                var dexieName = typeof keyPath === 'string' ? keyPath : "[" + slice(keyPath).join('+') + "]";
                if (schema[storeName]) {
                    var indexSpec = schema[storeName].idxByName[dexieName];
                    if (indexSpec) indexSpec.name = indexName;
                }
            }
        }
    }

    function fireOnBlocked(ev) {
        db.on("blocked").fire(ev);
        // Workaround (not fully*) for missing "versionchange" event in IE,Edge and Safari:
        connections.filter(function (c) {
            return c.name === db.name && c !== db && !c._vcFired;
        }).map(function (c) {
            return c.on("versionchange").fire(ev);
        });
    }

    extend(this, {
        Collection: Collection,
        Table: Table,
        Transaction: Transaction,
        Version: Version,
        WhereClause: WhereClause,
        WriteableCollection: WriteableCollection,
        WriteableTable: WriteableTable
    });

    init();

    addons.forEach(function (fn) {
        fn(db);
    });
}

var fakeAutoComplete = function () {}; // Will never be changed. We just fake for the IDE that we change it (see doFakeAutoComplete())
var fake = false; // Will never be changed. We just fake for the IDE that we change it (see doFakeAutoComplete())

function parseType(type) {
    if (typeof type === 'function') {
        return new type();
    } else if (isArray(type)) {
        return [parseType(type[0])];
    } else if (type && typeof type === 'object') {
        var rv = {};
        applyStructure(rv, type);
        return rv;
    } else {
        return type;
    }
}

function applyStructure(obj, structure) {
    keys(structure).forEach(function (member) {
        var value = parseType(structure[member]);
        obj[member] = value;
    });
    return obj;
}

function eventSuccessHandler(done) {
    return function (ev) {
        done(ev.target.result);
    };
}

function hookedEventSuccessHandler(resolve) {
    // wrap() is needed when calling hooks because the rare scenario of:
    //  * hook does a db operation that fails immediately (IDB throws exception)
    //    For calling db operations on correct transaction, wrap makes sure to set PSD correctly.
    //    wrap() will also execute in a virtual tick.
    //  * If not wrapped in a virtual tick, direct exception will launch a new physical tick.
    //  * If this was the last event in the bulk, the promise will resolve after a physical tick
    //    and the transaction will have committed already.
    // If no hook, the virtual tick will be executed in the reject()/resolve of the final promise,
    // because it is always marked with _lib = true when created using Transaction._promise().
    return wrap(function (event) {
        var req = event.target,
            result = req.result,
            ctx = req._hookCtx,
            // Contains the hook error handler. Put here instead of closure to boost performance.
        hookSuccessHandler = ctx && ctx.onsuccess;
        hookSuccessHandler && hookSuccessHandler(result);
        resolve && resolve(result);
    }, resolve);
}

function eventRejectHandler(reject) {
    return function (event) {
        preventDefault(event);
        reject(event.target.error);
        return false;
    };
}

function hookedEventRejectHandler(reject) {
    return wrap(function (event) {
        // See comment on hookedEventSuccessHandler() why wrap() is needed only when supporting hooks.

        var req = event.target,
            err = req.error,
            ctx = req._hookCtx,
            // Contains the hook error handler. Put here instead of closure to boost performance.
        hookErrorHandler = ctx && ctx.onerror;
        hookErrorHandler && hookErrorHandler(err);
        preventDefault(event);
        reject(err);
        return false;
    });
}

function preventDefault(event) {
    if (event.stopPropagation) // IndexedDBShim doesnt support this on Safari 8 and below.
        event.stopPropagation();
    if (event.preventDefault) // IndexedDBShim doesnt support this on Safari 8 and below.
        event.preventDefault();
}

function globalDatabaseList(cb) {
    var val,
        localStorage = Dexie.dependencies.localStorage;
    if (!localStorage) return cb([]); // Envs without localStorage support
    try {
        val = JSON.parse(localStorage.getItem('Dexie.DatabaseNames') || "[]");
    } catch (e) {
        val = [];
    }
    if (cb(val)) {
        localStorage.setItem('Dexie.DatabaseNames', JSON.stringify(val));
    }
}

function awaitIterator(iterator) {
    var callNext = function (result) {
        return iterator.next(result);
    },
        doThrow = function (error) {
        return iterator.throw(error);
    },
        onSuccess = step(callNext),
        onError = step(doThrow);

    function step(getNext) {
        return function (val) {
            var next = getNext(val),
                value = next.value;

            return next.done ? value : !value || typeof value.then !== 'function' ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
        };
    }

    return step(callNext)();
}

//
// IndexSpec struct
//
function IndexSpec(name, keyPath, unique, multi, auto, compound, dotted) {
    /// <param name="name" type="String"></param>
    /// <param name="keyPath" type="String"></param>
    /// <param name="unique" type="Boolean"></param>
    /// <param name="multi" type="Boolean"></param>
    /// <param name="auto" type="Boolean"></param>
    /// <param name="compound" type="Boolean"></param>
    /// <param name="dotted" type="Boolean"></param>
    this.name = name;
    this.keyPath = keyPath;
    this.unique = unique;
    this.multi = multi;
    this.auto = auto;
    this.compound = compound;
    this.dotted = dotted;
    var keyPathSrc = typeof keyPath === 'string' ? keyPath : keyPath && '[' + [].join.call(keyPath, '+') + ']';
    this.src = (unique ? '&' : '') + (multi ? '*' : '') + (auto ? "++" : "") + keyPathSrc;
}

//
// TableSchema struct
//
function TableSchema(name, primKey, indexes, instanceTemplate) {
    /// <param name="name" type="String"></param>
    /// <param name="primKey" type="IndexSpec"></param>
    /// <param name="indexes" type="Array" elementType="IndexSpec"></param>
    /// <param name="instanceTemplate" type="Object"></param>
    this.name = name;
    this.primKey = primKey || new IndexSpec();
    this.indexes = indexes || [new IndexSpec()];
    this.instanceTemplate = instanceTemplate;
    this.mappedClass = null;
    this.idxByName = arrayToObject(indexes, function (index) {
        return [index.name, index];
    });
}

// Used in when defining dependencies later...
// (If IndexedDBShim is loaded, prefer it before standard indexedDB)
var idbshim = _global.idbModules && _global.idbModules.shimIndexedDB ? _global.idbModules : {};

function safariMultiStoreFix(storeNames) {
    return storeNames.length === 1 ? storeNames[0] : storeNames;
}

function getNativeGetDatabaseNamesFn(indexedDB) {
    var fn = indexedDB && (indexedDB.getDatabaseNames || indexedDB.webkitGetDatabaseNames);
    return fn && fn.bind(indexedDB);
}

// Export Error classes
props(Dexie, fullNameExceptions); // Dexie.XXXError = class XXXError {...};

//
// Static methods and properties
// 
props(Dexie, {

    //
    // Static delete() method.
    //
    delete: function (databaseName) {
        var db = new Dexie(databaseName),
            promise = db.delete();
        promise.onblocked = function (fn) {
            db.on("blocked", fn);
            return this;
        };
        return promise;
    },

    //
    // Static exists() method.
    //
    exists: function (name) {
        return new Dexie(name).open().then(function (db) {
            db.close();
            return true;
        }).catch(Dexie.NoSuchDatabaseError, function () {
            return false;
        });
    },

    //
    // Static method for retrieving a list of all existing databases at current host.
    //
    getDatabaseNames: function (cb) {
        return new Promise(function (resolve, reject) {
            var getDatabaseNames = getNativeGetDatabaseNamesFn(indexedDB);
            if (getDatabaseNames) {
                // In case getDatabaseNames() becomes standard, let's prepare to support it:
                var req = getDatabaseNames();
                req.onsuccess = function (event) {
                    resolve(slice(event.target.result, 0)); // Converst DOMStringList to Array<String>
                };
                req.onerror = eventRejectHandler(reject);
            } else {
                globalDatabaseList(function (val) {
                    resolve(val);
                    return false;
                });
            }
        }).then(cb);
    },

    defineClass: function (structure) {
        /// <summary>
        ///     Create a javascript constructor based on given template for which properties to expect in the class.
        ///     Any property that is a constructor function will act as a type. So {name: String} will be equal to {name: new String()}.
        /// </summary>
        /// <param name="structure">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
        /// know what type each member has. Example: {name: String, emailAddresses: [String], properties: {shoeSize: Number}}</param>

        // Default constructor able to copy given properties into this object.
        function Class(properties) {
            /// <param name="properties" type="Object" optional="true">Properties to initialize object with.
            /// </param>
            properties ? extend(this, properties) : fake && applyStructure(this, structure);
        }
        return Class;
    },

    applyStructure: applyStructure,

    ignoreTransaction: function (scopeFunc) {
        // In case caller is within a transaction but needs to create a separate transaction.
        // Example of usage:
        //
        // Let's say we have a logger function in our app. Other application-logic should be unaware of the
        // logger function and not need to include the 'logentries' table in all transaction it performs.
        // The logging should always be done in a separate transaction and not be dependant on the current
        // running transaction context. Then you could use Dexie.ignoreTransaction() to run code that starts a new transaction.
        //
        //     Dexie.ignoreTransaction(function() {
        //         db.logentries.add(newLogEntry);
        //     });
        //
        // Unless using Dexie.ignoreTransaction(), the above example would try to reuse the current transaction
        // in current Promise-scope.
        //
        // An alternative to Dexie.ignoreTransaction() would be setImmediate() or setTimeout(). The reason we still provide an
        // API for this because
        //  1) The intention of writing the statement could be unclear if using setImmediate() or setTimeout().
        //  2) setTimeout() would wait unnescessary until firing. This is however not the case with setImmediate().
        //  3) setImmediate() is not supported in the ES standard.
        //  4) You might want to keep other PSD state that was set in a parent PSD, such as PSD.letThrough.
        return PSD.trans ? usePSD(PSD.transless, scopeFunc) : // Use the closest parent that was non-transactional.
        scopeFunc(); // No need to change scope because there is no ongoing transaction.
    },

    vip: function (fn) {
        // To be used by subscribers to the on('ready') event.
        // This will let caller through to access DB even when it is blocked while the db.ready() subscribers are firing.
        // This would have worked automatically if we were certain that the Provider was using Dexie.Promise for all asyncronic operations. The promise PSD
        // from the provider.connect() call would then be derived all the way to when provider would call localDatabase.applyChanges(). But since
        // the provider more likely is using non-promise async APIs or other thenable implementations, we cannot assume that.
        // Note that this method is only useful for on('ready') subscribers that is returning a Promise from the event. If not using vip()
        // the database could deadlock since it wont open until the returned Promise is resolved, and any non-VIPed operation started by
        // the caller will not resolve until database is opened.
        return newScope(function () {
            PSD.letThrough = true; // Make sure we are let through if still blocking db due to onready is firing.
            return fn();
        });
    },

    async: function (generatorFn) {
        return function () {
            try {
                var rv = awaitIterator(generatorFn.apply(this, arguments));
                if (!rv || typeof rv.then !== 'function') return Promise.resolve(rv);
                return rv;
            } catch (e) {
                return rejection(e);
            }
        };
    },

    spawn: function (generatorFn, args, thiz) {
        try {
            var rv = awaitIterator(generatorFn.apply(thiz, args || []));
            if (!rv || typeof rv.then !== 'function') return Promise.resolve(rv);
            return rv;
        } catch (e) {
            return rejection(e);
        }
    },

    // Dexie.currentTransaction property
    currentTransaction: {
        get: function () {
            return PSD.trans || null;
        }
    },

    // Export our Promise implementation since it can be handy as a standalone Promise implementation
    Promise: Promise,

    // Dexie.debug proptery:
    // Dexie.debug = false
    // Dexie.debug = true
    // Dexie.debug = "dexie" - don't hide dexie's stack frames.
    debug: {
        get: function () {
            return debug;
        },
        set: function (value) {
            setDebug(value, value === 'dexie' ? function () {
                return true;
            } : dexieStackFrameFilter);
        }
    },

    // Export our derive/extend/override methodology
    derive: derive,
    extend: extend,
    props: props,
    override: override,
    // Export our Events() function - can be handy as a toolkit
    Events: Events,
    events: { get: deprecated(function () {
            return Events;
        }) }, // Backward compatible lowercase version.
    // Utilities
    getByKeyPath: getByKeyPath,
    setByKeyPath: setByKeyPath,
    delByKeyPath: delByKeyPath,
    shallowClone: shallowClone,
    deepClone: deepClone,
    getObjectDiff: getObjectDiff,
    asap: asap,
    maxKey: maxKey,
    // Addon registry
    addons: [],
    // Global DB connection list
    connections: connections,

    MultiModifyError: exceptions.Modify, // Backward compatibility 0.9.8. Deprecate.
    errnames: errnames,

    // Export other static classes
    IndexSpec: IndexSpec,
    TableSchema: TableSchema,

    //
    // Dependencies
    //
    // These will automatically work in browsers with indexedDB support, or where an indexedDB polyfill has been included.
    //
    // In node.js, however, these properties must be set "manually" before instansiating a new Dexie().
    // For node.js, you need to require indexeddb-js or similar and then set these deps.
    //
    dependencies: {
        // Required:
        indexedDB: idbshim.shimIndexedDB || _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
        IDBKeyRange: idbshim.IDBKeyRange || _global.IDBKeyRange || _global.webkitIDBKeyRange
    },

    // API Version Number: Type Number, make sure to always set a version number that can be comparable correctly. Example: 0.9, 0.91, 0.92, 1.0, 1.01, 1.1, 1.2, 1.21, etc.
    semVer: DEXIE_VERSION,
    version: DEXIE_VERSION.split('.').map(function (n) {
        return parseInt(n);
    }).reduce(function (p, c, i) {
        return p + c / Math.pow(10, i * 2);
    }),
    fakeAutoComplete: fakeAutoComplete,

    // https://github.com/dfahlander/Dexie.js/issues/186
    // typescript compiler tsc in mode ts-->es5 & commonJS, will expect require() to return
    // x.default. Workaround: Set Dexie.default = Dexie.
    default: Dexie
});

tryCatch(function () {
    // Optional dependencies
    // localStorage
    Dexie.dependencies.localStorage = (typeof chrome !== "undefined" && chrome !== null ? chrome.storage : void 0) != null ? null : _global.localStorage;
});

// Map DOMErrors and DOMExceptions to corresponding Dexie errors. May change in Dexie v2.0.
Promise.rejectionMapper = mapError;

// Fool IDE to improve autocomplete. Tested with Visual Studio 2013 and 2015.
doFakeAutoComplete(function () {
    Dexie.fakeAutoComplete = fakeAutoComplete = doFakeAutoComplete;
    Dexie.fake = fake = true;
});

return Dexie;

})));


},{}],34:[function(require,module,exports){
'use strict';

var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};

},{}],35:[function(require,module,exports){
'use strict';

var emitter = require('contra/emitter');
var crossvent = require('crossvent');
var classes = require('./classes');
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }
    // truthy check fixes #239, equality fixes #207
    if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  var p = point || {};
  var state = p.className;
  var el;
  p.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  p.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;

},{"./classes":34,"contra/emitter":29,"crossvent":30}],36:[function(require,module,exports){
/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.2
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return Mousetrap;
        });
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);

},{}],37:[function(require,module,exports){
/*!
 * string_score.js: String Scoring Algorithm 0.1.22
 *
 * http://joshaven.com/string_score
 * https://github.com/joshaven/string_score
 *
 * Copyright (C) 2009-2014 Joshaven Potter <yourtech@gmail.com>
 * Special thanks to all of the contributors listed here https://github.com/joshaven/string_score
 * MIT License: http://opensource.org/licenses/MIT
 *
 * Date: Tue Mar 1 2011
 * Updated: Tue Mar 10 2015
*/

/*jslint nomen:true, white:true, browser:true,devel:true */

/**
 * Scores a string against another string.
 *    'Hello World'.score('he');         //=> 0.5931818181818181
 *    'Hello World'.score('Hello');    //=> 0.7318181818181818
 */
String.prototype.score = function (word, fuzziness) {
  'use strict';

  // If the string is equal to the word, perfect match.
  if (this === word) { return 1; }

  //if it's not a perfect match and is empty return 0
  if (word === "") { return 0; }

  var runningScore = 0,
      charScore,
      finalScore,
      string = this,
      lString = string.toLowerCase(),
      strLength = string.length,
      lWord = word.toLowerCase(),
      wordLength = word.length,
      idxOf,
      startAt = 0,
      fuzzies = 1,
      fuzzyFactor,
      i;

  // Cache fuzzyFactor for speed increase
  if (fuzziness) { fuzzyFactor = 1 - fuzziness; }

  // Walk through word and add up scores.
  // Code duplication occurs to prevent checking fuzziness inside for loop
  if (fuzziness) {
    for (i = 0; i < wordLength; i+=1) {

      // Find next first case-insensitive match of a character.
      idxOf = lString.indexOf(lWord[i], startAt);

      if (idxOf === -1) {
        fuzzies += fuzzyFactor;
      } else {
        if (startAt === idxOf) {
          // Consecutive letter & start-of-string Bonus
          charScore = 0.7;
        } else {
          charScore = 0.1;

          // Acronym Bonus
          // Weighing Logic: Typing the first character of an acronym is as if you
          // preceded it with two perfect character matches.
          if (string[idxOf - 1] === ' ') { charScore += 0.8; }
        }

        // Same case bonus.
        if (string[idxOf] === word[i]) { charScore += 0.1; }

        // Update scores and startAt position for next round of indexOf
        runningScore += charScore;
        startAt = idxOf + 1;
      }
    }
  } else {
    for (i = 0; i < wordLength; i+=1) {
      idxOf = lString.indexOf(lWord[i], startAt);
      if (-1 === idxOf) { return 0; }

      if (startAt === idxOf) {
        charScore = 0.7;
      } else {
        charScore = 0.1;
        if (string[idxOf - 1] === ' ') { charScore += 0.8; }
      }
      if (string[idxOf] === word[i]) { charScore += 0.1; }
      runningScore += charScore;
      startAt = idxOf + 1;
    }
  }

  // Reduce penalty for longer strings.
  finalScore = 0.5 * (runningScore / strLength    + runningScore / wordLength) / fuzzies;

  if ((lWord[0] === lString[0]) && (finalScore < 0.85)) {
    finalScore += 0.15;
  }

  return finalScore;
};

},{}],38:[function(require,module,exports){
var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else if (typeof process !== 'undefined' && process.nextTick) {
  tick = process.nextTick;
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;

},{}]},{},[1]);
