class Github {
  constructor() {
    this.client_id = '9834a32247f101563a78',
    this.client_secret = '3f403939d7aaa0adbd8e239947c3a499c93be03b'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile= await profileResponse.json();

    return {
      profile
    }
  }

}
