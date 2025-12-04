import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Services = () => {
  const { t } = useLanguage()
  return (
    <div 
      id="services" 
      className="our-services"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="services-content">
              {/* Introduction */}
              <div className="services-intro">
                <p className="services-intro-text">
                  {t('services.intro1')}
                </p>
                <p className="services-intro-text">
                  {t('services.intro2')}
                </p>
                <p className="services-intro-text">
                  {t('services.intro3')}
                </p>
              </div>

              {/* Мой путь */}
              <div className="services-section">
                <h2 className="services-section-title">{t('services.myPath')}</h2>
                <p>
                  {t('services.myPath1')}
                </p>
                <p>
                  {t('services.myPath2')}
                </p>
                <p>
                  {t('services.myPath3')}
                </p>
              </div>

              {/* С чем я работаю */}
              <div className="services-section">
                <h2 className="services-section-title">{t('services.whatIWorkWith')}</h2>
                <p>
                  {t('services.whatIWorkWithDesc')}
                </p>
              </div>

              {/* Я работаю с */}
              <div className="services-section">
                <h3 className="services-subsection-title">{t('services.iWorkWith')}</h3>
                <ul className="services-list">
                  <li>Таро и духовной навигацией через карты</li>
                  <li>Чтением матрицы человека в потоке ченнелинга</li>
                  <li>Раскрытием жизненного пути и предназначения</li>
                  <li>Энергоблоками и кармическими узлами</li>
                  <li>Очищением человека и любого пространства</li>
                  <li>Помощью в росте и развитии бизнес-структур</li>
                  <li>Налаживанием гармонии с собой, миром и партнером</li>
                  <li>Восстановлением энергетического баланса в отношениях</li>
                  <li>Работой с денежными потоками и блоками изобилия</li>
                  <li>Возвращением того, что положено по судьбе</li>
                  <li>Освобождением от страхов, тревог, родовых программ</li>
                  <li>Диагностикой энергетического поля</li>
                  <li>Защитой и восстановлением ауры через практику работы с пятью стихиями</li>
                </ul>
              </div>

              {/* Также я практикую */}
              <div className="services-section">
                <h3 className="services-subsection-title">{t('services.iAlsoPractice')}</h3>
                <ul className="services-list">
                  <li>Чистку и восстановление через поющие чаши</li>
                  <li>Звукотерапию, энерготерапию</li>
                  <li>Медитативные сессии глубокого погружения</li>
                  <li>Энергетическое перепрограммирование</li>
                  <li>Создание индивидуальных защитных амулетов</li>
                  <li>Работу с кристаллами, свечами и сакральными символами</li>
                  <li>Обрядовые ритуальные практики на открытие путей</li>
                  <li>Переходные ритуалы и энергетические перезагрузки, раскрытие высшего сознания человека посредством ввода в состояние гнозиса</li>
                </ul>
              </div>

              {/* Помимо этого */}
              <div className="services-section">
                <h3 className="services-subsection-title">{t('services.besidesThis')}</h3>
                <ul className="services-list">
                  <li>Изготовления амулетов, обережных и персональных</li>
                  <li>Создания программных свечей</li>
                  <li>Сбора и подготовки трав, чайных тизанов и целительных сборов</li>
                  <li>Заговоров и настройка предметов и одежды</li>
                  <li>Индивидуальных практик и ритуалов</li>
                  <li>Помощи в создании персонального алтаря защиты</li>
                  <li>Работы с коренными подсознательными родовыми блоками</li>
                </ul>
                <p>
                  {t('services.andMore')}
                </p>
                <p>
                  {t('services.training')}
                </p>
              </div>

              {/* Моя миссия */}
              <div className="services-section">
                <h2 className="services-section-title">{t('services.myMission')}</h2>
                <p>
                  {t('services.mission1')}
                </p>
                <p>
                  {t('services.mission2')}
                </p>
                <p>
                  {t('services.mission3')}
                </p>
                <p>
                  {t('services.mission4')}
                </p>
                <p className="services-closing">
                  {t('services.closing')}
                </p>
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

export default Services
