interface WorkHistory {
  img: string; // path to the image to show
  title: string;
  subtitle: string; // employer/org
  description: string[]; // array of responsibilities. each idx is a bullet point
  time: string; // duration of the job (ex: "Feb 2022 - Sept 2023")
}
