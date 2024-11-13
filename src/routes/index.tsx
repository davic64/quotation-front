const routes = {
  auth: {
    login: "/login",
    register: "/register",
    resetPassword: "/reset-password",
  },
  dashboard: "/",
  clients: {
    list: "/clients",
    create: "/clients/new",
    details: "/clients/:id",
    edit: "/clients/:id/edit",
  },
  quotes: {
    list: "/quotes",
    create: "/quotes/new",
    details: "/quotes/:id",
    edit: "/quotes/:id/edit",
  },
  settings: "/settings",
};

export default routes;
