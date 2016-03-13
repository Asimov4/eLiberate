if(Meteor.isClient) {
	Template.messageTemplates.helpers ({
		meeting: function() {
			return Meetings.findOne({_id: Session.get("meetingId")});
		},

		messages: function() {
			return Messages.find({ meetingId: Session.get("meetingId")});
		},

		rulesetHeader: function() {
			return toCamelCase(Session.get("ruleset")) + "Header";
		},

		rulesetAgenda: function() {
			return toCamelCase(Session.get("ruleset")) + "Agenda";
		},

		rulesetMessages: function() {
			return toCamelCase(Session.get("ruleset")) + "Messages";
		},

		rulesetControls: function() {
			return toCamelCase(Session.get("ruleset")) + "Controls";
		},

		attendance: function() {
			return Attendees.find({meetingId: Session.get("meetingId")}).count();
		}
	});
 }
