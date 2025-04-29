export async function deleteChat(sock, jid, msg) {
  await sock.chatModify(
    {
      delete: true,
      lastMessages: [
        {
          key: msg.key,
          messageTimestamp: msg.messageTimestamp,
        },
      ],
    },
    jid
  );
}
