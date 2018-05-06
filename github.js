class Github {
  constructor() {
    this.client_id = '9834a32247f101563a78',
    this.client_secret = '3f403939d7aaa0adbd8e239947c3a499c93be03b',
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();


    return {
      profile,
      repos
    }
  }



}
