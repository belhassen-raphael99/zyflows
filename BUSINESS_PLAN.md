# Business Plan — Logiciel B2B de Détection d'Opportunités d'IA

**Nom de code du projet :** AIScout (placeholder)
**Date :** Mai 2026
**Version :** 1.0

---

## 1. Résumé Exécutif

### 1.1 Vision
Devenir la plateforme de référence permettant aux entreprises de tous secteurs d'identifier, prioriser et déployer les opportunités d'intelligence artificielle au sein de leurs processus métiers, sans dépendre d'un cabinet de conseil onéreux.

### 1.2 Mission
Démocratiser l'accès à l'IA en entreprise en fournissant un diagnostic automatisé, continu et chiffré des cas d'usage IA exploitables, accompagné d'une feuille de route d'implémentation actionnable.

### 1.3 Proposition de valeur
- **Audit IA en 7 jours** vs 3 à 6 mois pour un cabinet de conseil
- **Coût divisé par 10** par rapport à un audit traditionnel (Big 4, BCG, McKinsey)
- **ROI chiffré et priorisé** pour chaque opportunité détectée
- **Surveillance continue** des nouveaux cas d'usage à mesure que l'entreprise évolue
- **Indépendance technologique** : recommandations agnostiques (OpenAI, Anthropic, Mistral, open source)

### 1.4 Marché cible
- ETI et grandes PME européennes (250 à 5 000 salariés)
- Secteurs prioritaires : services financiers, industrie, retail, santé, services professionnels
- Marché adressable (TAM) Europe : **~38 Md€** (services de conseil IA + plateformes d'évaluation)
- Marché accessible (SAM) phase 1 (France + DACH + UK) : **~6,5 Md€**
- Marché captable (SOM) à 5 ans : **120 M€**

### 1.5 Modèle économique
SaaS B2B en abonnement annuel (à partir de 18 000 €/an) + services d'accompagnement à l'implémentation (15 % du CA en année 3).

### 1.6 Besoin de financement
- **Seed (M0–M18) :** 1,8 M€
- **Série A (M18–M42) :** 8 M€
- Objectif ARR à 36 mois : **6,5 M€**
- Break-even opérationnel : Mois 42

---

## 2. Problème & Solution

### 2.1 Problème
Selon les études Gartner et BCG (2024–2025) :
- **78 %** des dirigeants veulent investir dans l'IA mais ne savent pas par où commencer
- **42 %** des projets IA sont abandonnés avant la production faute de cadrage métier
- **Coût moyen d'un audit IA traditionnel :** 120 à 450 k€, durée 3 à 6 mois
- **Asymétrie d'expertise :** les directions métiers ignorent ce qui est faisable techniquement, les DSI ignorent ce qui crée de la valeur métier

### 2.2 Solution
Un logiciel SaaS qui :

1. **Cartographie** automatiquement les processus métiers de l'entreprise (via connecteurs SIRH, ERP, CRM, ITSM, outils collaboratifs)
2. **Détecte** les tâches éligibles à l'IA selon une taxonomie propriétaire (10 familles d'usage : NLP, vision, prédiction, génération, automatisation, etc.)
3. **Quantifie** l'impact potentiel (gain de temps, économies, qualité, revenus) via un modèle d'estimation calibré sur une base de 800+ projets benchmarkés
4. **Priorise** par matrice impact/faisabilité, intégrant contraintes RGPD, AI Act et maturité data
5. **Génère** une feuille de route 6/12/24 mois avec specs fonctionnelles et architectures de référence
6. **Suit** l'exécution et recalibre les opportunités en continu

### 2.3 Différenciation
| Concurrent | Limite | Notre avantage |
|---|---|---|
| Cabinets de conseil (BCG X, Accenture) | Coût, durée, dépendance | 10x moins cher, 10x plus rapide, autonome |
| Plateformes MLOps (Dataiku, DataRobot) | Outil pour data scientists, pas de cadrage métier | Approche top-down métier-first |
| Outils d'automatisation (UiPath, Make) | Ne détectent que l'automatisation, pas l'IA générative ou prédictive | Couverture full IA |
| AI consultants freelances | Non scalable, qualité variable | Méthodologie standardisée et continue |

---

## 3. Produit

### 3.1 Architecture fonctionnelle

**Module 1 — Connecteurs & Ingestion**
- 40+ connecteurs natifs (Salesforce, HubSpot, SAP, Workday, ServiceNow, Notion, Slack, M365, Google Workspace, Jira, Zendesk…)
- Import manuel (fiches de poste, cartographies de processus BPMN, comptes rendus d'entretiens)
- API REST pour systèmes propriétaires

**Module 2 — Cartographie processus**
- Reconstruction automatique des workflows via analyse des logs applicatifs et métadonnées
- Entretiens guidés assistés par IA (chatbot d'audit) pour combler les zones d'ombre
- Visualisation processus (chaîne de valeur, RACI, volumétrie, temps passé)

**Module 3 — Moteur de détection**
- Bibliothèque propriétaire de 200+ patterns d'opportunités IA classifiés par fonction (RH, finance, marketing, ops, IT, juridique, R&D)
- Matching sémantique tâche/pattern via LLM fine-tuné
- Score de confiance et niveau de maturité technologique (TRL)

**Module 4 — Quantification ROI**
- Modèle d'estimation calibré : économies, gain de temps, augmentation CA, réduction risque
- Hypothèses paramétrables, intervalles de confiance
- Comparaison avec benchmarks sectoriels anonymisés

**Module 5 — Feuille de route & specs**
- Génération de spécifications fonctionnelles (problème, données nécessaires, KPIs, architecture cible)
- Recommandations technologiques (build/buy, modèle propriétaire/open source, on-prem/cloud)
- Estimation budget, délai, équipe

**Module 6 — Pilotage**
- Tableau de bord exécutif (portefeuille d'opportunités, statut, ROI réalisé vs estimé)
- Alertes sur nouvelles opportunités détectées
- Reporting Board / Comex

### 3.2 Stack technique (cible)

- **Front :** React + TypeScript, Tailwind, shadcn/ui
- **Back :** Python (FastAPI) pour le moteur IA, Node.js pour l'API produit
- **Data :** PostgreSQL, ClickHouse (analytics), S3-compatible
- **IA :** LLM mixte (Claude pour le raisonnement, modèles open source fine-tunés pour la classification, embeddings propriétaires)
- **Infra :** Kubernetes sur AWS (région UE), option déploiement souverain OVHcloud / Scaleway pour clients sensibles
- **Sécurité :** ISO 27001 (cible année 2), SOC 2 Type II (année 3), conformité RGPD et AI Act dès le départ

### 3.3 Roadmap produit

**MVP (M0–M6)**
- 10 connecteurs prioritaires (M365, Google Workspace, Slack, Salesforce, HubSpot, ServiceNow, Jira, SAP, Workday, Notion)
- Bibliothèque de 50 patterns IA sur 3 fonctions (marketing, support, finance)
- Génération de rapport d'audit PDF / dashboard
- Onboarding self-service + accompagnement humain

**V1 (M6–M12)**
- 25 connecteurs, 120 patterns, 6 fonctions couvertes
- Module quantification ROI v1
- Intégration AI Act (classification de risque par cas d'usage)
- Marketplace de partenaires d'implémentation

**V2 (M12–M24)**
- Couverture full (10+ fonctions, 200+ patterns)
- Pilotage post-implémentation
- Mode multi-entités (groupes, filiales)
- Benchmarks sectoriels anonymisés

---

## 4. Analyse de marché

### 4.1 Taille du marché

**TAM (Total Addressable Market)**
- Marché mondial du conseil IA : 95 Md$ en 2025 (source : Grand View Research)
- Marché européen : ~28 Md€
- Marché plateformes d'évaluation/gouvernance IA : ~10 Md€

**SAM (Serviceable Available Market) — Europe occidentale**
- ETI/grandes PME 250–5 000 salariés : ~58 000 entreprises en France, DACH, UK, Benelux, Nordics
- Budget moyen audit/gouvernance IA : ~110 k€/an
- SAM = ~6,4 Md€

**SOM (Serviceable Obtainable Market) à 5 ans**
- Objectif 2 % de pénétration du SAM = ~120 M€
- Soit ~2 000 clients à un ACV moyen de 60 k€

### 4.2 Tendances favorables
- **AI Act européen** entré en application progressive 2025–2027 : oblige les entreprises à cartographier leurs systèmes IA → besoin d'un outil de gouvernance
- **Pression du board** sur les COMEX : 91 % des dirigeants disent que l'IA est une priorité stratégique (BCG 2025)
- **Pénurie de talents data/IA** : difficulté à recruter des data scientists → besoin de cadrer en amont
- **Maturité des LLM** : la génération de specs, l'analyse de processus deviennent industrialisables
- **Désillusion post-GenAI** : après l'enthousiasme 2023–2024, les directions cherchent du ROI mesurable

### 4.3 Concurrence

| Type | Acteurs | Forces | Faiblesses |
|---|---|---|---|
| Cabinets stratégie | BCG X, McKinsey QuantumBlack, Bain Vector | Marque, séniorité, réseau | Coût, durée, non scalable |
| Cabinets tech | Accenture, Capgemini, Sopra Steria | Capacité de delivery | Conflit d'intérêt (vendent du jour-homme) |
| Plateformes MLOps | Dataiku, DataRobot, Databricks | Outillage technique | Trop technique, pas de cadrage métier |
| Startups gouvernance IA | Credo AI, Holistic AI, Saidot | Conformité AI Act | Pas de détection d'opportunités |
| Pure players détection | Quelques pilotes émergents (US) | First mover | Pas d'acteur européen établi |

**Avantage concurrentiel défendable :**
- Bibliothèque propriétaire de patterns enrichie par chaque client (effet réseau de données anonymisées)
- Modèles fine-tunés sur des données métiers européennes
- Conformité AI Act native (différenciant vs concurrence US)

### 4.4 Personae cibles

**Persona 1 — Chief AI Officer / Chief Data Officer**
- Entreprise 1 000+ salariés
- Pression pour démontrer du ROI IA
- Budget annuel : 50–300 k€ pour outils de gouvernance/cadrage
- Douleur : justifier le portefeuille IA, prioriser

**Persona 2 — DSI / CTO**
- ETI 250–1 000 salariés, sans CDO
- Subit la demande IA des métiers
- Cherche à structurer sans payer un cabinet
- Budget : 20–80 k€/an

**Persona 3 — Directeur de la transformation**
- Mandat board, vision transverse
- Pas forcément technique
- Veut un outil pour piloter le portefeuille de cas d'usage

**Persona 4 — Directeur financier (acheteur final)**
- Veut un business case clair
- Sensible au ROI démontrable et au temps de retour

---

## 5. Stratégie Go-To-Market

### 5.1 Phasage géographique
- **Année 1 :** France (Paris, Lyon)
- **Année 2 :** DACH (Allemagne prioritaire), Benelux
- **Année 3 :** UK, Espagne, Italie, Nordics
- **Année 4–5 :** Amérique du Nord (Canada en bridge, puis US East Coast)

### 5.2 Canaux d'acquisition

**Outbound ciblé (60 % du pipeline année 1)**
- Équipe SDR (2 puis 4 personnes)
- Cibles : Top 5 000 entreprises européennes éligibles
- Séquences multicanal (LinkedIn, email, téléphone)
- Account Based Marketing sur Top 200

**Content & Inbound (20 %)**
- Baromètre annuel "État de l'IA dans les ETI européennes"
- Webinaires sectoriels (1/mois)
- Études de cas chiffrées
- Présence keynote sur Big Data Paris, AI Summit, Vivatech

**Partenariats (20 %)**
- Intégrateurs régionaux (ESN de taille intermédiaire qui ne veulent pas développer leur propre méthodo)
- Cabinets de transformation
- Éditeurs ERP/CRM (programme partner Salesforce, SAP)
- Associations professionnelles (Numeum, CIGREF, AFAI)

### 5.3 Modèle de vente

**Cycle de vente cible :** 60 à 90 jours (vs 120 jours benchmark SaaS B2B mid-market)
- **Entrée :** audit gratuit de 1h + démo personnalisée
- **POC payant :** 8 k€ sur 4 semaines, déductible du contrat annuel
- **Closing :** contrat annuel, paiement trimestriel ou annuel d'avance

**Pricing**

| Plan | Cible | Prix annuel | Inclus |
|---|---|---|---|
| **Discover** | < 500 salariés | 18 k€ | 5 utilisateurs, 10 connecteurs, 1 fonction métier |
| **Scale** | 500–2 000 salariés | 48 k€ | 20 utilisateurs, connecteurs illimités, 4 fonctions, ROI tracking |
| **Enterprise** | 2 000+ salariés | À partir de 120 k€ | Illimité, multi-entités, SSO, on-prem option, CSM dédié |
| **Services** | Tous | 1 500 €/jour | Implémentation, formation, accompagnement |

### 5.4 Métriques GTM cibles

| KPI | Année 1 | Année 2 | Année 3 |
|---|---|---|---|
| Logos | 25 | 80 | 200 |
| ACV moyen | 35 k€ | 45 k€ | 55 k€ |
| ARR fin d'année | 0,9 M€ | 3,6 M€ | 6,5 M€ |
| CAC | 35 k€ | 28 k€ | 22 k€ |
| LTV/CAC | 2,1 | 3,4 | 5,2 |
| Net Revenue Retention | 105 % | 115 % | 125 % |
| Logo churn | 8 % | 6 % | 4 % |

---

## 6. Opérations

### 6.1 Organisation (à 36 mois — ~45 personnes)

**Tech & Produit (45 % — 20 pers.)**
- 1 CTO, 1 VP Engineering, 1 Head of AI
- 8 ingénieurs (4 back, 2 front, 2 ML/IA)
- 4 data scientists / AI researchers
- 2 product managers
- 2 designers
- 1 DevOps/SRE

**Go-to-Market (35 % — 16 pers.)**
- 1 CRO
- 1 Head of Marketing
- 6 Account Executives
- 4 SDR
- 2 Customer Success Managers
- 1 Head of Partnerships
- 1 Field Marketing

**Customer & Services (10 % — 5 pers.)**
- 1 Head of Customer Success
- 3 Implementation Consultants
- 1 Support

**Corporate (10 % — 4 pers.)**
- 1 CEO, 1 CFO, 1 Head of People, 1 Legal/Compliance

### 6.2 Process clés
- **Sécurité dès le départ :** RGPD by design, data residency UE, chiffrement bout-en-bout
- **Qualité produit :** NPS trimestriel cible > 50
- **Customer Success :** revue trimestrielle de portefeuille IA avec chaque client Scale/Enterprise
- **Veille concurrentielle :** mise à jour mensuelle de la bibliothèque de patterns

### 6.3 Conformité
- **RGPD :** DPO externe année 1, interne année 2
- **AI Act :** classification de chaque module produit, registre des systèmes IA
- **ISO 27001 :** certification cible Q4 année 2
- **SOC 2 Type II :** Q4 année 3 (pré-requis pour vendre aux grands groupes US)

---

## 7. Équipe (profil cible — fondateurs)

**CEO :** Expérience opérationnelle dans le conseil ou un éditeur SaaS B2B, vision produit-marché, réseau direction d'entreprises.

**CTO :** Background data/IA appliquée (ex-Big Tech, ex-startup IA), capable d'architecturer la plateforme et de recruter une équipe technique de premier plan.

**CRO / Head of Sales (recruté M6) :** Track record vente SaaS B2B 50–500 k€ ACV en Europe.

**Profil d'advisors recommandés :**
- 1 ex-Chief Data Officer d'un grand groupe (CAC40 ou DAX30)
- 1 ex-cadre d'un Big 4 ou cabinet de stratégie
- 1 chercheur référent en IA (ENS, INRIA, Mila, ETH Zurich)
- 1 partner d'un fonds VC tier 1 sur le segment SaaS B2B

---

## 8. Financements & Projections financières

### 8.1 Plan de financement

**Tour Seed (closing M0)**
- Montant : **1,8 M€**
- Dilution : 18–22 %
- Sources cibles : business angels tech (300 k€), fonds Seed FR/EU spécialisés B2B/IA (1,2 M€), BPI French Tech Seed / aides (300 k€)
- Use of proceeds :
  - Tech & produit : 55 %
  - GTM : 25 %
  - Corporate / runway : 20 %
- Runway : 18 mois jusqu'à Série A

**Tour Série A (closing M18)**
- Montant cible : **8 M€**
- Dilution : 20–25 %
- Conditions de levée : ARR ≥ 1,5 M€, ≥ 30 logos, NRR > 110 %
- Use of proceeds :
  - Expansion DACH/Benelux (40 %)
  - Renforcement produit / R&D IA (35 %)
  - Scale GTM (20 %)
  - Compliance & sécurité (5 %)

**Série B (envisagée M42–M48)** — conditionnelle à un ARR > 12 M€ : 20–30 M€ pour expansion internationale et accélération.

### 8.2 Compte de résultat prévisionnel (k€)

| Poste | A1 | A2 | A3 | A4 | A5 |
|---|---|---|---|---|---|
| ARR fin d'année | 900 | 3 600 | 6 500 | 13 000 | 24 000 |
| Revenus reconnus | 450 | 2 100 | 5 000 | 9 800 | 18 500 |
| Coût direct (hébergement, IA, services) | 180 | 720 | 1 500 | 2 700 | 4 600 |
| **Marge brute** | **270 (60 %)** | **1 380 (66 %)** | **3 500 (70 %)** | **7 100 (72 %)** | **13 900 (75 %)** |
| R&D | 600 | 1 600 | 2 400 | 3 500 | 5 000 |
| Sales & Marketing | 500 | 1 900 | 3 200 | 5 200 | 7 800 |
| G&A | 200 | 500 | 800 | 1 200 | 1 700 |
| **EBITDA** | **(1 030)** | **(2 620)** | **(2 900)** | **(2 800)** | **(600)** |
| EBITDA en % du revenu | -229 % | -125 % | -58 % | -29 % | -3 % |
| Cash burn cumulé | (1 200) | (3 800) | (6 800) | (9 500) | (10 200) |

Break-even EBITDA prévu en mi-A6. Cash break-even mi-A6 / début A7.

### 8.3 Hypothèses clés
- ACV moyen progressif : 35 → 65 k€ via montée en gamme et upsell
- Gross margin progressive : 60 → 75 % grâce à industrialisation et baisse coût LLM
- NRR > 120 % via upsell modules et expansion fonctionnelle
- CAC payback : 22 mois A1 → 14 mois A3 → 10 mois A5

### 8.4 Cap table cible post-Série A

| Actionnaire | % |
|---|---|
| Fondateurs | 48 % |
| ESOP (employés) | 12 % |
| Investisseurs Seed | 18 % |
| Investisseurs Série A | 22 % |

---

## 9. Roadmap stratégique 5 ans

**Année 1 — Product-Market Fit**
- MVP en production, 25 logos en France, 0,9 M€ ARR
- Validation ICP, méthodologie d'audit standardisée
- Levée seed 1,8 M€

**Année 2 — Expansion DACH/Benelux**
- 80 logos, 3,6 M€ ARR, ouverture Munich/Amsterdam
- Levée Série A 8 M€
- Recrutement CRO, doublage de l'équipe produit

**Année 3 — Industrialisation**
- 200 logos, 6,5 M€ ARR
- ISO 27001, SOC 2 Type II
- Marketplace de patterns sectoriels
- Premiers partenariats stratégiques (ESN, éditeurs)

**Année 4 — Leadership européen**
- 13 M€ ARR, présence dans 8 pays
- Lancement produit "AI Governance" (extension AI Act)
- Premiers clients US par effet de bord

**Année 5 — Exit potential**
- 24 M€ ARR, près du break-even
- Options : Série B pour conquête US, ou intérêt stratégique (Salesforce, ServiceNow, SAP, Microsoft, Big 4)
- Valorisation indicative : 8–12x ARR forward = 200–360 M€

---

## 10. Risques & Mitigations

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| Commoditisation par les LLM généralistes (un agent ChatGPT/Claude fait l'audit) | Moyenne | Élevé | Bibliothèque propriétaire de patterns, données client, conformité, services humains |
| Cycle de vente plus long que prévu | Élevée | Moyen | POC payant court, ROI démontrable, références client fortes |
| Concurrence US bien financée | Élevée | Moyen | Focus Europe + conformité AI Act = différenciation native |
| Difficulté de recrutement IA en France | Élevée | Moyen | Equity généreuse, remote-friendly UE, recrutement Pologne/Portugal |
| Changement réglementaire AI Act | Faible | Moyen | Veille juridique continue, conseil board avec expert AI Act |
| Dépendance LLM providers (OpenAI, Anthropic) | Moyenne | Élevé | Architecture multi-modèles, modèles open source en repli |
| Mauvaise réception marché ETI | Faible | Très élevé | Wave de pré-vente avant MVP, design partners (5 clients fondateurs) |
| Dilution excessive | Moyenne | Moyen | Levées séquencées, jalons clairs |

---

## 11. Indicateurs de succès — Synthèse

| Horizon | KPI cible |
|---|---|
| M6 | MVP livré, 5 design partners, 200 k€ ARR |
| M12 | 25 clients, 0,9 M€ ARR, NPS > 40 |
| M24 | 80 clients, 3,6 M€ ARR, NRR > 110 %, levée Série A |
| M36 | 200 clients, 6,5 M€ ARR, ISO 27001, expansion 5 pays |
| M60 | 24 M€ ARR, leadership européen, break-even atteint |

---

## 12. Conclusion

Le marché européen présente une fenêtre d'opportunité unique : la combinaison de l'AI Act, de la pression board sur le ROI IA et de l'absence d'acteur européen établi sur la détection automatisée d'opportunités crée un espace pour bâtir un leader régional défendable. La stratégie repose sur trois piliers :

1. **Un produit avec un effet réseau de données** (chaque client enrichit la bibliothèque de patterns)
2. **Une conformité native AI Act** (avantage durable face à la concurrence US)
3. **Un modèle SaaS scalable** avec une marge brute > 70 % atteignable en 3 ans

Avec 1,8 M€ de seed et une exécution disciplinée du GTM, le projet peut atteindre 6,5 M€ d'ARR à 3 ans et constituer une cible d'acquisition stratégique ou une candidate à une Série B ambitieuse pour la conquête du marché nord-américain.
