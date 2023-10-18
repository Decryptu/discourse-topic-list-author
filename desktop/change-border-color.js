// Définir la liste des noms d'utilisateur des administrateurs
const adminUsernames = ['wil', 'decrypt', 'prof.chaine', 'thomas', 'cyp', 'coban', 'virtus', 'robin'];
console.log('La liste des administrateurs :', adminUsernames);

// Réouvrir la vue TopicListItemView pour ajouter une logique supplémentaire
api.modifyClass('component:topic-list-item', {
  didReceiveAttrs() {
    this._super(...arguments);  // Appeler la méthode parente didReceiveAttrs
    
    const topicCreatorUsername = this.get('topic.creator.username');
    console.log('Pseudo du créateur du sujet :', topicCreatorUsername);

    // Vérifier si le créateur du sujet est un administrateur
    if (adminUsernames.includes(topicCreatorUsername)) {
      console.log('Le créateur du sujet est un administrateur. Modification de la couleur de la bordure...');
      
      // Modifier la couleur de la bordure si le créateur du sujet est un administrateur
      Ember.run.scheduleOnce('afterRender', this, function() {
        this.$().closest('.topic-list-item').css('border', '1px solid #71A9EC');
        console.log('Couleur de la bordure modifiée pour le sujet créé par', topicCreatorUsername);
      });
    } else {
      console.log('Le créateur du sujet n\'est pas un administrateur. Aucune modification de la couleur de la bordure.');
    }
  }
});
