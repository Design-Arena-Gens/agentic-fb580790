'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Header */}
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <span className={styles.logoText}>PHYCOMANIA</span>
            </div>
            <ul className={styles.navLinks}>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#produits">Produits</a></li>
              <li><a href="#bienfaits">Bienfaits</a></li>
              <li><a href="#apropos">À Propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className={styles.navCta}>
              <a href="#boutique" className="btn btn-primary">Boutique</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroParticles}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Les Gardiens de la Vitalité
            </h1>
            <p className={styles.heroSubtitle}>
              Découvrez la meilleure phycocyanine au monde
            </p>
            <p className={styles.heroDescription}>
              Chloro B 5K, 10K et Rhin Blue - Des produits d'exception pour votre bien-être
            </p>
            <div className={styles.heroButtons}>
              <a href="#produits" className="btn btn-primary">Découvrir nos produits</a>
              <a href="#bienfaits" className="btn btn-secondary">En savoir plus</a>
            </div>
          </div>
        </div>
        <div className={styles.heroWave}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section id="produits" className={styles.products}>
        <div className="container">
          <h2 className="section-title">Nos Produits Premium</h2>
          <p className="section-subtitle">
            Une gamme exclusive de phycocyanine de qualité supérieure
          </p>
          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>💎</div>
              <h3>Chloro B 5K</h3>
              <p>Concentration optimale de phycocyanine pour un usage quotidien. Idéal pour renforcer votre système immunitaire.</p>
              <ul className={styles.productFeatures}>
                <li>✓ 5000mg de phycocyanine</li>
                <li>✓ 100% naturel</li>
                <li>✓ Sans additifs</li>
              </ul>
              <a href="#boutique" className="btn btn-primary">Commander</a>
            </div>
            <div className={`${styles.productCard} ${styles.featured}`}>
              <div className={styles.badge}>Populaire</div>
              <div className={styles.productIcon}>⭐</div>
              <h3>Chloro B 10K</h3>
              <p>Formule concentrée premium pour des résultats exceptionnels. Notre produit phare recommandé par les experts.</p>
              <ul className={styles.productFeatures}>
                <li>✓ 10000mg de phycocyanine</li>
                <li>✓ Haute biodisponibilité</li>
                <li>✓ Qualité pharmaceutique</li>
              </ul>
              <a href="#boutique" className="btn btn-primary">Commander</a>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>🌊</div>
              <h3>Rhin Blue</h3>
              <p>Innovation exclusive pour maximiser les bienfaits de la phycocyanine. Technologie de pointe pour une absorption optimale.</p>
              <ul className={styles.productFeatures}>
                <li>✓ Formule brevetée</li>
                <li>✓ Absorption rapide</li>
                <li>✓ Résultats visibles</li>
              </ul>
              <a href="#boutique" className="btn btn-primary">Commander</a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="bienfaits" className={styles.benefits}>
        <div className="container">
          <h2 className="section-title">Les Bienfaits de la Phycocyanine</h2>
          <p className="section-subtitle">
            Un super-aliment aux propriétés exceptionnelles
          </p>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🛡️</div>
              <h3>Antioxydant Puissant</h3>
              <p>Protection cellulaire contre le stress oxydatif et les radicaux libres</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>💪</div>
              <h3>Renforce l'Immunité</h3>
              <p>Stimule naturellement vos défenses immunitaires</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🔋</div>
              <h3>Boost d'Énergie</h3>
              <p>Augmente votre vitalité et réduit la fatigue</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🧠</div>
              <h3>Neuroprotection</h3>
              <p>Soutient la santé cognitive et la concentration</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>❤️</div>
              <h3>Santé Cardiovasculaire</h3>
              <p>Favorise la circulation et la santé du cœur</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🌿</div>
              <h3>Anti-inflammatoire</h3>
              <p>Réduit l'inflammation de manière naturelle</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className={styles.about}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className="section-title" style={{textAlign: 'left'}}>
                Pourquoi PHYCOMANIA ?
              </h2>
              <p>
                Chez PHYCOMANIA, nous sommes passionnés par la puissance de la nature et son potentiel à améliorer votre bien-être. Notre mission est de vous offrir la phycocyanine de la plus haute qualité au monde.
              </p>
              <p>
                Nos produits sont le résultat d'années de recherche et de développement, combinant les dernières avancées scientifiques avec les bienfaits ancestraux de la spiruline.
              </p>
              <div className={styles.aboutStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Naturel</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>10+</div>
                  <div className={styles.statLabel}>Années d'Expertise</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>50K+</div>
                  <div className={styles.statLabel}>Clients Satisfaits</div>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <div className={styles.aboutImagePlaceholder}>
                <div className={styles.aboutImageContent}>
                  🌊
                  <p>Phycocyanine de Qualité Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className="container">
          <h2 className="section-title">Ce Que Disent Nos Clients</h2>
          <p className="section-subtitle">
            Des milliers de personnes ont déjà adopté PHYCOMANIA
          </p>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.testimonialText}>
                "Chloro B 10K a transformé ma vie ! Plus d'énergie, meilleur sommeil, et je me sens vraiment en meilleure santé."
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Marie L.</strong>
                <span>Paris, France</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.testimonialText}>
                "J'utilise Rhin Blue depuis 6 mois et les résultats sont incroyables. Mon système immunitaire n'a jamais été aussi fort."
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Jean-Pierre M.</strong>
                <span>Lyon, France</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.testimonialText}>
                "La qualité PHYCOMANIA est incomparable. Je recommande vivement à tous ceux qui cherchent à améliorer leur bien-être."
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Sophie D.</strong>
                <span>Marseille, France</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Prêt à Commencer Votre Voyage Vers la Vitalité ?</h2>
            <p>Rejoignez des milliers de personnes qui ont déjà choisi PHYCOMANIA</p>
            <a href="#boutique" className="btn btn-primary">Découvrir la Boutique</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className="container">
          <h2 className="section-title">Contactez-Nous</h2>
          <p className="section-subtitle">
            Une question ? Notre équipe est là pour vous aider
          </p>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📧</div>
                <h3>Email</h3>
                <p>contact@phycomania.com</p>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📱</div>
                <h3>Téléphone</h3>
                <p>+33 1 23 45 67 89</p>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <h3>Adresse</h3>
                <p>Paris, France</p>
              </div>
            </div>
            <div className={styles.contactForm}>
              <form>
                <input type="text" placeholder="Votre nom" required />
                <input type="email" placeholder="Votre email" required />
                <textarea placeholder="Votre message" rows={5} required></textarea>
                <button type="submit" className="btn btn-primary">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>PHYCOMANIA</h3>
              <p>Les Gardiens de la Vitalité</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Liens Rapides</h4>
              <ul>
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#produits">Produits</a></li>
                <li><a href="#bienfaits">Bienfaits</a></li>
                <li><a href="#apropos">À Propos</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4>Informations</h4>
              <ul>
                <li><a href="#livraison">Livraison</a></li>
                <li><a href="#retours">Retours</a></li>
                <li><a href="#cgv">CGV</a></li>
                <li><a href="#confidentialite">Confidentialité</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4>Newsletter</h4>
              <p>Inscrivez-vous pour recevoir nos offres exclusives</p>
              <form className={styles.newsletter}>
                <input type="email" placeholder="Votre email" />
                <button type="submit" className="btn btn-primary">S'inscrire</button>
              </form>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 PHYCOMANIA s.r.o. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
