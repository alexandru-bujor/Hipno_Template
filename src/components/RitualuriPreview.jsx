import React from 'react'
import { Link } from 'react-router-dom'
import CollapsibleList from './CollapsibleList'
import { useLanguage } from '../contexts/LanguageContext'

const RitualuriPreview = () => {
  const { t } = useLanguage()
  
  return (
    <div id="ritualuri" className="our-services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="services-content">
              {/* Main Title */}
              <div className="services-section services-main-title">
                <h2 className="services-section-title services-title-main">
                  {t('ritualuri.title')}
                </h2>
              </div>

              {/* Service 1 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="1">Консультации и диагностики</h2>
                <CollapsibleList
                  items={[
                    'Консультация Таро любой сложности (отношения, чувства, измены, выбор, предназначение, финансы, карьера, здоровье, жизненные ситуации, духовный путь, прогнозы)',
                    'Ченнелинг-диагностика матрицы человека (общий анализ судьбы, будущего и возможных исходов, глубинное считывание пути души)',
                    'Нумерологическая Матрица Судьбы - (личный потенциал и жизненные задачи, матрица совместимости партнеров, детская матрица, прогноз на год по дате рождения)',
                    'Диагностика энергетического состояния и жизненного периода',
                    'Диагностика денежных каналов и блоков'
                  ]}
                  initialVisible={3}
                  listStyle="default"
                />
              </div>

              {/* Service 2 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="2">Ритуалы и энергетическая работа</h2>
                <CollapsibleList
                  items={[
                    'Ритуалы очищения и освобождения',
                    'Ритуалы защиты',
                    'Денежные и ресурсные ритуалы',
                    'Переходные ритуалы',
                    'Ритуалы открытия путей',
                    'Снятие энергетических и родовых блоков',
                    'Энергетическая перезагрузка',
                    'Работа с кармическими узлами'
                  ]}
                  initialVisible={4}
                  listStyle="cards"
                />
              </div>

              {/* Service 3 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="3">Работа с пространством и бизнесом</h2>
                <CollapsibleList
                  items={[
                    'Очищение и гармонизация дома',
                    'Защита и настройка бизнес-пространств',
                    'Энергетическая поддержка бизнеса',
                    'Настройка денежных потоков компании',
                    'Формирование энергетической защиты помещения'
                  ]}
                  initialVisible={3}
                  listStyle="cards"
                />
              </div>

              {/* Service 4 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="4">Создание сакральных предметов силы</h2>
                <CollapsibleList
                  items={[
                    'Индивидуальные амулеты и обереги',
                    'Программные свечи под запрос',
                    'Заговоренные предметы и одежда',
                    'Заряженные сакральные символы и инструменты для магических практик',
                    'Травяные сборы и чайные тизаны',
                    'Энергетические кристаллы и носители'
                  ]}
                  initialVisible={3}
                  listStyle="grid"
                />
              </div>

              {/* Service 5 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="5">Духовное обучение и сопровождение</h2>
                <CollapsibleList
                  items={[
                    'Индивидуальное духовное наставничество',
                    'Групповое обучение в малых группах',
                    'Обучение обрядовой магии и работе с энергиями',
                    'Авторские обучающие программы',
                    'Инициации и сопровождение в трансформации'
                  ]}
                  initialVisible={3}
                  listStyle="minimal"
                />
              </div>

              {/* Service 6 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="6">Ретриты</h2>
                <CollapsibleList
                  items={[
                    'Ретриты',
                    'Поездки к местам силы',
                    'Практики в сакральных пространствах'
                  ]}
                  initialVisible={3}
                  listStyle="grid"
                  showSeeMore={false}
                />
              </div>

              {/* Service 7 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="7">Дополнительные направления</h2>
                <CollapsibleList
                  items={[
                    'Составление персонального защитного алтаря',
                    'Энергетическое сопровождение в кризисные периоды',
                    'Индивидуальные духовные практики под запрос',
                    'Работа с самоценностью и внутренней опорой',
                    'Сопровождение в периодах трансформации'
                  ]}
                  initialVisible={3}
                  listStyle="default"
                />
              </div>

              {/* CTA Button */}
              <div className="services-cta">
                <Link to="/programare" className="btn-default">
                  {t('buttons.bookConsultation')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RitualuriPreview
