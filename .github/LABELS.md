# GitHub Labels pour QSOS

Ce document décrit les labels utilisés pour organiser les issues et pull requests du projet QSOS.

## Labels de Type

### 🐛 `bug`
**Couleur:** `#d73a4a`
**Description:** Quelque chose ne fonctionne pas correctement

### ✨ `enhancement`
**Couleur:** `#a2eeef`
**Description:** Nouvelle fonctionnalité ou amélioration

### 📚 `documentation`
**Couleur:** `#0075ca`
**Description:** Améliorations ou ajouts à la documentation

### ♻️ `refactoring`
**Couleur:** `#fbca04`
**Description:** Refactoring du code sans changement de fonctionnalité

### ⚡ `performance`
**Couleur:** `#1d76db`
**Description:** Améliorations de performance

### 🔒 `security`
**Couleur:** `#ee0701`
**Description:** Problème de sécurité

### ✅ `testing`
**Couleur:** `#0e8a16`
**Description:** Lié aux tests

## Labels de Priorité

### 🔥 `priority: critical`
**Couleur:** `#b60205`
**Description:** Nécessite une attention immédiate

### ⚠️ `priority: high`
**Couleur:** `#d93f0b`
**Description:** Priorité élevée

### 📌 `priority: medium`
**Couleur:** `#fbca04`
**Description:** Priorité moyenne

### 🔽 `priority: low`
**Couleur:** `#0e8a16`
**Description:** Priorité basse

## Labels de Statut

### 🚦 `needs-triage`
**Couleur:** `#ededed`
**Description:** Nécessite une évaluation par l'équipe

### 🔍 `needs-investigation`
**Couleur:** `#e99695`
**Description:** Nécessite plus d'investigation

### ✋ `blocked`
**Couleur:** `#d73a4a`
**Description:** Bloqué par quelque chose d'autre

### 🎯 `ready`
**Couleur:** `#0e8a16`
**Description:** Prêt à être travaillé

### 🚧 `in-progress`
**Couleur:** `#fbca04`
**Description:** En cours de développement

### ✅ `ready-for-review`
**Couleur:** `#0075ca`
**Description:** Prêt pour la revue de code

## Labels de Difficulté

### 🌱 `good first issue`
**Couleur:** `#7057ff`
**Description:** Bon pour les nouveaux contributeurs

### 🎓 `help wanted`
**Couleur:** `#008672`
**Description:** Aide supplémentaire demandée

### 💪 `advanced`
**Couleur:** `#5319e7`
**Description:** Nécessite des connaissances avancées

## Labels de Catégorie

### 🎨 `frontend`
**Couleur:** `#c2e0c6`
**Description:** Lié au frontend (Vue.js, UI/UX)

### ⚙️ `backend`
**Couleur:** `#c5def5`
**Description:** Lié au backend (API, serveur)

### 🗄️ `database`
**Couleur:** `#fef2c0`
**Description:** Lié à la base de données

### 🌐 `i18n`
**Couleur:** `#bfdadc`
**Description:** Internationalisation et traductions

### 🔧 `devops`
**Couleur:** `#d4c5f9`
**Description:** CI/CD, déploiement, infrastructure

### ♿ `accessibility`
**Couleur:** `#f9d0c4`
**Description:** Accessibilité (a11y)

## Labels Spéciaux

### 💥 `breaking-change`
**Couleur:** `#e99695`
**Description:** Introduit un changement cassant la compatibilité

### 🔄 `dependencies`
**Couleur:** `#0366d6`
**Description:** Mise à jour de dépendances

### ❓ `question`
**Couleur:** `#d876e3`
**Description:** Question ou demande d'information

### 💬 `discussion`
**Couleur:** `#cc317c`
**Description:** Nécessite une discussion

### ❌ `wontfix`
**Couleur:** `#ffffff`
**Description:** Ne sera pas corrigé

### 🔂 `duplicate`
**Couleur:** `#cfd3d7`
**Description:** Issue ou PR dupliquée

### 🎉 `epic`
**Couleur:** `#3e4b9e`
**Description:** Grande fonctionnalité composée de plusieurs issues

## Comment appliquer les labels

### Pour les mainteneurs
1. Utilisez le label `needs-triage` pour les nouvelles issues
2. Après triage, ajoutez les labels de type, priorité et catégorie appropriés
3. Ajoutez un label de difficulté si approprié
4. Mettez à jour le statut au fur et à mesure de l'avancement

### Pour les contributeurs
Les templates d'issues appliquent automatiquement certains labels de base. Les mainteneurs ajouteront les labels supplémentaires appropriés.

## Création des labels

Pour créer ces labels sur GitHub, vous pouvez utiliser le script suivant avec GitHub CLI :

```bash
# Installation de GitHub CLI si nécessaire
# https://cli.github.com/

# Type labels
gh label create "bug" -c d73a4a -d "Quelque chose ne fonctionne pas correctement"
gh label create "enhancement" -c a2eeef -d "Nouvelle fonctionnalité ou amélioration"
gh label create "documentation" -c 0075ca -d "Améliorations ou ajouts à la documentation"
gh label create "refactoring" -c fbca04 -d "Refactoring du code sans changement de fonctionnalité"
gh label create "performance" -c 1d76db -d "Améliorations de performance"
gh label create "security" -c ee0701 -d "Problème de sécurité"
gh label create "testing" -c 0e8a16 -d "Lié aux tests"

# Priority labels
gh label create "priority: critical" -c b60205 -d "Nécessite une attention immédiate"
gh label create "priority: high" -c d93f0b -d "Priorité élevée"
gh label create "priority: medium" -c fbca04 -d "Priorité moyenne"
gh label create "priority: low" -c 0e8a16 -d "Priorité basse"

# Status labels
gh label create "needs-triage" -c ededed -d "Nécessite une évaluation par l'équipe"
gh label create "needs-investigation" -c e99695 -d "Nécessite plus d'investigation"
gh label create "blocked" -c d73a4a -d "Bloqué par quelque chose d'autre"
gh label create "ready" -c 0e8a16 -d "Prêt à être travaillé"
gh label create "in-progress" -c fbca04 -d "En cours de développement"
gh label create "ready-for-review" -c 0075ca -d "Prêt pour la revue de code"

# Difficulty labels
gh label create "good first issue" -c 7057ff -d "Bon pour les nouveaux contributeurs"
gh label create "help wanted" -c 008672 -d "Aide supplémentaire demandée"
gh label create "advanced" -c 5319e7 -d "Nécessite des connaissances avancées"

# Category labels
gh label create "frontend" -c c2e0c6 -d "Lié au frontend (Vue.js, UI/UX)"
gh label create "backend" -c c5def5 -d "Lié au backend (API, serveur)"
gh label create "database" -c fef2c0 -d "Lié à la base de données"
gh label create "i18n" -c bfdadc -d "Internationalisation et traductions"
gh label create "devops" -c d4c5f9 -d "CI/CD, déploiement, infrastructure"
gh label create "accessibility" -c f9d0c4 -d "Accessibilité (a11y)"

# Special labels
gh label create "breaking-change" -c e99695 -d "Introduit un changement cassant la compatibilité"
gh label create "dependencies" -c 0366d6 -d "Mise à jour de dépendances"
gh label create "question" -c d876e3 -d "Question ou demande d'information"
gh label create "discussion" -c cc317c -d "Nécessite une discussion"
gh label create "wontfix" -c ffffff -d "Ne sera pas corrigé"
gh label create "duplicate" -c cfd3d7 -d "Issue ou PR dupliquée"
gh label create "epic" -c 3e4b9e -d "Grande fonctionnalité composée de plusieurs issues"