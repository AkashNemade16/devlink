export const selectImages = (links:any) => {
     const images = Array.isArray(links) ? links.map((link:any) => {
        switch (link.type) {
            case "Github":
              return "/images/icon-github.svg";
            case "Codewars":
              return "/images/icon-codewars.svg";
            case "Stackoverflow":
              return "/images/icon-stack-overflow.svg";
            case "FrontendMentor":
              return "/images/icon-frontend-mentor.svg";
            case "LinkedIn":
              return "/images/icon-linkedin.svg";
            case "Twitter":
              return "/images/icon-twitter.svg";
            case "Hashnode":
              return "/images/icon-hashnode.svg";
            case "Youtube":
              return "/images/icon-youtube.svg";
            case "Facebook":
              return "/images/icon-facebook.svg";
            case "Gitlab":
              return "/images/icon-gitlab.svg";
            case "Codepen":
              return "/images/icon-codepen.svg";
            case "Twitch":
              return "/images/icon-twitch.svg";
            case "Freecodecamp":
              return "/images/icon-freecodecamp.svg";
            default:
              return "/images/icon-github.svg";
          }
    }):null;
    return images;
}