const idInst: number = 623105888585147;
const redirectUri: string = 'https://localhost:3000/profile/';
const secretInstAPI: string = 'bcd38ca925e05d0b020b1c1c45ea8728';
const auth: string = `https://api.instagram.com/oauth/authorize?client_id=${idInst}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;
const testUrl: any = document.location.href.match(/.*code=(.*)#_/);
const token: string = 'IGQVJVSkk4NnB3cU03Ym5LakE5QjdQejZA1SC1PSjBhTE5rM1dremczRjRCazZA5S05mdkZAnWVFUYlZAKaGFYcXVmQmRmMUpvejFXRFA1SFRQcl9OeWhWc0Itc2RpdmpLVUF2d3pXVUNkV2VRaXROUTNCeWtyY0NuZAEQzMW9z';

export default {
  idInst,
  redirectUri,
  secretInstAPI,
  auth,
  testUrl,
  token
};