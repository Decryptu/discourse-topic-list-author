console.log("Subscription link script loaded.");

api.onPageChange(() => {
  if (api.getCurrentUser() !== null) { // Ensure the user is logged in
    api.addQuickAccessProfileItem({
      icon: "pencil-alt",
      href: "https://cryptoast.memberful.com/auth/sign_in",
      content: "Gérer mon abonnement"
    });
  }
});
