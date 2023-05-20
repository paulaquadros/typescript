function accessUser(user: string | string[]) {
  if (typeof user === "string") {
    console.log(user, "accessed");
  } else {
    for (let i = 0; i < user.length; i++) {
      console.log(user[i], "accessed");
    }
  }
}

accessUser(["user1, user2"]);
accessUser("userUnique");
