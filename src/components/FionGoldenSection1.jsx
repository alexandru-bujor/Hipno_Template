import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { getAssetPath } from '../utils/assets'

const FionGoldenSection1 = () => {
  const { language } = useLanguage()

  const content = {
    ro: {
      title: 'Fion Golden',
      subtitle: 'ezoterist, mentor spiritual, parapsiholog, energopractician',
      greeting: 'Te salut, om drag.',
      greetingText: 'Dacă citești aceste rânduri, înseamnă că întâlnirea noastră deja s-a produs. Și crede-mă, în lumea energiilor, întâmplările nu există.',
      introduction: 'Numele meu este Fion Golden. Sunt parapsiholog, ezoterist și practicant al energiilor subtile. Drumul meu este un drum al slujirii lui Dumnezeu în forma Sa umană – sufletul omului, natura lui adevărată, esența lui divină.',
      myPath: {
        title: 'Drumul meu',
        text: 'Călătoria mea spirituală a început printr-un studiu profund al religiilor și printr-o imersiune autentică în practicile creștine de vindecare. Mult timp am cercetat canoanele spirituale, am lucrat cu rugăciuni, cu energia credinței și cu forța intenției sufletului.\n\nÎn paralel, am intrat în contact cu vechile practici de origine rurală – magie străveche, ritualuri, cunoaștere păstrată în taina satelor și transmisă prin generații, ajungând și la mine prin linia strămoșilor.\n\nÎn urma unor evenimente semnificative din viața mea, s-a deschis un canal – un canal al channeling-ului și al comunicării directe cu forțele superioare.\n\nAcest moment a schimbat totul. Din acea zi și până acum, de peste 20 de ani, sunt un punte între lumi, un traducător al planurilor subtile în limbajul înțeles de sufletul omenesc.\n\nMult timp am lucrat exclusiv cu vindecarea energetică și purificările subtile. Dar odată cu trecerea anilor, aria mea de lucru s-a extins, iar astăzi sprijin oamenii în cele mai diverse situații ale vieții.'
      },
      whatIWorkWith: {
        title: 'Cu ce lucrez?',
        subtitle: 'În calitate de mentor spiritual și ezoterist, însoțesc omul în procesul lui de căutare, regăsire și revenire la sine.',
        description: 'Munca mea nu este doar ezoterism. Este interacțiune cu energia, cu destinul și cu natura profundă a ființei. Este ajutor – pe toate nivelurile accesibile mie, de la cel uman până la cel energetic.',
        services: [
          'Tarotul și navigarea spirituală prin cărți',
          'Citirea matricei personale în fluxul channeling-ului',
          'Dezvăluirea drumului vieții și a menirii',
          'Eliberarea energoblocajelor și a nodurilor karmice',
          'Purificarea persoanei și a oricărui spațiu',
          'Sprijinirea creșterii și dezvoltării structurilor de business',
          'Aducerea armoniei cu sine, cu lumea și cu partenerul',
          'Restabilirea echilibrului energetic în relații',
          'Lucrul cu fluxurile financiare și blocajele abundenței',
          'Revenirea la ceea ce îți este menit prin destin',
          'Eliberarea de frici, anxietăți și programe ancestrale',
          'Diagnosticarea câmpului energetic',
          'Protecția și refacerea aurei prin practica celor cinci elemente'
        ],
        practices: [
          'Curățare și restaurare energetică prin boluri tibetane',
          'Terapie prin sunet și energoterapie',
          'Sesiuni meditative de profundă imersiune',
          'Reprogramare energetică',
          'Crearea de amulete personalizate de protecție',
          'Lucrul cu cristale, lumânări și simboluri sacre',
          'Ritualuri și practici ceremoniale pentru deschiderea drumurilor',
          'Ritualuri de trecere, resetări energetice și deschiderea conștiinței superioare prin starea de gnoză'
        ],
        additional: [
          'Confecționarea amuletelor și talismanelor personalizate',
          'Crearea lumânărilor programate',
          'Colectarea și pregătirea plantelor, a tisanelor și a amestecurilor vindecătoare',
          'Încantări, ritualuri și consacrarea obiectelor sau hainelor',
          'Practicile și ritualurile individuale adaptate nevoilor tale',
          'Amenajarea unui altar personal de protecție',
          'Lucrul cu blocaje subconștiente și programe ancestrale',
          '… și multe altele.'
        ],
        additionalNote: 'Organizez inițieri spirituale, programe de mentorat, cursuri individuale, precum și călătorii către locuri de putere și retreaturi, unde omul își poate reface energia, se poate auzi pe sine și își poate reaminti adevărata natură.'
      },
      myMission: {
        title: 'Misiunea mea',
        text: 'Sunt aici pentru a te ajuta să îți faci drumul mai ușor, mai curat și mai fericit. Pentru că există un adevăr simplu, pe care îl uităm adesea: nu am venit în această lume pentru suferință, pentru luptă continuă sau pentru supraviețuire.\n\nAm venit aici pentru a trăi o viață plină, conștientă și fericită. Dacă ai ajuns pe această pagină – nu este o întâmplare.\n\nSoarta te-a adus aici pentru că sufletul tău este pregătit pentru o nouă etapă. Mă bucur de prezența ta, de energia ta și de drumul tău.\n\nUșile mele sunt întotdeauna deschise. Întâlnirea noastră nu este întâmplătoare. Iar dacă simți un ecou interior, înseamnă că legătura noastră deja s-a activat.'
      }
    },
    ru: {
      title: 'Фион Голден',
      subtitle: 'эзотерик, духовный наставник, парапсихолог, энергопрактик',
      greeting: 'Приветствую тебя, мой дорогой человек.',
      greetingText: 'Если ты читаешь эти строки - значит, наша встреча уже произошла. И, поверь, в мире энергий случайностей не бывает.',
      introduction: 'Меня зовут Фион Голден. Я - парапсихолог, эзотерик и энергопрактик. Мой путь - это путь служения Богу в человеческом обличии, его душе, его истинной природе.',
      myPath: {
        title: 'Мой путь',
        text: 'Мое духовное становление началось с глубокого изучения религий и погружения в христианское целительство. Я долгое время исследовал духовные каноны, работал с молитвами, энергией веры и силой намерения души. Параллельно я соприкасался с древними деревенскими практиками, веретничеством, обрядовой и природной магией, сохранившейся через поколения и переданной мне от рода.\n\nВследствие значимых событий в моей жизни у меня открылся канал - канал ченнелинга и прямого общения с высшими силами. Этот момент изменил все в моей жизни. С того самого дня и вот уже 20 лет я являюсь проводником, своеобразным переводчиком тонких миров на язык, понятный человеческой душе.\n\nДолгие годы я занимался исключительно целительством и энергетическими чистками. Но со временем спектр моей работы расширился, и сегодня я помогаю людям в самых разных жизненных ситуациях.'
      },
      whatIWorkWith: {
        title: 'С чем я работаю',
        subtitle: 'Как духовный наставник и эзотерик, я сопровождаю человека в его поиске и возвращении к себе.',
        description: 'Моя работа - это не просто эзотерика. Это взаимодействие с энергией, судьбой и глубинной природой личности. Это помощь - на всех доступных мне уровнях, начиная от человеческого и заканчивая энергетическим.',
        services: [
          'Таро и духовной навигацией через карты',
          'Чтением матрицы человека в потоке ченнелинга',
          'Раскрытием жизненного пути и предназначения',
          'Энергоблоками и кармическими узлами',
          'Очищением человека и любого пространства',
          'Помощью в росте и развитии бизнес-структур',
          'Налаживанием гармонии с собой, миром и партнером',
          'Восстановлением энергетического баланса в отношениях',
          'Работой с денежными потоками и блоками изобилия',
          'Возвращением того, что положено по судьбе',
          'Освобождением от страхов, тревог, родовых программ',
          'Диагностикой энергетического поля',
          'Защитой и восстановлением ауры через практику работы с пятью стихиями'
        ],
        practices: [
          'Чистку и восстановление через поющие чаши',
          'Звукотерапию, энерготерапию',
          'Медитативные сессии глубокого погружения',
          'Энергетическое перепрограммирование',
          'Создание индивидуальных защитных амулетов',
          'Работу с кристаллами, свечами и сакральными символами',
          'Обрядовые ритуальные практики на открытие путей',
          'Переходные ритуалы и энергетические перезагрузки, раскрытие высшего сознания человека посредством ввода в состояние гнозиса'
        ],
        additional: [
          'Изготовления амулетов, обережных и персональных',
          'Создания программных свечей',
          'Сбора и подготовки трав, чайных тизанов и целительных сборов',
          'Заговоров и настройка предметов и одежды',
          'Индивидуальных практик и ритуалов',
          'Помощи в создании персонального алтаря защиты',
          'Работы с коренными подсознательными родовыми блоками',
          '… и многое другое.'
        ],
        additionalNote: 'Провожу индивидуальные обучения, духовные инициации и наставнические программы, а также организовываю поездки к местам силы и ретриты, где человек может восстановить свою энергию, услышать себя и вспомнить свое истинное Я.'
      },
      myMission: {
        title: 'Моя миссия',
        text: 'Я здесь, чтобы помочь тебе сделать твой путь легче, чище и счастливее.\n\nПотому что есть простая истина, о которой мы часто забываем: мы пришли в этот мир не для страданий, не для бесконечной борьбы и не для выживания. Мы пришли сюда, чтобы жить наполненной, осознанной и счастливой жизнью.\n\nЕсли ты оказался на моем сайте - это не случайность.\n\nСудьба привела тебя сюда, потому что твоя душа готова к новому этапу. Я рад тебе, рад твоей энергии и твоему пути.\n\nМои двери всегда открыты.\n\nМы встретились неслучайно.\n\nИ если ты чувствуешь внутренний отклик - значит, наше взаимодействие уже началось.'
      }
    }
  }

  const currentContent = content[language]

  return (
    <div className="fion-golden-section-1">
      <div className="container">

        {/* Header Section */}
        <div className="section-header">
          <div className="section-title">
            <h3 className="wow fadeInUp">{currentContent.title}</h3>
            <h2 className="text-anime-style-2 wow fadeInUp" data-wow-delay="0.1s">
              {currentContent.subtitle}
            </h2>
          </div>
        </div>

        {/* Greeting Section */}
        <div className="greeting-section wow fadeInUp" data-wow-delay="0.2s">
          <h4>{currentContent.greeting}</h4>
          <p>{currentContent.greetingText}</p>
          <p className="introduction">{currentContent.introduction}</p>
        </div>

        {/* My Path Section */}
        <div className="my-path-section">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-content wow fadeInUp" data-wow-delay="0.3s">
                <h3 className="section-subtitle">{currentContent.myPath.title}</h3>
                <div className="text-content">
                  {currentContent.myPath.text.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-image wow fadeInUp" data-wow-delay="0.4s">
                <figure className="image-anime">
                  <img
                    src={getAssetPath('assets/images/hero-images/AdobeStock_1013238345.jpeg')}
                    alt="Fion Golden"
                  />
                  <div className="image-gradient-overlay"></div>
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* What I Work With Section */}
        <div className="what-i-work-with-section">
          <div className="section-title">
            <h3 className="wow fadeInUp">{currentContent.whatIWorkWith.title}</h3>
            <p className="wow fadeInUp" data-wow-delay="0.1s">
              {currentContent.whatIWorkWith.subtitle}
            </p>
            <p className="wow fadeInUp" data-wow-delay="0.2s">
              {currentContent.whatIWorkWith.description}
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="work-item wow fadeInUp" data-wow-delay="0.3s">
                <h4>{language === 'ro' ? 'Lucrez cu:' : 'Я работаю с:'}</h4>
                <ul>
                  {currentContent.whatIWorkWith.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="work-item wow fadeInUp" data-wow-delay="0.4s">
                <h4>{language === 'ro' ? 'De asemenea, practic:' : 'Также я практикую:'}</h4>
                <ul>
                  {currentContent.whatIWorkWith.practices.map((practice, index) => (
                    <li key={index}>{practice}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="additional-practices wow fadeInUp" data-wow-delay="0.5s">
            <h4>{language === 'ro' ? 'Pe lângă acestea, îți pot fi de folos în:' : 'Помимо этого, я могу служить тебе в практике:'}</h4>
            <ul>
              {currentContent.whatIWorkWith.additional.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="additional-note">{currentContent.whatIWorkWith.additionalNote}</p>
          </div>
        </div>

        {/* My Mission Section */}
        <div className="my-mission-section">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-image wow fadeInUp" data-wow-delay="0.3s">
                <figure className="image-anime">
                  <img
                    src={getAssetPath('assets/images/hero-images/AdobeStock_1649580010.jpeg')}
                    alt="Mission"
                  />
                  <div className="image-gradient-overlay"></div>
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-content wow fadeInUp" data-wow-delay="0.4s">
                <h3 className="section-subtitle">{currentContent.myMission.title}</h3>
                <div className="text-content">
                  {currentContent.myMission.text.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FionGoldenSection1

