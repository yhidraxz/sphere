class awaitingReplyService {
  constructor() {
    this.awaitingReply = new Map();
  }

  add(jid) {
    this.awaitingReply.set(jid, { sentAt: Date.now() });
  }

  remove(jid) {
    this.awaitingReply.delete(jid);
  }

  exists(jid) {
    return this.awaitingReply.has(jid);
  }
}

export const awaitingReplyService = new awaitingReplyService();
