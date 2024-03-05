console.log("insert-button.js injected");

export default {
    name: 'insert-subscription-button',
    initialize() {
      const manageSubscriptionButton = document.createElement('li');
      manageSubscriptionButton.className = 'manage-subscription';
      
      manageSubscriptionButton.innerHTML = `
        <a href="https://cryptoast.memberful.com/auth/sign_in" class="btn no-text btn-flat profile-tab-btn">
          <svg class="fa d-icon d-icon-certificate svg-icon svg-string"><use href="#d-icon-certificate"></svg>
          <span class="item-label">Gérer mon abonnement</span>
        </a>
      `;
      
      const preferencesListItem = document.querySelector('#quick-access-profile .preferences');
      if (preferencesListItem) {
        preferencesListItem.insertAdjacentElement('afterend', manageSubscriptionButton);
      }
    }
  };
  