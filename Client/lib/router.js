FlowRouter.route("/", {
  name: "home",
  action: function() {
    console.log("home");
    BlazeLayout.render("main", { content: "mainBody" });
  }
});
FlowRouter.route("/contact", {
  name: "contact",
  action: function() {
    BlazeLayout.render("main", { content: "contactTemplate" });
  }
});
FlowRouter.route("/about", {
  name: "about",
  action: function() {
    BlazeLayout.render("main", { content: "aboutTemplate" });
  }
});
FlowRouter.route("/meetings", {
  name: "meeting",
  action: function() {
    BlazeLayout.render("main", { content: "meetingsTemplate" });
  }
});
FlowRouter.route("/organizations", {
  name: "organization",
  action: function() {
    BlazeLayout.render("main", { content: "organizationsTemplate" });
  }
});