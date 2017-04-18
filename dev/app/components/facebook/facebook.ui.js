export function facebookSkeleton(data){
  return `
    <div id="fb_display">
    <h1>${data.title}</h1>
      <button type="button" name="fblogin" id="fblogin">Login with Facebook
      </button>
      <div id="status"></div>
    </div>
  `;
}