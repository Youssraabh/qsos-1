# Guide de Création d'Issues pour QSOS

Ce guide vous aidera à créer des issues de qualité pour le projet Eclipse QSOS.

## Table des Matières

1. [Avant de créer une issue](#avant-de-créer-une-issue)
2. [Types d'issues](#types-dissues)
3. [Bonnes pratiques](#bonnes-pratiques)
4. [Structure d'une bonne issue](#structure-dune-bonne-issue)
5. [Labels et catégorisation](#labels-et-catégorisation)
6. [Exemples d'issues bien formatées](#exemples-dissues-bien-formatées)

## Avant de créer une issue

### 1. Recherchez les issues existantes
- Utilisez la barre de recherche GitHub pour vérifier si une issue similaire existe déjà
- Consultez les issues fermées également (`is:issue is:closed`)
- Si vous trouvez une issue similaire, ajoutez un commentaire ou un 👍 au lieu de créer un doublon

### 2. Vérifiez la documentation
- Consultez le [README.md](../README.md)
- Lisez la [documentation](../docs/content/)
- Vérifiez le [CONTRIBUTING.md](../CONTRIBUTING.md)

### 3. Assurez-vous que c'est le bon dépôt
- Ce dépôt est pour l'application QSOS principale
- Pour le site web du projet : [eclipse-qsos/project-website](https://github.com/eclipse-qsos/project-website)

## Types d'issues

### 🐛 Bug Report
Utilisez ce type quand quelque chose ne fonctionne pas comme prévu.

**Quand l'utiliser :**
- Une fonctionnalité existante ne fonctionne pas
- Vous rencontrez une erreur
- Le comportement est différent de la documentation

**Template disponible :** Oui

### ✨ Feature Request
Utilisez ce type pour proposer une nouvelle fonctionnalité ou amélioration.

**Quand l'utiliser :**
- Vous avez une idée de nouvelle fonctionnalité
- Vous souhaitez améliorer une fonctionnalité existante
- Vous voulez proposer une amélioration UX/UI

**Template disponible :** Oui

### 📚 Documentation
Utilisez ce type pour les problèmes liés à la documentation.

**Quand l'utiliser :**
- Documentation manquante
- Documentation incorrecte ou obsolète
- Documentation peu claire
- Erreur de traduction
- Suggestion d'amélioration de la documentation

**Template disponible :** Oui

## Bonnes pratiques

### ✅ À FAIRE

1. **Titre clair et descriptif**
   - ✅ `[Bug] L'export PDF échoue pour les grilles avec plus de 50 critères`
   - ❌ `Export ne marche pas`

2. **Fournir du contexte**
   - Version de Node.js/Bun
   - Système d'exploitation
   - Navigateur (si applicable)
   - Étapes de reproduction

3. **Être précis**
   - Décrivez ce que vous attendiez
   - Décrivez ce qui s'est réellement passé
   - Incluez les messages d'erreur complets

4. **Ajouter des preuves**
   - Captures d'écran
   - Logs console
   - Vidéos si nécessaire
   - Snippets de code

5. **Utiliser le bon template**
   - Choisissez le template approprié
   - Remplissez toutes les sections requises

6. **Respecter le code de conduite**
   - Soyez respectueux et professionnel
   - Consultez [CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md)

### ❌ À ÉVITER

1. **Titres vagues**
   - ❌ `Ça marche pas`
   - ❌ `Problème`
   - ❌ `Help!!!`

2. **Informations manquantes**
   - Ne pas fournir d'étapes de reproduction
   - Ne pas spécifier l'environnement
   - Ne pas inclure les messages d'erreur

3. **Dupliquer les issues**
   - Créer une nouvelle issue sans vérifier les existantes
   - Rouvrir une issue fermée sans justification

4. **Mélanger plusieurs problèmes**
   - Une issue = un problème
   - Créez des issues séparées pour des problèmes distincts

5. **Demandes non constructives**
   - "Cette fonctionnalité est nulle"
   - Critique sans proposition d'amélioration

## Structure d'une bonne issue

### Pour un Bug Report

```markdown
## Description du bug
[Description claire et concise du bug]

## Étapes pour reproduire
1. Aller à '...'
2. Cliquer sur '...'
3. Voir l'erreur

## Comportement attendu
[Ce qui devrait se passer]

## Comportement actuel
[Ce qui se passe réellement]

## Environnement
- OS: Windows 11
- Node version: 20.11.0
- Bun version: 1.0.25
- Navigateur: Chrome 120.0.6099.130

## Logs / Messages d'erreur
```
[Collez les logs ici]
```

## Captures d'écran
[Si applicable]

## Contexte additionnel
[Toute autre information pertinente]
```

### Pour une Feature Request

```markdown
## Problème à résoudre
[Décrivez le problème que cette fonctionnalité résoudrait]

## Solution proposée
[Décrivez votre solution idéale]

## Alternatives considérées
[Autres solutions envisagées]

## Contexte additionnel
- Cas d'usage spécifiques
- Exemples d'implémentation
- Mockups ou wireframes

## Contribution
- [ ] Je suis prêt(e) à contribuer à cette fonctionnalité
```

### Pour la Documentation

```markdown
## Type de problème
- [ ] Documentation manquante
- [ ] Documentation incorrecte
- [ ] Documentation peu claire
- [ ] Erreur de traduction
- [ ] Suggestion d'amélioration

## Emplacement
- URL: https://...
- Fichier: docs/content/...
- Section: ...

## Description du problème
[Ce qui ne va pas]

## Suggestion de correction
[Comment l'améliorer]
```

## Labels et catégorisation

Les mainteneurs du projet ajouteront les labels appropriés. Pour référence :

### Labels automatiques (via templates)
- `bug` + `needs-triage` (Bug Report)
- `enhancement` + `needs-triage` (Feature Request)
- `documentation` + `needs-triage` (Documentation)

### Labels supplémentaires ajoutés par les mainteneurs

**Priorité :**
- `priority: critical` - Problème bloquant critique
- `priority: high` - Priorité élevée
- `priority: medium` - Priorité moyenne
- `priority: low` - Priorité basse

**Catégorie :**
- `frontend` - Interface utilisateur
- `backend` - API et serveur
- `database` - Base de données
- `i18n` - Internationalisation
- `devops` - CI/CD, déploiement
- `accessibility` - Accessibilité

**Difficulté :**
- `good first issue` - Bon pour débuter
- `help wanted` - Aide recherchée
- `advanced` - Nécessite expertise

Consultez [LABELS.md](LABELS.md) pour la liste complète.

## Exemples d'issues bien formatées

### Exemple 1 : Bug Report

**Titre :** `[Bug] L'authentification GitHub échoue en mode production`

**Corps :**
```markdown
## Description du bug
L'authentification OAuth GitHub fonctionne correctement en développement mais échoue systématiquement en production avec une erreur 401.

## Étapes pour reproduire
1. Déployer l'application en production
2. Cliquer sur "Se connecter avec GitHub"
3. Autoriser l'application sur GitHub
4. Être redirigé vers l'application
5. Observer l'erreur 401

## Comportement attendu
L'utilisateur devrait être authentifié et redirigé vers le dashboard.

## Comportement actuel
Une erreur 401 "Unauthorized" est retournée et l'utilisateur reste non authentifié.

## Environnement
- OS: Ubuntu 22.04 LTS
- Node version: 20.11.0
- Environnement: Production (Vercel)
- Navigateur: Chrome 120.0.6099.130

## Logs / Messages d'erreur
```
Error: OAuth callback failed
  at OAuthHandler (/app/server/routes/auth/github.get.ts:15:3)
  Status: 401 Unauthorized
```

## Variables d'environnement
- ✅ NUXT_OAUTH_GITHUB_CLIENT_ID est défini
- ✅ NUXT_OAUTH_GITHUB_CLIENT_SECRET est défini
- ✅ NUXT_SESSION_PASSWORD est défini (32+ caractères)

## Contexte additionnel
Le problème a commencé après la mise à jour vers Nuxt 4.3.1. En développement local (localhost:3000), tout fonctionne parfaitement.
```

### Exemple 2 : Feature Request

**Titre :** `[Feature] Ajouter la possibilité d'exporter les évaluations au format CSV`

**Corps :**
```markdown
## Problème à résoudre
Actuellement, QSOS permet d'exporter les évaluations uniquement en PDF. Pour l'analyse de données et l'intégration avec d'autres outils (Excel, Python, R), un export CSV serait très utile.

## Solution proposée
Ajouter un bouton "Exporter en CSV" à côté du bouton "Exporter en PDF" existant dans la vue d'évaluation.

Le fichier CSV devrait contenir :
- Toutes les sections et critères
- Les scores pour chaque critère
- Les commentaires
- Les métadonnées (logiciel, version, date, auteur)

## Alternatives considérées
1. Export JSON - mais moins accessible pour les utilisateurs non-techniques
2. Export Excel (.xlsx) - mais nécessite une dépendance supplémentaire
3. API pour récupérer les données - nécessite des connaissances techniques

## Cas d'usage
1. Import dans Excel/LibreOffice pour analyse
2. Traitement avec Python/R pour visualisations
3. Import dans des outils BI
4. Archivage et traitement en masse

## Exemple de structure CSV
```csv
Section,Critère,Score,Poids,Commentaire
Maturité,Âge du projet,3,2,Projet actif depuis 5 ans
Maturité,Communauté,2,3,Communauté active mais de taille moyenne
...
```

## Contribution
- [x] Je suis prêt(e) à soumettre une Pull Request pour cette fonctionnalité
```

### Exemple 3 : Documentation

**Titre :** `[Docs] Ajouter un guide de déploiement pour Docker`

**Corps :**
```markdown
## Type de problème
- [x] Documentation manquante

## Emplacement
- Section: Deployment / Getting Started
- Fichier: docs/content/deployment.md (à créer)

## Description du problème
Il n'existe pas de documentation pour déployer QSOS avec Docker. Beaucoup d'utilisateurs utilisent Docker et cela faciliterait grandement le déploiement.

## Suggestion de correction
Créer une nouvelle page `docs/content/deployment/docker.md` qui contiendrait :

1. **Dockerfile de base**
   - Configuration optimale pour la production
   - Multi-stage build pour réduire la taille

2. **docker-compose.yml**
   - Configuration pour l'application
   - Configuration pour la documentation
   - Gestion des volumes pour les données

3. **Variables d'environnement**
   - Liste des variables nécessaires
   - Exemples de valeurs

4. **Commandes de déploiement**
   - Build
   - Run
   - Logs
   - Mise à jour

5. **Bonnes pratiques**
   - Sécurité
   - Performance
   - Monitoring

## Contexte additionnel
Je peux fournir un Dockerfile fonctionnel que j'utilise en production et qui pourrait servir de base.
```

## Conseils finaux

1. **Soyez patient** - Les mainteneurs sont des bénévoles
2. **Soyez constructif** - Proposez des solutions, pas seulement des problèmes
3. **Soyez précis** - Plus d'informations = résolution plus rapide
4. **Suivez votre issue** - Répondez aux questions des mainteneurs
5. **Contribuez** - Si vous le pouvez, proposez une Pull Request

## Ressources

- [Guide de contribution](../CONTRIBUTING.md)
- [Code de conduite](../CODE_OF_CONDUCT.md)
- [Documentation](../docs/content/)
- [Labels disponibles](LABELS.md)

## Questions ?

Si vous avez des questions sur la création d'issues :
- Consultez les [Discussions GitHub](https://github.com/eclipse-qsos/qsos/discussions)
- Contactez l'équipe à qsos-dev@eclipse.org