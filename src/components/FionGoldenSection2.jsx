import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { getAssetPath } from '../utils/assets'

const FionGoldenSection2 = () => {
  const { language } = useLanguage()
  const [expandedService, setExpandedService] = useState(null)

  const content = {
    ro: {
      title: 'Cu ce lucrez?',
      services: [
        {
          id: 1,
          title: 'Diagnostic și citirea destinului',
          subtitle: 'Atunci când omul dorește să se înțeleagă pe sine, să își clarifice o situație sau să își descopere direcția de viață',
          intro: 'Diagnosticarea devine primul și unul dintre cele mai importante puncte de întâlnire cu munca spirituală.',
          description: 'Diagnosticul energetic este un proces subtil de citire a câmpului unui om: a energiilor sale, a tiparelor de viață, a nodurilor karmice, a evenimentelor din perioada actuală și a sensurilor profunde prin care acestea se manifestă.',
          methods: [
            'Sesiune de Tarot profund, realizată în funcție de întrebarea sau situația ta',
            'Citirea Matricei personale în fluxul channeling-ului'
          ],
          note: 'Este important de știut că lucrul cu Tarotul și lucrul cu Matricea au profunzimi, structuri și formate diferite. Fiecare tip de diagnostic poartă propria valoare energetică și necesită o abordare personalizată.',
          availability: 'Sesiunile pot fi realizate atât fizic, cât și la distanță.'
        },
        {
          id: 2,
          title: 'Purificare și restaurare energetică',
          subtitle: 'Atunci când este nevoie de eliberare de programe distructive și de greutatea energetică acumulată',
          intro: 'Purificarea este un proces profund de eliberare de tot ceea ce împiedică curgerea firească a energiei vieții, fără a depăși vreodată granițele dintre bine și rău.',
          description: 'Prin ritualurile de curățare se înlătură tot ceea ce blochează forța vitală, creează greutate interioară, anxietate, stagnare sau sentimentul de pierdere a propriei identități în lume.',
          symptoms: [
            'oboseală cronică',
            'pierdere a motivației',
            'frici inexplicabile',
            'repetarea unor evenimente negative',
            'senzația unei influențe străine',
            'gol interior',
            '"balansuri" emoționale',
            'afecțiuni fără cauză clară și multe altele'
          ],
          whenNeeded: 'Purificarea devine necesară atunci când câmpul omului este supraîncărcat de programe străine, noduri ancestrale, blocaje energetice sau conexiuni distructive care îl împiedică să-și trăiască viața în forța și lumina destinului său.',
          approach: 'Fiecare curățare este aleasă strict individual. Nu există un ritual universal – totul depinde de complexitatea situației, tipurile de conectări, profunzimea afectării câmpului și disponibilitatea omului pentru transformare.',
          consent: 'Intervenția se face doar cu acordul persoanei. Fără consimțământ, lucrul energetic nu se realizează niciodată.',
          process: 'Procesul poate include sesiuni fizice sau practici la distanță, inclusiv lucrul cu fantoma energetică și cu câmpul subtil al omului.',
          methods: [
            'plante și fumigații',
            'lumânări programate',
            'uleiuri, săruri și tămâie',
            'boluri tibetane',
            'turnări din ceară sau plumb',
            'rostogolire cu ouă',
            'lucrul cu cele patru elemente',
            'eliberarea larvelor energetice cu boabe sau cupru',
            '…și alte tehnici selectate individual, în funcție de situație'
          ]
        },
        {
          id: 3,
          title: 'Purificarea și armonizarea spațiului',
          subtitle: 'Pentru locuință, afaceri și orice loc important pentru om',
          intro: 'Spațiul în care trăiește sau lucrează un om absoarbe totul: emoții, evenimente, conflicte, frici, bucurii, cuvinte, intenții, istorii.',
          description: 'El respiră împreună cu omul și îi reflectă starea, influențând direct sănătatea, succesul, echilibrul interior și calitatea vieții.',
          symptoms: [
            'conflicte constante',
            'pierderi financiare',
            'boli recurente',
            'tensiune sau neliniște',
            'insomnii',
            'anxietate',
            'senzația unui „prezențe străine"',
            'discomfort inexplicabil'
          ],
          solution: 'Purificarea și armonizarea spațiului restabilesc echilibrul natural al acestuia și readuc locuinței sau afacerii statutul de mediu protejat, viu și susținător.',
          process: 'Fiecare intervenție în spațiu este precedată de o diagnosticare energetică. Se evaluează nivelul de încărcare, existența programelor distructive, a fantomelor reziduale și starea zonelor energetice.',
          availability: 'Lucrul se poate realiza atât fizic, cât și la distanță, în funcție de situație. În cazul locuințelor și afacerilor, procesul este întotdeauna personalizat, ținând cont de destinația încăperii și de cerințele proprietarului.'
        },
        {
          id: 4,
          title: 'Armonizarea personalității și a relațiilor',
          subtitle: 'Ajustarea echilibrului interior și a stabilității emoționale',
          intro: 'Acest segment de practici este dedicat lucrului fin și profund cu interiorul omului: stările sale lăuntrice, percepția de sine, relația cu propria persoană și cu lumea din jur.',
          goal: 'Scopul principal este formarea acelei stări interioare din care omul își construiește noua realitate – deciziile, reacțiile, conexiunile și scenariile vieții sale.',
          description: 'Armonizarea personalității este un proces de reîntoarcere la sinele autentic, la centrul interior, la forța proprie. Este o muncă ce implică nu doar curățarea canalelor ancestrale, eliberarea durerilor și traumelor, ci și revelația părții luminoase a sufletului, restaurarea valorii personale și conștientizarea potențialului interior.',
          reflection: 'Relația cu sine se reflectă inevitabil în toate celelalte domenii: în cuplu, în familie, în legătura cu neamul, în prietenii, în manifestarea omului în lume.',
          approach: 'Lucrul se construiește individual și poate include atât practici energetice, cât și diagnosticări profunde.',
          method: 'Un instrument suplimentar utilizat în acest proces este metoda numerologică „Matricea Destinului" – un sistem puternic care dezvăluie potențialul pozitiv al omului în toate sferele vieții: resursele înnăscute, punctele forte și zonele de creștere.',
          application: 'Matricea nu doar ajută la înțelegerea propriilor posibilități, ci oferă și instrumente practice pentru manifestarea lor în realitate: în relații, în dezvoltarea personală, în descoperirea misiunii, în creativitate, în puterea personală.',
          conclusion: 'Armonizarea personalității este un drum de întoarcere la sine, la natura autentică și la forța interioară.',
          availability: 'Sesiunile pot fi realizate atât fizic, cât și la distanță.'
        },
        {
          id: 5,
          title: 'Fluxul financiar și realizarea materială',
          subtitle: 'Lucrul cu abundența, creșterea și manifestarea în planul material',
          intro: 'Acest set de practici este dedicat modului în care omul interacționează cu lumea materială și felului în care energia banilor circulă prin viața sa.',
          description: 'Banii nu sunt doar un resurs — ei reflectă starea interioară a omului, relația cu sine, cu lumea și cu dreptul său natural de a primi și de a multiplica.',
          symptoms: [
            'dificultăți financiare recurente',
            'instabilitate',
            'pierderi',
            'frică în raport cu banii',
            'incapacitatea de a păstra resursele',
            'senzația că eforturile nu sunt răsplătite pe măsură'
          ],
          solution: 'Lucrul cu fluxul financiar înseamnă restaurarea canalului natural al abundenței, activarea capacității înnăscute de a primi, de a păstra, de a multiplica și de a gestiona cu armonie energia materială.',
          process: 'Procesul începe întotdeauna cu o diagnosticare. Fiecare etapă este construită individual și poate include atât lucrul cu persoana, cât și armonizarea energiei afacerii, a proiectelor sau a strategiei financiare.',
          availability: 'Sesiunile sunt disponibile atât în format fizic, cât și online.'
        },
        {
          id: 6,
          title: 'Artefacte de putere și obiecte sacre',
          subtitle: 'Instrumente personale de susținere și protecție',
          intro: 'Pentru a sprijini omul pe drumul său de viață, creez obiecte sacre de putere – instrumente energetice personale menite să protejeze, să întărească și să însoțească blând procesele de transformare.',
          description: 'Fiecare obiect sacru este creat de mine în stare de conexiune cu câmpul persoanei, prin channeling, ritualuri și lucrul cu energiile subtile, adaptat individual fiecărui scop și fiecărei intenții.',
          purpose: 'Aceste artefacte devin aliați vii, susținând omul în evoluția sa, consolidând protecția, stabilizând câmpul și ajutându-l să mențină vibrațiile necesare.',
          items: [
            'Amulete individuale de protecție',
            'Talismane personale',
            'Lumânări programate',
            'Obiecte și haine consacrate',
            'Cristale și suporturi energetice',
            'Amestecuri din plante și tisane vindecătoare',
            'Obiecte de putere create pentru un scop precis',
            'Simboluri sacre încărcate energetic'
          ],
          process: 'Fiecare artefact trece printr-un proces complet: diagnosticare, alegerea materialelor și elementelor, ajustare ritualică și activare energetică.',
          note: 'El nu lucrează în locul omului, ci împreună cu el, amplificând potențialul natural și protejând spațiul personal.'
        },
        {
          id: 7,
          title: 'Rituale și practici sacre',
          subtitle: 'Atunci când sufletul este pregătit pentru un pas nou și pentru transformări profunde',
          intro: 'Magia ritualică este una dintre formele centrale ale practicii mele spirituale. Îi ofer un loc aparte, deoarece consider că ritualurile sunt necesare pentru schimbări profunde, pentru trecerea dintr-o stare în alta, pentru încheierea ciclurilor vechi și deschiderea celor noi.',
          description: 'Ritualul este un instrument sacru prin care omul interacționează conștient cu destinul său, cu energia sa și cu forțele superioare.',
          approach: 'Fiecare ritual este realizat individual, în funcție de cerere, de starea energetică a persoanei și de nivelul său de pregătire.',
          availability: 'Lucrul poate fi fizic sau la distanță, cu menținerea integrală a forței și eficienței.',
          teaching: 'Ofer, de asemenea, inițiere și instruire în practica ritualică, pentru cei care simt chemarea și sunt pregătiți să pășească conștient pe această cale.',
          rituals: [
            'Ritualuri ceremoniale de purificare',
            'Rituale de trecere',
            'Rituale pentru deschiderea drumurilor',
            'Resetări energetice',
            'Rituale de curățare karmică',
            'Introducere în starea de gnoză',
            'Rituale de protecție',
            'Rituale pentru restaurarea energiei',
            'Ajustarea proceselor destinului',
            '… și multe altele'
          ],
          note: 'Fiecare practică este aleasă individual și se realizează cu respect deplin pentru liberul arbitru al persoanei și pentru legile spirituale.'
        },
        {
          id: 8,
          title: 'Învățare spirituală și însoțire pe cale',
          subtitle: 'Pentru cei care aleg drumul dezvoltării conștiente',
          intro: 'Pentru cei care simt chemarea dezvoltării conștiente și sunt pregătiți nu doar să primească ajutor, ci să pătrundă în profunzime, să-și dezvăluie natura interioară și să parcurgă un proces autentic de transformare, sunt deschis să ofer cunoaștere și însoțire spirituală.',
          description: 'Nu ca un conducător, ci ca un însoțitor pe drumul creșterii personale și al transformării. Acesta este un proces în care merg alături de om, oferind cunoaștere, susținându-l în momentele de trecere, ajutându-l să înțeleagă, să-și clarifice și să-și construiască propria modalitate de a interacționa cu lumea, cu sine și cu forțele superioare.',
          formats: [
            'Mentorat spiritual individual',
            'Inițieri în cunoaștere',
            'Practici personale de transformare',
            'Instruire ezoterică',
            'Cursuri și practici spirituale',
            'Practici de extindere a conștiinței',
            'Retreaturi și călătorii către locuri de putere'
          ],
          approach: 'Fiecare format este ales în funcție de nivelul persoanei, de maturitatea energetică și de intenția interioară.',
          method: 'Învățarea se bazează pe profundă acordare, respect față de drumul omului și deschiderea treptată a potențialului său.',
          philosophy: 'Nu vorbesc despre transmiterea cunoștințelor de dragul cunoștințelor. Mentoratul este un proces viu, în care omul învață să simtă, să conștientizeze, să înțeleagă și să aplice practicile în propria viață.',
          availability: 'Lucrul se poate desfășura individual sau în grupuri mici, atât fizic, cât și online. Toate procesele sunt însoțite de susținere, explicații și ajustări la fiecare etapă a parcursului.'
        }
      ]
    },
    ru: {
      title: 'С ЧЕМ Я РАБОТАЮ?',
      services: [
        {
          id: 1,
          title: 'Диагностика и чтение судьбы',
          subtitle: 'Когда человек хочет понять себя, свою ситуацию и направление жизненного пути',
          intro: 'Это первая и одна из самых важных точек соприкосновения человека с духовной работой над собой.',
          description: 'Диагностика - это тонкий процесс считывания поля человека, его энергий, жизненных узоров, кармических узлов, событий текущего периода и тех смыслов, через которые они проявляются.',
          methods: [
            'Глубинный расклад Таро по запросу',
            'Чтение Матрицы в потоке ченнелинга'
          ],
          note: 'Важно: работа с Таро и работа с Матрицей имеют разную глубину, структуру и формат проведения. Соответственно, каждая форма диагностики имеет свою энергетическую ценность и индивидуальный подход.',
          availability: 'Работа осуществляется как очно, так и дистанционно.'
        },
        {
          id: 2,
          title: 'Очищение и восстановление',
          subtitle: 'Когда необходимо освободиться от разрушительных программ и энергетической тяжести',
          intro: 'Очищение - это глубокий процесс освобождения от всего, что мешает естественному течению энергии жизни, не переходя границы добра и зла.',
          description: 'Благодаря ритуалам очищения снимается все, что блокирует жизненную силу, создает внутреннюю тяжесть, тревожность, ощущение застоя и утраты себя в мире.',
          symptoms: [
            'хроническая усталость',
            'потеря мотивации',
            'необъяснимые страхи',
            'повторяющиеся негативные события',
            'ощущение чужого влияния',
            'энергетическая пустота',
            'эмоциональные "качели"',
            'болезни без явной причины и прочее'
          ],
          whenNeeded: 'Очищение необходимо тогда, когда поле человека перегружено чужими программами, родовыми узлами, энергетическими зажимами и подключками, которые мешают жить своей жизнью, чувствовать свою силу и идти по своему пути предназначения и света.',
          approach: 'Каждая чистка подбирается строго индивидуально. Не существует универсального метода - все зависит от сложности ситуации, типа подключек, глубины поражения поля и готовности самого человека к трансформации.',
          consent: 'Работа проводится только по согласию человека. Без согласия вмешательство в энергетику не осуществляется.',
          process: 'Процесс может включать как очные, так и дистанционные практики, включая работу с фантомом и энергополем человека.',
          methods: [
            'травы, свечи, масла, соли, ладаны',
            'поющие чаши',
            'восковые отливки, свинцовые отливки',
            'катание яйцами',
            'работа с четырьмя стихиями',
            'освобождение от лярв бобами и медью',
            'а также другие инструменты, которые оговариваются индивидуально'
          ]
        },
        {
          id: 3,
          title: 'Очищение и гармонизация пространства',
          subtitle: 'Для дома, бизнеса и любых мест силы человека',
          intro: 'Пространство, в котором живет или работает человек, накапливает в себе все: эмоции, события, страхи, конфликты, боль, радость, слова, намерения, истории.',
          description: 'Оно дышит вместе с человеком, отражает его состояние и напрямую влияет на его самочувствие, здоровье, успех и внутреннюю устойчивость.',
          symptoms: [
            'постоянные конфликты',
            'финансовые потери',
            'болезни',
            'ощущение напряжения',
            'бессонница',
            'тревога',
            'ощущение "чужого присутствия"',
            'необъяснимый дискомфорт'
          ],
          solution: 'Очищение и гармонизация пространства - это процесс восстановления его естественного баланса, возвращения дому или месту работы статуса защищенной, живой и поддерживающей среды.',
          process: 'Каждая работа с пространством проводится после его энергетической диагностики. Определяется уровень загрязнения, наличие деструктивных программ, остаточных фантомов, а также состояние энергетических зон.',
          availability: 'Работа осуществляется как очно, так и дистанционно, в зависимости от ситуации. При работе с бизнесом и домом процесс всегда подбирается индивидуально - с учетом назначения помещения и запросов владельца.'
        },
        {
          id: 4,
          title: 'Гармонизация личности и отношений',
          subtitle: 'Настройка внутреннего баланса и эмоциональной устойчивости',
          intro: 'Этот блок практик посвящен тонкой и глубинной работе с личностью человека, его внутренними состояниями, самоощущением, отношениями с собой и окружающим миром.',
          goal: 'Главная задача - формирование того состояния, из которого человек строит свою новую реальность - свои решения, выборы, реакции, связи и сценарии жизни.',
          description: 'Гармонизация личности - это процесс возвращения человека к себе настоящему. К своему центру. К своей опоре. Это работа не только с родовыми каналами, болью и травмами, но и с раскрытием светлой стороны души, с восстановлением самоценности и осознанием собственного потенциала.',
          reflection: 'Отношения с собой неизбежно отражаются во всех других сферах: в партнерстве, в семье, в родовых связях, в дружбе и в проявленности в мире.',
          approach: 'Работа выстраивается индивидуально и может включать в себя как энергетические практики, так и глубинную диагностику.',
          method: 'Дополнительно в работе применяется нумерологический метод «Матрица Судьбы» - мощный инструмент, позволяющий увидеть плюсовой потенциал человека во всех сферах жизни, его врожденные ресурсы, сильные стороны и зоны роста.',
          application: 'Матрица помогает не только осознать свои возможности, но и применить практические инструменты для их реализации в реальности: в отношениях, саморазвитии, предназначении, творчестве и личной силе.',
          conclusion: 'Гармонизация личности - это путь возвращения к себе, к своей истинной природе и своей силе.',
          availability: 'Работа осуществляется как очно, так и дистанционно.'
        },
        {
          id: 5,
          title: 'Денежный поток и реализация',
          subtitle: 'Работа с изобилием, ростом и материальной реализацией',
          intro: 'Набор практик, посвященных взаимодействию человека с материальным миром и тем, как энергия денег проходит через его жизнь.',
          description: 'Деньги - это не просто ресурс. Это отражение внутреннего состояния, отношения к себе, к миру, к своему праву принимать и приумножать.',
          symptoms: [
            'повторяющиеся финансовые трудности',
            'нестабильность',
            'ощущение потери',
            'страха перед деньгами',
            'невозможность удержать ресурсы',
            'постоянное чувство, что усилия не соответствуют результату'
          ],
          solution: 'Работа с денежным потоком - это глубокий процесс восстановления естественного канала изобилия, раскрытия врожденного потенциала к принятию, накоплению, умножению и гармоничному управлению материальной энергией.',
          process: 'Работа с денежным потоком начинается с диагностики. Каждый процесс выстраивается индивидуально и может включать как работу с человеком, так и настройку его бизнеса, проекта или финансовой стратегии.',
          availability: 'Работа осуществляется как очно, так и дистанционно.'
        },
        {
          id: 6,
          title: 'Артефакты силы и сакральные предметы',
          subtitle: 'Персональные инструменты поддержки и защиты',
          intro: 'Для помощи и поддержки человека на его жизненном пути я создаю сакральные предметы силы - личные энергетические инструменты, призванные защищать, усиливать и мягко сопровождать в процессах трансформации.',
          description: 'Все сакральные предметы создаются мной лично - в состоянии сонастройки с полем человека, через ченнелинг, ритуалы и работу с энергиями, индивидуально под каждый запрос и задачу.',
          purpose: 'Артефакты становятся живыми союзниками человека, поддерживая его в пути, усиливая защиту, стабилизируя поле и помогая удерживать нужные вибрации.',
          items: [
            'Индивидуальные защитные амулеты',
            'Персональные обереги',
            'Программные свечи',
            'Заговоренные предметы и одежда',
            'Кристаллы и энергетические носители',
            'Травяные сборы и чайные тизаны',
            'Предметы силы под конкретный запрос',
            'Заряженные сакральные символы'
          ],
          process: 'Каждый артефакт проходит диагностику, подбор материалов и стихий, ритуальную настройку и энергетическую активацию.',
          note: 'Он работает не вместо человека, а вместе с ним, усиливая его природный потенциал и защищая его пространство.'
        },
        {
          id: 7,
          title: 'Ритуалы и сакральные практики',
          subtitle: 'Когда душа готова к переходу и глубинной проработке',
          intro: 'Обрядовая магия и ритуалы - одна из ключевых форм моей духовной практики. Именно им я уделяю особое место, так как, по моему мнению, ритуалы нужны для глубинных изменений, перехода из одного состояния в другое, завершения отживших этапов и открытия новых жизненных циклов.',
          description: 'Это сакральный инструмент, через который человек осознанно взаимодействует со своей судьбой, энергией и высшими силами.',
          approach: 'Каждый ритуал проводится индивидуально, в соответствии с запросом, энергетическим состоянием человека и уровнем его готовности.',
          availability: 'Работа может проходить как очно, так и дистанционно, с полным сохранением силы и эффективности воздействия.',
          teaching: 'Я также обучаю обрядовой практике и передаю знания тем, кто чувствует призвание и готов к осознанному пути работы с ритуальной магией.',
          rituals: [
            'Обрядовые ритуалы очищения',
            'Переходные ритуалы',
            'Ритуалы открытия путей',
            'Энергетические перезагрузки',
            'Ритуалы очищения кармы',
            'Введение в состояние гнозиса',
            'Ритуалы на защиту',
            'Ритуалы на восстановление энергии',
            'Настройка судьбоносных процессов',
            '… и многие другие'
          ],
          note: 'Каждая практика подбирается индивидуально и проводится с уважением к свободе воли человека и духовным законам.'
        },
        {
          id: 8,
          title: 'Духовное обучение и сопровождение',
          subtitle: 'Для тех, кто выбирает путь осознанного развития',
          intro: 'Для тех, кто выбирает путь осознанного развития и чувствует в себе готовность не просто получать помощь, а идти в глубину, раскрывать свою природу и проходить путь трансформации осознанно и бережно, я открыт к тому, чтобы передавать знания и стать духовным сопровождающим.',
          description: 'Не проводником, а именно сопровождающим вас на пути личностного роста и трансформации. Это процесс, в котором я иду рядом с человеком, передавая знания, поддерживая его в переходах, помогая осознавать, направлять и выстраивать собственную систему взаимодействия с миром, собой и высшими силами.',
          formats: [
            'Индивидуальное духовное наставничество',
            'Инициации в знания',
            'Персональные практики трансформации',
            'Эзотерические обучения',
            'Духовные курсы и практики',
            'Практики расширения сознания',
            'Ретриты и поездки к местам силы'
          ],
          approach: 'Каждый формат подбирается с учетом уровня человека, его энергетической зрелости и внутреннего запроса.',
          method: 'Обучение строится на глубокой сонастройке, уважении к пути человека и постепенном раскрытии его возможностей.',
          philosophy: 'Я говорю не о передаче знаний ради знаний. Наставничество - это живой процесс, в котором человек учится чувствовать, осознавать, понимать и применять полученные практики в реальной жизни.',
          availability: 'Работа может проходить в индивидуальном формате или в малых группах, как очно, так и онлайн. Все процессы сопровождаются поддержкой, разъяснениями и корректировкой на каждом этапе пути.'
        }
      ]
    }
  }

  const currentContent = content[language]

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <div className="fion-golden-section-2">
      <div className="container">

        {/* Section Title */}
        <div className="section-header">
          <div className="section-title">
            <h2 className="wow fadeInUp">{currentContent.title}</h2>
          </div>
        </div>

        {/* Services List */}
        <div className="services-list">
          {currentContent.services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card wow fadeInUp ${expandedService === service.id ? 'expanded' : ''}`}
              data-wow-delay={`${index * 0.1}s`}
            >
              <div
                className="service-card-header"
                onClick={() => toggleService(service.id)}
              >
                <div className="service-number">{service.id}</div>
                <div className="service-header-content">
                  <h3>{service.title}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                </div>
                <div className="service-toggle">
                  <i className={`fa-solid ${expandedService === service.id ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
              </div>

              {expandedService === service.id && (
                <div className="service-card-content">
                  {service.intro && <p className="service-intro">{service.intro}</p>}
                  {service.description && <p className="service-description">{service.description}</p>}
                  
                  {service.methods && (
                    <div className="service-methods">
                      <h4>{language === 'ro' ? 'În această lucrare folosesc:' : 'В работе используются разные инструменты:'}</h4>
                      <ul>
                        {service.methods.map((method, idx) => (
                          <li key={idx}>{method}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.symptoms && (
                    <div className="service-symptoms">
                      <h4>{language === 'ro' ? 'Omul poate simți scurgerile de energie în diferite forme:' : 'Человек может ощущать оттоки энергии по-разному:'}</h4>
                      <ul>
                        {service.symptoms.map((symptom, idx) => (
                          <li key={idx}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.whenNeeded && <p className="service-when-needed">{service.whenNeeded}</p>}
                  {service.approach && <p className="service-approach">{service.approach}</p>}
                  {service.consent && <p className="service-consent"><strong>{service.consent}</strong></p>}
                  {service.process && <p className="service-process">{service.process}</p>}
                  {service.goal && <p className="service-goal"><strong>{service.goal}</strong></p>}
                  {service.reflection && <p className="service-reflection">{service.reflection}</p>}
                  {service.method && <p className="service-method">{service.method}</p>}
                  {service.application && <p className="service-application">{service.application}</p>}
                  {service.conclusion && <p className="service-conclusion">{service.conclusion}</p>}
                  {service.solution && <p className="service-solution">{service.solution}</p>}
                  {service.purpose && <p className="service-purpose">{service.purpose}</p>}
                  {service.teaching && <p className="service-teaching">{service.teaching}</p>}
                  {service.philosophy && <p className="service-philosophy">{service.philosophy}</p>}

                  {service.items && (
                    <div className="service-items">
                      <h4>{language === 'ro' ? 'Ce creez și încarc energetic:' : 'Что создается и заряжается:'}</h4>
                      <ul>
                        {service.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.rituals && (
                    <div className="service-rituals">
                      <h4>{language === 'ro' ? 'Ce ritualuri realizez:' : 'Какие ритуалы я провожу?'}</h4>
                      <ul>
                        {service.rituals.map((ritual, idx) => (
                          <li key={idx}>{ritual}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.formats && (
                    <div className="service-formats">
                      <h4>{language === 'ro' ? 'Formatele posibile includ:' : 'Форматов может быть несколько:'}</h4>
                      <ul>
                        {service.formats.map((format, idx) => (
                          <li key={idx}>{format}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.note && <p className="service-note">{service.note}</p>}
                  {service.availability && <p className="service-availability"><strong>{service.availability}</strong></p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FionGoldenSection2

