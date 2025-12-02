import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const FionGoldenSection3 = () => {
  const { language } = useLanguage()

  const content = {
    ro: {
      title: 'Lista serviciilor',
      services: [
        {
          id: 1,
          title: 'Consultații și diagnosticări',
          items: [
            'Consultații Tarot de orice complexitate (relații, sentimente, infidelități, alegeri, destin, finanțe, carieră, sănătate, situații de viață, cale spirituală, prognoze)',
            'Diagnosticare prin channeling a Matricei Personale (analiză generală a destinului, viitorului și liniilor posibile de evoluție, citire profundă a drumului sufletului)',
            'Numerologică – Matricea Destinului (potențial personal și sarcini de viață, matricea compatibilității partenerilor, matricea copilului, prognoza pe un an)',
            'Diagnosticarea stării energetice și a perioadei de viață',
            'Diagnosticul canalelor financiare și al blocajelor de abundență'
          ]
        },
        {
          id: 2,
          title: 'Rituale și lucrări energetice',
          items: [
            'Rituale de purificare și eliberare',
            'Rituale de protecție',
            'Rituale pentru bani și resurse',
            'Rituale de trecere',
            'Rituale de deschidere a drumurilor',
            'Eliminarea blocajelor energetice și ancestrale',
            'Resetare energetică',
            'Lucrul cu nodurile karmice'
          ]
        },
        {
          id: 3,
          title: 'Lucrul cu spațiul și cu afacerea',
          items: [
            'Purificarea și armonizarea locuinței',
            'Protejarea și ajustarea spațiilor de business',
            'Susținere energetică pentru afaceri și proiecte',
            'Reglarea fluxurilor financiare ale companiei',
            'Formarea protecției energetice a încăperilor'
          ]
        },
        {
          id: 4,
          title: 'Crearea artefactelor sacre de putere',
          items: [
            'Amulete și talismane personalizate',
            'Lumânări programate pentru un anumit scop',
            'Obiecte și haine consacrate',
            'Simboluri sacre încărcate energetic și instrumente magice',
            'Amestecuri din plante și tisane',
            'Cristale și purtători energetici'
          ]
        },
        {
          id: 5,
          title: 'Învățare spirituală și însoțire',
          items: [
            'Mentorat spiritual individual',
            'Învățare în grupuri mici',
            'Cursuri de magie ritualică și lucrul cu energiile',
            'Programe educaționale autor',
            'Inițieri și însoțire în procesul de transformare'
          ]
        },
        {
          id: 6,
          title: 'Retreaturi',
          items: [
            'Retreaturi spirituale',
            'Călătorii către locuri de putere',
            'Practici în spații sacre și energetice'
          ]
        },
        {
          id: 7,
          title: 'Direcții suplimentare',
          items: [
            'Crearea altarului personal de protecție',
            'Însoțire energetică în perioade de criză',
            'Practici spirituale individuale la cerere',
            'Lucrul cu stima de sine și forța interioară',
            'Însoțire în perioadele de transformare'
          ]
        }
      ]
    },
    ru: {
      title: 'СПИСОК УСЛУГ',
      services: [
        {
          id: 1,
          title: 'Консультации и диагностики',
          items: [
            'Консультация Таро любой сложности (отношения, чувства, измены, выбор, предназначение, финансы, карьера, здоровье, жизненные ситуации, духовный путь, прогнозы)',
            'Ченнелинг-диагностика матрицы человека (общий анализ судьбы, будущего и возможных исходов, глубинное считывание пути души)',
            'Нумерологическая Матрица Судьбы - (личный потенциал и жизненные задачи, матрица совместимости партнеров, детская матрица, прогноз на год по дате рождения)',
            'Диагностика энергетического состояния и жизненного периода',
            'Диагностика денежных каналов и блоков'
          ]
        },
        {
          id: 2,
          title: 'Ритуалы и энергетическая работа',
          items: [
            'Ритуалы очищения и освобождения',
            'Ритуалы защиты',
            'Денежные и ресурсные ритуалы',
            'Переходные ритуалы',
            'Ритуалы открытия путей',
            'Снятие энергетических и родовых блоков',
            'Энергетическая перезагрузка',
            'Работа с кармическими узлами'
          ]
        },
        {
          id: 3,
          title: 'Работа с пространством и бизнесом',
          items: [
            'Очищение и гармонизация дома',
            'Защита и настройка бизнес-пространств',
            'Энергетическая поддержка бизнеса',
            'Настройка денежных потоков компании',
            'Формирование энергетической защиты помещения'
          ]
        },
        {
          id: 4,
          title: 'Создание сакральных предметов силы',
          items: [
            'Индивидуальные амулеты и обереги',
            'Программные свечи под запрос',
            'Заговоренные предметы и одежда',
            'Заряженные сакральные символы и инструменты для магических практик',
            'Травяные сборы и чайные тизаны',
            'Энергетические кристаллы и носители'
          ]
        },
        {
          id: 5,
          title: 'Духовное обучение и сопровождение',
          items: [
            'Индивидуальное духовное наставничество',
            'Групповое обучение в малых группах',
            'Обучение обрядовой магии и работе с энергиями',
            'Авторские обучающие программы',
            'Инициации и сопровождение в трансформации'
          ]
        },
        {
          id: 6,
          title: 'Ретриты',
          items: [
            'Ретриты',
            'Поездки к местам силы',
            'Практики в сакральных пространствах'
          ]
        },
        {
          id: 7,
          title: 'Дополнительные направления',
          items: [
            'Составление персонального защитного алтаря',
            'Энергетическое сопровождение в кризисные периоды',
            'Индивидуальные духовные практики под запрос',
            'Работа с самоценностью и внутренней опорой',
            'Сопровождение в периодах трансформации'
          ]
        }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <div className="fion-golden-section-3">
      <div className="container">

        {/* Section Title */}
        <div className="section-header">
          <div className="section-title">
            <h2 className="wow fadeInUp">{currentContent.title}</h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {currentContent.services.map((service, index) => (
            <div
              key={service.id}
              className="service-category wow fadeInUp"
              data-wow-delay={`${index * 0.1}s`}
            >
              <div className="service-category-header">
                <div className="service-category-number">{service.id}</div>
                <h3>{service.title}</h3>
              </div>
              <ul className="service-category-items">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FionGoldenSection3

