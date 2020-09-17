class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
  }
  async addChat(message) {
    const now = new Date();
    // format a chat object
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    // save the chat document
    const response = await this.chats.add(chat);
    return response;
  }
}

const chatroom = new Chatroom("gaming", "alan69");

chatroom
  .addChat("it's a double messege")
  .then(() => console.log("chat added"))
  .catch((err) => console.log(err));
