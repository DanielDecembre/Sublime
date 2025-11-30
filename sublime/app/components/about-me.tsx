


export interface AboutMeData {
    name: string;
    bio:string;
    funfact: string[];

  
};

const aboutMe: AboutMeData = {
    name: "Daniel Decembre",
    bio: "A passionate developer with a love for open-source projects and community building.",
    funfact: [
        "Former Investor/Operating Owner of Restaurant",
        "Played College Football as outside linebacker",
        "Play 3 musical instruments",
        "Designer and builder of custom furniture",
    ]
};

export function getAboutMe(): AboutMeData {
    return aboutMe;
}
