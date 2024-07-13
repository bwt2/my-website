/*
    Parses date field in json file into string representation
*/

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

export function parseExperienceDate(dateString){
    if (!dateString) return "";
    if (dateString.toUpperCase() === "PRESENT") return "Present";
    const date = new Date(dateString);
    const output = monthNames[date.getMonth()] + " " + date.getFullYear();
    return output;
}