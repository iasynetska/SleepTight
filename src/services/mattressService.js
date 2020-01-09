import axios from "axios";

export const getMattress = async (category) => {
    const filterFunction = category === undefined ? mattress => true : mattress => mattress.category === category;
    return await axios
        .get("/data/mattress.json")
        .then((response) => {
            return response.data.filter(
                filterFunction
            )
        })
        .catch(err => {
            console.log(err);
            return null;
        });
};