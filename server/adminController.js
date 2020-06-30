module.exports = {
  async getAllEvents(req, res) {
    const db = req.app.get("db");
    const { user_id } = req.session.user;
    db.get_all_events([user_id]).then(events => res.status(200).send(events));
  },
  async tracker(req, res) {
    const db = req.app.get("db");
    const { user_id } = req.session.user;
    const { email, timestamp, event_type } = req.body;
    const tracker = await db.create_tracker([
        email,
        timestamp,
        event_type,
        user_id
    ]);
    res.status(200).send(tracker);
  },
};
