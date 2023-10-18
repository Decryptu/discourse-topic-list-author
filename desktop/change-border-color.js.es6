// Filename: desktop/change-border-color.js.es6

function initializePlugin(api) {
  const adminUsernames = ['wil', 'decrypt', 'prof.chaine', 'thomas', 'cyp', 'coban', 'virtus', 'robin'];

  api.modifyClass('component:topic-list-item', {
    didInsertElement() {
      this._super(...arguments);

      const topicCreatorUsername = this.topic.creator_username;

      console.log('Pseudo du créateur du sujet :', topicCreatorUsername);

      if (adminUsernames.includes(topicCreatorUsername)) {
        console.log('Le créateur du sujet est un administrateur. Modification de la couleur de la bordure...');
        Ember.run.scheduleOnce('afterRender', this, function() {
          this.$().css('border', '1px solid #71A9EC');
          console.log('Couleur de la bordure modifiée pour le sujet créé par', topicCreatorUsername);
        });
      } else {
        console.log('Le créateur du sujet n\'est pas un administrateur. Aucune modification de la couleur de la bordure.');
      }
    }
  });
}

export default {
  name: 'change-border-color',
  initialize: initializePlugin
};
